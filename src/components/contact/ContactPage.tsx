"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, Phone, Globe } from "lucide-react";

import type { ContactDictionary } from "../../i18n/contact/types";

type ContactPageProps = {
  dictionary: ContactDictionary;
};

type FormData = {
  email: string;
  firstName: string;
  lastName: string;
  guests: string;
  phone: string;
  country: string;
  arrival: string;
  departure: string;
  comment: string;
  privacy: boolean;
};

export default function ContactPage({ dictionary }: ContactPageProps) {
  const {
    locale,
    hero,
    hostBlock,
    form,
    bookingCta,
    structuredData,
    screenReader,
  } = dictionary;

  const [formData, setFormData] = useState<FormData>({
    email: "",
    firstName: "",
    lastName: "",
    guests: "",
    phone: "",
    country: form.fields.country.options[0]?.value ?? "FR",
    arrival: "",
    departure: "",
    comment: "",
    privacy: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target;
    const { name, value, type } = target;
    
    if (type === "checkbox" && "checked" in target) {
      setFormData((prev) => ({
        ...prev,
        [name]: target.checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const contactIconMap = {
    email: Mail,
    phone: Phone,
    site: Globe,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.contact) }}
      />

      <div className="flex min-h-screen items-center justify-center bg-white font-sans w-full overflow-x-hidden">
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
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-4">
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

          <section className="w-full max-w-6xl space-y-8 sm:space-y-10 md:space-y-12 px-3 sm:px-4 md:px-6 mb-10 sm:mb-14">
            <article className="bg-white border border-gray-200 rounded-lg shadow-md p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-black mb-2">{hostBlock.title}</h2>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">{hostBlock.name}</h3>
              {hostBlock.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
              <blockquote className="border-l-4 border-blue-500 pl-4 italic text-sm sm:text-base text-gray-700 mb-6">
                {hostBlock.quote}
              </blockquote>
              <div className="space-y-3">
                {hostBlock.methods.map((method) => {
                  const Icon = contactIconMap[method.icon];
                  return (
                    <Link
                      key={method.href}
                      href={method.href}
                      className="flex items-center gap-3 text-sm sm:text-base text-gray-700 hover:text-blue-500 transition-colors"
                    >
                      <Icon className="w-5 h-5 text-blue-500" aria-hidden="true" />
                      {method.label}
                    </Link>
                  );
                })}
              </div>
            </article>

            <article className="bg-white border border-gray-200 rounded-lg shadow-md p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-black mb-2">{form.title}</h2>
              <p className="text-sm sm:text-base text-gray-700 mb-6">{form.description}</p>

              <form className="space-y-4 sm:space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {form.fields.email.label} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder={form.fields.email.placeholder}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      {form.fields.firstName.label} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      placeholder={form.fields.firstName.placeholder}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      {form.fields.lastName.label} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      placeholder={form.fields.lastName.placeholder}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                      {form.fields.guests.label} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      min={1}
                      max={6}
                      required
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      placeholder={form.fields.guests.placeholder}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      {form.fields.phone.label} <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2">
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      >
                        {form.fields.country.options.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        placeholder={form.fields.phone.placeholder}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="arrival" className="block text-sm font-medium text-gray-700 mb-2">
                      {form.fields.arrival.label} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="arrival"
                      name="arrival"
                      value={formData.arrival}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="departure" className="block text-sm font-medium text-gray-700 mb-2">
                      {form.fields.departure.label} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="departure"
                      name="departure"
                      value={formData.departure}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
                    {form.fields.comment.label}
                  </label>
                  <textarea
                    id="comment"
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm resize-none"
                    placeholder={form.fields.comment.placeholder}
                  />
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    checked={formData.privacy}
                    onChange={handleChange}
                    required
                    className="mt-1 w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="privacy" className="text-xs sm:text-sm text-gray-600">
                    {form.privacy} <span className="text-red-500">*</span>
                  </label>
                </div>

                <div className="text-xs sm:text-sm text-gray-500 italic">{form.recaptcha}</div>

                <button
                  type="submit"
                  disabled
                  className="w-full bg-gray-300 text-gray-600 font-bold px-6 py-3 rounded-lg cursor-not-allowed text-sm"
                >
                  {form.disabledHint}
                </button>
              </form>
            </article>
          </section>

          <section className="w-full max-w-6xl mb-10 sm:mb-16">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl.shadow-xl p-6 sm:p-8 text-white text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">{bookingCta.title}</h2>
              <p className="text-sm sm:text-base md:text-lg text-blue-50 mb-6">{bookingCta.description}</p>
              <Link
                href={bookingCta.href}
                target="_blank"
                rel="nofollow"
                className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors text-base"
              >
                {bookingCta.buttonLabel}
              </Link>
            </div>
          </section>

          <section className="sr-only" aria-label={screenReader.title}>
            <h2>{screenReader.title}</h2>
            {screenReader.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        </main>
      </div>
    </>
  );
}

