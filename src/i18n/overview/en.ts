import type { OverviewDictionary } from "./types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

export const enOverviewDictionary: OverviewDictionary = {
  locale: "en",
  metadata: {
    title: "Blueportel Overview | Luxury seafront mobile home",
    description:
      "42 m² premium mobile home in Le Portel: 3 bedrooms, 2 bathrooms, 12 m² covered terrace with panoramic sea view and amenities for 6 guests.",
    alternates: {
      canonical: "/en/pages/vue-densemble",
      languages: {
        "fr-FR": "/fr/pages/vue-densemble",
        "en-GB": "/en/pages/vue-densemble",
        "nl-NL": "/nl/pages/vue-densemble",
      },
    },
    openGraph: {
      title: "Blueportel – Luxury mobile home facing the sea",
      description:
        "Discover the Blueportel mobile home: terrace with sea view, airy bedrooms, fully equipped kitchen and premium services.",
      type: "website",
      url: `${siteUrl}/en/pages/vue-densemble`,
    },
  },
  structuredData: {
    equipment: {
      "@context": "https://schema.org",
      "@type": "Accommodation",
      name: "Blueportel mobile home",
      description: "Luxury 3-bedroom mobile home overlooking the sea in Le Portel",
      url: `${siteUrl}/en/pages/vue-densemble`,
      image: `${siteUrl}/galerie/blueportel-terrasse-ensoleillee.jpg`,
      occupancy: { "@type": "QuantitativeValue", maxValue: 6 },
      numberOfRooms: 3,
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "12 m² sea-view terrace" },
        { "@type": "LocationFeatureSpecification", name: "Air conditioning" },
        { "@type": "LocationFeatureSpecification", name: "High-speed Wi-Fi" },
        { "@type": "LocationFeatureSpecification", name: "Pets welcome on request" },
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
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/en` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Overview",
          item: `${siteUrl}/en/pages/vue-densemble`,
        },
      ],
    },
  },
  hero: {
    homeLabel: "Home",
    breadcrumbCurrent: "Overview",
    pretitle: "Blueportel mobile home • Opal Coast",
    title: "Blueportel – Seafront luxury mobile home",
    description:
      "Premium 42 m² mobile home perched on the cliffs of Le Portel. Direct sea view, 12 m² covered terrace, 3 bedrooms, 2 bathrooms and upscale amenities for up to 6 guests.",
  },
  stayCard: {
    title: "Your seaside getaway",
    description:
      "Enjoy an unforgettable stay facing the sea. Perfect for families, couples or friends seeking calm, comfort and nature.",
    bullets: [
      "Up to 6 guests • 3 bedrooms • 5 beds",
      "Check-in 2 pm, check-out noon – personal welcome",
      "Pets accepted upon request",
    ],
    cta: {
      primary: {
        label: "Book now",
        href: "https://checkout.lodgify.com/en/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1",
        rel: "nofollow",
      },
      secondary: { label: "View photos", href: "/pages/galerie-photo" },
    },
  },
  heroImageAlt: "Covered terrace of Blueportel mobile home with panoramic sea view",
  interior: {
    title: "Inside",
    items: [
      "Master bedroom with ensuite bathroom",
      "Two twin bedrooms plus second bathroom",
      "Cozy living room with banquette and dining nook",
      "Fully equipped kitchen: 4-burner hob, oven, microwave, coffee machines, full cookware",
      "Air conditioning in summer, heating for cooler evenings",
    ],
  },
  exterior: {
    title: "Outside",
    items: [
      "12 m² covered terrace with panoramic sea view",
      "Outdoor lounge, sun loungers and gentle lighting",
      "Cliff-top promenade and direct beach access",
      "On-site parking and shared playground",
    ],
  },
  highlights: [
    {
      icon: "beds",
      title: "3 bedrooms & 5 beds",
      description: "1 master suite + 2 twin rooms with hotel-grade bedding.",
    },
    {
      icon: "bath",
      title: "2 bathrooms",
      description: "Large walk-in shower, separate toilets and clever storage.",
    },
    {
      icon: "terrace",
      title: "12 m² covered terrace",
      description: "Panoramic sea view, outdoor dining set and loungers.",
    },
    {
      icon: "kitchen",
      title: "Premium kitchen",
      description: "Oven, microwave, 4-burner hob, fridge-freezer, full dinnerware.",
    },
  ],
  equipment: [
    {
      title: "Interior comfort",
      items: [
        "Bright living room with corner sofa and smart TV",
        "Dining area for six guests",
        "Reverse-cycle AC plus heating",
        "High-speed Wi-Fi and generous storage",
      ],
    },
    {
      title: "Kitchen & utility",
      items: [
        "Filter coffee maker + Senseo",
        "Traditional oven, microwave and toaster",
        "Full cookware and tableware set",
        "Large fridge-freezer",
      ],
    },
    {
      title: "Outdoor & safety",
      items: [
        "Outdoor lounge, deckchairs and ambient lighting",
        "Private parking and shared playground",
        "Smoke / CO detectors and fire extinguisher",
        "Pets welcome upon approval",
      ],
    },
  ],
  location: {
    title: "Prime location",
    description:
      "Perched on the cliffs of Le Portel inside Camping Le Phare d’Opale, a short walk from the lighthouse, local shops and coastal trails. Only 15 minutes from Boulogne-sur-Mer and Nausicaá.",
  },
  policies: {
    title: "House rules & services",
    items: [
      "Cleaning included, family-friendly",
      "Pets accepted on request",
      "On-site host and cleaning service",
      "Check-in 2 pm – check-out noon",
    ],
  },
  cta: {
    title: "Ready to experience Blueportel?",
    description:
      "Book your seafront mobile home or contact us for a tailored reservation. Fast replies by phone or email.",
    buttons: {
      primary: { label: "+32 488 83 20 91", href: "tel:+32488832091" },
      secondary: { label: "infos@blueportel.fr", href: "mailto:infos@blueportel.fr" },
    },
  },
  screenReader: {
    title: "Blueportel mobile home overview",
    paragraphs: [
      "42 m² premium mobile home overlooking the sea, within Camping Le Phare d’Opale. Three bedrooms, five beds, two bathrooms, fully equipped kitchen, AC, heating and Wi-Fi.",
      "12 m² covered terrace with panoramic view, parking, playground, pets allowed on request, close to shops, beaches and Nausicaá.",
    ],
  },
};

export default enOverviewDictionary;

