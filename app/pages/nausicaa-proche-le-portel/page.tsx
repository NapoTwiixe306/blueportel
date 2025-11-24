"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronUp, Car, Bus, MapPin, Clock, Phone, Mail, Waves, Home as HomeIcon, Star } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://blueportel.com';

interface FAQItemProps {
  question: string;
  answer: string | React.ReactNode;
  id: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, id, isOpen, onToggle }: FAQItemProps) {
  return (
    <article className="border-b border-gray-200 last:border-b-0 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 sm:py-5 md:py-6 px-4 sm:px-6 text-left hover:bg-gray-50 transition-colors duration-200"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${id}`}
      >
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 pr-4">
          {question}
        </h3>
        <div className={`flex-shrink-0 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" aria-hidden="true" />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div
          id={`faq-answer-${id}`}
          className={`px-4 sm:px-6 pb-4 sm:pb-5 md:pb-6 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed transform transition-all duration-300 ease-in-out ${
            isOpen ? 'translate-y-0' : '-translate-y-4'
          }`}
          role="region"
          aria-labelledby={`faq-question-${id}`}
        >
          {typeof answer === 'string' ? (
            <div dangerouslySetInnerHTML={{ __html: answer.replace(/\n/g, '<br />') }} />
          ) : (
            answer
          )}
        </div>
      </div>
    </article>
  );
}

