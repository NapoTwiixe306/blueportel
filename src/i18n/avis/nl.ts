import type { AvisDictionary } from "./types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

// Echte beoordelingen van de Booking.com-pagina van Blueportel Prestige
// (totaalscore 8,3/10 op basis van 8 beoordelingen — scores omgezet naar /5 voor weergave)
const reviews = [
  {
    name: "Cecile (Frankrijk)",
    date: "mei 2026",
    rating: 4.5,
    text: "Zeer aangename en bijzonder vriendelijke eigenaar. Onberispelijke mobilhome — echt niets op aan te merken, perfect. Dicht bij het centrum, zeer aangename zeekant. We komen met veel plezier terug. Bedankt Michel en Véronique.",
  },
  {
    name: "Laurianne (België)",
    date: "april 2026",
    rating: 4.5,
    text: "De accommodatie voldeed aan mijn verwachtingen, functioneel, en de ligging was perfect: rustig en dicht bij de zee en haar wandelpaden.",
  },
  {
    name: "Vincent (Frankrijk)",
    date: "oktober 2025",
    rating: 4.5,
    text: "Zeer goed uitgeruste mobilhome — alles aanwezig voor keuken, sanitair en onderhoud. Airco en verwarming. Vrij ruim voor een gezin met 2 kinderen. Dicht bij de zee op een afgesloten camping met speeltuin. Attente eigenaar, met gezelschapsspellen ter beschikking.",
  },
  {
    name: "Romain (België)",
    date: "mei 2026",
    rating: 4,
    text: "Het uitzicht vanuit de accommodatie is gewoonweg fantastisch. En zo dicht bij het strand.",
  },
];

const reviewDates: Record<string, string> = {
  "Cecile (Frankrijk)": "2026-05-03",
  "Laurianne (België)": "2026-04-08",
  "Vincent (Frankrijk)": "2025-10-21",
  "Romain (België)": "2026-05-15",
};

export const nlAvisDictionary: AvisDictionary = {
  locale: "nl",
  metadata: {
    title: "Blueportel recensies | Ervaringen van gasten",
    description:
      "Geverifieerde beoordelingen van Blueportel-gasten op Booking.com: 8,3/10 totaal, ligging 9,5/10 en prijs-kwaliteit 9,8/10 voor onze mobilhome aan zee in Le Portel.",
    alternates: {
      canonical: "/nl/pages/avis",
      languages: {
        "fr-FR": "/fr/pages/avis",
        "en-GB": "/en/pages/avis",
        "nl-NL": "/nl/pages/avis",
      },
    },
    openGraph: {
      title: "Blueportel recensies",
      description: "Echte verhalen van reizigers die aan zee logeerden in Le Portel.",
      type: "website",
      url: `${siteUrl}/nl/pages/avis`,
    },
  },
  structuredData: {
    schema: {
      "@context": "https://schema.org",
      "@type": "Accommodation",
      "@id": `${siteUrl}#blueportel-recensies`,
      name: "Blueportel mobilhome",
      description: "Beoordelingen voor de Blueportel mobilhome in Camping Le Phare d’Opale.",
      url: `${siteUrl}/nl/pages/avis`,
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
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/nl` },
        { "@type": "ListItem", position: 2, name: "Recensies", item: `${siteUrl}/nl/pages/avis` },
      ],
    },
  },
  hero: {
    homeLabel: "Home",
    breadcrumbCurrent: "Recensies",
    pretitle: "Ervaringen • Blueportel",
    title: "Zij logeerden aan zee in Le Portel",
    description:
      "Onderstaande beoordelingen zijn geverifieerde gastenreviews van onze Booking.com-pagina: 8,3/10 totaal, ligging 9,5/10, personeel 10/10. Lees hun ervaringen — en deel de uwe na uw verblijf.",
  },
  stats: [
    { label: "Booking.com-score", value: "8,3/10" },
    { label: "Personeel", value: "10/10" },
    { label: "Prijs-kwaliteit", value: "9,8/10" },
  ],
  reviews,
  reasons: {
    title: "Waarom gasten Blueportel aanraden",
    items: [
      { icon: "heart", text: "Direct zeezicht vanaf het 12 m² overdekte terras" },
      { icon: "smile", text: "Persoonlijk onthaal ter plaatse" },
      { icon: "users", text: "Gezinsvriendelijk: 3 kamers, 5 bedden, wifi, airco" },
      { icon: "map", text: "Dicht bij Nausicaá, strand, winkels en kustpaden" },
    ],
  },
  share: {
    title: "Deel uw beoordeling",
    description: "Heeft u bij ons gelogeerd? Deel uw ervaring en inspireer de volgende gasten.",
    links: [
      { label: "Stuur een e-mail", href: "mailto:info@blueportel.fr", type: "email" },
      { label: "Facebook review", href: "https://www.facebook.com/blueportel", type: "facebook" },
      { label: "Booking.com review", href: "https://www.booking.com/hotel/fr/blueportel.nl.html", type: "airbnb" },
    ],
  },
  cta: {
    title: "Ook zin in deze ervaring?",
    description:
      "Contacteer ons voor beschikbaarheid of om uw verblijf aan zee te boeken. We antwoorden binnen 24 uur.",
    phoneLabel: "+32 488 83 20 91",
    phoneHref: "tel:+32488832091",
    emailLabel: "info@blueportel.fr",
    emailHref: "mailto:info@blueportel.fr",
    bookingLabel: "Nu boeken",
    bookingHref:
      "/nl/pages/reserver",
  },
  screenReader: {
    title: "Blueportel recensies",
    paragraph:
      "Beoordelingen van gasten die verbleven in de Blueportel mobilhome in Le Portel: zeezicht, overdekte terras, nabijheid van Nausicaá en premium onthaal. Contact: info@blueportel.fr of +32 488 83 20 91.",
  },
};

export default nlAvisDictionary;

