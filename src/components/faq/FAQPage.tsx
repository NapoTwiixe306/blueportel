"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Phone, Mail } from "lucide-react";

import type { FAQDictionary } from "../../i18n/faq/types";

type FAQPageProps = {
  dictionary: FAQDictionary;
};

export default function FAQPage({ dictionary }: FAQPageProps) {
  const {
    locale,
    hero,
    faqItems,
    contactBlock,
    structuredData,
  } = dictionary;

  const [openItems, setOpenItems] = useState<Set<string>>(new Set([faqItems[0]?.id ?? ""]));

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
    if (path.startsWith("http") || path.startsWith("tel") || path.startsWith("mailto")) {
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
              {hero.title}
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

          <section className="w-full max-w-5xl mb-8 sm:mb-12" aria-label="FAQ list">
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
              {faqItems.map((item) => (
                <article key={item.id} className="border-b border-gray-200 last:border-b-0">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full flex items-center justify-between py-4 sm:py-5 md:py-6 px-4 sm:px-6 text-left hover:bg-gray-50 transition-colors duration-200"
                    aria-expanded={openItems.has(item.id)}
                    aria-controls={`faq-answer-${item.id}`}
                  >
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 pr-4">
                      {item.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 sm:w-6 sm:h-6 text-blue-500 transition-transform ${
                        openItems.has(item.id) ? "rotate-180" : "rotate-0"
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  <div
                    id={`faq-answer-${item.id}`}
                    className={`overflow-hidden transition-all duration-300 ${
                      openItems.has(item.id) ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div
                      className="px-4 sm:px-6 pb-4 text-sm sm:text-base text-gray-700 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    />
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="w-full max-w-5xl">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-xl p-6 sm:p-8 text-white text-center">
              <h2 className="text-xl sm:text-2xl font-bold mb-3">{contactBlock.title}</h2>
              <p className="text-sm sm:text-base text-blue-50 mb-6">{contactBlock.description}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={contactBlock.phoneHref}
                  className="flex items-center gap-2 bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  {contactBlock.phoneLabel}
                </Link>
                <Link
                  href={contactBlock.emailHref}
                  className="flex items-center gap-2.bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <Mail className="w-5 h-5" aria-hidden="true" />
                  {contactBlock.emailLabel}
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

