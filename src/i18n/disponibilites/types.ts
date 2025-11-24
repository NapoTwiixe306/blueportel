import type { Metadata } from "next";
import type { Locale } from "../locales";

export type CalendarStatus = "available" | "booked" | "checkin" | "checkout" | "unknown";

export type LegendItem = {
  status: CalendarStatus;
  label: string;
};

export type ContactLink = {
  label: string;
  href: string;
};

export type AvailabilityDictionary = {
  locale: Locale;
  metadata: Metadata;
  structuredData: {
    breadcrumb: Record<string, unknown>;
  };
  hero: {
    homeLabel: string;
    breadcrumbCurrent: string;
    pretitle: string;
    title: string;
    description: string;
  };
  loadingText: string;
  error: {
    title: string;
    description: string;
    contactCTA: ContactLink[];
  };
  emptyMessage: string;
  statusLabels: Record<CalendarStatus, string>;
  legend: LegendItem[];
  tableAriaLabel: string;
  cta: {
    title: string;
    description: string;
    primary: ContactLink;
    secondary: ContactLink;
  };
  info: string[];
  screenReader: {
    title: string;
    paragraphs: string[];
  };
};

