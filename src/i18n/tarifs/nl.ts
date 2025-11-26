import type { TarifsDictionary } from "./types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

export const nlTarifsDictionary: TarifsDictionary = {
  locale: "nl",
  metadata: {
    title: "Blueportel tarieven | Mobilhome aan zee",
    description:
      "Tarieven per seizoen voor de Blueportel mobilhome. 30% voorschot, €500 borg, linnengoed en eindschoonmaak inbegrepen. Boek uw verblijf aan zee.",
    alternates: {
      canonical: "/nl/pages/tarifs",
      languages: {
        "fr-FR": "/fr/pages/tarifs",
        "en-GB": "/en/pages/tarifs",
        "nl-NL": "/nl/pages/tarifs",
      },
    },
    openGraph: {
      title: "Blueportel tarieven | Mobilhome aan zee",
      description:
        "Seizoensprijzen, voorschotbeleid en inbegrepen diensten voor uw verblijf in Le Portel.",
      type: "website",
      url: `${siteUrl}/nl/pages/tarifs`,
    },
  },
  structuredData: {
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/nl` },
        { "@type": "ListItem", position: 2, name: "Tarieven", item: `${siteUrl}/nl/pages/tarifs` },
      ],
    },
  },
  hero: {
    breadcrumbCurrent: "Tarieven",
    homeLabel: "Home",
    pretitle: "Blueportel mobilhome",
    title: "Tarieven & reservatievoorwaarden",
    description:
      "Bekijk de seizoensprijzen, wat er inbegrepen is en het voorschot/waarborgbeleid voordat u uw verblijf aan zee boekt.",
  },
  seasons: [
    {
      name: "Laagseizoen",
      period: "Februari • Maart • Oktober",
      price: "vanaf €80 / nacht",
      minStay: "minimaal 2 nachten",
      perks: [
        "Winterzonsondergangen",
        "Ideaal voor rustige workations",
        "Voordeligste periode van het jaar",
      ],
    },
    {
      name: "Tussenseizoen",
      period: "April • Mei • Juni • September",
      price: "vanaf €110 / nacht",
      minStay: "minimaal 3 nachten",
      perks: [
        "Licht en zacht klimaat",
        "Perfect voor kustwandelingen",
        "Minder drukte op het strand",
      ],
    },
    {
      name: "Hoogseizoen",
      period: "Juli • Augustus",
      price: "€130–150 / nacht",
      minStay: "minimaal 6 nachten",
      perks: [
        "Spectaculair zeezicht",
        "Directe toegang tot het strand",
        "Ideaal voor de zomervakantie",
      ],
    },
  ],
  infoBlocks: [
    {
      icon: "deposit",
      title: "Voorschotbeleid",
      items: [
        "30% voorschot via Lodgify bij reservatie.",
        "Saldo 30 dagen voor aankomst.",
        "Lastminute: volledige betaling bij bevestiging.",
      ],
    },
    {
      icon: "caution",
      title: "Waarborg & schoonmaak",
      items: [
        "€500 waarborg (kaartimprint of cheque).",
        "Eindschoonmaak inbegrepen.",
        "Huisdieren op aanvraag (+€30).",
      ],
    },
    {
      icon: "schedule",
      title: "Aankomst & vertrek",
      items: [
        "Check-in 14u–18u · Check-out vóór 11u.",
        "Late aankomst mogelijk op aanvraag.",
        "On-site hulp door onze gastvrouw.",
      ],
    },
    {
      icon: "included",
      title: "Inbegrepen in de prijs",
      items: [
        "Bedlinnen, handdoeken en welkomstkits.",
        "Starlink Wi-Fi (vanaf 2026) & smart-tv.",
        "Privéparking voor 2 wagens.",
      ],
    },
  ],
  cta: {
    title: "Een offerte op maat nodig?",
    description:
      "Neem contact op voor langere verblijven, specifieke wensen of bedrijfsaanvragen aan de Opaalkust.",
    buttons: {
      primary: {
        label: "Online boeken",
        href: "https://checkout.lodgify.com/nl/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1",
        rel: "nofollow",
      },
      secondary: { label: "Offerte aanvragen", href: "mailto:infos@blueportel.fr" },
    },
  },
  screenReader: {
    title: "Blueportel tarieven",
    content: [
      "Prijzen voor laag-, tussen- en hoogseizoen van de Blueportel mobilhome.",
      "30% voorschot, €500 waarborg, linnengoed en eindschoonmaak inbegrepen, huisdieren op aanvraag.",
    ],
  },
};

export default nlTarifsDictionary;

