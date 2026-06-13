import { NextResponse } from "next/server";

import { isAccommodationId } from "@/src/lib/availability/sources";
import { computeQuote, eurosFromCents } from "@/src/lib/booking/pricing";
import { isRangeAvailable } from "@/src/lib/booking/availability";

// Devis + disponibilité pour un séjour donné (appelé en direct par le formulaire).
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const property = searchParams.get("property");
  const checkIn = searchParams.get("checkIn") ?? "";
  const checkOut = searchParams.get("checkOut") ?? "";

  if (!isAccommodationId(property)) {
    return NextResponse.json({ error: "Logement invalide" }, { status: 400 });
  }

  const result = computeQuote(property, checkIn, checkOut);
  if ("error" in result) {
    return NextResponse.json({ available: false, ...result.error }, { status: 200 });
  }

  let available = true;
  try {
    available = await isRangeAvailable(property, checkIn, checkOut);
  } catch {
    available = false;
  }

  const q = result.quote;
  return NextResponse.json({
    available,
    ...q,
    eur: {
      total: eurosFromCents(q.totalCents),
      deposit: eurosFromCents(q.depositCents),
      balance: eurosFromCents(q.balanceCents),
      nightly: eurosFromCents(q.nightlyCents),
    },
  });
}
