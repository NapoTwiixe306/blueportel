import type { TDMDictionary } from './types';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://blueportel.com';

const fr: TDMDictionary = {
  locale: 'fr',
  hero: {
    title: 'Politique relative au Text and Data Mining (TDM)',
    subtitle: 'Blueportel.fr – Location Mobil-home Prestige à Le Portel',
    breadcrumbCurrent: 'Politique TDM',
  },
  sections: {
    object: {
      title: '1. Objet de la présente politique',
      paragraphs: [
        "La présente page a pour objectif d'informer les utilisateurs et les opérateurs automatisés (robots, intelligences artificielles, outils de collecte de données, etc.) que <strong>Blueportel.fr se réserve expressément tous les droits relatifs aux techniques de Text and Data Mining (TDM)</strong>, conformément à l'article <strong>L.122-5-3 du Code de la propriété intellectuelle</strong>.",
        "En conséquence, toute reproduction, extraction ou réutilisation automatisée des textes, images, vidéos ou bases de données présents sur le site Blueportel.fr est <strong>strictement interdite sans autorisation écrite préalable</strong>.",
      ],
    },
    definition: {
      title: '2. Définition du TDM',
      paragraphs: [
        "Le <em>Text and Data Mining (TDM)</em> désigne toute technique visant à analyser de manière automatisée des contenus numériques (textes, images, sons, vidéos, données, etc.) afin d'en extraire des informations, tendances ou modèles. Cette pratique inclut notamment les systèmes d'<strong>intelligence artificielle générative</strong>, les <strong>robots d'indexation étendue</strong> et les <strong>agents d'exploration de données</strong>.",
      ],
    },
    reservation: {
      title: '3. Réservation des droits',
      items: [
        "Blueportel se réserve expressément ses droits TDM sur l'ensemble des contenus du site ;",
        "Cette réserve est signalée dans les métadonnées du site (balises meta et fichier <code className=\"bg-gray-100 px-2 py-1 rounded\">tdmrep.json</code>) ;",
        "Toute utilisation automatisée des textes, visuels et données à des fins d'entraînement, d'extraction ou d'exploitation est interdite sans autorisation préalable.",
      ],
    },
    authorized: {
      title: '4. Utilisation autorisée',
      paragraphs: [
        "L'accès manuel et la consultation humaine des contenus du site Blueportel.fr sont <strong>libres et encouragés</strong> pour toute finalité d'information, de réservation ou de découverte touristique. Toute utilisation automatisée, partielle ou complète, à des fins de recherche, d'entraînement d'algorithmes ou de génération de contenus dérivés est <strong>soumise à autorisation</strong>.",
      ],
    },
    contact: {
      title: '5. Contact pour autorisation',
      paragraphs: [
        'Pour toute demande d\'exploitation, de citation ou de partenariat de contenu, merci de contacter :',
      ],
      email: 'info@blueportel.fr',
      address: {
        name: 'Blueportel – Mobil-home Prestige face à la mer',
        location: "Le Portel (Côte d'Opale), France",
      },
    },
    legal: {
      title: '6. Référence légale',
      paragraphs: [
        "Cette politique est établie en application de l'article <strong>L.122-5-3 du Code de la propriété intellectuelle</strong>, introduit par la directive européenne (UE) 2019/790 du 17 avril 2019 relative au droit d'auteur et aux droits voisins dans le marché unique numérique.",
      ],
    },
    summary: {
      title: 'Résumé :',
      text: "Blueportel.fr protège ses contenus (textes, images, visuels et données) contre le text and data mining non autorisé. Toute extraction ou utilisation automatisée est interdite sans accord préalable.",
    },
  },
  screenReader: {
    heading: 'Politique TDM Blueportel - Protection des contenus contre le Text and Data Mining',
    paragraphs: [
      "Blueportel se réserve expressément tous les droits relatifs aux techniques de Text and Data Mining (TDM) conformément à l'article L.122-5-3 du Code de la propriété intellectuelle. Toute extraction automatisée des contenus est interdite sans autorisation préalable.",
      "Politique de protection des contenus numériques contre l'extraction automatisée, l'entraînement d'algorithmes et la génération de contenus dérivés sans autorisation. Contact : info@blueportel.fr pour toute demande d'exploitation.",
    ],
  },
  structuredData: {
    breadcrumb: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Accueil',
          item: siteUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Politique TDM',
          item: `${siteUrl}/fr/pages/politique-tdm`,
        },
      ],
    },
    webPage: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Politique relative au Text and Data Mining (TDM)',
      description: 'Politique de protection des contenus contre le Text and Data Mining non autorisé',
      url: `${siteUrl}/fr/pages/politique-tdm`,
      inLanguage: 'fr-FR',
      isPartOf: {
        '@type': 'WebSite',
        name: 'Blueportel',
        url: siteUrl,
      },
    },
  },
};

export default fr;

