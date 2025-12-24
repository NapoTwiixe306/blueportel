import type { PlanDictionary } from "./types";
import { locales, type Locale } from "../locales";
import frPlanDictionary from "./fr";
import enPlanDictionary from "./en";

const dictionaries: Record<Locale, PlanDictionary> = {
  fr: frPlanDictionary,
  en: enPlanDictionary,
};

export function getPlanDictionary(locale: Locale): PlanDictionary {
  if (!locales.includes(locale)) {
    return frPlanDictionary;
  }
  return dictionaries[locale];
}

