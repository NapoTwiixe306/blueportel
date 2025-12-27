import Image from "next/image";
import Link from "next/link";
import { Home as HomeIcon, Waves, MapPin, Star, ChevronRight } from "lucide-react";

import ReservationForm from "../../../app/components/ReservationForm";
import Terasse from "../../img/terrasse-mobil-home-vue-mer-le-portel.png";

import type { HomeDictionary, FeatureIcon } from "../../i18n/home/types";

type HomePageProps = {
  dictionary: HomeDictionary;
};

const iconComponents: Record<FeatureIcon, typeof HomeIcon> = {
  home: HomeIcon,
  waves: Waves,
  map: MapPin,
  star: Star,
};

export default function HomePage({ dictionary }: HomePageProps) {
  const {
    hero,
    reservation,
    features,
    location,
    cta,
    screenReader,
    structuredData,
    reservationForm,
  } = dictionary;

  const homeLabel =
    dictionary.locale === "fr"
      ? "Accueil"
      : "Home";

  const withLocale = (path: string) => {
    if (!path || path === "#") return "#";
    if (path.startsWith("http") || path.startsWith("mailto") || path.startsWith("tel")) {
      return path;
    }
    if (path === "/") return `/${dictionary.locale}`;
    if (path.startsWith("/")) return `/${dictionary.locale}${path}`;
    return `/${dictionary.locale}/${path}`;
  };

  return (
    <>
      {Object.entries(structuredData).map(([key, schema]) => (
        <script
          key={key}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <div className="flex min-h-screen items-center justify-center bg-white font-sans w-full overflow-x-hidden">
        <main className="flex min-h-screen w-full max-w-7xl flex-col items-center py-6 px-3 sm:py-8 sm:px-4 md:py-12 md:px-6 lg:py-16 lg:px-8 bg-white">
          <nav aria-label="Breadcrumb" className="w-full max-w-7xl mb-4 sm:mb-6">
            <ol className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 px-3 sm:px-4">
              <li>
                <Link href={`/${dictionary.locale}`} className="hover:text-blue-500 transition-colors">
                  {homeLabel}
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
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-black leading-tight px-3 mb-3">
              {hero.title} <br className="hidden sm:block" />
              <span className="text-blue-500 font-bold" style={{ fontFamily: "var(--font-gluten)" }}>
                {hero.highlight}
              </span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 font-bold mb-4 sm:mb-6 px-3">
              {hero.tagline}
            </p>
            <p className="sr-only">{hero.srDescription}</p>
            <div className="flex flex-col sm:flex-row gap-3 px-3 items-stretch sm:items-center justify-center">
              <Link
                href={hero.ctaPrimary.href}
                target={hero.ctaPrimary.rel ? "_blank" : undefined}
                rel={hero.ctaPrimary.rel}
                className="border-2 border-blue-500 text-black font-bold hover:bg-blue-500 hover:text-white transition-colors duration-300 px-6 py-2.5 rounded-md text-sm text-center"
              >
                {hero.ctaPrimary.label}
              </Link>
              <Link
                href={withLocale(hero.ctaSecondary.href)}
                className="bg-blue-500 text-white font-bold hover:bg-blue-600 transition-colors duration-300 px-6 py-2.5 rounded-md text-sm text-center"
              >
                {hero.ctaSecondary.label}
              </Link>
            </div>
          </header>

          <section
            className="reservation mt-12 sm:mt-16 md:mt-20 w-full max-w-4xl p-6 bg-gray-200 rounded-2xl shadow text-center"
            aria-label={reservation.title}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black leading-tight mb-4">
              {reservation.title}
            </h2>
            <p className="text-gray-500 font-semibold mb-8">{reservation.subtitle}</p>
            <ReservationForm dictionary={reservationForm} />
            <div className="mt-8">
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-black">
                {reservation.priceLabel}
              </h3>
              <p className="text-3xl sm:text-4xl font-bold text-black mb-2">
                {reservation.priceValue}{" "}
                <span className="text-blue-500">{reservation.priceSuffix}</span>
              </p>
              <p className="text-sm text-gray-500">{reservation.note}</p>
            </div>
          </section>

          <section
            className="features mt-12 sm:mt-16 md:mt-20 w-full max-w-7xl px-3"
            aria-label={features.srTitle}
          >
            <h2 className="sr-only">{features.srTitle}</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {features.cards.map((card, index) => {
                const Icon = iconComponents[card.icon];
                return (
                  <article key={`${card.icon}-${index}`} className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-500 rounded-lg flex items-center justify-center mb-3">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-sm font-medium text-black">{card.title}</h3>
                    <p className="text-xs text-gray-500 font-semibold w-3/4 mx-auto">{card.description}</p>
                  </article>
                );
              })}
            </div>
          </section>

          <section
            className="location mt-12 sm:mt-16 md:mt-20 w-full max-w-7xl px-3"
            aria-label={location.title}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-black font-bold text-center mb-4">
              {location.title}{" "}
              <span className="text-blue-500" style={{ fontFamily: "var(--font-gluten)" }}>
                {location.highlight}
              </span>
            </h2>
            <p className="text-gray-500 text-center font-semibold mb-6">{location.subtitle}</p>
            <div className="text-sm text-gray-700 text-center max-w-4xl mx-auto space-y-4">
              {location.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {location.comfortParagraph.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="bg-gray-200 rounded-2xl p-6 shadow-lg mt-8 space-y-8">
              <article>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{location.interiorTitle}</h3>
                <p className="text-sm text-gray-700 mb-4">{location.interiorParagraph}</p>
                <ul className="space-y-3">
                  {location.interiorList.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 text-blue-500 mt-1" />
                      <span className="text-sm text-gray-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
              <article>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{location.exteriorTitle}</h3>
                <p className="text-sm text-gray-700 mb-4">{location.exteriorParagraph}</p>
                <ul className="space-y-3">
                  {location.exteriorList.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 text-blue-500 mt-1" />
                      <span className="text-sm text-gray-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
              <div
                className="w-full max-h-96 overflow-hidden rounded-2xl"
                id="decouvrir-le-mobil-home"
              >
                <Image
                  src={Terasse}
                  alt={location.imageAlt}
                  width={1200}
                  height={500}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </section>

          <section className="cta mt-12 sm:mt-16 md:mt-20 w-full max-w-7xl px-3 py-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl text-center text-white shadow-xl">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">{cta.title}</h2>
              <p className="text-base sm:text-lg text-blue-50">{cta.description}</p>
              <Link
                href={cta.buttonHref}
                target={cta.buttonRel ? "_blank" : undefined}
                rel={cta.buttonRel}
                className="inline-block bg-white text-blue-600 font-bold text-lg px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                {cta.buttonLabel}
              </Link>
            </div>
          </section>

          <section className="sr-only" aria-label={screenReader.heading}>
            <h2>{screenReader.heading}</h2>
            {screenReader.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <h3>{screenReader.listTitle}</h3>
            <ul>
              {screenReader.listItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </>
  );
}

