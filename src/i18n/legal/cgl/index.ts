import 'server-only';
import type { Locale } from '../../locales';
import type { LegalDictionary } from '../types';

const dictionaries: Record<Locale, () => Promise<LegalDictionary>> = {
  fr: () => import('./fr').then((module) => module.default),
  en: () => import('./en').then((module) => module.default),
  nl: () => import('./nl').then((module) => module.default),
};

export const getCGLDictionary = async (locale: Locale) => dictionaries[locale]();
