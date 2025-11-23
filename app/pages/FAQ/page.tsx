"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronUp, Phone, Mail } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://blueportel.com';

// Composant FAQ Item
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

export default function FAQPage() {
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

  // Données FAQ
  const faqData = [
    {
      id: "1",
      question: "Où se situe le mobil-home Blueportel ?",
      answer: (
        <>
          Blueportel se trouve à <strong>Le Portel</strong>, dans le <strong>Camping Le Phare d'Opale</strong>, sur la <strong>Côte d'Opale</strong>, à proximité de <strong>Boulogne-sur-Mer</strong>.<br />
          Il est installé sur la falaise, avec une <strong>vue directe sur la mer et les falaises anglaises</strong>.<br />
          La plage, le sentier du littoral et le centre du village sont accessibles à pied en quelques minutes.
        </>
      ),
    },
    {
      id: "2",
      question: "Combien de personnes peuvent séjourner à Blueportel ?",
      answer: (
        <>
          Le mobil-home Blueportel peut accueillir <strong>jusqu'à 6 personnes</strong> :<br />
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>1 chambre parentale avec lit double 160×190 et salle de bain privative,</li>
            <li>2 chambres avec lits jumeaux,</li>
            <li>1 seconde salle de bain et 2 toilettes.</li>
          </ul>
          Idéal pour les familles ou les couples recherchant le confort et l'espace.
        </>
      ),
    },
    {
      id: "3",
      question: "Le mobil-home dispose-t-il d'une vue sur la mer ?",
      answer: (
        <>
          Oui, la <strong>vue mer est directe depuis la terrasse couverte</strong> et le salon.<br />
          Vous profitez du lever du soleil sur l'horizon et, par temps clair, des <strong>falaises anglaises en face</strong>.
        </>
      ),
    },
    {
      id: "4",
      question: "Quels sont les équipements disponibles dans le mobil-home ?",
      answer: (
        <>
          Blueportel est équipé comme une vraie maison :<br />
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Cuisine complète (four, micro-ondes, plaque gaz, grand frigo, cafetière classique + Senseo)</li>
            <li>Smart TV</li>
            <li>Wifi haut débit (starlink)</li>
            <li>Vaisselle, couverts et ustensiles pour 6 personnes</li>
            <li>Salon et coin repas spacieux</li>
            <li>2 salles d'eau avec douche et lavabo</li>
            <li>Terrasse couverte de 12 m² avec salon de jardin et barbecue</li>
            <li>Parking privé pour 2 véhicules</li>
          </ul>
        </>
      ),
    },
    {
      id: "5",
      question: "Le wifi est-il disponible ?",
      answer: (
        <>
          Le <strong>wifi Starlink</strong> est en cours d'installation et sera disponible <strong>pour la saison 2026</strong>.<br />
          En attendant, la <strong>5G couvre parfaitement la zone</strong>, idéale pour le télétravail ou le streaming.
        </>
      ),
    },
    {
      id: "6",
      question: "Les animaux sont-ils acceptés ?",
      answer: (
        <>
          Oui nous acceptons <strong>un chien</strong>.
        </>
      ),
    },
    {
      id: "7",
      question: "Comment se déroule l'arrivée et le départ ?",
      answer: (
        <>
          Les arrivées se font entre <strong>14h et 18h</strong>, accueillies par <strong>Isabelle</strong>, notre hôtesse sur place.<br />
          Un <strong>dépôt de garantie de 70 €</strong> est demandé à l'arrivée (nettoyage).<br />
          Les départs se font avant <strong>11h</strong>.<br />
          Toutes les informations pratiques vous sont envoyées la semaine précédant votre séjour.
        </>
      ),
    },
    {
      id: "8",
      question: "Quelles activités peut-on faire autour de Blueportel ?",
      answer: (
        <>
          À pied, découvrez la <strong>plage du Portel</strong>, le <strong>sentier du littoral</strong>, le <strong>Fort de l'Heurt</strong>, ou encore les <strong>falaises du Mont de Couppes</strong>.<br />
          A la base de loisir, toutes les activités nautiques sont possibles.<br />
          A côté de l'intermarché il y a un laser game et des salles de jeux.<br />
          À 10 minutes en voiture, visitez <strong>Nausicaá</strong> à Boulogne-sur-Mer, les marchés locaux, ou profitez d'une soirée dans les brasseries de la Côte d'Opale.
        </>
      ),
    },
    {
      id: "9",
      question: "Comment réserver au meilleur tarif ?",
      answer: (
        <>
          Le meilleur tarif est toujours sur le <strong>site officiel blueportel.fr</strong>.<br />
          Vous pouvez aussi réserver via <strong>Booking.com</strong> ou <strong>Airbnb</strong>, mais les frais de service y sont plus élevés.<br />
          Nous faisons régulièrement des promotions, tenez-vous informé par notre <strong>page Facebook</strong>.
        </>
      ),
    },
    {
      id: "10",
      question: "Quand ouvre la saison 2026 ?",
      answer: (
        <>
          Blueportel ouvre du <strong>20 février au 12 novembre 2026</strong>.<br />
          Les réservations sont déjà possibles pour toute la saison.
        </>
      ),
    },
  ];

  // Versions textuelles des réponses pour le schéma JSON-LD
  const faqTextAnswers: Record<string, string> = {
    "1": "Blueportel se trouve à Le Portel, dans le Camping Le Phare d'Opale, sur la Côte d'Opale, à proximité de Boulogne-sur-Mer. Il est installé sur la falaise, avec une vue directe sur la mer et les falaises anglaises. La plage, le sentier du littoral et le centre du village sont accessibles à pied en quelques minutes.",
    "2": "Le mobil-home Blueportel peut accueillir jusqu'à 6 personnes : 1 chambre parentale avec lit double 160×190 et salle de bain privative, 2 chambres avec lits jumeaux, 1 seconde salle de bain et 2 toilettes. Idéal pour les familles ou les couples recherchant le confort et l'espace.",
    "3": "Oui, la vue mer est directe depuis la terrasse couverte et le salon. Vous profitez du lever du soleil sur l'horizon et, par temps clair, des falaises anglaises en face.",
    "4": "Blueportel est équipé comme une vraie maison : Cuisine complète (four, micro-ondes, plaque gaz, grand frigo, cafetière classique + Senseo), Smart TV, Wifi haut débit (starlink), Vaisselle, couverts et ustensiles pour 6 personnes, Salon et coin repas spacieux, 2 salles d'eau avec douche et lavabo, Terrasse couverte de 12 m² avec salon de jardin et barbecue, Parking privé pour 2 véhicules.",
    "5": "Le wifi Starlink est en cours d'installation et sera disponible pour la saison 2026. En attendant, la 5G couvre parfaitement la zone, idéale pour le télétravail ou le streaming.",
    "6": "Oui nous acceptons un chien.",
    "7": "Les arrivées se font entre 14h et 18h, accueillies par Isabelle, notre hôtesse sur place. Un dépôt de garantie de 70 € est demandé à l'arrivée (nettoyage). Les départs se font avant 11h. Toutes les informations pratiques vous sont envoyées la semaine précédant votre séjour.",
    "8": "À pied, découvrez la plage du Portel, le sentier du littoral, le Fort de l'Heurt, ou encore les falaises du Mont de Couppes. A la base de loisir, toutes les activités nautiques sont possibles. A côté de l'intermarché il y a un laser game et des salles de jeux. À 10 minutes en voiture, visitez Nausicaá à Boulogne-sur-Mer, les marchés locaux, ou profitez d'une soirée dans les brasseries de la Côte d'Opale.",
    "9": "Le meilleur tarif est toujours sur le site officiel blueportel.fr. Vous pouvez aussi réserver via Booking.com ou Airbnb, mais les frais de service y sont plus élevés. Nous faisons régulièrement des promotions, tenez-vous informé par notre page Facebook.",
    "10": "Blueportel ouvre du 20 février au 12 novembre 2026. Les réservations sont déjà possibles pour toute la saison.",
  };

  // Schéma FAQPage pour SEO
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

  // Schéma BreadcrumbList
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
        "name": "Infos / FAQ",
        "item": `${siteUrl}/pages/FAQ`
      }
    ]
  };

  // Schéma Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Blueportel",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "description": "Location de mobil-home prestige face à la mer au Portel sur la Côte d'Opale",
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

  return (
    <>
      {/* Structured Data JSON-LD pour SEO */}
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

      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-white w-full overflow-x-hidden">
        <main className="flex min-h-screen w-full max-w-7xl flex-col items-center py-6 px-3 sm:py-8 sm:px-4 md:py-12 md:px-6 lg:py-16 lg:px-8 bg-white dark:bg-white">
          {/* Breadcrumbs SEO */}
          <nav aria-label="Fil d'Ariane" className="w-full max-w-7xl mb-4 sm:mb-6">
            <ol className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 px-3 sm:px-4">
              <li>
                <Link href="/" className="hover:text-blue-500 transition-colors">Accueil</Link>
              </li>
              <li aria-hidden="true" className="text-gray-400">/</li>
              <li className="text-gray-900 font-medium" aria-current="page">Infos / FAQ</li>
            </ol>
          </nav>

          {/* Titre principal */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-black text-center max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl leading-tight px-3 sm:px-4 md:px-6 mb-3 sm:mb-4 md:mb-6">
            Infos / <span className="text-blue-500 font-bold">FAQ</span>
          </h1>
          
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 text-center font-bold mb-4 sm:mb-6 md:mb-8 lg:mb-10 px-3 sm:px-4 md:px-6">
            Questions fréquentes sur la location de mobil-home face à la mer au Portel
          </p>

          {/* Contenu SEO caché */}
          <div className="sr-only">
            <h2>FAQ Blueportel - Questions fréquentes sur la location mobil-home face à la mer</h2>
            <p>
              Trouvez toutes les réponses à vos questions sur la location de mobil-home Blueportel au Portel, 
              sur la Côte d'Opale. Mobil-home 3 chambres face à la mer avec vue panoramique, accès direct plage, 
              terrasse couverte. Réservez votre séjour dès maintenant.
            </p>
            <p>
              Blueportel propose la location de mobil-home prestige face à la mer au Portel. 
              Mobil-home 6 personnes avec 3 chambres, vue mer panoramique, terrasse couverte de 12 m², 
              wifi Starlink, parking privé. Location vacances mobil-home haut de gamme à partir de 90€ par nuit.
            </p>
          </div>

          {/* Section FAQ */}
          <section className="w-full max-w-5xl mx-auto px-3 sm:px-4 md:px-6 mb-8 sm:mb-12" aria-label="Questions fréquentes">
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

          {/* Section Contact */}
          <section className="w-full max-w-5xl mx-auto px-3 sm:px-4 md:px-6 mb-8 sm:mb-12" aria-label="Contact">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-xl p-6 sm:p-8 md:p-10 text-white">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center">
                Vous avez d'autres questions ?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-blue-50 mb-6 sm:mb-8 text-center max-w-2xl mx-auto">
                Notre équipe est à votre disposition pour répondre à toutes vos questions sur la location 
                de mobil-home face à la mer au Portel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                <a
                  href="tel:+32488832091"
                  className="flex items-center gap-2 bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors text-sm sm:text-base"
                  aria-label="Appeler Blueportel"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  +32 488 83 20 91
                </a>
                <a
                  href="mailto:infos@blueportel.fr"
                  className="flex items-center gap-2 bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors text-sm sm:text-base"
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
            <h2>FAQ Location Mobil-Home Face à la Mer - Blueportel Le Portel</h2>
            <p>
              Questions fréquentes sur la location de mobil-home Blueportel au Portel, Côte d'Opale. 
              Mobil-home 3 chambres pour 6 personnes avec vue mer panoramique, terrasse couverte, 
              accès direct plage. Réponses à toutes vos questions sur la réservation, les équipements, 
              la localisation et les activités autour du mobil-home.
            </p>
            <h3>Localisation du mobil-home Blueportel</h3>
            <p>
              Le mobil-home Blueportel se situe au Portel, dans le Camping Le Phare d'Opale, 
              sur la Côte d'Opale, à proximité de Boulogne-sur-Mer. Vue directe sur la mer et 
              les falaises anglaises. Accès à pied à la plage, au sentier du littoral et au centre du village.
            </p>
            <h3>Capacité et équipements du mobil-home</h3>
            <p>
              Mobil-home 6 personnes avec 3 chambres : 1 chambre parentale avec lit double et salle de bain privative, 
              2 chambres avec lits jumeaux, 2 salles de bain, 2 toilettes. Cuisine complète, smart TV, wifi Starlink, 
              terrasse couverte de 12 m² avec vue mer, parking privé pour 2 véhicules.
            </p>
            <h3>Réservation et tarifs</h3>
            <p>
              Réservez au meilleur tarif sur le site officiel blueportel.fr. Saison 2026 du 20 février au 12 novembre. 
              Arrivées entre 14h et 18h, départs avant 11h. Dépôt de garantie de 70€ demandé à l'arrivée.
            </p>
            <h3>Activités autour de Blueportel</h3>
            <p>
              Plage du Portel, sentier du littoral, Fort de l'Heurt, falaises du Mont de Couppes, activités nautiques, 
              laser game. À 10 minutes : Nausicaá à Boulogne-sur-Mer, marchés locaux, brasseries de la Côte d'Opale.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
