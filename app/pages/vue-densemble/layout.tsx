import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

export const metadata: Metadata = {
  title: "Vue d'ensemble Mobil-home Blueportel | Hébergement Prestige Le Portel",
  description:
    "Découvrez toutes les caractéristiques du mobil-home Blueportel : 3 chambres, 2 salles de bain, terrasse vue mer, équipements haut de gamme au camping Le Phare d'Opale à Le Portel.",
  keywords: [
    "vue d'ensemble blueportel",
    "mobil-home prestige le portel",
    "location mobil-home côte d'opale",
    "mobil-home 3 chambres vue mer",
    "hébergement camping le phare d'opale",
    "mobil-home nausicaa proche",
    "location vacances le portel",
    "mobil-home terrasse couverte",
    "mobil-home famille 6 personnes",
    "mobil-home haut de gamme côte d'opale",
  ],
  openGraph: {
    title: "Blueportel - Vue d'ensemble Mobil-home Prestige",
    description:
      "Mobil-home haut de gamme face à la mer au Portel : 3 chambres, 2 salles de bain, cuisine équipée, terrasse panoramique et accès rapide à Nausicaá.",
    type: "website",
    locale: "fr_FR",
    url: `${siteUrl}/pages/vue-densemble`,
    siteName: "Blueportel",
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: "Blueportel - Mobil-home prestige face à la mer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vue d'ensemble Mobil-home Blueportel",
    description:
      "Mobil-home prestige face à la mer au Portel : vue mer directe, terrasse de 12 m², équipements premium pour 6 personnes.",
    images: [`${siteUrl}/logo.png`],
  },
  alternates: {
    canonical: `${siteUrl}/pages/vue-densemble`,
  },
  category: "Tourisme",
  classification: "Hébergement - Mobil-home premium",
  other: {
    "geo.region": "FR-62",
    "geo.placename": "Le Portel",
    "geo.position": "50.7081;1.5714",
    ICBM: "50.7081, 1.5714",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function VueEnsembleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


