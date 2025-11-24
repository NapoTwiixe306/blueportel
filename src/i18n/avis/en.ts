import type { AvisDictionary } from "./types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

const reviews = [
  {
    name: "Camille & Romain",
    date: "August 2024",
    rating: 5,
    text: "Unbeatable sea view, perfect terrace breakfasts and Isabelle’s warm welcome. Ideal base to visit Nausicaá with the kids!",
  },
  {
    name: "Sébastien & Julie",
    date: "July 2024",
    rating: 5,
    text: "Beautifully decorated mobile home, premium bedding, every detail covered. Parking, Wi-Fi, AC… we’ll be back!",
  },
  {
    name: "Élodie",
    date: "May 2024",
    rating: 4.8,
    text: "Superb stay. Quiet setting, ocean view, cliff hikes. Special mention for the fully equipped kitchen.",
  },
];

export const enAvisDictionary: AvisDictionary = {
  locale: "en",
  metadata: {
    title: "Blueportel reviews | Guest stories",
    description:
      "Verified Blueportel guest ratings. See why our seafront mobile home has held a 4.9/5 score since 2022.",
    alternates: {
      canonical: "/en/pages/avis",
      languages: {
        "fr-FR": "/fr/pages/avis",
        "en-GB": "/en/pages/avis",
        "nl-NL": "/nl/pages/avis",
      },
    },
    openGraph: {
      title: "Blueportel guest reviews",
      description: "Authentic stories from travellers who stayed right by the sea in Le Portel.",
      type: "website",
      url: `${siteUrl}/en/pages/avis`,
    },
  },
  structuredData: {
    schema: {
      "@context": "https://schema.org",
      "@type": "Accommodation",
      "@id": `${siteUrl}#blueportel-reviews`,
      name: "Blueportel mobile home",
      description: "Guest reviews for the Blueportel mobile home inside Camping Le Phare d’Opale.",
      url: `${siteUrl}/en/pages/avis`,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "127",
      },
      review: reviews.map((review) => ({
        "@type": "Review",
        author: { "@type": "Person", name: review.name },
        reviewBody: review.text,
        reviewRating: {
          "@type": "Rating",
          ratingValue: review.rating.toString(),
          bestRating: "5",
          worstRating: "1",
        },
        datePublished: "2024-01-01",
      })),
    },
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/en` },
        { "@type": "ListItem", position: 2, name: "Reviews", item: `${siteUrl}/en/pages/avis` },
      ],
    },
  },
  hero: {
    homeLabel: "Home",
    breadcrumbCurrent: "Reviews",
    pretitle: "Guest stories • Blueportel",
    title: "They stayed by the sea in Le Portel",
    description:
      "Read what travellers loved about the panoramic view, covered terrace and premium hosting at Blueportel. Share your experience to help future guests.",
  },
  stats: [
    { label: "Average rating", value: "4.9/5" },
    { label: "Stays in 2024", value: "127+" },
    { label: "Returning guests", value: "62%" },
  ],
  reviews,
  reasons: {
    title: "Why guests recommend Blueportel",
    items: [
      { icon: "heart", text: "Direct sea view from the 12 m² covered terrace" },
      { icon: "smile", text: "Personal welcome from Isabelle on site" },
      { icon: "users", text: "Family friendly: 3 bedrooms, 5 beds, Wi-Fi, air conditioning" },
      { icon: "map", text: "Close to Nausicaá, beach, shops and coastal trails" },
    ],
  },
  share: {
    title: "Share your review",
    description: "Stayed with us? Share your experience and inspire the next seaside getaway.",
    links: [
      { label: "Send an email", href: "mailto:infos@blueportel.fr", type: "email" },
      { label: "Facebook review", href: "https://www.facebook.com/blueportel", type: "facebook" },
      { label: "Airbnb review", href: "https://www.airbnb.fr/rooms/123456", type: "airbnb" },
    ],
  },
  cta: {
    title: "Ready to enjoy the same view?",
    description:
      "Reach out for availability or to secure your seaside stay. We reply within 24 hours.",
    phoneLabel: "+32 488 83 20 91",
    phoneHref: "tel:+32488832091",
    emailLabel: "infos@blueportel.fr",
    emailHref: "mailto:infos@blueportel.fr",
    bookingLabel: "Book now",
    bookingHref:
      "https://checkout.lodgify.com/en/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1",
  },
  screenReader: {
    title: "Blueportel guest reviews",
    paragraph:
      "Discover feedback from guests who stayed at the Blueportel mobile home in Le Portel: sea view, covered terrace, close to Nausicaá and premium hosting. Contact info@blueportel.fr or +32 488 83 20 91.",
  },
};

export default enAvisDictionary;

