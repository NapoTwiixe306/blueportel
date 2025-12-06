import type { TarifsDictionary } from "./types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

export const enTarifsDictionary: TarifsDictionary = {
  locale: "en",
  metadata: {
    title: "Blueportel Rates | Seafront Mobile Home Rental",
    description:
      "Seasonal rates for the Blueportel mobile home. 30% deposit, €500 security hold, linen and cleaning included. Book your stay by the sea.",
    alternates: {
      canonical: "/en/pages/tarifs",
      languages: {
        "fr-FR": "/fr/pages/tarifs",
        "en-GB": "/en/pages/tarifs",
        "nl-NL": "/nl/pages/tarifs",
      },
    },
    openGraph: {
      title: "Blueportel Rates | Seafront mobile home",
      description:
        "Seasonal prices, booking policy and services included for your Le Portel seaside stay.",
      type: "website",
      url: `${siteUrl}/en/pages/tarifs`,
    },
  },
  structuredData: {
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/en` },
        { "@type": "ListItem", position: 2, name: "Rates", item: `${siteUrl}/en/pages/tarifs` },
      ],
    },
  },
  hero: {
    breadcrumbCurrent: "Rates",
    homeLabel: "Home",
    pretitle: "Blueportel mobile home",
    title: "Rates & booking policy",
    description:
      "See our seasonal rates, what’s included, and the payment / security policy before booking your seaside stay.",
  },
  seasons: [
    {
      name: "Low season",
      period: "February • March • October",
      priceEUR: { min: 80 },
      minStay: "2-night minimum",
      perks: [
        "Winter sunsets over the sea",
        "Perfect for remote work breaks",
        "Best value of the year",
      ],
    },
    {
      name: "Mid season",
      period: "April • May • June • September",
      priceEUR: { min: 110 },
      minStay: "3-night minimum",
      perks: [
        "Bright spring and fall light",
        "Ideal for coastal hikes",
        "Quieter beaches",
      ],
    },
    {
      name: "High season",
      period: "July • August",
      priceEUR: { min: 130, max: 150 },
      minStay: "6-night minimum",
      perks: [
        "Unforgettable sea view",
        "Direct beach access",
        "Perfect for family holidays",
      ],
    },
  ],
  infoBlocks: [
    {
      icon: "deposit",
      title: "Deposit policy",
      items: [
        "30% deposit via Lodgify when booking.",
        "Balance due 30 days before arrival.",
        "Last-minute stays: full payment at confirmation.",
      ],
    },
    {
      icon: "caution",
      title: "Security & cleaning",
      items: [
        "€200 security hold (card imprint or cheque).",
        "End-of-stay cleaning NOT included.",
        "Pets welcome on request .",
      ],
    },
    {
      icon: "schedule",
      title: "Arrival & departure",
      items: [
        "Check-in 2–6 pm · Check-out before 11 am.",
        "Late check-in available on request.",
        "On-site assistance by our host.",
      ],
    },
    {
      icon: "included",
      title: "Included in the rate",
      items: [
        "Bed linen, towels and welcome kits.",
        "Starlink Wi-Fi (from 2026) & smart TV.",
        "Private parking for 2 cars.",
      ],
    },
  ],
  cta: {
    title: "Need a tailored quote?",
    description:
      "Get in touch for long stays, bespoke requests or company retreats on the Opal Coast.",
    buttons: {
      primary: {
        label: "Book online",
        href: "https://checkout.lodgify.com/en/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1",
        rel: "nofollow",
      },
      secondary: { label: "Request a quote", href: "mailto:infos@blueportel.fr" },
    },
  },
  screenReader: {
    title: "Blueportel rates",
    content: [
      "Low, mid and high season pricing for the Blueportel mobile home in Le Portel.",
      "30% deposit, €500 security hold, linen and cleaning included, pets on request.",
    ],
  },
};

export default enTarifsDictionary;

