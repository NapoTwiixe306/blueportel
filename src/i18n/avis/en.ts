import type { AvisDictionary } from "./types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

// Genuine reviews from the Blueportel Prestige Booking.com listing
// (overall score 8.3/10 from 8 reviews — ratings converted to /5 for display)
const reviews = [
  {
    name: "Cecile (France)",
    date: "May 2026",
    rating: 4.5,
    text: "Very pleasant and extremely kind owner. The mobile home was impeccable — truly nothing to fault, perfect. Close to the town centre, very pleasant seafront. We will come back with great pleasure. Thank you Michel and Véronique.",
  },
  {
    name: "Laurianne (Belgium)",
    date: "April 2026",
    rating: 4.5,
    text: "The accommodation met my expectations, functional, and the location was perfect: quiet and close to the sea and its coastal paths.",
  },
  {
    name: "Vincent (France)",
    date: "October 2025",
    rating: 4.5,
    text: "Very well equipped mobile home — everything you need for cooking, bathroom and cleaning. Air conditioning and heating. Quite spacious for a family with 2 children. Close to the sea in a gated campsite with a playground. Attentive owner, with board games available.",
  },
  {
    name: "Romain (Belgium)",
    date: "May 2026",
    rating: 4,
    text: "The view from the accommodation is just amazing. So close to the beach.",
  },
];

const reviewDates: Record<string, string> = {
  "Cecile (France)": "2026-05-03",
  "Laurianne (Belgium)": "2026-04-08",
  "Vincent (France)": "2025-10-21",
  "Romain (Belgium)": "2026-05-15",
};

export const enAvisDictionary: AvisDictionary = {
  locale: "en",
  metadata: {
    title: "Blueportel reviews | Guest stories",
    description:
      "Verified Blueportel guest reviews from Booking.com: 8.3/10 overall, location rated 9.5/10 and value for money 9.8/10 for our seafront mobile home in Le Portel.",
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
        ratingValue: "8.3",
        bestRating: "10",
        worstRating: "1",
        reviewCount: "8",
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
        datePublished: reviewDates[review.name],
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
      "The reviews below are verified guest reviews from our Booking.com listing: 8.3/10 overall, location 9.5/10, staff 10/10. Read their feedback — and share yours after your stay.",
  },
  stats: [
    { label: "Booking.com score", value: "8.3/10" },
    { label: "Staff", value: "10/10" },
    { label: "Value for money", value: "9.8/10" },
  ],
  reviews,
  reasons: {
    title: "Why guests recommend Blueportel",
    items: [
      { icon: "heart", text: "Direct sea view from the 12 m² covered terrace" },
      { icon: "smile", text: "Personal welcome on site" },
      { icon: "users", text: "Family friendly: 3 bedrooms, 5 beds, Wi-Fi, air conditioning" },
      { icon: "map", text: "Close to Nausicaá, beach, shops and coastal trails" },
    ],
  },
  share: {
    title: "Share your review",
    description: "Stayed with us? Share your experience and inspire the next seaside getaway.",
    links: [
      { label: "Send an email", href: "mailto:info@blueportel.fr", type: "email" },
      { label: "Facebook review", href: "https://www.facebook.com/blueportel", type: "facebook" },
      { label: "Booking.com review", href: "https://www.booking.com/hotel/fr/blueportel.en-gb.html", type: "airbnb" },
    ],
  },
  cta: {
    title: "Ready to enjoy the same view?",
    description:
      "Reach out for availability or to secure your seaside stay. We reply within 24 hours.",
    phoneLabel: "+32 488 83 20 91",
    phoneHref: "tel:+32488832091",
    emailLabel: "info@blueportel.fr",
    emailHref: "mailto:info@blueportel.fr",
    bookingLabel: "Book now",
    bookingHref:
      "/en/pages/reserver",
  },
  screenReader: {
    title: "Blueportel guest reviews",
    paragraph:
      "Discover feedback from guests who stayed at the Blueportel mobile home in Le Portel: sea view, covered terrace, close to Nausicaá and premium hosting. Contact info@blueportel.fr or +32 488 83 20 91.",
  },
};

export default enAvisDictionary;

