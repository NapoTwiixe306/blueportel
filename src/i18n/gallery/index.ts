import type { GalleryDictionary } from "./types";
import { locales, type Locale } from "../locales";
import frGalleryDictionary from "./fr";
import enGalleryDictionary from "./en";

const dictionaries: Record<Locale, GalleryDictionary> = {
  fr: frGalleryDictionary,
  en: enGalleryDictionary,
};

export function getGalleryDictionary(locale: Locale): GalleryDictionary {
  if (!locales.includes(locale)) {
    return frGalleryDictionary;
  }
  return dictionaries[locale];
}

