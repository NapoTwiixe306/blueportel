import type { ContactDictionary } from "./types";
import { locales, type Locale } from "../locales";
import frContactDictionary from "./fr";
import enContactDictionary from "./en";

const dictionaries: Record<Locale, ContactDictionary> = {
  fr: frContactDictionary,
  en: enContactDictionary,
};

export function getContactDictionary(locale: Locale): ContactDictionary {
  if (!locales.includes(locale)) {
    return frContactDictionary;
  }
  return dictionaries[locale];
}

