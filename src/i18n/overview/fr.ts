import type { OverviewDictionary } from "./types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.fr";

export const frOverviewDictionary: OverviewDictionary = {
  locale: "fr",
  metadata: {
    title: "Location Mobil-Home Le Portel | Vue Mer 3 Chambres Côte d'Opale",
    description:
      "Réservez votre mobil-home de prestige à Le Portel (62). 3 chambres, 6 pers, vue mer panoramique sur la Côte d'Opale. Proche Nausicaá. Confort premium garanti.",
    alternates: {
      canonical: "https://blueportel.fr/fr/location-mobil-home-le-portel",
      languages: {
        "fr-FR": "https://blueportel.fr/fr/location-mobil-home-le-portel",
        "en-GB": "https://blueportel.com/en/mobile-home-rental-le-portel",
        "x-default": "https://blueportel.fr/fr/location-mobil-home-le-portel",
      },
    },
    openGraph: {
      title: "Location Mobil-Home Le Portel | Vue Mer Panoramique | Blueportel",
      description:
        "Vivez l'expérience Blueportel : location mobil-home 3 chambres face à la mer au Portel. Idéal famille, confort luxe sur la Côte d'Opale.",
      type: "website",
      url: `${siteUrl}/fr/location-mobil-home-le-portel`,
    },
  },
  structuredData: {
    equipment: {
      "@context": "https://schema.org",
      "@type": "Accommodation",
      name: "Mobil-home Blueportel",
      description:
        "Mobil-home premium 3 chambres face à la mer au Portel, Côte d'Opale",
      url: `${siteUrl}/fr/location-mobil-home-le-portel`,
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
          name: "Location Mobil-Home Le Portel",
          item: `${siteUrl}/fr/location-mobil-home-le-portel`,
        },
      ],
    },
    lodgingBusiness: {
      "@context": "https://schema.org",
      "@type": "LodgingBusiness",
      "name": "Blueportel - Location Mobil-Home Le Portel",
      "image": `${siteUrl}/galerie/blueportel-terrasse-ensoleillee.jpg`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Camping Le Phare d'Opale, 2 rue de la Mer",
        "addressLocality": "Le Portel",
        "postalCode": "62480",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 50.7081,
        "longitude": 1.5714
      },
      "url": `${siteUrl}/fr/location-mobil-home-le-portel`,
      "telephone": "+32488832091",
      "priceRange": "€€",
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Vue Mer" },
        { "@type": "LocationFeatureSpecification", "name": "3 Chambres" },
        { "@type": "LocationFeatureSpecification", "name": "Cuisine équipée" },
        { "@type": "LocationFeatureSpecification", "name": "Terrasse" }
      ]
    },
    product: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Séjour Mobil-Home Prestige Le Portel",
      "description": "Location saisonnière d'un mobil-home de 42m² avec 3 chambres et terrasse vue mer panoramique.",
      "brand": {
        "@type": "Brand",
        "name": "Blueportel"
      },
      "offers": {
        "@type": "Offer",
        "url": `${siteUrl}/fr/location-mobil-home-le-portel`,
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock"
      }
    },
    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Combien de personnes peuvent séjourner dans le mobil-home ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le mobil-home Blueportel peut accueillir jusqu'à 6 personnes grâce à ses 3 chambres spacieuses."
          }
        },
        {
          "@type": "Question",
          "name": "Le mobil-home a-t-il une vue sur la mer ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, notre mobil-home bénéficie d'une vue mer panoramique exceptionnelle depuis la pièce de vie et sa terrasse de 12 m²."
          }
        },
        {
          "@type": "Question",
          "name": "Les animaux sont-ils acceptés ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Les animaux de compagnie sont les bienvenus après accord préalable de notre part."
          }
        }
      ]
    }
  },
  hero: {
    homeLabel: "Accueil",
    breadcrumbCurrent: "Location Mobil-Home Le Portel",
    pretitle: "Mobil-home Blueportel • Côte d'Opale",
    title: "Location Mobil-Home Le Portel : Votre escapade vue mer sur la Côte d'Opale",
    description:
      "Découvrez notre mobil-home premium de 42 m² situé sur les falaises du Portel. Profitez d'une vue mer imprenable, de 3 chambres tout confort et d'une terrasse couverte de 12 m² pour un séjour inoubliable jusqu'à 6 personnes.",
  },
  stayCard: {
    title: "Réservez votre séjour au Portel",
    description:
      "Offrez-vous le luxe d'un mobil-home 3 chambres face à la Manche. Entre nature sauvage et confort moderne, Blueportel est le point de départ idéal pour explorer la Côte d'Opale.",
    bullets: [
      "Capacité 6 personnes • 3 chambres • 5 lits confort",
      "Arrivée dès 14h • Départ jusqu'à 12h • Accueil VIP",
      "Localisation premium : Camping Le Phare d'Opale",
    ],
    cta: {
      primary: {
        label: "Vérifier la disponibilité",
        href: "https://checkout.lodgify.com/fr/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1",
        rel: "nofollow",
      },
      secondary: { label: "Galerie Photos", href: "/galerie-photo" },
    },
  },
  heroImageAlt: "Vue mer panoramique depuis la terrasse du mobil-home Blueportel au Portel",
  interior: {
    title: "Équipements Intérieurs Premium",
    items: [
      "Suite parentale avec salle d'eau privative et lit double",
      "Deux chambres avec lits jumeaux (4 couchages supplémentaires)",
      "Vaste séjour lumineux avec banquette panoramique et TV",
      "Cuisine full équipée : four, micro-ondes, grand frigo, cafetières",
      "Climatisation réversible et isolation renforcée 4 saisons",
    ],
  },
  exterior: {
    title: "Espace Extérieur & Environnement",
    items: [
      "Terrasse couverte de 12 m² avec vue directe sur mer et falaises",
      "Mobilier de jardin complet, transats pour la détente",
      "Emplacement privilégié sur la falaise, calme et sans vis-à-vis direct",
      "Accès direct aux sentiers de randonnée et à la plage",
    ],
  },
  highlights: [
    {
      icon: "beds",
      title: "3 Chambres Réelles",
      description: "Un espace de vie optimisé pour accueillir confortablement 6 adultes ou une famille.",
    },
    {
      icon: "bath",
      title: "2 Salles de Bain",
      description: "Plus d'attente le matin : profitez de deux points d'eau modernes et fonctionnels.",
    },
    {
      icon: "terrace",
      title: "Terrasse Vue Mer",
      description: "Le clou du spectacle : 12 m² suspendus face à la Manche pour vos repas et apéritifs.",
    },
    {
      icon: "kitchen",
      title: "Cuisine Comme à la Maison",
      description: "Tout le nécessaire pour cuisiner les produits locaux de la Côte d'Opale.",
    },
  ],
  equipment: [
    {
      title: "Confort & Technologie",
      items: [
        "Wi-Fi haut débit gratuit",
        "Smart TV avec chaînes internationales",
        "Climatisation pour les étés chauds",
        "Chauffage central performant",
      ],
    },
    {
      title: "Cuisine Équipée",
      items: [
        "Plaque de cuisson 4 feux & hotte",
        "Grand four & micro-ondes",
        "Réfrigérateur-congélateur grande capacité",
        "Lave-vaisselle (selon saison)",
      ],
    },
    {
      title: "Services Inclus",
      items: [
        "Parking privé devant le mobil-home",
        "Charges incluses (eau, gaz, électricité)",
        "Assistance personnalisée 24/7",
        "Option ménage de fin de séjour",
      ],
    },
  ],
  location: {
    title: "Localisation Stratégique au Portel",
    description:
      "Notre mobil-home est situé au sein du prestigieux camping Le Phare d'Opale. À seulement quelques minutes à pied du centre du Portel, de ses commerces et de son marché traditionnel. La situation sur la falaise garantit un calme absolu, loin de l'agitation, tout en étant à 15 minutes de Nausicaá et de Boulogne-sur-Mer.",
  },
  policies: {
    title: "Conditions de Réservation",
    items: [
      "Réservation simplifiée via notre moteur sécurisé",
      "Caution demandée à l'arrivée",
      "Location non-fumeur en intérieur",
      "Animaux autorisés sur demande spécifique",
    ],
  },
  cta: {
    title: "Réservez votre Mobil-Home au Portel aujourd'hui",
    description:
      "Ne manquez pas l'opportunité de séjourner dans l'un des mobil-homes les plus prisés de la Côte d'Opale. Contactez-nous pour toute question.",
    buttons: {
      primary: { label: "Appeler le +32 488 83 20 91", href: "tel:+32488832091" },
      secondary: { label: "Envoyer un Email", href: "mailto:info@blueportel.fr" },
    },
  },
  seoContent: [
    {
      title: "Location Mobil-Home au Portel : Le Choix du Confort et de la Vue Mer",
      content: `Vous recherchez la location de mobil-home idéale au Portel ? Bienvenue chez Blueportel, votre adresse de référence pour un séjour d'exception sur la Côte d'Opale. Notre mobil-home premium, niché sur les hauteurs des falaises boulonnaises, redéfinit le camping haut de gamme. Ici, pas de compromis : vous bénéficiez du confort d'une véritable maison tout en profitant de la liberté du plein air.

      Le Portel est une destination authentique, prisée pour ses plages de sable fin et son atmosphère familiale. En choisissant notre mobil-home de 3 chambres, vous vous assurez un espace de vie généreux de 42 m², parfaitement adapté pour accueillir jusqu'à 6 personnes. Que vous soyez en famille ou entre amis, chacun disposera de son intimité grâce à une distribution intelligente des pièces et à la présence de deux salles de bain privatives.`
    },
    {
      title: "Un Mobil-Home avec 3 Chambres pour Toute la Famille",
      content: `La rareté de notre offre réside dans ses 3 véritables chambres. Contrairement aux hébergements classiques souvent limités, Blueportel a été conçu pour les familles nombreuses ou les groupes d'amis. La suite parentale offre un lit double confortable avec un accès direct à sa salle d'eau, tandis que les deux autres chambres disposent de lits jumeaux modulables.

      Chaque chambre a été pensée pour maximiser le rangement et le repos. Les matelas de qualité hôtelière vous garantissent des nuits paisibles, bercées par le lointain murmure de la mer. C'est l'atout majeur de notre location au Portel : pouvoir loger tout le monde sans sacrifier le confort individuel.`
    },
    {
      title: "Une Vue Mer Imprenable sur la Côte d'Opale",
      content: `Imaginez prendre votre petit-déjeuner sur une terrasse de 12 m², les yeux plongés dans le bleu de la Manche. Notre mobil-home au Portel bénéficie d'un emplacement de premier choix sur la falaise. La terrasse couverte vous permet de profiter de l'extérieur par tous les temps, offrant un panorama changeant au gré des marées.

      La Côte d'Opale est célèbre pour ses lumières magnifiques qui ont inspiré tant de peintres. Depuis votre location Blueportel, vous êtes aux premières loges pour admirer les couchers de soleil sur la mer, un spectacle quotidien dont on ne se lasse jamais. C'est cette proximité immédiate avec la nature sauvage du littoral qui fait de notre mobil-home une perle rare au Portel.`
    },
    {
      title: "Séjour Proche de Nausicaá et de Boulogne-sur-Mer",
      content: `Idéalement situé, notre mobil-home au Portel constitue le point de départ parfait pour visiter Nausicaá, le plus grand aquarium d'Europe, situé à seulement 15 minutes en voiture. C'est l'activité incontournable pour les petits et les grands lors d'un séjour sur la Côte d'Opale.

      En logeant chez nous, vous êtes également à deux pas de Boulogne-sur-Mer, ville d'Art et d'Histoire, avec ses remparts, sa cathédrale et son port de pêche actif. Vous pourrez déguster les meilleurs produits de la mer fraîchement débarqués avant de retrouver le calme de votre mobil-home sur la falaise du Portel.`
    },
    {
      title: "Un Camping Calme et Familial au Phare d'Opale",
      content: `Notre location est située dans le camping Le Phare d'Opale. Ce site est privilégié pour son calme : ici, pas de piscine bruyante ni de discothèque nocturne. Nous privilégions la tranquillité et le ressourcement. C'est un choix délibéré pour offrir à nos vacanciers une expérience centrée sur la nature et le repos.

      Le camping offre néanmoins tous les services essentiels : aire de jeux pour enfants, terrains de pétanque et accès direct aux sentiers de randonnée qui longent le littoral. Le Phare du Portel, sentinelle emblématique de la côte, se dresse fièrement à quelques mètres de là, ajoutant une touche de magie à l'environnement de votre mobil-home.`
    },
    {
      title: "Pourquoi Choisir Blueportel pour votre Location de Mobil-Home ?",
      content: `Opter pour Blueportel, c'est choisir une gestion familiale et attentionnée. Nous mettons un point d'honneur à ce que chaque voyageur se sente comme chez lui dès les premières minutes. Notre mobil-home est entretenu avec le plus grand soin et équipé de technologies modernes comme la climatisation réversible et le Wi-Fi haut débit.

      Nous savons que les détails font la différence : une cuisine vraiment équipée pour cuisiner, une propreté irréprochable et un accueil personnalisé font partie de nos engagements. Pour vos prochaines vacances au Portel, offrez-vous le meilleur de la Côte d'Opale avec une location de mobil-home 3 chambres vue mer qui répondra à toutes vos attentes.`
    }
  ],
  screenReader: {
    title: "Vue d’ensemble détaillée du mobil-home Blueportel au Portel",
    paragraphs: [
      "Mobil-home Blueportel de 42 m² avec vue mer panoramique, situé sur la falaise du Portel au sein du camping Le Phare d’Opale. Hébergement de standing comprenant 3 chambres spacieuses, 5 lits, 2 salles de bain modernes, une cuisine entièrement équipée et une terrasse couverte de 12 m².",
      "Idéalement situé à proximité de Nausicaá, de Boulogne-sur-Mer et des commerces du Portel. Équipements inclus : climatisation réversible, chauffage, Wi-Fi haut débit, TV connectée, parking privé et accès direct aux sentiers côtiers de la Côte d'Opale. Animaux acceptés sur demande.",
    ],
  },
};

export default frOverviewDictionary;

