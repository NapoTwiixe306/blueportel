import type { OverviewDictionary } from "./types";
import { locales, type Locale } from "../locales";
import frOverviewDictionary from "./fr";
import enOverviewDictionary from "./en";
import nlOverviewDictionary from "./nl";

const dictionaries: Record<Locale, OverviewDictionary> = {
  fr: frOverviewDictionary,
  en: enOverviewDictionary,
  nl: nlOverviewDictionary,
};

export function getOverviewDictionary(locale: Locale): OverviewDictionary {
  if (!locales.includes(locale)) {
    return frOverviewDictionary;
  }
  return dictionaries[locale];
}

