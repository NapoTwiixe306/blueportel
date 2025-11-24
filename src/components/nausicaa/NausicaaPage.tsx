"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ChevronDown,
  Home as HomeIcon,
  Waves,
  MapPin,
  Car,
  Bus,
  Navigation,
  Clock,
  Star,
  Phone,
  Mail,
} from "lucide-react";

import type {
  NausicaaDictionary,
  BenefitIcon,
  AccessIcon,
  InfoIcon,
  ContactIcon,
} from "../../i18n/nausicaa/types";

const benefitIcons: Record<BenefitIcon, typeof HomeIcon> = {
  home: HomeIcon,
  waves: Waves,
  map: MapPin,
};

const accessIcons: Record<AccessIcon, typeof Car> = {
  car: Car,
  bus: Bus,
  walk: Navigation,
};

const infoIcons: Record<InfoIcon, typeof Clock> = {
  clock: Clock,
  star: Star,
  map: MapPin,
};

const contactIcons: Record<ContactIcon, typeof Phone> = {
  phone: Phone,
  mail: Mail,
};

type NausicaaPageProps = {
  dictionary: NausicaaDictionary;
};

export default function NausicaaPage({ dictionary }: NausicaaPageProps) {
  const {
    locale,
    hero,
    intro,
    benefitsTitle,
    benefits,
    accessTitle,
    accessCards,
    infoTitle,
    infoItems,
    faqTitle,
    faqItems,
    cta,
    contact,
    structuredData,
  } = dictionary;

  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const updated = new Set(openItems);
    if (updated.has(id)) {
      updated.delete(id);
    } else {
      updated.add(id);
    }
    setOpenItems(updated);
  };

  const withLocale = (path: string) => {
    if (!path || path === "#") return "#";
    if (path.startsWith("http") || path.startsWith("mailto") || path.startsWith("tel")) {
      return path;
    }
    if (path === "/") return `/${locale}`;
    if (path.startsWith("/")) return `/${locale}${path}`;
    return `/${locale}/${path}`;
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.attraction) }}
      />

      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans w-full overflow-x-hidden">
        <main className="flex min-h-screen w-full max-w-7xl flex-col items-center py-6 px-3 sm:py-8 sm:px-4 md:py-12 md:px-6 lg:py-16 lg:px-8 bg-white">
          <nav aria-label="Breadcrumb" className="w-full max-w-7xl mb-4 sm:mb-6">
            <ol className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 px-3 sm:px-4">
              <li>
                <Link href={`/${locale}`} className="hover:text-blue-500 transition-colors">
                  {hero.homeLabel}
                </Link>
              </li>
              <li aria-hidden="true" className="text-gray-400">
                /
              </li>
              <li className="text-gray-900 font-medium" aria-current="page">
                {hero.breadcrumbCurrent}
              </li>
            </ol>
          </nav>

          <header className="text-center mb-8 sm:mb-12">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black leading-tight mb-4 sm:mb-6 px-3">
              {hero.title} <span className="text-blue-500 font-bold">{hero.highlight}</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 font-semibold px-3">
              {hero.subtitle}
            </p>
          </header>

          <section className="sr-only" aria-label={hero.srTitle}>
            <h2>{hero.srTitle}</h2>
            {hero.srParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>

          <section className="w-full max-w-7xl px-3 sm:px-4 md:px-6 mb-8 sm:mb-12">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-xl p-6 sm:p-8 md:p-10 text-white">
              <p className="text-sm sm:text-base md:text-lg text-blue-50 leading-relaxed text-center max-w-4xl mx-auto">
                {intro}
              </p>
            </div>
          </section>

          <section className="w-full max-w-7xl px-3 sm:px-4 md:px-6 mb-8 sm:mb-12">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-black font-bold text-center mb-6">
              {benefitsTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {benefits.map((card, index) => {
                const Icon = benefitIcons[card.icon];
                return (
                  <article
                    key={`${card.title}-${index}`}
                    className="bg-gray-50 rounded-lg p-4 sm:p-6 shadow-md border border-gray-100"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" aria-hidden="true" />
                      <h3 className="text-base sm:text-lg font-bold text-gray-900">{card.title}</h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700">{card.description}</p>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="w-full max-w-7xl px-3 sm:px-4 md:px-6 mb-8 sm:mb-12">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-black font-bold text-center mb-6">
              {accessTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {accessCards.map((card, index) => {
                const Icon = accessIcons[card.icon];
                return (
                  <article
                    key={`${card.title}-${index}`}
                    className="bg-white border-2 border-blue-200 rounded-lg p-4 sm:p-6 shadow-md"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" aria-hidden="true" />
                      <h3 className="text-base sm:text-lg font-bold text-gray-900">{card.title}</h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700">{card.description}</p>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="w-full max-w-7xl px-3 sm:px-4 md:px-6 mb-8 sm:mb-12">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-black font-bold text-center mb-6">
              {infoTitle}
            </h2>
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6 md:p-8 shadow-md max-w-4xl mx-auto">
              <ul className="space-y-4">
                {infoItems.map((item, index) => {
                  const Icon = infoIcons[item.icon];
                  return (
                    <li key={`${item.title}-${index}`} className="flex items-start gap-3">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 mt-1" aria-hidden="true" />
                      <div>
                        <strong className="text-sm sm:text-base text-gray-900">{item.title}</strong>
                        <p className="text-sm sm:text-base text-gray-700">{item.description}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>

          <section className="w-full max-w-5xl px-3 sm:px-4 md:px-6 mb-8 sm:mb-12">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-black font-bold text-center mb-6">
              {faqTitle}
            </h2>
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
              {faqItems.map((item) => (
                <article key={item.id} className="border-b border-gray-200 last:border-0">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full flex items-center justify-between py-4 sm:py-5 px-4 sm:px-6 text-left hover:bg-gray-50 transition-colors"
                    aria-expanded={openItems.has(item.id)}
                    aria-controls={`faq-answer-${item.id}`}
                  >
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 pr-4">{item.question}</h3>
                    <ChevronDown
                      className={`w-5 h-5 text-blue-500 transition-transform ${
                        openItems.has(item.id) ? "rotate-180" : "rotate-0"
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  <div
                    id={`faq-answer-${item.id}`}
                    className={`overflow-hidden transition-all duration-300 ${
                      openItems.has(item.id) ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="px-4 sm:px-6 pb-4 text-sm sm:text-base text-gray-700">{item.answer}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="w-full max-w-7xl px-3 sm:px-4 md:px-6 mb-8 sm:mb-12">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-xl p-6 sm:p-8 md:p-10 text-white text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl  font-bold mb-4">{cta.title}</h2>
              <p className="text-sm sm:text-base md:text-lg text-blue-50 mb-6">{cta.description}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href={cta.buttons.primary.href}
                  target={cta.buttons.primary.href.startsWith("http") ? "_blank" : undefined}
                  rel={cta.buttons.primary.rel}
                  className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors w-full sm:w-auto"
                >
                  {cta.buttons.primary.label}
                </Link>
                <Link
                  href={withLocale(cta.buttons.secondary.href)}
                  className="border border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors w-full sm:w-auto"
                >
                  {cta.buttons.secondary.label}
                </Link>
              </div>
            </div>
          </section>

          <section className="w-full max-w-5xl px-3 sm:px-4 md:px-6 mb-8 sm:mb-12">
            <div className="bg-gray-50 rounded-lg shadow-md p-6 sm:p-8 md:p-10 text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl text-black font-bold mb-4">{contact.title}</h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6">{contact.description}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {contact.buttons.map((button) => {
                  const Icon = contactIcons[button.icon];
                  return (
                    <Link
                      key={button.href}
                      href={button.href}
                      className="flex items-center gap-2 bg-blue-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors w-full sm:w-auto"
                    >
                      <Icon className="w-5 h-5" aria-hidden="true" />
                      {button.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

