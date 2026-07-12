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
    title: "Le Contrat de Confiance Blueportel",
    description:
      "Le contrat de confiance Blueportel : nos engagements envers nos voyageurs (préparation soignée, arrivée autonome, disponibilité, transparence) et ce que nous leur demandons en retour.",
    keywords: [
      "contrat de confiance Blueportel",
      "engagement Blueportel",
      "location vacances confiance",
      "arrivée autonome mobil-home",
      "dépôt de garantie Swikly",
    ],
    authors: [{ name: "Blueportel" }],
    creator: "Blueportel",
    publisher: "Blueportel",
    openGraph: {
      title: "Le Contrat de Confiance Blueportel",
      description:
        "Nos engagements envers nos voyageurs et ce que nous leur demandons en retour, pour un séjour réussi sur la Côte d'Opale.",
      type: "website",
      locale: "fr_FR",
      url: `${siteUrl}/fr/pages/contrat-de-confiance`,
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
      title: "Le Contrat de Confiance Blueportel",
      description:
        "Nos engagements envers nos voyageurs et ce que nous leur demandons en retour, pour un séjour réussi sur la Côte d'Opale.",
      images: [`${siteUrl}/logo.png`],
    },
    alternates: {
      canonical: `${siteUrl}/fr/pages/contrat-de-confiance`,
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
  const dictionary = await getConfianceDictionary("fr");
  return <LegalPage dictionary={dictionary} />;
}
