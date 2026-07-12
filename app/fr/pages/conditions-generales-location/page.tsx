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
    title: "Conditions Générales de Location | Blueportel",
    description:
      "Conditions générales de location des hébergements Blueportel Prestige et Blueportel Horizon au Portel (Côte d'Opale) : réservation, dépôt de garantie Swikly, arrivée autonome, ménage de fin de séjour et responsabilités.",
    keywords: [
      "conditions générales de location Blueportel",
      "CGL mobil-home Le Portel",
      "dépôt de garantie Swikly",
      "location vacances Côte d'Opale conditions",
      "règlement location mobil-home",
    ],
    authors: [{ name: "Blueportel" }],
    creator: "Blueportel",
    publisher: "Blueportel",
    openGraph: {
      title: "Conditions Générales de Location | Blueportel",
      description:
        "Conditions générales de location des hébergements Blueportel Prestige et Blueportel Horizon au Portel (Côte d'Opale).",
      type: "website",
      locale: "fr_FR",
      url: `${siteUrl}/fr/pages/conditions-generales-location`,
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
      title: "Conditions Générales de Location | Blueportel",
      description:
        "Conditions générales de location des hébergements Blueportel Prestige et Blueportel Horizon au Portel (Côte d'Opale).",
      images: [`${siteUrl}/logo.png`],
    },
    alternates: {
      canonical: `${siteUrl}/fr/pages/conditions-generales-location`,
      languages: alternatesHreflang,
    },
    category: "Légal",
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
  const dictionary = await getCGLDictionary("fr");
  return <LegalPage dictionary={dictionary} />;
}
