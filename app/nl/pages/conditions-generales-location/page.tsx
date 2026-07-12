import { getCGLDictionary } from "../../../../src/i18n/legal/cgl";
import LegalPage from "../../../../src/components/legal/LegalPage";
import { locales } from "../../../../src/i18n/locales";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

export async function generateMetadata(): Promise<Metadata> {
  const alternatesHreflang = locales.reduce((acc, lang) => {
    acc[lang] = `${siteUrl}/${lang}/pages/conditions-generales-location`;
    return acc;
  }, {} as Record<string, string>);

  return {
    title: "Algemene Huurvoorwaarden | Blueportel",
    description:
      "Algemene huurvoorwaarden van de accommodaties Blueportel Prestige en Blueportel Horizon in Le Portel (Opaalkust): reservering, Swikly-waarborgsom, zelfstandige aankomst, eindschoonmaak en aansprakelijkheid.",
    keywords: [
      "Blueportel huurvoorwaarden",
      "stacaravan huren Le Portel voorwaarden",
      "Swikly waarborgsom",
      "vakantieverhuur Opaalkust voorwaarden",
    ],
    authors: [{ name: "Blueportel" }],
    creator: "Blueportel",
    publisher: "Blueportel",
    openGraph: {
      title: "Algemene Huurvoorwaarden | Blueportel",
      description:
        "Algemene huurvoorwaarden van de accommodaties Blueportel Prestige en Blueportel Horizon in Le Portel (Opaalkust).",
      type: "website",
      locale: "nl_NL",
      url: `${siteUrl}/nl/pages/conditions-generales-location`,
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
      title: "Algemene Huurvoorwaarden | Blueportel",
      description:
        "Algemene huurvoorwaarden van de accommodaties Blueportel Prestige en Blueportel Horizon in Le Portel (Opaalkust).",
      images: [`${siteUrl}/logo.png`],
    },
    alternates: {
      canonical: `${siteUrl}/nl/pages/conditions-generales-location`,
      languages: alternatesHreflang,
    },
    category: "Juridisch",
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
  const dictionary = await getCGLDictionary("nl");
  return <LegalPage dictionary={dictionary} />;
}
