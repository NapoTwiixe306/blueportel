import type { AvisDictionary } from "./types";
import { locales, type Locale } from "../locales";
import frAvisDictionary from "./fr";
import enAvisDictionary from "./en";

const dictionaries: Record<Locale, AvisDictionary> = {
  fr: frAvisDictionary,
  en: enAvisDictionary,
};

export function getAvisDictionary(locale: Locale): AvisDictionary {
  if (!locales.includes(locale)) {
    return frAvisDictionary;
  }
  return dictionaries[locale];
}

