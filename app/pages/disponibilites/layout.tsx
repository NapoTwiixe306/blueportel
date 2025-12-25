import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

export const metadata: Metadata = {
  title: "Disponibilités Mobil-home Blueportel | Réserver vos dates",
  description:
    "Consultez le calendrier de disponibilités du mobil-home Blueportel au Portel et réservez vos dates via Lodgify. Vue mer, 3 chambres, terrasse couverte.",
  keywords: [
    "disponibilités mobil-home le portel",
    "calendrier blueportel",
    "réservation mobil-home côte d'opale",
    "lodgify calendar blueportel",
    "dates libres mobil-home vue mer",
  ],
  openGraph: {
    title: "Disponibilités Blueportel | Réserver votre séjour",
    description:
      "Vérifiez les dates disponibles pour le mobil-home Blueportel et réservez en ligne via Lodgify.",
    type: "website",
    locale: "fr_FR",
    url: `${siteUrl}/disponibilites`,
    siteName: "Blueportel",
    images: [
      {
        url: `${siteUrl}/location-mobil-home-le-portel-logo.png`,
        width: 1200,
        height: 630,
        alt: "Blueportel - Disponibilités",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Disponibilités Mobil-home Blueportel",
    description:
      "Consultez les dates disponibles et réservez votre séjour face à la mer.",
    images: [`${siteUrl}/location-mobil-home-le-portel-logo.png`],
  },
  alternates: {
    canonical: `${siteUrl}/disponibilites`,
  },
  category: "Tourisme",
  classification: "Disponibilités",
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

export default function DisponibilitesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


