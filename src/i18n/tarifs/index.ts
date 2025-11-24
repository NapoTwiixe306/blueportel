import type { TarifsDictionary } from "./types";
import { locales, type Locale } from "../locales";
import frTarifsDictionary from "./fr";
import enTarifsDictionary from "./en";
import nlTarifsDictionary from "./nl";

const dictionaries: Record<Locale, TarifsDictionary> = {
  fr: frTarifsDictionary,
  en: enTarifsDictionary,
  nl: nlTarifsDictionary,
};

export function getTarifsDictionary(locale: Locale): TarifsDictionary {
  if (!locales.includes(locale)) {
    return frTarifsDictionary;
  }
  return dictionaries[locale];
}

