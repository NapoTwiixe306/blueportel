import type { FAQDictionary } from "./types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

const faqEntriesNl = [
  {
    id: "1",
    question: "Waar bevindt de Blueportel mobilhome zich?",
    answer:
      "Blueportel ligt in <strong>Le Portel</strong>, in <strong>Camping Le Phare d’Opale</strong> aan de <strong>Opaalkust</strong>, vlak bij <strong>Boulogne-sur-Mer</strong>. Op de klif geniet u van rechtstreeks zeezicht en, bij helder weer, de Engelse krijtrotsen. Strand, kustpad en dorpscentrum liggen op wandelafstand.",
  },
  {
    id: "2",
    question: "Voor hoeveel gasten is er plaats?",
    answer:
      "Tot <strong>6 personen</strong>:<ul class=\"list-disc list-inside mt-2 space-y-1\"><li>1 master bedroom met 160×190 bed en eigen badkamer</li><li>2 twin-kamers</li><li>Een tweede douchekamer + twee toiletten</li></ul>",
  },
  {
    id: "3",
    question: "Is er zeezicht?",
    answer:
      "Ja, zowel het terras als de woonkamer bieden <strong>direct zeezicht</strong>. Verwacht zonsopgangen boven het Kanaal en soms zicht op Engeland.",
  },
  {
    id: "4",
    question: "Welke uitrusting is aanwezig?",
    answer:
      "Volledig uitgeruste keuken (oven, microgolf, kookplaat, grote koelkast, klassieke + Senseo-koffiezet), smart-tv, snelle wifi (Starlink vanaf 2026), servies voor zes, ruime living/eethoek, twee douchekamers, 12 m² overdekt terras met tuinmeubilair en barbecue, privéparking voor twee wagens.",
  },
  {
    id: "5",
    question: "Is er wifi?",
    answer:
      "<strong>Starlink-wifi</strong> wordt uitgerold voor het seizoen 2026. Tot dan zorgt de uitstekende <strong>5G</strong>-dekking voor telewerk of streaming.",
  },
  {
    id: "6",
    question: "Zijn huisdieren toegestaan?",
    answer: "Ja, <strong>één hond</strong> is welkom na overleg.",
  },
  {
    id: "7",
    question: "Hoe verlopen check-in en check-out?",
    answer:
      "Check-in tussen <strong>14u en 18u</strong> met <strong>Isabelle</strong> ter plaatse. Er wordt een poetswaarborg van €70 gevraagd. Check-out vóór <strong>11u</strong>. Praktische info ontvangt u de week vóór aankomst.",
  },
  {
    id: "8",
    question: "Welke activiteiten zijn er in de buurt?",
    answer:
      "Strandwandelingen, kustpad, Fort de l’Heurt, Mont de Couppes, watersporten, laser game, arcades, Nausicaá op 10 minuten, lokale markten en brasseries.",
  },
  {
    id: "9",
    question: "Hoe boeken we aan de beste prijs?",
    answer:
      "Beste tarieven vindt u op <strong>blueportel.fr</strong>. Booking en Airbnb blijven beschikbaar (met extra kosten). Volg onze Facebookpagina voor promoties.",
  },
  {
    id: "10",
    question: "Wat zijn de openingsdata voor 2026?",
    answer:
      "Blueportel is open van <strong>20 februari tot 12 november 2026</strong>. Reservaties zijn nu al mogelijk.",
  },
];

export const nlFAQDictionary: FAQDictionary = {
  locale: "nl",
  metadata: {
    title: "Blueportel FAQ | Veelgestelde vragen",
    description:
      "Alle antwoorden om uw verblijf voor te bereiden: ligging, uitrusting, wifi, huisdieren, inchecken en tarieven.",
    alternates: {
      canonical: "/nl/faq",
      languages: {
        "fr-FR": "/fr/faq",
        "en-GB": "/en/faq",
        "nl-NL": "/nl/faq",
      },
    },
    openGraph: {
      title: "Blueportel FAQ",
      description:
        "Alles over de mobilhome in Le Portel: zicht, comfort, aankomst en activiteiten aan de Opaalkust.",
      type: "website",
      url: `${siteUrl}/nl/faq`,
    },
  },
  structuredData: {
    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqEntriesNl.map((entry) => ({
        "@type": "Question",
        name: entry.question,
        acceptedAnswer: { "@type": "Answer", text: entry.answer.replace(/<[^>]+>/g, "") },
      })),
    },
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/nl` },
        { "@type": "ListItem", position: 2, name: "FAQ", item: `${siteUrl}/nl/faq` },
      ],
    },
  },
  hero: {
    homeLabel: "Home",
    breadcrumbCurrent: "FAQ",
    title: "Info / FAQ",
    subtitle: "Veelgestelde vragen over de verhuur van onze mobilhome aan zee in Le Portel",
    srTitle: "Blueportel FAQ - mobilhome aan zee",
    srParagraphs: [
      "Antwoorden rond ligging, uitrusting, aankomst en activiteiten rond de mobilhome Blueportel.",
      "Mobilhome met zeezicht voor zes personen, overdekt terras en strandtoegang.",
    ],
  },
  faqItems: faqEntriesNl,
  contactBlock: {
    title: "Nog vragen?",
    description: "We helpen u graag met praktische info, beschikbaarheid of speciale verzoeken.",
    phoneLabel: "+32 488 83 20 91",
    phoneHref: "tel:+32488832091",
    emailLabel: "info@blueportel.fr",
    emailHref: "mailto:info@blueportel.fr",
  },
};

export default nlFAQDictionary;

