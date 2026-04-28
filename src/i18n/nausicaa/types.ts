import type { Metadata } from "next";
import type { Locale } from "../locales";

export type BenefitIcon = "home" | "waves" | "map";
export type AccessIcon = "car" | "bus" | "walk";
export type InfoIcon = "clock" | "star" | "map";
export type ContactIcon = "phone" | "mail";

export type BenefitCard = {
  icon: BenefitIcon;
  title: string;
  description: string;
};

export type AccessCard = {
  icon: AccessIcon;
  title: string;
  description: string;
};

export type InfoItem = {
  icon: InfoIcon;
  title: string;
  description: string;
};

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export type CTAButtons = {
  primary: { label: string; href: string; rel?: string };
  secondary: { label: string; href: string };
};

export type ContactButton = {
  icon: ContactIcon;
  label: string;
  href: string;
};

export type NausicaaDictionary = {
  locale: Locale;
  metadata: Metadata;
  hero: {
    homeLabel: string;
    breadcrumbCurrent: string;
    title: string;
    highlight: string;
    subtitle: string;
    srTitle: string;
    srParagraphs: string[];
  };
  structuredData: {
    faq: Record<string, unknown>;
    breadcrumb: Record<string, unknown>;
    organization: Record<string, unknown>;
    attraction: Record<string, unknown>;
  };
  intro: string;
  benefitsTitle: string;
  benefits: BenefitCard[];
  accessTitle: string;
  accessCards: AccessCard[];
  infoTitle: string;
  infoItems: InfoItem[];
  faqTitle: string;
  faqItems: FAQItem[];
  cta: {
    title: string;
    description: string;
    buttons: CTAButtons;
  };
  contact: {
    title: string;
    description: string;
    buttons: ContactButton[];
  };
};

