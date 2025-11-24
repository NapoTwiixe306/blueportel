"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Waves,
  Coffee,
  Fish,
  Bike,
  Sun,
  Compass,
  Camera,
} from "lucide-react";

import type { GuideDictionary } from "../../i18n/guide/types";

const activityIcons = {
  waves: Waves,
  coffee: Coffee,
  fish: Fish,
  bike: Bike,
};

const highlightIcons = {
  sun: Sun,
  compass: Compass,
  camera: Camera,
};

type GuidePageProps = {
  dictionary: GuideDictionary;
};

export default function GuidePage({ dictionary }: GuidePageProps) {
  const {
    locale,
    hero,
    intro,
    activities,
    culture,
    food,
    highlights,
    cta,
    screenReader,
    structuredData,
  } = dictionary;

  const withLocale = (path: string) => {
    if (!path || path === "#") return "#";
    if (path.startsWith("http")) return path;
    if (path === "/") return `/${locale}`;
    if (path.startsWith("/")) return `/${locale}${path}`;
    return `/${locale}/${path}`;
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.guide) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }}
      />

      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans w-full overflow-x-hidden">
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

          <section className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-14">
            <article className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">{intro.title}</h2>
              {intro.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </article>
            <figure className="w-full rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <Image
                src="/galerie/blueportel-vue-mer-cote-opale.jpg"
                alt={intro.imageAlt}
                width={1600}
                height={1200}
                className="w-full h-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </figure>
          </section>

          <section className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-14">
            {activities.map((activity) => {
              const Icon = activityIcons[activity.icon];
              return (
                <article
                  key={activity.title}
                  className="bg-gray-50 border border-gray-100 rounded-2xl p-5 sm:p-6 shadow-sm"
                >
                  <Icon className="w-8 h-8 text-blue-500 mb-3" aria-hidden="true" />
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {activity.description}
                  </p>
                </article>
              );
            })}
          </section>

          <section className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-14">
            <article className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Fish className="w-6 h-6 text-blue-500" aria-hidden="true" />
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">{culture.title}</h2>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{culture.body}</p>
            </article>
            <article className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Coffee className="w-6 h-6 text-blue-500" aria-hidden="true" />
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">{food.title}</h2>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{food.body}</p>
            </article>
          </section>

          <section className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-14">
            {highlights.map((highlight) => {
              const Icon = highlightIcons[highlight.icon];
              return (
                <article
                  key={highlight.title}
                  className="bg-blue-50 border border-blue-100 rounded-2xl p-6 sm:p-7 shadow-sm"
                >
                  <Icon className="w-6 h-6 text-blue-600 mb-2" aria-hidden="true" />
                  <h3 className="text-base font-semibold.text-gray-900 mb-2">{highlight.title}</h3>
                  <p className="text-sm text-gray-700">{highlight.description}</p>
                </article>
              );
            })}
          </section>

          <section className="w-full max-w-6xl mb-10 sm:mb-16">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 text-white text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">{cta.title}</h2>
              <p className="text-sm sm:text-base md:text-lg text-blue-50 mb-6">{cta.description}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href={cta.primary.href}
                  target={cta.primary.href.startsWith("http") ? "_blank" : undefined}
                  rel={cta.primary.rel}
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

