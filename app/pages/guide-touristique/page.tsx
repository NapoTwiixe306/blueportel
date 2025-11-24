"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Map,
  Coffee,
  Fish,
  Waves,
  Bike,
  Sun,
  Compass,
  Camera,
  Clock,
} from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

const activities = [
  {
    icon: Waves,
    title: "Balades en bord de mer",
    description:
      "Depuis le camping Le Phare d'Opale, suivez le chemin des douaniers vers Boulogne-sur-Mer ou Équihen-Plage. Falaises, embruns et panoramas spectaculaires.",
  },
  {
    icon: Coffee,
    title: "Plaisirs gourmands",
    description:
      "Pause à la Brasserie du Fort ou dans les cafés du centre de Le Portel. Poissons, fruits de mer et bières locales réchauffent les journées d'automne.",
  },
  {
    icon: Fish,
    title: "Activités familiales",
    description:
      "Nausicaá, Château-Musée, vieille ville de Boulogne, front de mer, remparts… Une journée douce à partager en famille.",
  },
  {
    icon: Bike,
    title: "Randonnées & Vélomaritime",
    description:
      "Pédalez sur l'EuroVelo 4, observez les grandes marées et profitez des lumières dorées en fin de journée.",
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Guide touristique Blueportel",
  description:
    "Itinéraires et idées d'activités autour du mobil-home Blueportel à Le Portel.",
  url: `${siteUrl}/pages/guide-touristique`,
  itinerary: activities.map((activity) => ({
    "@type": "ListItem",
    name: activity.title,
    description: activity.description,
  })),
  offers: {
    "@type": "Offer",
    priceCurrency: "EUR",
    url: `${siteUrl}/pages/galerie-photo`,
    availabilityStarts: "2024-09-01",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: siteUrl },
    {
      "@type": "ListItem",
      position: 2,
      name: "Guide touristique",
      item: `${siteUrl}/pages/guide-touristique`,
    },
  ],
};

export default function GuideTouristiquePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
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
                Guide touristique
              </li>
            </ol>
          </nav>

          <header className="w-full max-w-5xl text-center mb-8 sm:mb-12">
            <p className="text-xs sm:text-sm text-blue-500 font-semibold uppercase tracking-wide mb-2">
              Côte d&apos;Opale • Automne
            </p>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black leading-tight mb-4 sm:mb-6 px-3">
              Que faire à Le Portel en automne ?
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 px-3 sm:px-6">
              Découvrez nos idées pour profiter d&apos;un automne lumineux au
              bord de la mer : balades iodées, pauses gourmandes, visites
              culturelles et couchers de soleil depuis Blueportel.
            </p>
          </header>

          <section
            className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-14"
            aria-label="Introduction"
          >
            <article className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                L&apos;automne sur la Côte d&apos;Opale
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                L&apos;automne à Le Portel est une saison douce et lumineuse.
                Les plages retrouvent leur calme, les falaises se parent de
                teintes dorées et les panoramas sur la Manche gagnent en
                intensité. Depuis le mobil-home Blueportel, chaque lever de
                soleil devient un spectacle.
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Profitez de l&apos;air iodé, de la proximité de Boulogne-sur-Mer
                et des nombreux sentiers pour vous ressourcer le temps d&apos;un
                week-end ou d&apos;une semaine prolongée.
              </p>
            </article>

            <figure className="w-full rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <Image
                src="/galerie/blueportel-vue-mer-cote-opale.jpg"
                alt="Panorama côtier depuis Blueportel en automne"
                width={1600}
                height={1200}
                className="w-full h-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </figure>
          </section>

          <section
            className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-14"
            aria-label="Activités"
          >
            {activities.map((activity) => (
              <article
                key={activity.title}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-5 sm:p-6 shadow-sm"
              >
                <activity.icon
                  className="w-8 h-8 text-blue-500 mb-3"
                  aria-hidden="true"
                />
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  {activity.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {activity.description}
                </p>
              </article>
            ))}
          </section>

          <section
            className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-14"
            aria-label="Zoom Nausicaá et culture"
          >
            <article className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Fish className="w-6 h-6 text-blue-500" aria-hidden="true" />
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                  Nausicaá & Boulogne-sur-Mer
                </h2>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Nausicaá reste l&apos;incontournable de la région : le plus
                grand aquarium d&apos;Europe vous attend à 10 minutes de route
                depuis Blueportel. Enchaînez avec la visite du Château-Musée, de
                la basilique Notre-Dame et des ruelles pavées de la vieille
                ville.
              </p>
            </article>

            <article className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Coffee className="w-6 h-6 text-blue-500" aria-hidden="true" />
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                  Adresses gourmandes
                </h2>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Rendez-vous à la Brasserie du Fort, chez les artisans poissonniers
                ou dans les cafés du centre pour savourer une cuisine iodée.
                Goûtez les spécialités locales : moules, fish & chips, gaufres
                de la Côte d&apos;Opale.
              </p>
            </article>
          </section>

          <section
            className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-14"
            aria-label="Moments Blueportel"
          >
            <article className="bg-blue-50 border border-blue-100 rounded-2xl p-6 sm:p-7 shadow-sm">
              <Sun className="w-6 h-6 text-blue-600 mb-2" aria-hidden="true" />
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                Couchers de soleil
              </h3>
              <p className="text-sm text-gray-700">
                Depuis la terrasse couverte, admirez le soleil se coucher sur la
                Manche, même en mi-saison.
              </p>
            </article>
            <article className="bg-blue-50 border border-blue-100 rounded-2xl p-6 sm:p-7 shadow-sm">
              <Compass className="w-6 h-6 text-blue-600 mb-2" aria-hidden="true" />
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                Sentiers côtiers
              </h3>
              <p className="text-sm text-gray-700">
                Explorez la falaise du Portel, le Fort de l'Heurt et la plage
                d'Équihen à pied ou à vélo.
              </p>
            </article>
            <article className="bg-blue-50 border border-blue-100 rounded-2xl p-6 sm:p-7 shadow-sm">
              <Camera className="w-6 h-6 text-blue-600 mb-2" aria-hidden="true" />
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                Photos souvenir
              </h3>
              <p className="text-sm text-gray-700">
                Faites-vous plaisir avec une séance photo sur la plage, sur la
                terrasse Blueportel ou à Nausicaá.
              </p>
            </article>
          </section>

          <section className="w-full max-w-6xl mb-10 sm:mb-16">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 text-white text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                Prêts pour un city-trip iodé ?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-blue-50 mb-6">
                Séjournez dans notre mobil-home tout confort avec vue mer et
                explorez la Côte d&apos;Opale en automne. Réservez vos dates ou
                contactez-nous pour une escapade sur mesure.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="https://checkout.lodgify.com/fr/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1"
                  target="_blank"
                  rel="nofollow"
                  className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors w-full sm:w-auto"
                >
                  Réserver maintenant
                </Link>
                <Link
                  href="/pages/contact"
                  className="border border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors w-full sm:w-auto"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
          </section>

          <div className="sr-only">
            <h2>Guide touristique automne Le Portel</h2>
            <p>
              Idées d&apos;activités autour du mobil-home Blueportel : balades en
              bord de mer, Nausicaá, Château-Musée de Boulogne, Vélomaritime,
              Brasserie du Fort. Profitez d&apos;un séjour calme et lumineux à
              Le Portel, Côte d&apos;Opale.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}


