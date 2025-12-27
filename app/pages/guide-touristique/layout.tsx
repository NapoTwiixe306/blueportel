import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

export const metadata: Metadata = {
  title: "Guide touristique Le Portel & Côte d’Opale | Blueportel",
  description:
    "Idées d’activités autour du mobil-home Blueportel : balades sur le sentier des douaniers, Nausicaá, gastronomie locale, randonnées sur la Côte d’Opale et détente face à la mer.",
  keywords: [
    "guide touristique le portel",
    "que faire le portel",
    "activités côte d'opale",
    "nausicaa visite",
    "balade sentier douanier",
    "brasserie du fort le portel",
    "randonnée velomaritime",
    "week-end côte d'opale automne",
    "mobil-home blueportel tourisme",
  ],
  openGraph: {
    title: "Guide touristique Blueportel | Activités autour de Le Portel",
    description:
      "Balades en bord de mer, plaisirs gourmands, Nausicaá, Vélomaritime et couchers de soleil depuis la terrasse Blueportel.",
    type: "website",
    locale: "fr_FR",
    url: `${siteUrl}/guide-touristique`,
    siteName: "Blueportel",
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: "Blueportel - Guide touristique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guide touristique Le Portel | Blueportel",
    description:
      "Découvrez nos idées d’activités autour du mobil-home Blueportel : nature, culture, gastronomie et détente.",
    images: [`${siteUrl}/logo.png`],
  },
  alternates: {
    canonical: `${siteUrl}/guide-touristique`,
  },
  category: "Tourisme",
  classification: "Guide touristique",
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

export default function GuideTouristiqueLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


