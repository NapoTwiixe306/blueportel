import type { AccommodationId } from "../../data/accommodations";
import { prisma } from "../db";
import { parseIcsBlockedRanges, mergeBlockedDays, type DateRange } from "../availability/ical";
import { icalSources } from "../availability/sources";

const REVALIDATE_SECONDS = 3600;

function* eachDay(startIso: string, endIso: string): Generator<string> {
  const cur = new Date(`${startIso}T00:00:00Z`);
  const end = new Date(`${endIso}T00:00:00Z`);
  while (cur < end) {
    yield cur.toISOString().slice(0, 10);
    cur.setUTCDate(cur.getUTCDate() + 1);
  }
}

function isoDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

// Dates bloquées chez les OTA (Booking + Airbnb) pour un logement.
export async function fetchOtaBlockedDays(property: AccommodationId): Promise<Set<string>> {
  const sources = icalSources[property];
  if (sources.length === 0) return new Set();

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
  return mergeBlockedDays(rangesPerSource);
}

export type ReservationRange = { checkIn: string; checkOut: string };

// Base configurée ? (évite de planter l'affichage des dispos si le site tourne sans DB)
function dbConfigured(): boolean {
  return Boolean(process.env.DATABASE_URL);
}

// Réservations directes qui bloquent le calendrier : PAID + PENDING encore valides (verrou).
// Tolérant aux pannes : renvoie [] si la DB est absente/injoignable (dégrade vers OTA seul).
export async function fetchBlockingReservations(
  property: AccommodationId
): Promise<ReservationRange[]> {
  if (!dbConfigured()) return [];
  try {
    const now = new Date();
    const rows = await prisma.reservation.findMany({
      where: {
        property,
        OR: [{ status: "PAID" }, { status: "PENDING", expiresAt: { gt: now } }],
      },
      select: { checkIn: true, checkOut: true },
    });
    return rows.map((r) => ({ checkIn: isoDate(r.checkIn), checkOut: isoDate(r.checkOut) }));
  } catch {
    return [];
  }
}

// Réservations payées uniquement (pour l'export .ics vers Booking/Airbnb).
export async function fetchConfirmedReservations(
  property: AccommodationId
): Promise<(ReservationRange & { id: string })[]> {
  if (!dbConfigured()) return [];
  try {
    const rows = await prisma.reservation.findMany({
      where: { property, status: "PAID" },
      select: { id: true, checkIn: true, checkOut: true },
      orderBy: { checkIn: "asc" },
    });
    return rows.map((r) => ({ id: r.id, checkIn: isoDate(r.checkIn), checkOut: isoDate(r.checkOut) }));
  } catch {
    return [];
  }
}

// Ensemble complet des nuits bloquées (OTA + réservations directes).
export async function getBlockedDays(property: AccommodationId): Promise<Set<string>> {
  const [ota, reservations] = await Promise.all([
    fetchOtaBlockedDays(property),
    fetchBlockingReservations(property),
  ]);
  for (const r of reservations) {
    for (const day of eachDay(r.checkIn, r.checkOut)) ota.add(day);
  }
  return ota;
}

// La plage [checkIn, checkOut[ est-elle entièrement libre ?
export async function isRangeAvailable(
  property: AccommodationId,
  checkIn: string,
  checkOut: string,
  options?: { excludeReservationId?: string }
): Promise<boolean> {
  const [ota, reservations] = await Promise.all([
    fetchOtaBlockedDays(property),
    options?.excludeReservationId
      ? fetchBlockingReservationsExcluding(property, options.excludeReservationId)
      : fetchBlockingReservations(property),
  ]);
  for (const r of reservations) {
    for (const day of eachDay(r.checkIn, r.checkOut)) ota.add(day);
  }
  for (const night of eachDay(checkIn, checkOut)) {
    if (ota.has(night)) return false;
  }
  return true;
}

async function fetchBlockingReservationsExcluding(
  property: AccommodationId,
  excludeId: string
): Promise<ReservationRange[]> {
  const now = new Date();
  const rows = await prisma.reservation.findMany({
    where: {
      property,
      id: { not: excludeId },
      OR: [{ status: "PAID" }, { status: "PENDING", expiresAt: { gt: now } }],
    },
    select: { checkIn: true, checkOut: true },
  });
  return rows.map((r) => ({ checkIn: isoDate(r.checkIn), checkOut: isoDate(r.checkOut) }));
}
