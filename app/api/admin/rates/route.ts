import { NextResponse } from "next/server";

import { isAdminAuthed } from "@/src/lib/admin";
import { ensureRatesSeeded, getRates, saveRates, type RateUpdate } from "@/src/lib/booking/rates";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!(await isAdminAuthed())) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }
  try {
    await ensureRatesSeeded();
  } catch {
    // DB indispo : on renverra les valeurs par défaut via getRates()
  }
  const rates = await getRates();
  return NextResponse.json({ rates });
}

export async function POST(request: Request) {
  if (!(await isAdminAuthed())) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  let updates: RateUpdate[] = [];
  try {
    const body = (await request.json()) as { rates?: RateUpdate[] };
    updates = body.rates ?? [];
  } catch {
    return NextResponse.json({ error: "Requête invalide" }, { status: 400 });
  }

  try {
    await saveRates(updates);
  } catch {
    return NextResponse.json({ error: "Enregistrement impossible (base indisponible)" }, { status: 503 });
  }

  const rates = await getRates();
  return NextResponse.json({ ok: true, rates });
}
