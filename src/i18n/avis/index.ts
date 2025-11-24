import type { AvisDictionary } from "./types";
import { locales, type Locale } from "../locales";
import frAvisDictionary from "./fr";
import enAvisDictionary from "./en";
import nlAvisDictionary from "./nl";

const dictionaries: Record<Locale, AvisDictionary> = {
  fr: frAvisDictionary,
  en: enAvisDictionary,
  nl: nlAvisDictionary,
};

export function getAvisDictionary(locale: Locale): AvisDictionary {
  if (!locales.includes(locale)) {
    return frAvisDictionary;
  }
  return dictionaries[locale];
}

