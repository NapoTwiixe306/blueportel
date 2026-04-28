import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

export const metadata: Metadata = {
  title: "Plan d'accès Blueportel | Comment venir au mobil-home Le Portel",
  description:
    "Plan d'accès pour rejoindre le mobil-home Blueportel : itinéraires en voiture, train, bus, vélo et distances clés vers Le Portel (Camping Le Phare d'Opale).",
  keywords: [
    "plan accès blueportel",
    "comment venir blueportel",
    "itinéraire mobil-home le portel",
    "trajet boulogne-sur-mer le portel",
    "camping le phare d'opale plan",
    "transport le portel",
    "accès nausicaa depuis le portel",
    "bus 503 marineo",
    "eurovelo 4 le portel",
    "parking mobil-home côte d'opale",
  ],
  openGraph: {
    title: "Plan d'accès Blueportel | Rejoindre le Mobil-home au Portel",
    description:
      "Préparez votre trajet vers Blueportel : accès voiture, train, bus, vélo et distances clés depuis Paris, Lille, Calais et Boulogne-sur-Mer.",
    type: "website",
    locale: "fr_FR",
    url: `${siteUrl}/pages/plan`,
    siteName: "Blueportel",
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: "Blueportel - Plan d'accès",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plan d'accès Blueportel | Côte d'Opale",
    description:
      "Toutes les options pour venir à Blueportel : voiture, train, bus, vélo et distances clés vers Le Portel.",
    images: [`${siteUrl}/logo.png`],
  },
  alternates: {
    canonical: `${siteUrl}/pages/plan`,
  },
  category: "Tourisme",
  classification: "Plan d'accès",
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

export default function PlanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


