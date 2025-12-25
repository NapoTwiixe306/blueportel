import type { NausicaaDictionary } from "./types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

const mapUrl =
  "https://checkout.lodgify.com/fr/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1";

export const frNausicaaDictionary: NausicaaDictionary = {
  locale: "fr",
  metadata: {
    title: "Hébergement Proche Nausicaá Boulogne-sur-Mer | Mobil-Home Vue Mer",
    description:
      "Mobil-home 3 chambres face à la mer, à seulement 10 minutes de Nausicaá. Découvrez nos conseils pratiques pour votre visite et réservez votre séjour Blueportel.",
    alternates: {
      canonical: "/fr/hebergement-proche-nausicaa",
      languages: {
        "fr-FR": "/fr/hebergement-proche-nausicaa",
        "en-GB": "/en/accommodation-near-nausicaa",
        "nl-NL": "/nl/nausicaa-dichtbij",
      },
    },
    openGraph: {
      title: "Hébergement Proche Nausicaá Boulogne-sur-Mer | Blueportel",
      description:
        "Location mobil-home prestige face à la mer, idéale pour visiter Nausicaá en famille. Vue panoramique, terrasse couverte, 3 chambres.",
      type: "website",
      url: `${siteUrl}/fr/hebergement-proche-nausicaa`,
    },
  },
  hero: {
    homeLabel: "Accueil",
    breadcrumbCurrent: "Nausicaá",
    title: "Location de mobil-home à Le Portel — à",
    highlight: "~10 min de Nausicaá",
    subtitle: "Mobil-Home 3 Chambres • Vue Mer Panoramique • Proche Nausicaá (Boulogne-sur-Mer)",
    srTitle: "Location mobil-home proche Nausicaá - Blueportel",
    srParagraphs: [
      "Mobil-home tout confort face à la mer avec 3 chambres, 2 salles de bain, terrasse couverte, parfait pour découvrir Nausicaá en famille.",
      "Situé à environ 6 km de Nausicaá, soit 10 minutes en voiture ou 24 minutes en bus.",
    ],
  },
  structuredData: {
    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "À quelle distance sommes-nous de Nausicaá ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Environ 6 km — comptez ~10 min en voiture selon la circulation.",
          },
        },
        {
          "@type": "Question",
          name: "Y a-t-il des transports en commun ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, un bus relie Le Portel à Nausicaá en ~24 min avec une fréquence horaire.",
          },
        },
        {
          "@type": "Question",
          name: "Quelles sont les heures d'ouverture de Nausicaá ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "En général 09:30–18:30 ; merci de vérifier les éventuels ajustements saisonniers sur le site officiel.",
          },
        },
        {
          "@type": "Question",
          name: "Faut-il réserver les billets pour Nausicaá à l'avance ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Il est recommandé de réserver en ligne pour éviter l'attente, surtout en haute saison.",
          },
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
          name: "Hébergement proche Nausicaá",
          item: `${siteUrl}/fr/hebergement-proche-nausicaa`,
        },
      ],
    },
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Blueportel",
      url: siteUrl,
      logo: `${siteUrl}/location-mobil-home-le-portel-logo.png`,
      description: "Location de mobil-home prestige face à la mer au Portel sur la Côte d'Opale",
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
      description: "Nausicaá est le plus grand aquarium d'Europe, situé à Boulogne-sur-Mer",
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
    "Bienvenue chez Blueportel : votre mobil-home tout confort avec vue mer, 3 chambres et 2 salles de bain, idéal pour découvrir Nausicaá en famille.",
  benefitsTitle: "Pourquoi choisir Blueportel pour votre visite de Nausicaá ?",
  benefits: [
    {
      icon: "home",
      title: "Confort & espace",
      description:
        "Suite parentale, 2 chambres lits jumeaux, cuisine équipée, climatisation/chauffage, parfait pour 4 à 6 personnes.",
    },
    {
      icon: "waves",
      title: "Terrasse vue mer",
      description: "12 m² couverts, idéale pour les petits-déjeuners et les couchers de soleil iodés.",
    },
    {
      icon: "map",
      title: "Localisation pratique",
      description:
        "Au Camping du Phare d'Opale à Le Portel, vous rejoignez facilement Nausicaá et Boulogne-sur-Mer.",
    },
  ],
  accessTitle: "Accéder à Nausicaá depuis Blueportel",
  accessCards: [
    {
      icon: "car",
      title: "En voiture (~10 min)",
      description: "Trajet de 6 km le long du littoral jusqu'au Boulevard Sainte-Beuve. Parkings sur place.",
    },
    {
      icon: "bus",
      title: "En bus (~24 min)",
      description: "Lignes locales reliant Le Portel à Nausicaá (service horaire, arrêt “Nausicaá”).",
    },
    {
      icon: "walk",
      title: "Balade à pied / à vélo",
      description:
        "Pour les marcheurs, superbe itinéraire côtier entre Le Portel et Boulogne — prévoir un équipement adapté.",
    },
  ],
  infoTitle: "Infos pratiques",
  infoItems: [
    {
      icon: "clock",
      title: "Horaires",
      description:
        "Généralement 09:30–18:30 (variables). Vérifiez les mises à jour sur le site officiel de Nausicaá.",
    },
    {
      icon: "star",
      title: "Billetterie",
      description: "Réservez en ligne pour éviter l'attente, notamment pendant les vacances scolaires.",
    },
    {
      icon: "map",
      title: "Adresse",
      description: "Boulevard Sainte-Beuve, 62200 Boulogne-sur-Mer.",
    },
  ],
  faqTitle: "FAQ — Blueportel x Nausicaá",
  faqItems: [
    {
      id: "1",
      question: "À quelle distance sommes-nous de Nausicaá ?",
      answer: "Environ 6 km — comptez ~10 min en voiture selon la circulation.",
    },
    {
      id: "2",
      question: "Y a-t-il des transports en commun ?",
      answer:
        "Oui, un bus relie Le Portel à Nausicaá en ~24 min avec une fréquence horaire (horaires variables selon la saison).",
    },
    {
      id: "3",
      question: "Quelles sont les heures d'ouverture de Nausicaá ?",
      answer:
        "En général 09:30–18:30 ; merci de vérifier les ajustements saisonniers sur le site officiel de Nausicaá.",
    },
    {
      id: "4",
      question: "Faut-il réserver les billets à l'avance ?",
      answer:
        "Oui, il est recommandé de réserver en ligne pour éviter l'attente, surtout durant les vacances et week-ends.",
    },
  ],
  cta: {
    title: "Prêts à plonger ?",
    description:
      "Entre Nausicaá, les plages de Le Portel et les falaises de la Côte d'Opale, Blueportel est votre camp de base idéal.",
    buttons: {
      primary: { label: "Vérifier les disponibilités", href: mapUrl, rel: "nofollow" },
      secondary: { label: "Contact", href: "/contact" },
    },
  },
  contact: {
    title: "Vous avez des questions ?",
    description:
      "Notre équipe est disponible pour vous aider à organiser votre visite de Nausicaá depuis Blueportel.",
    buttons: [
      { icon: "phone", label: "+32 488 83 20 91", href: "tel:+32488832091" },
      { icon: "mail", label: "info@blueportel.fr", href: "mailto:info@blueportel.fr" },
    ],
  },
};

export default frNausicaaDictionary;

