import type { HomeDictionary } from "./types";
import { getAlternates } from "../../lib/seo/hreflang";

const siteUrl = "https://blueportel.fr";

const prestigeBookingUrl =
  "/nl/pages/reserver";
const horizonBookingUrl =
  "/nl/pages/reserver";

export const nlHomeDictionary: HomeDictionary = {
  locale: "nl",

  metadata: {
    title: "BluePortel — Twee mobilhomes aan zee | Opaalkust, Le Portel",
    description:
      "Kies uw mobilhome aan zee op de Opaalkust. Prestige (6 pers.) of Horizon (4 pers.): zeezicht, directe strandtoegang, rechtstreeks boeken zonder kosten.",
    keywords: [
      "mobilhome huren Le Portel",
      "mobilhome aan zee Opaalkust",
      "vakantieverhuur Le Portel",
      "zeezicht mobilhome",
      "accommodatie Opaalkust",
    ],
    authors: [{ name: "BluePortel" }],
    creator: "BluePortel",
    publisher: "BluePortel",
    alternates: getAlternates("nl"),
    openGraph: {
      title: "BluePortel — Twee mobilhomes aan zee | Opaalkust",
      description:
        "Prestige (6 pers.) of Horizon (4 pers.) met uitzicht op het Kanaal. Zeezicht, directe strandtoegang. Rechtstreeks boeken, beste prijs gegarandeerd.",
      type: "website",
      locale: "nl_NL",
      url: `${siteUrl}/nl`,
      siteName: "BluePortel",
      images: [
        {
          url: `${siteUrl}/galerie/blueportel-hero-vue-mer.png`,
          width: 1200,
          height: 630,
          alt: "BluePortel — Panoramisch zeezicht Opaalkust",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "BluePortel — Twee mobilhomes aan zee",
      description: "Prestige (6) of Horizon (4) op de Opaalkust. Zeezicht, strandtoegang, rechtstreeks boeken.",
      images: [`${siteUrl}/galerie/blueportel-hero-vue-mer.png`],
    },
  },

  structuredData: {
    localBusiness: {
      "@context": "https://schema.org",
      "@type": "LodgingBusiness",
      "@id": `${siteUrl}/nl#organization`,
      name: "BluePortel",
      description: "Mobilhome verhuur aan zee in Le Portel op de Opaalkust",
      url: `${siteUrl}/nl`,
      logo: `${siteUrl}/logo.png`,
      telephone: ["+32488832091", "+33745324836"],
      email: "info@blueportel.fr",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Le Portel",
        addressRegion: "Hauts-de-France",
        addressCountry: "FR",
        postalCode: "62480",
      },
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
      description: "Prestige mobilhome, 3 slaapkamers voor 6 personen, zeezicht, directe strandtoegang",
      numberOfRooms: 3,
      occupancy: { "@type": "QuantitativeValue", maxValue: 6 },
    },
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "BluePortel",
      url: `${siteUrl}/nl`,
      logo: `${siteUrl}/logo.png`,
    },
    website: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "BluePortel",
      url: `${siteUrl}/nl`,
    },
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/nl` },
      ],
    },
  },

  hero: {
    title: "Twee mobilhomes aan zee op de Opaalkust",
    subtitle:
      "Kies het verblijf dat bij uw reis past en geniet van een uitzonderlijk uitzicht op het Kanaal.",
    badge: "Le Portel · Opaalkust",
    ratingText: "8,3/10 op Booking.com",
    ctaPrimary: {
      label: "Bekijk verblijven",
      href: "#hebergements",
    },
    ctaSecondary: {
      label: "Nu boeken",
      href: prestigeBookingUrl,
    },
    statsItems: [
      { value: "2", label: "Mobilhomes aan zee" },
      { value: "4 → 6", label: "Gasten welkom" },
      { value: "10 min", label: "Van Nausicaá" },
    ],
  },

  choose: {
    pretitle: "Onze verblijven",
    title: "Kies uw mobilhome",
    subtitle:
      "Twee verblijven aan zee voor verschillende ervaringen. Een voor grote gezinnen, een voor intimiteit.",
    ctaPrestige: "Ontdek Prestige",
    ctaHorizon: "Ontdek Horizon",
  },

  comparison: {
    title: "Welke past bij u?",
    subtitle:
      "Vergelijk in één oogopslag om de ideale accommodatie te kiezen voor uw groep en wensen.",
    ctaPrestige: "Kies Prestige",
    ctaHorizon: "Kies Horizon",
  },

  prestige: {
    sectionLabels: {
      capacity: "personen max.",
      bedrooms: "slaapkamers",
      discover: "Alle foto's bekijken",
      book: "Prestige boeken",
      comingSoon: "",
      equipment: "Voorzieningen",
      included: "Inbegrepen",
      notIncluded: "Niet inbegrepen",
    },
  },

  horizon: {
    sectionLabels: {
      capacity: "personen max.",
      bedrooms: "slaapkamers",
      discover: "Meer informatie",
      book: "Horizon boeken",
      comingSoon: "Definitieve foto's binnenkort beschikbaar",
      equipment: "Voorzieningen",
      included: "Inbegrepen",
      notIncluded: "Niet inbegrepen",
    },
  },

  why: {
    title: "Waarom BluePortel kiezen?",
    subtitle:
      "Een zeldzame locatie op de Opaalkust, een authentieke ervaring en de rust van rechtstreeks boeken.",
    items: [
      {
        icon: "waves",
        title: "Uitzonderlijk zeezicht",
        description:
          "Direct panoramisch uitzicht op het Kanaal vanaf uw terras. De zonsondergangen aan de horizon zijn onvergetelijk.",
      },
      {
        icon: "map",
        title: "Directe strandtoegang",
        description:
          "Het strand is slechts een paar minuten lopen. Geniet elke dag van het fijne zand en de golven.",
      },
      {
        icon: "sunset",
        title: "Zonsondergangen boven het Kanaal",
        description:
          "Elke avond zorgt het gouden licht op zee voor magische momenten vanaf uw privéterras.",
      },
      {
        icon: "home",
        title: "Nausicaá op 10 minuten",
        description:
          "Het grootste aquarium van Europa is op 10 minuten. Perfect voor gezinnen met kinderen op regenachtige dagen.",
      },
      {
        icon: "badge",
        title: "Beste prijs — rechtstreeks boeken",
        description:
          "Boek op blueportel.fr en geniet van de beste prijs zonder servicekosten of commissie.",
      },
      {
        icon: "users",
        title: "Persoonlijk onthaal",
        description:
          "Michel en Véronique verwelkomen u ter plaatse en delen hun beste adressen aan de Opaalkust.",
      },
    ],
  },

  testimonials: {
    title: "Zij verbleven aan zee",
    subtitle: "Gezinnen, koppels, vrienden — ze wilden allemaal terugkomen.",
    stats: [
      { label: "Booking.com-score", value: "8,3/10" },
      { label: "Personeel", value: "10/10" },
      { label: "Prijs-kwaliteit", value: "9,8/10" },
    ],
    reviews: [
      {
        name: "Cecile (Frankrijk)",
        date: "Mei 2026",
        rating: 4.5,
        text: "Zeer aangename en bijzonder vriendelijke eigenaar. Onberispelijke mobilhome — echt niets op aan te merken, perfect. We komen met veel plezier terug. Bedankt Michel en Véronique.",
        platform: "Booking.com",
      },
      {
        name: "Laurianne (België)",
        date: "April 2026",
        rating: 4.5,
        text: "De accommodatie voldeed aan mijn verwachtingen, functioneel, en de ligging was perfect: rustig en dicht bij de zee en haar wandelpaden.",
        platform: "Booking.com",
      },
      {
        name: "Romain (België)",
        date: "Mei 2026",
        rating: 4,
        text: "Het uitzicht vanuit de accommodatie is gewoonweg fantastisch. En zo dicht bij het strand.",
        platform: "Booking.com",
      },
    ],
  },

  faq: {
    title: "Uw vragen, onze antwoorden",
    subtitle: "Alles wat u moet weten om uw verblijf op de Opaalkust voor te bereiden.",
    items: [
      {
        id: "faq-1",
        question: "Wat is de capaciteit van elke accommodatie?",
        answer:
          "<strong>Prestige</strong> biedt plaats voor <strong>6 personen</strong> (3 slaapkamers). <strong>Horizon</strong> is ontworpen voor <strong>4 personen</strong> (2 slaapkamers). Beide hebben direct zeezicht en strandtoegang.",
      },
      {
        id: "faq-2",
        question: "Zijn huisdieren toegestaan?",
        answer:
          "Ja, <strong>één hond</strong> is welkom na voorafgaand akkoord. Neem vóór uw boeking contact met ons op.",
      },
      {
        id: "faq-3",
        question: "Wat zijn de aankomst- en vertrektijden?",
        answer:
          "Aankomst tussen <strong>14u en 18u</strong>, met persoonlijk onthaal door Michel en Véronique. Vertrek vóór <strong>11u</strong>.",
      },
      {
        id: "faq-4",
        question: "Is er parkeerruimte aanwezig?",
        answer:
          "Ja, elke accommodatie heeft een <strong>privéparkeerplaats</strong>. Prestige biedt ruimte voor 2 voertuigen.",
      },
      {
        id: "faq-5",
        question: "Is er wifi beschikbaar?",
        answer:
          "<strong>Starlink wifi</strong> zal beschikbaar zijn vanaf het seizoen 2026. Intussen dekt <strong>5G het gebied perfect</strong>.",
      },
      {
        id: "faq-6",
        question: "Is het strand echt op wandelafstand?",
        answer:
          "Ja, het strand van Le Portel is een paar minuten lopen van beide accommodaties. Ook het kustpad en de kliffen zijn dichtbij.",
      },
      {
        id: "faq-7",
        question: "Welke activiteiten zijn er in de buurt van BluePortel?",
        answer:
          "<strong>Nausicaá</strong> (10 min), strandwandelingen, kustpad, kliffen van Mont de Couppes, lokale markten, visrestaurants, watersportcentrum.",
      },
      {
        id: "faq-8",
        question: "Hoe boek ik aan de beste prijs?",
        answer:
          "De <strong>beste prijs is altijd beschikbaar bij rechtstreeks boeken</strong> op blueportel.fr, zonder servicekosten. U kunt ook boeken via Booking.com of Airbnb (met extra kosten).",
      },
    ],
  },

  finalCta: {
    title: "Uw verblijf aan zee begint hier",
    subtitle:
      "Boek rechtstreeks op blueportel.fr en geniet van de beste prijs, zonder tussenpersoon of verborgen kosten.",
    ctaPrestige: {
      label: "Prestige boeken",
      href: prestigeBookingUrl,
    },
    ctaHorizon: {
      label: "Horizon boeken",
      href: horizonBookingUrl,
    },
  },
};

export default nlHomeDictionary;
