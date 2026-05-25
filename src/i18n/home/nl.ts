import type { HomeDictionary } from "./types";
import { getAlternates } from "../../lib/seo/hreflang";

const siteUrl = "https://blueportel.fr";

export const nlHomeDictionary: HomeDictionary = {
  locale: "nl",
  metadata: {
    title: "Blueportel - Luxe Staanplaats aan Zee | Le Portel, Opaalkust",
    description:
      "Huur een luxe mobiel huis met zeezicht in Le Portel aan de Opaalkust. 3 slaapkamers, panoramisch zeezicht, direct strandtoegang. Boek vanaf EUR 75/nacht.",
    keywords: [
      "mobilhome huren Le Portel",
      "vakantiehuis aan zee Frankrijk",
      "opaalkust mobilhome",
      "mobilhome 3 slaapkamers zeezicht",
      "luxe mobilhome huren",
      "familievakantie Le Portel",
      "panoramisch zeezicht mobilhome",
      "strandhuis Frankrijk",
    ],
    authors: [{ name: "Blueportel" }],
    creator: "Blueportel",
    publisher: "Blueportel",
    alternates: getAlternates("nl"),
    openGraph: {
      title: "Blueportel - Luxe Staanplaats aan Zee | Le Portel",
      description:
        "Luxe mobiel huis met 3 slaapkamers aan zee in Le Portel. Panoramisch zeezicht, direct strandtoegang. Vanaf EUR 75/nacht.",
      type: "website",
      locale: "nl_NL",
      url: "https://blueportel.fr/nl",
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
      title: "Blueportel - Mobilhome aan Zee",
      description:
        "Huur een luxe mobilhome aan zee in Le Portel met panoramisch zicht en directe toegang tot het strand.",
      images: ["https://blueportel.fr/logo.png"],
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
    titleLine1: "Vakantieverhuur Mobiel Huis",
    titleLine2Prefix: "aan Zee - ",
    titleLine2Highlight: "Le Portel",
    tagline:
      "Geniet van een comfortabel mobiel huis in een 4-sterren camping, vlak bij het strand.",
    srDescription:
      "Ontdek onze luxe mobilhome aan zee in Le Portel. Drie slaapkamers, plaats voor 6 personen, panoramisch uitzicht en directe toegang tot het strand.",
    ctaPrimary: {
      label: "Nu boeken",
      href: "https://checkout.lodgify.com/nl/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1",
      rel: "nofollow",
    },
    ctaSecondary: {
      label: "Ontdek de mobilhome",
      href: "#decouvrir-le-mobil-home",
    },
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
      "Mobilhome 3 kamers perfect uitgerust om 6 personen te ontvangen.",
      "Ideaal voor een verblijf met familie of vrienden.",
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
    carouselImages: [
      {
        src: "/galerie/blueportel-terrasse-couverte-1920x1280.jpg",
        alt: "Overdekte veranda van de mobilhome met zeezicht",
        caption: "Overdekte veranda aan zee",
      },
      {
        src: "/galerie/blueportel-terrasse-ensoleillee.jpg",
        alt: "Witte tafel met stoelen op de veranda met zeezicht",
        caption: "Zonnige buiten eethoek",
      },
      {
        src: "/galerie/blueportel-terrasse-cote-opale-1920x2880.jpg",
        alt: "Premium Blueportel mobilhome terras met kustzicht",
        caption: "Premium mobilhome met kustzicht",
      },
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

};

export default nlHomeDictionary;
