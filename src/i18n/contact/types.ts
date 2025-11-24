import type { Metadata } from "next";
import type { Locale } from "../locales";

export type ContactMethod = {
  icon: "email" | "phone" | "site";
  label: string;
  href: string;
};

export type CountryOption = {
  value: string;
  label: string;
};

export type ContactDictionary = {
  locale: Locale;
  metadata: Metadata;
  structuredData: {
    breadcrumb: Record<string, unknown>;
    person: Record<string, unknown>;
    contact: Record<string, unknown>;
  };
  hero: {
    homeLabel: string;
    breadcrumbCurrent: string;
    title: string;
    subtitle: string;
    srTitle: string;
    srParagraphs: string[];
  };
  hostBlock: {
    title: string;
    name: string;
    paragraphs: string[];
    quote: string;
    methods: ContactMethod[];
  };
  form: {
    title: string;
    description: string;
    fields: {
      email: { label: string; placeholder: string };
      firstName: { label: string; placeholder: string };
      lastName: { label: string; placeholder: string };
      guests: { label: string; placeholder: string };
      phone: { label: string; placeholder: string };
      country: { label: string; options: CountryOption[] };
      arrival: { label: string };
      departure: { label: string };
      comment: { label: string; placeholder: string };
    };
    privacy: string;
    recaptcha: string;
    submitLabel: string;
    disabledHint: string;
  };
  bookingCta: {
    title: string;
    description: string;
    buttonLabel: string;
    href: string;
  };
  screenReader: {
    title: string;
    paragraphs: string[];
  };
};

