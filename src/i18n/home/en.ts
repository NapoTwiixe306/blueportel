import type { HomeDictionary } from "./types";
import { getAlternates } from "../../lib/seo/hreflang";

const siteUrl = "https://blueportel.fr";

const prestigeBookingUrl =
  "/en/pages/reserver";
const horizonBookingUrl =
  "/en/pages/reserver";

export const enHomeDictionary: HomeDictionary = {
  locale: "en",

  metadata: {
    title: "Sea-view mobile home rental in Le Portel, Opal Coast | BluePortel",
    description:
      "Choose your mobile home facing the sea on the Opal Coast. Prestige (6 guests) or Horizon (4 guests): sea view, direct beach access, book directly with no fees.",
    keywords: [
      "mobile home rental Le Portel",
      "seafront mobile home Opal Coast",
      "holiday rental Le Portel France",
      "sea view mobile home",
      "accommodation Opal Coast",
      "mobile home 6 people sea view",
    ],
    authors: [{ name: "BluePortel" }],
    creator: "BluePortel",
    publisher: "BluePortel",
    alternates: getAlternates("en"),
    openGraph: {
      title: "BluePortel — Two seafront mobile homes | Opal Coast",
      description:
        "Prestige (6 guests) or Horizon (4 guests) facing the English Channel. Sea view, direct beach access. Book direct, best price guaranteed.",
      type: "website",
      locale: "en_GB",
      url: `${siteUrl}/en`,
      siteName: "BluePortel",
      images: [
        {
          url: `${siteUrl}/galerie/blueportel-hero-vue-mer.png`,
          width: 1200,
          height: 630,
          alt: "BluePortel — Panoramic sea view Opal Coast",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "BluePortel — Two seafront mobile homes",
      description: "Prestige (6) or Horizon (4) on the Opal Coast. Sea view, beach access, book direct.",
      images: [`${siteUrl}/galerie/blueportel-hero-vue-mer.png`],
    },
  },

  structuredData: {
    localBusiness: {
      "@context": "https://schema.org",
      "@type": "LodgingBusiness",
      "@id": `${siteUrl}/en#organization`,
      name: "BluePortel",
      description: "Seafront mobile home rentals in Le Portel on the Opal Coast",
      url: `${siteUrl}/en`,
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
      description: "Prestige mobile home, 3 bedrooms for 6 guests, sea view, direct beach access",
      numberOfRooms: 3,
      occupancy: { "@type": "QuantitativeValue", maxValue: 6 },
    },
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "BluePortel",
      url: `${siteUrl}/en`,
      logo: `${siteUrl}/logo.png`,
    },
    website: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "BluePortel",
      url: `${siteUrl}/en`,
    },
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/en` },
      ],
    },
  },

  hero: {
    title: "Sea-view mobile home rental in Le Portel, Opal Coast",
    subtitle:
      "Choose the accommodation that suits your stay and enjoy an exceptional view over the English Channel.",
    badge: "Le Portel · Opal Coast",
    ratingText: "8.3/10 on Booking.com",
    ctaPrimary: {
      label: "View accommodations",
      href: "#hebergements",
    },
    ctaSecondary: {
      label: "Book now",
      href: prestigeBookingUrl,
    },
    statsItems: [
      { value: "2", label: "Seafront mobile homes" },
      { value: "4 → 6", label: "Guests welcomed" },
      { value: "10 min", label: "From Nausicaá" },
    ],
  },

  choose: {
    pretitle: "Our accommodations",
    title: "Choose your mobile home",
    subtitle:
      "Two seafront accommodations for different experiences. One for large families, one for intimacy.",
    ctaPrestige: "Discover Prestige",
    ctaHorizon: "Discover Horizon",
  },

  comparison: {
    title: "Which one suits you?",
    subtitle:
      "Compare at a glance to choose the ideal accommodation for your group and preferences.",
    ctaPrestige: "Choose Prestige",
    ctaHorizon: "Choose Horizon",
  },

  prestige: {
    sectionLabels: {
      capacity: "guests max.",
      bedrooms: "bedrooms",
      discover: "View all photos",
      book: "Book Prestige",
      comingSoon: "",
      equipment: "Amenities",
      included: "Included",
      notIncluded: "Not included",
    },
  },

  horizon: {
    sectionLabels: {
      capacity: "guests max.",
      bedrooms: "bedrooms",
      discover: "Learn more",
      book: "Book Horizon",
      comingSoon: "Definitive photos coming soon",
      equipment: "Amenities",
      included: "Included",
      notIncluded: "Not included",
    },
  },

  why: {
    title: "Why choose BluePortel?",
    subtitle:
      "A rare setting on the Opal Coast, an authentic experience, and the peace of mind of booking directly.",
    items: [
      {
        icon: "waves",
        title: "Exceptional sea view",
        description:
          "Direct panoramic view over the English Channel from your terrace. Sunsets on the horizon are unforgettable.",
      },
      {
        icon: "map",
        title: "Direct beach access",
        description:
          "The beach is just a few minutes walk away. Enjoy the fine sand and waves of the Opal Coast every day.",
      },
      {
        icon: "sunset",
        title: "Sunsets over the Channel",
        description:
          "Every evening, the golden light on the sea creates magical moments from your private terrace.",
      },
      {
        icon: "home",
        title: "Nausicaá 10 minutes away",
        description:
          "Europe's largest aquarium is just 10 minutes away. Perfect for families with children on rainy days.",
      },
      {
        icon: "badge",
        title: "Best price — book direct",
        description:
          "Book on blueportel.fr and get the best price with no service fees or intermediary commission.",
      },
      {
        icon: "users",
        title: "Personalised welcome",
        description:
          "Michel and Véronique welcome you on site and share their best local tips for a memorable stay.",
      },
    ],
  },

  testimonials: {
    title: "They stayed by the sea",
    subtitle: "Families, couples, friends — they all left wanting to come back.",
    stats: [
      { label: "Booking.com score", value: "8.3/10" },
      { label: "Staff", value: "10/10" },
      { label: "Value for money", value: "9.8/10" },
    ],
    reviews: [
      {
        name: "Cecile (France)",
        date: "May 2026",
        rating: 4.5,
        text: "Very pleasant and extremely kind owner. The mobile home was impeccable — truly nothing to fault, perfect. We will come back with great pleasure. Thank you Michel and Véronique.",
        platform: "Booking.com",
      },
      {
        name: "Laurianne (Belgium)",
        date: "April 2026",
        rating: 4.5,
        text: "The accommodation met my expectations, functional, and the location was perfect: quiet and close to the sea and its coastal paths.",
        platform: "Booking.com",
      },
      {
        name: "Romain (Belgium)",
        date: "May 2026",
        rating: 4,
        text: "The view from the accommodation is just amazing. So close to the beach.",
        platform: "Booking.com",
      },
    ],
  },

  faq: {
    title: "Your questions, our answers",
    subtitle: "Everything you need to know to prepare your stay on the Opal Coast.",
    items: [
      {
        id: "faq-1",
        question: "What is the capacity of each accommodation?",
        answer:
          "<strong>Prestige</strong> sleeps up to <strong>6 guests</strong> (3 bedrooms). <strong>Horizon</strong> is designed for <strong>4 guests</strong> (2 bedrooms). Both have direct sea views and beach access.",
      },
      {
        id: "faq-2",
        question: "Are pets allowed?",
        answer:
          "Yes, <strong>one dog</strong> is allowed subject to prior agreement. Please contact us before booking.",
      },
      {
        id: "faq-3",
        question: "What are the check-in and check-out times?",
        answer:
          "Check-in is between <strong>2pm and 6pm</strong>, with a personal welcome from Michel and Véronique. Check-out is before <strong>11am</strong>.",
      },
      {
        id: "faq-4",
        question: "Is there parking on site?",
        answer:
          "Yes, each accommodation has <strong>private parking</strong>. Prestige accommodates up to 2 vehicles.",
      },
      {
        id: "faq-5",
        question: "Is Wi-Fi available?",
        answer:
          "<strong>Starlink Wi-Fi</strong> will be available from the 2026 season. In the meantime, <strong>5G covers the area perfectly</strong>.",
      },
      {
        id: "faq-6",
        question: "Is the beach really within walking distance?",
        answer:
          "Yes, Le Portel beach is a few minutes walk from both accommodations. The coastal path and cliffs are also nearby.",
      },
      {
        id: "faq-7",
        question: "What activities are there near BluePortel?",
        answer:
          "<strong>Nausicaá</strong> (10 min), beach walks, coastal path, Mont de Couppes cliffs, Fort de l'Heurt, local markets, seafood restaurants, water sports centre.",
      },
      {
        id: "faq-8",
        question: "How do I get the best rate?",
        answer:
          "The <strong>best rate is always by booking direct</strong> on blueportel.fr, with no service fees. You can also book on Booking.com or Airbnb (with extra fees).",
      },
    ],
  },

  finalCta: {
    title: "Your seaside stay starts here",
    subtitle:
      "Book directly on blueportel.fr and get the best price, with no intermediary or hidden fees.",
    ctaPrestige: {
      label: "Book Prestige",
      href: prestigeBookingUrl,
    },
    ctaHorizon: {
      label: "Book Horizon",
      href: horizonBookingUrl,
    },
  },
};

export default enHomeDictionary;
