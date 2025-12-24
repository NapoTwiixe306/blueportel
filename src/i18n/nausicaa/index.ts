import type { NausicaaDictionary } from "./types";
import { locales, type Locale } from "../locales";
import frNausicaaDictionary from "./fr";
import enNausicaaDictionary from "./en";

const dictionaries: Record<Locale, NausicaaDictionary> = {
  fr: frNausicaaDictionary,
  en: enNausicaaDictionary,
};

export function getNausicaaDictionary(locale: Locale): NausicaaDictionary {
  if (!locales.includes(locale)) {
    return frNausicaaDictionary;
  }
  return dictionaries[locale];
}

