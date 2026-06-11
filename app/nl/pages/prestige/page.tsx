import type { Metadata } from "next";
import PrestigePage from "../../../../src/components/prestige/PrestigePage";

export const metadata: Metadata = {
  title: "BluePortel Prestige — Mobilhome voor 6 aan zee | Le Portel",
  description:
    "BluePortel Prestige mobilhome: 3 slaapkamers voor 6 personen, panoramisch zeezicht, 12 m² overdekt terras, directe strandtoegang. Rechtstreeks boeken, beste prijs gegarandeerd.",
  alternates: {
    canonical: "/nl/pages/prestige",
    languages: {
      "fr-FR": "/fr/pages/prestige",
      "en-GB": "/en/pages/prestige",
      "nl-NL": "/nl/pages/prestige",
    },
  },
  openGraph: {
    title: "BluePortel Prestige — Mobilhome voor 6 aan zee",
    description: "3 slaapkamers, panoramisch zeezicht, 12 m² overdekt terras, directe strandtoegang.",
    type: "website",
    locale: "nl_NL",
  },
};

const labels = {
  backLabel: "Terug naar home",
  badge: "Tot 6 personen",
  tagline: "De familiemobilhome met uitzicht op het Kanaal",
  bookLabel: "Prestige boeken",
  discoverGalleryLabel: "Alle foto's bekijken",
  capacity: "personen max.",
  bedrooms: "slaapkamers",
  included: "Inbegrepen",
  notIncluded: "Niet inbegrepen",
  equipment: "Voorzieningen",
  photoNotice: "",
  faqTitle: "Veelgestelde vragen — Prestige",
  faqSubtitle: "Alles wat u moet weten voor het boeken van Prestige.",
  faqItems: [
    {
      id: "p-1",
      question: "Hoeveel personen kan Prestige ontvangen?",
      answer:
        "Prestige biedt place voor <strong>tot 6 personen</strong>: 1 master suite met 160×190 bed en eigen badkamer, 2 tweepersoonskamers en een tweede badkamer.",
    },
    {
      id: "p-2",
      question: "Is het zeezicht echt direct?",
      answer:
        "Ja, het <strong>zeezicht is direct</strong> vanuit het overdekte terras en de woonkamer. Bij helder weer ziet u de Engelse krijtrotsen.",
    },
    {
      id: "p-3",
      question: "Wat is inbegrepen in de huur?",
      answer:
        "Uitgeruste keuken (oven, magnetron, gaskookplaat, grote koelkast, Senseo koffiezetapparaat), Smart TV, Wi-Fi, airconditioning, verwarming, servies voor 6, overdekt terras met tuinmeubilair en BBQ, privéparkeerplaats voor 2 voertuigen.",
    },
    {
      id: "p-4",
      question: "Hoe boek ik?",
      answer:
        "Boek rechtstreeks op blueportel.fr voor de <strong>beste prijs zonder kosten</strong>. Ook beschikbaar op Booking.com en Airbnb (met extra kosten).",
    },
  ],
  ctaTitle: "Boek Prestige nu",
  ctaSubtitle: "Rechtstreeks boeken · Beste prijs gegarandeerd · Geen servicekosten",
};

export default function Page() {
  return <PrestigePage locale="nl" labels={labels} />;
}
