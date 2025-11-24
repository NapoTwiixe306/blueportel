"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  BedDouble,
  Users,
  Utensils,
  Bath,
  Thermometer,
  SunMedium,
  PawPrint,
  Clock,
  Shield,
  ChevronRight,
} from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

const highlights = [
  {
    icon: BedDouble,
    title: "3 chambres & 5 lits",
    description:
      "1 suite parentale + 2 chambres lits jumeaux avec literie hôtelière.",
  },
  {
    icon: Bath,
    title: "2 salles de bain",
    description: "Douche XXL, toilettes séparées et rangements pratiques.",
  },
  {
    icon: SunMedium,
    title: "Terrasse couverte 12 m²",
    description: "Vue panoramique sur la mer, salon de jardin et transats.",
  },
  {
    icon: Utensils,
    title: "Cuisine premium",
    description:
      "Four, micro-ondes, plaque 4 feux, réfrigérateur-congélateur, vaisselle complète.",
  },
];

const equipment = [
  {
    title: "Confort intérieur",
    items: [
      "Salon lumineux avec banquette d’angle et smart TV",
      "Espace repas pour 6 personnes",
      "Climatisation réversible + chauffage",
      "Wi-Fi haut débit et nombreux rangements",
    ],
  },
  {
    title: "Cuisine & buanderie",
    items: [
      "Cafetière filtre + Senseo",
      "Four traditionnel, micro-ondes et grille-pain",
      "Kit complet d’ustensiles et vaisselle",
      "Grand frigo-congélateur",
    ],
  },
  {
    title: "Extérieur & sécurité",
    items: [
      "Salon de jardin, transats et éclairage doux",
      "Parking privé et aire de jeux partagée",
      "Détecteurs de fumée / CO et extincteur",
      "Animaux acceptés après accord",
    ],
  },
];

const equipmentSchema = {
  "@context": "https://schema.org",
  "@type": "Accommodation",
  name: "Mobil-home Blueportel",
  description:
    "Mobil-home premium 3 chambres face à la mer au Portel, Côte d'Opale.",
  url: `${siteUrl}/pages/vue-densemble`,
  image: `${siteUrl}/galerie/blueportel-terrasse-ensoleillee.jpg`,
  occupancy: {
    "@type": "QuantitativeValue",
    maxValue: 6,
  },
  numberOfRooms: 3,
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Terrasse vue mer 12 m²" },
    { "@type": "LocationFeatureSpecification", name: "Climatisation" },
    { "@type": "LocationFeatureSpecification", name: "Wi-Fi haut débit" },
    { "@type": "LocationFeatureSpecification", name: "Animaux acceptés après accord" },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Camping Le Phare d'Opale, 2 rue de la Mer",
    addressLocality: "Le Portel",
    postalCode: "62480",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.7081,
    longitude: 1.5714,
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
      name: "Vue d'ensemble",
      item: `${siteUrl}/pages/vue-densemble`,
    },
  ],
};

