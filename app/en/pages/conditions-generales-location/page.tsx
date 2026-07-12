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
    title: "General Rental Terms & Conditions | Blueportel",
    description:
      "General rental terms and conditions for the Blueportel Prestige and Blueportel Horizon accommodations in Le Portel (Opal Coast): booking, Swikly security deposit, self check-in, end-of-stay cleaning and liability.",
    keywords: [
      "Blueportel rental conditions",
      "mobile home rental terms Le Portel",
      "Swikly security deposit",
      "Opal Coast holiday rental conditions",
    ],
    authors: [{ name: "Blueportel" }],
    creator: "Blueportel",
    publisher: "Blueportel",
    openGraph: {
      title: "General Rental Terms & Conditions | Blueportel",
      description:
        "General rental terms and conditions for the Blueportel Prestige and Blueportel Horizon accommodations in Le Portel (Opal Coast).",
      type: "website",
      locale: "en_GB",
      url: `${siteUrl}/en/pages/conditions-generales-location`,
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
      title: "General Rental Terms & Conditions | Blueportel",
      description:
        "General rental terms and conditions for the Blueportel Prestige and Blueportel Horizon accommodations in Le Portel (Opal Coast).",
      images: [`${siteUrl}/logo.png`],
    },
    alternates: {
      canonical: `${siteUrl}/en/pages/conditions-generales-location`,
      languages: alternatesHreflang,
    },
    category: "Legal",
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
  const dictionary = await getCGLDictionary("en");
  return <LegalPage dictionary={dictionary} />;
}
