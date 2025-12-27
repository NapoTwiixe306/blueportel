import type { OverviewDictionary } from "./types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

export const enOverviewDictionary: OverviewDictionary = {
  locale: "en",
  metadata: {
    title: "Mobile Home Rental Le Portel | 3 Bedroom Sea View Opal Coast",
    description:
      "Book your premium mobile home in Le Portel, France. 3 bedrooms, sleeps 6, panoramic sea view on the Opal Coast. Near Nausicaá. Luxury comfort guaranteed.",
    alternates: {
      canonical: "/en/mobile-home-rental-le-portel",
      languages: {
        "fr-FR": "/fr/location-mobil-home-le-portel",
        "en-GB": "/en/mobile-home-rental-le-portel",
        "x-default": "/fr/location-mobil-home-le-portel",
      },
    },
    openGraph: {
      title: "Mobile Home Rental Le Portel | Panoramic Sea View | Blueportel",
      description:
        "Experience Blueportel: 3-bedroom mobile home rental facing the sea in Le Portel. Perfect for families, luxury comfort on the Opal Coast.",
      type: "website",
      url: `${siteUrl}/en/mobile-home-rental-le-portel`,
    },
  },
  structuredData: {
    equipment: {
      "@context": "https://schema.org",
      "@type": "Accommodation",
      name: "Blueportel Mobile Home",
      description: "Premium 3-bedroom mobile home facing the sea in Le Portel, Opal Coast",
      url: `${siteUrl}/en/mobile-home-rental-le-portel`,
      image: `${siteUrl}/galerie/blueportel-terrasse-ensoleillee.jpg`,
      occupancy: { "@type": "QuantitativeValue", maxValue: 6 },
      numberOfRooms: 3,
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "12 m² sea view terrace" },
        { "@type": "LocationFeatureSpecification", name: "Air conditioning" },
        { "@type": "LocationFeatureSpecification", name: "High-speed Wi-Fi" },
        { "@type": "LocationFeatureSpecification", name: "Pets allowed upon request" },
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
          name: "Mobile Home Rental Le Portel",
          item: `${siteUrl}/en/mobile-home-rental-le-portel`,
        },
      ],
    },
    lodgingBusiness: {
      "@context": "https://schema.org",
      "@type": "LodgingBusiness",
      "name": "Blueportel - Mobile Home Rental Le Portel",
      "image": `${siteUrl}/galerie/blueportel-terrasse-ensoleillee.jpg`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Camping Le Phare d'Opale, 2 rue de la Mer",
        "addressLocality": "Le Portel",
        "postalCode": "62480",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 50.7081,
        "longitude": 1.5714
      },
      "url": `${siteUrl}/en/mobile-home-rental-le-portel`,
      "telephone": "+32488832091",
      "priceRange": "$$",
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Sea View" },
        { "@type": "LocationFeatureSpecification", "name": "3 Bedrooms" },
        { "@type": "LocationFeatureSpecification", "name": "Equipped Kitchen" },
        { "@type": "LocationFeatureSpecification", "name": "Terrace" }
      ]
    },
    product: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Luxury Mobile Home Stay Le Portel",
      "description": "Seasonal rental of a 42m² mobile home with 3 bedrooms and panoramic sea view terrace.",
      "brand": {
        "@type": "Brand",
        "name": "Blueportel"
      },
      "offers": {
        "@type": "Offer",
        "url": `${siteUrl}/en/mobile-home-rental-le-portel`,
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock"
      }
    },
    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How many guests can stay in the mobile home?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Blueportel mobile home can accommodate up to 6 guests with its 3 spacious bedrooms."
          }
        },
        {
          "@type": "Question",
          "name": "Does the mobile home have a sea view?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our mobile home features an exceptional panoramic sea view from the living area and its 12 m² terrace."
          }
        },
        {
          "@type": "Question",
          "name": "Are pets allowed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pets are welcome upon prior agreement from us."
          }
        }
      ]
    }
  },
  hero: {
    homeLabel: "Home",
    breadcrumbCurrent: "Mobile Home Rental Le Portel",
    pretitle: "Blueportel Mobile Home • Opal Coast",
    title: "Mobile Home Rental Le Portel: Your Sea View Escape on the Opal Coast",
    description:
      "Discover our premium 42 m² mobile home perched on the cliffs of Le Portel. Enjoy breathtaking sea views, 3 comfortable bedrooms, and a 12 m² covered terrace for an unforgettable stay for up to 6 guests.",
  },
  stayCard: {
    title: "Book Your Stay in Le Portel",
    description:
      "Treat yourself to the luxury of a 3-bedroom mobile home facing the English Channel. Between wild nature and modern comfort, Blueportel is the perfect base for exploring the Opal Coast.",
    bullets: [
      "Capacity 6 guests • 3 bedrooms • 5 comfort beds",
      "Check-in from 2 PM • Check-out until 12 PM • VIP welcome",
      "Premium location: Camping Le Phare d'Opale",
    ],
    cta: {
      primary: {
        label: "Check Availability",
        href: "https://checkout.lodgify.com/en/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1",
        rel: "nofollow",
      },
      secondary: { label: "Photo Gallery", href: "/photo-gallery" },
    },
  },
  heroImageAlt: "Panoramic sea view from the terrace of Blueportel mobile home in Le Portel",
  interior: {
    title: "Premium Interior Amenities",
    items: [
      "Master bedroom with private en-suite and double bed",
      "Two twin bedrooms (4 additional sleeping spots)",
      "Large bright living area with panoramic sofa and TV",
      "Fully equipped kitchen: oven, microwave, large fridge, coffee makers",
      "Reversible air conditioning and 4-season reinforced insulation",
    ],
  },
  exterior: {
    title: "Outdoor Space & Surroundings",
    items: [
      "12 m² covered terrace with direct sea and cliff views",
      "Complete garden furniture, loungers for relaxation",
      "Prime cliffside location, quiet with no direct overlooking",
      "Direct access to hiking trails and the beach",
    ],
  },
  highlights: [
    {
      icon: "beds",
      title: "3 Real Bedrooms",
      description: "Optimized living space to comfortably host 6 adults or a family.",
    },
    {
      icon: "bath",
      title: "2 Bathrooms",
      description: "No more waiting in the morning: enjoy two modern and functional bathrooms.",
    },
    {
      icon: "terrace",
      title: "Sea View Terrace",
      description: "The highlight: 12 m² suspended over the sea for your meals and drinks.",
    },
    {
      icon: "kitchen",
      title: "Home-like Kitchen",
      description: "Everything you need to cook local Opal Coast products.",
    },
  ],
  equipment: [
    {
      title: "Comfort & Technology",
      items: [
        "Free high-speed Wi-Fi",
        "Smart TV with international channels",
        "Air conditioning for hot summers",
        "Efficient central heating",
      ],
    },
    {
      title: "Equipped Kitchen",
      items: [
        "4-burner stove & extractor hood",
        "Full-size oven & microwave",
        "Large capacity fridge-freezer",
        "Dishwasher (depending on season)",
      ],
    },
    {
      title: "Included Services",
      items: [
        "Private parking in front of the mobile home",
        "Utilities included (water, gas, electricity)",
        "24/7 personalized assistance",
        "End-of-stay cleaning option",
      ],
    },
  ],
  location: {
    title: "Strategic Location in Le Portel",
    description:
      "Our mobile home is located within the prestigious Camping Le Phare d'Opale. Just a few minutes' walk from the center of Le Portel, its shops and traditional market. The cliffside position guarantees absolute calm, far from the hustle and bustle, while being only 15 minutes from Nausicaá and Boulogne-sur-Mer.",
  },
  policies: {
    title: "Booking Conditions",
    items: [
      "Simple booking via our secure engine",
      "Security deposit required upon arrival",
      "Non-smoking indoors",
      "Pets allowed upon specific request",
    ],
  },
  cta: {
    title: "Book your Mobile Home in Le Portel today",
    description:
      "Don't miss the opportunity to stay in one of the most sought-after mobile homes on the Opal Coast. Contact us with any questions.",
    buttons: {
      primary: { label: "+32 488 83 20 91", href: "tel:+32488832091" },
      secondary: { label: "info@blueportel.fr", href: "mailto:info@blueportel.fr" },
    },
  },
  seoContent: [
    {
      title: "Mobile Home Rental in Le Portel: Comfort and Sea Views Combined",
      content: `Looking for the ideal mobile home rental in Le Portel? Welcome to Blueportel, your premium choice for an exceptional stay on the Opal Coast. Our luxury mobile home, nestled on the heights of the Boulonnais cliffs, redefines high-end camping. Here, there are no compromises: you enjoy the comfort of a real home while benefiting from the freedom of the great outdoors.

      Le Portel is an authentic destination, popular for its fine sandy beaches and family-friendly atmosphere. By choosing our 3-bedroom mobile home, you ensure a generous living space of 42 m², perfectly suited to accommodate up to 6 people. Whether you are with family or friends, everyone will have their privacy thanks to a smart layout and two private bathrooms.`
    },
    {
      title: "A 3-Bedroom Mobile Home for the Whole Family",
      content: `The rarity of our offer lies in its 3 real bedrooms. Unlike standard accommodations often limited in space, Blueportel was designed for large families or groups of friends. The master suite offers a comfortable double bed with direct access to its own shower room, while the other two bedrooms feature twin beds.

      Each room has been thought out to maximize storage and rest. Quality hotel-grade mattresses ensure peaceful nights, lulled by the distant sound of the sea. This is the major asset of our rental in Le Portel: being able to house everyone without sacrificing individual comfort.`
    },
    {
      title: "Breathtaking Sea Views on the Opal Coast",
      content: `Imagine having breakfast on a 12 m² terrace, with your eyes fixed on the blue of the English Channel. Our mobile home in Le Portel enjoys a prime location on the cliff. The covered terrace allows you to enjoy the outdoors in any weather, offering a changing panorama with the tides.

      The Opal Coast is famous for its magnificent light that has inspired so many painters. From your Blueportel rental, you are in the front row to admire the sunsets over the sea, a daily spectacle that never gets old. It is this immediate proximity to the wild nature of the coast that makes our mobile home a rare gem in Le Portel.`
    },
    {
      title: "Stay Near Nausicaá and Boulogne-sur-Mer",
      content: `Ideally located, our mobile home in Le Portel is the perfect base for visiting Nausicaá, Europe's largest aquarium, just 15 minutes away by car. This is a must-do activity for both kids and adults during a stay on the Opal Coast.

      By staying with us, you are also just steps away from Boulogne-sur-Mer, a city of Art and History, with its ramparts, cathedral, and active fishing port. You can enjoy the best fresh seafood before returning to the calm of your mobile home on the Le Portel cliff.`
    },
    {
      title: "A Quiet Family-Friendly Campsite at Le Phare d'Opale",
      content: `Our rental is located in the Le Phare d'Opale campsite. This site is preferred for its calm: here, there is no noisy pool or late-night disco. We prioritize tranquility and rejuvenation. This is a deliberate choice to offer our guests an experience focused on nature and rest.

      The campsite still offers all essential services: children's playground, pétanque courts, and direct access to hiking trails along the coast. The Le Portel Lighthouse, an iconic guardian of the coast, stands proudly just a few meters away, adding a touch of magic to the environment of your mobile home.`
    }
  ],
  screenReader: {
    title: "Detailed overview of Blueportel mobile home in Le Portel",
    paragraphs: [
      "42 m² Blueportel mobile home with panoramic sea views, located on the Le Portel cliff within the Le Phare d’Opale campsite. Upscale accommodation featuring 3 spacious bedrooms, 5 beds, 2 modern bathrooms, a fully equipped kitchen, and a 12 m² covered terrace.",
      "Ideally located near Nausicaá, Boulogne-sur-Mer, and the shops of Le Portel. Included amenities: reversible AC, heating, high-speed Wi-Fi, smart TV, private parking, and direct access to the Opal Coast coastal trails. Pets accepted on request.",
    ],
  },
};

export default enOverviewDictionary;
