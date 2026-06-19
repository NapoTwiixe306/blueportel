import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AccommodationGallery from "../accommodations/AccommodationGallery";
import AccommodationFeatures from "../accommodations/AccommodationFeatures";
import { accommodations } from "../../data/accommodations";
import HomeFAQ from "../home/HomeFAQ";
import type { FAQItem } from "../home/HomeFAQ";
import { JsonLdVacationRental } from "../seo/JsonLdVacationRental";
import type { Locale } from "../../i18n/locales";

type HorizonPageProps = {
  locale: string;
  labels: {
    badge: string;
    tagline: string;
    bookLabel: string;
    capacity: string;
    bedrooms: string;
    included: string;
    notIncluded: string;
    equipment: string;
    photoNotice: string;
    faqTitle: string;
    faqSubtitle: string;
    faqItems: FAQItem[];
    ctaTitle: string;
    ctaSubtitle: string;
  };
};

export default function HorizonPage({ locale, labels }: HorizonPageProps) {
  const horizon = accommodations.horizon;
  const bookUrl = horizon.bookingUrl[locale as "fr" | "en" | "nl"] ?? horizon.bookingUrl.fr;

  return (
    <div className="w-full overflow-x-hidden bg-white">
      <JsonLdVacationRental locale={locale as Locale} />
      {/* Breadcrumb */}
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-6">
        <div className="max-w-7xl mx-auto">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-slate-500">
              <li>
                <Link href={`/${locale}`} className="hover:text-blue-600 transition-colors">
                  {locale === "fr" ? "Accueil" : locale === "en" ? "Home" : "Home"}
                </Link>
              </li>
              <li aria-hidden="true">·</li>
              <li className="font-medium text-slate-900">BluePortel Horizon</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Gallery */}
            <div>
              <AccommodationGallery
                images={horizon.images}
                name={horizon.name}
                hasPlaceholder={false}
              />
            </div>

            {/* Info */}
            <div className="flex flex-col gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
                    BluePortel
                  </span>
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
                    {horizon.badge}
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                  Horizon
                  <span className="mt-2 block text-base sm:text-lg font-normal text-slate-500">
                    {horizon.tagline}
                  </span>
                </h1>
              </div>

              {/* Key specs */}
              <div className="flex flex-wrap gap-3">
                {[
                  `${horizon.capacity} ${labels.capacity}`,
                  `${horizon.bedrooms} ${labels.bedrooms}`,
                  "Vue mer",
                  "Terrasse privée",
                  "Côte d'Opale",
                ].map((spec) => (
                  <span
                    key={spec}
                    className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              {/* Features */}
              <AccommodationFeatures
                accommodation={horizon}
                labels={{ included: labels.included, notIncluded: labels.notIncluded }}
              />

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href={bookUrl}
                  target="_blank"
                  rel="noopener nofollow"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700 hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  {labels.bookLabel}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <HomeFAQ
        title={labels.faqTitle}
        subtitle={labels.faqSubtitle}
        items={labels.faqItems}
      />

      {/* Final CTA */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-br from-sky-500 via-blue-600 to-slate-800 p-8 sm:p-12 text-center shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">{labels.ctaTitle}</h2>
            <p className="text-blue-100 mb-8 max-w-lg mx-auto">{labels.ctaSubtitle}</p>
            <Link
              href={bookUrl}
              target="_blank"
              rel="noopener nofollow"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-bold text-blue-700 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98]"
            >
              {labels.bookLabel}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
