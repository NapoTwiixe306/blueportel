import { getTDMDictionary } from "../../../src/i18n/tdm";
import TDMPage from "../../../src/components/tdm/TDMPage";
import { locales } from "../../../src/i18n/locales";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getTDMDictionary("fr");
  const alternatesHreflang = locales.reduce((acc, lang) => {
    acc[lang] = `${siteUrl}/${lang}/politique-tdm`;
    return acc;
  }, {} as Record<string, string>);

  return {
    title: "Politique TDM - Text and Data Mining | Blueportel",
    description:
      "Politique relative au Text and Data Mining (TDM) de Blueportel. Protection des contenus contre l'extraction automatisée non autorisée. Conformité avec l'article L.122-5-3 du Code de la propriété intellectuelle.",
    keywords: [
      "politique TDM Blueportel",
      "text and data mining",
      "politique propriété intellectuelle",
      "protection contenus Blueportel",
      "politique extraction données",
      "TDM Blueportel",
      "droits TDM",
      "politique contenu numérique",
    ],
    authors: [{ name: "Blueportel" }],
    creator: "Blueportel",
    publisher: "Blueportel",
    openGraph: {
      title: "Politique TDM - Text and Data Mining | Blueportel",
      description:
        "Politique relative au Text and Data Mining de Blueportel. Protection des contenus contre l'extraction automatisée non autorisée.",
      type: "website",
      locale: "fr_FR",
      url: `${siteUrl}/fr/politique-tdm`,
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
      title: "Politique TDM - Text and Data Mining | Blueportel",
      description:
        "Politique relative au Text and Data Mining de Blueportel. Protection des contenus contre l'extraction automatisée.",
      images: [`${siteUrl}/logo.png`],
    },
    alternates: {
      canonical: `${siteUrl}/fr/politique-tdm`,
      languages: alternatesHreflang,
    },
    category: "Légal",
    classification: "Politique de protection des contenus",
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
  const dictionary = await getTDMDictionary("fr");
  return <TDMPage dictionary={dictionary} />;
}

