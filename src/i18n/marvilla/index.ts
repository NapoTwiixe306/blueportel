import 'server-only';
import type { Locale } from '../locales';
import type { MarvillaDictionary } from './types';

const dictionaries: Record<Locale, () => Promise<MarvillaDictionary>> = {
  fr: () => import('./fr').then((module) => module.default),
  en: () => import('./en').then((module) => module.default),
  nl: () => import('./nl').then((module) => module.default),
};

export const getMarvillaDictionary = async (locale: Locale) => dictionaries[locale]();

