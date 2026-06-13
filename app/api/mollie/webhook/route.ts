import { NextResponse } from "next/server";
import { PaymentStatus } from "@mollie/api-client";

import { prisma } from "@/src/lib/db";
import { getMollie } from "@/src/lib/mollie";
import { isRangeAvailable } from "@/src/lib/booking/availability";
import type { AccommodationId } from "@/src/data/accommodations";

// Webhook Mollie : appelé à chaque changement de statut d'un paiement.
// Mollie envoie l'id du paiement en form-urlencoded ; on doit toujours répondre 200.
export async function POST(request: Request) {
  let paymentId: string | null = null;
  try {
    const form = await request.formData();
    paymentId = (form.get("id") as string) || null;
  } catch {
    paymentId = null;
  }

  if (!paymentId) return NextResponse.json({ ok: true });

  try {
    const mollie = getMollie();
    const payment = await mollie.payments.get(paymentId);
    const reservationId = (payment.metadata as { reservationId?: string } | null)?.reservationId;

    const reservation = reservationId
      ? await prisma.reservation.findUnique({ where: { id: reservationId } })
      : await prisma.reservation.findUnique({ where: { molliePaymentId: paymentId } });

    if (!reservation) return NextResponse.json({ ok: true });

    // Déjà traité
    if (reservation.status === "PAID" || reservation.status === "CANCELLED") {
      return NextResponse.json({ ok: true });
    }

    if (payment.status === PaymentStatus.paid) {
      // Anti double-résa : revérifie la dispo au moment de la confirmation
      const stillFree = await isRangeAvailable(
        reservation.property as AccommodationId,
        reservation.checkIn.toISOString().slice(0, 10),
        reservation.checkOut.toISOString().slice(0, 10),
        { excludeReservationId: reservation.id }
      );

      if (!stillFree) {
        // Conflit détecté → remboursement intégral + annulation
        let refundId: string | null = null;
        try {
          const refund = await mollie.paymentRefunds.create({
            paymentId,
            amount: payment.amount,
            description: "Conflit de dates — remboursement automatique",
          });
          refundId = refund.id;
        } catch {
          refundId = null;
        }
        await prisma.reservation.update({
          where: { id: reservation.id },
          data: { status: "CANCELLED", mollieRefundId: refundId },
        });
        return NextResponse.json({ ok: true });
      }

      await prisma.reservation.update({
        where: { id: reservation.id },
        data: { status: "PAID" },
      });
      return NextResponse.json({ ok: true });
    }

    // Paiement échoué / expiré / annulé
    if (
      payment.status === PaymentStatus.failed ||
      payment.status === PaymentStatus.canceled ||
      payment.status === PaymentStatus.expired
    ) {
      await prisma.reservation.update({
        where: { id: reservation.id },
        data: { status: payment.status === PaymentStatus.expired ? "EXPIRED" : "CANCELLED" },
      });
    }

    return NextResponse.json({ ok: true });
  } catch {
    // On répond 200 pour éviter les re-tentatives en boucle ; Mollie réessaiera plus tard si besoin
    return NextResponse.json({ ok: true });
  }
}
