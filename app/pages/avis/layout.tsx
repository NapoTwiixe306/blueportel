import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

export const metadata: Metadata = {
  title: "Avis clients Blueportel | Expériences au mobil-home Le Portel",
  description:
    "Lisez les avis de voyageurs qui ont séjourné au mobil-home Blueportel : confort, vue mer, accueil et proximité Nausicaá. Donnez également votre retour d'expérience.",
  keywords: [
    "avis blueportel",
    "témoignages mobil-home le portel",
    "retour séjour côte d'opale",
    "avis camping le phare d'opale",
    "opinion location mobil-home",
    "avis client blueportel",
    "note mobil-home vue mer",
    "expérience nausicaa hébergement",
  ],
  openGraph: {
    title: "Avis Blueportel | Témoignages Mobil-home Prestige",
    description:
      "Découvrez pourquoi les voyageurs recommandent Blueportel : vue mer, terrasse, confort et accueil premium à Le Portel.",
    type: "website",
    locale: "fr_FR",
    url: `${siteUrl}/avis`,
    siteName: "Blueportel",
    images: [
      {
        url: `${siteUrl}/location-mobil-home-le-portel-logo.png`,
        width: 1200,
        height: 630,
        alt: "Blueportel - Avis clients",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Avis clients Blueportel",
    description:
      "Lisez les retours de voyageurs sur le mobil-home Blueportel face à la mer.",
    images: [`${siteUrl}/location-mobil-home-le-portel-logo.png`],
  },
  alternates: {
    canonical: `${siteUrl}/avis`,
  },
  category: "Tourisme",
  classification: "Avis clients",
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

export default function AvisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


