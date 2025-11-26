"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Globe, DollarSign } from "lucide-react";

import Logo from "../img/logo.png";
import { locales, type Locale } from "../i18n/locales";
import { useCurrency, currencyOptions } from "../contexts/CurrencyContext";

interface DropdownItem {
  label: string;
  href?: string;
}

interface NavItem {
  label: string;
  items: DropdownItem[];
}

interface LanguageOption {
  code: Locale;
  label: string;
  flag: string;
}

const navItemsByLocale: Record<Locale, NavItem[]> = {
  fr: [
    {
      label: "Logement",
      items: [
        { label: "Accueil", href: "/" },
        { label: "Photos", href: "/pages/galerie-photo" },
        { label: "Vue d'ensemble", href: "/pages/vue-densemble" },
        { label: "Plan", href: "/pages/plan" },
        { label: "Avis", href: "/pages/avis" },
      ],
    },
    {
      label: "Séjours & Réservations",
      items: [
        { label: "Disponibilités", href: "/pages/disponibilites" },
        { label: "Tarifs", href: "/pages/tarifs" },
        { label: "Réservation personnalisée", href: "/pages/contact" },
        { label: "Réserver / Calendrier", href: "#" },
      ],
    },
    {
      label: "À proximité",
      items: [
        { label: "Nausicaa", href: "/pages/nausicaa-proche-le-portel" },
        { label: "Guide touristique", href: "/pages/guide-touristique" },
      ],
    },
    {
      label: "Infos pratiques",
      items: [
        { label: "FAQ Blueportel", href: "/pages/FAQ" },
        { label: "Contact", href: "/pages/contact" },
      ],
    },
  ],
  en: [
    {
      label: "Stay",
      items: [
        { label: "Home", href: "/" },
        { label: "Photos", href: "/pages/galerie-photo" },
        { label: "Highlights", href: "/pages/vue-densemble" },
        { label: "Map", href: "/pages/plan" },
        { label: "Reviews", href: "/pages/avis" },
      ],
    },
    {
      label: "Bookings",
      items: [
        { label: "Availability", href: "/pages/disponibilites" },
        { label: "Rates", href: "/pages/tarifs" },
        { label: "Custom request", href: "/pages/contact" },
        { label: "Booking / Calendar", href: "#" },
      ],
    },
    {
      label: "Discover",
      items: [
        { label: "Nausicaá", href: "/pages/nausicaa-proche-le-portel" },
        { label: "Travel guide", href: "/pages/guide-touristique" },
      ],
    },
    {
      label: "Info",
      items: [
        { label: "Blueportel FAQ", href: "/pages/FAQ" },
        { label: "Contact", href: "/pages/contact" },
      ],
    },
  ],
  nl: [
    {
      label: "Verblijf",
      items: [
        { label: "Home", href: "/" },
        { label: "Foto's", href: "/pages/galerie-photo" },
        { label: "Overzicht", href: "/pages/vue-densemble" },
        { label: "Plan", href: "/pages/plan" },
        { label: "Beoordelingen", href: "/pages/avis" },
      ],
    },
    {
      label: "Boeken",
      items: [
        { label: "Beschikbaarheid", href: "/pages/disponibilites" },
        { label: "Tarieven", href: "/pages/tarifs" },
        { label: "Maatwerk aanvraag", href: "/pages/contact" },
        { label: "Reservering / Kalender", href: "#" },
      ],
    },
    {
      label: "Ontdekken",
      items: [
        { label: "Nausicaá", href: "/pages/nausicaa-proche-le-portel" },
        { label: "Toeristische gids", href: "/pages/guide-touristique" },
      ],
    },
    {
      label: "Praktisch",
      items: [
        { label: "Blueportel FAQ", href: "/pages/FAQ" },
        { label: "Contact", href: "/pages/contact" },
      ],
    },
  ],
};

const bookingLabel: Record<Locale, string> = {
  fr: "Réservez Maintenant",
  en: "Book now",
  nl: "Nu boeken",
};

const bookingShortLabel: Record<Locale, string> = {
  fr: "Réserver",
  en: "Book",
  nl: "Boeken",
};

const bookingUrl: Record<Locale, string> = {
  fr: "https://checkout.lodgify.com/fr/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1",
  en: "https://checkout.lodgify.com/en/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1",
  nl: "https://checkout.lodgify.com/nl/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1",
};

const languageOptions: LanguageOption[] = [
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "nl", label: "Nederlands", flag: "🇳🇱" },
];

const preferencesLabel: Record<Locale, string> = {
  fr: "Préférences",
  en: "Preferences",
  nl: "Voorkeuren",
};

