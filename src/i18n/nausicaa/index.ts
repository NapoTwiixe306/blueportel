import type { NausicaaDictionary } from "./types";
import { locales, type Locale } from "../locales";
import frNausicaaDictionary from "./fr";
import enNausicaaDictionary from "./en";
import nlNausicaaDictionary from "./nl";

const dictionaries: Record<Locale, NausicaaDictionary> = {
  fr: frNausicaaDictionary,
  en: enNausicaaDictionary,
  nl: nlNausicaaDictionary,
};

export function getNausicaaDictionary(locale: Locale): NausicaaDictionary {
  if (!locales.includes(locale)) {
    return frNausicaaDictionary;
  }
  return dictionaries[locale];
}

