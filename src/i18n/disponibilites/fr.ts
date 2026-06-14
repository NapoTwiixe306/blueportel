import type { AvailabilityDictionary } from "./types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

export const frAvailabilityDictionary: AvailabilityDictionary = {
  locale: "fr",
  metadata: {
    title: "Disponibilités Blueportel | Calendrier de réservation",
    description:
      "Consultez les disponibilités en temps réel des mobil-homes Blueportel à Le Portel. Calendrier synchronisé avec Booking et Airbnb, réservation sécurisée face à la mer.",
    alternates: {
      canonical: "/fr/pages/disponibilites",
      languages: {
        "fr-FR": "/fr/pages/disponibilites",
        "en-GB": "/en/pages/disponibilites",
        "nl-NL": "/nl/pages/disponibilites",
      },
    },
    openGraph: {
      title: "Disponibilités Blueportel",
      description:
        "Calendrier des disponibilités du mobil-home Blueportel. Dates à jour, réservation en ligne ou contact direct.",
      type: "website",
      url: `${siteUrl}/fr/pages/disponibilites`,
    },
  },
  structuredData: {
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: `${siteUrl}/fr` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Disponibilités",
          item: `${siteUrl}/fr/pages/disponibilites`,
        },
      ],
    },
  },
  hero: {
    homeLabel: "Accueil",
    breadcrumbCurrent: "Disponibilités",
    pretitle: "Mobil-home Blueportel",
    title: "Vérifiez nos disponibilités en temps réel",
    description:
      "Calendrier synchronisé avec Booking et Airbnb. Consultez les dates libres pour planifier votre séjour face à la mer, puis confirmez votre réservation en ligne.",
  },
  loadingText: "Chargement des disponibilités…",
  error: {
    title: "Calendrier indisponible pour le moment",
    description:
      "Nous n’arrivons pas à afficher le calendrier des disponibilités. Réessayez dans quelques instants ou contactez-nous directement.",
    contactCTA: [
      { label: "+32 488 83 20 91", href: "tel:+32488832091" },
      { label: "info@blueportel.fr", href: "mailto:info@blueportel.fr" },
    ],
  },
  emptyMessage: "Aucun créneau n’est disponible pour le moment.",
  statusLabels: {
    available: "Disponible",
    booked: "Réservé",
    checkin: "Arrivée",
    checkout: "Départ",
    unknown: "Statut à confirmer",
  },
  legend: [
    { status: "available", label: "Disponible" },
    { status: "booked", label: "Réservé" },
    { status: "checkin", label: "Arrivée" },
    { status: "checkout", label: "Départ" },
  ],
  tableAriaLabel: "Calendrier des disponibilités du mobil-home Blueportel",
  cta: {
    title: "Réservez en ligne ou contactez-nous",
    description:
      "Après avoir choisi vos dates, ouvrez le tunnel de réservation ou écrivez-nous pour une demande sur mesure.",
    primary: {
      label: "Réserver en ligne",
      href: "/fr/pages/reserver",
    },
    secondary: {
      label: "Demande personnalisée",
      href: "mailto:info@blueportel.fr",
    },
  },
  info: [
    "Calendrier synchronisé automatiquement avec nos plannings Booking et Airbnb (actualisé toutes les heures).",
    "Mobil-homes Blueportel – Camping Le Phare d’Opale, Le Portel. Vue mer panoramique, accès direct plage.",
  ],
  screenReader: {
    title: "Disponibilités du mobil-home Blueportel",
    paragraphs: [
      "Calendrier de réservation synchronisé automatiquement avec Booking et Airbnb. Sélectionnez vos dates pour réserver votre séjour face à la mer.",
      "Pour toute question, contactez info@blueportel.fr ou +32 488 83 20 91.",
    ],
  },
};

export default frAvailabilityDictionary;

