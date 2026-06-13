"use client";

import { useEffect, useMemo, useState } from "react";
import { CalendarDays, ChevronLeft, ChevronRight, Loader2, Sparkles } from "lucide-react";

import type { AccommodationId } from "../../data/accommodations";

type DayStatus = "available" | "booked";
type AvailabilityDay = { date: string; status: DayStatus };
type AvailablePeriod = { from: string; to: string; nights: number };
type AvailabilityResponse = {
  property: string;
  updatedAt: string;
  configured: boolean;
  nextAvailable: AvailablePeriod | null;
  days: AvailabilityDay[];
};

type Locale = "fr" | "en" | "nl";

type CalendarCell = {
  key: string;
  outside: boolean;
  dayNumber?: number;
  status?: DayStatus;
};

const localeTag: Record<Locale, string> = { fr: "fr-FR", en: "en-GB", nl: "nl-NL" };

const weekdayShort: Record<Locale, string[]> = {
  fr: ["lun.", "mar.", "mer.", "jeu.", "ven.", "sam.", "dim."],
  en: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  nl: ["ma", "di", "wo", "do", "vr", "za", "zo"],
};

const t: Record<Locale, {
  title: string;
  loading: string;
  error: string;
  nextAvailable: string;
  nights: (n: number) => string;
  noData: string;
  available: string;
  booked: string;
  updated: string;
}> = {
  fr: {
    title: "Disponibilités",
    loading: "Chargement du calendrier…",
    error: "Calendrier momentanément indisponible. Contactez-nous pour vos dates.",
    nextAvailable: "Prochaine disponibilité",
    nights: (n) => `${n} nuit${n > 1 ? "s" : ""}`,
    noData: "Dates sur demande — contactez-nous pour vérifier vos disponibilités.",
    available: "Disponible",
    booked: "Réservé",
    updated: "Mis à jour",
  },
  en: {
    title: "Availability",
    loading: "Loading calendar…",
    error: "Calendar temporarily unavailable. Contact us for your dates.",
    nextAvailable: "Next availability",
    nights: (n) => `${n} night${n > 1 ? "s" : ""}`,
    noData: "Dates on request — contact us to check availability.",
    available: "Available",
    booked: "Booked",
    updated: "Updated",
  },
  nl: {
    title: "Beschikbaarheid",
    loading: "Kalender laden…",
    error: "Kalender tijdelijk niet beschikbaar. Neem contact op voor uw data.",
    nextAvailable: "Eerstvolgende beschikbaarheid",
    nights: (n) => `${n} nacht${n > 1 ? "en" : ""}`,
    noData: "Data op aanvraag — neem contact op om de beschikbaarheid te controleren.",
    available: "Beschikbaar",
    booked: "Bezet",
    updated: "Bijgewerkt",
  },
};

const statusClasses: Record<DayStatus, string> = {
  available: "bg-emerald-50 text-emerald-700",
  booked: "bg-red-50 text-red-400 line-through",
};

type Props = {
  propertyId: AccommodationId;
  locale: string;
  large?: boolean;
};

