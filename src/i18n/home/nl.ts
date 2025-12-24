import type { HomeDictionary } from "./types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

export const nlHomeDictionary: HomeDictionary = {
  locale: "nl",
  metadata: {
    title: "Mobilhome aan Zee Le Portel Huren | Opaalkust Zeezicht",
    description:
      "Huur een luxe mobilhome met 3 slaapkamers aan zee in Le Portel aan de Opaalkust. Vlakbij Nausicaá, panoramisch zeezicht, directe toegang tot het strand.",
    keywords: [
      "mobilhome huren Le Portel",
      "vakantiehuis aan zee Frankrijk",
      "opaalkust mobilhome",
      "nausicaa overnachting",
      "mobilhome 3 slaapkamers zeezicht",
      "luxe mobilhome huren",
      "panoramisch zeezicht mobilhome",
      "strandhuis Frankrijk",
    ],
    authors: [{ name: "Blueportel" }],
    creator: "Blueportel",
    publisher: "Blueportel",
    alternates: {
      canonical: "/nl",
      languages: {
        "fr-FR": "/fr",
        "en-GB": "/en",
        "nl-NL": "/nl",
      },
    },
    openGraph: {
      title: "Blueportel - Luxe Mobilhome aan Zee | Le Portel",
      description:
        "Luxe mobilhome met 3 slaapkamers aan zee in Le Portel. Panoramisch zeezicht en directe toegang tot het strand vanaf €90/nacht.",
      type: "website",
      locale: "nl_NL",
      url: `${siteUrl}/nl`,
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
      title: "Blueportel - Mobilhome aan Zee",
      description:
        "Huur een luxe mobilhome aan zee in Le Portel met panoramisch zicht en directe toegang tot het strand.",
      images: [`${siteUrl}/logo.png`],
    },
  },
  structuredData: {
    localBusiness: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/nl#organization`,
      name: "Blueportel",
      description:
        "Luxe mobilhome verhuur aan zee in Le Portel aan de Opaalkust",
      url: `${siteUrl}/nl`,
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
      name: "Blueportel Luxe Mobilhome",
      description:
        "Luxe mobilhome met 3 slaapkamers, panoramisch zeezicht en directe toegang tot het strand in Le Portel",
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
      starRating: { "@type": "Rating", ratingValue: "5" },
      numberOfRooms: { "@type": "QuantitativeValue", value: "3" },
      occupancy: { "@type": "QuantitativeValue", maxValue: "6" },
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Panoramisch zeezicht" },
        { "@type": "LocationFeatureSpecification", name: "Directe toegang tot het strand" },
        { "@type": "LocationFeatureSpecification", name: "Overdekt terras" },
        { "@type": "LocationFeatureSpecification", name: "Airconditioning" },
        { "@type": "LocationFeatureSpecification", name: "Verwarming" },
      ],
    },
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Blueportel",
      url: `${siteUrl}/nl`,
      logo: `${siteUrl}/logo.png`,
      description: "Vakantieverhuur aan zee met premium comfort",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+32488832091",
        contactType: "Customer Service",
        availableLanguage: ["Dutch", "French", "English"],
        email: "info@blueportel.fr",
      },
      sameAs: [],
    },
    website: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Blueportel",
      url: `${siteUrl}/nl`,
      description: "Luxe mobilhome huren aan zee in Le Portel",
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
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/nl` },
      ],
    },
  },
  hero: {
    breadcrumbCurrent: "Luxe mobilhome aan zee huren",
    pretitle: "Blueportel mobilhome",
    title: "Mobilhome aan zee",
    highlight: "Met zeezicht",
    tagline:
      "Mobilhome met 3 slaapkamers • Opaalkust • Panoramisch zeezicht • Direct toegang tot het strand",
    srDescription:
      "Ontdek onze luxe mobilhome aan zee in Le Portel. Drie slaapkamers, plaats voor 6 personen, panoramisch uitzicht en directe toegang tot het strand.",
    ctaPrimary: {
      label: "Nu boeken",
      href: "https://checkout.lodgify.com/nl/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1",
      rel: "nofollow",
    },
    ctaSecondary: {
      label: "Ontdek de mobilhome",
      href: "/fotos",
    },
  },
  reservation: {
    title: "Ontdek onze mobilhome aan zee",
    subtitle:
      "3 slaapkamers • 2 badkamers • Volledig ingerichte keuken • Ideaal voor 6 personen",
    priceLabel: "Vanaf",
    priceValue: "€90",
    priceSuffix: "/ nacht",
    note:
      "Selecteer uw data om de totale prijs en beschikbaarheid te zien.",
    highlightTitle: "Binnen in de mobilhome",
    highlightSubtitle: "Master bedroom, twee twin kamers, volledig uitgeruste keuken",
    selectionNote:
      "Kies uw aankomst- en vertrekdatum om de totale prijs te bekijken.",
  },
  features: {
    srTitle: "Belangrijkste troeven van de mobilhome",
    cards: [
      {
        icon: "home",
        title: "6 personen",
        description: "Drie ruime slaapkamers met kwaliteitsbedden en opbergruimte.",
      },
      {
        icon: "waves",
        title: "Panoramisch zeezicht",
        description: "Adembenemend uitzicht over de Opaalkust vanuit de woonkamer.",
      },
      {
        icon: "map",
        title: "Direct strand",
        description: "Stap rechtstreeks van het terras het zand op.",
      },
      {
        icon: "star",
        title: "Luxe comfort",
        description: "Airco, verwarming, overdekt terras en premium afwerking.",
      },
    ],
  },
  location: {
    title: "De Prestige Mobilhome",
    highlight: "Prestige",
    subtitle: "Comfort en zeezicht in één",
    intro: [
      "Onze mobilhome aan zee in Le Portel combineert ruimte, comfort en een uniek uitzicht.",
      "Perfect voor een familievakantie of een verblijf met vrienden direct aan de Opaalkust.",
    ],
    comfortParagraph: [
      "Geniet van de grote leefruimte, volledig uitgeruste keuken en hotelwaardige slaapkamers.",
      "De overdekte veranda en directe strandtoegang maken elk moment bijzonder.",
    ],
    interiorTitle: "Binnenin",
    interiorParagraph: "Alles is voorzien voor een zorgeloze vakantie:",
    interiorList: [
      "Master bedroom met eigen badkamer en zeezicht",
      "Twee tweepersoonskamers met extra badkamer",
      "Volledig uitgeruste kitchenette met zeezicht",
      "Airconditioning en verwarming voor elk seizoen",
    ],
    exteriorTitle: "Buitenruimte",
    exteriorParagraph:
      "Geniet van het buitenleven aan zee:",
    exteriorList: [
      "12 m² overdekt terras met lounge",
      "Privé toegang tot het strand",
      "Gezellige buitenruimte voor ontbijt en aperitief",
    ],
    imageAlt:
      "Overdekt terras van de Blueportel mobilhome met zeezicht in Le Portel",
  },
  cta: {
    title: "Klaar om uw verblijf te boeken?",
    description:
      "Reserveer nu uw Blueportel mobilhome aan zee en beleef de Opaalkust in alle comfort.",
    buttonLabel: "Nu boeken",
    buttonHref:
      "https://checkout.lodgify.com/nl/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1",
    buttonRel: "nofollow",
  },
  screenReader: {
    heading: "Blueportel mobilhome aan zee - details",
    paragraphs: [
      "Blueportel verhuurt een luxe mobilhome aan zee in Le Portel met plaats voor 6 personen.",
      "Panoramisch zeezicht, overdekt terras, airco en directe toegang tot het strand.",
      "Boek vanaf €90 per nacht en geniet van een zorgeloze vakantie aan de Opaalkust.",
    ],
    listTitle: "Waarom Blueportel?",
    listItems: [
      "Mobilhome met 3 slaapkamers",
      "Panoramisch zeezicht en strand voor de deur",
      "Overdekt terras van 12 m²",
      "Airconditioning en verwarming inbegrepen",
      "Premium comfort vanaf €90/nacht",
      "Perfect voor gezinnen of vrienden",
    ],
  },
  reservationForm: {
    arrivalLabel: "Aankomst",
    arrivalPlaceholder: "dd/mm/jjjj",
    departureLabel: "Vertrek",
    departurePlaceholder: "dd/mm/jjjj",
    guestsLabel: "Gasten",
    guestDropdownLabel: "Aantal gasten kiezen",
    guestOptions: [
      "1 Volwassene",
      "2 Volwassenen",
      "3 Volwassenen",
      "4 Volwassenen",
      "5 Volwassenen",
      "6 Volwassenen",
    ],
    submitLabel: "Reserveren",
    bookingLocaleSegment: "nl",
    currency: "EUR",
  },
};

export default nlHomeDictionary;

