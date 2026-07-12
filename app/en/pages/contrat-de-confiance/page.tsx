import { getConfianceDictionary } from "../../../../src/i18n/legal/confiance";
import LegalPage from "../../../../src/components/legal/LegalPage";
import { locales } from "../../../../src/i18n/locales";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

export async function generateMetadata(): Promise<Metadata> {
  const alternatesHreflang = locales.reduce((acc, lang) => {
    acc[lang] = `${siteUrl}/${lang}/pages/contrat-de-confiance`;
    return acc;
  }, {} as Record<string, string>);

  return {
    title: "The Blueportel Trust Charter",
    description:
      "The Blueportel trust charter: our commitments to our travellers (careful preparation, self check-in, availability, transparency) and what we ask of them in return.",
    keywords: [
      "Blueportel trust charter",
      "Blueportel commitment",
      "holiday rental trust",
      "self check-in mobile home",
      "Swikly security deposit",
    ],
    authors: [{ name: "Blueportel" }],
    creator: "Blueportel",
    publisher: "Blueportel",
    openGraph: {
      title: "The Blueportel Trust Charter",
      description:
        "Our commitments to our travellers and what we ask of them in return, for a successful stay on the Opal Coast.",
      type: "website",
      locale: "en_GB",
      url: `${siteUrl}/en/pages/contrat-de-confiance`,
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
      title: "The Blueportel Trust Charter",
      description:
        "Our commitments to our travellers and what we ask of them in return, for a successful stay on the Opal Coast.",
      images: [`${siteUrl}/logo.png`],
    },
    alternates: {
      canonical: `${siteUrl}/en/pages/contrat-de-confiance`,
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
  const dictionary = await getConfianceDictionary("en");
  return <LegalPage dictionary={dictionary} />;
}
