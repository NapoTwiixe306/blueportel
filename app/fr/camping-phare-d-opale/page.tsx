import { getMarvillaDictionary } from "../../../src/i18n/marvilla";
import MarvillaPage from "../../../src/components/marvilla/MarvillaPage";
import { locales } from "../../../src/i18n/locales";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getMarvillaDictionary("fr");
  const alternatesHreflang = locales.reduce((acc, lang) => {
    acc[lang] = `${siteUrl}/${lang}/camping-phare-d-opale`;
    return acc;
  }, {} as Record<string, string>);

  return {
    title: "Information Marvilla Tohapi - Blueportel | Location Mobil-Home Le Portel",
    description:
      "Information importante : Blueportel est une location indépendante au camping Le Phare d'Opale - Marvilla Tohapi à Le Portel, Côte d'Opale. Mobil-home premium avec vue mer directe.",
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
      description:
        "Blueportel est une location indépendante au camping Le Phare d'Opale - Marvilla Tohapi à Le Portel. Mobil-home premium avec vue mer directe.",
      type: "website",
      locale: "fr_FR",
      url: `${siteUrl}/fr/camping-phare-d-opale`,
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
      title: "Information Marvilla Tohapi - Blueportel",
      description:
        "Blueportel est une location indépendante au camping Le Phare d'Opale - Marvilla Tohapi à Le Portel.",
      images: [`${siteUrl}/location-mobil-home-le-portel-logo.png`],
    },
    alternates: {
      canonical: `${siteUrl}/fr/camping-phare-d-opale`,
      languages: alternatesHreflang,
    },
    category: "Information",
    classification: "Information légale",
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
}

export default async function Page() {
  const dictionary = await getMarvillaDictionary("fr");
  return <MarvillaPage dictionary={dictionary} />;
}

