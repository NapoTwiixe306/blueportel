import Link from "next/link";
import Image from "next/image";

import type { Locale } from "../../i18n/locales";
import type { ArticleSection, BlogArticle } from "../../data/blog/types";
import { blogArticleCopy } from "../../data/blog/copy";
import { renderInline, stripInline } from "./inlineMarkdown";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.fr";

const dateLocales: Record<Locale, string> = {
  fr: "fr-FR",
  en: "en-GB",
  nl: "nl-NL",
};

function formatDate(iso: string, locale: Locale): string {
  return new Date(iso).toLocaleDateString(dateLocales[locale], {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

type BlogArticlePageProps = {
  article: BlogArticle;
  related: BlogArticle[];
};

function SectionBlock({
  section,
  locale,
  level,
}: {
  section: ArticleSection;
  locale: Locale;
  level: 2 | 3;
}) {
  const Heading = level === 2 ? "h2" : "h3";
  return (
    <section id={section.id} className="scroll-mt-24">
      <Heading
        className={
          level === 2
            ? "text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mt-10 sm:mt-12 mb-4"
            : "text-lg sm:text-xl font-semibold text-gray-900 mt-8 mb-3"
        }
      >
        {section.title}
      </Heading>
      {section.paragraphs?.map((paragraph, index) => (
        <p
          key={index}
          className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4"
        >
          {renderInline(paragraph, locale)}
        </p>
      ))}
      {section.list &&
        (section.list.ordered ? (
          <ol className="list-decimal pl-5 sm:pl-6 mb-5 space-y-2 text-sm sm:text-base text-gray-700 leading-relaxed">
            {section.list.items.map((item, index) => (
              <li key={index}>{renderInline(item, locale)}</li>
            ))}
          </ol>
        ) : (
          <ul className="list-disc pl-5 sm:pl-6 mb-5 space-y-2 text-sm sm:text-base text-gray-700 leading-relaxed">
            {section.list.items.map((item, index) => (
              <li key={index}>{renderInline(item, locale)}</li>
            ))}
          </ul>
        ))}
      {section.table && (
        <div className="overflow-x-auto mb-6 rounded-xl border border-gray-200">
          <table className="w-full text-left text-xs sm:text-sm">
            {section.table.caption && (
              <caption className="sr-only">{section.table.caption}</caption>
            )}
            <thead className="bg-blue-50 text-gray-900">
              <tr>
                {section.table.headers.map((header) => (
                  <th key={header} scope="col" className="px-3 sm:px-4 py-3 font-semibold">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {section.table.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="bg-white">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="px-3 sm:px-4 py-3 text-gray-700 align-top">
                      {renderInline(cell, locale)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {section.callout && (
        <aside className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-4 sm:p-5 mb-6">
          <p className="font-semibold text-gray-900 text-sm sm:text-base mb-1">
            {section.callout.title}
          </p>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            {renderInline(section.callout.text, locale)}
          </p>
        </aside>
      )}
      {section.image && (
        <figure className="my-6 rounded-2xl overflow-hidden shadow-md">
          <Image
            src={section.image.src}
            alt={section.image.alt}
            width={1600}
            height={1067}
            className="w-full h-auto object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          {section.image.caption && (
            <figcaption className="text-xs sm:text-sm text-gray-500 px-4 py-2 bg-gray-50">
              {section.image.caption}
            </figcaption>
          )}
        </figure>
      )}
      {section.subsections?.map((subsection) => (
        <SectionBlock key={subsection.id} section={subsection} locale={locale} level={3} />
      ))}
    </section>
  );
}

export default function BlogArticlePage({ article, related }: BlogArticlePageProps) {
  const locale = article.locale;
  const copy = blogArticleCopy[locale];
  const articleUrl = `${siteUrl}/${locale}/blog/${article.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.metaDescription,
    image: `${siteUrl}${article.heroImage.src}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    inLanguage: locale,
    mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "article > p"],
    },
    author: {
      "@type": "Organization",
      name: "Blueportel",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Blueportel",
      logo: { "@type": "ImageObject", url: `${siteUrl}/logo.png` },
    },
  };

  const faqSchema =
    article.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: article.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: stripInline(item.answer),
            },
          })),
        }
      : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: copy.breadcrumbHome, item: `${siteUrl}/${locale}` },
      { "@type": "ListItem", position: 2, name: copy.breadcrumbBlog, item: `${siteUrl}/${locale}/blog` },
      { "@type": "ListItem", position: 3, name: article.title, item: articleUrl },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="flex min-h-screen justify-center bg-white font-sans w-full overflow-x-hidden">
        <main className="flex min-h-screen w-full max-w-7xl flex-col items-center py-6 px-3 sm:py-8 sm:px-4 md:py-12 md:px-6 lg:py-16 lg:px-8 bg-white">
          <nav aria-label="Breadcrumb" className="w-full max-w-3xl mb-4 sm:mb-6">
            <ol className="flex flex-wrap items-center gap-x-2 text-xs sm:text-sm text-gray-600">
              <li>
                <Link href={`/${locale}`} className="hover:text-blue-500 transition-colors">
                  {copy.breadcrumbHome}
                </Link>
              </li>
              <li aria-hidden="true" className="text-gray-400">/</li>
              <li>
                <Link href={`/${locale}/blog`} className="hover:text-blue-500 transition-colors">
                  {copy.breadcrumbBlog}
                </Link>
              </li>
              <li aria-hidden="true" className="text-gray-400">/</li>
              <li className="text-gray-900 font-medium" aria-current="page">
                {article.title}
              </li>
            </ol>
          </nav>

          <article className="w-full max-w-3xl">
            <header className="mb-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                {article.title}
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4">
                {article.excerpt}
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                {copy.authorLabel} · {copy.updatedLabel}{" "}
                <time dateTime={article.dateModified}>
                  {formatDate(article.dateModified, locale)}
                </time>{" "}
                · {article.readingTimeMinutes} {copy.readingTimeLabel}
              </p>
            </header>

            <figure className="rounded-2xl overflow-hidden shadow-lg mb-8 aspect-[16/9]">
              <Image
                src={article.heroImage.src}
                alt={article.heroImage.alt}
                width={1600}
                height={900}
                className="w-full h-full object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            </figure>

            {article.intro.map((paragraph, index) => (
              <p
                key={index}
                className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4"
              >
                {renderInline(paragraph, locale)}
              </p>
            ))}

            <nav
              aria-label={copy.tocTitle}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-5 sm:p-6 my-8"
            >
              <p className="font-bold text-gray-900 mb-3">{copy.tocTitle}</p>
              <ol className="list-decimal pl-5 space-y-1.5 text-sm sm:text-base">
                {article.sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
                {article.faq.length > 0 && (
                  <li>
                    <a href="#faq" className="text-blue-600 hover:text-blue-800 transition-colors">
                      {copy.faqTitle}
                    </a>
                  </li>
                )}
              </ol>
            </nav>

            {article.sections.map((section) => (
              <SectionBlock key={section.id} section={section} locale={locale} level={2} />
            ))}

            <section
              className="bg-blue-600 text-white rounded-2xl p-6 sm:p-8 my-10"
              aria-label={copy.ctaTitle}
            >
              <h2 className="text-xl sm:text-2xl font-bold mb-3">{copy.ctaTitle}</h2>
              <p className="text-sm sm:text-base text-blue-50 leading-relaxed mb-5">
                {copy.ctaText}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/${locale}/pages/disponibilites`}
                  className="bg-white text-blue-700 font-semibold rounded-full px-5 py-2.5 text-sm sm:text-base hover:bg-blue-50 transition-colors"
                >
                  {copy.ctaAvailability}
                </Link>
                <Link
                  href={`/${locale}/pages/prestige`}
                  className="border border-white/70 text-white font-semibold rounded-full px-5 py-2.5 text-sm sm:text-base hover:bg-white/10 transition-colors"
                >
                  {copy.ctaPrestige}
                </Link>
                <Link
                  href={`/${locale}/pages/horizon`}
                  className="border border-white/70 text-white font-semibold rounded-full px-5 py-2.5 text-sm sm:text-base hover:bg-white/10 transition-colors"
                >
                  {copy.ctaHorizon}
                </Link>
              </div>
            </section>

            {article.faq.length > 0 && (
              <section id="faq" className="scroll-mt-24">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-5">
                  {copy.faqTitle}
                </h2>
                <div className="space-y-3">
                  {article.faq.map((item) => (
                    <details
                      key={item.question}
                      className="group bg-white border border-gray-200 rounded-xl p-4 sm:p-5"
                    >
                      <summary className="font-semibold text-gray-900 text-sm sm:text-base cursor-pointer list-none flex justify-between items-center gap-3">
                        {item.question}
                        <span
                          aria-hidden="true"
                          className="text-blue-500 transition-transform group-open:rotate-45 text-xl leading-none"
                        >
                          +
                        </span>
                      </summary>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-3">
                        {renderInline(item.answer, locale)}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {related.length > 0 && (
              <section className="mt-12">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5">
                  {copy.relatedTitle}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {related.map((relatedArticle) => (
                    <Link
                      key={relatedArticle.slug}
                      href={`/${locale}/blog/${relatedArticle.slug}`}
                      className="block bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
                    >
                      <p className="font-semibold text-gray-900 text-sm sm:text-base mb-2">
                        {relatedArticle.title}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600 line-clamp-3">
                        {relatedArticle.excerpt}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </article>
        </main>
      </div>
    </>
  );
}
