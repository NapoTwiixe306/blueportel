import type { Metadata } from "next";
import type { Locale } from "../locales";

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

export type InfoCard = {
  icon: "camera" | "sparkles";
  title: string;
  description: string;
};

export type CTASection = {
  title: string;
  description: string;
  bookingLabel: string;
  bookingHref: string;
  bookingRel?: string;
  contactLabel: string;
  contactHref: string;
};

export type GalleryDictionary = {
  locale: Locale;
  metadata: Metadata;
  structuredData: {
    gallery: Record<string, unknown>;
    breadcrumb: Record<string, unknown>;
  };
  hero: {
    homeLabel: string;
    breadcrumbCurrent: string;
    title: string;
    highlight: string;
    description: string;
  };
  carouselImages: GalleryImage[];
  galleryImages: GalleryImage[];
  infoCards: InfoCard[];
  gridHeading: string;
  cta: CTASection;
  screenReader: {
    title: string;
    paragraphs: string[];
  };
};

