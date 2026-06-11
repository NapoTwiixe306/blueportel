import type { MetadataRoute } from "next";

import { locales, type Locale } from "../src/i18n/locales";
import { getArticles, getTranslations } from "../src/data/blog";
import { articleUrl, blogIndexUrl, localeOrigins } from "../src/data/blog/metadata";

const lastModified = new Date("2026-06-11");

const hreflangCodes: Record<Locale, string> = {
  fr: "fr-FR",
  en: "en-GB",
  nl: "nl-NL",
};

function pageUrl(locale: Locale, path: string): string {
  return `${localeOrigins[locale]}/${locale}${path}`;
}

/** Pages statiques présentes dans les trois locales (mêmes slugs). */
const staticPaths: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/pages/prestige", priority: 0.9 },
  { path: "/pages/horizon", priority: 0.9 },
  { path: "/pages/disponibilites", priority: 0.9 },
  { path: "/pages/reserver", priority: 0.7 },
  { path: "/pages/tarifs", priority: 0.8 },
  { path: "/pages/vue-densemble", priority: 0.8 },
  { path: "/pages/galerie-photo", priority: 0.6 },
  { path: "/pages/avis", priority: 0.7 },
  { path: "/pages/guide-touristique", priority: 0.7 },
  { path: "/pages/nausicaa-proche-le-portel", priority: 0.8 },
  { path: "/pages/FAQ", priority: 0.6 },
  { path: "/pages/contact", priority: 0.6 },
  { path: "/pages/plan", priority: 0.3 },
  { path: "/pages/information-marvilla-tohapi", priority: 0.4 },
  { path: "/pages/politique-tdm", priority: 0.2 },
];

function staticLanguages(path: string): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of locales) {
    languages[hreflangCodes[locale]] = pageUrl(locale, path);
  }
  languages["x-default"] = pageUrl("fr", path);
  return languages;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const { path, priority } of staticPaths) {
    for (const locale of locales) {
      entries.push({
        url: pageUrl(locale, path),
        lastModified,
        changeFrequency: "monthly",
        priority,
        alternates: { languages: staticLanguages(path) },
      });
    }
  }

  // Index du blog
  const blogLanguages: Record<string, string> = {};
  for (const locale of locales) {
    blogLanguages[hreflangCodes[locale]] = blogIndexUrl(locale);
  }
  blogLanguages["x-default"] = blogIndexUrl("fr");
  for (const locale of locales) {
    entries.push({
      url: blogIndexUrl(locale),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: { languages: blogLanguages },
    });
  }

  // Articles (éditoriaux + destinations PSEO) avec alternates hreflang
  for (const locale of locales) {
    for (const article of getArticles(locale)) {
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

      entries.push({
        url: articleUrl(locale, article.slug),
        lastModified: new Date(article.dateModified),
        changeFrequency: "monthly",
        priority: article.category === "destination" ? 0.6 : 0.7,
        alternates: { languages },
      });
    }
  }

  return entries;
}
