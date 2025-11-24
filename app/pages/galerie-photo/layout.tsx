import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

export const metadata: Metadata = {
  title: "Galerie Photo Mobil-Home Vue Mer Le Portel | Blueportel",
  description:
    "Découvrez les photos du mobil-home Blueportel à Le Portel : vue mer panoramique, terrasse couverte, chambres confortables et accès rapide à Nausicaá. Location prestige sur la Côte d'Opale.",
  keywords: [
    "galerie photo mobil-home Le Portel",
    "photos mobil-home vue mer",
    "galerie Blueportel",
    "mobil-home Côte d'Opale photos",
    "mobil-home terrasse couverte",
    "hébergement vue mer Le Portel",
    "mobil-home proche Nausicaá",
    "location mobil-home photos",
    "vacances Côte d'Opale images",
    "mobil-home 3 chambres photos",
    "location prestige Blueportel",
    "mobil-home familial Le Portel",
  ],
  openGraph: {
    title: "Galerie Photo Blueportel | Mobil-Home Vue Mer Le Portel",
    description:
      "Visitez la galerie photo du mobil-home Blueportel : intérieur moderne, terrasse panoramique et vue mer exceptionnelle à Le Portel, Côte d'Opale.",
    type: "website",
    locale: "fr_FR",
    url: `${siteUrl}/pages/galerie-photo`,
    siteName: "Blueportel",
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: "Blueportel - Mobil-home vue mer Le Portel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Galerie Photo Blueportel | Mobil-Home Vue Mer",
    description:
      "Photos haute définition du mobil-home Blueportel : vue mer, terrasse couverte, chambres et espaces de vie lumineux.",
    images: [`${siteUrl}/logo.png`],
  },
  alternates: {
    canonical: `${siteUrl}/pages/galerie-photo`,
  },
  category: "Tourisme",
  classification: "Galerie photo mobil-home",
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

export default function GaleriePhotoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


