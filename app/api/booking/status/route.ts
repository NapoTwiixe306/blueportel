import { NextResponse } from "next/server";

import { prisma } from "@/src/lib/db";
import { eurosFromCents } from "@/src/lib/booking/pricing";

// Statut d'une réservation (pour la page de confirmation après retour de Mollie).
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ error: "id manquant" }, { status: 400 });

  const r = await prisma.reservation.findUnique({
    where: { id },
    select: {
      status: true,
      property: true,
      checkIn: true,
      checkOut: true,
      nights: true,
      guests: true,
      depositCents: true,
      totalCents: true,
      guestEmail: true,
    },
  });

  if (!r) return NextResponse.json({ error: "introuvable" }, { status: 404 });

  return NextResponse.json({
    status: r.status,
    property: r.property,
    checkIn: r.checkIn.toISOString().slice(0, 10),
    checkOut: r.checkOut.toISOString().slice(0, 10),
    nights: r.nights,
    guests: r.guests,
    depositEur: eurosFromCents(r.depositCents),
    totalEur: eurosFromCents(r.totalCents),
    email: r.guestEmail,
  });
}
