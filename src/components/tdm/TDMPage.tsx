import Link from "next/link";
import { Mail, MapPin, FileText, Shield, AlertTriangle } from "lucide-react";
import type { TDMDictionary } from "../../i18n/tdm/types";

type TDMPageProps = {
  dictionary: TDMDictionary;
};

export default function TDMPage({ dictionary }: TDMPageProps) {
  const { hero, sections, screenReader, structuredData } = dictionary;

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

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black max-w-full sm:max-w-2xl md:max-w-3xl leading-tight px-3 sm:px-4 md:px-6 mb-4 sm:mb-6">
            {dictionary.locale === "fr" ? (
              <>
                Politique relative au{" "}
                <span className="text-blue-500 font-bold" style={{ fontFamily: 'var(--font-gluten)' }}>
                  Text and Data Mining
                </span>{" "}
                (TDM)
              </>
            ) : dictionary.locale === "en" ? (
              <>
                <span className="text-blue-500 font-bold" style={{ fontFamily: 'var(--font-gluten)' }}>
                  Text and Data Mining
                </span>{" "}
                (TDM) Policy
              </>
            ) : (
              <>
                <span className="text-blue-500 font-bold" style={{ fontFamily: 'var(--font-gluten)' }}>
                  Text and Data Mining
                </span>{" "}
                (TDM) Beleid
              </>
            )}
          </h1>

          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 font-bold mb-8 sm:mb-10 md:mb-12 px-3 sm:px-4 md:px-6">
            {hero.subtitle}
          </p>

          <div className="w-full max-w-4xl mx-auto space-y-8 sm:space-y-10 md:space-y-12 px-3 sm:px-4 md:px-6">
            <section className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" aria-hidden="true" />
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black">
                  {sections.object.title}
                </h2>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 sm:p-8">
                {sections.object.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className={`text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed ${
                      index < sections.object.paragraphs.length - 1 ? "mb-4" : ""
                    }`}
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ))}
              </div>
            </section>

            <section className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" aria-hidden="true" />
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black">
                  {sections.definition.title}
                </h2>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 sm:p-8">
                {sections.definition.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ))}
              </div>
            </section>

            <section className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" aria-hidden="true" />
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black">
                  {sections.reservation.title}
                </h2>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 sm:p-8">
                <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg text-gray-700">
                  {sections.reservation.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-blue-500 font-bold mt-1">•</span>
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="space-y-4 sm:space-y-6">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black">
                {sections.authorized.title}
              </h2>
              <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 sm:p-8">
                {sections.authorized.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className={`text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed ${
                      index < sections.authorized.paragraphs.length - 1 ? "mb-4" : ""
                    }`}
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ))}
              </div>
            </section>

            <section className="space-y-4 sm:space-y-6">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black">
                {sections.contact.title}
              </h2>
              <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 sm:p-8">
                {sections.contact.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className={`text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed ${
                      index < sections.contact.paragraphs.length - 1 ? "mb-4" : ""
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
                <div className="space-y-3">
                  <Link
                    href={`mailto:${sections.contact.email}`}
                    className="flex items-center gap-3 text-sm sm:text-base md:text-lg text-gray-700 hover:text-blue-500 transition-colors"
                    aria-label={`Envoyer un email à Blueportel`}
                  >
                    <Mail className="w-5 h-5 text-blue-500" aria-hidden="true" />
                    <span>📧 {sections.contact.email}</span>
                  </Link>
                  <div className="flex items-start gap-3 text-sm sm:text-base md:text-lg text-gray-700">
                    <MapPin className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <p>📍 {sections.contact.address.name}</p>
                      <p>{sections.contact.address.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-4 sm:space-y-6">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black">
                {sections.legal.title}
              </h2>
              <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 sm:p-8">
                {sections.legal.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ))}
              </div>
            </section>

            <section className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 sm:p-8 mt-8 sm:mt-10">
              <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                {sections.summary.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                {sections.summary.text}
              </p>
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

