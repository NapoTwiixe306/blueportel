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
    title: "Het Blueportel Vertrouwenscontract",
    description:
      "Het vertrouwenscontract van Blueportel: onze beloften aan onze reizigers (zorgvuldige voorbereiding, zelfstandige aankomst, beschikbaarheid, transparantie) en wat wij in ruil daarvoor vragen.",
    keywords: [
      "Blueportel vertrouwenscontract",
      "Blueportel belofte",
      "vakantieverhuur vertrouwen",
      "zelfstandige aankomst stacaravan",
      "Swikly waarborgsom",
    ],
    authors: [{ name: "Blueportel" }],
    creator: "Blueportel",
    publisher: "Blueportel",
    openGraph: {
      title: "Het Blueportel Vertrouwenscontract",
      description:
        "Onze beloften aan onze reizigers en wat wij in ruil daarvoor vragen, voor een geslaagd verblijf aan de Opaalkust.",
      type: "website",
      locale: "nl_NL",
      url: `${siteUrl}/nl/pages/contrat-de-confiance`,
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
      title: "Het Blueportel Vertrouwenscontract",
      description:
        "Onze beloften aan onze reizigers en wat wij in ruil daarvoor vragen, voor een geslaagd verblijf aan de Opaalkust.",
      images: [`${siteUrl}/logo.png`],
    },
    alternates: {
      canonical: `${siteUrl}/nl/pages/contrat-de-confiance`,
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
  const dictionary = await getConfianceDictionary("nl");
  return <LegalPage dictionary={dictionary} />;
}
