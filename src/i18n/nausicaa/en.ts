import type { NausicaaDictionary } from "./types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

const bookingUrl =
  "https://checkout.lodgify.com/en/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1";

export const enNausicaaDictionary: NausicaaDictionary = {
  locale: "en",
  metadata: {
    title: "Accommodation Near Nausicaá Boulogne-sur-Mer | Sea View Rental",
    description:
      "Sea-view 3-bedroom mobile home only 10 minutes from Nausicaá. Practical tips for your visit and all-inclusive seaside comfort.",
    alternates: {
      canonical: "/en/accommodation-near-nausicaa",
      languages: {
        "fr-FR": "/fr/hebergement-proche-nausicaa",
        "en-GB": "/en/accommodation-near-nausicaa",
        "nl-NL": "/nl/nausicaa-dichtbij",
      },
    },
    openGraph: {
      title: "Accommodation Near Nausicaá Boulogne-sur-Mer | Blueportel",
      description:
        "Premium mobile home with panoramic sea view, ideal base to explore Nausicaá with the family.",
      type: "website",
      url: `${siteUrl}/en/accommodation-near-nausicaa`,
    },
  },
  hero: {
    homeLabel: "Home",
    breadcrumbCurrent: "Nausicaá",
    title: "Seafront mobile home in Le Portel —",
    highlight: "~10 min from Nausicaá",
    subtitle: "3-Bedroom Mobile Home • Panoramic Sea View • Near Nausicaá (Boulogne-sur-Mer)",
    srTitle: "Sea-view mobile home near Nausicaá - Blueportel",
    srParagraphs: [
      "Blueportel offers a fully equipped sea-view mobile home with 3 bedrooms, 2 bathrooms and a covered terrace — perfect for visiting Nausicaá.",
      "The aquarium is about 6 km away, roughly 10 minutes by car or 24 minutes by bus.",
    ],
  },
  structuredData: {
    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How far are we from Nausicaá?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Roughly 6 km — expect about a 10-minute drive depending on traffic.",
          },
        },
        {
          "@type": "Question",
          name: "Is there public transport?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, a local bus connects Le Portel to Nausicaá in about 24 minutes with hourly service.",
          },
        },
        {
          "@type": "Question",
          name: "What are Nausicaá’s opening hours?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Usually 09:30–18:30; please double-check seasonal adjustments on the official website.",
          },
        },
        {
          "@type": "Question",
          name: "Should we book tickets in advance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, online booking is recommended to avoid queues, especially during holidays.",
          },
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
          name: "Accommodation Near Nausicaá",
          item: `${siteUrl}/en/accommodation-near-nausicaa`,
        },
      ],
    },
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Blueportel",
      url: siteUrl,
      logo: `${siteUrl}/location-mobil-home-le-portel-logo.png`,
      description: "Luxury sea-view mobile home rental in Le Portel on the Opal Coast",
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
      name: "Nausicaá - National Sea Centre",
      description: "Europe’s largest aquarium, located in Boulogne-sur-Mer",
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
    "Blueportel is your cosy sea-view base with 3 bedrooms and 2 bathrooms, the ideal launchpad for a family trip to Nausicaá.",
  benefitsTitle: "Why stay at Blueportel for your Nausicaá visit?",
  benefits: [
    {
      icon: "home",
      title: "Space & comfort",
      description: "Master suite, two twin rooms, full kitchen, AC/heating — perfect for 4 to 6 guests.",
    },
    {
      icon: "waves",
      title: "Sea-view terrace",
      description: "12 m² covered terrace for sunrise breakfasts and sunset drinks even mid-season.",
    },
    {
      icon: "map",
      title: "Prime location",
      description: "Inside Camping Le Phare d’Opale in Le Portel, just minutes from Boulogne-sur-Mer and Nausicaá.",
    },
  ],
  accessTitle: "Getting to Nausicaá from Blueportel",
  accessCards: [
    {
      icon: "car",
      title: "By car (~10 min)",
      description: "A 6 km coastal drive to Boulevard Sainte-Beuve with nearby parking.",
    },
    {
      icon: "bus",
      title: "By bus (~24 min)",
      description: "Local buses link Le Portel to Nausicaá (hourly service, stop “Nausicaá”).",
    },
    {
      icon: "walk",
      title: "On foot / by bike",
      description: "Enjoy the coastal trail between Le Portel and Boulogne; plan extra time and weather-ready gear.",
    },
  ],
  infoTitle: "Practical tips",
  infoItems: [
    {
      icon: "clock",
      title: "Opening hours",
      description: "Usually 09:30–18:30; check the official website for seasonal schedules.",
    },
    {
      icon: "star",
      title: "Tickets",
      description: "Book online to skip the lines, especially during weekends and holidays.",
    },
    {
      icon: "map",
      title: "Address",
      description: "Boulevard Sainte-Beuve, 62200 Boulogne-sur-Mer.",
    },
  ],
  faqTitle: "FAQ — Blueportel x Nausicaá",
  faqItems: [
    {
      id: "1",
      question: "How far are we from Nausicaá?",
      answer: "Roughly 6 km — about 10 minutes by car depending on traffic.",
    },
    {
      id: "2",
      question: "Is there public transport?",
      answer: "Yes, a local bus runs every hour and takes roughly 24 minutes door to door.",
    },
    {
      id: "3",
      question: "What are the opening hours?",
      answer: "Most days 09:30–18:30. Please check the official site for seasonal changes.",
    },
    {
      id: "4",
      question: "Should I book tickets in advance?",
      answer: "Absolutely — online tickets help you avoid queues during peak periods.",
    },
  ],
  cta: {
    title: "Ready to dive in?",
    description:
      "Between Nausicaá, Le Portel beaches and the Opal Coast cliffs, Blueportel is the perfect seaside hub.",
    buttons: {
      primary: { label: "Check availability", href: bookingUrl, rel: "nofollow" },
      secondary: { label: "Contact us", href: "/contact" },
    },
  },
  contact: {
    title: "Need help planning?",
    description: "We’ll gladly help with transport tips, ticket advice or bespoke stays.",
    buttons: [
      { icon: "phone", label: "+32 488 83 20 91", href: "tel:+32488832091" },
      { icon: "mail", label: "info@blueportel.fr", href: "mailto:info@blueportel.fr" },
    ],
  },
};

export default enNausicaaDictionary;

