"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  CalendarDays,
  AlertCircle,
  Loader2,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import type {
  AvailabilityDictionary,
  CalendarStatus,
} from "../../i18n/disponibilites/types";

type LodgifyDay = {
  date: string;
  status: "available" | "booked" | "checkout" | "checkin";
};

type LodgifyResponse = {
  propertyId: number;
  days: LodgifyDay[];
};

type CalendarCell = {
  key: string;
  outside: boolean;
  dayNumber?: number;
  iso?: string;
  status?: CalendarStatus;
};

const propertyId = "654566";
const roomId = "721555";

const statusClasses: Record<CalendarStatus, string> = {
  available: "bg-emerald-50 text-emerald-700 border-emerald-200",
  booked: "bg-red-50 text-red-500 border-red-200 line-through",
  checkin: "bg-blue-50 text-blue-600 border-blue-200",
  checkout: "bg-orange-50 text-orange-600 border-orange-200",
  unknown: "bg-gray-50 text-gray-300 border-gray-100",
};

type DisponibilitesPageProps = {
  dictionary: AvailabilityDictionary;
};

export default function DisponibilitesPage({ dictionary }: DisponibilitesPageProps) {
  const {
    locale,
    hero,
    loadingText,
    error,
    emptyMessage,
    statusLabels,
    legend,
    cta,
    info,
    screenReader,
    structuredData,
    tableAriaLabel,
  } = dictionary;

  const getApiUrl = () => {
    const startDate = new Date().toISOString().slice(0, 10);
    return `/api/lodgify/calendar?startDate=${startDate}&propertyId=${propertyId}&roomId=${roomId}`;
  };

  const [data, setData] = useState<LodgifyResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchCalendar = async () => {
      try {
        if (!isMounted) return;
        setLoading(true);
        setFetchError(null);
        const response = await fetch(getApiUrl(), {
          headers: { Accept: "application/json" },
          cache: "no-store",
        });
        if (!response.ok) {
          throw new Error("Calendrier indisponible");
        }
        const json = (await response.json()) as LodgifyResponse;
        if (isMounted) {
          setData(json);
        }
      } catch (err) {
        if (isMounted) {
          setFetchError(err as Error);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchCalendar();
    const interval = setInterval(fetchCalendar, 1000 * 60 * 15);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  const dayFormatter = useMemo(
    () =>
      new Intl.DateTimeFormat(locale === "en" ? "en-GB" : locale === "nl" ? "nl-NL" : "fr-FR", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    [locale]
  );

  const monthCalendars = useMemo(() => {
    if (!data?.days?.length) return [];

    const dayMap = new Map(data.days.map((day) => [day.date, day]));
    const monthKeys = Array.from(new Set(data.days.map((day) => day.date.slice(0, 7)))).sort(
      (a, b) => (a > b ? 1 : -1)
    );

    return monthKeys.map((monthKey) => {
      const [yearStr, monthStr] = monthKey.split("-");
      const year = Number(yearStr);
      const monthIndex = Number(monthStr) - 1;
      const firstDay = new Date(Date.UTC(year, monthIndex, 1));
      const daysInMonth = new Date(Date.UTC(year, monthIndex + 1, 0)).getUTCDate();
      const leadingEmpty = (firstDay.getUTCDay() + 6) % 7; // Monday first
      const totalCells = Math.ceil((leadingEmpty + daysInMonth) / 7) * 7;

      const cells: CalendarCell[] = Array.from({ length: totalCells }, (_, idx) => {
        const dayNumber = idx - leadingEmpty + 1;
        if (dayNumber < 1 || dayNumber > daysInMonth) {
          return {
            key: `${monthKey}-empty-${idx}`,
            outside: true,
          };
        }

        const isoDay = `${monthKey}-${String(dayNumber).padStart(2, "0")}`;
        const status = dayMap.get(isoDay)?.status ?? "unknown";

        return {
          key: isoDay,
          outside: false,
          dayNumber,
          iso: isoDay,
          status,
        };
      });

      const weeks: CalendarCell[][] = [];
      for (let i = 0; i < cells.length; i += 7) {
        weeks.push(cells.slice(i, i + 7));
      }

      const monthLabel = new Intl.DateTimeFormat(
        locale === "en" ? "en-GB" : locale === "nl" ? "nl-NL" : "fr-FR",
        {
          month: "long",
          year: "numeric",
        }
      ).format(new Date(`${monthKey}-01T00:00:00`));

      return {
        monthKey,
        label: monthLabel,
        weeks,
      };
    });
  }, [data, locale]);

  const weekdayShort: Record<AvailabilityDictionary["locale"], string[]> = {
    fr: ["lun.", "mar.", "mer.", "jeu.", "ven.", "sam.", "dim."],
    en: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    nl: ["ma", "di", "wo", "do", "vr", "za", "zo"],
  };

  const withLocale = (path: string) => {
    if (!path || path === "#") return "#";
    if (path.startsWith("http") || path.startsWith("mailto") || path.startsWith("tel")) {
      return path;
    }
    if (path === "/") return `/${locale}`;
    if (path.startsWith("/")) return `/${locale}${path}`;
    return `/${locale}/${path}`;
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }}
      />
      <div className="flex min-h-screen items-center justify-center bg-white font-sans w-full overflow-x-hidden">
        <main className="flex min-h-screen w-full max-w-7xl flex-col items-center py-6 px-3 sm:py-8 sm:px-4 md:py-12 md:px-6 lg:py-16 lg:px-8 bg-white">
          <nav aria-label="Breadcrumb" className="w-full max-w-7xl mb-4 sm:mb-6">
            <ol className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 px-3 sm:px-4">
              <li>
                <Link href={`/${locale}`} className="hover:text-blue-500 transition-colors">
                  {hero.homeLabel}
                </Link>
              </li>
              <li aria-hidden="true" className="text-gray-400">
                /
              </li>
              <li className="text-gray-900 font-medium" aria-current="page">
                {hero.breadcrumbCurrent}
              </li>
            </ol>
          </nav>

          <header className="w-full max-w-4xl text-center mb-8 sm:mb-12">
            <p className="text-xs sm:text-sm text-blue-500 font-semibold uppercase tracking-wide mb-2">
              {hero.pretitle}
            </p>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black leading-tight mb-4 sm:mb-6 px-3">
              {hero.title}
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 px-3 sm:px-6">
              {hero.description}
            </p>
          </header>

          <section className="w-full max-w-5xl rounded-2xl border border-gray-200 bg-white p-4 sm:p-6 shadow-sm mb-8">
            <div className="flex items-center gap-3 mb-4">
              <CalendarDays className="w-6 h-6 text-blue-500" aria-hidden="true" />
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">{hero.title}</h2>
            </div>

            {loading && (
              <div className="flex flex-col items-center justify-center py-10 text-gray-500 gap-3">
                <Loader2 className="w-6 h-6 animate-spin" aria-hidden="true" />
                <p>{loadingText}</p>
              </div>
            )}

            {fetchError && (
              <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-red-200 bg-red-50 p-6 text-red-700 text-center">
                <AlertCircle className="w-6 h-6" aria-hidden="true" />
                <p className="text-sm">{error.description}</p>
                <div className="mt-2 flex flex-col gap-2 text-sm">
                  {error.contactCTA.map((ctaLink) => (
                    <Link
                      key={ctaLink.href}
                      href={ctaLink.href}
                      className="inline-flex items-center justify-center rounded-lg border border-red-200 px-3 py-2 text-red-700 hover:bg-white"
                    >
                      {ctaLink.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {!loading && !fetchError && monthCalendars.length === 0 && (
              <p className="text-center text-sm text-gray-500">{emptyMessage}</p>
            )}

            {!loading && !fetchError && monthCalendars.length > 0 && (
              <>
                <div className="space-y-8">
                  {monthCalendars.map((month) => (
                    <article
                      key={month.monthKey}
                      className="rounded-2xl border border-gray-200 p-4 sm:p-6 shadow-xs"
                    >
                      <div className="mb-4 flex items-center justify-between">
                        <div className="flex flex-col">
                          <p className="text-xs uppercase tracking-wide text-blue-500 font-semibold">
                            Lodgify
                          </p>
                          <h3 className="text-lg font-bold capitalize text-gray-900">
                            {month.label}
                          </h3>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <button
                            type="button"
                            className="rounded-full border border-gray-200 p-2"
                            aria-hidden="true"
                            tabIndex={-1}
                            disabled
                          >
                            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                          </button>
                          <button
                            type="button"
                            className="rounded-full border border-gray-200 p-2"
                            aria-hidden="true"
                            tabIndex={-1}
                            disabled
                          >
                            <ChevronRight className="h-4 w-4" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <div className="overflow-x-auto">
                        <table
                          className="w-full border-collapse text-center text-xs sm:text-sm"
                          aria-label={`${tableAriaLabel} - ${month.label}`}
                          role="grid"
                        >
                          <thead>
                            <tr className="text-gray-500">
                              {weekdayShort[locale].map((weekday) => (
                                <th key={`${month.monthKey}-${weekday}`} className="py-2 font-medium">
                                  {weekday}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {month.weeks.map((week, idx) => (
                              <tr key={`${month.monthKey}-week-${idx}`}>
                                {week.map((cell) => {
                                  if (cell.outside) {
                                    return (
                                      <td
                                        key={cell.key}
                                        className="h-12 sm:h-14"
                                        aria-hidden="true"
                                      >
                                        <span className="block h-full w-full rounded-lg border border-transparent bg-transparent" />
                                      </td>
                                    );
                                  }

                                  const formattedDate = cell.iso
                                    ? dayFormatter.format(new Date(`${cell.iso}T00:00:00`))
                                    : "";
                                  const statusKey = cell.status ?? "unknown";

                                  return (
                                    <td key={cell.key} className="h-12 sm:h-14 align-top">
                                      <div
                                        role="button"
                                        aria-label={`${formattedDate} – ${statusLabels[statusKey]}`}
                                        className={`flex h-full w-full flex-col items-center justify-center rounded-lg border px-1 py-2 font-semibold ${statusClasses[statusKey]}`}
                                      >
                                        <span>{cell.dayNumber}</span>
                                      </div>
                                    </td>
                                  );
                                })}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-4 text-xs text-gray-600">
                  {legend.map((item) => (
                    <span key={item.status} className="flex items-center gap-2">
                      <span
                        className={`h-4 w-4 rounded border ${statusClasses[item.status]}`}
                      ></span>
                      {item.label}
                    </span>
                  ))}
                </div>
              </>
            )}
          </section>

          <section className="w-full max-w-4xl bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-xl p-6 sm:p-8 text-white text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">{cta.title}</h2>
            <p className="text-xs sm:text-sm md:text-base text-blue-50 mb-5">{cta.description}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={cta.primary.href}
                target={cta.primary.href.startsWith("http") ? "_blank" : undefined}
                rel={cta.primary.href.startsWith("http") ? "nofollow" : undefined}
                className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors w-full sm:w-auto"
              >
                {cta.primary.label}
              </Link>
              <Link
                href={withLocale(cta.secondary.href)}
                className="border border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors w-full sm:w-auto"
              >
                {cta.secondary.label}
              </Link>
            </div>
          </section>

          <section className="w-full max-w-4xl mt-8 flex flex-col gap-4 text-gray-600 text-sm">
            {info.map((line) => (
              <div key={line} className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-500" aria-hidden="true" />
                <p>{line}</p>
              </div>
            ))}
          </section>

          <section className="sr-only" aria-label={screenReader.title}>
            <h2>{screenReader.title}</h2>
            {screenReader.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        </main>
      </div>
    </>
  );
}

