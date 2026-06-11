import type { Locale } from "../../i18n/locales";
import { locales } from "../../i18n/locales";
import type { BlogArticle } from "./types";

import { frArticles } from "./articles/fr";
import { enArticles } from "./articles/en";
import { nlArticles } from "./articles/nl";
import { buildDestinationArticles } from "./destinationArticle";

const editorialArticles: Record<Locale, BlogArticle[]> = {
  fr: frArticles,
  en: enArticles,
  nl: nlArticles,
};

const articlesByLocale: Record<Locale, BlogArticle[]> = {
  fr: [...editorialArticles.fr, ...buildDestinationArticles("fr")],
  en: [...editorialArticles.en, ...buildDestinationArticles("en")],
  nl: [...editorialArticles.nl, ...buildDestinationArticles("nl")],
};

export function getArticles(locale: Locale): BlogArticle[] {
  return articlesByLocale[locale];
}

export function getArticleBySlug(locale: Locale, slug: string): BlogArticle | undefined {
  return articlesByLocale[locale].find((article) => article.slug === slug);
}

/** Slugs équivalents dans les autres locales, pour les alternates hreflang. */
export function getTranslations(
  translationKey: string
): Partial<Record<Locale, BlogArticle>> {
  const result: Partial<Record<Locale, BlogArticle>> = {};
  for (const locale of locales) {
    const match = articlesByLocale[locale].find(
      (article) => article.translationKey === translationKey
    );
    if (match) result[locale] = match;
  }
  return result;
}

export function getRelatedArticles(article: BlogArticle): BlogArticle[] {
  return article.relatedSlugs
    .map((slug) => getArticleBySlug(article.locale, slug))
    .filter((related): related is BlogArticle => Boolean(related));
}
