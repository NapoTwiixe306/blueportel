import Link from "next/link";
import { AlertCircle, Info, MapPin } from "lucide-react";
import type { MarvillaDictionary } from "../../i18n/marvilla/types";

type MarvillaPageProps = {
  dictionary: MarvillaDictionary;
};

export default function MarvillaPage({ dictionary }: MarvillaPageProps) {
  const { hero, alert, content, summary, screenReader, structuredData } = dictionary;

  const homeLabel =
    dictionary.locale === "fr"
      ? "Accueil"
      : dictionary.locale === "en"
      ? "Home"
      : "Startpagina";

  const withLocale = (path: string) => {
    if (!path || path === "#") return "#";
    if (path.startsWith("http") || path.startsWith("mailto") || path.startsWith("tel")) {
      return path;
    }
    if (path === "/") return `/${dictionary.locale}`;
    if (path.startsWith("/")) return `/${dictionary.locale}${path}`;
    return `/${dictionary.locale}/${path}`;
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

          <div className="w-full max-w-4xl mx-auto space-y-6 sm:space-y-8 md:space-y-10 px-3 sm:px-4 md:px-6">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
              <div className="flex items-start gap-3 sm:gap-4">
                <AlertCircle
                  className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600 flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div>
                  <h2 className="text-base sm:text-lg md:text-xl font-bold text-yellow-900 mb-2 sm:mb-3">
                    {alert.title}
                  </h2>
                  <p
                    className="text-sm sm:text-base md:text-lg text-yellow-800 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: alert.message }}
                  />
                </div>
              </div>
            </div>

            <section className="space-y-4 sm:space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 sm:p-8 md:p-10">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <Info className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" aria-hidden="true" />
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">
                    {hero.title}
                  </h1>
                </div>

                <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  <p dangerouslySetInnerHTML={{ __html: content.paragraph1 }} />

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 mt-6 sm:mt-8">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" aria-hidden="true" />
                      <div>
                        <p
                          className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: content.paragraph2 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-blue-50 border border-blue-200 rounded-lg p-6 sm:p-8 mt-6 sm:mt-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                {summary.title}
              </h2>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg text-gray-700">
                {summary.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-blue-500 font-bold mt-1">•</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="sr-only">
            <h2>{screenReader.heading}</h2>
            {screenReader.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

