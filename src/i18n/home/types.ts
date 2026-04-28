import type { Metadata } from "next";

import type { Locale } from "../locales";

export type FeatureIcon = "home" | "waves" | "map" | "star";

export type FeatureCard = {
  icon: FeatureIcon;
  title: string;
  description: string;
};

export type StructuredData = {
  localBusiness: Record<string, unknown>;
  accommodation: Record<string, unknown>;
  organization: Record<string, unknown>;
  website: Record<string, unknown>;
  breadcrumb: Record<string, unknown>;
};

export type HeroSection = {
  breadcrumbCurrent: string;
  pretitle: string;
  titleLine1: string;
  titleLine2Prefix: string;
  titleLine2Highlight: string;
  tagline: string;
  srDescription: string;
  ctaPrimary: { label: string; href: string; rel?: string };
  ctaSecondary: { label: string; href: string };
};

export type LocationSlide = {
  src: string;
  alt: string;
  caption: string;
};

export type LocationSection = {
  title: string;
  highlight: string;
  subtitle: string;
  intro: string[];
  comfortParagraph: string[];
  interiorTitle: string;
  interiorParagraph: string;
  interiorList: string[];
  exteriorTitle: string;
  exteriorParagraph: string;
  exteriorList: string[];
  carouselImages: LocationSlide[];
  imageAlt: string;
};

export type CTASection = {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  buttonRel?: string;
};

export type ScreenReaderBlock = {
  heading: string;
  paragraphs: string[];
  listTitle: string;
  listItems: string[];
};


export type HomeDictionary = {
  locale: Locale;
  metadata: Metadata;
  structuredData: StructuredData;
  hero: HeroSection;
  features: {
    cards: FeatureCard[];
    srTitle: string;
  };
  location: LocationSection;
  cta: CTASection;
  screenReader: ScreenReaderBlock;
};

