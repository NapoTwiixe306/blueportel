import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://blueportel.fr';

export const metadata: Metadata = {
  title: "Nausicaá - Location Mobil-Home à 10 min | Blueportel Le Portel",
  description: "Location mobil-home à Le Portel, à 10 min de Nausicaá (Boulogne-sur-Mer). Mobil-home 3 chambres face à la mer, vue panoramique, idéal pour visiter Nausicaá - Centre National de la Mer en famille. Réservez dès maintenant.",
  keywords: [
    "Nausicaá",
    "Nausicaá Boulogne-sur-Mer",
    "location mobil-home proche Nausicaá",
    "mobil-home Le Portel Nausicaá",
    "hébergement près Nausicaá",
    "location vacances Nausicaá",
    "mobil-home Côte d'Opale Nausicaá",
    "aquarium Boulogne-sur-Mer",
    "Centre National de la Mer",
    "location mobil-home 10 min Nausicaá",
    "mobil-home vue mer Nausicaá",
    "location mobil-home famille Nausicaá",
    "hébergement camping Nausicaá",
    "mobil-home terrasse vue mer Nausicaá",
    "location mobil-home Boulogne-sur-Mer",
    "mobil-home Le Portel aquarium",
    "location vacances proche Nausicaá",
    "mobil-home 3 chambres Nausicaá",
    "location mobil-home Côte d'Opale aquarium",
    "hébergement mobil-home Nausicaá",
  ],
  authors: [{ name: "Blueportel" }],
  creator: "Blueportel",
  publisher: "Blueportel",
  openGraph: {
    title: "Nausicaá - Location Mobil-Home à 10 min | Blueportel",
    description: "Location mobil-home à Le Portel, à 10 min de Nausicaá. Mobil-home 3 chambres face à la mer, vue panoramique, idéal pour visiter Nausicaá en famille.",
    type: "website",
    locale: "fr_FR",
    url: `${siteUrl}/pages/nausicaa-proche-le-portel`,
    siteName: "Blueportel",
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: "Blueportel - Location mobil-home proche Nausicaá",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nausicaá - Location Mobil-Home à 10 min | Blueportel",
    description: "Location mobil-home à Le Portel, à 10 min de Nausicaá. Mobil-home 3 chambres face à la mer, idéal pour visiter Nausicaá en famille.",
    images: [`${siteUrl}/logo.png`],
  },
  alternates: {
    canonical: `${siteUrl}/pages/nausicaa-proche-le-portel`,
  },
  category: "Tourisme",
  classification: "Location de mobil-home - Proche Nausicaá",
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

export default function NausicaaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

