"use client";

import Link from "next/link";
import { useMemo } from "react";
import {
  Star,
  Quote,
  Heart,
  Smile,
  Users,
  ThumbsUp,
  MapPin,
  Clock,
  Mail,
  Phone,
} from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

const reviews = [
  {
    name: "Camille & Romain",
    date: "Août 2024",
    rating: 5,
    text: "Vue mer imprenable, terrasse idéale pour les petits-déjeuners et accueil chaleureux d'Isabelle. Séjour parfait pour visiter Nausicaá en famille !",
  },
  {
    name: "Sébastien & Julie",
    date: "Juillet 2024",
    rating: 5,
    text: "Mobil-home décoré avec goût, literie premium, tout est pensé pour le confort. Parking, wifi, clim... On reviendra !",
  },
  {
    name: "Élodie",
    date: "Mai 2024",
    rating: 4.8,
    text: "Excellent séjour. Calme, vue sur la mer, randonnées le long de la falaise. Mention spéciale pour la cuisine super équipée.",
  },
];

const stats = [
  { label: "Note moyenne", value: "4.9/5" },
  { label: "Séjours 2024", value: "127+" },
  { label: "Clients réguliers", value: "62%" },
];

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Accommodation",
  "@id": `${siteUrl}#blueportel-avis`,
  name: "Mobil-home Blueportel",
  description:
    "Avis clients sur le mobil-home Blueportel situé au camping Le Phare d'Opale à Le Portel.",
  url: `${siteUrl}/pages/avis`,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
  },
  review: reviews.map((review) => ({
    "@type": "Review",
    author: { "@type": "Person", name: review.name },
    reviewBody: review.text,
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    datePublished: "2024-01-01",
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: siteUrl },
    {
      "@type": "ListItem",
      position: 2,
      name: "Avis",
      item: `${siteUrl}/pages/avis`,
    },
  ],
};

export default function AvisPage() {
  const starArray = useMemo(() => [1, 2, 3, 4, 5], []);

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
                Avis
              </li>
            </ol>
          </nav>

          <header className="w-full max-w-5xl text-center mb-8 sm:mb-12">
            <p className="text-xs sm:text-sm text-blue-500 font-semibold uppercase tracking-wide mb-2">
              Témoignages • Blueportel
            </p>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black leading-tight mb-4 sm:mb-6 px-3">
              Ils ont séjourné face à la mer au Portel
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 px-3 sm:px-6">
              Découvrez les retours des voyageurs qui ont profité de la vue
              panoramique, de la terrasse couverte et de l&apos;accueil premium
              de Blueportel. Partagez également votre expérience pour aider les
              prochains vacanciers.
            </p>
          </header>

          <section
            className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-14"
            aria-label="Statistiques"
          >
            {stats.map((item) => (
              <article
                key={item.label}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-7 shadow-sm text-center"
              >
                <p className="text-xs uppercase tracking-wide text-blue-500 font-semibold">
                  {item.label}
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">
                  {item.value}
                </p>
              </article>
            ))}
          </section>

          <section
            className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-14"
            aria-label="Avis clients"
          >
            {reviews.map((review) => (
              <article
                key={review.name}
                className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <Quote className="w-10 h-10 text-blue-500" aria-hidden="true" />
                  <div>
                    <p className="text-base font-semibold text-gray-900">
                      {review.name}
                    </p>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {starArray.map((value) => (
                    <Star
                      key={`star-${review.name}-${value}`}
                      className={`w-4 h-4 ${
                        value <= review.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-200"
                      }`}
                      aria-hidden="true"
                    />
                  ))}
                  <span className="text-xs text-gray-500 ml-2">
                    {review.rating}/5
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {review.text}
                </p>
              </article>
            ))}
          </section>

          <section
            className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-14"
            aria-label="Pourquoi ils recommandent"
          >
            <article className="bg-blue-50 border border-blue-100 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                Pourquoi nos voyageurs recommandent Blueportel
              </h2>
              <ul className="space-y-3 text-sm sm:text-base text-gray-700">
                <li className="flex items-start gap-2">
                  <Heart className="w-5 h-5 text-blue-500 mt-1" aria-hidden="true" />
                  Vue mer directe depuis la terrasse couverte de 12 m²
                </li>
                <li className="flex items-start gap-2">
                  <Smile className="w-5 h-5 text-blue-500 mt-1" aria-hidden="true" />
                  Accueil personnalisé avec Isabelle sur place
                </li>
                <li className="flex items-start gap-2">
                  <Users className="w-5 h-5 text-blue-500 mt-1" aria-hidden="true" />
                  Mobil-home familial 3 chambres, 5 lits, Wi-Fi, climatisation
                </li>
                <li className="flex items-start gap-2">
                  <ThumbsUp
                    className="w-5 h-5 text-blue-500 mt-1"
                    aria-hidden="true"
                  />
                  Proximité Nausicaá, plage, commerces et sentiers côtiers
                </li>
              </ul>
            </article>

            <article className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                Donnez votre avis
              </h2>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                Vous avez séjourné à Blueportel ? Partagez votre expérience pour
                aider les futurs voyageurs.
              </p>
              <div className="flex flex-col gap-3 text-sm text-gray-700">
                <a
                  href="mailto:infos@blueportel.fr"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                >
                  <Mail aria-hidden="true" className="w-4 h-4" />
                  Envoyer un email
                </a>
                <a
                  href="https://www.facebook.com/blueportel"
                  target="_blank"
                  rel="nofollow"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                >
                  <ThumbsUp aria-hidden="true" className="w-4 h-4" />
                  Laisser un avis Facebook
                </a>
                <Link
                  href="https://www.airbnb.fr/rooms/123456"
                  target="_blank"
                  rel="nofollow"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                >
                  <MapPin aria-hidden="true" className="w-4 h-4" />
                  Avis Airbnb
                </Link>
              </div>
            </article>
          </section>

          <section className="w-full max-w-6xl mb-10 sm:mb-16">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 text-white text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                Envie de vivre la même expérience ?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-blue-50 mb-6">
                Contactez-nous pour connaître les disponibilités ou réserver
                votre séjour face à la mer. Nous répondons en moins de 24h.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+32488832091"
                  className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors w-full sm:w-auto"
                >
                  +32 488 83 20 91
                </a>
                <a
                  href="mailto:infos@blueportel.fr"
                  className="border border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors w-full sm:w-auto"
                >
                  infos@blueportel.fr
                </a>
                <Link
                  href="https://checkout.lodgify.com/fr/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1"
                  target="_blank"
                  rel="nofollow"
                  className="bg-white/10 border border-white/30 text-white font-bold px-6 py-3 rounded-lg hover:bg-white/20 transition-colors w-full sm:w-auto"
                >
                  Réserver maintenant
                </Link>
              </div>
            </div>
          </section>

          <div className="sr-only">
            <h2>Avis Blueportel</h2>
            <p>
              Découvrez les retours d&apos;expérience des clients ayant séjourné
              au mobil-home Blueportel à Le Portel : vue mer, terrasse couverte,
              proximité Nausicaá et accueil premium. Contact : infos@blueportel.fr
              ou +32 488 83 20 91.
            </p>
          </div>

        </main>
      </div>
    </>
  );
}