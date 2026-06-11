import Link from "next/link";
import Image from "next/image";

import type { Locale } from "../../i18n/locales";
import type { BlogArticle } from "../../data/blog/types";
import { blogIndexCopy } from "../../data/blog/copy";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.fr";

const dateLocales: Record<Locale, string> = {
  fr: "fr-FR",
  en: "en-GB",
  nl: "nl-NL",
};

type BlogIndexPageProps = {
  locale: Locale;
  articles: BlogArticle[];
};

export default function BlogIndexPage({ locale, articles }: BlogIndexPageProps) {
  const copy = blogIndexCopy[locale];

  const sorted = [...articles].sort(
    (a, b) => new Date(b.dateModified).getTime() - new Date(a.dateModified).getTime()
  );

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: copy.title,
    description: copy.metaDescription,
    url: `${siteUrl}/${locale}/blog`,
    inLanguage: locale,
    isPartOf: { "@type": "WebSite", name: "Blueportel", url: siteUrl },
    hasPart: sorted.map((article) => ({
      "@type": "BlogPosting",
      headline: article.title,
      url: `${siteUrl}/${locale}/blog/${article.slug}`,
      datePublished: article.datePublished,
      dateModified: article.dateModified,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: copy.breadcrumbHome, item: `${siteUrl}/${locale}` },
      { "@type": "ListItem", position: 2, name: copy.breadcrumbCurrent, item: `${siteUrl}/${locale}/blog` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="flex min-h-screen justify-center bg-white font-sans w-full overflow-x-hidden">
        <main className="flex min-h-screen w-full max-w-7xl flex-col items-center py-6 px-3 sm:py-8 sm:px-4 md:py-12 md:px-6 lg:py-16 lg:px-8 bg-white">
          <nav aria-label="Breadcrumb" className="w-full max-w-7xl mb-4 sm:mb-6">
            <ol className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 px-3 sm:px-4">
              <li>
                <Link href={`/${locale}`} className="hover:text-blue-500 transition-colors">
                  {copy.breadcrumbHome}
                </Link>
              </li>
              <li aria-hidden="true" className="text-gray-400">/</li>
              <li className="text-gray-900 font-medium" aria-current="page">
                {copy.breadcrumbCurrent}
              </li>
            </ol>
          </nav>

          <header className="w-full max-w-5xl text-center mb-10 sm:mb-14">
            <p className="text-xs sm:text-sm text-blue-500 font-semibold uppercase tracking-wide mb-2">
              {copy.pretitle}
            </p>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black leading-tight mb-4 sm:mb-6 px-3">
              {copy.title}
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 px-3 sm:px-6">
              {copy.description}
            </p>
          </header>

          <section className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {sorted.map((article) => (
              <article
                key={article.slug}
                className="flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
              >
                <Link href={`/${locale}/blog/${article.slug}`} className="block aspect-[16/9]">
                  <Image
                    src={article.heroImage.src}
                    alt={article.heroImage.alt}
                    width={800}
                    height={450}
                    className="w-full h-full object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </Link>
                <div className="flex flex-col flex-1 p-5">
                  <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-wide text-blue-500 mb-2">
                    {copy.categoriesLabel[article.category]} · {article.readingTimeMinutes}{" "}
                    {copy.readingTimeLabel}
                  </p>
                  <h2 className="text-base sm:text-lg font-bold text-gray-900 leading-snug mb-2">
                    <Link
                      href={`/${locale}/blog/${article.slug}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {article.title}
                    </Link>
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="mt-auto flex items-center justify-between">
                    <Link
                      href={`/${locale}/blog/${article.slug}`}
                      className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      {copy.readMoreLabel} →
                    </Link>
                    <time
                      dateTime={article.dateModified}
                      className="text-[11px] sm:text-xs text-gray-400"
                    >
                      {new Date(article.dateModified).toLocaleDateString(dateLocales[locale], {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </main>
      </div>
    </>
  );
}
