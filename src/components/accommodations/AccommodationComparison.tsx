import { Check, X } from "lucide-react";
import type { Accommodation } from "../../data/accommodations";
import { comparisonRows } from "../../data/accommodations";

type Row = {
  label: string;
  prestige: string | boolean;
  horizon: string | boolean;
};

type AccommodationComparisonProps = {
  prestige: Accommodation;
  horizon: Accommodation;
  locale: string;
  labels: {
    title: string;
    subtitle: string;
    ctaPrestige: string;
    ctaHorizon: string;
  };
};

function CellValue({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="h-5 w-5 text-blue-500 mx-auto" aria-label="Inclus" />
    ) : (
      <X className="h-4 w-4 text-gray-300 mx-auto" aria-label="Non inclus" />
    );
  }
  return <span className="text-sm font-medium text-slate-700">{value}</span>;
}

export default function AccommodationComparison({
  prestige,
  horizon,
  locale,
  labels,
}: AccommodationComparisonProps) {
  return (
    <section
      className="w-full px-3 sm:px-6 lg:px-8 py-16 sm:py-20 bg-slate-50"
      aria-label="Comparatif des hébergements"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">
            Comparatif
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {labels.title}
          </h2>
          <p className="text-base text-slate-500 max-w-xl mx-auto">{labels.subtitle}</p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white">
          {/* Header */}
          <div className="grid grid-cols-3 bg-slate-900 text-white">
            <div className="py-4 px-5 text-sm font-semibold text-slate-400">Caractéristique</div>
            <div className="py-4 px-5 text-center">
              <p className="text-xs uppercase tracking-widest text-blue-300 mb-0.5">Prestige</p>
              <p className="font-bold text-white text-sm sm:text-base">{prestige.badge}</p>
            </div>
            <div className="py-4 px-5 text-center border-l border-slate-700">
              <p className="text-xs uppercase tracking-widest text-sky-300 mb-0.5">Horizon</p>
              <p className="font-bold text-white text-sm sm:text-base">{horizon.badge}</p>
            </div>
          </div>

          {/* Rows */}
          {(comparisonRows as Row[]).map((row, index) => (
            <div
              key={row.label}
              className={`grid grid-cols-3 border-b border-gray-100 last:border-b-0 ${
                index % 2 === 0 ? "bg-white" : "bg-slate-50/50"
              }`}
            >
              <div className="py-3.5 px-5 text-sm text-slate-600 font-medium flex items-center">
                {row.label}
              </div>
              <div className="py-3.5 px-5 flex items-center justify-center border-l border-gray-100">
                <CellValue value={row.prestige} />
              </div>
              <div className="py-3.5 px-5 flex items-center justify-center border-l border-gray-100">
                <CellValue value={row.horizon} />
              </div>
            </div>
          ))}

          {/* CTA row */}
          <div className="grid grid-cols-3 bg-slate-50 border-t border-gray-200">
            <div className="py-5 px-5" />
            <div className="py-5 px-4 flex items-center justify-center">
              <a
                href={`/${locale}${prestige.detailPath}`}
                className="inline-block rounded-lg bg-blue-600 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-blue-700 transition-colors text-center"
              >
                {labels.ctaPrestige}
              </a>
            </div>
            <div className="py-5 px-4 flex items-center justify-center border-l border-gray-200">
              <a
                href={`/${locale}${horizon.detailPath}`}
                className="inline-block rounded-lg border-2 border-blue-600 px-4 py-2.5 text-xs sm:text-sm font-semibold text-blue-600 hover:bg-blue-50 transition-colors text-center"
              >
                {labels.ctaHorizon}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
