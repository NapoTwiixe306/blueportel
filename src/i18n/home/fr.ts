import type { HomeDictionary } from "./types";
import { getAlternates } from "../../lib/seo/hreflang";

const siteUrl = "https://blueportel.fr";

const prestigeBookingUrl =
  "/fr/pages/reserver";
const horizonBookingUrl =
  "/fr/pages/reserver";

export const frHomeDictionary: HomeDictionary = {
  locale: "fr",

  metadata: {
    title: "Location mobil-home vue mer à Le Portel, Côte d'Opale | BluePortel",
    description:
      "Choisissez votre mobil-home face à la mer sur la Côte d'Opale. Prestige (6 pers.) ou Horizon (4 pers.) : vue sur la Manche, accès direct plage, réservation directe sans frais.",
    keywords: [
      "location mobil-home Le Portel",
      "mobil-home face à la mer Côte d'Opale",
      "location vacances Le Portel",
      "mobil-home vue mer",
      "hébergement Côte d'Opale",
      "mobil-home 6 personnes vue mer",
      "location mobil-home Boulogne-sur-Mer",
      "mobil-home terrasse vue mer",
      "réservation directe mobil-home",
      "camping Côte d'Opale bord de mer",
    ],
    authors: [{ name: "BluePortel" }],
    creator: "BluePortel",
    publisher: "BluePortel",
    alternates: getAlternates("fr"),
    openGraph: {
      title: "BluePortel — Deux mobil-homes face à la mer | Côte d'Opale",
      description:
        "Prestige (6 pers.) ou Horizon (4 pers.) face à la Manche. Vue panoramique, accès direct plage. Réservation directe, meilleur tarif garanti.",
      type: "website",
      locale: "fr_FR",
      url: siteUrl,
      siteName: "BluePortel",
      images: [
        {
          url: `${siteUrl}/galerie/blueportel-hero-vue-mer.png`,
          width: 1200,
          height: 630,
          alt: "BluePortel — Vue mer panoramique Côte d'Opale",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "BluePortel — Deux mobil-homes face à la mer",
      description: "Prestige (6 pers.) ou Horizon (4 pers.) sur la Côte d'Opale. Vue mer, accès plage, réservation directe.",
      images: [`${siteUrl}/galerie/blueportel-hero-vue-mer.png`],
    },
  },

  structuredData: {
    localBusiness: {
      "@context": "https://schema.org",
      "@type": "LodgingBusiness",
      "@id": `${siteUrl}/fr#organization`,
      name: "BluePortel",
      description: "Location de mobil-homes face à la mer au Portel sur la Côte d'Opale",
      url: `${siteUrl}/fr`,
      logo: `${siteUrl}/logo.png`,
      image: `${siteUrl}/galerie/blueportel-hero-vue-mer.png`,
      telephone: ["+32488832091", "+33745324836"],
      email: "info@blueportel.fr",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Camping Le Phare d'Opale",
        addressLocality: "Le Portel",
        addressRegion: "Hauts-de-France",
        addressCountry: "FR",
        postalCode: "62480",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 50.7081,
        longitude: 1.5714,
      },
      priceRange: "€€",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "8.3",
        reviewCount: "8",
        bestRating: "10",
        worstRating: "1",
      },
    },
    accommodation: {
      "@context": "https://schema.org",
      "@type": "Accommodation",
      name: "BluePortel Prestige",
      description:
        "Mobil-home Prestige 3 chambres pour 6 personnes face à la mer au Portel avec vue panoramique et accès direct plage",
      image: `${siteUrl}/galerie/blueportel-hero-vue-mer.png`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Le Portel",
        addressRegion: "Hauts-de-France",
        addressCountry: "FR",
        postalCode: "62480",
      },
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Vue mer panoramique" },
        { "@type": "LocationFeatureSpecification", name: "Accès direct plage" },
        { "@type": "LocationFeatureSpecification", name: "Terrasse couverte 12 m²" },
        { "@type": "LocationFeatureSpecification", name: "Climatisation" },
        { "@type": "LocationFeatureSpecification", name: "Wi-Fi" },
      ],
      numberOfRooms: 3,
      occupancy: { "@type": "QuantitativeValue", maxValue: 6 },
    },
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "BluePortel",
      url: `${siteUrl}/fr`,
      logo: `${siteUrl}/logo.png`,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+32488832091",
        contactType: "Customer Service",
        availableLanguage: ["French", "English", "Dutch"],
        email: "info@blueportel.fr",
      },
    },
    website: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "BluePortel",
      url: `${siteUrl}/fr`,
      description: "Location de mobil-homes face à la mer sur la Côte d'Opale",
    },
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: `${siteUrl}/fr` },
      ],
    },
  },

  hero: {
    title: "Location de mobil-homes vue mer à Le Portel, Côte d'Opale",
    subtitle:
      "Choisissez l'hébergement qui correspond à votre séjour et profitez d'une vue exceptionnelle sur la Manche.",
    badge: "Le Portel · Côte d'Opale",
    ratingText: "8,3/10 sur Booking.com",
    ctaPrimary: {
      label: "Voir les hébergements",
      href: "#hebergements",
    },
    ctaSecondary: {
      label: "Réserver",
      href: prestigeBookingUrl,
    },
    statsItems: [
      { value: "2", label: "Mobil-homes face à la mer" },
      { value: "4 → 6", label: "Voyageurs accueillis" },
      { value: "10 min", label: "De Nausicaá" },
    ],
  },

  choose: {
    pretitle: "Nos hébergements",
    title: "Choisissez votre mobil-home",
    subtitle:
      "Deux hébergements face à la Manche pour des expériences différentes. L'un pour les grandes familles, l'autre pour l'intimité.",
    ctaPrestige: "Découvrir Prestige",
    ctaHorizon: "Découvrir Horizon",
  },

  comparison: {
    title: "Lequel vous correspond ?",
    subtitle:
      "Comparez en un coup d'œil pour choisir l'hébergement idéal selon votre groupe et vos envies.",
    ctaPrestige: "Choisir Prestige",
    ctaHorizon: "Choisir Horizon",
  },

  prestige: {
    sectionLabels: {
      capacity: "personnes max.",
      bedrooms: "chambres",
      discover: "Voir toutes les photos",
      book: "Réserver Prestige",
      comingSoon: "",
      equipment: "Équipements",
      included: "Inclus",
      notIncluded: "Non inclus",
    },
  },

  horizon: {
    sectionLabels: {
      capacity: "personnes max.",
      bedrooms: "chambres",
      discover: "En savoir plus",
      book: "Réserver Horizon",
      comingSoon: "Photos définitives bientôt disponibles",
      equipment: "Équipements",
      included: "Inclus",
      notIncluded: "Non inclus",
    },
  },

  why: {
    title: "Pourquoi choisir BluePortel ?",
    subtitle:
      "Un cadre rare sur la Côte d'Opale, une expérience authentique, et la tranquillité de la réservation directe.",
    items: [
      {
        icon: "waves",
        title: "Vue mer exceptionnelle",
        description:
          "Panorama direct sur la Manche depuis votre terrasse. Les couchers de soleil sur l'horizon sont inoubliables.",
      },
      {
        icon: "map",
        title: "Accès direct à la plage",
        description:
          "La plage est à quelques minutes à pied. Profitez du sable fin et des vagues de la Côte d'Opale au quotidien.",
      },
      {
        icon: "sunset",
        title: "Couchers de soleil sur la Manche",
        description:
          "Chaque soir, la lumière dorée sur la mer offre des moments magiques depuis votre terrasse privée.",
      },
      {
        icon: "home",
        title: "Nausicaá à 10 minutes",
        description:
          "Le plus grand aquarium d'Europe est à 10 minutes. Idéal pour les familles avec enfants lors des jours de pluie.",
      },
      {
        icon: "badge",
        title: "Meilleur tarif en direct",
        description:
          "Réservez sur blueportel.fr et bénéficiez du meilleur tarif sans frais de service ni commission d'intermédiaire.",
      },
      {
        icon: "users",
        title: "Accueil personnalisé",
        description:
          "Michel et Véronique vous accueillent sur place et partagent leurs meilleures adresses de la Côte d'Opale pour un séjour réussi.",
      },
    ],
  },

  testimonials: {
    title: "Ils ont séjourné face à la mer",
    subtitle:
      "Des familles, des couples, des amis — tous sont repartis avec l'envie de revenir.",
    stats: [
      { label: "Note Booking.com", value: "8,3/10" },
      { label: "Personnel", value: "10/10" },
      { label: "Rapport qualité/prix", value: "9,8/10" },
    ],
    reviews: [
      {
        name: "Cecile (France)",
        date: "Mai 2026",
        rating: 4.5,
        text: "Propriétaire très agréable et d'une très grande gentillesse. Mobil-home impeccable, vraiment rien à redire, parfait. Nous reviendrons avec un très grand plaisir. Merci à Michel et Véronique.",
        platform: "Booking.com",
      },
      {
        name: "Laurianne (Belgique)",
        date: "Avril 2026",
        rating: 4.5,
        text: "Le logement répond à mes attentes, fonctionnel, et la localisation était parfaite : calme et proche de la mer et de ses sentiers.",
        platform: "Booking.com",
      },
      {
        name: "Romain (Belgique)",
        date: "Mai 2026",
        rating: 4,
        text: "La vue depuis le logement est juste extra. La proximité de la plage.",
        platform: "Booking.com",
      },
    ],
  },

  faq: {
    title: "Vos questions, nos réponses",
    subtitle: "Tout ce qu'il faut savoir pour préparer votre séjour sur la Côte d'Opale.",
    items: [
      {
        id: "faq-1",
        question: "Quelle est la capacité de chaque hébergement ?",
        answer:
          "Le <strong>Prestige</strong> accueille jusqu'à <strong>6 personnes</strong> (3 chambres : 1 suite parentale + 2 chambres lits jumeaux). L'<strong>Horizon</strong> est conçu pour <strong>4 personnes</strong> (2 chambres). Les deux hébergements disposent d'une vue mer directe et d'un accès à la plage.",
      },
      {
        id: "faq-2",
        question: "Les animaux de compagnie sont-ils acceptés ?",
        answer:
          "Oui, <strong>un chien</strong> est accepté sous réserve d'accord préalable. Merci de nous contacter avant votre réservation pour valider cette demande.",
      },
      {
        id: "faq-3",
        question: "Quelles sont les heures d'arrivée et de départ ?",
        answer:
          "L'arrivée se fait entre <strong>14h et 18h</strong>, avec accueil personnalisé par Michel et Véronique sur place. Le départ est prévu avant <strong>11h</strong>. Toutes les informations pratiques vous sont transmises la semaine précédant votre séjour.",
      },
      {
        id: "faq-4",
        question: "Y a-t-il un parking sur place ?",
        answer:
          "Oui, chaque hébergement dispose d'un <strong>parking privé</strong>. Le Prestige peut accueillir jusqu'à 2 véhicules.",
      },
      {
        id: "faq-5",
        question: "Le wi-fi est-il disponible ?",
        answer:
          "Le <strong>Wi-Fi Starlink</strong> sera disponible à partir de la saison 2026. En attendant, la <strong>5G couvre parfaitement la zone</strong>, permettant de télétravailler ou de streamer confortablement.",
      },
      {
        id: "faq-6",
        question: "La plage est-elle vraiment accessible à pied ?",
        answer:
          "Oui, la plage du Portel est accessible à pied en quelques minutes depuis les deux hébergements. Vous profitez également du sentier du littoral et des falaises de la Côte d'Opale.",
      },
      {
        id: "faq-7",
        question: "Quelles activités peut-on faire autour de BluePortel ?",
        answer:
          "Nombreuses activités à proximité : <strong>Nausicaá</strong> (10 min), balade sur la plage, sentier du littoral, falaises du Mont de Couppes, Fort de l'Heurt, marchés locaux, restaurants de fruits de mer, base nautique, laser game.",
      },
      {
        id: "faq-8",
        question: "Comment réserver au meilleur tarif ?",
        answer:
          "Le <strong>meilleur tarif est toujours disponible en réservation directe</strong> sur blueportel.fr, sans frais de service. Vous pouvez aussi réserver via Booking.com ou Airbnb (avec frais supplémentaires). Les promotions sont annoncées sur notre page Facebook.",
      },
    ],
  },

  finalCta: {
    title: "Votre séjour face à la mer commence ici",
    subtitle:
      "Réservez en direct sur blueportel.fr et bénéficiez du meilleur tarif, sans intermédiaire ni frais cachés.",
    ctaPrestige: {
      label: "Réserver Prestige",
      href: prestigeBookingUrl,
    },
    ctaHorizon: {
      label: "Réserver Horizon",
      href: horizonBookingUrl,
    },
  },
};

export default frHomeDictionary;