export default function AvailabilityCalendar({ propertyId, locale, large = false }: Props) {
  const lang: Locale = locale === "en" || locale === "nl" ? locale : "fr";
  const tr = t[lang];
  // Tailles : variante "large" (page Disponibilités) vs compacte (réutilisable ailleurs)
  const ui = large
    ? {
        wrapper: "rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm",
        title: "text-base sm:text-lg font-bold text-slate-900",
        cell: "h-9 sm:h-10 text-sm",
        weekday: "text-xs",
        monthLabel: "text-base sm:text-lg font-bold capitalize text-slate-800",
        banner: "text-sm sm:text-base",
      }
    : {
        wrapper: "rounded-2xl border border-slate-200 bg-white p-5 shadow-sm",
        title: "text-sm font-bold text-slate-900",
        cell: "h-8 text-xs",
        weekday: "text-xs",
        monthLabel: "text-sm font-semibold capitalize text-slate-800",
        banner: "text-sm",
      };

  const [data, setData] = useState<AvailabilityResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);
  const [monthOffset, setMonthOffset] = useState(0);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setFailed(false);
    fetch(`/api/availability?property=${propertyId}`, { headers: { Accept: "application/json" } })
      .then((r) => {
        if (!r.ok) throw new Error("fetch failed");
        return r.json() as Promise<AvailabilityResponse>;
      })
      .then((json) => mounted && setData(json))
      .catch(() => mounted && setFailed(true))
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, [propertyId]);

  const months = useMemo(() => {
    if (!data?.days?.length) return [];
    const dayMap = new Map(data.days.map((d) => [d.date, d.status]));
    const monthKeys = Array.from(new Set(data.days.map((d) => d.date.slice(0, 7)))).sort();

    return monthKeys.map((monthKey) => {
      const [y, m] = monthKey.split("-").map(Number);
      const daysInMonth = new Date(Date.UTC(y, m, 0)).getUTCDate();
      const firstWeekday = (new Date(Date.UTC(y, m - 1, 1)).getUTCDay() + 6) % 7; // lundi = 0
      const total = Math.ceil((firstWeekday + daysInMonth) / 7) * 7;

      const cells: CalendarCell[] = Array.from({ length: total }, (_, idx) => {
        const dayNumber = idx - firstWeekday + 1;
        if (dayNumber < 1 || dayNumber > daysInMonth) {
          return { key: `${monthKey}-x${idx}`, outside: true };
        }
        const iso = `${monthKey}-${String(dayNumber).padStart(2, "0")}`;
        return { key: iso, outside: false, dayNumber, status: dayMap.get(iso) ?? "available" };
      });

      const weeks: CalendarCell[][] = [];
      for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));

      const label = new Intl.DateTimeFormat(localeTag[lang], {
        month: "long",
        year: "numeric",
      }).format(new Date(`${monthKey}-01T00:00:00`));

      return { monthKey, label, weeks };
    });
  }, [data, lang]);

  const formatRange = (period: AvailablePeriod) => {
    const fmt = new Intl.DateTimeFormat(localeTag[lang], { day: "numeric", month: "long" });
    const from = fmt.format(new Date(`${period.from}T00:00:00`));
    const to = fmt.format(new Date(`${period.to}T00:00:00`));
    return `${from} → ${to}`;
  };

  // Pas de calendrier configuré (ex. Prestige) → état neutre "sur demande".
  if (!loading && data && !data.configured) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
        <div className="flex items-center gap-2 text-slate-700">
          <CalendarDays className="h-5 w-5 text-blue-600" aria-hidden="true" />
          <h3 className="text-sm font-bold">{tr.title}</h3>
        </div>
        <p className="mt-2 text-sm text-slate-500">{tr.noData}</p>
      </div>
    );
  }

  const month = months[Math.min(monthOffset, Math.max(months.length - 1, 0))];
  const canPrev = monthOffset > 0;
  const canNext = monthOffset < months.length - 1;

  const renderGrid = (m: { monthKey: string; weeks: CalendarCell[][] }) => (
    <table className={`w-full table-fixed border-collapse text-center ${ui.weekday}`}>
      <thead>
        <tr className="text-slate-400">
          {weekdayShort[lang].map((w, i) => (
            <th key={`${m.monthKey}-${w}-${i}`} className="py-1.5 font-medium">
              {w}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {m.weeks.map((week, wi) => (
          <tr key={`${m.monthKey}-w${wi}`}>
            {week.map((cell) =>
              cell.outside ? (
                <td key={cell.key} className="p-0.5" aria-hidden="true" />
              ) : (
                <td key={cell.key} className="p-0.5">
                  <span
                    className={`flex ${ui.cell} items-center justify-center rounded-lg font-semibold ${statusClasses[cell.status ?? "available"]}`}
                  >
                    {cell.dayNumber}
                  </span>
                </td>
              )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className={ui.wrapper}>
      <div className="flex items-center gap-2">
        <CalendarDays className="h-6 w-6 text-blue-600" aria-hidden="true" />
        <h3 className={ui.title}>{tr.title}</h3>
      </div>

      {loading && (
        <div className="flex items-center gap-2 py-6 text-sm text-slate-500">
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          {tr.loading}
        </div>
      )}

      {!loading && failed && <p className="mt-3 text-sm text-slate-500">{tr.error}</p>}

      {!loading && !failed && data?.configured && (
        <>
          {data.nextAvailable && (
            <div className="mt-4 flex items-start gap-2 rounded-xl bg-emerald-50 px-4 py-3">
              <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" aria-hidden="true" />
              <div className={ui.banner}>
                <span className="font-semibold text-emerald-800">{tr.nextAvailable} : </span>
                <span className="text-emerald-700">{formatRange(data.nextAvailable)}</span>
                <span className="text-emerald-600"> · {tr.nights(data.nextAvailable.nights)}</span>
              </div>
            </div>
          )}

          {month && (
            <div className="mt-5">
              <div className="mb-3 flex items-center justify-between">
                <p className={ui.monthLabel}>{month.label}</p>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => canPrev && setMonthOffset((o) => o - 1)}
                    disabled={!canPrev}
                    aria-label="◄"
                    className="rounded-full border border-slate-200 p-2 text-slate-500 enabled:hover:border-blue-300 enabled:hover:text-blue-600 disabled:text-slate-300"
                  >
                    <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => canNext && setMonthOffset((o) => o + 1)}
                    disabled={!canNext}
                    aria-label="►"
                    className="rounded-full border border-slate-200 p-2 text-slate-500 enabled:hover:border-blue-300 enabled:hover:text-blue-600 disabled:text-slate-300"
                  >
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>

              {renderGrid(month)}

              <div className="mt-4 flex items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded bg-emerald-100" /> {tr.available}
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded bg-red-100" /> {tr.booked}
                </span>
                {data.updatedAt && (
                  <span className="ml-auto text-slate-400">
                    {tr.updated}{" "}
                    {new Intl.DateTimeFormat(localeTag[lang], {
                      day: "numeric",
                      month: "short",
                      hour: "2-digit",
                      minute: "2-digit",
                    }).format(new Date(data.updatedAt))}
                  </span>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
