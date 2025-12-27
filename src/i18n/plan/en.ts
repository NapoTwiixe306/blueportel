import type { PlanDictionary } from "./types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

export const enPlanDictionary: PlanDictionary = {
  locale: "en",
  metadata: {
    title: "Blueportel Directions | How to reach Le Portel",
    description:
      "Address, driving routes, train, bus and distance info to reach the Blueportel mobile home inside Camping Le Phare d’Opale.",
    alternates: {
      canonical: "/en/pages/plan",
      languages: {
        "fr-FR": "/fr/pages/plan",
        "en-GB": "/en/pages/plan",
        "nl-NL": "/nl/pages/plan",
      },
    },
    openGraph: {
      title: "Blueportel directions",
      description:
        "All transport options to reach the Blueportel seafront rental: car, train, bus, bike and flights.",
      type: "website",
      url: `${siteUrl}/en/pages/plan`,
    },
  },
  structuredData: {
    list: {
      "@context": "https://schema.org",
      "@type": "TouristInformationCenter",
      name: "Blueportel directions",
      description:
        "Routes to reach the Blueportel mobile home in Le Portel (Camping Le Phare d’Opale).",
      url: `${siteUrl}/en/pages/plan`,
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
          name: "Marineo line 503",
          distance: "1.2 km",
        },
      ],
    },
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/en` },
        { "@type": "ListItem", position: 2, name: "Plan", item: `${siteUrl}/en/pages/plan` },
      ],
    },
  },
  hero: {
    homeLabel: "Home",
    breadcrumbCurrent: "Plan",
    pretitle: "Camping Le Phare d’Opale • Le Portel",
    title: "Directions – How to reach Blueportel",
    description:
      "Address: 2 rue de la Mer, 62480 Le Portel. Discover every transport option to reach our seafront mobile home.",
  },
  locationCard: {
    title: "2 rue de la Mer, Le Portel",
    description:
      "Perched on the cliffs next to the Opal lighthouse, a short walk from shops, the beach and Boulogne-sur-Mer.",
    address: "Rue de la Mer 2, 62480 Le Portel, France",
    gpsLabel: "GPS coordinates",
    gpsValue: "50.7081 / 1.5714",
    phoneLabel: "Phone",
    phoneValue: "+32 488 83 20 91",
    phoneHref: "tel:+32488832091",
    emailLabel: "Email",
    emailValue: "info@blueportel.fr",
    emailHref: "mailto:info@blueportel.fr",
    parking: "Private spot on the pitch",
  },
  map: {
    ariaLabel: "Google map of Camping Le Phare d’Opale",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2523.870016698074!2d1.570!3d50.708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dc545f47d9aadb%3A0x7f864c8b11111111!2sCamping%20Le%20Phare%20d'Opale!5e0!3m2!1sfr!2sfr!4v0000000000000",
  },
  drivingSection: {
    title: "By car",
    cards: [
      {
        origin: "Paris",
        duration: "≈ 2 h 30",
        route: "A16 motorway toward Boulogne-sur-Mer, exit Boulogne-Sud then follow Le Portel.",
      },
      {
        origin: "Lille",
        duration: "≈ 1 h 45",
        route: "A25 to Dunkirk then A16, exit Boulogne-Sud, direction Le Portel.",
      },
      {
        origin: "Calais",
        duration: "≈ 30 min",
        route: "A16 toward Boulogne-sur-Mer then follow the Le Portel signs.",
      },
    ],
  },
  trainInfo: {
    title: "By train",
    bullets: [
      "Nearest station: Boulogne-sur-Mer",
      "Paris (Gare du Nord) → Boulogne: TGV/TER ~ 2 h 15",
      "Lille → Boulogne: TER ~ 1 h 30",
      "Calais → Boulogne: TER ~ 30 min",
      "From the station: Marineo bus 503 or taxi (~10 min)",
    ],
  },
  busInfo: {
    title: "By bus",
    bullets: [
      "Local line 503 (Marineo): Boulogne ↔ Le Portel",
      "Closest stop: Le Portel center (≈ 1.2 km)",
      "Long distance: FlixBus / BlaBlaCar Bus to Boulogne-sur-Mer",
    ],
  },
  bikeInfo: {
    title: "By bike",
    text: "Blueportel sits along EuroVelo 4 passing through Boulogne-sur-Mer. Follow the coastal bike lane to Le Portel.",
  },
  planeInfo: {
    title: "By plane",
    text: "Closest airport: Lille-Lesquin (147 km). Rent a car or take the train to Boulogne-sur-Mer.",
  },
  distanceInfo: {
    title: "Key distances",
    items: [
      { label: "Nearest airport", value: "147 km" },
      { label: "Boulogne-sur-Mer station", value: "2.49 km" },
      { label: "A16 motorway", value: "10 km" },
      { label: "Port of Boulogne", value: "4.5 km" },
      { label: "Bus stop 503", value: "1.2 km" },
    ],
  },
  assistance: {
    title: "Need help planning your journey?",
    description:
      "We can share detailed directions, a GPS pin or transport tips based on your departure city.",
    phoneLabel: "+32 488 83 20 91",
    phoneHref: "tel:+32488832091",
    emailLabel: "info@blueportel.fr",
    emailHref: "mailto:info@blueportel.fr",
    bookingLabel: "Book your stay",
    bookingHref:
      "https://checkout.lodgify.com/en/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1",
  },
  screenReader: {
    title: "Blueportel directions",
    paragraph:
      "Address: 2 rue de la Mer, Le Portel. Easy car access from Paris, Lille or Calais via the A16. Nearest train station: Boulogne-sur-Mer with Marineo 503 bus toward Le Portel. EuroVelo 4 for cyclists and Lille-Lesquin airport 147 km away.",
  },
};

export default enPlanDictionary;

