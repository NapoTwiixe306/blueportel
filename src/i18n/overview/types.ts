import type { Metadata } from "next";
import type { Locale } from "../locales";

export type HighlightIcon = "beds" | "bath" | "terrace" | "kitchen";

export type HighlightCard = {
  icon: HighlightIcon;
  title: string;
  description: string;
};

export type EquipmentBlock = {
  title: string;
  items: string[];
};

export type BulletList = {
  title: string;
  items: string[];
};

export type CTAButtons = {
  primary: { label: string; href: string; rel?: string };
  secondary: { label: string; href: string };
};

export type SEOSection = {
  title: string;
  content: string;
};

export type OverviewDictionary = {
  locale: Locale;
  metadata: Metadata;
  structuredData: {
    equipment: Record<string, unknown>;
    breadcrumb: Record<string, unknown>;
    lodgingBusiness?: Record<string, unknown>;
    product?: Record<string, unknown>;
    faq?: Record<string, unknown>;
  };
  hero: {
    homeLabel: string;
    breadcrumbCurrent: string;
    pretitle: string;
    title: string;
    description: string;
  };
  stayCard: {
    title: string;
    description: string;
    bullets: string[];
    cta: CTAButtons;
  };
  heroImageAlt: string;
  interior: BulletList;
  exterior: BulletList;
  highlights: HighlightCard[];
  equipment: EquipmentBlock[];
  location: { title: string; description: string };
  policies: BulletList;
  cta: {
    title: string;
    description: string;
    buttons: CTAButtons;
  };
  seoContent?: SEOSection[];
  screenReader: {
    title: string;
    paragraphs: string[];
  };
};

