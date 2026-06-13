import { NextResponse } from "next/server";

import {
  buildDays,
  nextAvailablePeriod,
  todayIso,
  type AvailabilityDay,
  type AvailablePeriod,
} from "@/src/lib/availability/ical";
import { icalSources, isAccommodationId } from "@/src/lib/availability/sources";
import { getBlockedDays } from "@/src/lib/booking/availability";

// Fenêtre affichée. Pas de temps réel nécessaire pour un gîte.
const WINDOW_MONTHS = 14;

type AvailabilityResponse = {
  property: string;
  updatedAt: string;
  configured: boolean;
  nextAvailable: AvailablePeriod | null;
  days: AvailabilityDay[];
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const property = searchParams.get("property");

  if (!isAccommodationId(property)) {
    return NextResponse.json(
      { error: "Paramètre 'property' invalide (horizon | prestige)" },
      { status: 400 }
    );
  }

  const from = todayIso();

  // Pas de calendrier OTA configuré (ex. Prestige) : réponse valide mais vide.
  // (On ne peut pas afficher de dispo fiable sans lire les dates bloquées des plateformes.)
  if (icalSources[property].length === 0) {
    const payload: AvailabilityResponse = {
      property,
      updatedAt: new Date().toISOString(),
      configured: false,
      nextAvailable: null,
      days: [],
    };
    return NextResponse.json(payload);
  }

  try {
    // Fusionne dates bloquées OTA (Booking + Airbnb) + réservations directes du site
    const blocked = await getBlockedDays(property);

    const payload: AvailabilityResponse = {
      property,
      updatedAt: new Date().toISOString(),
      configured: true,
      nextAvailable: nextAvailablePeriod(blocked, from, WINDOW_MONTHS),
      days: buildDays(blocked, from, WINDOW_MONTHS),
    };

    return NextResponse.json(payload);
  } catch {
    return NextResponse.json(
      { error: "Récupération du calendrier impossible" },
      { status: 502 }
    );
  }
}
