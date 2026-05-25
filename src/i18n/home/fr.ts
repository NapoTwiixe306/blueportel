import type { HomeDictionary } from "./types";
import { getAlternates } from "../../lib/seo/hreflang";

const siteUrl = "https://blueportel.fr";

export const frHomeDictionary: HomeDictionary = {
  locale: "fr",
  metadata: {
    title: "Blueportel - Mobil-Home Prestige Face à la Mer | Le Portel",
    description:
      "Location mobil-home prestige face à la mer au Portel, Côte d'Opale. Mobil-home 3 chambres, vue panoramique, accès direct plage. Réservez dès 75€/nuit.",
    keywords: [
      "location mobil-home Le Portel",
      "mobil-home prestige face à la mer",
      "location mobil-home Côte d'Opale",
      "mobil-home 3 chambres vue mer",
      "location vacances Le Portel",
      "mobil-home plage Le Portel",
      "hébergement mobil-home prestige",
      "location mobil-home vue panoramique",
      "mobil-home haut de gamme Côte d'Opale",
      "location mobil-home accès plage",
      "location mobil-home Boulogne-sur-Mer",
      "mobil-home vue mer",
      "location vacances Côte d'Opale",
      "mobil-home 6 personnes",
      "location mobil-home terrasse vue mer",
    ],
    authors: [{ name: "Blueportel" }],
    creator: "Blueportel",
    publisher: "Blueportel",
    alternates: getAlternates("fr"),
    openGraph: {
      title: "Blueportel - Mobil-Home Prestige Face à la Mer | Le Portel",
      description:
        "Location mobil-home prestige 3 chambres face à la mer au Portel. Vue panoramique, accès direct plage. À partir de 75€/nuit.",
      type: "website",
      locale: "fr_FR",
      url: "https://blueportel.fr",
      siteName: "Blueportel",
      images: [
        {
          url: "https://blueportel.fr/logo.png",
          width: 1200,
          height: 630,
          alt: "Blueportel - Logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Blueportel - Mobil-Home Prestige Face à la Mer",
      description:
        "Location mobil-home prestige 3 chambres face à la mer au Portel. Vue panoramique, accès direct plage.",
      images: ["https://blueportel.fr/logo.png"],
    },
  },
  structuredData: {
    localBusiness: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/fr#organization`,
      name: "Blueportel",
      description:
        "Location de mobil-home prestige face à la mer au Portel sur la Côte d'Opale",
      url: `${siteUrl}/fr`,
      logo: `${siteUrl}/logo.png`,
      image: `${siteUrl}/og-image.jpg`,
      telephone: ["+32488832091", "+33745324836"],
      email: "info@blueportel.fr",
      address: {
        "@type": "PostalAddress",
        streetAddress: "rue du Vinâve 32",
        addressLocality: "Liers",
        addressCountry: "BE",
        postalCode: "4042",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 50.7081,
        longitude: 1.5714,
      },
      priceRange: "€€",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "127",
        bestRating: "5",
        worstRating: "1",
      },
    },
    accommodation: {
      "@context": "https://schema.org",
      "@type": "Accommodation",
      name: "Blueportel Mobil-Home Prestige",
      description:
        "Mobil-home de prestige 3 chambres face à la mer au Portel avec vue panoramique et accès direct à la plage",
      image: `${siteUrl}/og-image.jpg`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Le Portel",
        addressRegion: "Hauts-de-France",
        addressCountry: "FR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 50.7081,
        longitude: 1.5714,
      },
      priceRange: "€€",
      starRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      numberOfRooms: {
        "@type": "QuantitativeValue",
        value: "3",
      },
      occupancy: {
        "@type": "QuantitativeValue",
        maxValue: "6",
      },
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Vue mer panoramique" },
        { "@type": "LocationFeatureSpecification", name: "Accès direct plage" },
        { "@type": "LocationFeatureSpecification", name: "Terrasse couverte" },
        { "@type": "LocationFeatureSpecification", name: "Climatisation" },
        { "@type": "LocationFeatureSpecification", name: "Chauffage" },
      ],
    },
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Blueportel",
      url: `${siteUrl}/fr`,
      logo: `${siteUrl}/logo.png`,
      description: "Location de mobil-home prestige face à la mer",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+32488832091",
        contactType: "Customer Service",
        availableLanguage: ["French"],
        email: "info@blueportel.fr",
      },
      sameAs: [],
    },
    website: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Blueportel",
      url: `${siteUrl}/fr`,
      description:
        "Location de mobil-home prestige face à la mer au Portel sur la Côte d'Opale",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteUrl}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: `${siteUrl}/fr`,
        },
      ],
    },
  },
  hero: {
    breadcrumbCurrent: "Location Mobil-Home Face à la Mer",
    pretitle: "Mobil-home Blueportel",
    titleLine1: "Location Mobil-Home",
    titleLine2Prefix: "Face a la Mer - ",
    titleLine2Highlight: "Le Portel",
    tagline:
      "Profitez d'un mobil-home tout confort dans un camping 4 étoiles, à deux pas de la plage.",
    srDescription:
      "Découvrez notre location mobil-home face à la mer au Portel. Mobil-home 3 chambres pour 6 personnes avec vue mer panoramique et accès direct plage.",
    ctaPrimary: {
      label: "Réserver Maintenant",
      href: "https://checkout.lodgify.com/fr/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1",
      rel: "nofollow",
    },
    ctaSecondary: {
      label: "Découvrir le Mobil-Home",
      href: "/pages/galerie-photo",
    },
  },
  
  features: {
    srTitle: "Un mobile-home pensé pour votre confort",
    cards: [
      {
        icon: "home",
        title: "Mobil-Home 6 Personnes",
        description: "3 chambres spacieuses avec rangements et literie premium.",
      },
      {
        icon: "waves",
        title: "Vue Mer Panoramique",
        description: "Panorama exceptionnel sur la Côte d'Opale depuis le salon.",
      },
      {
        icon: "map",
        title: "Accès Direct Plage",
        description: "Mobil-home face à la mer avec accès direct au sable fin.",
      },
      {
        icon: "star",
        title: "Mobil-Home Prestige",
        description: "Location haut de gamme avec climatisation et terrasse couverte.",
      },
    ],
  },
  location: {
    title: "Le Logement ",
    highlight: "Prestige",
    subtitle: "Confort premium avec vue mer panoramique exceptionnelle.",
    intro: [
      "Mobil-home 3 chambres parfaitement équipé pour accueillir 6 personnes.",
      "Idéal pour un séjour en famille ou entre amis.",
    ],
    comfortParagraph: [
      "Que vous souhaitiez passer vos vacances en famille ou entre amis, notre location mobil-home répondra à toutes vos attentes.",
      "Profitez de l'accès direct à la plage et de la terrasse couverte pour des moments inoubliables.",
    ],
    interiorTitle: "À l'intérieur du Mobil-Home",
    interiorParagraph:
      "Le mobil-home dispose de tout le confort nécessaire pour un séjour agréable. Découvrez les équipements :",
    interiorList: [
      "Chambre parentale avec salle de bain privative et vue mer",
      "Deux chambres avec lits jumeaux et seconde salle de bain",
      "Kitchenette entièrement équipée pour cuisiner face à la mer",
      "Climatisation pour l'été et chauffage pour les soirées fraîches",
    ],
    exteriorTitle: "À l'extérieur du Mobil-Home",
    exteriorParagraph:
      "Profitez des espaces extérieurs pour vivre face à la mer :",
    exteriorList: [
      "Terrasse couverte de 12 m² avec vue panoramique",
      "Accès direct à la plage depuis le mobil-home",
      "Espace extérieur privé pour vos moments de détente",
    ],
    carouselImages: [
      {
        src: "/galerie/blueportel-terrasse-couverte-1920x1280.jpg",
        alt: "Terrasse couverte du mobil-home avec vue sur la mer",
        caption: "Terrasse couverte face à la mer",
      },
      {
        src: "/galerie/blueportel-terrasse-ensoleillee.jpg",
        alt: "Table de terrasse blanche avec chaises et vue sur la mer",
        caption: "Espace repas extérieur ensoleillé",
      },
      {
        src: "/galerie/blueportel-terrasse-cote-opale-1920x2880.jpg",
        alt: "Mobil-home premium Blueportel avec terrasse et vue sur l'Opal Coast",
        caption: "Mobil-home prestige sur la Côte d'Opale",
      },
    ],
    imageAlt:
      "Terrasse couverte mobil-home Blueportel avec vue mer panoramique au Portel",
  },
  cta: {
    title: "Prêt à Réserver Votre Séjour Face à la Mer ?",
    description:
      "Réservez dès maintenant votre location mobil-home face à la mer au Portel et profitez d'un séjour inoubliable sur la Côte d'Opale.",
    buttonLabel: "Réserver Maintenant",
    buttonHref:
      "https://checkout.lodgify.com/fr/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1",
    buttonRel: "nofollow",
  },
  screenReader: {
    heading:
      "Location Mobil-Home Face à la Mer au Portel - Informations détaillées",
    paragraphs: [
      "Blueportel propose la location d'un mobil-home prestige face à la mer au Portel. Mobil-home 3 chambres pour 6 personnes avec vue panoramique et accès direct à la plage.",
      "Situé au Portel, le mobil-home offre une terrasse couverte de 12 m², climatisation, chauffage et équipements haut de gamme pour vos vacances.",
      "Réservez votre séjour à partir de 75€ par nuit et profitez d'un hébergement premium sur la Côte d'Opale.",
    ],
    listTitle: "Pourquoi choisir Blueportel ?",
    listItems: [
      "Mobil-home 3 chambres vue mer panoramique",
      "Accès direct à la plage",
      "Terrasse couverte de 12 m²",
      "Équipements haut de gamme",
      "À partir de 75€ / nuit",
      "Idéal pour 6 personnes",
    ],
  },
  
};

export default frHomeDictionary;
