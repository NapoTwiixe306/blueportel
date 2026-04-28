import { getMarvillaDictionary } from "../../../../src/i18n/marvilla";
import MarvillaPage from "../../../../src/components/marvilla/MarvillaPage";
import { locales } from "../../../../src/i18n/locales";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getMarvillaDictionary("nl");
  const alternatesHreflang = locales.reduce((acc, lang) => {
    acc[lang] = `${siteUrl}/${lang}/pages/information-marvilla-tohapi`;
    return acc;
  }, {} as Record<string, string>);

  return {
    title: "Marvilla Tohapi Informatie - Blueportel | Mobilhome Verhuur Le Portel",
    description:
      "Belangrijke informatie: Blueportel is een onafhankelijke verhuur op Le Phare d'Opale - Marvilla Tohapi camping in Le Portel, Opaalkust. Premium mobilhome met direct zicht op zee.",
    keywords: [
      "Marvilla Tohapi",
      "Le Phare d'Opale camping",
      "Blueportel onafhankelijke verhuur",
      "mobilhome Le Portel",
      "mobilhome verhuur Opaalkust",
      "premium mobilhome zeezicht",
      "Marvilla Tohapi camping Le Portel",
      "onafhankelijke mobilhome verhuur",
    ],
    authors: [{ name: "Blueportel" }],
    creator: "Blueportel",
    publisher: "Blueportel",
    openGraph: {
      title: "Marvilla Tohapi Informatie - Blueportel",
      description:
        "Blueportel is een onafhankelijke verhuur op Le Phare d'Opale - Marvilla Tohapi camping in Le Portel. Premium mobilhome met direct zicht op zee.",
      type: "website",
      locale: "nl_NL",
      url: `${siteUrl}/nl/pages/information-marvilla-tohapi`,
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
      title: "Marvilla Tohapi Informatie - Blueportel",
      description:
        "Blueportel is een onafhankelijke verhuur op Le Phare d'Opale - Marvilla Tohapi camping in Le Portel.",
      images: [`${siteUrl}/logo.png`],
    },
    alternates: {
      canonical: `${siteUrl}/nl/pages/information-marvilla-tohapi`,
      languages: alternatesHreflang,
    },
    category: "Informatie",
    classification: "Juridische informatie",
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
  const dictionary = await getMarvillaDictionary("nl");
  return <MarvillaPage dictionary={dictionary} />;
}

