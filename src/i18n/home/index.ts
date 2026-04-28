import type { HomeDictionary } from "./types";
import { locales, type Locale } from "../locales";
import frHomeDictionary from "./fr";
import enHomeDictionary from "./en";
import nlHomeDictionary from "./nl";

const dictionaries: Record<Locale, HomeDictionary> = {
  fr: frHomeDictionary,
  en: enHomeDictionary,
  nl: nlHomeDictionary,
};

export function getHomeDictionary(locale: Locale): HomeDictionary {
  if (!locales.includes(locale)) {
    return frHomeDictionary;
  }
  return dictionaries[locale];
}

