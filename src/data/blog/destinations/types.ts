import type { Locale } from "../../../i18n/locales";
import type { ArticleFaqItem, ArticleImageBlock, ArticleSection } from "../types";

/** Contenu localisé d'une page destination PSEO. */
export type DestinationContent = {
  /** Nom affiché de la destination (ex. « Wimereux ») */
  name: string;
  /** Slug localisé complet (ex. « location-mobil-home-proche-wimereux ») */
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  title: string;
  excerpt: string;
  /** Paragraphes d'introduction propres à la destination */
  intro: string[];
  /** Sections uniques décrivant la destination */
  sections: ArticleSection[];
  /** Questions fréquentes propres à la destination */
  faq: ArticleFaqItem[];
};

export type Destination = {
  /** Clé stable inter-locales (sert de translationKey) */
  key: string;
  distanceKm: number;
  driveMinutes: number;
  heroImage: ArticleImageBlock;
  /** Clés des destinations liées (maillage interne) */
  relatedKeys: string[];
  content: Record<Locale, DestinationContent>;
};
