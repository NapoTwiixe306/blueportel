import Link from "next/link";
import { Home as HomeIcon, Waves, MapPin, Star } from "lucide-react";

import type { HomeDictionary, FeatureIcon } from "../../i18n/home/types";
import Hero from "./hero";
import LocationCarousel from "./LocationCarousel";

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
    features,
    location,
    cta,
    screenReader,
    structuredData,
  } = dictionary;

  const homeLabel =
    dictionary.locale === "fr"
      ? "Accueil"
      : dictionary.locale === "en"
      ? "Home"
      : "Startpagina";

  const withLocale = (path: string) => {
    if (!path || path === "#") return "#";
    if (path.startsWith("http") || path.startsWith("mailto") || path.startsWith("tel")) {
      return path;
    }
    if (path === "/") return `/${dictionary.locale}`;
    if (path.startsWith("/")) return `/${dictionary.locale}${path}`;
    return `/${dictionary.locale}/${path}`;
  };

  // Prepare hero data with localized URLs
  const heroWithLocalizedUrls = {
    ...hero,
    ctaSecondary: {
      ...hero.ctaSecondary,
      href: withLocale(hero.ctaSecondary.href),
    },
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
      <div className="w-full overflow-x-hidden bg-white">
        <main className="w-full">
       
        { /* Hero Section */}
          <Hero hero={heroWithLocalizedUrls} locale={dictionary.locale} />
        
        {/* Features Section */}
          <section
            className="w-full px-3 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20"
            aria-label={features.srTitle}
          >
            <div className="max-w-7xl mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-black mb-8 sm:mb-10 md:mb-12">
                {features.srTitle}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {features.cards.map((card, index) => {
                  const Icon = iconComponents[card.icon];
                  return (
                    <article
                      key={`${card.icon}-${index}`}
                      className="flex flex-col items-center text-center rounded-2xl sm:rounded-3xl border border-gray-100 bg-white p-4 sm:p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="mb-4 flex h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 items-center justify-center rounded-2xl sm:rounded-3xl bg-blue-50">
                        <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-blue-600" />
                      </div>
                      <h3 className="text-sm sm:text-base font-semibold text-black">{card.title}</h3>
                      <p className="mt-2 text-xs sm:text-sm leading-5 sm:leading-6 text-gray-500">{card.description}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Location Section */}
          <section
            className="w-full px-3 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20"
            aria-label={location.title}
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid gap-8 sm:gap-10 lg:grid-cols-[0.9fr_1.7fr] items-start lg:items-center">
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] sm:tracking-[0.3em] text-blue-600">
                    {location.highlight}
                  </p>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                    {location.subtitle}
                  </h2>
                  <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg leading-6 sm:leading-8 text-slate-700">
                    {location.intro.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                <div className="w-full">
                  <LocationCarousel slides={location.carouselImages} />
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="w-full px-3 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center text-white shadow-lg">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">{cta.title}</h2>
              <p className="text-sm sm:text-base md:text-lg text-blue-50 mb-6 sm:mb-8 leading-6 sm:leading-7">{cta.description}</p>
              <Link
                href={cta.buttonHref}
                target={cta.buttonRel ? "_blank" : undefined}
                rel={cta.buttonRel}
                className="inline-block bg-white text-blue-600 font-bold text-sm sm:text-base md:text-lg px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-blue-50 transition-colors"
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

