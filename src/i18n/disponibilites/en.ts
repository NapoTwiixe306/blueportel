import type { AvailabilityDictionary } from "./types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

export const enAvailabilityDictionary: AvailabilityDictionary = {
  locale: "en",
  metadata: {
    title: "Blueportel Availability | Booking calendar",
    description:
      "Check real-time availability for the Blueportel mobile home in Le Portel. Lodgify-synced calendar and secure seaside booking.",
    alternates: {
      canonical: "/en/pages/disponibilites",
      languages: {
        "fr-FR": "/fr/pages/disponibilites",
        "en-GB": "/en/pages/disponibilites",
        "nl-NL": "/nl/pages/disponibilites",
      },
    },
    openGraph: {
      title: "Blueportel availability calendar",
      description:
        "Real-time availability for the Blueportel mobile home. Pick your dates and book online or reach out directly.",
      type: "website",
      url: `${siteUrl}/en/pages/disponibilites`,
    },
  },
  structuredData: {
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/en` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Availability",
          item: `${siteUrl}/en/pages/disponibilites`,
        },
      ],
    },
  },
  hero: {
    homeLabel: "Home",
    breadcrumbCurrent: "Availability",
    pretitle: "Blueportel mobile home",
    title: "Check real-time availability",
    description:
      "Calendar synced with Lodgify. View available dates, plan your seaside stay and confirm your booking online.",
  },
  loadingText: "Fetching availability…",
  error: {
    title: "Calendar temporarily unavailable",
    description:
      "We can’t display the Lodgify calendar right now. Please try again shortly or contact us directly.",
    contactCTA: [
      { label: "+32 488 83 20 91", href: "tel:+32488832091" },
      { label: "info@blueportel.fr", href: "mailto:info@blueportel.fr" },
    ],
  },
  emptyMessage: "No openings are available at the moment.",
  statusLabels: {
    available: "Available",
    booked: "Booked",
    checkin: "Arrival",
    checkout: "Departure",
    unknown: "Status to confirm",
  },
  legend: [
    { status: "available", label: "Available" },
    { status: "booked", label: "Booked" },
    { status: "checkin", label: "Arrival" },
    { status: "checkout", label: "Departure" },
  ],
  tableAriaLabel: "Availability calendar for the Blueportel mobile home",
  cta: {
    title: "Book online or message us",
    description:
      "Once you’ve selected your dates, open the Lodgify booking flow or reach out for a tailored request.",
    primary: {
      label: "Open Lodgify booking",
      href: "https://checkout.lodgify.com/en/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1",
    },
    secondary: {
      label: "Custom request",
      href: "mailto:info@blueportel.fr",
    },
  },
  info: [
    "Calendar refreshes every 15 minutes via the official Lodgify API.",
    "Blueportel mobile home – Camping Le Phare d’Opale, Le Portel. Panoramic sea view, 3 bedrooms, 2 bathrooms, up to 6 guests.",
  ],
  screenReader: {
    title: "Blueportel availability",
    paragraphs: [
      "Booking calendar powered by Lodgify. Select your dates to secure the Blueportel seaside rental.",
      "Questions? Contact info@blueportel.fr or +32 488 83 20 91.",
    ],
  },
};

export default enAvailabilityDictionary;

