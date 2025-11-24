"use client";

import Link from "next/link";
import { useMemo } from "react";
import {
  MapPin,
  Car,
  Train,
  Bus,
  Bike,
  Plane,
  Navigation,
  Clock,
  Info,
} from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

const drivingRoutes = [
  {
    origin: "Paris",
    duration: "≈ 2 h 30",
    route:
      "Autoroute A16 direction Boulogne-sur-Mer, sortie Boulogne-Sud puis suivre Le Portel.",
  },
  {
    origin: "Lille",
    duration: "≈ 1 h 45",
    route:
      "A25 vers Dunkerque puis A16 vers Boulogne-sur-Mer, sortie Boulogne-Sud et direction Le Portel.",
  },
  {
    origin: "Calais",
    duration: "≈ 30 min",
    route: "A16 direction Boulogne-sur-Mer puis suivre les panneaux Le Portel.",
  },
];

const distanceData = [
  { label: "Aéroport le plus proche", value: "147 km" },
  { label: "Gare Boulogne-sur-Mer", value: "2,49 km" },
  { label: "Autoroute A16", value: "10 km" },
  { label: "Port de Boulogne", value: "4,5 km" },
  { label: "Arrêt bus 503", value: "1,2 km" },
];

const listSchema = {
  "@context": "https://schema.org",
  "@type": "TouristInformationCenter",
  name: "Plan d'accès Blueportel",
  description:
    "Itinéraires pour rejoindre le mobil-home Blueportel à Le Portel (Camping Le Phare d'Opale).",
  url: `${siteUrl}/pages/plan`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "2 rue de la Mer",
    addressLocality: "Le Portel",
    postalCode: "62480",
    addressCountry: "FR",
  },
  telephone: "+32488832091",
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.7081,
    longitude: 1.5714,
  },
  publicTransportClosests: [
    {
      "@type": "BusStation",
      name: "Ligne 503 Marineo",
      distance: "1.2 km",
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: siteUrl },
    {
      "@type": "ListItem",
      position: 2,
      name: "Plan",
      item: `${siteUrl}/pages/plan`,
    },
  ],
};

