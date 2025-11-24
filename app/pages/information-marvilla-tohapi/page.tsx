import Link from "next/link";
import { AlertCircle, Info, MapPin } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://blueportel.com';

export default function InformationMarvillaTohapiPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Information Marvilla Tohapi",
        "item": `${siteUrl}/pages/information-marvilla-tohapi`
      }
    ]
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Information Marvilla Tohapi",
    "description": "Information importante concernant la location indépendante Blueportel au camping Le Phare d'Opale - Marvilla Tohapi",
    "url": `${siteUrl}/pages/information-marvilla-tohapi`,
    "inLanguage": "fr-FR",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Blueportel",
      "url": siteUrl
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-white w-full overflow-x-hidden">
        <main className="flex min-h-screen w-full max-w-4xl flex-col items-start py-6 px-3 sm:py-8 sm:px-4 md:py-12 md:px-6 lg:py-16 lg:px-8 bg-white dark:bg-white">
          <nav aria-label="Fil d'Ariane" className="w-full max-w-4xl mb-4 sm:mb-6">
            <ol className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 px-3 sm:px-4">
              <li>
                <Link href="/" className="hover:text-blue-500 transition-colors">Accueil</Link>
              </li>
              <li aria-hidden="true" className="text-gray-400">/</li>
              <li className="text-gray-900 font-medium" aria-current="page">Information Marvilla Tohapi</li>
            </ol>
          </nav>

          <div className="w-full max-w-4xl mx-auto space-y-6 sm:space-y-8 md:space-y-10 px-3 sm:px-4 md:px-6">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
              <div className="flex items-start gap-3 sm:gap-4">
                <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h2 className="text-base sm:text-lg md:text-xl font-bold text-yellow-900 mb-2 sm:mb-3">
                    Note importante :
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-yellow-800 leading-relaxed">
                    Ceci n'est <strong>pas</strong> une annonce Marvilla Tohapi.
                  </p>
                </div>
              </div>
            </div>

            <section className="space-y-4 sm:space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 sm:p-8 md:p-10">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <Info className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" aria-hidden="true" />
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">
                    Information Marvilla Tohapi
                  </h1>
                </div>

                <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  <p>
                    Le <strong>mobil-home Blueportel</strong> est une <em>location indépendante</em> située au sein du <strong>camping Le Phare d'Opale – Marvilla Tohapi</strong> à <strong>Le Portel</strong>, sur la <strong>Côte d'Opale</strong>. Il s'agit d'un hébergement personnel, non affilié à Marvilla ou Tohapi, offrant une <em>vue mer directe</em> et tout le confort d'un mobil-home premium.
                  </p>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 mt-6 sm:mt-8">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" aria-hidden="true" />
                      <div>
                        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                          Les marques citées (<strong>Marvilla</strong>, <strong>Tohapi</strong>) demeurent la propriété de leurs détenteurs respectifs. Leur mention n'implique aucun partenariat commercial, mais permet aux vacanciers de situer précisément le <strong>camping Le Phare d'Opale – Marvilla Tohapi</strong>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-blue-50 border border-blue-200 rounded-lg p-6 sm:p-8 mt-6 sm:mt-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                En résumé
              </h2>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold mt-1">•</span>
                  <span><strong>Blueportel</strong> est une location indépendante et personnelle</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold mt-1">•</span>
                  <span>Le mobil-home est situé au <strong>camping Le Phare d'Opale – Marvilla Tohapi</strong> à <strong>Le Portel</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold mt-1">•</span>
                  <span>Hébergement <strong>non affilié</strong> à Marvilla ou Tohapi</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold mt-1">•</span>
                  <span>Mobil-home premium avec <strong>vue mer directe</strong> sur la <strong>Côte d'Opale</strong></span>
                </li>
              </ul>
            </section>
          </div>

          <div className="sr-only">
            <h2>Information Marvilla Tohapi - Blueportel Location Indépendante</h2>
            <p>
              Blueportel est une location indépendante de mobil-home située au camping Le Phare d'Opale - Marvilla Tohapi 
              à Le Portel, sur la Côte d'Opale. Hébergement personnel non affilié à Marvilla ou Tohapi, 
              offrant une vue mer directe et tout le confort d'un mobil-home premium.
            </p>
            <p>
              Les marques Marvilla et Tohapi demeurent la propriété de leurs détenteurs respectifs. 
              Leur mention permet de situer précisément le camping Le Phare d'Opale - Marvilla Tohapi à Le Portel.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}

