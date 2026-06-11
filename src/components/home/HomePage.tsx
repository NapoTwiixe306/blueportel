import type { HomeDictionary } from "../../i18n/home/types";
import { JsonLdVacationRental } from "../seo/JsonLdVacationRental";
import { accommodations } from "../../data/accommodations";

import Hero from "./hero";
import AccommodationCard from "../accommodations/AccommodationCard";
import AccommodationComparison from "../accommodations/AccommodationComparison";
import AccommodationSection from "./AccommodationSection";
import WhyBluePortel from "./WhyBluePortel";
import Testimonials from "./Testimonials";
import HomeFAQ from "./HomeFAQ";
import FinalCTA from "./FinalCTA";

type HomePageProps = {
  dictionary: HomeDictionary;
};

export default function HomePage({ dictionary }: HomePageProps) {
  const { locale, hero, choose, comparison, prestige, horizon, why, testimonials, faq, finalCta } = dictionary;
  const { prestige: prestigeData, horizon: horizonData } = accommodations;

  const withLocale = (path: string) => {
    if (!path || path === "#") return "#";
    if (path.startsWith("http") || path.startsWith("mailto") || path.startsWith("tel")) return path;
    if (path === "/") return `/${locale}`;
    if (path.startsWith("/")) return `/${locale}${path}`;
    return `/${locale}/${path}`;
  };

  return (
    <>
      <JsonLdVacationRental locale={locale} />
      <div className="w-full overflow-x-hidden bg-white">

        {/* Hero */}
        <Hero
          title={hero.title}
          subtitle={hero.subtitle}
          ctaPrimary={{
            label: hero.ctaPrimary.label,
            href: withLocale(hero.ctaPrimary.href),
          }}
          ctaSecondary={{
            label: hero.ctaSecondary.label,
            href: hero.ctaSecondary.href,
          }}
          badge={hero.badge}
          ratingText={hero.ratingText}
          statsItems={hero.statsItems}
        />

        {/* Section 1 — Choose your accommodation */}
        <section
          className="w-full px-3 sm:px-6 lg:px-8 py-16 sm:py-20 bg-white"
          aria-label={choose.title}
          id="hebergements"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">
                {choose.pretitle}
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                {choose.title}
              </h2>
              <p className="text-base text-slate-500 max-w-xl mx-auto">{choose.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <AccommodationCard
                accommodation={prestigeData}
                locale={locale}
                ctaLabel={choose.ctaPrestige}
                featured
              />
              <AccommodationCard
                accommodation={horizonData}
                locale={locale}
                ctaLabel={choose.ctaHorizon}
              />
            </div>
          </div>
        </section>

        {/* Section 2 — Comparison */}
        <AccommodationComparison
          prestige={prestigeData}
          horizon={horizonData}
          locale={locale}
          labels={comparison}
        />

        {/* Section 3 — Prestige */}
        <AccommodationSection
          accommodation={prestigeData}
          locale={locale}
          labels={prestige.sectionLabels}
        />

        {/* Divider */}
        <div className="w-full px-3 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto border-t border-gray-100" />
        </div>

        {/* Section 4 — Horizon */}
        <AccommodationSection
          accommodation={horizonData}
          locale={locale}
          isReversed
          labels={horizon.sectionLabels}
        />

        {/* Section 5 — Why BluePortel */}
        <WhyBluePortel
          title={why.title}
          subtitle={why.subtitle}
          items={why.items}
        />

        {/* Section 6 — Testimonials */}
        <Testimonials
          title={testimonials.title}
          subtitle={testimonials.subtitle}
          testimonials={testimonials.reviews}
          stats={testimonials.stats}
        />

        {/* Section 7 — FAQ */}
        <HomeFAQ
          title={faq.title}
          subtitle={faq.subtitle}
          items={faq.items}
        />

        {/* Section 8 — Final CTA */}
        <FinalCTA
          title={finalCta.title}
          subtitle={finalCta.subtitle}
          ctaPrestige={{
            label: finalCta.ctaPrestige.label,
            href: finalCta.ctaPrestige.href,
          }}
          ctaHorizon={{
            label: finalCta.ctaHorizon.label,
            href: finalCta.ctaHorizon.href,
          }}
        />

      </div>
    </>
  );
}
