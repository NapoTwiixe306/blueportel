import { getMarvillaDictionary } from "../../../../src/i18n/marvilla";
import MarvillaPage from "../../../../src/components/marvilla/MarvillaPage";
import { locales } from "../../../../src/i18n/locales";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getMarvillaDictionary("en");
  const alternatesHreflang = locales.reduce((acc, lang) => {
    acc[lang] = `${siteUrl}/${lang}/pages/information-marvilla-tohapi`;
    return acc;
  }, {} as Record<string, string>);

  return {
    title: "Marvilla Tohapi Information - Blueportel | Mobile Home Rental Le Portel",
    description:
      "Important information: Blueportel is an independent rental at Le Phare d'Opale - Marvilla Tohapi campsite in Le Portel, Opal Coast. Premium mobile home with direct sea view.",
    keywords: [
      "Marvilla Tohapi",
      "Le Phare d'Opale campsite",
      "Blueportel independent rental",
      "mobile home Le Portel",
      "mobile home rental Opal Coast",
      "premium mobile home sea view",
      "Marvilla Tohapi campsite Le Portel",
      "independent mobile home rental",
    ],
    authors: [{ name: "Blueportel" }],
    creator: "Blueportel",
    publisher: "Blueportel",
    openGraph: {
      title: "Marvilla Tohapi Information - Blueportel",
      description:
        "Blueportel is an independent rental at Le Phare d'Opale - Marvilla Tohapi campsite in Le Portel. Premium mobile home with direct sea view.",
      type: "website",
      locale: "en_US",
      url: `${siteUrl}/en/pages/information-marvilla-tohapi`,
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
      title: "Marvilla Tohapi Information - Blueportel",
      description:
        "Blueportel is an independent rental at Le Phare d'Opale - Marvilla Tohapi campsite in Le Portel.",
      images: [`${siteUrl}/logo.png`],
    },
    alternates: {
      canonical: `${siteUrl}/en/pages/information-marvilla-tohapi`,
      languages: alternatesHreflang,
    },
    category: "Information",
    classification: "Legal Information",
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
  const dictionary = await getMarvillaDictionary("en");
  return <MarvillaPage dictionary={dictionary} />;
}

