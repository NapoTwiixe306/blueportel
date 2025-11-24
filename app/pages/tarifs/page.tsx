"use client";

import Link from "next/link";
import { PiggyBank, CalendarClock, Shield, CheckCircle2 } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

const seasons = [
  {
    name: "Basse saison",
    period: "Février • Mars • Octobre",
    price: "à partir de 110€ / nuit",
    minStay: "2 nuits minimum",
    perks: [
      "Couchers de soleil d'hiver",
      "Idéal pour télétravail zen",
      "Tarifs les plus doux de l'année",
    ],
  },
  {
    name: "Moyenne saison",
    period: "Avril • Mai • Juin • Septembre",
    price: "à partir de 145€ / nuit",
    minStay: "3 nuits minimum",
    perks: [
      "Printemps et arrière-saison lumineux",
      "Idéal pour profiter des sentiers côtiers",
      "Moins d'affluence sur les plages",
    ],
  },
  {
    name: "Haute saison",
    period: "Juillet • Août",
    price: "à partir de 195€ / nuit",
    minStay: "6 nuits minimum",
    perks: [
      "Vue mer exceptionnelle",
      "Accès direct à la plage",
      "Parfait pour les grandes vacances",
    ],
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: siteUrl },
    {
      "@type": "ListItem",
      position: 2,
      name: "Tarifs",
      item: `${siteUrl}/pages/tarifs`,
    },
  ],
};

export default function TarifsPage() {
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
                Tarifs
              </li>
            </ol>
          </nav>

          <header className="w-full max-w-4xl text-center mb-8 sm:mb-12">
            <p className="text-xs sm:text-sm text-blue-500 font-semibold uppercase tracking-wide mb-2">
              Mobil-home Blueportel
            </p>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black leading-tight mb-4 sm:mb-6 px-3">
              Tarifs & politique de réservation
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 px-3 sm:px-6">
              Consultez nos tarifs par saison, les services inclus et la
              politique d&apos;acompte/caution avant de réserver votre séjour
              face à la mer.
            </p>
          </header>

          <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-14">
            {seasons.map((season) => (
              <article
                key={season.name}
                className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-7 shadow-sm"
              >
                <p className="text-xs sm:text-sm uppercase tracking-wide text-blue-500 font-semibold mb-1">
                  {season.period}
                </p>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {season.name}
                </h2>
                <p className="text-2xl font-bold text-black mb-2">
                  {season.price}
                </p>
                <p className="text-xs text-gray-500 mb-4">{season.minStay}</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  {season.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2">
                      <CheckCircle2
                        className="w-4 h-4 text-blue-500 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </section>

          <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-14">
            <article className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <PiggyBank className="w-6 h-6 text-blue-500" aria-hidden="true" />
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                  Politique d&apos;acompte
                </h2>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li>
                  Acompte de 30% à la réservation (paiement sécurisé Lodgify).
                </li>
                <li>Solde 30 jours avant l&apos;arrivée.</li>
                <li>
                  Réservation de dernière minute : règlement intégral à la
                  confirmation.
                </li>
              </ul>
            </article>

            <article className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-blue-500" aria-hidden="true" />
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                  Caution & ménage
                </h2>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li>Caution de 500€ (empreinte bancaire ou chèque).</li>
                <li>Ménage de fin de séjour inclus.</li>
                <li>Animaux acceptés sur demande (supplément de 30€).</li>
              </ul>
            </article>
          </section>

          <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-14">
            <article className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <CalendarClock className="w-6 h-6 text-blue-500" aria-hidden="true" />
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                  Horaires
                </h2>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li>Arrivée : 14h – 18h · Départ : avant 11h.</li>
                <li>Arrivée tardive possible sur demande.</li>
                <li>Assistance sur place par notre hôtesse.</li>
              </ul>
            </article>

            <article className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-blue-500" aria-hidden="true" />
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                  Inclus dans le tarif
                </h2>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li>Linge de lit, serviettes et kits d&apos;accueil.</li>
                <li>Wi-Fi Starlink (à partir de 2026) & TV connectée.</li>
                <li>Parking privé pour 2 véhicules.</li>
              </ul>
            </article>
          </section>

          <section className="w-full max-w-6xl mb-10 sm:mb-16">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-xl p-6 sm:p-8 text-white text-center">
              <h2 className="text-xl sm:text-2xl font-bold mb-3">
                Besoin d&apos;un devis sur mesure ?
              </h2>
              <p className="text-sm sm:text-base text-blue-50 mb-5">
                Contactez-nous pour les séjours longue durée, les demandes
                spécifiques ou les offres d&apos;entreprise.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="https://checkout.lodgify.com/fr/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1"
                  target="_blank"
                  rel="nofollow"
                  className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors w-full sm:w-auto"
                >
                  Réserver en ligne
                </Link>
                <a
                  href="mailto:infos@blueportel.fr"
                  className="border border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors w-full sm:w-auto"
                >
                  Demander un devis
                </a>
              </div>
            </div>
          </section>

          <div className="sr-only">
            <h2>Tarifs Blueportel</h2>
            <p>
              Mobil-home Blueportel à Le Portel : tarifs basse, moyenne et haute
              saison, politique d&apos;acompte (30%), caution 500€, ménage
              inclus, linge fourni, animaux sur demande.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}


