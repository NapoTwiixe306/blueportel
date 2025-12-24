import type { GuideDictionary } from "./types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

export const enGuideDictionary: GuideDictionary = {
  locale: "en",
  metadata: {
    title: "Autumn guide to Le Portel | Blueportel",
    description:
      "Ideas for crisp autumn days near the Blueportel mobile home: coastal walks, Nausicaá, foodie stops and golden sunsets on the Opal Coast.",
    alternates: {
      canonical: "/en/travel-guide",
      languages: {
        "fr-FR": "/fr/guide-touristique",
        "en-GB": "/en/travel-guide",
        "nl-NL": "/nl/gids",
      },
    },
    openGraph: {
      title: "Autumn getaway in Le Portel",
      description: "Our favourite activities to enjoy the Opal Coast in autumn from the Blueportel terrace.",
      type: "website",
      url: `${siteUrl}/en/travel-guide`,
    },
  },
  structuredData: {
    guide: {
      "@context": "https://schema.org",
      "@type": "TouristTrip",
      name: "Blueportel fall guide",
      description: "Itineraries and activity ideas around the Blueportel mobile home in Le Portel.",
      url: `${siteUrl}/en/travel-guide`,
      itinerary: [
        {
          "@type": "ListItem",
          name: "Coastal walks",
          description: "Customs trail toward Boulogne-sur-Mer or Équihen-Plage with dramatic cliffs.",
        },
        {
          "@type": "ListItem",
          name: "Foodie treats",
          description: "Brasserie du Fort, local fishmongers, cosy cafés and autumn comfort food.",
        },
        {
          "@type": "ListItem",
          name: "Nausicaá & culture",
          description: "Europe’s largest aquarium, museum, basilica and the walled old town.",
        },
        {
          "@type": "ListItem",
          name: "Vélomaritime",
          description: "Ride EuroVelo 4 and enjoy tidal shows and golden hour light.",
        },
      ],
    },
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/en` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Travel guide",
          item: `${siteUrl}/en/travel-guide`,
        },
      ],
    },
  },
  hero: {
    homeLabel: "Home",
    breadcrumbCurrent: "Travel guide",
    pretitle: "Opal Coast • Autumn",
    title: "What to do in Le Portel this fall?",
    description:
      "Make the most of a bright autumn by the sea: salty walks, foodie breaks, cultural visits and glowing sunsets from Blueportel.",
  },
  intro: {
    title: "Autumn on the Opal Coast",
    paragraphs: [
      "Beaches quiet down, cliffs glow with copper tones and the Channel’s hues intensify. From Blueportel every sunrise feels cinematic.",
      "Breathe in the sea air, explore Boulogne-sur-Mer and wander the coastal paths for a restorative weekend or longer stay.",
    ],
    imageAlt: "Coastal panorama from Blueportel in autumn",
  },
  activities: [
    {
      icon: "waves",
      title: "Coastal walks",
      description:
        "Follow the customs trail toward Boulogne or Équihen. Expect cliffs, spray and endless views.",
    },
    {
      icon: "coffee",
      title: "Foodie pit stops",
      description: "Brasserie du Fort, local cafés and fishmongers for hearty autumn menus.",
    },
    {
      icon: "fish",
      title: "Nausicaá & culture",
      description: "Europe’s largest aquarium, the castle museum, basilica and old town streets.",
    },
    {
      icon: "bike",
      title: "Vélomaritime ride",
      description: "Cycle EuroVelo 4, watch tidal shifts and soak in the golden hour glow.",
    },
  ],
  culture: {
    title: "Nausicaá & Boulogne-sur-Mer",
    body: "Start with Nausicaá, then stroll the old town, ramparts, castle museum and the sailors’ promenade for a full day out.",
  },
  food: {
    title: "Gourmet addresses",
    body: "Try Brasserie du Fort, local fishmongers and cosy cafés for mussels, fish & chips and Opal Coast waffles.",
  },
  highlights: [
    {
      icon: "sun",
      title: "Sunsets",
      description: "Enjoy the sky turning gold from the covered terrace even mid-season.",
    },
    {
      icon: "compass",
      title: "Coastal trails",
      description: "Explore Le Portel cliffs, Fort de l’Heurt and Équihen beach on foot or by bike.",
    },
    {
      icon: "camera",
      title: "Photo memories",
      description: "Capture beach strolls, Nausicaá highlights or terrace moments with loved ones.",
    },
  ],
  cta: {
    title: "Ready for a salty city-break?",
    description:
      "Stay in our fully equipped sea-view mobile home and explore the Opal Coast in style this autumn.",
    primary: {
      label: "Book now",
      href: "https://checkout.lodgify.com/en/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1",
      rel: "nofollow",
    },
    secondary: { label: "Contact us", href: "/contact" },
  },
  screenReader: {
    title: "Autumn guide Le Portel",
    paragraph:
      "Activity ideas near Blueportel: coastal walks, Nausicaá, Boulogne castle museum, Vélomaritime route and foodie addresses.",
  },
};

export default enGuideDictionary;

