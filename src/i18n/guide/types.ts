import type { Metadata } from "next";
import type { Locale } from "../locales";

export type ActivityCard = {
  icon: "waves" | "coffee" | "fish" | "bike";
  title: string;
  description: string;
};

export type HighlightCard = {
  icon: "sun" | "compass" | "camera";
  title: string;
  description: string;
};

export type GuideDictionary = {
  locale: Locale;
  metadata: Metadata;
  structuredData: {
    guide: Record<string, unknown>;
    breadcrumb: Record<string, unknown>;
  };
  hero: {
    homeLabel: string;
    breadcrumbCurrent: string;
    pretitle: string;
    title: string;
    description: string;
  };
  intro: {
    title: string;
    paragraphs: string[];
    imageAlt: string;
  };
  activities: ActivityCard[];
  culture: {
    title: string;
    body: string;
  };
  food: {
    title: string;
    body: string;
  };
  highlights: HighlightCard[];
  cta: {
    title: string;
    description: string;
    primary: { label: string; href: string; rel?: string };
    secondary: { label: string; href: string };
  };
  screenReader: {
    title: string;
    paragraph: string;
  };
};

