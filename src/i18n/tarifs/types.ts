import type { Metadata } from "next";
import type { Locale } from "../locales";

export type SeasonCard = {
  name: string;
  period: string;
  priceEUR: {
    min: number;
    max?: number;
  };
  minStay: string;
  perks: string[];
};

export type InfoBlock = {
  icon: "deposit" | "caution" | "schedule" | "included";
  title: string;
  items: string[];
};

export type CTAButtons = {
  primary: { label: string; href: string; rel?: string };
  secondary: { label: string; href: string };
};

export type ScreenReaderBlock = {
  title: string;
  content: string[];
};

export type TarifsDictionary = {
  locale: Locale;
  metadata: Metadata;
  structuredData: {
    breadcrumb: Record<string, unknown>;
  };
  hero: {
    breadcrumbCurrent: string;
    homeLabel: string;
    pretitle: string;
    title: string;
    description: string;
  };
  seasons: SeasonCard[];
  infoBlocks: InfoBlock[];
  cta: {
    title: string;
    description: string;
    buttons: CTAButtons;
  };
  screenReader: ScreenReaderBlock;
};