export default function VueEnsemblePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(equipmentSchema) }}
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
                Vue d&apos;ensemble
              </li>
            </ol>
          </nav>

          <header className="w-full max-w-5xl text-center mb-8 sm:mb-12">
            <p className="text-xs sm:text-sm text-blue-500 font-semibold uppercase tracking-wide mb-2">
              Mobil-home Blueportel • Côte d&apos;Opale
            </p>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black leading-tight mb-4 sm:mb-6 px-3">
              Blueportel – Mobil-home prestige face à la mer
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 px-3 sm:px-6">
              Mobil-home haut de gamme de 42 m² situé sur la falaise du Portel,
              au camping Le Phare d&apos;Opale. Vue mer directe, terrasse
              couverte de 12 m², 3 chambres, 2 salles de bain et équipements
              premium pour 6 personnes, à 15 minutes de Boulogne-sur-Mer et
              Nausicaá.
            </p>
          </header>

          <section
            className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-14"
            aria-label="Présentation générale"
          >
            <article className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-6 sm:p-8 shadow-xl">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
                Votre séjour bord de mer
              </h2>
              <p className="text-sm sm:text-base text-blue-50 leading-relaxed mb-4">
                Profitez d’un séjour inoubliable au bord de la mer avec vue
                panoramique sur la Côte d’Opale. Idéal pour les familles, les
                couples ou les amis qui recherchent calme, confort et nature.
              </p>
              <ul className="space-y-2 text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <Users className="w-5 h-5 mt-1" aria-hidden="true" />
                  Jusqu’à 6 invités • 3 chambres • 5 lits
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-5 h-5 mt-1" aria-hidden="true" />
                  Arrivée 14h, départ 12h – accueil personnalisé
                </li>
                <li className="flex items-start gap-2">
                  <PawPrint className="w-5 h-5 mt-1" aria-hidden="true" />
                  Animaux autorisés après accord
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Link
                  href="https://checkout.lodgify.com/fr/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1"
                  target="_blank"
                  rel="nofollow"
                  className="bg-white text-blue-600 font-bold px-5 py-3 rounded-lg text-center hover:bg-blue-50 transition-colors"
                >
                  Réserver maintenant
                </Link>
                <Link
                  href="/pages/galerie-photo"
                  className="border border-white text-white font-bold px-5 py-3 rounded-lg text-center hover:bg-white/10 transition-colors"
                >
                  Voir les photos
                </Link>
              </div>
            </article>

            <figure className="relative h-64 sm:h-80 md:h-full rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/galerie/blueportel-terrasse-ensoleillee.jpg"
                alt="Terrasse couverte avec vue mer panoramique du mobil-home Blueportel"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </figure>
          </section>

          <section
            className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-14"
            aria-label="Intérieur et extérieur"
          >
            <article className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-lg sm:text-xl font-bold text-black mb-4">
                À l&apos;intérieur
              </h2>
              <ul className="space-y-3 text-sm sm:text-base text-gray-700">
                <li>
                  1 chambre parentale avec salle de bain privative (douche +
                  toilettes)
                </li>
                <li>2 chambres lits jumeaux + seconde salle de bain</li>
                <li>Salon convivial, banquette confortable et coin repas</li>
                <li>
                  Cuisine entièrement équipée : plaque 4 feux, four, micro-ondes,
                  cafetière, vaisselle complète
                </li>
                <li>Climatisation en été, chauffage pour les soirées fraîches</li>
              </ul>
            </article>

            <article className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-lg sm:text-xl font-bold text-black mb-4">
                À l&apos;extérieur
              </h2>
              <ul className="space-y-3 text-sm sm:text-base text-gray-700">
                <li>Terrasse couverte de 12 m² avec vue mer panoramique</li>
                <li>Salon de jardin, transats et ambiance relaxante</li>
                <li>Front de mer, balade sur la falaise & accès plage</li>
                <li>Parking sur place et aire de jeux partagée</li>
              </ul>
            </article>
          </section>

          <section
            className="w-full max-w-6xl mb-10 sm:mb-14"
            aria-label="Points forts"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {highlights.map((item) => (
                <article
                  className="bg-gray-50 border border-gray-100 rounded-2xl p-5 shadow-sm"
                  key={item.title}
                >
                  <item.icon
                    className="w-8 h-8 text-blue-500 mb-3"
                    aria-hidden="true"
                  />
                  <h3 className="text-base font-semibold text-gray-900 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section
            className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-14"
            aria-label="Équipements"
          >
            {equipment.map((block) => (
              <article
                className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-7 shadow-sm"
                key={block.title}
              >
                <h3 className="text-base font-semibold text-gray-900 mb-4">
                  {block.title}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {block.items.map((item) => (
                    <li className="flex items-start gap-2" key={item}>
                      <ChevronRight
                        className="w-4 h-4 text-blue-500 mt-1"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </section>

          <section
            className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12"
            aria-label="Emplacement et politiques"
          >
            <article className="bg-blue-50 border border-blue-100 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-blue-600" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Emplacement privilégié
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Situé sur la falaise du Portel, au cœur du camping Le Phare
                d’Opale, à proximité immédiate du phare, des commerces locaux,
                des sentiers côtiers et à 15 minutes de Boulogne-sur-Mer et
                Nausicaá.
              </p>
            </article>

            <article className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-blue-600" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Règles & services
                </h3>
              </div>
              <ul className="space-y-3 text-sm sm:text-base text-gray-700">
                <li>Ménage inclus, enfants bienvenus</li>
                <li>Animaux acceptés sur demande</li>
                <li>Service de nettoyage et accueil sur place</li>
                <li>Arrivée 14h - départ 12h</li>
              </ul>
            </article>
          </section>

          <section className="w-full max-w-6xl mb-10 sm:mb-16">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 text-white text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                Prêts à vivre l’expérience Blueportel ?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-blue-50 mb-6">
                Réservez votre mobil-home face à la mer ou contactez-nous pour
                une réservation personnalisée. Nous répondons rapidement par
                téléphone ou email.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="tel:+32488832091"
                  className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors w-full sm:w-auto"
                >
                  +32 488 83 20 91
                </Link>
                <Link
                  href="mailto:infos@blueportel.fr"
                  className="border border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors w-full sm:w-auto"
                >
                  infos@blueportel.fr
                </Link>
              </div>
            </div>
          </section>

          <div className="sr-only">
            <h2>Vue d&apos;ensemble du mobil-home Blueportel</h2>
            <p>
              Mobil-home Blueportel de 42 m² situé sur la falaise du Portel,
              camping Le Phare d&apos;Opale. 3 chambres, 5 lits, 2 salles de
              bain, cuisine équipée, climatisation, chauffage, Wi-Fi.
            </p>
            <p>
              Terrasse couverte de 12 m² avec vue panoramique sur la mer,
              parking, aire de jeux, animaux acceptés après accord, proximité
              commerces, plage et Nausicaá.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}


