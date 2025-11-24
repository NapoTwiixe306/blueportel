import 'server-only';
import type { Locale } from '../locales';
import type { TDMDictionary } from './types';

const dictionaries: Record<Locale, () => Promise<TDMDictionary>> = {
  fr: () => import('./fr').then((module) => module.default),
  en: () => import('./en').then((module) => module.default),
  nl: () => import('./nl').then((module) => module.default),
};

export const getTDMDictionary = async (locale: Locale) => dictionaries[locale]();

