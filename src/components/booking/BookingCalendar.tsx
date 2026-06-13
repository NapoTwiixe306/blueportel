"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Locale = "fr" | "en" | "nl";

const localeTag: Record<Locale, string> = { fr: "fr-FR", en: "en-GB", nl: "nl-NL" };
const weekdayShort: Record<Locale, string[]> = {
  fr: ["L", "M", "M", "J", "V", "S", "D"],
  en: ["M", "T", "W", "T", "F", "S", "S"],
  nl: ["M", "D", "W", "D", "V", "Z", "Z"],
};

type Cell = { iso: string; day: number } | null;

function isoOf(y: number, m: number, d: number): string {
  return `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}
function addDaysIso(iso: string, n: number): string {
  const d = new Date(`${iso}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}

type Props = {
  locale: Locale;
  blocked: Set<string>; // nuits indisponibles (OTA + résas directes)
  minIso: string; // première date sélectionnable
  initialIso?: string; // mois ouvert par défaut (1re dispo) — sinon minIso
  maxMonths?: number; // nombre de mois navigables vers le futur
  checkIn: string;
  checkOut: string;
  onChange: (checkIn: string, checkOut: string) => void;
};

export default function BookingCalendar({
  locale,
  blocked,
  minIso,
  initialIso,
  maxMonths = 14,
  checkIn,
  checkOut,
  onChange,
}: Props) {
  const minDate = new Date(`${minIso}T00:00:00Z`);
  const startIso = initialIso && initialIso > minIso ? initialIso : minIso;
  const startDate = new Date(`${startIso}T00:00:00Z`);
  const [view, setView] = useState({ y: startDate.getUTCFullYear(), m: startDate.getUTCMonth() });

  const maxView = useMemo(() => {
    const d = new Date(minDate);
    d.setUTCMonth(d.getUTCMonth() + maxMonths);
    return { y: d.getUTCFullYear(), m: d.getUTCMonth() };
  }, [minIso, maxMonths]); // eslint-disable-line react-hooks/exhaustive-deps

  const canPrev = view.y > minDate.getUTCFullYear() || view.m > minDate.getUTCMonth();
  const canNext = view.y < maxView.y || (view.y === maxView.y && view.m < maxView.m);

  const grid = useMemo<Cell[]>(() => {
    const daysInMonth = new Date(Date.UTC(view.y, view.m + 1, 0)).getUTCDate();
    const lead = (new Date(Date.UTC(view.y, view.m, 1)).getUTCDay() + 6) % 7; // lundi = 0
    const cells: Cell[] = Array.from({ length: lead }, () => null);
    for (let d = 1; d <= daysInMonth; d++) cells.push({ iso: isoOf(view.y, view.m, d), day: d });
    return cells;
  }, [view]);

  const monthLabel = new Intl.DateTimeFormat(localeTag[locale], { month: "long", year: "numeric" }).format(
    new Date(Date.UTC(view.y, view.m, 1))
  );

  // Y a-t-il une nuit bloquée dans [from, to[ ?
  const rangeHasBlocked = (from: string, to: string): boolean => {
    for (let d = from; d < to; d = addDaysIso(d, 1)) {
      if (blocked.has(d)) return true;
    }
    return false;
  };

  const handleClick = (iso: string) => {
    // 1er clic, ou reset (les deux déjà choisis), ou clic avant l'arrivée → nouvelle arrivée
    if (!checkIn || (checkIn && checkOut) || iso <= checkIn) {
      onChange(iso, "");
      return;
    }
    // 2e clic = départ : valide seulement si aucune nuit bloquée entre les deux
    if (iso > checkIn && !rangeHasBlocked(checkIn, iso)) {
      onChange(checkIn, iso);
    } else {
      onChange(iso, ""); // sinon on repart de cette date
    }
  };

  const shiftMonth = (delta: number) =>
    setView((v) => {
      const d = new Date(Date.UTC(v.y, v.m + delta, 1));
      return { y: d.getUTCFullYear(), m: d.getUTCMonth() };
    });

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4">
      <div className="mb-3 flex items-center justify-between">
        <button
          type="button"
          onClick={() => canPrev && shiftMonth(-1)}
          disabled={!canPrev}
          aria-label="Mois précédent"
          className="rounded-full border border-gray-200 p-2 text-gray-500 transition enabled:hover:border-blue-300 enabled:hover:text-blue-600 disabled:text-gray-200"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
        </button>
        <p className="text-sm font-bold capitalize text-gray-900">{monthLabel}</p>
        <button
          type="button"
          onClick={() => canNext && shiftMonth(1)}
          disabled={!canNext}
          aria-label="Mois suivant"
          className="rounded-full border border-gray-200 p-2 text-gray-500 transition enabled:hover:border-blue-300 enabled:hover:text-blue-600 disabled:text-gray-200"
        >
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-semibold text-gray-400">
        {weekdayShort[locale].map((w, i) => (
          <div key={i} className="py-1">
            {w}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {grid.map((cell, i) => {
          if (!cell) return <div key={`e${i}`} />;
          const { iso, day } = cell;

          const isPast = iso < minIso;
          const isBlocked = blocked.has(iso);
          const isStart = iso === checkIn;
          const isEnd = iso === checkOut;
          const inRange = checkIn && checkOut && iso > checkIn && iso < checkOut;
          const disabled = isPast || isBlocked;

          let cls = "text-gray-700 hover:bg-blue-50";
          if (disabled) cls = "cursor-not-allowed text-gray-300 line-through";
          if (inRange) cls = "bg-blue-100 text-blue-700";
          if (isStart || isEnd) cls = "bg-blue-600 text-white font-bold shadow-sm";

          return (
            <button
              key={iso}
              type="button"
              disabled={disabled}
              onClick={() => handleClick(iso)}
              aria-label={iso}
              aria-pressed={isStart || isEnd}
              className={`flex h-10 items-center justify-center rounded-lg text-sm transition ${cls}`}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}
