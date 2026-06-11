import type { Metadata } from "next";
import HorizonPage from "../../../../src/components/horizon/HorizonPage";

export const metadata: Metadata = {
  title: "BluePortel Horizon — Mobil-home 4 personnes face à la mer | Le Portel",
  description:
    "BluePortel Horizon : mobil-home 2 chambres pour 4 personnes avec vue mer et terrasse privée sur la Côte d'Opale. Idéal couple ou petite famille. Réservation directe.",
  keywords: [
    "mobil-home 4 personnes vue mer Le Portel",
    "location couple Côte d'Opale",
    "mobil-home 2 chambres vue mer",
    "location petite famille Le Portel",
  ],
  alternates: {
    canonical: "/fr/pages/horizon",
    languages: {
      "fr-FR": "/fr/pages/horizon",
      "en-GB": "/en/pages/horizon",
      "nl-NL": "/nl/pages/horizon",
    },
  },
  openGraph: {
    title: "BluePortel Horizon — Mobil-home 4 personnes face à la mer",
    description:
      "2 chambres, vue mer, terrasse privée sur la Côte d'Opale. Idéal couple ou petite famille. Réservation directe.",
    type: "website",
    locale: "fr_FR",
  },
};

const labels = {
  badge: "Jusqu'à 4 voyageurs",
  tagline: "L'intimité face à la mer pour deux ou quatre",
  bookLabel: "Réserver Horizon",
  capacity: "personnes max.",
  bedrooms: "chambres",
  included: "Inclus",
  notIncluded: "Non inclus",
  equipment: "Équipements",
  photoNotice: "Les photos définitives du Horizon seront disponibles prochainement. En attendant, découvrez sa localisation et ses caractéristiques ci-dessous.",
  faqTitle: "Questions fréquentes — Horizon",
  faqSubtitle: "Tout ce que vous devez savoir avant de réserver le Horizon.",
  faqItems: [
    {
      id: "h-1",
      question: "Combien de personnes peut accueillir l'Horizon ?",
      answer:
        "L'Horizon accueille <strong>jusqu'à 4 personnes</strong> : 1 chambre principale avec lit double et 1 chambre avec lits jumeaux.",
    },
    {
      id: "h-2",
      question: "L'Horizon dispose-t-il d'une vue mer ?",
      answer:
        "Oui, l'Horizon bénéficie d'une <strong>vue mer</strong> depuis la terrasse privée. Il est situé au sein du camping BluePortel sur la Côte d'Opale.",
    },
    {
      id: "h-3",
      question: "Quelle est la différence avec le Prestige ?",
      answer:
        "L'Horizon est plus compact et convient parfaitement à <strong>un couple ou une petite famille de 4 personnes</strong>. Le Prestige convient davantage aux <strong>familles de 5-6 personnes</strong> avec sa terrasse couverte de 12 m² et sa climatisation.",
    },
    {
      id: "h-4",
      question: "Comment réserver l'Horizon ?",
      answer:
        "Réservez directement sur blueportel.fr pour bénéficier du <strong>meilleur tarif sans frais</strong>.",
    },
  ],
  ctaTitle: "Réservez l'Horizon dès maintenant",
  ctaSubtitle: "Réservation directe · Meilleur tarif garanti · Sans frais de service",
};

export default function Page() {
  return <HorizonPage locale="fr" labels={labels} />;
}
