import type { FAQDictionary } from "./types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

const faqEntriesEn = [
  {
    id: "1",
    question: "Where is the Blueportel mobile home located?",
    answer:
      "Blueportel sits in <strong>Le Portel</strong>, inside <strong>Camping Le Phare d’Opale</strong> on the <strong>Opal Coast</strong>, just outside <strong>Boulogne-sur-Mer</strong>. Perched on the cliff, it offers sweeping sea views and the English coastline on clear days. Beach, coastal path and village centre are all a few minutes on foot.",
  },
  {
    id: "2",
    question: "How many guests can stay?",
    answer:
      "Up to <strong>6 guests</strong>:<ul class=\"list-disc list-inside mt-2 space-y-1\"><li>1 master suite with 160×190 bed and ensuite bathroom</li><li>2 twin bedrooms</li><li>Second shower room + two toilets</li></ul>",
  },
  {
    id: "3",
    question: "Is there a sea view?",
    answer:
      "Yes, the terrace and living room offer a <strong>direct sea view</strong>. Expect sunrise over the Channel and, on clear days, the English cliffs.",
  },
  {
    id: "4",
    question: "What equipment is provided?",
    answer:
      "Fully equipped kitchen (oven, microwave, hob, large fridge, classic + Senseo coffee makers), smart TV, high-speed wifi (Starlink from 2026), tableware for six, spacious lounge and dining area, two shower rooms, 12 m² covered terrace with outdoor furniture and BBQ, private parking for two cars.",
  },
  {
    id: "5",
    question: "Is wifi available?",
    answer:
      "<strong>Starlink wifi</strong> rolls out for the 2026 season. Meanwhile, <strong>5G</strong> coverage is excellent for remote work or streaming.",
  },
  {
    id: "6",
    question: "Are pets welcome?",
    answer: "Yes, we welcome <strong>one dog</strong> with prior approval.",
  },
  {
    id: "7",
    question: "How do check-in and check-out work?",
    answer:
      "Check-in between <strong>2 pm and 6 pm</strong> with <strong>Isabelle</strong> greeting you on site. A €70 housekeeping deposit is requested. Check-out before <strong>11 am</strong>. Practical details are emailed the week before arrival.",
  },
  {
    id: "8",
    question: "What can we do nearby?",
    answer:
      "Beach walks, coastal path, Fort de l’Heurt, Mont de Couppes cliffs, watersports, laser game, arcades, Nausicaá aquarium 10 minutes away, local markets and Opal Coast breweries.",
  },
  {
    id: "9",
    question: "How do we get the best rate?",
    answer:
      "Best rates are always on <strong>blueportel.fr</strong>. Booking and Airbnb remain available (with extra fees). Follow our Facebook page for offers.",
  },
  {
    id: "10",
    question: "When does the 2026 season run?",
    answer:
      "Blueportel opens from <strong>20 February to 12 November 2026</strong>. Bookings are already open.",
  },
];

export const enFAQDictionary: FAQDictionary = {
  locale: "en",
  metadata: {
    title: "Blueportel FAQ | Frequently Asked Questions",
    description:
      "Everything you need to plan your stay: location, facilities, wifi, pets, check-in and rates at Blueportel.",
    alternates: {
      canonical: "/en/pages/FAQ",
      languages: {
        "fr-FR": "/fr/pages/FAQ",
        "en-GB": "/en/pages/FAQ",
        "nl-NL": "/nl/pages/FAQ",
      },
    },
    openGraph: {
      title: "Blueportel FAQ",
      description: "Location, equipment, arrivals and nearby activities for your seaside getaway in Le Portel.",
      type: "website",
      url: `${siteUrl}/en/pages/FAQ`,
    },
  },
  structuredData: {
    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqEntriesEn.map((entry) => ({
        "@type": "Question",
        name: entry.question,
        acceptedAnswer: { "@type": "Answer", text: entry.answer.replace(/<[^>]+>/g, "") },
      })),
    },
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/en` },
        { "@type": "ListItem", position: 2, name: "FAQ", item: `${siteUrl}/en/pages/FAQ` },
      ],
    },
  },
  hero: {
    homeLabel: "Home",
    breadcrumbCurrent: "FAQ",
    title: "Info / FAQ",
    subtitle: "Answers to the most common questions about staying at our seafront mobile home in Le Portel",
    srTitle: "Blueportel FAQ - Seafront mobile home",
    srParagraphs: [
      "Answers covering location, equipment, arrivals and activities around the Blueportel mobile home.",
      "Sea-view 3-bedroom mobile home for six guests with covered terrace and beach access.",
    ],
  },
  faqItems: faqEntriesEn,
  contactBlock: {
    title: "Need more details?",
    description: "We’ll gladly help you plan your stay or answer any special requests.",
    phoneLabel: "+32 488 83 20 91",
    phoneHref: "tel:+32488832091",
    emailLabel: "info@blueportel.fr",
    emailHref: "mailto:info@blueportel.fr",
  },
};

export default enFAQDictionary;

