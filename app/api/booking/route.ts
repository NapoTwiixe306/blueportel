import { NextResponse } from "next/server";

import { prisma } from "@/src/lib/db";
import { icalSources, isAccommodationId } from "@/src/lib/availability/sources";
import { computeQuote, eurosFromCents, MIN_LEAD_DAYS } from "@/src/lib/booking/pricing";
import { getRates } from "@/src/lib/booking/rates";
import { isRangeAvailable } from "@/src/lib/booking/availability";
import { getMollie, siteBaseUrl } from "@/src/lib/mollie";

const HOLD_MINUTES = 20; // durée du verrou d'une réservation PENDING

type Body = {
  property?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: number;
  guestName?: string;
  guestEmail?: string;
  guestPhone?: string;
  message?: string;
  locale?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function todayIso(): string {
  return new Date().toISOString().slice(0, 10);
}

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Requête invalide" }, { status: 400 });
  }

  const { property, checkIn, checkOut } = body;
  const locale = body.locale === "en" || body.locale === "nl" ? body.locale : "fr";

  if (!property || !isAccommodationId(property)) {
    return NextResponse.json({ error: "Logement invalide" }, { status: 400 });
  }
  // Sécurité : pas de réservation directe sans calendrier OTA lisible (sinon vente à l'aveugle)
  if (icalSources[property].length === 0) {
    return NextResponse.json(
      { error: "Réservation en ligne pas encore disponible pour ce logement. Contactez-nous.", code: "NOT_BOOKABLE" },
      { status: 400 }
    );
  }
  if (!checkIn || !checkOut) {
    return NextResponse.json({ error: "Dates manquantes" }, { status: 400 });
  }
  const guests = Number(body.guests);
  if (!Number.isInteger(guests) || guests < 1 || guests > 12) {
    return NextResponse.json({ error: "Nombre de voyageurs invalide" }, { status: 400 });
  }
  const guestName = (body.guestName ?? "").trim();
  const guestEmail = (body.guestEmail ?? "").trim();
  if (guestName.length < 2) {
    return NextResponse.json({ error: "Nom requis" }, { status: 400 });
  }
  if (!EMAIL_RE.test(guestEmail)) {
    return NextResponse.json({ error: "Email invalide" }, { status: 400 });
  }
  // Téléphone obligatoire (indicatif + numéro)
  const guestPhone = (body.guestPhone ?? "").trim();
  if (!/^\+\d{1,4}\s/.test(guestPhone) || guestPhone.replace(/\D/g, "").length < 8) {
    return NextResponse.json({ error: "Téléphone invalide (indicatif + numéro requis)" }, { status: 400 });
  }

  // Délai minimum avant arrivée (limite le risque de double-résa via synchro OTA différée)
  const minArrival = new Date(`${todayIso()}T00:00:00Z`);
  minArrival.setUTCDate(minArrival.getUTCDate() + MIN_LEAD_DAYS);
  if (new Date(`${checkIn}T00:00:00Z`) < minArrival) {
    return NextResponse.json(
      {
        error: `Réservation en ligne possible à partir de ${MIN_LEAD_DAYS} jours avant l'arrivée. Pour un séjour plus proche, contactez-nous directement.`,
        code: "LEAD_TIME",
      },
      { status: 400 }
    );
  }

  // Prix + règles (nuits min, dates valides)
  const rates = await getRates();
  const quoteResult = computeQuote(property, checkIn, checkOut, rates);
  if ("error" in quoteResult) {
    return NextResponse.json({ error: quoteResult.error.message, code: quoteResult.error.code }, { status: 400 });
  }
  const quote = quoteResult.quote;

  // Disponibilité avant création
  try {
    if (!(await isRangeAvailable(property, checkIn, checkOut))) {
      return NextResponse.json(
        { error: "Ces dates ne sont plus disponibles.", code: "UNAVAILABLE" },
        { status: 409 }
      );
    }
  } catch {
    return NextResponse.json({ error: "Calendrier indisponible, réessayez." }, { status: 503 });
  }

  const expiresAt = new Date(Date.now() + HOLD_MINUTES * 60_000);

  // Crée le verrou PENDING puis re-vérifie en excluant ce verrou (réduit la course)
  let reservation;
  try {
    reservation = await prisma.reservation.create({
      data: {
        property,
        checkIn: new Date(`${checkIn}T00:00:00Z`),
        checkOut: new Date(`${checkOut}T00:00:00Z`),
        nights: quote.nights,
        guests,
        guestName,
        guestEmail,
        guestPhone,
        message: body.message?.trim() || null,
        totalCents: quote.totalCents,
        depositCents: quote.depositCents,
        status: "PENDING",
        expiresAt,
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Service de réservation indisponible. Réessayez plus tard." },
      { status: 503 }
    );
  }

  try {
    if (!(await isRangeAvailable(property, checkIn, checkOut, { excludeReservationId: reservation.id }))) {
      await prisma.reservation.update({
        where: { id: reservation.id },
        data: { status: "CANCELLED" },
      });
      return NextResponse.json(
        { error: "Ces dates viennent d'être réservées.", code: "UNAVAILABLE" },
        { status: 409 }
      );
    }
  } catch {
    await prisma.reservation.update({ where: { id: reservation.id }, data: { status: "CANCELLED" } });
    return NextResponse.json({ error: "Calendrier indisponible, réessayez." }, { status: 503 });
  }

  // Paiement Mollie (séjour réglé en totalité)
  const base = siteBaseUrl();
  const isHttps = base.startsWith("https://");
  try {
    const mollie = getMollie();
    const payment = await mollie.payments.create({
      amount: { currency: "EUR", value: eurosFromCents(quote.depositCents) },
      description: `Séjour Blueportel ${property} ${checkIn} → ${checkOut}`,
      redirectUrl: `${base}/${locale}/pages/reservation/confirmation?id=${reservation.id}`,
      // Mollie refuse les webhooks non publics (localhost) — on l'omet alors en dev
      ...(isHttps ? { webhookUrl: `${base}/api/mollie/webhook` } : {}),
      metadata: { reservationId: reservation.id },
    });

    await prisma.reservation.update({
      where: { id: reservation.id },
      data: { molliePaymentId: payment.id },
    });

    const checkoutUrl = payment.getCheckoutUrl();
    if (!checkoutUrl) throw new Error("URL de paiement manquante");

    return NextResponse.json({ reservationId: reservation.id, checkoutUrl });
  } catch (err) {
    await prisma.reservation.update({ where: { id: reservation.id }, data: { status: "CANCELLED" } });
    const message = err instanceof Error && err.message === "MOLLIE_API_KEY manquante"
      ? "Paiement non configuré (clé Mollie manquante)."
      : "Échec de l'initialisation du paiement.";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
