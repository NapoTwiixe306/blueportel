import type { AvisDictionary } from "./types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

const reviews = [
  {
    name: "Camille & Romain",
    date: "augustus 2024",
    rating: 5,
    text: "Adembenemend zeezicht, perfecte ontbijten op het terras en een warm onthaal door Isabelle. Ideale uitvalsbasis voor Nausicaá!",
  },
  {
    name: "Sébastien & Julie",
    date: "juli 2024",
    rating: 5,
    text: "Stijlvol ingerichte mobilhome met hotelbedden, alles is voorzien: parking, wifi, airco… We komen zeker terug.",
  },
  {
    name: "Élodie",
    date: "mei 2024",
    rating: 4.8,
    text: "Geweldig verblijf. Rustig, zeezicht, wandelingen langs de klif. De uitgeruste keuken is een echte troef.",
  },
];

export const nlAvisDictionary: AvisDictionary = {
  locale: "nl",
  metadata: {
    title: "Blueportel recensies | Ervaringen van gasten",
    description:
      "Geverifieerde beoordelingen van de Blueportel mobilhome. Ontdek waarom we sinds 2022 een score van 4,9/5 behouden.",
    alternates: {
      canonical: "/nl/beoordelingen",
      languages: {
        "fr-FR": "/fr/avis",
        "en-GB": "/en/reviews",
        "nl-NL": "/nl/beoordelingen",
      },
    },
    openGraph: {
      title: "Blueportel recensies",
      description: "Echte verhalen van reizigers die aan zee logeerden in Le Portel.",
      type: "website",
      url: `${siteUrl}/nl/beoordelingen`,
    },
  },
  structuredData: {
    schema: {
      "@context": "https://schema.org",
      "@type": "Accommodation",
      "@id": `${siteUrl}#blueportel-recensies`,
      name: "Blueportel mobilhome",
      description: "Beoordelingen voor de Blueportel mobilhome in Camping Le Phare d’Opale.",
      url: `${siteUrl}/nl/beoordelingen`,
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
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/nl` },
        { "@type": "ListItem", position: 2, name: "Recensies", item: `${siteUrl}/nl/beoordelingen` },
      ],
    },
  },
  hero: {
    homeLabel: "Home",
    breadcrumbCurrent: "Recensies",
    pretitle: "Ervaringen • Blueportel",
    title: "Zij logeerden aan zee in Le Portel",
    description:
      "Lees waarom gasten fan zijn van het panoramische uitzicht, de overdekte terras en het premium onthaal van Blueportel. Deel ook uw ervaring.",
  },
  stats: [
    { label: "Gemiddelde score", value: "4.9/5" },
    { label: "Verblijven in 2024", value: "127+" },
    { label: "Terugkerende gasten", value: "62%" },
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
      { label: "Airbnb review", href: "https://www.airbnb.fr/rooms/123456", type: "airbnb" },
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
      "https://checkout.lodgify.com/nl/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1",
  },
  screenReader: {
    title: "Blueportel recensies",
    paragraph:
      "Beoordelingen van gasten die verbleven in de Blueportel mobilhome in Le Portel: zeezicht, overdekte terras, nabijheid van Nausicaá en premium onthaal. Contact: info@blueportel.fr of +32 488 83 20 91.",
  },
};

export default nlAvisDictionary;

