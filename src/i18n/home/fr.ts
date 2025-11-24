import type { HomeDictionary } from "./types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

export const frHomeDictionary: HomeDictionary = {
  locale: "fr",
  metadata: {
    title: "Location Mobil-Home Face à la Mer Le Portel | Blueportel",
    description:
      "Location mobil-home prestige face à la mer au Portel, Côte d'Opale. Mobil-home 3 chambres, vue panoramique, accès direct plage. Réservez dès 90€/nuit.",
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
    alternates: {
      canonical: "/fr",
      languages: {
        "fr-FR": "/fr",
        "en-GB": "/en",
        "nl-NL": "/nl",
      },
    },
    openGraph: {
      title: "Blueportel - Mobil-Home Prestige Face à la Mer | Le Portel",
      description:
        "Location mobil-home prestige 3 chambres face à la mer au Portel. Vue panoramique, accès direct plage. À partir de 90€/nuit.",
      type: "website",
      locale: "fr_FR",
      url: `${siteUrl}/fr`,
      siteName: "Blueportel",
      images: [
        {
          url: `${siteUrl}/logo.png`,
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
      images: [`${siteUrl}/logo.png`],
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
      email: "infos@blueportel.fr",
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
        email: "infos@blueportel.fr",
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
    title: "Location Mobil-Home",
    highlight: "Face à la Mer",
    tagline:
      "Mobil-home 3 chambres • Côte d'Opale • Vue mer panoramique • Accès direct plage",
    srDescription:
      "Découvrez notre location mobil-home face à la mer au Portel. Mobil-home 3 chambres pour 6 personnes avec vue mer panoramique et accès direct plage.",
    ctaPrimary: {
      label: "Réserver Maintenant",
      href: "https://checkout.lodgify.com/fr/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1",
      rel: "nofollow",
    },
    ctaSecondary: {
      label: "Découvrir le Mobil-Home",
      href: "#decouvrir-le-mobil-home",
    },
  },
  reservation: {
    title: "Découvrir le Mobil-Home Face à la Mer",
    subtitle:
      "Mobil-home 3 chambres Côte d'Opale • Vue mer panoramique • Location vacances face à la mer",
    priceLabel: "Prix Location Mobil-Home",
    priceValue: "90€",
    priceSuffix: "/ nuit",
    note:
      "Sélectionnez vos dates pour voir le prix total de votre location mobil-home face à la mer.",
    highlightTitle: "À l'intérieur du Mobil-Home",
    highlightSubtitle: "Mobil-home 6 personnes – 3 chambres – cuisine équipée",
    selectionNote:
      "Sélectionnez vos dates pour voir le prix total de votre location mobil-home face à la mer.",
  },
  features: {
    srTitle: "Caractéristiques de votre location mobil-home face à la mer",
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
    subtitle: "Confort premium avec vue mer panoramique",
    intro: [
      "Notre mobil-home face à la mer au Portel vous offre un confort premium avec une vue mer panoramique exceptionnelle.",
      "Le mobil-home 3 chambres est parfaitement équipé pour accueillir 6 personnes dans les meilleures conditions.",
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
      "Réservez votre séjour à partir de 90€ par nuit et profitez d'un hébergement premium sur la Côte d'Opale.",
    ],
    listTitle: "Pourquoi choisir Blueportel ?",
    listItems: [
      "Mobil-home 3 chambres vue mer panoramique",
      "Accès direct à la plage",
      "Terrasse couverte de 12 m²",
      "Équipements haut de gamme",
      "À partir de 90€ / nuit",
      "Idéal pour 6 personnes",
    ],
  },
  reservationForm: {
    arrivalLabel: "Arrivée",
    arrivalPlaceholder: "jj/mm/aaaa",
    departureLabel: "Départ",
    departurePlaceholder: "jj/mm/aaaa",
    guestsLabel: "Invités",
    guestDropdownLabel: "Sélectionner le nombre d'invités",
    guestOptions: [
      "1 Adulte",
      "2 Adultes",
      "3 Adultes",
      "4 Adultes",
      "5 Adultes",
      "6 Adultes",
    ],
    submitLabel: "Réserver",
    bookingLocaleSegment: "fr",
    currency: "EUR",
  },
};

export default frHomeDictionary;

