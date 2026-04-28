import type { Metadata } from "next";
import type { Locale } from "../locales";

export type FAQEntry = {
  id: string;
  question: string;
  answer: string;
};

export type FAQDictionary = {
  locale: Locale;
  metadata: Metadata;
  structuredData: {
    faq: Record<string, unknown>;
    breadcrumb: Record<string, unknown>;
  };
  hero: {
    homeLabel: string;
    breadcrumbCurrent: string;
    title: string;
    subtitle: string;
    srTitle: string;
    srParagraphs: string[];
  };
  faqItems: FAQEntry[];
  contactBlock: {
    title: string;
    description: string;
    phoneLabel: string;
    phoneHref: string;
    emailLabel: string;
    emailHref: string;
  };
};

