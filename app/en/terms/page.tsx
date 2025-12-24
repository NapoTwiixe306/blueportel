import { getTDMDictionary } from "../../../src/i18n/tdm";
import TDMPage from "../../../src/components/tdm/TDMPage";
import { locales } from "../../../src/i18n/locales";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getTDMDictionary("en");
  const alternatesHreflang = locales.reduce((acc, lang) => {
    acc[lang] = `${siteUrl}/${lang}/politique-tdm`;
    return acc;
  }, {} as Record<string, string>);

  return {
    title: "TDM Policy - Text and Data Mining | Blueportel",
    description:
      "Blueportel's Text and Data Mining (TDM) Policy. Protection of content against unauthorized automated extraction. Compliance with Article L.122-5-3 of the French Intellectual Property Code.",
    keywords: [
      "TDM policy Blueportel",
      "text and data mining",
      "intellectual property policy",
      "content protection Blueportel",
      "data extraction policy",
      "Blueportel TDM",
      "TDM rights",
      "digital content policy",
    ],
    authors: [{ name: "Blueportel" }],
    creator: "Blueportel",
    publisher: "Blueportel",
    openGraph: {
      title: "TDM Policy - Text and Data Mining | Blueportel",
      description:
        "Blueportel's Text and Data Mining Policy. Protection of content against unauthorized automated extraction.",
      type: "website",
      locale: "en_US",
      url: `${siteUrl}/en/politique-tdm`,
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
      title: "TDM Policy - Text and Data Mining | Blueportel",
      description:
        "Blueportel's Text and Data Mining Policy. Protection of content against unauthorized automated extraction.",
      images: [`${siteUrl}/logo.png`],
    },
    alternates: {
      canonical: `${siteUrl}/en/politique-tdm`,
      languages: alternatesHreflang,
    },
    category: "Legal",
    classification: "Content Protection Policy",
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
  const dictionary = await getTDMDictionary("en");
  return <TDMPage dictionary={dictionary} />;
}

