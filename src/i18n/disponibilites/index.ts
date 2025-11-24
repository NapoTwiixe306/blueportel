import type { AvailabilityDictionary } from "./types";
import { locales, type Locale } from "../locales";
import frAvailabilityDictionary from "./fr";
import enAvailabilityDictionary from "./en";
import nlAvailabilityDictionary from "./nl";

const dictionaries: Record<Locale, AvailabilityDictionary> = {
  fr: frAvailabilityDictionary,
  en: enAvailabilityDictionary,
  nl: nlAvailabilityDictionary,
};

export function getAvailabilityDictionary(locale: Locale): AvailabilityDictionary {
  if (!locales.includes(locale)) {
    return frAvailabilityDictionary;
  }
  return dictionaries[locale];
}

