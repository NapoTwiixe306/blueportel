import type { GalleryDictionary } from "./types";
import { locales, type Locale } from "../locales";
import frGalleryDictionary from "./fr";
import enGalleryDictionary from "./en";
import nlGalleryDictionary from "./nl";

const dictionaries: Record<Locale, GalleryDictionary> = {
  fr: frGalleryDictionary,
  en: enGalleryDictionary,
  nl: nlGalleryDictionary,
};

export function getGalleryDictionary(locale: Locale): GalleryDictionary {
  if (!locales.includes(locale)) {
    return frGalleryDictionary;
  }
  return dictionaries[locale];
}

