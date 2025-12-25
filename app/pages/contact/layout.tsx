import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://blueportel.com';

export const metadata: Metadata = {
  title: "Contact - Blueportel | Location Mobil-Home Face à la Mer Le Portel",
  description: "Contactez Michel & Véro pour votre location de mobil-home face à la mer au Portel, Côte d'Opale. Mobil-home 3 chambres, vue panoramique, accès plage. Réservez dès 75€/nuit.",
  keywords: [
    "contact Blueportel",
    "contact location mobil-home Le Portel",
    "Michel Milants Blueportel",
    "contact mobil-home face à la mer",
    "location mobil-home Côte d'Opale contact",
    "mobil-home 3 chambres contact",
    "réservation mobil-home Le Portel",
    "contact hébergement mobil-home",
    "location vacances Le Portel contact",
    "mobil-home plage Le Portel contact",
    "contact mobil-home prestige",
    "location mobil-home vue panoramique contact",
  ],
  authors: [{ name: "Blueportel" }],
  creator: "Blueportel",
  publisher: "Blueportel",
  openGraph: {
    title: "Contact Blueportel - Location Mobil-Home Face à la Mer",
    description: "Contactez Michel & Véro pour votre location de mobil-home face à la mer au Portel. Mobil-home 3 chambres avec vue panoramique, accès direct plage.",
    type: "website",
    locale: "fr_FR",
    url: `${siteUrl}/contact`,
    siteName: "Blueportel",
    images: [
      {
        url: `${siteUrl}/location-mobil-home-le-portel-logo.png`,
        width: 1200,
        height: 630,
        alt: "Blueportel - Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Blueportel - Location Mobil-Home Face à la Mer",
    description: "Contactez Michel & Véro pour votre location de mobil-home face à la mer au Portel. Mobil-home 3 chambres, vue panoramique.",
    images: [`${siteUrl}/location-mobil-home-le-portel-logo.png`],
  },
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  category: "Tourisme",
  classification: "Location de mobil-home - Contact",
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

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

