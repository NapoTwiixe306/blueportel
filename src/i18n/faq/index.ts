import type { FAQDictionary } from "./types";
import { locales, type Locale } from "../locales";
import frFAQDictionary from "./fr";
import enFAQDictionary from "./en";

const dictionaries: Record<Locale, FAQDictionary> = {
  fr: frFAQDictionary,
  en: enFAQDictionary,
};

export function getFAQDictionary(locale: Locale): FAQDictionary {
  if (!locales.includes(locale)) {
    return frFAQDictionary;
  }
  return dictionaries[locale];
}

