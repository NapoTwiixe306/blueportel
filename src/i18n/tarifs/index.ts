import type { TarifsDictionary } from "./types";
import { locales, type Locale } from "../locales";
import frTarifsDictionary from "./fr";
import enTarifsDictionary from "./en";

const dictionaries: Record<Locale, TarifsDictionary> = {
  fr: frTarifsDictionary,
  en: enTarifsDictionary,
};

export function getTarifsDictionary(locale: Locale): TarifsDictionary {
  if (!locales.includes(locale)) {
    return frTarifsDictionary;
  }
  return dictionaries[locale];
}

