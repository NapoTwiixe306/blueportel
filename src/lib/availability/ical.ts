// Parsing iCal léger (zéro dépendance) pour les exports Booking / Airbnb.
// Un .ics ne contient QUE les périodes bloquées (VEVENT). « Disponible » =
// toute date présente dans aucune des sources fournies.

export type DateRange = { start: string; end: string }; // ISO yyyy-mm-dd, end exclusif (norme iCal)
export type DayStatus = "available" | "booked";
export type AvailabilityDay = { date: string; status: DayStatus };
export type AvailablePeriod = { from: string; to: string; nights: number }; // to inclusif

// Récupère la valeur après le premier ":" (gère DTSTART;VALUE=DATE:20260613)
function valueOf(line: string): string {
  const idx = line.indexOf(":");
  return idx === -1 ? "" : line.slice(idx + 1).trim();
}

// "20260613" ou "20260613T120000Z" -> "2026-06-13"
function isoFromIcsDate(raw: string): string | null {
  if (raw.length < 8) return null;
  const y = raw.slice(0, 4);
  const m = raw.slice(4, 6);
  const d = raw.slice(6, 8);
  return `${y}-${m}-${d}`;
}

// Déplie les lignes continuées (une ligne qui commence par espace/tab prolonge la précédente)
function unfold(ics: string): string[] {
  const out: string[] = [];
  for (const line of ics.split(/\r?\n/)) {
    if ((line.startsWith(" ") || line.startsWith("\t")) && out.length) {
      out[out.length - 1] += line.slice(1);
    } else {
      out.push(line);
    }
  }
  return out;
}

export function parseIcsBlockedRanges(ics: string): DateRange[] {
  const ranges: DateRange[] = [];
  let cur: { start?: string | null; end?: string | null } | null = null;

  for (const line of unfold(ics)) {
    if (line.startsWith("BEGIN:VEVENT")) {
      cur = {};
    } else if (line.startsWith("END:VEVENT")) {
      if (cur?.start && cur?.end) ranges.push({ start: cur.start, end: cur.end });
      cur = null;
    } else if (cur) {
      if (line.startsWith("DTSTART")) cur.start = isoFromIcsDate(valueOf(line));
      else if (line.startsWith("DTEND")) cur.end = isoFromIcsDate(valueOf(line));
    }
  }
  return ranges;
}

function addDays(iso: string, days: number): string {
  const d = new Date(`${iso}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

// Itère les jours [start, end) (end exclusif)
function* eachDay(start: string, end: string): Generator<string> {
  let cur = start;
  while (cur < end) {
    yield cur;
    cur = addDays(cur, 1);
  }
}

// Fusionne plusieurs sources iCal : un jour est bloqué s'il l'est dans AU MOINS une source.
export function mergeBlockedDays(rangesPerSource: DateRange[][]): Set<string> {
  const blocked = new Set<string>();
  for (const ranges of rangesPerSource) {
    for (const r of ranges) {
      for (const day of eachDay(r.start, r.end)) blocked.add(day);
    }
  }
  return blocked;
}

// Construit la liste jour-par-jour sur une fenêtre [from, from+months[
export function buildDays(blocked: Set<string>, from: string, months: number): AvailabilityDay[] {
  const end = new Date(`${from}T00:00:00Z`);
  end.setUTCMonth(end.getUTCMonth() + months);
  const endIso = end.toISOString().slice(0, 10);

  const days: AvailabilityDay[] = [];
  for (const day of eachDay(from, endIso)) {
    days.push({ date: day, status: blocked.has(day) ? "booked" : "available" });
  }
  return days;
}

// Première période libre à partir de `from` (incluse). null si tout est bloqué sur la fenêtre.
export function nextAvailablePeriod(
  blocked: Set<string>,
  from: string,
  months: number
): AvailablePeriod | null {
  const end = new Date(`${from}T00:00:00Z`);
  end.setUTCMonth(end.getUTCMonth() + months);
  const endIso = end.toISOString().slice(0, 10);

  let start: string | null = null;
  for (const day of eachDay(from, endIso)) {
    if (!blocked.has(day)) {
      if (!start) start = day;
    } else if (start) {
      return { from: start, to: addDays(day, -1), nights: nightsBetween(start, day) };
    }
  }
  if (start) return { from: start, to: addDays(endIso, -1), nights: nightsBetween(start, endIso) };
  return null;
}

function nightsBetween(start: string, endExclusive: string): number {
  const a = new Date(`${start}T00:00:00Z`).getTime();
  const b = new Date(`${endExclusive}T00:00:00Z`).getTime();
  return Math.round((b - a) / 86_400_000);
}

export function todayIso(): string {
  return new Date().toISOString().slice(0, 10);
}
