import type { GuideDictionary } from "./types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

export const nlGuideDictionary: GuideDictionary = {
  locale: "nl",
  metadata: {
    title: "Herfstgids Le Portel | Blueportel",
    description:
      "Tips voor een rustige herfst aan zee: wandelingen, Nausicaá, culinaire adressen en zonsondergangen vanaf het Blueportel-terras.",
    alternates: {
      canonical: "/nl/pages/guide-touristique",
      languages: {
        "fr-FR": "/fr/pages/guide-touristique",
        "en-GB": "/en/pages/guide-touristique",
        "nl-NL": "/nl/pages/guide-touristique",
      },
    },
    openGraph: {
      title: "Herfsttrip naar Le Portel",
      description: "Onze favoriete activiteiten om de Opaalkust te beleven in de herfst vanuit Blueportel.",
      type: "website",
      url: `${siteUrl}/nl/pages/guide-touristique`,
    },
  },
  structuredData: {
    guide: {
      "@context": "https://schema.org",
      "@type": "TouristTrip",
      name: "Blueportel herfstgids",
      description: "Ideeën en routes rond de Blueportel mobilhome in Le Portel.",
      url: `${siteUrl}/nl/pages/guide-touristique`,
      itinerary: [
        {
          "@type": "ListItem",
          name: "Kustwandelingen",
          description: "Douanierspad richting Boulogne of Équihen met kliffen en zeelucht.",
        },
        {
          "@type": "ListItem",
          name: "Culinaire stops",
          description: "Brasserie du Fort, lokale vissers en cafés voor herfstcomfortfood.",
        },
        {
          "@type": "ListItem",
          name: "Nausicaá & cultuur",
          description: "Grootste aquarium van Europa, museum, basiliek en oude stad.",
        },
        {
          "@type": "ListItem",
          name: "Vélomaritime",
          description: "Fiets de EuroVelo 4 en geniet van getijden en gouden licht.",
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
          name: "Toeristische gids",
          item: `${siteUrl}/nl/pages/guide-touristique`,
        },
      ],
    },
  },
  hero: {
    homeLabel: "Home",
    breadcrumbCurrent: "Toeristische gids",
    pretitle: "Opaalkust • Herfst",
    title: "Wat te doen in Le Portel in de herfst?",
    description:
      "Geniet van een zachte nazomer aan zee: jodiumrijke wandelingen, Nausicaá, gastronomie en zonsondergangen vanaf het Blueportel-terras.",
  },
  intro: {
    title: "Herfst aan de Opaalkust",
    paragraphs: [
      "De stranden worden rustiger, de kliffen kleuren goud en het kanaal krijgt diepe tinten. Vanuit Blueportel wordt elke zonsopgang een spektakel.",
      "Adem de zeelucht in, bezoek Boulogne-sur-Mer en trek de kustpaden op voor een verkwikkend weekend of langere staycation.",
    ],
    imageAlt: "Kustpanorama vanuit Blueportel in de herfst",
  },
  activities: [
    {
      icon: "waves",
      title: "Wandelingen langs zee",
      description: "Volg het douanierspad richting Boulogne of Équihen. Kliffen en panoramische uitzichten gegarandeerd.",
    },
    {
      icon: "coffee",
      title: "Culinaire verwennerijen",
      description: "Brasserie du Fort, lokale cafés en vissers voor comfortgerechten met zeevruchten.",
    },
    {
      icon: "fish",
      title: "Nausicaá & cultuur",
      description: "Het grootste aquarium van Europa, kasteel-museum, basiliek en oude stad van Boulogne.",
    },
    {
      icon: "bike",
      title: "Vélomaritime",
      description: "Fiets de EuroVelo 4, kijk naar springtij en geniet van het gouden avondlicht.",
    },
  ],
  culture: {
    title: "Nausicaá & Boulogne-sur-Mer",
    body: "Begin bij Nausicaá, vervolg met een bezoek aan de oude stad, de vestingmuren, het kasteel-museum en de promenade van de zeelieden.",
  },
  food: {
    title: "Lekker eten",
    body: "Brasserie du Fort, lokale vissers en gezellige cafés — proef mosselen, fish & chips en wafels van de Opaalkust.",
  },
  highlights: [
    {
      icon: "sun",
      title: "Zonsondergangen",
      description: "Bekijk de zon die in de zee zakt vanaf het overdekte terras, zelfs buiten het hoogseizoen.",
    },
    {
      icon: "compass",
      title: "Kustpaden",
      description: "Ontdek de kliffen van Le Portel, Fort de l'Heurt en het strand van Équihen te voet of met de fiets.",
    },
    {
      icon: "camera",
      title: "Fotosouvenirs",
      description: "Leg je herinneringen vast op het strand, bij Nausicaá of op de Blueportel-terrasse.",
    },
  ],
  cta: {
    title: "Klaar voor een zilt citytrip?",
    description:
      "Logeer in onze comfortabele mobilhome met zeezicht en ontdek de Opaalkust in herfstmodus.",
    primary: {
      label: "Nu boeken",
      href: "https://checkout.lodgify.com/nl/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1",
      rel: "nofollow",
    },
    secondary: { label: "Contacteer ons", href: "/pages/contact" },
  },
  screenReader: {
    title: "Herfstgids Le Portel",
    paragraph:
      "Activiteiten rond Blueportel: kustwandelingen, Nausicaá, Boulogne kasteel-museum, Vélomaritime en lekkere adressen.",
  },
};

export default nlGuideDictionary;

