"use client";

import Link from "next/link";
import {
  PiggyBank,
  Shield,
  CalendarClock,
  CheckCircle2,
} from "lucide-react";

import type { TarifsDictionary, InfoBlock } from "../../i18n/tarifs/types";

const iconMap: Record<InfoBlock["icon"], typeof PiggyBank> = {
  deposit: PiggyBank,
  caution: Shield,
  schedule: CalendarClock,
  included: CheckCircle2,
};

type TarifsPageProps = {
  dictionary: TarifsDictionary;
};

export default function TarifsPage({ dictionary }: TarifsPageProps) {
  const { hero, seasons, infoBlocks, cta, screenReader, structuredData, locale } =
    dictionary;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData.breadcrumb),
        }}
      />
      <div className="flex min-h-screen items-center justify-center bg-white font-sans w-full overflow-x-hidden">
        <main className="flex min-h-screen w-full max-w-7xl flex-col items-center py-6 px-3 sm:py-8 sm:px-4 md:py-12 md:px-6 lg:py-16 lg:px-8 bg-white">
          <nav aria-label="Breadcrumb" className="w-full max-w-7xl mb-4 sm:mb-6">
            <ol className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 px-3 sm:px-4">
              <li>
                <Link
                  href={`/${locale}`}
                  className="hover:text-blue-500 transition-colors"
                >
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

          <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-14">
            {seasons.map((season) => (
              <article
                key={season.name}
                className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-7 shadow-sm"
              >
                <p className="text-xs sm:text-sm uppercase tracking-wide text-blue-500 font-semibold mb-1">
                  {season.period}
                </p>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {season.name}
                </h2>
                <p className="text-2xl font-bold text-black mb-2">{season.price}</p>
                <p className="text-xs text-gray-500 mb-4">{season.minStay}</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  {season.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2">
                      <CheckCircle2
                        className="w-4 h-4 text-blue-500 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </section>

          <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-14">
            {infoBlocks.map((block) => {
              const Icon = iconMap[block.icon];
              return (
                <article
                  key={block.title}
                  className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-6 h-6 text-blue-500" aria-hidden="true" />
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                      {block.title}
                    </h2>
                  </div>
                  <ul className="space-y-3 text-sm text-gray-700">
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </section>

          <section className="w-full max-w-6xl mb-10 sm:mb-16">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-xl p-6 sm:p-8 text-white text-center">
              <h2 className="text-xl sm:text-2xl font-bold mb-3">{cta.title}</h2>
              <p className="text-sm sm:text-base text-blue-50 mb-5">
                {cta.description}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href={cta.buttons.primary.href}
                  target="_blank"
                  rel={cta.buttons.primary.rel}
                  className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors w-full sm:w-auto"
                >
                  {cta.buttons.primary.label}
                </Link>
                <Link
                  href={cta.buttons.secondary.href}
                  className="border border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors w-full sm:w-auto"
                >
                  {cta.buttons.secondary.label}
                </Link>
              </div>
            </div>
          </section>

          <section className="sr-only" aria-label={screenReader.title}>
            <h2>{screenReader.title}</h2>
            {screenReader.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        </main>
      </div>
    </>
  );
}

