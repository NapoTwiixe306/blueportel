import type { GuideDictionary } from "./types";
import { locales, type Locale } from "../locales";
import frGuideDictionary from "./fr";
import enGuideDictionary from "./en";
import nlGuideDictionary from "./nl";

const dictionaries: Record<Locale, GuideDictionary> = {
  fr: frGuideDictionary,
  en: enGuideDictionary,
  nl: nlGuideDictionary,
};

export function getGuideDictionary(locale: Locale): GuideDictionary {
  if (!locales.includes(locale)) {
    return frGuideDictionary;
  }
  return dictionaries[locale];
}

