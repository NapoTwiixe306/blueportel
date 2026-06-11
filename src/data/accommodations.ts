export type AccommodationId = "prestige" | "horizon";

export type AccommodationFeature = {
  icon: string;
  label: string;
};

export type AccommodationImage = {
  src: string;
  alt: string;
  caption?: string;
  isPlaceholder?: boolean;
};

export type AccommodationEquipment = {
  category: string;
  items: string[];
};

export type Accommodation = {
  id: AccommodationId;
  name: string;
  tagline: string;
  capacity: number;
  bedrooms: number;
  bathrooms: number;
  hasSeaView: boolean;
  hasTerrace: boolean;
  hasParking: boolean;
  hasWifi: boolean;
  hasAC: boolean;
  hasBeachAccess: boolean;
  hasPlaceholderImages: boolean;
  badge: string;
  highlights: string[];
  images: AccommodationImage[];
  equipment: AccommodationEquipment[];
  bookingUrl: {
    fr: string;
    en: string;
    nl: string;
  };
  detailPath: string;
};

export const accommodations: Record<AccommodationId, Accommodation> = {
  prestige: {
    id: "prestige",
    name: "BluePortel Prestige",
    tagline: "Le mobil-home familial face à la Manche",
    capacity: 6,
    bedrooms: 3,
    bathrooms: 2,
    hasSeaView: true,
    hasTerrace: true,
    hasParking: true,
    hasWifi: true,
    hasAC: true,
    hasBeachAccess: true,
    hasPlaceholderImages: false,
    badge: "Jusqu'à 6 voyageurs",
    highlights: [
      "3 chambres spacieuses",
      "Vue mer panoramique",
      "Terrasse couverte 12 m²",
      "Accès direct plage",
      "Climatisation",
      "Idéal familles nombreuses",
    ],
    images: [
      {
        src: "/galerie/blueportel-hero-vue-mer.png",
        alt: "Vue mer panoramique depuis le mobil-home Prestige",
        caption: "Vue imprenable sur la Manche",
      },
      {
        src: "/galerie/blueportel-terrasse-couverte-1920x1280.jpg",
        alt: "Terrasse couverte du Prestige avec vue sur la mer",
        caption: "Terrasse couverte face à la mer",
      },
      {
        src: "/galerie/blueportel-terrasse-ensoleillee.jpg",
        alt: "Table de terrasse et chaises avec vue mer",
        caption: "Espace repas extérieur ensoleillé",
      },
      {
        src: "/galerie/blueportel-sejour-lumineux-1920x1280.jpg",
        alt: "Séjour lumineux du Prestige avec vue mer",
        caption: "Salon avec vue sur la mer",
      },
      {
        src: "/galerie/blueportel-cuisine-equipee-1920x1280.jpg",
        alt: "Cuisine équipée du mobil-home Prestige",
        caption: "Cuisine entièrement équipée",
      },
      {
        src: "/galerie/blueportel-suite-parentale-1040x693.jpg",
        alt: "Suite parentale du Prestige avec lit double",
        caption: "Suite parentale avec salle d'eau privative",
      },
      {
        src: "/galerie/blueportel-chambre-enfants-1920x1280.jpg",
        alt: "Chambre avec lits jumeaux pour enfants",
        caption: "Chambre avec lits jumeaux",
      },
      {
        src: "/galerie/blueportel-salle-de-bain-1920x1280.jpg",
        alt: "Salle de bain du Prestige",
        caption: "Salle de bain moderne",
      },
      {
        src: "/galerie/blueportel-panorama-cote-opale.jpg",
        alt: "Panorama sur la Côte d'Opale depuis Blueportel",
        caption: "Panorama exceptionnel sur la Côte d'Opale",
      },
    ],
    equipment: [
      {
        category: "Chambres & literie",
        items: [
          "Suite parentale — lit 160×190, salle d'eau privative",
          "Chambre 2 — lits jumeaux 80×190",
          "Chambre 3 — lits jumeaux 80×190",
          "Literie premium et oreillers de confort",
        ],
      },
      {
        category: "Cuisine & repas",
        items: [
          "Cuisinière gaz 4 feux",
          "Four + micro-ondes",
          "Grand réfrigérateur",
          "Cafetière classique + Senseo",
          "Vaisselle et ustensiles pour 6 personnes",
          "Lave-vaisselle",
        ],
      },
      {
        category: "Confort & multimédia",
        items: [
          "Climatisation réversible",
          "Chauffage central",
          "Smart TV",
          "Wi-Fi haut débit (Starlink 2026)",
          "Salon et coin repas spacieux",
        ],
      },
      {
        category: "Extérieur & services",
        items: [
          "Terrasse couverte 12 m²",
          "Salon de jardin et barbecue",
          "Parking privé 2 véhicules",
          "Accès direct plage",
          "Vue mer panoramique",
        ],
      },
    ],
    bookingUrl: {
      fr: "https://checkout.lodgify.com/fr/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1",
      en: "https://checkout.lodgify.com/en/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1",
      nl: "https://checkout.lodgify.com/nl/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1",
    },
    detailPath: "/pages/prestige",
  },
  horizon: {
    id: "horizon",
    name: "BluePortel Horizon",
    tagline: "L'intimité face à la mer pour deux ou quatre",
    capacity: 4,
    bedrooms: 2,
    bathrooms: 1,
    hasSeaView: true,
    hasTerrace: true,
    hasParking: true,
    hasWifi: true,
    hasAC: false,
    hasBeachAccess: true,
    hasPlaceholderImages: false,
    badge: "Jusqu'à 4 voyageurs",
    highlights: [
      "2 chambres cosy",
      "Vue mer",
      "Terrasse privée",
      "Accès direct plage",
      "Ambiance cosy",
      "Idéal couple ou petite famille",
    ],
    images: [
      {
        src: "/galerie-horizon/vue%20du%20camping%20phare%20d'opale%20le%20portel.jpeg",
        alt: "Vue du camping Phare d'Opale au Portel",
        caption: "Vue du camping Phare d'Opale",
      },
      {
        src: "/galerie-horizon/Vue%20salon%20cana.png",
        alt: "Vue du salon du mobil-home Horizon",
        caption: "Salon lumineux",
      },
      ...Array.from({ length: 26 }, (_, i) => {
        const n = 363 + i;
        return {
          src: `/galerie-horizon/IMG_0${n}.jpeg`,
          alt: `BluePortel Horizon — photo ${i + 1}`,
        };
      }),
    ],
    equipment: [
      {
        category: "Chambres & literie",
        items: [
          "Chambre principale — lit double",
          "Chambre 2 — lits jumeaux",
          "Literie de qualité",
        ],
      },
      {
        category: "Cuisine & repas",
        items: [
          "Cuisine équipée",
          "Réfrigérateur",
          "Cafetière",
          "Vaisselle pour 4 personnes",
        ],
      },
      {
        category: "Confort",
        items: [
          "Chauffage",
          "Wi-Fi haut débit",
          "Télévision",
          "Salon confortable",
        ],
      },
      {
        category: "Extérieur & services",
        items: [
          "Terrasse privée",
          "Salon de jardin",
          "Parking",
          "Accès direct plage",
          "Vue mer",
        ],
      },
    ],
    bookingUrl: {
      fr: "https://checkout.lodgify.com/fr/blueportel/reservation?currency=EUR&ref=bnbox&adults=1",
      en: "https://checkout.lodgify.com/en/blueportel/reservation?currency=EUR&ref=bnbox&adults=1",
      nl: "https://checkout.lodgify.com/nl/blueportel/reservation?currency=EUR&ref=bnbox&adults=1",
    },
    detailPath: "/pages/horizon",
  },
};

export const comparisonRows = [
  { label: "Capacité", prestige: "6 personnes", horizon: "4 personnes" },
  { label: "Chambres", prestige: "3", horizon: "2" },
  { label: "Salles d'eau", prestige: "2", horizon: "1" },
  { label: "Terrasse", prestige: "Couverte 12 m²", horizon: "Privée" },
  { label: "Vue mer", prestige: true, horizon: true },
  { label: "Wi-Fi", prestige: true, horizon: true },
  { label: "Climatisation", prestige: true, horizon: false },
  { label: "Parking", prestige: "2 véhicules", horizon: "Inclus" },
  { label: "Accès plage", prestige: true, horizon: true },
];
