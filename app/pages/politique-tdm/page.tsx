import Link from "next/link";
import { Mail, MapPin, FileText, Shield, AlertTriangle } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://blueportel.vercel.app';

export default function PolitiqueTDMPage() {
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
        "name": "Politique TDM",
        "item": `${siteUrl}/pages/politique-tdm`
      }
    ]
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Politique relative au Text and Data Mining (TDM)",
    "description": "Politique de protection des contenus contre le Text and Data Mining non autorisé",
    "url": `${siteUrl}/pages/politique-tdm`,
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
              <li className="text-gray-900 font-medium" aria-current="page">Politique TDM</li>
            </ol>
          </nav>

          {/* Titre principal */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black max-w-full sm:max-w-2xl md:max-w-3xl leading-tight px-3 sm:px-4 md:px-6 mb-4 sm:mb-6">
            Politique relative au <span className="text-blue-500 font-bold" style={{ fontFamily: 'var(--font-gluten)' }}>Text and Data Mining</span> (TDM)
          </h1>
          
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 font-bold mb-8 sm:mb-10 md:mb-12 px-3 sm:px-4 md:px-6">
            Blueportel.fr – Location Mobil-home Prestige à Le Portel
          </p>

          <div className="w-full max-w-4xl mx-auto space-y-8 sm:space-y-10 md:space-y-12 px-3 sm:px-4 md:px-6">
            <section className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" aria-hidden="true" />
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black">
                  1. Objet de la présente politique
                </h2>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 sm:p-8">
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                  La présente page a pour objectif d'informer les utilisateurs et les opérateurs automatisés (robots, intelligences artificielles, outils de collecte de données, etc.) que <strong>Blueportel.fr se réserve expressément tous les droits relatifs aux techniques de Text and Data Mining (TDM)</strong>, conformément à l'article <strong>L.122-5-3 du Code de la propriété intellectuelle</strong>.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  En conséquence, toute reproduction, extraction ou réutilisation automatisée des textes, images, vidéos ou bases de données présents sur le site Blueportel.fr est <strong>strictement interdite sans autorisation écrite préalable</strong>.
                </p>
              </div>
            </section>

            <section className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" aria-hidden="true" />
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black">
                  2. Définition du TDM
                </h2>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 sm:p-8">
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  Le <em>Text and Data Mining (TDM)</em> désigne toute technique visant à analyser de manière automatisée des contenus numériques (textes, images, sons, vidéos, données, etc.) afin d'en extraire des informations, tendances ou modèles. Cette pratique inclut notamment les systèmes d'<strong>intelligence artificielle générative</strong>, les <strong>robots d'indexation étendue</strong> et les <strong>agents d'exploration de données</strong>.
                </p>
              </div>
            </section>

            <section className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" aria-hidden="true" />
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black">
                  3. Réservation des droits
                </h2>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 sm:p-8">
                <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 font-bold mt-1">•</span>
                    <span>Blueportel se réserve expressément ses droits TDM sur l'ensemble des contenus du site ;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 font-bold mt-1">•</span>
                    <span>Cette réserve est signalée dans les métadonnées du site (balises meta et fichier <code className="bg-gray-100 px-2 py-1 rounded">tdmrep.json</code>) ;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 font-bold mt-1">•</span>
                    <span>Toute utilisation automatisée des textes, visuels et données à des fins d'entraînement, d'extraction ou d'exploitation est interdite sans autorisation préalable.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="space-y-4 sm:space-y-6">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black">
                4. Utilisation autorisée
              </h2>
              <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 sm:p-8">
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                  L'accès manuel et la consultation humaine des contenus du site Blueportel.fr sont <strong>libres et encouragés</strong> pour toute finalité d'information, de réservation ou de découverte touristique. Toute utilisation automatisée, partielle ou complète, à des fins de recherche, d'entraînement d'algorithmes ou de génération de contenus dérivés est <strong>soumise à autorisation</strong>.
                </p>
              </div>
            </section>

            <section className="space-y-4 sm:space-y-6">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black">
                5. Contact pour autorisation
              </h2>
              <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 sm:p-8">
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                  Pour toute demande d'exploitation, de citation ou de partenariat de contenu, merci de contacter :
                </p>
                <div className="space-y-3">
                  <a
                    href="mailto:infos@blueportel.fr"
                    className="flex items-center gap-3 text-sm sm:text-base md:text-lg text-gray-700 hover:text-blue-500 transition-colors"
                    aria-label="Envoyer un email à Blueportel"
                  >
                    <Mail className="w-5 h-5 text-blue-500" aria-hidden="true" />
                    <span>📧 infos@blueportel.fr</span>
                  </a>
                  <div className="flex items-start gap-3 text-sm sm:text-base md:text-lg text-gray-700">
                    <MapPin className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <p>📍 Blueportel – Mobil-home Prestige face à la mer</p>
                      <p>Le Portel (Côte d'Opale), France</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-4 sm:space-y-6">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black">
                6. Référence légale
              </h2>
              <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 sm:p-8">
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  Cette politique est établie en application de l'article <strong>L.122-5-3 du Code de la propriété intellectuelle</strong>, introduit par la directive européenne (UE) 2019/790 du 17 avril 2019 relative au droit d'auteur et aux droits voisins dans le marché unique numérique.
                </p>
              </div>
            </section>

            <section className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 sm:p-8 mt-8 sm:mt-10">
              <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                Résumé :
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                Blueportel.fr protège ses contenus (textes, images, visuels et données) contre le text and data mining non autorisé. Toute extraction ou utilisation automatisée est interdite sans accord préalable.
              </p>
            </section>
          </div>

          <div className="sr-only">
            <h2>Politique TDM Blueportel - Protection des contenus contre le Text and Data Mining</h2>
            <p>
              Blueportel se réserve expressément tous les droits relatifs aux techniques de Text and Data Mining (TDM) 
              conformément à l'article L.122-5-3 du Code de la propriété intellectuelle. 
              Toute extraction automatisée des contenus est interdite sans autorisation préalable.
            </p>
            <p>
              Politique de protection des contenus numériques contre l'extraction automatisée, 
              l'entraînement d'algorithmes et la génération de contenus dérivés sans autorisation. 
              Contact : infos@blueportel.fr pour toute demande d'exploitation.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}

