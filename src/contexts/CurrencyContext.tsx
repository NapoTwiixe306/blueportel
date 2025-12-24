"use client";

import { createContext, useContext, useMemo, useState, useEffect } from "react";

import type { Locale } from "../i18n/locales";

export type CurrencyCode = "EUR" | "GBP" | "USD";

export type CurrencyMeta = {
  code: CurrencyCode;
  label: string;
  symbol: string;
};

type CurrencyRates = Record<CurrencyCode, number>;

export const currencyOptions: CurrencyMeta[] = [
  { code: "EUR", label: "Euro", symbol: "€" },
  { code: "GBP", label: "Pound sterling", symbol: "£" },
  { code: "USD", label: "US Dollar", symbol: "$" },
];

const FALLBACK_RATES: CurrencyRates = {
  EUR: 1,
  GBP: 0.86,
  USD: 1.08,
};

type CurrencyState = CurrencyMeta & { rate: number };

type CurrencyContextValue = {
  currency: CurrencyState;
  setCurrency: (code: CurrencyCode) => void;
  convertAmount: (amountEUR: number) => number;
  formatAmount: (
    amountEUR: number,
    locale?: Locale,
    options?: Intl.NumberFormatOptions
  ) => string;
  lastUpdated?: Date;
};

const CurrencyContext = createContext<CurrencyContextValue | undefined>(undefined);

const localeFormatMap: Record<Locale, string> = {
  fr: "fr-FR",
  en: "en-GB",
};

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [selectedCurrencyCode, setSelectedCurrencyCode] = useState<CurrencyCode>("EUR");
  const [rates, setRates] = useState<CurrencyRates>(FALLBACK_RATES);
  const [lastUpdated, setLastUpdated] = useState<Date>();

  useEffect(() => {
    let isMounted = true;

    const fetchRates = async () => {
      try {
        const response = await fetch(
          "https://api.exchangerate.host/latest?base=EUR&symbols=EUR,GBP,USD"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch exchange rates");
        }

        const data = await response.json();
        const ratesFromApi: CurrencyRates = {
          EUR: 1,
          GBP: typeof data?.rates?.GBP === "number" ? data.rates.GBP : FALLBACK_RATES.GBP,
          USD: typeof data?.rates?.USD === "number" ? data.rates.USD : FALLBACK_RATES.USD,
        };

        if (isMounted) {
          setRates(ratesFromApi);
          setLastUpdated(new Date(data.date ?? Date.now()));
        }
      } catch (error) {
        console.warn("[CurrencyProvider] Using fallback exchange rates.", error);
      }
    };

    fetchRates();
    const intervalId = window.setInterval(fetchRates, 1000 * 60 * 60 * 12); // Refresh every 12h

    return () => {
      isMounted = false;
      window.clearInterval(intervalId);
    };
  }, []);

  const value = useMemo<CurrencyContextValue>(() => {
    const currencyMeta =
      currencyOptions.find((option) => option.code === selectedCurrencyCode) ??
      currencyOptions[0];

    const currentRate = rates[currencyMeta.code] ?? 1;

    const convertAmount = (amountEUR: number) =>
      Number((amountEUR * currentRate).toFixed(2));

    const formatAmount = (
      amountEUR: number,
      locale: Locale = "fr",
      options?: Intl.NumberFormatOptions
    ) => {
      const targetLocale = localeFormatMap[locale] ?? "fr-FR";
      return new Intl.NumberFormat(targetLocale, {
        style: "currency",
        currency: currencyMeta.code,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
        ...options,
      }).format(convertAmount(amountEUR));
    };

    const setCurrency = (code: CurrencyCode) => {
      setSelectedCurrencyCode(code);
    };

    return {
      currency: { ...currencyMeta, rate: currentRate },
      setCurrency,
      convertAmount,
      formatAmount,
      lastUpdated,
    };
  }, [selectedCurrencyCode, lastUpdated, rates]);

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
}