export default function NausicaaPage() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const faqData = [
    {
      id: "1",
      question: "À quelle distance sommes-nous de Nausicaá ?",
      answer: (
        <>
          Environ <strong>6 km</strong> — comptez <strong>~10 min</strong> en voiture selon la circulation.
        </>
      ),
    },
    {
      id: "2",
      question: "Y a-t-il des transports en commun ?",
      answer: (
        <>
          Oui, un bus relie Le Portel à Nausicaá en <strong>~24 min</strong>, avec une fréquence horaire (variables selon la période).
        </>
      ),
    },
    {
      id: "3",
      question: "Quelles sont les heures d'ouverture de Nausicaá ?",
      answer: (
        <>
          En général <strong>09:30–18:30</strong> ; merci de vérifier les éventuels ajustements saisonniers sur le{" "}
          <Link
            href="https://www.nausicaa.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 underline"
          >
            site officiel de Nausicaá
          </Link>
          .
        </>
      ),
    },
    {
      id: "4",
      question: "Faut-il réserver les billets pour Nausicaá à l'avance ?",
      answer: (
        <>
          Il est recommandé de <strong>réserver en ligne</strong> pour éviter l'attente, surtout en période de forte affluence. Consultez le{" "}
          <Link
            href="https://www.nausicaa.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 underline"
          >
            site officiel de Nausicaá
          </Link>{" "}
          pour les billets et tarifs.
        </>
      ),
    },
  ];

  // Versions textuelles des réponses pour le schéma JSON-LD
  const faqTextAnswers: Record<string, string> = {
    "1": "Environ 6 km — comptez ~10 min en voiture selon la circulation.",
    "2": "Oui, un bus relie Le Portel à Nausicaá en ~24 min, avec une fréquence horaire (variables selon la période).",
    "3": "En général 09:30–18:30 ; merci de vérifier les éventuels ajustements saisonniers sur le site officiel de Nausicaá.",
    "4": "Il est recommandé de réserver en ligne pour éviter l'attente, surtout en période de forte affluence. Consultez le site officiel de Nausicaá pour les billets et tarifs.",
  };

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faqTextAnswers[item.id] || ""
      }
    }))
  };

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
        "name": "Nausicaá",
        "item": `${siteUrl}/pages/nausicaa-proche-le-portel`
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Blueportel",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "description": "Location de mobil-home prestige face à la mer au Portel sur la Côte d'Opale, proche de Nausicaá",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+32488832091",
      "contactType": "Customer Service",
      "availableLanguage": ["French"],
      "email": "infos@blueportel.fr"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "rue du Vinâve 32",
      "addressLocality": "Liers",
      "addressCountry": "BE",
      "postalCode": "4042"
    }
  };

  const touristAttractionSchema = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": "Nausicaá - Centre National de la Mer",
    "description": "Nausicaá est le plus grand aquarium d'Europe, situé à Boulogne-sur-Mer",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Boulevard Sainte-Beuve",
      "addressLocality": "Boulogne-sur-Mer",
      "addressRegion": "Hauts-de-France",
      "postalCode": "62200",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 50.7264,
      "longitude": 1.5897
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttractionSchema) }}
      />

      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-white w-full overflow-x-hidden">
        <main className="flex min-h-screen w-full max-w-7xl flex-col items-center py-6 px-3 sm:py-8 sm:px-4 md:py-12 md:px-6 lg:py-16 lg:px-8 bg-white dark:bg-white">
          <nav aria-label="Fil d'Ariane" className="w-full max-w-7xl mb-4 sm:mb-6">
            <ol className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 px-3 sm:px-4">
              <li>
                <Link href="/" className="hover:text-blue-500 transition-colors">Accueil</Link>
              </li>
              <li aria-hidden="true" className="text-gray-400">/</li>
              <li className="text-gray-900 font-medium" aria-current="page">Nausicaá</li>
            </ol>
          </nav>

          {/* Titre principal */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-black text-center max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl leading-tight px-3 sm:px-4 md:px-6 mb-3 sm:mb-4 md:mb-6">
            Location de mobil-home à Le Portel — à <span className="text-blue-500 font-bold">~10 min de Nausicaá</span>
          </h1>
          
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 text-center font-bold mb-4 sm:mb-6 md:mb-8 lg:mb-10 px-3 sm:px-4 md:px-6">
            Mobil-Home 3 Chambres • Vue Mer Panoramique • Proche Nausicaá (Boulogne-sur-Mer)
          </p>

          <div className="sr-only">
            <h2>Location mobil-home proche Nausicaá - Blueportel Le Portel</h2>
            <p>
              Bienvenue chez Blueportel : votre mobil-home tout confort avec vue mer, 3 chambres et 2 salles de bain, 
              idéal pour découvrir Nausicaá – Centre National de la Mer en famille. L'aquarium se situe à environ 6 km d'ici, 
              soit ~10 minutes en voiture selon la circulation.
            </p>
            <p>
              Blueportel propose la location de mobil-home prestige face à la mer au Portel, à proximité de Nausicaá à Boulogne-sur-Mer. 
              Mobil-home 6 personnes avec 3 chambres, vue mer panoramique, terrasse couverte de 12 m², 
              wifi Starlink, parking privé. Location vacances mobil-home haut de gamme à partir de 90€ par nuit.
            </p>
          </div>

          {/* Section Hero */}
          <section className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 mb-8 sm:mb-12" aria-label="Introduction">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-xl p-6 sm:p-8 md:p-10 text-white mb-6 sm:mb-8">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-50 leading-relaxed text-center max-w-4xl mx-auto">
                Bienvenue chez <strong>Blueportel</strong> : votre mobil-home tout confort avec <strong>vue mer</strong>, 
                <strong>3 chambres</strong> et <strong>2 salles de bain</strong>, idéal pour découvrir 
                <strong> Nausicaá – Centre National de la Mer</strong> en famille. L'aquarium se situe à 
                <strong>environ 6 km</strong> d'ici, soit <strong>~10 minutes en voiture</strong> selon la circulation.
              </p>
            </div>
          </section>

          {/* Section Pourquoi choisir Blueportel */}
          <section className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 mb-8 sm:mb-12" aria-label="Pourquoi choisir Blueportel">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black text-center mb-4 sm:mb-6 md:mb-8">
              Pourquoi choisir <span className="text-blue-500">Blueportel</span> pour votre visite de Nausicaá ?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
              <article className="bg-gray-50 rounded-lg p-4 sm:p-6 md:p-8 shadow-md">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <HomeIcon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" aria-hidden="true" />
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">Confort & espace</h3>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  <strong>3 chambres</strong> dont une suite parentale, <strong>2 salles de bain</strong>, cuisine équipée, 
                  climatisation/chauffage, jeux de société — parfait pour <strong>4 à 6 personnes</strong>.
                </p>
              </article>

              <article className="bg-gray-50 rounded-lg p-4 sm:p-6 md:p-8 shadow-md">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <Waves className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" aria-hidden="true" />
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">Grande terrasse vue mer</h3>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  <strong>12 m² couverts</strong>, idéale pour le petit-déjeuner ou l'apéro au coucher du soleil, même en mi-saison.
                </p>
              </article>

              <article className="bg-gray-50 rounded-lg p-4 sm:p-6 md:p-8 shadow-md">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" aria-hidden="true" />
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">Localisation pratique</h3>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  Situé à <strong>Le Portel</strong>, au <em>Camping du Phare d'Opale</em> (2 rue de la Mer, 62480 Le Portel), 
                  vous rejoignez facilement Boulogne-sur-Mer et Nausicaá.
                </p>
              </article>
            </div>
          </section>

          {/* Section Accès à Nausicaá */}
          <section className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 mb-8 sm:mb-12" aria-label="Accéder à Nausicaá">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black text-center mb-4 sm:mb-6 md:mb-8">
              Accéder à <span className="text-blue-500">Nausicaá</span> depuis Blueportel
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <article className="bg-white border-2 border-blue-200 rounded-lg p-4 sm:p-6 md:p-8 shadow-md">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <Car className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" aria-hidden="true" />
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">En voiture (~10 min)</h3>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-2">
                  Trajet direct le long du littoral jusqu'au Boulevard Sainte-Beuve (env. <strong>6 km</strong>). 
                  Parkings à proximité de l'aquarium.
                </p>
              </article>

              <article className="bg-white border-2 border-blue-200 rounded-lg p-4 sm:p-6 md:p-8 shadow-md">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <Bus className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" aria-hidden="true" />
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">En bus (~24 min)</h3>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-2">
                  Des lignes locales relient Le Portel à Nausicaá (service horaire, arrêt "Nausicaá"). 
                  Renseignez-vous sur les horaires en vigueur.
                </p>
              </article>

              <article className="bg-white border-2 border-blue-200 rounded-lg p-4 sm:p-6 md:p-8 shadow-md">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" aria-hidden="true" />
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">À pied / à vélo</h3>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-2">
                  Pour les marcheurs, la balade côtière entre Le Portel et Boulogne-sur-Mer est superbe ; 
                  prévoyez davantage de temps et un équipement adapté (météo changeante).
                </p>
              </article>
            </div>
          </section>

          {/* Section Infos pratiques */}
          <section className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 mb-8 sm:mb-12" aria-label="Infos pratiques">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black text-center mb-4 sm:mb-6 md:mb-8">
              Infos pratiques pour votre visite
            </h2>

            <div className="bg-gray-50 rounded-lg p-4 sm:p-6 md:p-8 shadow-md max-w-4xl mx-auto">
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <strong className="text-sm sm:text-base md:text-lg text-gray-900">Horaires</strong>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700">
                      généralement <strong>09:30–18:30</strong> (variable selon saison et affluence). 
                      Vérifiez les horaires et accès mis à jour sur le{" "}
                      <Link
                        href="https://www.nausicaa.fr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-600 underline"
                      >
                        site officiel de Nausicaá
                      </Link>
                      .
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <strong className="text-sm sm:text-base md:text-lg text-gray-900">Billets</strong>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700">
                      pensez à <strong>réserver en ligne</strong> pour éviter l'attente (voir{" "}
                      <Link
                        href="https://www.nausicaa.fr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-600 underline"
                      >
                        site officiel de Nausicaá
                      </Link>
                      ).
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <strong className="text-sm sm:text-base md:text-lg text-gray-900">Adresse</strong>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700">
                      Boulevard Sainte-Beuve, 62200 Boulogne-sur-Mer.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Section FAQ */}
          <section className="w-full max-w-5xl mx-auto px-3 sm:px-4 md:px-6 mb-8 sm:mb-12" aria-label="FAQ Nausicaá">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black text-center mb-4 sm:mb-6 md:mb-8">
              FAQ — <span className="text-blue-500">Blueportel</span> x Nausicaá
            </h2>
            
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
              {faqData.map((item) => (
                <FAQItem
                  key={item.id}
                  id={item.id}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openItems.has(item.id)}
                  onToggle={() => toggleItem(item.id)}
                />
              ))}
            </div>
          </section>

          {/* Section CTA */}
          <section className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 mb-8 sm:mb-12" aria-label="Réservation">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-xl p-6 sm:p-8 md:p-10 text-white">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center">
                Prêts à plonger ?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-blue-50 mb-6 sm:mb-8 text-center max-w-2xl mx-auto">
                Entre <strong>Nausicaá</strong>, les plages de Le Portel et les falaises de la Côte d'Opale, 
                Blueportel est votre camp de base idéal pour un séjour marin réussi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                <Link
                  href="https://checkout.lodgify.com/fr/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1"
                  target="_blank"
                  rel="nofollow"
                  className="flex items-center gap-2 bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors text-sm sm:text-base whitespace-nowrap"
                  aria-label="Réserver votre mobil-home proche Nausicaá"
                >
                  Vérifier les disponibilités
                </Link>
                <Link
                  href="/pages/contact"
                  className="flex items-center gap-2 bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors text-sm sm:text-base whitespace-nowrap"
                  aria-label="Contacter Blueportel"
                >
                  Contact
                </Link>
              </div>
            </div>
          </section>

          {/* Section Contact */}
          <section className="w-full max-w-5xl mx-auto px-3 sm:px-4 md:px-6 mb-8 sm:mb-12" aria-label="Contact">
            <div className="bg-gray-50 rounded-lg shadow-md p-6 sm:p-8 md:p-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center">
                Vous avez des questions ?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8 text-center max-w-2xl mx-auto">
                Notre équipe est à votre disposition pour répondre à toutes vos questions sur la location 
                de mobil-home face à la mer au Portel, proche de Nausicaá.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                <a
                  href="tel:+32488832091"
                  className="flex items-center gap-2 bg-blue-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors text-sm sm:text-base"
                  aria-label="Appeler Blueportel"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  +32 488 83 20 91
                </a>
                <a
                  href="mailto:infos@blueportel.fr"
                  className="flex items-center gap-2 bg-blue-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors text-sm sm:text-base"
                  aria-label="Envoyer un email à Blueportel"
                >
                  <Mail className="w-5 h-5" aria-hidden="true" />
                  infos@blueportel.fr
                </a>
              </div>
            </div>
          </section>

          {/* Contenu SEO enrichi */}
          <div className="sr-only">
            <h2>Location Mobil-Home Proche Nausicaá - Blueportel Le Portel</h2>
            <p>
              Location mobil-home à Le Portel, à 10 min de Nausicaá (Boulogne-sur-Mer). 
              Mobil-home 3 chambres face à la mer avec vue panoramique, idéal pour découvrir Nausicaá – Centre National de la Mer en famille. 
              L'aquarium se situe à environ 6 km d'ici, soit ~10 minutes en voiture selon la circulation.
            </p>
            <h3>Pourquoi choisir Blueportel pour visiter Nausicaá ?</h3>
            <p>
              Blueportel propose la location de mobil-home prestige face à la mer au Portel, à proximité de Nausicaá à Boulogne-sur-Mer. 
              Mobil-home 6 personnes avec 3 chambres, vue mer panoramique, terrasse couverte de 12 m², 
              wifi Starlink, parking privé. Location vacances mobil-home haut de gamme à partir de 90€ par nuit.
            </p>
            <h3>Accès à Nausicaá depuis Blueportel</h3>
            <p>
              En voiture : trajet direct le long du littoral jusqu'au Boulevard Sainte-Beuve (env. 6 km, ~10 min). 
              En bus : lignes locales relient Le Portel à Nausicaá en ~24 min. 
              À pied/à vélo : balade côtière superbe entre Le Portel et Boulogne-sur-Mer.
            </p>
            <h3>Informations pratiques Nausicaá</h3>
            <p>
              Adresse : Boulevard Sainte-Beuve, 62200 Boulogne-sur-Mer. 
              Horaires généralement 09:30–18:30 (variable selon saison et affluence). 
              Il est recommandé de réserver les billets en ligne pour éviter l'attente.
            </p>
            <h3>Mobil-home face à la mer proche Nausicaá</h3>
            <p>
              Mobil-home 3 chambres avec suite parentale, 2 salles de bain, cuisine équipée, climatisation/chauffage, 
              grande terrasse couverte de 12 m² avec vue mer, idéale pour le petit-déjeuner ou l'apéro au coucher du soleil. 
              Situé au Camping du Phare d'Opale (2 rue de la Mer, 62480 Le Portel).
            </p>
          </div>
        </main>
      </div>
    </>
  );
}

