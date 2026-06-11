import type { Locale } from "../../i18n/locales";

export type ArticleCategory =
  | "guide"
  | "destination"
  | "plages"
  | "famille"
  | "hebergement";

export type ArticleListBlock = {
  ordered?: boolean;
  items: string[];
};

export type ArticleTableBlock = {
  caption?: string;
  headers: string[];
  rows: string[][];
};

export type ArticleCalloutBlock = {
  title: string;
  text: string;
};

export type ArticleImageBlock = {
  src: string;
  alt: string;
  caption?: string;
};

/**
 * Une section H2 d'article. Les sous-sections deviennent des H3.
 * Les paragraphes acceptent un markdown inline minimal : **gras** et [lien](href).
 */
export type ArticleSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  list?: ArticleListBlock;
  table?: ArticleTableBlock;
  callout?: ArticleCalloutBlock;
  image?: ArticleImageBlock;
  subsections?: ArticleSection[];
};

export type ArticleFaqItem = {
  question: string;
  answer: string;
};

export type BlogArticle = {
  slug: string;
  /** Identifiant commun aux traductions d'un même article (hreflang) */
  translationKey: string;
  locale: Locale;
  category: ArticleCategory;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  /** H1 de la page */
  title: string;
  /** Accroche affichée sous le H1 et sur la carte de l'index */
  excerpt: string;
  heroImage: ArticleImageBlock;
  datePublished: string;
  dateModified: string;
  readingTimeMinutes: number;
  /** Premiers paragraphes (réponse directe à l'intention de recherche) */
  intro: string[];
  sections: ArticleSection[];
  faq: ArticleFaqItem[];
  /** Slugs d'articles liés pour le maillage interne */
  relatedSlugs: string[];
};

export type BlogIndexCopy = {
  metaTitle: string;
  metaDescription: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  pretitle: string;
  title: string;
  description: string;
  categoriesLabel: Record<ArticleCategory, string>;
  readingTimeLabel: string;
  readMoreLabel: string;
  updatedLabel: string;
};

export type BlogArticleCopy = {
  breadcrumbHome: string;
  breadcrumbBlog: string;
  tocTitle: string;
  faqTitle: string;
  relatedTitle: string;
  updatedLabel: string;
  publishedLabel: string;
  readingTimeLabel: string;
  ctaTitle: string;
  ctaText: string;
  ctaAvailability: string;
  ctaContact: string;
  ctaPrestige: string;
  ctaHorizon: string;
  authorLabel: string;
};
