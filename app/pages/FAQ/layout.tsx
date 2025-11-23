import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://blueportel.com';

export const metadata: Metadata = {
  title: "FAQ - Questions Fréquentes | Location Mobil-Home Face à la Mer Le Portel | Blueportel",
  description: "FAQ Blueportel : réponses à toutes vos questions sur la location de mobil-home face à la mer au Portel, Côte d'Opale. Mobil-home 3 chambres, vue panoramique, équipements, réservation, tarifs, activités. Réservez dès 90€/nuit.",
  keywords: [
    "FAQ location mobil-home Le Portel",
    "questions fréquentes mobil-home face à la mer",
    "FAQ Blueportel",
    "location mobil-home Côte d'Opale questions",
    "mobil-home 3 chambres FAQ",
    "location vacances Le Portel informations",
    "mobil-home plage Le Portel questions",
    "hébergement mobil-home prestige FAQ",
    "location mobil-home vue panoramique infos",
    "mobil-home haut de gamme Côte d'Opale FAQ",
    "location mobil-home accès plage questions",
    "mobil-home vue mer informations",
    "location vacances Côte d'Opale FAQ",
    "mobil-home 6 personnes questions",
    "location mobil-home terrasse vue mer infos",
    "réservation mobil-home Le Portel",
    "tarifs mobil-home face à la mer",
    "équipements mobil-home Blueportel",
    "wifi mobil-home Le Portel",
    "animaux acceptés mobil-home",
  ],
  authors: [{ name: "Blueportel" }],
  creator: "Blueportel",
  publisher: "Blueportel",
  openGraph: {
    title: "FAQ Blueportel - Questions Fréquentes | Location Mobil-Home Face à la Mer",
    description: "Trouvez toutes les réponses à vos questions sur la location de mobil-home Blueportel au Portel. Mobil-home 3 chambres face à la mer avec vue panoramique, équipements, réservation, tarifs.",
    type: "website",
    locale: "fr_FR",
    url: `${siteUrl}/pages/FAQ`,
    siteName: "Blueportel",
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: "Blueportel - Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ Blueportel - Questions Fréquentes | Location Mobil-Home Face à la Mer",
    description: "Réponses à toutes vos questions sur la location de mobil-home face à la mer au Portel. Mobil-home 3 chambres, vue panoramique, équipements.",
    images: [`${siteUrl}/logo.png`],
  },
  alternates: {
    canonical: `${siteUrl}/pages/FAQ`,
  },
  category: "Tourisme",
  classification: "Location de mobil-home - FAQ",
  other: {
    "geo.region": "FR-62",
    "geo.placename": "Le Portel",
    "geo.position": "50.7081;1.5714",
    "ICBM": "50.7081, 1.5714",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

