import type { Metadata } from "next";
import HorizonPage from "../../../../src/components/horizon/HorizonPage";

export const metadata: Metadata = {
  title: "BluePortel Horizon — Seafront mobile home for 4 | Le Portel",
  description:
    "BluePortel Horizon: 2-bedroom mobile home for 4 guests with sea view and private terrace on the Opal Coast. Perfect for couples or small families. Direct booking.",
  alternates: {
    canonical: "/en/pages/horizon",
    languages: {
      "fr-FR": "/fr/pages/horizon",
      "en-GB": "/en/pages/horizon",
      "nl-NL": "/nl/pages/horizon",
    },
  },
  openGraph: {
    title: "BluePortel Horizon — Seafront mobile home for 4 guests",
    description: "2 bedrooms, sea view, private terrace on the Opal Coast. Perfect for couples or small families.",
    type: "website",
    locale: "en_GB",
  },
};

const labels = {
  badge: "Up to 4 guests",
  tagline: "Intimacy facing the sea for two or four",
  bookLabel: "Book Horizon",
  capacity: "guests max.",
  bedrooms: "bedrooms",
  included: "Included",
  notIncluded: "Not included",
  equipment: "Amenities",
  photoNotice: "Definitive photos of Horizon will be available soon. In the meantime, discover its location and features below.",
  faqTitle: "Frequently asked questions — Horizon",
  faqSubtitle: "Everything you need to know before booking Horizon.",
  faqItems: [
    {
      id: "h-1",
      question: "How many guests does Horizon accommodate?",
      answer:
        "Horizon accommodates <strong>up to 4 guests</strong>: 1 main bedroom with double bed and 1 bedroom with twin beds.",
    },
    {
      id: "h-2",
      question: "Does Horizon have a sea view?",
      answer:
        "Yes, Horizon has a <strong>sea view</strong> from its private terrace. It is located within the BluePortel campsite on the Opal Coast.",
    },
    {
      id: "h-3",
      question: "What is the difference with Prestige?",
      answer:
        "Horizon is more compact and perfect for <strong>a couple or small family of 4</strong>. Prestige is better suited for <strong>families of 5-6</strong> with its 12 m² covered terrace and air conditioning.",
    },
    {
      id: "h-4",
      question: "How do I book Horizon?",
      answer:
        "Book directly on blueportel.fr for the <strong>best price with no fees</strong>.",
    },
  ],
  ctaTitle: "Book Horizon now",
  ctaSubtitle: "Direct booking · Best price guaranteed · No service fees",
};

export default function Page() {
  return <HorizonPage locale="en" labels={labels} />;
}
