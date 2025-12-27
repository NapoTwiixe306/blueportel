import type { FAQDictionary } from "./types";
import { locales, type Locale } from "../locales";
import frFAQDictionary from "./fr";
import enFAQDictionary from "./en";
import nlFAQDictionary from "./nl";

const dictionaries: Record<Locale, FAQDictionary> = {
  fr: frFAQDictionary,
  en: enFAQDictionary,
  nl: nlFAQDictionary,
};

export function getFAQDictionary(locale: Locale): FAQDictionary {
  if (!locales.includes(locale)) {
    return frFAQDictionary;
  }
  return dictionaries[locale];
}

