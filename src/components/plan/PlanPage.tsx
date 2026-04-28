"use client";

import Link from "next/link";
import { useMemo } from "react";
import {
  MapPin,
  Car,
  Train,
  Bus,
  Bike,
  Plane,
  Navigation,
  Info,
} from "lucide-react";

import type { PlanDictionary } from "../../i18n/plan/types";

type PlanPageProps = {
  dictionary: PlanDictionary;
};

export default function PlanPage({ dictionary }: PlanPageProps) {
  const {
    locale,
    hero,
    locationCard,
    map,
    drivingSection,
    trainInfo,
    busInfo,
    bikeInfo,
    planeInfo,
    distanceInfo,
    assistance,
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

  const mapEmbedUrl = useMemo(() => map.embedUrl, [map.embedUrl]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.list) }}
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
            aria-label="Map and contact"
          >
            <article className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-blue-600" aria-hidden="true" />
                <div className="text-left">
                  <p className="text-xs uppercase tracking-wide text-blue-500 font-semibold">
                    {locationCard.title}
                  </p>
                  <h2 className="text-lg font-bold text-gray-900">{locationCard.address}</h2>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-700">{locationCard.description}</p>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                <p>
                  <strong>{locationCard.gpsLabel}:</strong> {locationCard.gpsValue}
                </p>
                <p>
                  <strong>{locationCard.phoneLabel}:</strong>{" "}
                  <a href={locationCard.phoneHref} className="text-blue-600 hover:text-blue-700">
                    {locationCard.phoneValue}
                  </a>
                </p>
                <p>
                  <strong>{locationCard.emailLabel}:</strong>{" "}
                  <a href={locationCard.emailHref} className="text-blue-600 hover:text-blue-700">
                    {locationCard.emailValue}
                  </a>
                </p>
                <p>
                  <strong>Parking:</strong> {locationCard.parking}
                </p>
              </div>
            </article>

            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <iframe
                title="Blueportel map"
                src={mapEmbedUrl}
                loading="lazy"
                className="w-full h-72 sm:h-96"
                style={{ border: 0 }}
                allowFullScreen
                aria-label={map.ariaLabel}
              />
            </div>
          </section>

          <section className="w-full max-w-6xl mb-10 sm:mb-14" aria-label="Driving directions">
            <div className="flex items-center gap-3 mb-4">
              <Car className="w-6 h-6 text-blue-600" aria-hidden="true" />
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                {drivingSection.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {drivingSection.cards.map((route) => (
                <article
                  key={`${route.origin}-${route.duration}`}
                  className="bg-gray-50 border border-gray-100 rounded-2xl p-5 shadow-sm"
                >
                  <p className="text-sm uppercase tracking-wide text-blue-500 font-semibold mb-1">
                    {route.origin}
                  </p>
                  <p className="text-lg font-bold text-gray-900 mb-2">{route.duration}</p>
                  <p className="text-sm text-gray-700">{route.route}</p>
                </article>
              ))}
            </div>
          </section>

          <section
            className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-14"
            aria-label="Public transport"
          >
            <article className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Train className="w-6 h-6 text-blue-600" aria-hidden="true" />
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">{trainInfo.title}</h2>
              </div>
              <ul className="space-y-3 text-sm sm:text-base text-gray-700">
                {trainInfo.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>

            <article className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Bus className="w-6 h-6 text-blue-600" aria-hidden="true" />
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">{busInfo.title}</h2>
              </div>
              <ul className="space-y-3 text-sm sm:text-base text-gray-700">
                {busInfo.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          </section>

          <section
            className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-14"
            aria-label="Other transport"
          >
            <article className="bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col gap-3">
              <div className="flex items-center gap-2 text-blue-600">
                <Bike className="w-5 h-5" aria-hidden="true" />
                <h3 className="text-base font-semibold text-gray-900">{bikeInfo.title}</h3>
              </div>
              <p className="text-sm text-gray-700">{bikeInfo.text}</p>
            </article>

            <article className="bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col gap-3">
              <div className="flex items-center gap-2 text-blue-600">
                <Plane className="w-5 h-5" aria-hidden="true" />
                <h3 className="text-base font-semibold text-gray-900">{planeInfo.title}</h3>
              </div>
              <p className="text-sm text-gray-700">{planeInfo.text}</p>
            </article>

            <article className="bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col gap-3">
              <div className="flex items-center gap-2 text-blue-600">
                <Navigation className="w-5 h-5" aria-hidden="true" />
                <h3 className="text-base font-semibold text-gray-900">{distanceInfo.title}</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                {distanceInfo.items.map((item) => (
                  <li key={item.label} className="flex justify-between">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </li>
                ))}
              </ul>
            </article>
          </section>

          <section className="w-full max-w-6xl mb-10 sm:mb-16">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Info className="w-6 h-6" aria-hidden="true" />
                <h2 className="text-xl sm:text-2xl font-bold">{assistance.title}</h2>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-blue-50 mb-6">
                {assistance.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={assistance.phoneHref}
                  className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg text-center hover:bg-blue-50 transition-colors flex-1"
                >
                  {assistance.phoneLabel}
                </Link>
                <Link
                  href={assistance.emailHref}
                  className="border border-white text-white font-bold px-6 py-3 rounded-lg text-center hover:bg-white/10 transition-colors flex-1"
                >
                  {assistance.emailLabel}
                </Link>
                <Link
                  href={withLocale(assistance.bookingHref)}
                  target={assistance.bookingHref.startsWith("http") ? "_blank" : undefined}
                  rel={assistance.bookingHref.startsWith("http") ? "nofollow" : undefined}
                  className="bg-white/10 border border-white/30 text-white font-bold px-6 py-3 rounded-lg text-center hover:bg-white/20 transition-colors flex-1"
                >
                  {assistance.bookingLabel}
                </Link>
              </div>
            </div>
          </section>

          <section className="sr-only" aria-label={screenReader.title}>
            <h2>{screenReader.title}</h2>
            <p>{screenReader.paragraph}</p>
          </section>
        </main>
      </div>
    </>
  );
}

