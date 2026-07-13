"use client";

import Link from "next/link";
import { useState } from "react";
import { Clock } from "lucide-react";

import type { AvailabilityDictionary } from "../../i18n/disponibilites/types";
import { accommodations, type AccommodationId } from "../../data/accommodations";
import AvailabilityCalendar from "./AvailabilityCalendar";

type DisponibilitesPageProps = {
  dictionary: AvailabilityDictionary;
};

const PROPERTY_ORDER: AccommodationId[] = ["horizon", "prestige"];

export default function DisponibilitesPage({ dictionary }: DisponibilitesPageProps) {
  const { locale, hero, cta, info, screenReader, structuredData } = dictionary;

  const [selected, setSelected] = useState<AccommodationId>("horizon");

  const withLocale = (path: string) => {
    if (!path || path === "#") return "#";
    if (path.startsWith("http") || path.startsWith("mailto") || path.startsWith("tel")) {
      return path;
    }
    if (path === "/") return `/${locale}`;
    if (/^\/(fr|en|nl)(\/|$)/.test(path)) return path;
    if (path.startsWith("/")) return `/${locale}${path}`;
    return `/${locale}/${path}`;
  };

  const shortName = (id: AccommodationId) =>
    accommodations[id].name.replace("BluePortel ", "");

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

          {/* Sélecteur de logement */}
          <div
            className="mb-6 inline-flex rounded-xl border border-gray-200 bg-gray-50 p-1"
            role="tablist"
            aria-label="Logement"
          >
            {PROPERTY_ORDER.map((id) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={selected === id}
                onClick={() => setSelected(id)}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                  selected === id
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {shortName(id)}
              </button>
            ))}
          </div>

          <section className="w-full max-w-3xl mb-8">
            <AvailabilityCalendar key={selected} propertyId={selected} locale={locale} large />
          </section>

          <section className="w-full max-w-4xl bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-xl p-6 sm:p-8 text-white text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">{cta.title}</h2>
            <p className="text-xs sm:text-sm md:text-base text-blue-50 mb-5">{cta.description}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={withLocale(cta.primary.href)}
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
