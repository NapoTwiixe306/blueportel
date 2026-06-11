import type { Metadata } from "next";

import type { Locale } from "../../i18n/locales";
import { blogIndexCopy } from "./copy";
import { getArticleBySlug, getTranslations } from "./index";

/**
 * Domaines par locale : blueportel.fr sert le fr et le nl,
 * blueportel.com sert l'en (cf. middleware.ts).
 */
export const localeOrigins: Record<Locale, string> = {
  fr: "https://blueportel.fr",
  en: "https://blueportel.com",
  nl: "https://blueportel.fr",
};

const hreflangCodes: Record<Locale, string> = {
  fr: "fr-FR",
  en: "en-GB",
  nl: "nl-NL",
};

export function blogIndexUrl(locale: Locale): string {
  return `${localeOrigins[locale]}/${locale}/blog`;
}

export function articleUrl(locale: Locale, slug: string): string {
  return `${localeOrigins[locale]}/${locale}/blog/${slug}`;
}

export function buildBlogIndexMetadata(locale: Locale): Metadata {
  const copy = blogIndexCopy[locale];
  const url = blogIndexUrl(locale);

  const languages: Record<string, string> = {};
  (Object.keys(hreflangCodes) as Locale[]).forEach((loc) => {
    languages[hreflangCodes[loc]] = blogIndexUrl(loc);
  });
  languages["x-default"] = blogIndexUrl("fr");

  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      title: copy.metaTitle,
      description: copy.metaDescription,
      type: "website",
      url,
      siteName: "Blueportel",
      locale: hreflangCodes[locale].replace("-", "_"),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function buildArticleMetadata(locale: Locale, slug: string): Metadata {
  const article = getArticleBySlug(locale, slug);
  if (!article) return {};

  const url = articleUrl(locale, slug);
  const translations = getTranslations(article.translationKey);

  const languages: Record<string, string> = {};
  (Object.keys(translations) as Locale[]).forEach((loc) => {
    const translated = translations[loc];
    if (translated) {
      languages[hreflangCodes[loc]] = articleUrl(loc, translated.slug);
    }
  });
  if (translations.fr) {
    languages["x-default"] = articleUrl("fr", translations.fr.slug);
  }

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.keywords,
    authors: [{ name: "Blueportel" }],
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      type: "article",
      url,
      siteName: "Blueportel",
      locale: hreflangCodes[locale].replace("-", "_"),
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
      images: [
        {
          url: `${localeOrigins[locale]}${article.heroImage.src}`,
          width: 1200,
          height: 630,
          alt: article.heroImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
    },
    other: {
      "geo.region": "FR-62",
      "geo.placename": "Le Portel",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
