import type { AvisDictionary } from "./types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

// Avis réels issus de la fiche Booking.com de Blueportel Prestige
// (note globale 8,3/10 sur 8 commentaires — notes converties sur 5 pour l'affichage)
const reviews = [
  {
    name: "Cecile (France)",
    date: "Mai 2026",
    rating: 4.5,
    text: "Propriétaire très agréable et d'une très grande gentillesse. Mobil-home impeccable, vraiment rien à redire, parfait. À proximité du centre-ville, bord de mer très agréable. Nous reviendrons avec un très grand plaisir. Merci à Michel et Véronique.",
  },
  {
    name: "Laurianne (Belgique)",
    date: "Avril 2026",
    rating: 4.5,
    text: "Le logement répond à mes attentes, fonctionnel, et la localisation était parfaite : calme et proche de la mer et de ses sentiers.",
  },
  {
    name: "Vincent (France)",
    date: "Octobre 2025",
    rating: 4.5,
    text: "Mobil-home très bien équipé, il y a tout le nécessaire cuisine, sanitaire et ménage. Climatisation et chauffage. C'est plutôt spacieux pour une famille avec 2 enfants. Proche de la mer dans un camping fermé, avec aire de jeux. Propriétaire attentionné, il y a des jeux de société à disposition.",
  },
  {
    name: "Romain (Belgique)",
    date: "Mai 2026",
    rating: 4,
    text: "La vue depuis le logement est juste extra. La proximité de la plage.",
  },
];

const reviewDates: Record<string, string> = {
  "Cecile (France)": "2026-05-03",
  "Laurianne (Belgique)": "2026-04-08",
  "Vincent (France)": "2025-10-21",
  "Romain (Belgique)": "2026-05-15",
};

export const frAvisDictionary: AvisDictionary = {
  locale: "fr",
  metadata: {
    title: "Avis Blueportel | Témoignages clients",
    description:
      "Avis vérifiés des voyageurs Blueportel sur Booking.com : 8,3/10, emplacement noté 9,5/10 et rapport qualité/prix 9,8/10 pour notre mobil-home face à la mer à Le Portel.",
    alternates: {
      canonical: "/fr/pages/avis",
      languages: {
        "fr-FR": "/fr/pages/avis",
        "en-GB": "/en/pages/reviews",
        "nl-NL": "/nl/pages/recensies",
      },
    },
    openGraph: {
      title: "Avis Blueportel",
      description: "Témoignages authentiques des voyageurs qui ont séjourné face à la mer au Portel.",
      type: "website",
      url: `${siteUrl}/fr/pages/avis`,
    },
  },
  structuredData: {
    schema: {
      "@context": "https://schema.org",
      "@type": "Accommodation",
      "@id": `${siteUrl}#blueportel-avis`,
      name: "Mobil-home Blueportel",
      description: "Avis clients sur le mobil-home Blueportel situé au Camping Le Phare d'Opale.",
      url: `${siteUrl}/fr/pages/avis`,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "8.3",
        bestRating: "10",
        worstRating: "1",
        reviewCount: "8",
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
        datePublished: reviewDates[review.name],
      })),
    },
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: `${siteUrl}/fr` },
        { "@type": "ListItem", position: 2, name: "Avis", item: `${siteUrl}/fr/pages/avis` },
      ],
    },
  },
  hero: {
    homeLabel: "Accueil",
    breadcrumbCurrent: "Avis",
    pretitle: "Témoignages • Blueportel",
    title: "Ils ont séjourné face à la mer au Portel",
    description:
      "Les avis ci-dessous sont les avis vérifiés de nos voyageurs sur Booking.com : note globale 8,3/10, emplacement 9,5/10, personnel 10/10. Découvrez leurs retours — et partagez le vôtre après votre séjour.",
  },
  stats: [
    { label: "Note Booking.com", value: "8,3/10" },
    { label: "Personnel", value: "10/10" },
    { label: "Rapport qualité/prix", value: "9,8/10" },
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
      { label: "Avis Booking.com", href: "https://www.booking.com/hotel/fr/blueportel.fr.html", type: "airbnb" },
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
      "/fr/pages/reserver",
  },
  screenReader: {
    title: "Avis Blueportel",
    paragraph:
      "Avis et témoignages des voyageurs ayant séjourné au mobil-home Blueportel à Le Portel : vue mer, terrasse couverte, proximité Nausicaá et accueil premium.",
  },
};

export default frAvisDictionary;

