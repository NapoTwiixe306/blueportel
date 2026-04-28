import type { GuideDictionary } from "./types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

export const frGuideDictionary: GuideDictionary = {
  locale: "fr",
  metadata: {
    title: "Guide touristique Le Portel | Blueportel automne",
    description:
      "Idées d'activités automnales autour du mobil-home Blueportel : balades iodées, Nausicaá, adresses gourmandes et panoramas sur la Côte d'Opale.",
    alternates: {
      canonical: "/fr/pages/guide-touristique",
      languages: {
        "fr-FR": "/fr/pages/guide-touristique",
        "en-GB": "/en/pages/guide-touristique",
        "nl-NL": "/nl/pages/guide-touristique",
      },
    },
    openGraph: {
      title: "Guide automne à Le Portel",
      description:
        "Nos conseils pour profiter de la Côte d'Opale en automne depuis la terrasse Blueportel.",
      type: "website",
      url: `${siteUrl}/fr/pages/guide-touristique`,
    },
  },
  structuredData: {
    guide: {
      "@context": "https://schema.org",
      "@type": "TouristTrip",
      name: "Guide touristique Blueportel",
      description: "Itinéraires et idées d'activités autour du mobil-home Blueportel à Le Portel.",
      url: `${siteUrl}/fr/pages/guide-touristique`,
      itinerary: [
        {
          "@type": "ListItem",
          name: "Balades en bord de mer",
          description:
            "Chemin des douaniers vers Boulogne-sur-Mer ou Équihen-Plage pour admirer les falaises.",
        },
        {
          "@type": "ListItem",
          name: "Plaisirs gourmands",
          description: "Pause à la Brasserie du Fort ou chez les artisans poissonniers.",
        },
        {
          "@type": "ListItem",
          name: "Nausicaá & Boulogne",
          description: "Aquarium, vieille ville, château-musée et promenade des remparts.",
        },
        {
          "@type": "ListItem",
          name: "Vélomaritime",
          description: "Pédalez sur l'EuroVelo 4 pour profiter des lumières de l'automne.",
        },
      ],
    },
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: `${siteUrl}/fr` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Guide touristique",
          item: `${siteUrl}/fr/pages/guide-touristique`,
        },
      ],
    },
  },
  hero: {
    homeLabel: "Accueil",
    breadcrumbCurrent: "Guide touristique",
    pretitle: "Côte d'Opale • Automne",
    title: "Que faire à Le Portel en automne ?",
    description:
      "Profitez d'un automne lumineux au bord de la mer : balades iodées, pauses gourmandes, visites culturelles et couchers de soleil depuis Blueportel.",
  },
  intro: {
    title: "L'automne sur la Côte d'Opale",
    paragraphs: [
      "Les plages retrouvent leur calme, les falaises se parent de teintes dorées et les panoramas gagnent en intensité. Depuis Blueportel, chaque lever de soleil devient un spectacle.",
      "Respirez l'air iodé, explorez Boulogne-sur-Mer et empruntez les sentiers côtiers pour vous ressourcer le temps d'un week-end ou d'un long séjour.",
    ],
    imageAlt: "Panorama côtier depuis Blueportel en automne",
  },
  activities: [
    {
      icon: "waves",
      title: "Balades en bord de mer",
      description:
        "Depuis le camping, suivez le chemin des douaniers vers Boulogne ou Équihen. Falaises, embruns et panoramas.",
    },
    {
      icon: "coffee",
      title: "Plaisirs gourmands",
      description:
        "Brasserie du Fort, cafés du centre, poissonniers : saveurs iodées et douceurs de saison.",
    },
    {
      icon: "fish",
      title: "Nausicaá & culture",
      description:
        "Plus grand aquarium d'Europe à 10 min, Château-Musée, basilique Notre-Dame et vieille ville.",
    },
    {
      icon: "bike",
      title: "Vélomaritime",
      description:
        "Pédalez sur l'EuroVelo 4, observez les grandes marées et profitez des lumières dorées.",
    },
  ],
  culture: {
    title: "Nausicaá & Boulogne-sur-Mer",
    body: "Commencez par Nausicaá, poursuivez par la vieille ville, les remparts, le château-musée et la promenade des marins pour une journée complète.",
  },
  food: {
    title: "Adresses gourmandes",
    body: "Brasserie du Fort, artisan poissonniers, cafés cosy : dégustez moules, fish & chips et gaufres de la Côte d'Opale.",
  },
  highlights: [
    {
      icon: "sun",
      title: "Couchers de soleil",
      description: "Depuis la terrasse couverte, admirez le soleil se fondre dans la Manche.",
    },
    {
      icon: "compass",
      title: "Sentiers côtiers",
      description: "Explorez la falaise du Portel, le Fort de l'Heurt et la plage d'Équihen.",
    },
    {
      icon: "camera",
      title: "Photos souvenir",
      description: "Immortalisez vos balades sur la plage, à Nausicaá ou sur la terrasse Blueportel.",
    },
  ],
  cta: {
    title: "Prêts pour un city-trip iodé ?",
    description:
      "Séjournez dans notre mobil-home tout confort avec vue mer et explorez la Côte d'Opale en automne.",
    primary: {
      label: "Réserver maintenant",
      href: "https://checkout.lodgify.com/fr/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1",
      rel: "nofollow",
    },
    secondary: { label: "Nous contacter", href: "/pages/contact" },
  },
  screenReader: {
    title: "Guide touristique automne Le Portel",
    paragraph:
      "Idées d'activités autour de Blueportel : balades en bord de mer, Nausicaá, Château-Musée de Boulogne, Vélomaritime et adresses gourmandes.",
  },
};

export default frGuideDictionary;

