import type { HomeDictionary } from "./types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

export const enHomeDictionary: HomeDictionary = {
  locale: "en",
  metadata: {
    title: "Seafront Mobile Home Rental Le Portel | Opal Coast Sea View",
    description:
      "Book a luxury 3-bedroom mobile home facing the sea in Le Portel on the Opal Coast. Near Nausicaá, panoramic sea view, direct beach access from €90/night.",
    keywords: [
      "mobile home rental Le Portel",
      "seafront mobile home Opal Coast",
      "accommodation near Nausicaa",
      "3 bedroom mobile home sea view",
      "luxury mobile home North France",
      "seaside campsite Le Portel",
      "panoramic sea view rental",
      "beachfront mobile home rental",
    ],
    authors: [{ name: "Blueportel" }],
    creator: "Blueportel",
    publisher: "Blueportel",
    alternates: {
      canonical: "/en",
      languages: {
        "fr-FR": "/fr",
        "en-GB": "/en",
      },
    },
    openGraph: {
      title: "Blueportel - Luxury Seafront Mobile Home | Le Portel",
      description:
        "Luxury 3-bedroom seafront mobile home rental in Le Portel. Panoramic sea view, direct beach access. From €90/night.",
      type: "website",
      locale: "en_GB",
      url: `${siteUrl}/en`,
      siteName: "Blueportel",
      images: [
        {
          url: `${siteUrl}/logo.png`,
          width: 1200,
          height: 630,
          alt: "Blueportel - Logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Blueportel - Seafront Mobile Home",
      description:
        "Rent a luxury 3-bedroom mobile home facing the sea in Le Portel with panoramic views and direct beach access.",
      images: [`${siteUrl}/logo.png`],
    },
  },
  structuredData: {
    localBusiness: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/en#organization`,
      name: "Blueportel",
      description:
        "Luxury seafront mobile home rental in Le Portel on the Opal Coast",
      url: `${siteUrl}/en`,
      logo: `${siteUrl}/logo.png`,
      image: `${siteUrl}/og-image.jpg`,
      telephone: ["+32488832091", "+33745324836"],
      email: "info@blueportel.fr",
      address: {
        "@type": "PostalAddress",
        streetAddress: "rue du Vinâve 32",
        addressLocality: "Liers",
        addressCountry: "BE",
        postalCode: "4042",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 50.7081,
        longitude: 1.5714,
      },
      priceRange: "€€",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "127",
        bestRating: "5",
        worstRating: "1",
      },
    },
    accommodation: {
      "@context": "https://schema.org",
      "@type": "Accommodation",
      name: "Blueportel Luxury Seafront Mobile Home",
      description:
        "Premium 3-bedroom mobile home with panoramic sea view and direct beach access in Le Portel",
      image: `${siteUrl}/og-image.jpg`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Le Portel",
        addressRegion: "Hauts-de-France",
        addressCountry: "FR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 50.7081,
        longitude: 1.5714,
      },
      priceRange: "€€",
      starRating: { "@type": "Rating", ratingValue: "5" },
      numberOfRooms: { "@type": "QuantitativeValue", value: "3" },
      occupancy: { "@type": "QuantitativeValue", maxValue: "6" },
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Panoramic sea view" },
        { "@type": "LocationFeatureSpecification", name: "Direct beach access" },
        { "@type": "LocationFeatureSpecification", name: "Covered terrace" },
        { "@type": "LocationFeatureSpecification", name: "Air conditioning" },
        { "@type": "LocationFeatureSpecification", name: "Heating" },
      ],
    },
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Blueportel",
      url: `${siteUrl}/en`,
      logo: `${siteUrl}/logo.png`,
      description: "Luxury seafront vacation rental",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+32488832091",
        contactType: "Customer Service",
        availableLanguage: ["English", "French"],
        email: "info@blueportel.fr",
      },
      sameAs: [],
    },
    website: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Blueportel",
      url: `${siteUrl}/en`,
      description: "Luxury seafront mobile home rental in Le Portel",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteUrl}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
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
    breadcrumbCurrent: "Luxury Seafront Mobile Home Rental",
    pretitle: "Blueportel mobile home",
    title: "Seafront Mobile Home",
    highlight: "Facing the Sea",
    tagline:
      "3-bedroom mobile home • Opal Coast • Panoramic sea view • Direct beach access",
    srDescription:
      "Discover our luxury 3-bedroom mobile home overlooking the sea in Le Portel. Sleeps 6 guests with panoramic views and direct beach access.",
    ctaPrimary: {
      label: "Book now",
      href: "https://checkout.lodgify.com/en/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1",
      rel: "nofollow",
    },
    ctaSecondary: {
      label: "Explore the mobile home",
      href: "/photo-gallery",
    },
  },
  reservation: {
    title: "Discover our seafront mobile home",
    subtitle:
      "3-bedroom mobile home • Opal Coast • Premium amenities for 6 guests",
    priceLabel: "Nightly rate",
    priceValue: "€90",
    priceSuffix: "/ night",
    note:
      "Select your dates to view the full price of your stay in our seafront mobile home.",
    highlightTitle: "Inside the mobile home",
    highlightSubtitle: "3 bedrooms, 2 bathrooms, fully equipped kitchen",
    selectionNote:
      "Select your dates to view the final price and availability.",
  },
  features: {
    srTitle: "Highlights of your seafront mobile home rental",
    cards: [
      {
        icon: "home",
        title: "6-guest capacity",
        description: "Three bright bedrooms with hotel-quality bedding.",
      },
      {
        icon: "waves",
        title: "Panoramic sea view",
        description: "Unobstructed view over the Opal Coast from the lounge.",
      },
      {
        icon: "map",
        title: "Direct beach access",
        description: "Step straight onto the sand from the mobile home.",
      },
      {
        icon: "star",
        title: "Premium amenities",
        description: "Air conditioning, heating and covered terrace included.",
      },
    ],
  },
  location: {
    title: "The Prestige Home",
    highlight: "Prestige",
    subtitle: "Premium comfort with panoramic sea view",
    intro: [
      "Our seafront mobile home in Le Portel combines premium comfort with an exceptional sea view.",
      "The 3-bedroom layout welcomes up to 6 guests with generous storage and quality finishes.",
    ],
    comfortParagraph: [
      "Whether you travel with family or friends, this rental is designed for stress-free seaside breaks.",
      "Enjoy direct beach access and a large covered terrace for unforgettable sunsets.",
    ],
    interiorTitle: "Inside the mobile home",
    interiorParagraph:
      "Everything is included for a seamless stay. Highlights include:",
    interiorList: [
      "Master bedroom with ensuite bathroom and sea view",
      "Two twin rooms with a second bathroom",
      "Fully equipped kitchenette facing the sea",
      "Air conditioning for summer and heating for cooler evenings",
    ],
    exteriorTitle: "Outdoor spaces",
    exteriorParagraph:
      "Make the most of the Opal Coast climate with generous outdoor areas:",
    exteriorList: [
      "12 m² covered terrace with panoramic sea view",
      "Private path leading straight to the beach",
      "Outdoor lounge for slow mornings and sunset drinks",
    ],
    imageAlt:
      "Blueportel covered terrace overlooking the sea in Le Portel on the Opal Coast",
  },
  cta: {
    title: "Ready to book your stay by the sea?",
    description:
      "Reserve your Blueportel mobile home now and enjoy a high-end seaside holiday on the Opal Coast.",
    buttonLabel: "Book now",
    buttonHref:
      "https://checkout.lodgify.com/en/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1",
    buttonRel: "nofollow",
  },
  screenReader: {
    heading: "Blueportel seafront mobile home details",
    paragraphs: [
      "Blueportel offers a luxury seaside mobile home in Le Portel. Three bedrooms, panoramic view and direct access to the beach.",
      "The covered terrace, air conditioning, heating and premium bedding ensure comfort all year round.",
      "Book from €90 per night for 6 guests and enjoy an unforgettable family holiday.",
    ],
    listTitle: "Why choose Blueportel?",
    listItems: [
      "3-bedroom seafront mobile home",
      "Panoramic view of the Opal Coast",
      "Direct beach access",
      "Covered terrace and outdoor lounge",
      "Premium amenities from €90/night",
      "Perfect for families or friends",
    ],
  },
  reservationForm: {
    arrivalLabel: "Arrival",
    arrivalPlaceholder: "dd/mm/yyyy",
    departureLabel: "Departure",
    departurePlaceholder: "dd/mm/yyyy",
    guestsLabel: "Guests",
    guestDropdownLabel: "Select number of guests",
    guestOptions: [
      "1 Adult",
      "2 Adults",
      "3 Adults",
      "4 Adults",
      "5 Adults",
      "6 Adults",
    ],
    submitLabel: "Reserve",
    bookingLocaleSegment: "en",
    currency: "EUR",
  },
};

export default enHomeDictionary;

