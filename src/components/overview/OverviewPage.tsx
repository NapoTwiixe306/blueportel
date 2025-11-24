"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Users,
  PawPrint,
  Clock,
  BedDouble,
  Bath,
  SunMedium,
  Utensils,
  Shield,
  ChevronRight,
} from "lucide-react";

import type {
  OverviewDictionary,
  HighlightIcon,
  EquipmentBlock,
} from "../../i18n/overview/types";

const highlightIcons: Record<HighlightIcon, typeof BedDouble> = {
  beds: BedDouble,
  bath: Bath,
  terrace: SunMedium,
  kitchen: Utensils,
};

type OverviewPageProps = {
  dictionary: OverviewDictionary;
};

export default function OverviewPage({ dictionary }: OverviewPageProps) {
  const {
    locale,
    hero,
    stayCard,
    heroImageAlt,
    interior,
    exterior,
    highlights,
    equipment,
    location,
    policies,
    cta,
    screenReader,
    structuredData,
  } = dictionary;

  const withLocale = (path: string) => {
    if (!path || path === "#") return "#";
    if (path.startsWith("http") || path.startsWith("tel") || path.startsWith("mailto")) {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.equipment) }}
      />
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

          <header className="w-full max-w-5xl text-center mb-8 sm:mb-12">
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

          <section
            className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-14"
            aria-label="Présentation générale"
          >
            <article className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-6 sm:p-8 shadow-xl">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">{stayCard.title}</h2>
              <p className="text-sm sm:text-base text-blue-50 leading-relaxed mb-4">
                {stayCard.description}
              </p>
              <ul className="space-y-2 text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <Users className="w-5 h-5 mt-1" aria-hidden="true" />
                  {stayCard.bullets[0]}
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-5 h-5 mt-1" aria-hidden="true" />
                  {stayCard.bullets[1]}
                </li>
                <li className="flex items-start gap-2">
                  <PawPrint className="w-5 h-5 mt-1" aria-hidden="true" />
                  {stayCard.bullets[2]}
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Link
                  href={stayCard.cta.primary.href}
                  target={stayCard.cta.primary.rel ? "_blank" : undefined}
                  rel={stayCard.cta.primary.rel}
                  className="bg-white text-blue-600 font-bold px-5 py-3 rounded-lg text-center hover:bg-blue-50 transition-colors"
                >
                  {stayCard.cta.primary.label}
                </Link>
                <Link
                  href={withLocale(stayCard.cta.secondary.href)}
                  className="border border-white text-white font-bold px-5 py-3 rounded-lg text-center hover:bg-white/10 transition-colors"
                >
                  {stayCard.cta.secondary.label}
                </Link>
              </div>
            </article>

            <figure className="relative h-64 sm:h-80 md:h-full rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/galerie/blueportel-terrasse-ensoleillee.jpg"
                alt={heroImageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </figure>
          </section>

          <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-14">
            {[interior, exterior].map((block) => (
              <article
                className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm"
                key={block.title}
              >
                <h2 className="text-lg sm:text-xl font-bold  text-black mb-4">{block.title}</h2>
                <ul className="space-y-3 text-sm sm:text-base text-gray-700">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>

          <section className="w-full max-w-6xl mb-10 sm:mb-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {highlights.map((card) => {
                const Icon = highlightIcons[card.icon];
                return (
                  <article
                    className="bg-gray-50 border border-gray-100 rounded-2xl p-5 shadow-sm"
                    key={card.title}
                  >
                    <Icon className="w-8 h-8 text-blue-500 mb-3" aria-hidden="true" />
                    <h3 className="text-base font-semibold text-gray-900 mb-1.5">{card.title}</h3>
                    <p className="text-sm text-gray-600">{card.description}</p>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-14">
            {equipment.map((block: EquipmentBlock) => (
              <article
                className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-7 shadow-sm"
                key={block.title}
              >
                <h3 className="text-base font-semibold text-gray-900 mb-4">{block.title}</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {block.items.map((item) => (
                    <li className="flex items-start gap-2" key={item}>
                      <ChevronRight className="w-4 h-4 text-blue-500 mt-1" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </section>

          <section className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
            <article className="bg-blue-50 border border-blue-100 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-blue-600" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-gray-900">{location.title}</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{location.description}</p>
            </article>

            <article className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-blue-600" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-gray-900">{policies.title}</h3>
              </div>
              <ul className="space-y-3 text-sm sm:text-base text-gray-700">
                {policies.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </section>

          <section className="w-full max-w-6xl mb-10 sm:mb-16">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 text-white text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">{cta.title}</h2>
              <p className="text-sm sm:text-base md:text-lg text-blue-50 mb-6">{cta.description}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href={cta.buttons.primary.href}
                  className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors w-full sm:w-auto"
                >
                  {cta.buttons.primary.label}
                </Link>
                <Link
                  href={withLocale(cta.buttons.secondary.href)}
                  className="border border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors w-full sm:w-auto"
                >
                  {cta.buttons.secondary.label}
                </Link>
              </div>
            </div>
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

