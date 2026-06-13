import { isAccommodationId } from "@/src/lib/availability/sources";
import { fetchConfirmedReservations } from "@/src/lib/booking/availability";

// Flux iCal des réservations DIRECTES payées, à IMPORTER dans Booking et Airbnb
// (fonction « importer un calendrier »). C'est la moitié « écriture » du channel manager iCal.
// URL : https://<site>/api/ical/horizon  (ou /prestige)

export const dynamic = "force-dynamic";

function icsDate(iso: string): string {
  return iso.replace(/-/g, ""); // 2026-09-03 -> 20260903
}

function stamp(): string {
  return new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ property: string }> }
) {
  const { property } = await params;

  if (!isAccommodationId(property)) {
    return new Response("Logement invalide", { status: 400 });
  }

  let reservations: { id: string; checkIn: string; checkOut: string }[] = [];
  try {
    reservations = await fetchConfirmedReservations(property);
  } catch {
    return new Response("Erreur calendrier", { status: 500 });
  }

  const now = stamp();
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Blueportel//Direct Bookings//FR",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    `X-WR-CALNAME:Blueportel ${property} (réservations directes)`,
  ];

  for (const r of reservations) {
    lines.push(
      "BEGIN:VEVENT",
      `UID:${r.id}@blueportel.fr`,
      `DTSTAMP:${now}`,
      `DTSTART;VALUE=DATE:${icsDate(r.checkIn)}`,
      `DTEND;VALUE=DATE:${icsDate(r.checkOut)}`,
      "SUMMARY:Réservé (site Blueportel)",
      "STATUS:CONFIRMED",
      "TRANSP:OPAQUE",
      "END:VEVENT"
    );
  }

  // Un calendrier iCal sans aucun VEVENT est invalide (RFC 5545) et rejeté par
  // les importateurs OTA (Booking : « This iCal URL isn't valid »). Tant qu'aucune
  // réservation directe n'est payée, on émet un événement placeholder dans le passé,
  // marqué TRANSPARENT, qui ne bloque aucune date réelle.
  if (reservations.length === 0) {
    lines.push(
      "BEGIN:VEVENT",
      `UID:placeholder-${property}@blueportel.fr`,
      `DTSTAMP:${now}`,
      "DTSTART;VALUE=DATE:20200101",
      "DTEND;VALUE=DATE:20200102",
      "SUMMARY:Calendrier Blueportel actif",
      "STATUS:CONFIRMED",
      "TRANSP:TRANSPARENT",
      "END:VEVENT"
    );
  }

  lines.push("END:VCALENDAR");

  return new Response(lines.join("\r\n") + "\r\n", {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": `inline; filename="blueportel-${property}.ics"`,
      "Cache-Control": "no-store",
    },
  });
}
