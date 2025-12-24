import type { OverviewDictionary } from "./types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

export const nlOverviewDictionary: OverviewDictionary = {
  locale: "nl",
  metadata: {
    title: "Overzicht Blueportel | Luxe mobilhome aan zee",
    description:
      "42 m² mobilhome in Le Portel: 3 slaapkamers, 2 badkamers, overdekt terras met zeezicht en premium comfort voor 6 personen.",
    alternates: {
      canonical: "/nl/overzicht",
      languages: {
        "fr-FR": "/fr/location-mobil-home-le-portel",
        "en-GB": "/en/mobile-home-rental-le-portel",
        "nl-NL": "/nl/overzicht",
      },
    },
    openGraph: {
      title: "Blueportel – Luxe mobilhome aan zee",
      description:
        "Ontdek de Blueportel mobilhome: terras met zeezicht, lichte kamers, uitgeruste keuken en premium diensten.",
      type: "website",
      url: `${siteUrl}/nl/overzicht`,
    },
  },
  structuredData: {
    equipment: {
      "@context": "https://schema.org",
      "@type": "Accommodation",
      name: "Blueportel mobilhome",
      description: "Luxe mobilhome met 3 slaapkamers aan zee in Le Portel",
      url: `${siteUrl}/nl/overzicht`,
      image: `${siteUrl}/galerie/blueportel-terrasse-ensoleillee.jpg`,
      occupancy: { "@type": "QuantitativeValue", maxValue: 6 },
      numberOfRooms: 3,
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "12 m² terras met zeezicht" },
        { "@type": "LocationFeatureSpecification", name: "Airconditioning" },
        { "@type": "LocationFeatureSpecification", name: "Snelle Wi-Fi" },
        { "@type": "LocationFeatureSpecification", name: "Huisdieren welkom op aanvraag" },
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
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/nl` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Overzicht",
          item: `${siteUrl}/nl/overzicht`,
        },
      ],
    },
  },
  hero: {
    homeLabel: "Home",
    breadcrumbCurrent: "Overzicht",
    pretitle: "Blueportel mobilhome • Opaalkust",
    title: "Blueportel – Luxe mobilhome aan zee",
    description:
      "Luxe mobilhome van 42 m² boven de kliffen van Le Portel. Direct zeezicht, overdekt terras van 12 m², 3 slaapkamers, 2 badkamers en premium voorzieningen voor 6 personen.",
  },
  stayCard: {
    title: "Uw verblijf aan zee",
    description:
      "Geniet van een onvergetelijke vakantie met zicht op zee. Perfect voor gezinnen, koppels of vrienden die rust en comfort zoeken.",
    bullets: [
      "Tot 6 gasten • 3 slaapkamers • 5 bedden",
      "Check-in 14u, check-out 12u – persoonlijk onthaal",
      "Huisdieren toegestaan na akkoord",
    ],
    cta: {
      primary: {
        label: "Nu boeken",
        href: "https://checkout.lodgify.com/nl/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1",
        rel: "nofollow",
      },
      secondary: { label: "Bekijk de foto's", href: "/fotos" },
    },
  },
  heroImageAlt: "Overdekt terras met panoramisch zeezicht bij mobilhome Blueportel",
  interior: {
    title: "Binnen",
    items: [
      "Master bedroom met ensuite badkamer",
      "Twee twin-kamers plus tweede badkamer",
      "Gezellige living met bank en eethoek",
      "Volledig uitgeruste keuken: kookplaat, oven, microgolf, koffieapparaten, volledige uitrusting",
      "Airco in de zomer, verwarming voor frisse avonden",
    ],
  },
  exterior: {
    title: "Buiten",
    items: [
      "Overdekt terras van 12 m² met zeezicht",
      "Buitenlounge, ligstoelen en sfeerverlichting",
      "Wandelpad langs de klif en directe toegang tot het strand",
      "Parking op het terrein en gedeelde speelzone",
    ],
  },
  highlights: [
    {
      icon: "beds",
      title: "3 slaapkamers & 5 bedden",
      description: "1 master suite + 2 twin-kamers met hotelbedden.",
    },
    {
      icon: "bath",
      title: "2 badkamers",
      description: "Grote douche, aparte toiletten en slimme opbergruimte.",
    },
    {
      icon: "terrace",
      title: "Overdekt terras 12 m²",
      description: "Panoramisch zeezicht, tuinset en ligstoelen.",
    },
    {
      icon: "kitchen",
      title: "Premium keuken",
      description: "Oven, microgolf, kookplaat, koelvriescombi en complete serviesset.",
    },
  ],
  equipment: [
    {
      title: "Comfort binnen",
      items: [
        "Lichte woonkamer met hoekbank en smart-tv",
        "Eethoek voor zes personen",
        "Omkeerbare airco en verwarming",
        "Snelle Wi-Fi en veel opbergruimte",
      ],
    },
    {
      title: "Keuken & service",
      items: [
        "Filterkoffie + Senseo",
        "Traditionele oven, microgolf en broodrooster",
        "Volledige set kookgerei en servies",
        "Grote koelkast en diepvries",
      ],
    },
    {
      title: "Buiten & veiligheid",
      items: [
        "Lounge, ligstoelen en sfeerverlichting",
        "Privéparking en gedeelde speelzone",
        "Rook-/CO-melders en brandblusser",
        "Huisdieren na akkoord",
      ],
    },
  ],
  location: {
    title: "Toplocatie",
    description:
      "Op de kliffen van Le Portel, in Camping Le Phare d’Opale. Op wandelafstand van de vuurtoren, winkels en kustpaden. Slechts 15 minuten van Boulogne-sur-Mer en Nausicaá.",
  },
  policies: {
    title: "Regels & diensten",
    items: [
      "Eindschoonmaak inbegrepen, kindvriendelijk",
      "Huisdieren toegestaan op aanvraag",
      "On-site gastvrouw en schoonmaakservice",
      "Check-in 14u – check-out 12u",
    ],
  },
  cta: {
    title: "Klaar voor de Blueportel-ervaring?",
    description:
      "Boek uw mobilhome aan zee of contacteer ons voor een reservatie op maat. Snelle antwoorden via telefoon of e-mail.",
    buttons: {
      primary: { label: "+32 488 83 20 91", href: "tel:+32488832091" },
      secondary: { label: "info@blueportel.fr", href: "mailto:info@blueportel.fr" },
    },
  },
  screenReader: {
    title: "Overzicht van de Blueportel mobilhome",
    paragraphs: [
      "42 m² mobilhome op de kliffen van Le Portel, camping Le Phare d’Opale. Drie slaapkamers, vijf bedden, twee badkamers, uitgeruste keuken, airco, verwarming en Wi-Fi.",
      "Overdekt terras van 12 m² met zeezicht, parking, speelzone, huisdieren toegelaten na akkoord, vlak bij winkels, strand en Nausicaá.",
    ],
  },
};

export default nlOverviewDictionary;

