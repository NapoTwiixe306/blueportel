import type { NausicaaDictionary } from "./types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

const bookingUrl =
  "https://checkout.lodgify.com/nl/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1";

export const nlNausicaaDictionary: NausicaaDictionary = {
  locale: "nl",
  metadata: {
    title: "Mobilhome nabij Nausicaá | Blueportel Le Portel",
    description:
      "Mobilhome met zeezicht, 3 slaapkamers en terras, op slechts 10 minuten van Nausicaá. Praktische tips voor uw bezoek en comfortabel verblijf.",
    alternates: {
      canonical: "/nl/nausicaa-dichtbij",
      languages: {
        "fr-FR": "/fr/hebergement-proche-nausicaa",
        "en-GB": "/en/accommodation-near-nausicaa",
        "nl-NL": "/nl/nausicaa-dichtbij",
      },
    },
    openGraph: {
      title: "Blueportel – mobilhome op 10 min van Nausicaá",
      description:
        "Premium mobilhome met panoramisch zeezicht, ideaal om Nausicaá met het gezin te ontdekken.",
      type: "website",
      url: `${siteUrl}/nl/nausicaa-dichtbij`,
    },
  },
  hero: {
    homeLabel: "Home",
    breadcrumbCurrent: "Nausicaá",
    title: "Mobilhome aan zee in Le Portel —",
    highlight: "~10 min van Nausicaá",
    subtitle: "Mobilhome 3 slaapkamers • Panoramisch zeezicht • Dicht bij Nausicaá",
    srTitle: "Mobilhome met zeezicht nabij Nausicaá - Blueportel",
    srParagraphs: [
      "Blueportel biedt een volledig uitgeruste mobilhome met 3 slaapkamers, 2 badkamers en overdekt terras, ideaal om Nausicaá te bezoeken.",
      "Het aquarium ligt op ongeveer 6 km, 10 minuten met de auto of 24 minuten met de bus.",
    ],
  },
  structuredData: {
    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Hoe ver zijn we van Nausicaá?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ongeveer 6 km — reken op circa 10 minuten met de auto afhankelijk van het verkeer.",
          },
        },
        {
          "@type": "Question",
          name: "Is er openbaar vervoer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, een lokale bus verbindt Le Portel met Nausicaá in ongeveer 24 minuten met een uurdienst.",
          },
        },
        {
          "@type": "Question",
          name: "Wat zijn de openingsuren?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Meestal 09:30–18:30; controleer seizoenswijzigingen op de officiële website.",
          },
        },
        {
          "@type": "Question",
          name: "Moeten we tickets vooraf reserveren?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, online reserveren vermijdt wachtrijen, vooral tijdens vakanties.",
          },
        },
      ],
    },
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/nl` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Nausicaá",
          item: `${siteUrl}/nl/nausicaa-dichtbij`,
        },
      ],
    },
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Blueportel",
      url: siteUrl,
      logo: `${siteUrl}/logo.png`,
      description: "Luxe mobilhome aan zee in Le Portel, Opaalkust",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+32488832091",
        contactType: "Customer Service",
        availableLanguage: ["French"],
        email: "info@blueportel.fr",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "rue du Vinâve 32",
        addressLocality: "Liers",
        addressCountry: "BE",
        postalCode: "4042",
      },
    },
    attraction: {
      "@context": "https://schema.org",
      "@type": "TouristAttraction",
      name: "Nausicaá - Centre National de la Mer",
      description: "Het grootste aquarium van Europa, gelegen in Boulogne-sur-Mer",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Boulevard Sainte-Beuve",
        addressLocality: "Boulogne-sur-Mer",
        addressRegion: "Hauts-de-France",
        postalCode: "62200",
        addressCountry: "FR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 50.7264,
        longitude: 1.5897,
      },
    },
  },
  intro:
    "Blueportel is uw comfortabele basis met zeezicht, drie slaapkamers en twee badkamers, ideaal voor een familietrip naar Nausicaá.",
  benefitsTitle: "Waarom Blueportel kiezen voor uw bezoek aan Nausicaá?",
  benefits: [
    {
      icon: "home",
      title: "Ruimte & comfort",
      description:
        "Master suite, twee twin-kamers, uitgeruste keuken, airco/verwarming — perfect voor 4 tot 6 personen.",
    },
    {
      icon: "waves",
      title: "Terras met zeezicht",
      description: "12 m² overdekt terras voor ontbijt of aperitief bij zonsondergang.",
    },
    {
      icon: "map",
      title: "Handige ligging",
      description: "In Camping Le Phare d’Opale te Le Portel, vlak bij Boulogne-sur-Mer en Nausicaá.",
    },
  ],
  accessTitle: "Nausicaá bereiken vanaf Blueportel",
  accessCards: [
    {
      icon: "car",
      title: "Met de auto (~10 min)",
      description: "Een kustrit van 6 km naar Boulevard Sainte-Beuve met parkeergelegenheid in de buurt.",
    },
    {
      icon: "bus",
      title: "Met de bus (~24 min)",
      description: "Lokale lijn (stop “Nausicaá”) met uurdienst tussen Le Portel en Boulogne.",
    },
    {
      icon: "walk",
      title: "Te voet / per fiets",
      description: "Prachtig kustpad tussen Le Portel en Boulogne; reken op extra tijd en gepaste uitrusting.",
    },
  ],
  infoTitle: "Praktische info",
  infoItems: [
    {
      icon: "clock",
      title: "Openingsuren",
      description: "Meestal 09:30–18:30; raadpleeg de officiële site voor actuele tijden.",
    },
    {
      icon: "star",
      title: "Tickets",
      description: "Reserveer online om wachtrijen te vermijden, vooral in vakantieperiodes.",
    },
    {
      icon: "map",
      title: "Adres",
      description: "Boulevard Sainte-Beuve, 62200 Boulogne-sur-Mer.",
    },
  ],
  faqTitle: "FAQ — Blueportel x Nausicaá",
  faqItems: [
    {
      id: "1",
      question: "Hoe ver is Nausicaá?",
      answer: "Ongeveer 6 km, zo’n 10 minuten rijden afhankelijk van het verkeer.",
    },
    {
      id: "2",
      question: "Is er openbaar vervoer?",
      answer: "Ja, een lokale bus doet er ongeveer 24 minuten over met een dienst per uur.",
    },
    {
      id: "3",
      question: "Wat zijn de openingsuren?",
      answer: "Meestal 09:30–18:30. Controleer de officiële site voor aangepaste uren.",
    },
    {
      id: "4",
      question: "Moet ik op voorhand boeken?",
      answer: "We raden aan om online tickets te reserveren, zeker tijdens vakantieperiodes.",
    },
  ],
  cta: {
    title: "Klaar om te duiken?",
    description:
      "Met Nausicaá, de stranden van Le Portel en de kliffen van de Opaalkust is Blueportel uw perfecte uitvalsbasis.",
    buttons: {
      primary: { label: "Beschikbaarheid bekijken", href: bookingUrl, rel: "nofollow" },
      secondary: { label: "Contact", href: "/contact" },
    },
  },
  contact: {
    title: "Vragen?",
    description: "We helpen graag met vervoerstips, ticketadvies of maatwerkverblijven.",
    buttons: [
      { icon: "phone", label: "+32 488 83 20 91", href: "tel:+32488832091" },
      { icon: "mail", label: "info@blueportel.fr", href: "mailto:info@blueportel.fr" },
    ],
  },
};

export default nlNausicaaDictionary;

