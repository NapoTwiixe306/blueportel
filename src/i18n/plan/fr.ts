import type { PlanDictionary } from "./types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

export const frPlanDictionary: PlanDictionary = {
  locale: "fr",
  metadata: {
    title: "Plan d'accès Blueportel | Comment venir à Le Portel",
    description:
      "Adresse, itinéraires voiture, train, bus et distances clés pour rejoindre le mobil-home Blueportel au camping Le Phare d'Opale.",
    alternates: {
      canonical: "/fr/pages/plan",
      languages: {
        "fr-FR": "/fr/pages/plan",
        "en-GB": "/en/pages/plan",
        "nl-NL": "/nl/pages/plan",
      },
    },
    openGraph: {
      title: "Plan d'accès Blueportel",
      description:
        "Tous les itinéraires pour accéder au mobil-home Blueportel : voiture, train, bus, vélo et avion.",
      type: "website",
      url: `${siteUrl}/fr/pages/plan`,
    },
  },
  structuredData: {
    list: {
      "@context": "https://schema.org",
      "@type": "TouristInformationCenter",
      name: "Plan d'accès Blueportel",
      description:
        "Itinéraires pour rejoindre le mobil-home Blueportel à Le Portel (Camping Le Phare d'Opale).",
      url: `${siteUrl}/fr/pages/plan`,
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
          name: "Ligne 503 Marineo",
          distance: "1.2 km",
        },
      ],
    },
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: `${siteUrl}/fr` },
        { "@type": "ListItem", position: 2, name: "Plan", item: `${siteUrl}/fr/pages/plan` },
      ],
    },
  },
  hero: {
    homeLabel: "Accueil",
    breadcrumbCurrent: "Plan",
    pretitle: "Camping Le Phare d'Opale • Le Portel",
    title: "Plan d'accès – Comment venir à Blueportel",
    description:
      "Adresse : rue de la Mer 2, 62480 Le Portel. Retrouvez toutes les options transport pour rejoindre notre mobil-home avec vue mer.",
  },
  locationCard: {
    title: "Rue de la Mer 2, Le Portel",
    description:
      "Situé sur la falaise, à deux pas du phare d'Opale, des commerces et de la plage. Accès rapide vers Boulogne-sur-Mer et Nausicaá.",
    address: "Rue de la Mer 2, 62480 Le Portel, France",
    gpsLabel: "Coordonnées GPS",
    gpsValue: "50.7081 / 1.5714",
    phoneLabel: "Téléphone",
    phoneValue: "+32 488 83 20 91",
    phoneHref: "tel:+32488832091",
    emailLabel: "Email",
    emailValue: "info@blueportel.fr",
    emailHref: "mailto:info@blueportel.fr",
    parking: "Place privée sur l'emplacement",
  },
  map: {
    ariaLabel: "Carte Google du camping Le Phare d'Opale",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2523.870016698074!2d1.570!3d50.708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dc545f47d9aadb%3A0x7f864c8b11111111!2sCamping%20Le%20Phare%20d'Opale!5e0!3m2!1sfr!2sfr!4v0000000000000",
  },
  drivingSection: {
    title: "En voiture",
    cards: [
      {
        origin: "Paris",
        duration: "≈ 2 h 30",
        route: "A16 direction Boulogne-sur-Mer, sortie Boulogne-Sud puis suivre Le Portel.",
      },
      {
        origin: "Lille",
        duration: "≈ 1 h 45",
        route: "A25 vers Dunkerque puis A16, sortie Boulogne-Sud et direction Le Portel.",
      },
      {
        origin: "Calais",
        duration: "≈ 30 min",
        route: "A16 direction Boulogne-sur-Mer puis Le Portel.",
      },
    ],
  },
  trainInfo: {
    title: "En train",
    bullets: [
      "Gare la plus proche : Boulogne-sur-Mer",
      "Paris (Gare du Nord) → Boulogne : TGV/TER ~ 2 h 15",
      "Lille → Boulogne : TER ~ 1 h 30",
      "Calais → Boulogne : TER ~ 30 min",
      "Depuis la gare : bus 503 ou taxi (~10 min)",
    ],
  },
  busInfo: {
    title: "En bus",
    bullets: [
      "Ligne locale 503 Marineo : Boulogne ↔ Le Portel",
      "Arrêt le plus proche : centre de Le Portel (≈ 1,2 km)",
      "Liaisons longues distances : FlixBus / BlaBlaCar Bus jusqu'à Boulogne",
    ],
  },
  bikeInfo: {
    title: "À vélo",
    text: "Blueportel est accessible depuis l'EuroVelo 4 qui traverse Boulogne-sur-Mer. Suivez la piste côtière jusqu'à Le Portel.",
  },
  planeInfo: {
    title: "En avion",
    text: "Aéroport Lille-Lesquin (147 km). Location de voiture ou train jusqu'à Boulogne-sur-Mer.",
  },
  distanceInfo: {
    title: "Distances clés",
    items: [
      { label: "Aéroport le plus proche", value: "147 km" },
      { label: "Gare Boulogne-sur-Mer", value: "2,49 km" },
      { label: "Autoroute A16", value: "10 km" },
      { label: "Port de Boulogne", value: "4,5 km" },
      { label: "Arrêt bus 503", value: "1,2 km" },
    ],
  },
  assistance: {
    title: "Besoin d'aide pour organiser votre trajet ?",
    description:
      "Nous pouvons vous envoyer un plan détaillé, un point GPS ou des recommandations transport selon votre ville de départ.",
    phoneLabel: "+32 488 83 20 91",
    phoneHref: "tel:+32488832091",
    emailLabel: "info@blueportel.fr",
    emailHref: "mailto:info@blueportel.fr",
    bookingLabel: "Réserver votre séjour",
    bookingHref:
      "https://checkout.lodgify.com/fr/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1",
  },
  screenReader: {
    title: "Plan d'accès Blueportel",
    paragraph:
      "Adresse : rue de la Mer 2, Le Portel. Accès voiture depuis Paris, Lille et Calais via l’A16. Gare la plus proche : Boulogne-sur-Mer (bus 503 vers Le Portel). EuroVelo 4 pour les cyclistes et aéroport Lille-Lesquin à 147 km.",
  },
};

export default frPlanDictionary;

