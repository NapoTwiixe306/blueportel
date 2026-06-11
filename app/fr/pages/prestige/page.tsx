import type { Metadata } from "next";
import PrestigePage from "../../../../src/components/prestige/PrestigePage";

export const metadata: Metadata = {
  title: "BluePortel Prestige — Mobil-home 6 personnes face à la mer | Le Portel",
  description:
    "Mobil-home Prestige BluePortel : 3 chambres pour 6 personnes, vue mer panoramique, terrasse couverte 12 m², accès direct plage. Réservation directe sans frais. Côte d'Opale.",
  keywords: [
    "mobil-home prestige Le Portel",
    "location 6 personnes vue mer",
    "mobil-home 3 chambres Côte d'Opale",
    "terrasse couverte vue mer",
    "mobil-home famille Le Portel",
  ],
  alternates: {
    canonical: "/fr/pages/prestige",
    languages: {
      "fr-FR": "/fr/pages/prestige",
      "en-GB": "/en/pages/prestige",
      "nl-NL": "/nl/pages/prestige",
    },
  },
  openGraph: {
    title: "BluePortel Prestige — Mobil-home 6 personnes face à la mer",
    description:
      "3 chambres, vue mer panoramique, terrasse couverte 12 m², accès direct plage. Réservation directe.",
    type: "website",
    locale: "fr_FR",
  },
};

const labels = {
  backLabel: "Retour à l'accueil",
  badge: "Jusqu'à 6 voyageurs",
  tagline: "Le mobil-home familial face à la Manche",
  bookLabel: "Réserver Prestige",
  discoverGalleryLabel: "Voir toutes les photos",
  capacity: "personnes max.",
  bedrooms: "chambres",
  included: "Inclus",
  notIncluded: "Non inclus",
  equipment: "Équipements",
  photoNotice: "",
  faqTitle: "Questions fréquentes — Prestige",
  faqSubtitle: "Tout ce que vous devez savoir avant de réserver le Prestige.",
  faqItems: [
    {
      id: "p-1",
      question: "Combien de personnes peut accueillir le Prestige ?",
      answer:
        "Le Prestige accueille <strong>jusqu'à 6 personnes</strong> : 1 suite parentale avec lit 160×190 et salle d'eau privative, 2 chambres avec lits jumeaux, et une seconde salle d'eau.",
    },
    {
      id: "p-2",
      question: "La vue mer est-elle vraiment directe ?",
      answer:
        "Oui, la <strong>vue mer est directe</strong> depuis la terrasse couverte et le salon. Par temps clair, vous apercevez les falaises anglaises.",
    },
    {
      id: "p-3",
      question: "Qu'est-ce qui est inclus dans la location ?",
      answer:
        "Cuisine équipée (four, micro-ondes, plaque gaz, grand frigo, cafetière Senseo), Smart TV, Wi-Fi, climatisation, chauffage, vaisselle pour 6, terrasse couverte avec salon de jardin et barbecue, parking privé 2 véhicules.",
    },
    {
      id: "p-4",
      question: "Comment réserver ?",
      answer:
        "Réservez directement sur blueportel.fr pour bénéficier du <strong>meilleur tarif sans frais</strong>. Disponible aussi sur Booking.com et Airbnb (avec frais supplémentaires).",
    },
  ],
  ctaTitle: "Réservez le Prestige dès maintenant",
  ctaSubtitle: "Réservation directe · Meilleur tarif garanti · Sans frais de service",
};

export default function Page() {
  return <PrestigePage locale="fr" labels={labels} />;
}
