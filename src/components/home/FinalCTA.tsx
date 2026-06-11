import Link from "next/link";
import { ArrowRight } from "lucide-react";

type FinalCTAProps = {
  title: string;
  subtitle: string;
  ctaPrestige: { label: string; href: string };
  ctaHorizon: { label: string; href: string };
};

export default function FinalCTA({ title, subtitle, ctaPrestige, ctaHorizon }: FinalCTAProps) {
  return (
    <section
      className="w-full px-3 sm:px-6 lg:px-8 py-16 sm:py-24"
      aria-label="Réserver votre séjour"
    >
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-slate-800 p-8 sm:p-12 md:p-16 text-center shadow-2xl">
          {/* Decorative circles */}
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/5" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-blue-500/30" />

          <div className="relative z-10">
            <p className="text-blue-200 text-xs font-semibold uppercase tracking-widest mb-4">
              Réservation directe · Meilleur tarif garanti
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {title}
            </h2>
            <p className="text-blue-100 text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={ctaPrestige.href}
                target="_blank"
                rel="noopener nofollow"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-sm sm:text-base font-bold text-blue-700 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98]"
              >
                {ctaPrestige.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href={ctaHorizon.href}
                target="_blank"
                rel="noopener nofollow"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/50 bg-white/10 backdrop-blur-sm px-7 py-4 text-sm sm:text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-white/20 hover:border-white active:scale-[0.98]"
              >
                {ctaHorizon.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <p className="mt-6 text-xs text-blue-200/80">
              Réservation sans frais de service · Paiement sécurisé
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
