import type { Metadata } from "next";
import type { Locale } from "../locales";
import type { WhyItem } from "../../components/home/WhyBluePortel";
import type { Testimonial } from "../../components/home/Testimonials";
import type { FAQItem } from "../../components/home/HomeFAQ";

export type HeroSection = {
  title: string;
  subtitle: string;
  badge: string;
  ratingText: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  statsItems: { label: string; value: string }[];
};

export type ChooseSection = {
  pretitle: string;
  title: string;
  subtitle: string;
  ctaPrestige: string;
  ctaHorizon: string;
};

export type ComparisonSection = {
  title: string;
  subtitle: string;
  ctaPrestige: string;
  ctaHorizon: string;
};

export type AccommodationSectionLabels = {
  capacity: string;
  bedrooms: string;
  discover: string;
  book: string;
  comingSoon: string;
  equipment: string;
  included: string;
  notIncluded: string;
};

export type AccommodationPageSection = {
  sectionLabels: AccommodationSectionLabels;
};

export type WhySection = {
  title: string;
  subtitle: string;
  items: WhyItem[];
};

export type TestimonialsSection = {
  title: string;
  subtitle: string;
  stats: { label: string; value: string }[];
  reviews: Testimonial[];
};

export type FAQSection = {
  title: string;
  subtitle: string;
  items: FAQItem[];
};

export type FinalCTASection = {
  title: string;
  subtitle: string;
  ctaPrestige: { label: string; href: string };
  ctaHorizon: { label: string; href: string };
};

export type StructuredData = {
  localBusiness: Record<string, unknown>;
  accommodation: Record<string, unknown>;
  organization: Record<string, unknown>;
  website: Record<string, unknown>;
  breadcrumb: Record<string, unknown>;
};

export type HomeDictionary = {
  locale: Locale;
  metadata: Metadata;
  structuredData: StructuredData;
  hero: HeroSection;
  choose: ChooseSection;
  comparison: ComparisonSection;
  prestige: AccommodationPageSection;
  horizon: AccommodationPageSection;
  why: WhySection;
  testimonials: TestimonialsSection;
  faq: FAQSection;
  finalCta: FinalCTASection;
};
