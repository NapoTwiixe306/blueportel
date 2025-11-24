import type { Metadata } from "next";
import type { Locale } from "../locales";

export type ReviewItem = {
  name: string;
  date: string;
  rating: number;
  text: string;
};

export type StatItem = {
  label: string;
  value: string;
};

export type ReasonItem = {
  icon: "heart" | "smile" | "users" | "map";
  text: string;
};

export type ShareLink = {
  label: string;
  href: string;
  type: "email" | "facebook" | "airbnb";
};

export type AvisDictionary = {
  locale: Locale;
  metadata: Metadata;
  structuredData: {
    schema: Record<string, unknown>;
    breadcrumb: Record<string, unknown>;
  };
  hero: {
    homeLabel: string;
    breadcrumbCurrent: string;
    pretitle: string;
    title: string;
    description: string;
  };
  stats: StatItem[];
  reviews: ReviewItem[];
  reasons: {
    title: string;
    items: ReasonItem[];
  };
  share: {
    title: string;
    description: string;
    links: ShareLink[];
  };
  cta: {
    title: string;
    description: string;
    phoneLabel: string;
    phoneHref: string;
    emailLabel: string;
    emailHref: string;
    bookingLabel: string;
    bookingHref: string;
  };
  screenReader: {
    title: string;
    paragraph: string;
  };
};

