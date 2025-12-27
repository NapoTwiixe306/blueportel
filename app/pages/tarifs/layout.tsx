import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

export const metadata: Metadata = {
  title: "Tarifs Mobil-home Blueportel | Séjour face à la mer",
  description:
    "Consultez les tarifs du mobil-home Blueportel à Le Portel : basse, moyenne et haute saison. Politique de réservation, caution et services inclus.",
  keywords: [
    "tarifs mobil-home le portel",
    "prix location blueportel",
    "mobil-home côte d'opale tarif",
    "haute saison mobil-home",
    "basse saison location mer",
  ],
  openGraph: {
    title: "Tarifs Blueportel | Location Mobil-home vue mer",
    description:
      "Grille tarifaire par saison, services inclus, conditions de réservation et politique de caution pour le mobil-home Blueportel.",
    type: "website",
    locale: "fr_FR",
    url: `${siteUrl}/pages/tarifs`,
    siteName: "Blueportel",
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: "Blueportel - Tarifs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarifs Mobil-home Blueportel",
    description:
      "Tarifs par saison et conditions de réservation du mobil-home Blueportel.",
    images: [`${siteUrl}/logo.png`],
  },
  alternates: {
    canonical: `${siteUrl}/pages/tarifs`,
  },
  category: "Tourisme",
  classification: "Tarifs hébergement",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TarifsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


