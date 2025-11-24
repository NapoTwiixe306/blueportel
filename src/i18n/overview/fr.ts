import type { OverviewDictionary } from "./types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

export const frOverviewDictionary: OverviewDictionary = {
  locale: "fr",
  metadata: {
    title: "Vue d’ensemble Blueportel | Mobil-home prestige face à la mer",
    description:
      "Mobil-home premium de 42 m² à Le Portel : 3 chambres, 2 salles de bain, terrasse vue mer 12 m² et équipements haut de gamme pour 6 personnes.",
    alternates: {
      canonical: "/fr/pages/vue-densemble",
      languages: {
        "fr-FR": "/fr/pages/vue-densemble",
        "en-GB": "/en/pages/vue-densemble",
        "nl-NL": "/nl/pages/vue-densemble",
      },
    },
    openGraph: {
      title: "Blueportel – Mobil-home prestige face à la mer",
      description:
        "Vue d’ensemble du mobil-home Blueportel : terrasse, chambres lumineuses, cuisine équipée et prestations premium.",
      type: "website",
      url: `${siteUrl}/fr/pages/vue-densemble`,
    },
  },
  structuredData: {
    equipment: {
      "@context": "https://schema.org",
      "@type": "Accommodation",
      name: "Mobil-home Blueportel",
      description:
        "Mobil-home premium 3 chambres face à la mer au Portel, Côte d'Opale",
      url: `${siteUrl}/fr/pages/vue-densemble`,
      image: `${siteUrl}/galerie/blueportel-terrasse-ensoleillee.jpg`,
      occupancy: { "@type": "QuantitativeValue", maxValue: 6 },
      numberOfRooms: 3,
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Terrasse vue mer 12 m²" },
        { "@type": "LocationFeatureSpecification", name: "Climatisation réversible" },
        { "@type": "LocationFeatureSpecification", name: "Wi-Fi haut débit" },
        { "@type": "LocationFeatureSpecification", name: "Animaux acceptés après accord" },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Camping Le Phare d'Opale, 2 rue de la Mer",
        addressLocality: "Le Portel",
        postalCode: "62480",
        addressCountry: "FR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 50.7081,
        longitude: 1.5714,
      },
    },
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: `${siteUrl}/fr` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Vue d'ensemble",
          item: `${siteUrl}/fr/pages/vue-densemble`,
        },
      ],
    },
  },
  hero: {
    homeLabel: "Accueil",
    breadcrumbCurrent: "Vue d'ensemble",
    pretitle: "Mobil-home Blueportel • Côte d'Opale",
    title: "Blueportel – Mobil-home prestige face à la mer",
    description:
      "Mobil-home haut de gamme de 42 m² situé sur la falaise du Portel. Vue mer directe, terrasse couverte de 12 m², 3 chambres, 2 salles de bain et équipements premium pour 6 personnes.",
  },
  stayCard: {
    title: "Votre séjour bord de mer",
    description:
      "Profitez d’un séjour inoubliable face à la mer. Idéal pour les familles, couples ou amis qui recherchent calme, confort et nature.",
    bullets: [
      "Jusqu’à 6 invités • 3 chambres • 5 lits",
      "Arrivée 14h, départ 12h – accueil personnalisé",
      "Animaux autorisés après accord",
    ],
    cta: {
      primary: {
        label: "Réserver maintenant",
        href: "https://checkout.lodgify.com/fr/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1",
        rel: "nofollow",
      },
      secondary: { label: "Voir les photos", href: "/pages/galerie-photo" },
    },
  },
  heroImageAlt: "Terrasse couverte avec vue mer panoramique du mobil-home Blueportel",
  interior: {
    title: "À l’intérieur",
    items: [
      "Suite parentale avec salle de bain privative",
      "Deux chambres lits jumeaux + seconde salle de bain",
      "Salon convivial, banquette confortable et coin repas",
      "Cuisine équipée : plaque 4 feux, four, micro-ondes, cafetière, vaisselle complète",
      "Climatisation en été, chauffage pour les soirées fraîches",
    ],
  },
  exterior: {
    title: "À l’extérieur",
    items: [
      "Terrasse couverte de 12 m² avec vue mer panoramique",
      "Salon de jardin, transats et ambiance relaxante",
      "Front de mer, balade sur la falaise & accès plage",
      "Parking sur place et aire de jeux partagée",
    ],
  },
  highlights: [
    {
      icon: "beds",
      title: "3 chambres & 5 lits",
      description: "1 suite parentale + 2 chambres lits jumeaux avec literie hôtelière.",
    },
    {
      icon: "bath",
      title: "2 salles de bain",
      description: "Douche XXL, toilettes séparées et rangements pratiques.",
    },
    {
      icon: "terrace",
      title: "Terrasse couverte 12 m²",
      description: "Vue panoramique sur la mer, salon de jardin et transats.",
    },
    {
      icon: "kitchen",
      title: "Cuisine premium",
      description: "Four, micro-ondes, plaque 4 feux, frigo-congélateur, vaisselle complète.",
    },
  ],
  equipment: [
    {
      title: "Confort intérieur",
      items: [
        "Salon lumineux avec banquette d’angle et smart TV",
        "Espace repas pour 6 personnes",
        "Climatisation réversible + chauffage",
        "Wi-Fi haut débit et nombreux rangements",
      ],
    },
    {
      title: "Cuisine & buanderie",
      items: [
        "Cafetière filtre + Senseo",
        "Four traditionnel, micro-ondes et grille-pain",
        "Kit complet d’ustensiles et vaisselle",
        "Grand frigo-congélateur",
      ],
    },
    {
      title: "Extérieur & sécurité",
      items: [
        "Salon de jardin, transats et éclairage doux",
        "Parking privé et aire de jeux partagée",
        "Détecteurs de fumée / CO et extincteur",
        "Animaux acceptés après accord",
      ],
    },
  ],
  location: {
    title: "Emplacement privilégié",
    description:
      "Situé sur la falaise du Portel, au camping Le Phare d’Opale, à proximité immediate du phare, des commerces locaux et des sentiers côtiers. À 15 minutes de Boulogne-sur-Mer et de Nausicaá.",
  },
  policies: {
    title: "Règles & services",
    items: [
      "Ménage inclus, enfants bienvenus",
      "Animaux acceptés sur demande",
      "Accueil sur place et assistance personnalisée",
      "Arrivée 14h – départ 12h",
    ],
  },
  cta: {
    title: "Prêts à vivre l’expérience Blueportel ?",
    description:
      "Réservez votre mobil-home face à la mer ou contactez-nous pour une réservation personnalisée. Réponse rapide par téléphone ou email.",
    buttons: {
      primary: { label: "+32 488 83 20 91", href: "tel:+32488832091" },
      secondary: { label: "infos@blueportel.fr", href: "mailto:infos@blueportel.fr" },
    },
  },
  screenReader: {
    title: "Vue d’ensemble du mobil-home Blueportel",
    paragraphs: [
      "Mobil-home Blueportel de 42 m² situé sur la falaise du Portel, camping Le Phare d’Opale. 3 chambres, 5 lits, 2 salles de bain, cuisine équipée, climatisation, chauffage et Wi-Fi.",
      "Terrasse couverte de 12 m² avec vue panoramique sur la mer, parking, aire de jeux, animaux acceptés après accord, proximité commerces, plage et Nausicaá.",
    ],
  },
};

export default frOverviewDictionary;

