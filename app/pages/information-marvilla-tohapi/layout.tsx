import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://blueportel.com';

export const metadata: Metadata = {
  title: "Information Marvilla Tohapi - Blueportel | Location Mobil-Home Le Portel",
  description: "Information importante : Blueportel est une location indépendante au camping Le Phare d'Opale - Marvilla Tohapi à Le Portel, Côte d'Opale. Mobil-home premium avec vue mer directe.",
  keywords: [
    "Marvilla Tohapi",
    "camping Le Phare d'Opale",
    "Blueportel location indépendante",
    "mobil-home Le Portel",
    "location mobil-home Côte d'Opale",
    "mobil-home premium vue mer",
    "camping Marvilla Tohapi Le Portel",
    "location indépendante mobil-home",
  ],
  authors: [{ name: "Blueportel" }],
  creator: "Blueportel",
  publisher: "Blueportel",
  openGraph: {
    title: "Information Marvilla Tohapi - Blueportel",
    description: "Blueportel est une location indépendante au camping Le Phare d'Opale - Marvilla Tohapi à Le Portel. Mobil-home premium avec vue mer directe.",
    type: "website",
    locale: "fr_FR",
    url: `${siteUrl}/camping-phare-d-opale`,
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
    title: "Information Marvilla Tohapi - Blueportel",
    description: "Blueportel est une location indépendante au camping Le Phare d'Opale - Marvilla Tohapi à Le Portel.",
    images: [`${siteUrl}/logo.png`],
  },
  alternates: {
    canonical: `${siteUrl}/camping-phare-d-opale`,
  },
  category: "Information",
  classification: "Information légale",
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

export default function InformationMarvillaTohapiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