const languageLabel: Record<Locale, string> = {
  fr: "Langue",
  en: "Language",
  nl: "Taal",
};

const currencyLabel: Record<Locale, string> = {
  fr: "Devise d'affichage",
  en: "Display Currency",
  nl: "Valuta",
};

const toolkitInfo: Record<Locale, (lang: string, currency: string) => string> = {
  fr: (lang, currency) => `Interface en ${lang} – prix affichés en ${currency}.`,
  en: (lang, currency) => `Interface in ${lang} – prices shown in ${currency}.`,
  nl: (lang, currency) => `Interface in ${lang} – prijzen weergegeven in ${currency}.`,
};

interface NavbarProps {
  locale?: Locale;
}

export default function Navbar({ locale: initialLocale = "fr" }: NavbarProps) {
  const router = useRouter();
  const pathname = usePathname();

  // Extract locale from pathname for immediate updates
  const getLocaleFromPath = (): Locale => {
    const segments = pathname.split("/");
    const firstSegment = segments[1];
    if (firstSegment && locales.includes(firstSegment as Locale)) {
      return firstSegment as Locale;
    }
    return initialLocale;
  };

  const currentLocale = getLocaleFromPath();

  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);
  const toolkitRef = useRef<HTMLDivElement | null>(null);

  const initialLanguage =
    languageOptions.find((lang) => lang.code === currentLocale) ?? languageOptions[0];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageOption>(initialLanguage);
  const [isToolkitOpen, setIsToolkitOpen] = useState(false);
  const { currency: selectedCurrency, setCurrency: setSelectedCurrency } = useCurrency();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      dropdownRefs.current.forEach((ref, index) => {
        if (ref && !ref.contains(event.target as Node) && openDropdown === index) {
          setOpenDropdown(null);
        }
      });
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

  useEffect(() => {
    const handleToolkitOutside = (event: MouseEvent) => {
      if (toolkitRef.current && !toolkitRef.current.contains(event.target as Node)) {
        setIsToolkitOpen(false);
      }
    };

    document.addEventListener("mousedown", handleToolkitOutside);
    return () => document.removeEventListener("mousedown", handleToolkitOutside);
  }, []);

  useEffect(() => {
    const newLanguage = languageOptions.find((lang) => lang.code === currentLocale) ?? languageOptions[0];
    setSelectedLanguage(newLanguage);
  }, [currentLocale]);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const navItems = navItemsByLocale[currentLocale] ?? navItemsByLocale.fr;

  const buildLocalizedPath = (targetLocale: Locale) => {
    const segments = pathname.split("/");
    const first = segments[1];
    const hasLocalePrefix = locales.includes(first as Locale);

    if (hasLocalePrefix) {
      const rest = segments.slice(2).join("/");
      return rest ? `/${targetLocale}/${rest}` : `/${targetLocale}`;
    }

    return `/${targetLocale}`;
  };

  const handleLanguageChange = (lang: LanguageOption) => {
    setSelectedLanguage(lang);
    const nextPath = buildLocalizedPath(lang.code);
    router.push(nextPath);
    setIsToolkitOpen(false);
    setMobileMenuOpen(false);
  };

  const withLocale = (path?: string) => {
    if (!path || path === "#") return "#";
    if (path.startsWith("http")) return path;
    if (path === "/") return `/${currentLocale}`;
    if (path.startsWith("/")) return `/${currentLocale}${path}`;
    return `/${currentLocale}/${path}`;
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center flex-shrink-0">
            <Link href={`/${currentLocale}`} aria-label="Blueportel - Accueil">
              <Image
                src={Logo}
                alt="Blueportel - Mobil-Home Prestige Face à la Mer - Logo"
                className="h-auto w-auto"
                width={200}
                height={80}
                priority
                fetchPriority="high"
              />
            </Link>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center lg:gap-8">
            {navItems.map((item, index) => (
              <div
                key={item.label}
                ref={(el) => {
                  dropdownRefs.current[index] = el;
                }}
                className="relative"
              >
                <button
                  onClick={() => toggleDropdown(index)}
                  className="flex items-center gap-1 text-base font-medium text-gray-800 transition-colors hover:text-[#1E3A8A] focus:outline-none"
                >
                  {item.label}
                  <svg
                    className={`h-4 w-4 transition-transform ${
                      openDropdown === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === index && (
                  <div className="absolute left-1/2 top-full mt-2 w-56 -translate-x-1/2 rounded-lg bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={withLocale(subItem.href)}
                        className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-[#1E3A8A]"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex flex-shrink-0 items-center gap-3">
            <div className="relative" ref={toolkitRef}>
              <button
                type="button"
                onClick={() => setIsToolkitOpen((prev) => !prev)}
                className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-gray-300"
                aria-expanded={isToolkitOpen}
              >
                <Globe className="h-4 w-4 text-blue-500" aria-hidden="true" />
                <span>
                  {selectedLanguage.code.toUpperCase()} · {selectedCurrency.code}
                </span>
                <svg
                  className={`h-4 w-4 transition-transform ${isToolkitOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isToolkitOpen && (
                <div className="absolute right-0 mt-3 w-72 rounded-2xl border border-gray-200 bg-white p-4 shadow-2xl">
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                        {languageLabel[currentLocale]}
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {languageOptions.map((lang) => (
                          <button
                            key={lang.code}
                            type="button"
                            onClick={() => handleLanguageChange(lang)}
                            className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-sm transition ${
                              selectedLanguage.code === lang.code
                                ? "border-blue-500 bg-blue-50 text-blue-700"
                                : "border-gray-200 text-gray-900 hover:border-blue-200"
                            }`}
                          >
                            <span>{lang.flag}</span>
                            {lang.label}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                        {currencyLabel[currentLocale]}
                      </p>
                      <div className="grid grid-cols-3 gap-2">
                        {currencyOptions.map((currency) => (
                          <button
                            key={currency.code}
                            type="button"
                            onClick={() => setSelectedCurrency(currency.code)}
                            className={`rounded-xl border px-3 py-2 text-xs font-semibold transition ${
                              selectedCurrency.code === currency.code
                                ? "border-blue-500 bg-blue-50 text-blue-700"
                                : "border-gray-200 text-gray-700 hover:border-blue-200"
                            }`}
                          >
                            {currency.code} {currency.symbol}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-xs text-gray-500">
                    {toolkitInfo[currentLocale](selectedLanguage.label, selectedCurrency.label)}
                  </p>
                </div>
              )}
            </div>
            <Link
              href={bookingUrl[currentLocale]}
              target="_blank"
              rel="noopener"
              className="rounded-lg bg-[#2663EB] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1E40AF]"
            >
              {bookingLabel[currentLocale]}
            </Link>
          </div>

          <div className="flex items-center gap-4 lg:hidden">
            <Link
              href={bookingUrl[currentLocale]}
              className="rounded-lg bg-[#2663EB] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#1E40AF]"
            >
              {bookingShortLabel[currentLocale]}
            </Link>
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white shadow-inner">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navItems.map((item, index) => (
              <div key={item.label}>
                <button
                  onClick={() => toggleDropdown(index)}
                  className="flex w-full items-center justify-between px-4 py-3 text-base font-medium text-gray-800 hover:bg-gray-50 focus:outline-none"
                >
                  <span>{item.label}</span>
                  <svg
                    className={`h-5 w-5 transition-transform ${
                      openDropdown === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === index && (
                  <div className="ml-4 space-y-1 border-l-2 border-gray-200 pl-4">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={withLocale(subItem.href)}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#1E3A8A]"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 px-4 py-4 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
              {preferencesLabel[currentLocale]}
            </p>
            <div>
              <p className="text-xs text-gray-500 mb-2 flex items-center gap-2">
                <Globe className="h-4 w-4 text-blue-500" aria-hidden="true" />
                {languageLabel[currentLocale]}
              </p>
              <div className="flex flex-wrap gap-2">
                {languageOptions.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => handleLanguageChange(lang)}
                    className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition ${
                      selectedLanguage.code === lang.code
                        ? "border-blue-500 bg-blue-50 text-blue-700"
                        : "border-gray-200 text-gray-900"
                    }`}
                  >
                    <span>{lang.flag}</span>
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-2 flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-blue-500" aria-hidden="true" />
                {currencyLabel[currentLocale]}
              </p>
              <div className="flex flex-wrap gap-2">
                {currencyOptions.map((currency) => (
                  <button
                    key={currency.code}
                    type="button"
                    onClick={() => setSelectedCurrency(currency.code)}
                    className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                      selectedCurrency.code === currency.code
                        ? "border-blue-500 bg-blue-50 text-blue-700"
                        : "border-gray-200 text-gray-700"
                    }`}
                  >
                    {currency.code} {currency.symbol}
                  </button>
                ))}
              </div>
            </div>
            <p className="text-xs text-gray-500">
              {toolkitInfo[currentLocale](selectedLanguage.label, selectedCurrency.label)}
            </p>
          </div>
        </div>
      )}
    </nav>
  );
}

