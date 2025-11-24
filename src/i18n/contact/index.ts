import type { ContactDictionary } from "./types";
import { locales, type Locale } from "../locales";
import frContactDictionary from "./fr";
import enContactDictionary from "./en";
import nlContactDictionary from "./nl";

const dictionaries: Record<Locale, ContactDictionary> = {
  fr: frContactDictionary,
  en: enContactDictionary,
  nl: nlContactDictionary,
};

export function getContactDictionary(locale: Locale): ContactDictionary {
  if (!locales.includes(locale)) {
    return frContactDictionary;
  }
  return dictionaries[locale];
}

