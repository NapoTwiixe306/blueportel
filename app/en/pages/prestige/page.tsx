import type { Metadata } from "next";
import PrestigePage from "../../../../src/components/prestige/PrestigePage";

export const metadata: Metadata = {
  title: "BluePortel Prestige — Seafront mobile home for 6 | Le Portel",
  description:
    "BluePortel Prestige mobile home: 3 bedrooms for 6 guests, panoramic sea view, 12 m² covered terrace, direct beach access. Book directly, best price guaranteed. Opal Coast.",
  alternates: {
    canonical: "/en/pages/prestige",
    languages: {
      "fr-FR": "/fr/pages/prestige",
      "en-GB": "/en/pages/prestige",
      "nl-NL": "/nl/pages/prestige",
    },
  },
  openGraph: {
    title: "BluePortel Prestige — Seafront mobile home for 6 guests",
    description: "3 bedrooms, panoramic sea view, 12 m² covered terrace, direct beach access.",
    type: "website",
    locale: "en_GB",
  },
};

const labels = {
  backLabel: "Back to home",
  badge: "Up to 6 guests",
  tagline: "The family mobile home facing the Channel",
  bookLabel: "Book Prestige",
  discoverGalleryLabel: "View all photos",
  capacity: "guests max.",
  bedrooms: "bedrooms",
  included: "Included",
  notIncluded: "Not included",
  equipment: "Amenities",
  photoNotice: "",
  faqTitle: "Frequently asked questions — Prestige",
  faqSubtitle: "Everything you need to know before booking Prestige.",
  faqItems: [
    {
      id: "p-1",
      question: "How many guests does Prestige accommodate?",
      answer:
        "Prestige accommodates <strong>up to 6 guests</strong>: 1 master suite with 160×190 bed and ensuite, 2 twin bedrooms, and a second bathroom.",
    },
    {
      id: "p-2",
      question: "Is the sea view really direct?",
      answer:
        "Yes, the <strong>sea view is direct</strong> from the covered terrace and lounge. On clear days you can see the English cliffs.",
    },
    {
      id: "p-3",
      question: "What is included in the rental?",
      answer:
        "Equipped kitchen (oven, microwave, gas hob, large fridge, Senseo coffee maker), Smart TV, Wi-Fi, air conditioning, heating, crockery for 6, covered terrace with garden furniture and BBQ, private parking for 2 vehicles.",
    },
    {
      id: "p-4",
      question: "How do I book?",
      answer:
        "Book directly on blueportel.fr for the <strong>best price with no fees</strong>. Also available on Booking.com and Airbnb (with extra fees).",
    },
  ],
  ctaTitle: "Book Prestige now",
  ctaSubtitle: "Direct booking · Best price guaranteed · No service fees",
};

export default function Page() {
  return <PrestigePage locale="en" labels={labels} />;
}
