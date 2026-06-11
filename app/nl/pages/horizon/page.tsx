import type { Metadata } from "next";
import HorizonPage from "../../../../src/components/horizon/HorizonPage";

export const metadata: Metadata = {
  title: "BluePortel Horizon — Mobilhome voor 4 aan zee | Le Portel",
  description:
    "BluePortel Horizon: mobilhome met 2 slaapkamers voor 4 personen met zeezicht en privéterras op de Opaalkust. Ideaal voor koppels of kleine gezinnen. Rechtstreeks boeken.",
  alternates: {
    canonical: "/nl/pages/horizon",
    languages: {
      "fr-FR": "/fr/pages/horizon",
      "en-GB": "/en/pages/horizon",
      "nl-NL": "/nl/pages/horizon",
    },
  },
  openGraph: {
    title: "BluePortel Horizon — Mobilhome voor 4 aan zee",
    description: "2 slaapkamers, zeezicht, privéterras op de Opaalkust. Ideaal voor koppels of kleine gezinnen.",
    type: "website",
    locale: "nl_NL",
  },
};

const labels = {
  badge: "Tot 4 personen",
  tagline: "Intimiteit met uitzicht op zee voor twee of vier",
  bookLabel: "Horizon boeken",
  capacity: "personen max.",
  bedrooms: "slaapkamers",
  included: "Inbegrepen",
  notIncluded: "Niet inbegrepen",
  equipment: "Voorzieningen",
  photoNotice: "De definitieve foto's van Horizon zijn binnenkort beschikbaar. Ontdek intussen de locatie en kenmerken hieronder.",
  faqTitle: "Veelgestelde vragen — Horizon",
  faqSubtitle: "Alles wat u moet weten voor het boeken van Horizon.",
  faqItems: [
    {
      id: "h-1",
      question: "Hoeveel personen kan Horizon ontvangen?",
      answer:
        "Horizon biedt place voor <strong>tot 4 personen</strong>: 1 hoofdslaapkamer met tweepersoonsbed en 1 slaapkamer met twee eenpersoonsbedden.",
    },
    {
      id: "h-2",
      question: "Heeft Horizon zeezicht?",
      answer:
        "Ja, Horizon heeft <strong>zeezicht</strong> vanuit het privéterras. Het is gelegen op de BluePortel camping op de Opaalkust.",
    },
    {
      id: "h-3",
      question: "Wat is het verschil met Prestige?",
      answer:
        "Horizon is compacter en perfect voor <strong>een koppel of klein gezin van 4</strong>. Prestige is geschikter voor <strong>gezinnen van 5-6</strong> met het 12 m² overdekte terras en airconditioning.",
    },
    {
      id: "h-4",
      question: "Hoe boek ik Horizon?",
      answer:
        "Boek rechtstreeks op blueportel.fr voor de <strong>beste prijs zonder kosten</strong>.",
    },
  ],
  ctaTitle: "Boek Horizon nu",
  ctaSubtitle: "Rechtstreeks boeken · Beste prijs gegarandeerd · Geen servicekosten",
};

export default function Page() {
  return <HorizonPage locale="nl" labels={labels} />;
}
