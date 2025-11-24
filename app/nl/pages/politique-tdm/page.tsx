import { getTDMDictionary } from "../../../../src/i18n/tdm";
import TDMPage from "../../../../src/components/tdm/TDMPage";
import { locales } from "../../../../src/i18n/locales";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getTDMDictionary("nl");
  const alternatesHreflang = locales.reduce((acc, lang) => {
    acc[lang] = `${siteUrl}/${lang}/pages/politique-tdm`;
    return acc;
  }, {} as Record<string, string>);

  return {
    title: "TDM Beleid - Text and Data Mining | Blueportel",
    description:
      "Blueportel's Text and Data Mining (TDM) Beleid. Bescherming van inhoud tegen niet-geautoriseerde geautomatiseerde extractie. Naleving van Artikel L.122-5-3 van de Franse Intellectuele Eigendoms Code.",
    keywords: [
      "TDM beleid Blueportel",
      "text and data mining",
      "intellectueel eigendoms beleid",
      "inhoud bescherming Blueportel",
      "gegevens extractie beleid",
      "Blueportel TDM",
      "TDM rechten",
      "digitale inhoud beleid",
    ],
    authors: [{ name: "Blueportel" }],
    creator: "Blueportel",
    publisher: "Blueportel",
    openGraph: {
      title: "TDM Beleid - Text and Data Mining | Blueportel",
      description:
        "Blueportel's Text and Data Mining Beleid. Bescherming van inhoud tegen niet-geautoriseerde geautomatiseerde extractie.",
      type: "website",
      locale: "nl_NL",
      url: `${siteUrl}/nl/pages/politique-tdm`,
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
      title: "TDM Beleid - Text and Data Mining | Blueportel",
      description:
        "Blueportel's Text and Data Mining Beleid. Bescherming van inhoud tegen niet-geautoriseerde geautomatiseerde extractie.",
      images: [`${siteUrl}/logo.png`],
    },
    alternates: {
      canonical: `${siteUrl}/nl/pages/politique-tdm`,
      languages: alternatesHreflang,
    },
    category: "Juridisch",
    classification: "Inhoud Bescherming Beleid",
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
  const dictionary = await getTDMDictionary("nl");
  return <TDMPage dictionary={dictionary} />;
}

