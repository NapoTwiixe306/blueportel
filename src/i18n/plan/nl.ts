import type { PlanDictionary } from "./types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

export const nlPlanDictionary: PlanDictionary = {
  locale: "nl",
  metadata: {
    title: "Blueportel route | Zo bereikt u Le Portel",
    description:
      "Adres, autoroutes, trein-, bus- en afstandsinformatie om de Blueportel mobilhome in Camping Le Phare d’Opale te bereiken.",
    alternates: {
      canonical: "/nl/pages/plan",
      languages: {
        "fr-FR": "/fr/pages/plan",
        "en-GB": "/en/pages/plan",
        "nl-NL": "/nl/pages/plan",
      },
    },
    openGraph: {
      title: "Route naar Blueportel",
      description:
        "Alle vervoersmogelijkheden naar de Blueportel mobilhome: auto, trein, bus, fiets en vliegtuig.",
      type: "website",
      url: `${siteUrl}/nl/pages/plan`,
    },
  },
  structuredData: {
    list: {
      "@context": "https://schema.org",
      "@type": "TouristInformationCenter",
      name: "Route naar Blueportel",
      description:
        "Instructies om de Blueportel mobilhome in Le Portel (Camping Le Phare d’Opale) te bereiken.",
      url: `${siteUrl}/nl/pages/plan`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "2 rue de la Mer",
        addressLocality: "Le Portel",
        postalCode: "62480",
        addressCountry: "FR",
      },
      telephone: "+32488832091",
      geo: {
        "@type": "GeoCoordinates",
        latitude: 50.7081,
        longitude: 1.5714,
      },
      publicTransportClosests: [
        {
          "@type": "BusStation",
          name: "Marineo lijn 503",
          distance: "1.2 km",
        },
      ],
    },
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/nl` },
        { "@type": "ListItem", position: 2, name: "Plan", item: `${siteUrl}/nl/pages/plan` },
      ],
    },
  },
  hero: {
    homeLabel: "Home",
    breadcrumbCurrent: "Plan",
    pretitle: "Camping Le Phare d’Opale • Le Portel",
    title: "Routebeschrijving – Hoe Blueportel bereiken",
    description:
      "Adres: rue de la Mer 2, 62480 Le Portel. Ontdek alle vervoersopties naar onze mobilhome met zeezicht.",
  },
  locationCard: {
    title: "Rue de la Mer 2, Le Portel",
    description:
      "Op de kliffen naast de vuurtoren, vlak bij winkels en het strand. Snelle toegang tot Boulogne-sur-Mer en Nausicaá.",
    address: "Rue de la Mer 2, 62480 Le Portel, Frankrijk",
    gpsLabel: "GPS",
    gpsValue: "50.7081 / 1.5714",
    phoneLabel: "Telefoon",
    phoneValue: "+32 488 83 20 91",
    phoneHref: "tel:+32488832091",
    emailLabel: "E-mail",
    emailValue: "infos@blueportel.fr",
    emailHref: "mailto:infos@blueportel.fr",
    parking: "Privéparkeerplaats bij de mobilhome",
  },
  map: {
    ariaLabel: "Google map van Camping Le Phare d’Opale",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2523.870016698074!2d1.570!3d50.708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dc545f47d9aadb%3A0x7f864c8b11111111!2sCamping%20Le%20Phare%20d'Opale!5e0!3m2!1sfr!2sfr!4v0000000000000",
  },
  drivingSection: {
    title: "Met de auto",
    cards: [
      {
        origin: "Parijs",
        duration: "≈ 2 u 30",
        route: "A16 richting Boulogne-sur-Mer, afrit Boulogne-Sud en volg Le Portel.",
      },
      {
        origin: "Rijsel",
        duration: "≈ 1 u 45",
        route: "A25 naar Duinkerke, vervolgens A16, afrit Boulogne-Sud richting Le Portel.",
      },
      {
        origin: "Calais",
        duration: "≈ 30 min",
        route: "A16 richting Boulogne-sur-Mer en daarna richting Le Portel.",
      },
    ],
  },
  trainInfo: {
    title: "Met de trein",
    bullets: [
      "Dichtsbijzijnde station: Boulogne-sur-Mer",
      "Parijs (Gare du Nord) → Boulogne: TGV/TER ~ 2 u 15",
      "Rijsel → Boulogne: TER ~ 1 u 30",
      "Calais → Boulogne: TER ~ 30 min",
      "Vanaf het station: Marineo bus 503 of taxi (~10 min)",
    ],
  },
  busInfo: {
    title: "Met de bus",
    bullets: [
      "Lokale lijn 503 (Marineo): Boulogne ↔ Le Portel",
      "Dichtsbijzijnde halte: centrum van Le Portel (≈ 1,2 km)",
      "Lange afstand: FlixBus / BlaBlaCar Bus naar Boulogne-sur-Mer",
    ],
  },
  bikeInfo: {
    title: "Met de fiets",
    text: "Blueportel ligt langs EuroVelo 4 die Boulogne-sur-Mer doorkruist. Volg het kustfietspad richting Le Portel.",
  },
  planeInfo: {
    title: "Met het vliegtuig",
    text: "Dichtsbijzijnde luchthaven: Lille-Lesquin (147 km). Huur een auto of neem de trein naar Boulogne-sur-Mer.",
  },
  distanceInfo: {
    title: "Belangrijkste afstanden",
    items: [
      { label: "Dichtsbijzijnde luchthaven", value: "147 km" },
      { label: "Station Boulogne-sur-Mer", value: "2,49 km" },
      { label: "Snelweg A16", value: "10 km" },
      { label: "Haven van Boulogne", value: "4,5 km" },
      { label: "Bushalte 503", value: "1,2 km" },
    ],
  },
  assistance: {
    title: "Hulp nodig bij het plannen van uw reis?",
    description:
      "Wij sturen u graag een gedetailleerde route, GPS-pin of vervoerstips op basis van uw vertrekpunt.",
    phoneLabel: "+32 488 83 20 91",
    phoneHref: "tel:+32488832091",
    emailLabel: "infos@blueportel.fr",
    emailHref: "mailto:infos@blueportel.fr",
    bookingLabel: "Boek uw verblijf",
    bookingHref:
      "https://checkout.lodgify.com/nl/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1",
  },
  screenReader: {
    title: "Route naar Blueportel",
    paragraph:
      "Adres: rue de la Mer 2, Le Portel. Makkelijk bereikbaar met de auto via de A16 vanuit Parijs, Rijsel en Calais. Dichtsbijzijnde station: Boulogne-sur-Mer met Marineo 503 bus richting Le Portel. EuroVelo 4 voor fietsers en luchthaven Lille-Lesquin op 147 km.",
  },
};

export default nlPlanDictionary;

