import type { AvailabilityDictionary } from "./types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

export const nlAvailabilityDictionary: AvailabilityDictionary = {
  locale: "nl",
  metadata: {
    title: "Blueportel beschikbaarheid | Reservatiekalender",
    description:
      "Bekijk de real-time beschikbaarheid van de Blueportel mobilhome in Le Portel. Lodgify-kalender en veilige reservering aan zee.",
    alternates: {
      canonical: "/nl/pages/disponibilites",
      languages: {
        "fr-FR": "/fr/pages/disponibilites",
        "en-GB": "/en/pages/disponibilites",
        "nl-NL": "/nl/pages/disponibilites",
      },
    },
    openGraph: {
      title: "Beschikbaarheidskalender Blueportel",
      description:
        "Beschikbaarheidskalender van de Blueportel mobilhome. Kies uw data en boek online of neem rechtstreeks contact op.",
      type: "website",
      url: `${siteUrl}/nl/pages/disponibilites`,
    },
  },
  structuredData: {
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/nl` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Beschikbaarheid",
          item: `${siteUrl}/nl/pages/disponibilites`,
        },
      ],
    },
  },
  hero: {
    homeLabel: "Home",
    breadcrumbCurrent: "Beschikbaarheid",
    pretitle: "Blueportel mobilhome",
    title: "Controleer de beschikbaarheid in real-time",
    description:
      "Kalender gesynchroniseerd met Lodgify. Bekijk de vrije data voor uw verblijf aan zee en bevestig uw reservatie online.",
  },
  loadingText: "Beschikbaarheid wordt geladen…",
  error: {
    title: "Kalender tijdelijk niet beschikbaar",
    description:
      "De Lodgify-kalender kan niet worden geladen. Probeer het zo dadelijk opnieuw of neem rechtstreeks contact op.",
    contactCTA: [
      { label: "+32 488 83 20 91", href: "tel:+32488832091" },
      { label: "info@blueportel.fr", href: "mailto:info@blueportel.fr" },
    ],
  },
  emptyMessage: "Er zijn momenteel geen vrije periodes.",
  statusLabels: {
    available: "Beschikbaar",
    booked: "Bezet",
    checkin: "Aankomst",
    checkout: "Vertrek",
    unknown: "Nog te bevestigen",
  },
  legend: [
    { status: "available", label: "Beschikbaar" },
    { status: "booked", label: "Bezet" },
    { status: "checkin", label: "Aankomst" },
    { status: "checkout", label: "Vertrek" },
  ],
  tableAriaLabel: "Beschikbaarheidskalender van de Blueportel mobilhome",
  cta: {
    title: "Boek online of contacteer ons",
    description:
      "Selecteer uw data en open het Lodgify-reservatieproces of stuur ons een bericht voor een aanvraag op maat.",
    primary: {
      label: "Lodgify-reservatie openen",
      href: "https://checkout.lodgify.com/nl/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1",
    },
    secondary: {
      label: "Aanvraag op maat",
      href: "mailto:info@blueportel.fr",
    },
  },
  info: [
    "Kalender wordt elke 15 minuten vernieuwd via de officiële Lodgify API.",
    "Blueportel mobilhome – Camping Le Phare d’Opale, Le Portel. Panoramisch zeezicht, 3 kamers, 2 badkamers, tot 6 personen.",
  ],
  screenReader: {
    title: "Beschikbaarheid Blueportel",
    paragraphs: [
      "Reservatiekalender gekoppeld aan Lodgify. Kies uw data om de mobilhome Blueportel aan zee vast te leggen.",
      "Vragen? Contacteer info@blueportel.fr of +32 488 83 20 91.",
    ],
  },
};

export default nlAvailabilityDictionary;

