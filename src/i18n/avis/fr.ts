import type { AvisDictionary } from "./types";

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

export const frAvisDictionary: AvisDictionary = {
  locale: "fr",
  metadata: {
    title: "Avis Blueportel | Témoignages clients",
    description:
      "Notes vérifiées des voyageurs Blueportel. Découvrez pourquoi notre mobil-home face à la mer obtient 4.9/5 depuis 2022.",
    alternates: {
      canonical: "/fr/avis",
      languages: {
        "fr-FR": "/fr/avis",
        "en-GB": "/en/reviews",
        "nl-NL": "/nl/beoordelingen",
      },
    },
    openGraph: {
      title: "Avis Blueportel",
      description: "Témoignages authentiques des voyageurs qui ont séjourné face à la mer au Portel.",
      type: "website",
      url: `${siteUrl}/fr/avis`,
    },
  },
  structuredData: {
    schema: {
      "@context": "https://schema.org",
      "@type": "Accommodation",
      "@id": `${siteUrl}#blueportel-avis`,
      name: "Mobil-home Blueportel",
      description: "Avis clients sur le mobil-home Blueportel situé au Camping Le Phare d'Opale.",
      url: `${siteUrl}/fr/avis`,
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
    },
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: `${siteUrl}/fr` },
        { "@type": "ListItem", position: 2, name: "Avis", item: `${siteUrl}/fr/avis` },
      ],
    },
  },
  hero: {
    homeLabel: "Accueil",
    breadcrumbCurrent: "Avis",
    pretitle: "Témoignages • Blueportel",
    title: "Ils ont séjourné face à la mer au Portel",
    description:
      "Découvrez les retours des voyageurs qui ont profité de la vue panoramique, de la terrasse couverte et de l'accueil premium Blueportel. Partagez également votre expérience.",
  },
  stats: [
    { label: "Note moyenne", value: "4.9/5" },
    { label: "Séjours 2024", value: "127+" },
    { label: "Clients réguliers", value: "62%" },
  ],
  reviews,
  reasons: {
    title: "Pourquoi ils recommandent Blueportel",
    items: [
      { icon: "heart", text: "Vue mer directe depuis la terrasse couverte de 12 m²" },
      { icon: "smile", text: "Accueil personnalisé sur place" },
      { icon: "users", text: "Mobil-home familial 3 chambres, 5 lits, Wi-Fi, climatisation" },
      { icon: "map", text: "Proximité Nausicaá, plage, commerces et sentiers côtiers" },
    ],
  },
  share: {
    title: "Donnez votre avis",
    description: "Vous avez séjourné chez nous ? Partagez votre expérience pour aider les prochains voyageurs.",
    links: [
      { label: "Envoyer un email", href: "mailto:info@blueportel.fr", type: "email" },
      { label: "Avis Facebook", href: "https://www.facebook.com/blueportel", type: "facebook" },
      { label: "Avis Airbnb", href: "https://www.airbnb.fr/rooms/123456", type: "airbnb" },
    ],
  },
  cta: {
    title: "Envie de vivre la même expérience ?",
    description:
      "Contactez-nous pour connaître les disponibilités ou réserver votre séjour face à la mer. Réponse en moins de 24h.",
    phoneLabel: "+32 488 83 20 91",
    phoneHref: "tel:+32488832091",
    emailLabel: "info@blueportel.fr",
    emailHref: "mailto:info@blueportel.fr",
    bookingLabel: "Réserver maintenant",
    bookingHref:
      "https://checkout.lodgify.com/fr/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1",
  },
  screenReader: {
    title: "Avis Blueportel",
    paragraph:
      "Avis et témoignages des voyageurs ayant séjourné au mobil-home Blueportel à Le Portel : vue mer, terrasse couverte, proximité Nausicaá et accueil premium.",
  },
};

export default frAvisDictionary;

