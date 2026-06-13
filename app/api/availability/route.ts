import { NextResponse } from "next/server";

import {
  buildDays,
  mergeBlockedDays,
  nextAvailablePeriod,
  parseIcsBlockedRanges,
  todayIso,
  type AvailabilityDay,
  type AvailablePeriod,
  type DateRange,
} from "@/src/lib/availability/ical";
import { icalSources, isAccommodationId } from "@/src/lib/availability/sources";

// Fenêtre affichée et mise en cache (1h) — pas de temps réel nécessaire pour un gîte.
const WINDOW_MONTHS = 14;
const REVALIDATE_SECONDS = 3600;

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

  const sources = icalSources[property];
  const from = todayIso();

  // Pas de calendrier configuré (ex. Prestige) : réponse valide mais vide.
  if (sources.length === 0) {
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
    const rangesPerSource = await Promise.all(
      sources.map(async (url): Promise<DateRange[]> => {
        const res = await fetch(url, {
          headers: { Accept: "text/calendar" },
          next: { revalidate: REVALIDATE_SECONDS },
        });
        if (!res.ok) throw new Error(`iCal ${res.status}`);
        return parseIcsBlockedRanges(await res.text());
      })
    );

    const blocked = mergeBlockedDays(rangesPerSource);

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
