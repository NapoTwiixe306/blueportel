"use client";

import Link from "next/link";
import { Construction, Clock, Mail, Phone } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", position: 1, name: "Accueil", item: siteUrl },
    {
      "@type": "ListItem",
      position: 2,
      name: "Disponibilités",
      item: `${siteUrl}/pages/disponibilites`,
    },
  ],
};

export default function DisponibilitesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-white w-full overflow-x-hidden">
        <main className="flex min-h-screen w-full max-w-7xl flex-col items-center py-6 px-3 sm:py-8 sm:px-4 md:py-12 md:px-6 lg:py-16 lg:px-8 bg-white dark:bg-white">
          <nav
            aria-label="Fil d'Ariane"
            className="w-full max-w-7xl mb-4 sm:mb-6"
          >
            <ol className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 px-3 sm:px-4">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-500 transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li aria-hidden="true" className="text-gray-400">
                /
              </li>
              <li className="text-gray-900 font-medium" aria-current="page">
                Disponibilités
              </li>
            </ol>
          </nav>

          <header className="w-full max-w-4xl text-center mb-8 sm:mb-12">
            <p className="text-xs sm:text-sm text-blue-500 font-semibold uppercase tracking-wide mb-2">
              Mobil-home Blueportel
            </p>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black leading-tight mb-4 sm:mb-6 px-3">
              Vérifiez nos disponibilités en temps réel
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 px-3 sm:px-6">
              Calendrier synchronisé avec Lodgify. Consultez les dates libres
              pour planifier votre séjour face à la mer, puis confirmez votre
              réservation en ligne.
            </p>
          </header>

          <section className="w-full max-w-4xl rounded-3xl border border-dashed border-blue-200 bg-gradient-to-b from-white to-blue-50/40 p-8 sm:p-12 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
              <Construction className="h-8 w-8" aria-hidden="true" />
            </div>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">
              Page en construction
            </p>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Les disponibilités arrivent bientôt
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-600">
              Nous finalisons l’intégration du calendrier Lodgify pour vous offrir des
              disponibilités mises à jour en temps réel. Merci pour votre patience&nbsp;!
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                href="mailto:infos@blueportel.fr"
                className="flex items-center justify-center gap-2 rounded-xl border border-blue-100 bg-white px-4 py-3 text-sm font-semibold text-blue-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                infos@blueportel.fr
              </a>
              <a
                href="tel:+32488832091"
                className="flex items-center justify-center gap-2 rounded-xl border border-blue-100 bg-white px-4 py-3 text-sm font-semibold text-blue-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                +32 488 83 20 91
              </a>
            </div>
            <div className="mt-10 flex items-center justify-center gap-2 text-xs text-gray-500">
              <Clock className="h-4 w-4 text-blue-400" aria-hidden="true" />
              Mise en ligne prévue très prochainement
            </div>
          </section>
        </main>
      </div>
    </>
  );
}