export default function PlanPage() {
  const mapEmbedUrl = useMemo(
    () =>
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2523.870016698074!2d1.570!3d50.708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dc545f47d9aadb%3A0x7f864c8b11111111!2sCamping%20Le%20Phare%20d'Opale!5e0!3m2!1sfr!2sfr!4v0000000000000",
    []
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }}
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
                Plan
              </li>
            </ol>
          </nav>

          <header className="w-full max-w-5xl text-center mb-8 sm:mb-12">
            <p className="text-xs sm:text-sm text-blue-500 font-semibold uppercase tracking-wide mb-2">
              Camping Le Phare d&apos;Opale • Le Portel
            </p>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black leading-tight mb-4 sm:mb-6 px-3">
              Plan d&apos;accès – Comment venir à Blueportel
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 px-3 sm:px-6">
              Adresse : rue de la Mer 2, 62480 Le Portel, France. Retrouvez
              ci-dessous toutes les options pour rejoindre facilement notre
              mobil-home avec vue mer : voiture, train, bus ou vélo, ainsi que
              les principales distances depuis les hubs régionaux.
            </p>
          </header>

          <section
            className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-14"
            aria-label="Carte et coordonnées"
          >
            <article className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-blue-600" aria-hidden="true" />
                <div className="text-left">
                  <p className="text-xs uppercase tracking-wide text-blue-500 font-semibold">
                    Emplacement
                  </p>
                  <h2 className="text-lg font-bold text-gray-900">
                    Rue de la Mer 2, Le Portel
                  </h2>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-700">
                Situé sur la falaise, à quelques pas du phare d&apos;Opale, du
                centre-ville et des commerces. Accès rapide vers Boulogne-sur-Mer
                et Nausicaá.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                <p>
                  <strong>GPS :</strong> 50.7081 / 1.5714
                </p>
                <p>
                  <strong>Tél :</strong>{" "}
                  <a
                    href="tel:+32488832091"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    +32 488 83 20 91
                  </a>
                </p>
                <p>
                  <strong>Email :</strong>{" "}
                  <a
                    href="mailto:infos@blueportel.fr"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    infos@blueportel.fr
                  </a>
                </p>
                <p>
                  <strong>Parking :</strong> Place privée sur l&apos;emplacement
                </p>
              </div>
            </article>

            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <iframe
                title="Carte Blueportel"
                src={mapEmbedUrl}
                loading="lazy"
                className="w-full h-72 sm:h-96"
                style={{ border: 0 }}
                allowFullScreen
                aria-label="Carte Google du camping Le Phare d'Opale"
              />
            </div>
          </section>

          <section
            className="w-full max-w-6xl mb-10 sm:mb-14"
            aria-label="Accès en voiture"
          >
            <div className="flex items-center gap-3 mb-4">
              <Car className="w-6 h-6 text-blue-600" aria-hidden="true" />
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                🚗 En voiture
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {drivingRoutes.map((route) => (
                <article
                  key={route.origin}
                  className="bg-gray-50 border border-gray-100 rounded-2xl p-5 shadow-sm"
                >
                  <p className="text-sm uppercase tracking-wide text-blue-500 font-semibold mb-1">
                    Depuis {route.origin}
                  </p>
                  <p className="text-lg font-bold text-gray-900 mb-2">
                    {route.duration}
                  </p>
                  <p className="text-sm text-gray-700">{route.route}</p>
                </article>
              ))}
            </div>
          </section>

          <section
            className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-14"
            aria-label="Transports en commun"
          >
            <article className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Train className="w-6 h-6 text-blue-600" aria-hidden="true" />
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                  🚆 En train
                </h2>
              </div>
              <ul className="space-y-3 text-sm sm:text-base text-gray-700">
                <li>
                  Gare la plus proche : <strong>Boulogne-sur-Mer</strong>
                </li>
                <li>
                  Paris (Gare du Nord) → Boulogne : TGV/TER ~ 2 h 15
                </li>
                <li>Lille → Boulogne : TER ~ 1 h 30</li>
                <li>Calais → Boulogne : TER ~ 30 min</li>
                <li>Depuis la gare : bus 503 ou taxi (≈ 10 min)</li>
              </ul>
            </article>

            <article className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Bus className="w-6 h-6 text-blue-600" aria-hidden="true" />
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                  🚌 En bus
                </h2>
              </div>
              <ul className="space-y-3 text-sm sm:text-base text-gray-700">
                <li>Ligne locale 503 (Marineo) : Boulogne ↔ Le Portel</li>
                <li>Arrêt le plus proche : centre de Le Portel (≈ 1,2 km)</li>
                <li>
                  Liaisons longues distances : FlixBus / BlaBlaCar Bus jusqu&apos;à
                  Boulogne-sur-Mer
                </li>
              </ul>
            </article>
          </section>

          <section
            className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-14"
            aria-label="Autres accès"
          >
            <article className="bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col gap-3">
              <div className="flex items-center gap-2 text-blue-600">
                <Bike className="w-5 h-5" aria-hidden="true" />
                <h3 className="text-base font-semibold text-gray-900">
                  🚲 À vélo
                </h3>
              </div>
              <p className="text-sm text-gray-700">
                Blueportel est accessible depuis l&apos;EuroVelo 4 qui passe par
                Boulogne-sur-Mer. Vous pouvez longer la côte et rejoindre Le
                Portel par les pistes cyclables.
              </p>
            </article>

            <article className="bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col gap-3">
              <div className="flex items-center gap-2 text-blue-600">
                <Plane className="w-5 h-5" aria-hidden="true" />
                <h3 className="text-base font-semibold text-gray-900">
                  ✈️ En avion
                </h3>
              </div>
              <p className="text-sm text-gray-700">
                Aéroport le plus proche : Lille-Lesquin (147 km). Depuis
                l&apos;aéroport : location de voiture ou train jusqu&apos;à
                Boulogne-sur-Mer.
              </p>
            </article>

            <article className="bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col gap-3">
              <div className="flex items-center gap-2 text-blue-600">
                <Navigation className="w-5 h-5" aria-hidden="true" />
                <h3 className="text-base font-semibold text-gray-900">
                  🧭 Distances clés
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                {distanceData.map((item) => (
                  <li key={item.label} className="flex justify-between">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </li>
                ))}
              </ul>
            </article>
          </section>

          <section className="w-full max-w-6xl mb-10 sm:mb-16">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Info className="w-6 h-6" aria-hidden="true" />
                <h2 className="text-xl sm:text-2xl font-bold">
                  Besoin d&apos;aide pour organiser votre trajet ?
                </h2>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-blue-50 mb-6">
                Nous pouvons vous envoyer un plan détaillé, un GPS point ou des
                recommandations transport selon votre ville de départ.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+32488832091"
                  className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg text-center hover:bg-blue-50 transition-colors"
                >
                  +32 488 83 20 91
                </a>
                <a
                  href="mailto:infos@blueportel.fr"
                  className="border border-white text-white font-bold px-6 py-3 rounded-lg text-center hover:bg-white/10 transition-colors"
                >
                  infos@blueportel.fr
                </a>
                <Link
                  href="https://checkout.lodgify.com/fr/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1"
                  target="_blank"
                  rel="nofollow"
                  className="bg-white/10 border border-white/30 text-white font-bold px-6 py-3 rounded-lg text-center hover:bg-white/20 transition-colors"
                >
                  Réserver votre séjour
                </Link>
              </div>
            </div>
          </section>

          <div className="sr-only">
            <h2>Plan d&apos;accès Blueportel</h2>
            <p>
              Adresse : rue de la Mer 2, 62480 Le Portel, France. Accès voiture
              depuis Paris, Lille ou Calais via l&apos;A16. Gare la plus proche :
              Boulogne-sur-Mer (bus 503 vers Le Portel). Bus longue distance,
              EuroVelo 4 pour les cyclistes, aéroport Lille-Lesquin à 147 km.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}


