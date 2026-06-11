"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

type HomeFAQProps = {
  title: string;
  subtitle: string;
  items: FAQItem[];
};

export default function HomeFAQ({ title, subtitle, items }: HomeFAQProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  const toggle = (id: string) => setOpenId(openId === id ? null : id);

  return (
    <section
      className="w-full px-3 sm:px-6 lg:px-8 py-16 sm:py-20 bg-white"
      aria-label="Questions fréquentes"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">FAQ</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
          <p className="text-base text-slate-500">{subtitle}</p>
        </div>

        <div className="divide-y divide-gray-100 rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
          {items.map((item) => (
            <article key={item.id}>
              <button
                onClick={() => toggle(item.id)}
                className="w-full flex items-center justify-between py-5 px-6 text-left hover:bg-slate-50 transition-colors duration-150 gap-4"
                aria-expanded={openId === item.id}
              >
                <h3 className="text-sm sm:text-base font-semibold text-slate-800">{item.question}</h3>
                <ChevronDown
                  className={`h-5 w-5 text-blue-500 flex-shrink-0 transition-transform duration-200 ${
                    openId === item.id ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openId === item.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div
                  className="px-6 pb-5 text-sm text-slate-600 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
