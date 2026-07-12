import Link from "next/link";
import type { LegalDictionary } from "../../i18n/legal/types";

type LegalPageProps = {
  dictionary: LegalDictionary;
};

export default function LegalPage({ dictionary }: LegalPageProps) {
  const { hero, intro, sections, closing, structuredData } = dictionary;

  const homeLabel =
    dictionary.locale === "fr"
      ? "Accueil"
      : dictionary.locale === "en"
      ? "Home"
      : "Startpagina";

  const withLocale = (path: string) => {
    if (path === "/") return `/${dictionary.locale}`;
    return `/${dictionary.locale}${path}`;
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.webPage) }}
      />

      <div className="flex min-h-screen items-center justify-center bg-white font-sans w-full overflow-x-hidden">
        <main className="flex min-h-screen w-full max-w-4xl flex-col items-start py-6 px-3 sm:py-8 sm:px-4 md:py-12 md:px-6 lg:py-16 lg:px-8 bg-white">
          <nav aria-label="Fil d'Ariane" className="w-full max-w-4xl mb-4 sm:mb-6">
            <ol className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 px-3 sm:px-4">
              <li>
                <Link href={withLocale("/")} className="hover:text-blue-500 transition-colors">
                  {homeLabel}
                </Link>
              </li>
              <li aria-hidden="true" className="text-gray-400">/</li>
              <li className="text-gray-900 font-medium" aria-current="page">
                {hero.breadcrumbCurrent}
              </li>
            </ol>
          </nav>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black max-w-full sm:max-w-2xl md:max-w-3xl leading-tight px-3 sm:px-4 md:px-6 mb-4 sm:mb-6">
            {hero.title}{" "}
            <span className="text-blue-500 font-bold" style={{ fontFamily: "var(--font-gluten)" }}>
              {hero.highlight}
            </span>
            {hero.titleAfter ? <> {hero.titleAfter}</> : null}
          </h1>

          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 font-bold mb-8 sm:mb-10 md:mb-12 px-3 sm:px-4 md:px-6">
            {hero.subtitle}
          </p>

          <div className="w-full max-w-4xl mx-auto space-y-8 sm:space-y-10 md:space-y-12 px-3 sm:px-4 md:px-6">
            {intro && intro.length > 0 && (
              <section className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 sm:p-8">
                {intro.map((paragraph, index) => (
                  <p
                    key={index}
                    className={`text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed ${
                      index < intro.length - 1 ? "mb-4" : ""
                    }`}
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ))}
              </section>
            )}

            {sections.map((section, sectionIndex) => (
              <section key={sectionIndex} className="space-y-4 sm:space-y-6">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black">
                  {section.title}
                </h2>
                <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 sm:p-8">
                  {section.paragraphs?.map((paragraph, index) => (
                    <p
                      key={index}
                      className={`text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed ${
                        index < (section.paragraphs?.length ?? 0) - 1 ||
                        (section.items && section.items.length > 0)
                          ? "mb-4"
                          : ""
                      }`}
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                  ))}
                  {section.items && section.items.length > 0 && (
                    <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg text-gray-700">
                      {section.items.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-blue-500 font-bold mt-1">•</span>
                          <span dangerouslySetInnerHTML={{ __html: item }} />
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.paragraphsAfter?.map((paragraph, index) => (
                    <p
                      key={index}
                      className={`text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mt-4`}
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                  ))}
                </div>
              </section>
            ))}

            {closing && (
              <section className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 sm:p-8 mt-8 sm:mt-10">
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {closing.title}
                </h2>
                {closing.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className={`text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed ${
                      index < closing.paragraphs.length - 1 ? "mb-4" : ""
                    }`}
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ))}
              </section>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
