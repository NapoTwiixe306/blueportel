import type { Metadata } from "next";

import type { Locale } from "../../i18n/locales";

export const HREFLANG_CONFIG = {
  fr: {
    canonical: "https://blueportel.fr",
    languages: {
      "fr-FR": "https://blueportel.fr",
      "en-GB": "https://blueportel.com",
      "nl-NL": "https://blueportel.fr/nl",
      "x-default": "https://blueportel.fr",
    },
  },
  en: {
    canonical: "https://blueportel.com",
    languages: {
      "en-GB": "https://blueportel.com",
      "fr-FR": "https://blueportel.fr",
      "nl-NL": "https://blueportel.fr/nl",
      "x-default": "https://blueportel.fr",
    },
  },
  nl: {
    canonical: "https://blueportel.fr/nl",
    languages: {
      "nl-NL": "https://blueportel.fr/nl",
      "fr-FR": "https://blueportel.fr",
      "en-GB": "https://blueportel.com",
      "x-default": "https://blueportel.fr",
    },
  },
} as const satisfies Record<Locale, { canonical: string; languages: Record<string, string> }>;

export function getAlternates(locale: Locale): Metadata["alternates"] {
  const config = HREFLANG_CONFIG[locale];

  return {
    canonical: config.canonical,
    languages: config.languages,
  };
}

