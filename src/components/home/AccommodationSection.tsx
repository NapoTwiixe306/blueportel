import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AccommodationGallery from "../accommodations/AccommodationGallery";
import AccommodationFeatures from "../accommodations/AccommodationFeatures";
import type { Accommodation } from "../../data/accommodations";

type AccommodationSectionProps = {
  accommodation: Accommodation;
  locale: string;
  isReversed?: boolean;
  labels: {
    capacity: string;
    bedrooms: string;
    discover: string;
    book: string;
    comingSoon: string;
    equipment: string;
    included: string;
    notIncluded: string;
  };
};

export default function AccommodationSection({
  accommodation,
  locale,
  isReversed = false,
  labels,
}: AccommodationSectionProps) {
  const detailUrl = `/${locale}${accommodation.detailPath}`;
  const bookUrl = accommodation.bookingUrl[locale as "fr" | "en" | "nl"] ?? accommodation.bookingUrl.fr;

  return (
    <section
      id={accommodation.id}
      className="w-full px-3 sm:px-6 lg:px-8 py-16 sm:py-20 scroll-mt-20"
      aria-label={accommodation.name}
    >
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start ${isReversed ? "lg:[&>*:first-child]:order-2" : ""}`}>
          {/* Gallery */}
          <div>
            <AccommodationGallery
              images={accommodation.images}
              name={accommodation.name}
              hasPlaceholder={accommodation.hasPlaceholderImages}
            />
            {accommodation.hasPlaceholderImages && (
              <p className="mt-3 text-center text-xs text-slate-400 italic">
                {labels.comingSoon}
              </p>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
                  BluePortel
                </span>
                <span className="text-xs text-slate-400">·</span>
                <span className="text-xs font-semibold text-slate-500">
                  {accommodation.badge}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                {accommodation.name.replace("BluePortel ", "")}
              </h2>
              <p className="mt-2 text-base sm:text-lg text-slate-500">{accommodation.tagline}</p>
            </div>

            {/* Key specs */}
            <div className="flex flex-wrap gap-3">
              {[
                `${accommodation.capacity} ${labels.capacity}`,
                `${accommodation.bedrooms} ${labels.bedrooms}`,
                "Vue mer",
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
              accommodation={accommodation}
              labels={{ included: labels.included, notIncluded: labels.notIncluded }}
            />

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href={detailUrl}
                className="group inline-flex items-center justify-center gap-2 rounded-xl border-2 border-blue-600 px-6 py-3 text-sm font-bold text-blue-600 transition-all hover:bg-blue-50 active:scale-[0.98]"
              >
                {labels.discover}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href={bookUrl}
                target="_blank"
                rel="noopener nofollow"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-md shadow-blue-600/20 transition-all hover:bg-blue-700 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                {labels.book}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
