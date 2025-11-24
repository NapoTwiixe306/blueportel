"use client";

import Link from "next/link";
import { useMemo } from "react";
import {
  Star,
  Quote,
  Heart,
  Smile,
  Users,
  ThumbsUp,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

import type { AvisDictionary } from "../../i18n/avis/types";

type AvisPageProps = {
  dictionary: AvisDictionary;
};

const reasonIcons = {
  heart: Heart,
  smile: Smile,
  users: Users,
  map: MapPin,
};

const shareIcons = {
  email: Mail,
  facebook: ThumbsUp,
  airbnb: MapPin,
};

export default function AvisPage({ dictionary }: AvisPageProps) {
  const {
    locale,
    hero,
    stats,
    reviews,
    reasons,
    share,
    cta,
    screenReader,
    structuredData,
  } = dictionary;

  const withLocale = (path: string) => {
    if (!path || path === "#") return "#";
    if (path.startsWith("http") || path.startsWith("mailto") || path.startsWith("tel")) {
      return path;
    }
    if (path === "/") return `/${locale}`;
    if (path.startsWith("/")) return `/${locale}${path}`;
    return `/${locale}/${path}`;
  };

  const starArray = useMemo(() => [1, 2, 3, 4, 5], []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }}
      />

      <div className="flex min-h-screen items-center justify-center bg-white font-sans w-full overflow-x-hidden">
        <main className="flex min-h-screen w-full max-w-7xl flex-col items-center py-6 px-3 sm:py-8 sm:px-4 md:py-12 md:px-6 lg:py-16 lg:px-8 bg-white">
          <nav aria-label="Breadcrumb" className="w-full max-w-7xl mb-4 sm:mb-6">
            <ol className="flex.items-center space-x-2 text-xs sm:text-sm text-gray-600 px-3 sm:px-4">
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
            className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-14"
            aria-label="Stats"
          >
            {stats.map((item) => (
              <article
                key={item.label}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-7.shadow-sm text-center"
              >
                <p className="text-xs uppercase tracking-wide text-blue-500 font-semibold">
                  {item.label}
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">{item.value}</p>
              </article>
            ))}
          </section>

          <section
            className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-14"
            aria-label="Customer reviews"
          >
            {reviews.map((review) => (
              <article
                key={review.name}
                className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <Quote className="w-10 h-10 text-blue-500" aria-hidden="true" />
                  <div>
                    <p className="text-base font-semibold text-gray-900">{review.name}</p>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {starArray.map((value) => (
                    <Star
                      key={`star-${review.name}-${value}`}
                      className={`w-4 h-4 ${
                        value <= review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"
                      }`}
                      aria-hidden="true"
                    />
                  ))}
                  <span className="text-xs text-gray-500 ml-2">{review.rating}/5</span>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{review.text}</p>
              </article>
            ))}
          </section>

          <section
            className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-14"
            aria-label="Why guests recommend us"
          >
            <article className="bg-blue-50 border border-blue-100 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">{reasons.title}</h2>
              <ul className="space-y-3 text-sm sm:text-base text-gray-700">
                {reasons.items.map((item, index) => {
                  const Icon = reasonIcons[item.icon];
                  return (
                    <li key={`${item.text}-${index}`} className="flex items-start gap-2">
                      <Icon className="w-5 h-5 text-blue-500 mt-1" aria-hidden="true" />
                      <span>{item.text}</span>
                    </li>
                  );
                })}
              </ul>
            </article>

            <article className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">{share.title}</h2>
              <p className="text-sm sm:text-base text-gray-700 mb-4">{share.description}</p>
              <div className="flex flex-col gap-3 text-sm text-gray-700">
                {share.links.map((link) => {
                  const Icon = shareIcons[link.type];
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "nofollow" : undefined}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                    >
                      <Icon aria-hidden="true" className="w-4 h-4" />
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </article>
          </section>

          <section className="w-full max-w-6xl mb-10 sm:mb-16">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 text-white text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">{cta.title}</h2>
              <p className="text-sm sm:text-base md:text-lg text-blue-50 mb-6">{cta.description}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href={cta.phoneHref}
                  className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors w-full sm:w-auto"
                >
                  {cta.phoneLabel}
                </Link>
                <Link
                  href={cta.emailHref}
                  className="border border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors w-full sm:w-auto"
                >
                  {cta.emailLabel}
                </Link>
                <Link
                  href={withLocale(cta.bookingHref)}
                  target={cta.bookingHref.startsWith("http") ? "_blank" : undefined}
                  rel={cta.bookingHref.startsWith("http") ? "nofollow" : undefined}
                  className="bg-white/10 border border-white/30 text-white font-bold px-6 py-3 rounded-lg hover:bg-white/20 transition-colors w-full sm:w-auto"
                >
                  {cta.bookingLabel}
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

