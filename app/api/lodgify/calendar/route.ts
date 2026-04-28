import { NextResponse } from "next/server";

// Source iCal Lodgify partagé (voir brief utilisateur)
const ICS_URL =
  "https://www.lodgify.com/d150a01d-3b0d-496f-aa60-95ab0fcf61a1.ics";

type CalendarStatus = "available" | "booked" | "checkout" | "checkin";

type LodgifyDay = {
  date: string;
  status: CalendarStatus;
};

type LodgifyResponse = {
  propertyId: number;
  days: LodgifyDay[];
};

function formatIcsDateToIso(icsDate: string): string {
  // 20250501 -> 2025-05-01
  if (icsDate.length !== 8) return icsDate;
  const year = icsDate.slice(0, 4);
  const month = icsDate.slice(4, 6);
  const day = icsDate.slice(6, 8);
  return `${year}-${month}-${day}`;
}

function* eachDate(from: Date, to: Date) {
  const current = new Date(from);
  while (current < to) {
    yield new Date(current);
    current.setUTCDate(current.getUTCDate() + 1);
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const startDateParam =
    searchParams.get("startDate") || new Date().toISOString().slice(0, 10);

  const startDate = new Date(`${startDateParam}T00:00:00Z`);
  // Fenêtre de 18 mois à partir de startDate pour limiter la taille
  const endWindow = new Date(startDate);
  endWindow.setUTCMonth(endWindow.getUTCMonth() + 18);

  try {
    const response = await fetch(ICS_URL, {
      headers: { Accept: "text/calendar" },
      cache: "no-store",
    });

    if (!response.ok) {
      const text = await response.text();
      return NextResponse.json(
        { error: "Calendrier iCal indisponible", details: text },
        { status: response.status }
      );
    }

    const icsText = await response.text();
    const lines = icsText.split(/\r?\n/);

    type RawEvent = { dtStart?: string; dtEnd?: string; summary?: string };
    const events: RawEvent[] = [];
    let current: RawEvent | null = null;

    for (const line of lines) {
      if (line.startsWith("BEGIN:VEVENT")) {
        current = {};
      } else if (line.startsWith("END:VEVENT")) {
        if (current) {
          events.push(current);
        }
        current = null;
      } else if (current) {
        if (line.startsWith("DTSTART")) {
          const [, value] = line.split(":");
          current.dtStart = value?.trim();
        } else if (line.startsWith("DTEND")) {
          const [, value] = line.split(":");
          current.dtEnd = value?.trim();
        } else if (line.startsWith("SUMMARY")) {
          const [, value] = line.split(":");
          current.summary = value?.trim();
        }
      }
    }

    const daysMap = new Map<string, LodgifyDay>();

    for (const ev of events) {
      if (!ev.dtStart || !ev.dtEnd) continue;

      const start = new Date(`${formatIcsDateToIso(ev.dtStart)}T00:00:00Z`);
      const end = new Date(`${formatIcsDateToIso(ev.dtEnd)}T00:00:00Z`);

      // Filtre hors fenêtre
      if (end <= startDate || start >= endWindow) continue;

      const eventStatus: CalendarStatus = "booked";

      for (const date of eachDate(
        start < startDate ? startDate : start,
        end > endWindow ? endWindow : end
      )) {
        const iso = date.toISOString().slice(0, 10);
        daysMap.set(iso, { date: iso, status: eventStatus });
      }
    }

    // Tri chronologique
    const days: LodgifyDay[] = Array.from(daysMap.values()).sort((a, b) =>
      a.date.localeCompare(b.date)
    );

    const payload: LodgifyResponse = {
      propertyId: 0,
      days,
    };

    return NextResponse.json(payload, {
      headers: {
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur de récupération du calendrier iCal" },
      { status: 500 }
    );
  }
}

