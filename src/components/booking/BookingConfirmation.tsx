"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle2, XCircle, Loader2, Clock } from "lucide-react";

type Locale = "fr" | "en" | "nl";

type Status = "PENDING" | "PAID" | "CANCELLED" | "EXPIRED";

type StatusResponse = {
  status: Status;
  property: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  guests: number;
  depositEur: string;
  totalEur: string;
  email: string;
};

const T: Record<Locale, Record<string, string>> = {
  fr: {
    waiting: "Vérification du paiement…",
    paidTitle: "Réservation confirmée !",
    paidText: "Votre paiement a bien été reçu. Un récapitulatif a été envoyé à",
    paidText2: "Votre séjour est intégralement réglé et votre réservation est confirmée.",
    pendingTitle: "Paiement en cours",
    pendingText: "Nous attendons la confirmation de votre paiement. Cette page se met à jour automatiquement.",
    failTitle: "Paiement non finalisé",
    failText: "Votre réservation n'a pas pu être confirmée. Aucune somme n'a été retenue. Vous pouvez réessayer.",
    backHome: "Retour à l'accueil",
    retry: "Réessayer",
    nights: "nuits",
    deposit: "Montant payé",
    total: "Total séjour",
    notFound: "Réservation introuvable.",
  },
  en: {
    waiting: "Checking payment…",
    paidTitle: "Booking confirmed!",
    paidText: "Your payment was received. A summary has been sent to",
    paidText2: "Your stay is paid in full and your booking is confirmed.",
    pendingTitle: "Payment in progress",
    pendingText: "We're waiting for your payment confirmation. This page updates automatically.",
    failTitle: "Payment not completed",
    failText: "Your booking could not be confirmed. No amount was charged. You can try again.",
    backHome: "Back to home",
    retry: "Try again",
    nights: "nights",
    deposit: "Amount paid",
    total: "Stay total",
    notFound: "Booking not found.",
  },
  nl: {
    waiting: "Betaling controleren…",
    paidTitle: "Reservering bevestigd!",
    paidText: "Uw betaling is ontvangen. Een overzicht is verstuurd naar",
    paidText2: "Uw verblijf is volledig betaald en uw reservering is bevestigd.",
    pendingTitle: "Betaling bezig",
    pendingText: "We wachten op uw betalingsbevestiging. Deze pagina wordt automatisch bijgewerkt.",
    failTitle: "Betaling niet voltooid",
    failText: "Uw reservering kon niet worden bevestigd. Er is niets aangerekend. U kunt opnieuw proberen.",
    backHome: "Terug naar home",
    retry: "Opnieuw proberen",
    nights: "nachten",
    deposit: "Betaald bedrag",
    total: "Totaal verblijf",
    notFound: "Reservering niet gevonden.",
  },
};

export default function BookingConfirmation({ locale }: { locale: string }) {
  const lang: Locale = locale === "en" || locale === "nl" ? locale : "fr";
  const t = T[lang];

  const [data, setData] = useState<StatusResponse | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("id");
    if (!id) {
      setNotFound(true);
      setLoading(false);
      return;
    }
    let active = true;
    let tries = 0;

    const poll = async () => {
      try {
        const res = await fetch(`/api/booking/status?id=${id}`, { cache: "no-store" });
        if (res.status === 404) {
          if (active) setNotFound(true);
          return true;
        }
        const json = (await res.json()) as StatusResponse;
        if (active) {
          setData(json);
          setLoading(false);
        }
        // Continue à interroger tant que le paiement est PENDING (webhook en cours)
        return json.status !== "PENDING";
      } catch {
        return false;
      }
    };

    const run = async () => {
      const done = await poll();
      if (active) setLoading(false);
      if (!done && tries < 20) {
        tries += 1;
        setTimeout(run, 3000);
      }
    };
    run();

    return () => {
      active = false;
    };
  }, []);

  const card = "w-full max-w-lg rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 text-center shadow-sm";

  if (loading && !data) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className={card}>
          <Loader2 className="mx-auto h-8 w-8 animate-spin text-blue-600" aria-hidden="true" />
          <p className="mt-3 text-gray-600">{t.waiting}</p>
        </div>
      </div>
    );
  }

  if (notFound || !data) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className={card}>
          <p className="text-gray-600">{t.notFound}</p>
          <Link href={`/${lang}`} className="mt-4 inline-block font-semibold text-blue-600">
            {t.backHome}
          </Link>
        </div>
      </div>
    );
  }

  const summary = (
    <div className="mt-5 space-y-1 rounded-xl bg-gray-50 px-4 py-3 text-left text-sm text-gray-700">
      <p className="font-semibold capitalize text-gray-900">Blueportel {data.property}</p>
      <p>
        {data.checkIn} → {data.checkOut} · {data.nights} {t.nights}
      </p>
      <div className="flex justify-between">
        <span>{t.deposit}</span>
        <span className="font-semibold">{data.depositEur} €</span>
      </div>
      <div className="flex justify-between text-gray-500">
        <span>{t.total}</span>
        <span>{data.totalEur} €</span>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4 py-10">
      <div className={card}>
        {data.status === "PAID" && (
          <>
            <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" aria-hidden="true" />
            <h1 className="mt-3 text-xl font-bold text-gray-900">{t.paidTitle}</h1>
            <p className="mt-2 text-sm text-gray-600">
              {t.paidText} <span className="font-medium">{data.email}</span>. {t.paidText2}
            </p>
            {summary}
            <Link href={`/${lang}`} className="mt-5 inline-block font-semibold text-blue-600">
              {t.backHome}
            </Link>
          </>
        )}

        {data.status === "PENDING" && (
          <>
            <Clock className="mx-auto h-12 w-12 text-blue-500" aria-hidden="true" />
            <h1 className="mt-3 text-xl font-bold text-gray-900">{t.pendingTitle}</h1>
            <p className="mt-2 text-sm text-gray-600">{t.pendingText}</p>
            <Loader2 className="mx-auto mt-4 h-5 w-5 animate-spin text-blue-500" aria-hidden="true" />
            {summary}
          </>
        )}

        {(data.status === "CANCELLED" || data.status === "EXPIRED") && (
          <>
            <XCircle className="mx-auto h-12 w-12 text-red-500" aria-hidden="true" />
            <h1 className="mt-3 text-xl font-bold text-gray-900">{t.failTitle}</h1>
            <p className="mt-2 text-sm text-gray-600">{t.failText}</p>
            <Link
              href={`/${lang}/pages/reserver`}
              className="mt-5 inline-block rounded-full bg-blue-600 px-5 py-2.5 font-semibold text-white"
            >
              {t.retry}
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
