import type { ContactDictionary } from "./types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

const countryOptions = [
  { value: "FR", label: "🇫🇷" },
  { value: "BE", label: "🇧🇪" },
  { value: "GB", label: "🇬🇧" },
  { value: "DE", label: "🇩🇪" },
  { value: "NL", label: "🇳🇱" },
  { value: "ES", label: "🇪🇸" },
  { value: "IT", label: "🇮🇹" },
  { value: "CH", label: "🇨🇭" },
  { value: "US", label: "🇺🇸" },
];

export const enContactDictionary: ContactDictionary = {
  locale: "en",
  metadata: {
    title: "Contact Blueportel | Michel & Véro",
    description:
      "Reach the owners of the Blueportel mobile home in Le Portel. Ask for advice, availability or a bespoke quote for your seaside stay.",
    alternates: {
      canonical: "/en/contact",
      languages: {
        "fr-FR": "/fr/contact",
        "en-GB": "/en/contact",
        "nl-NL": "/nl/contact",
      },
    },
    openGraph: {
      title: "Contact Blueportel",
      description:
        "Chat directly with Michel & Véro to organise your stay in our sea-view mobile home.",
      type: "website",
      url: `${siteUrl}/en/contact`,
    },
  },
  structuredData: {
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/en` },
        { "@type": "ListItem", position: 2, name: "Contact", item: `${siteUrl}/en/contact` },
      ],
    },
    person: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Michel Milants",
      jobTitle: "Blueportel owner",
      email: "info@blueportel.fr",
      telephone: "+32488832091",
      url: siteUrl,
    },
    contact: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact Blueportel",
      url: `${siteUrl}/en/contact`,
      mainEntity: {
        "@type": "Organization",
        name: "Blueportel",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+32488832091",
          contactType: "Customer Service",
          email: "info@blueportel.fr",
          availableLanguage: ["French", "English"],
        },
      },
    },
  },
  hero: {
    homeLabel: "Home",
    breadcrumbCurrent: "Contact",
    title: "Contact Blueportel",
    subtitle: "Reach Michel & Véro for any question about your sea-view getaway",
    srTitle: "Contact Blueportel - sea-view mobile home",
    srParagraphs: [
      "Contact details and info to speak with owners Michel & Véro.",
      "3-bedroom mobile home with panoramic sea view, covered terrace and beach access.",
    ],
  },
  hostBlock: {
    title: "Meet your hosts",
    name: "Michel Milants",
    paragraphs: [
      "We fell in love with the Opal Coast and designed Blueportel as a cosy, refined getaway. Each detail is crafted so you instantly feel at home.",
      "We love sharing local tips, hidden trails and favourite tables so every guest enjoys an unforgettable seaside break.",
    ],
    quote: "Seeing guests return year after year is the greatest reward we could wish for.",
    methods: [
      { icon: "email", label: "info@blueportel.fr", href: "mailto:info@blueportel.fr" },
      { icon: "phone", label: "+32 488 83 20 91", href: "tel:+32488832091" },
      { icon: "site", label: "blueportel.fr", href: "https://blueportel.fr" },
    ],
  },
  form: {
    title: "Booking request",
    description: "Fill in the form for a quick quote or to ask anything about the property.",
    fields: {
      email: { label: "Email", placeholder: "you@email.com" },
      firstName: { label: "First name", placeholder: "First name" },
      lastName: { label: "Last name", placeholder: "Last name" },
      guests: { label: "Guests", placeholder: "1" },
      phone: { label: "Phone", placeholder: "+33 6 12 34 56 78" },
      country: { label: "Country", options: countryOptions },
      arrival: { label: "Arrival" },
      departure: { label: "Departure" },
      comment: { label: "Message", placeholder: "Tell us more about your stay..." },
    },
    privacy:
      "I agree with the privacy policy. This site is protected by reCAPTCHA and the Google Privacy Policy applies.",
    recaptcha:
      "Form submissions are temporarily disabled. Please contact us via phone or email for the fastest reply.",
    submitLabel: "Send request",
    disabledHint: "Form disabled for now",
  },
  bookingCta: {
    title: "Ready to book your stay?",
    description:
      "Secure your seaside mobile home directly online or contact us for a bespoke itinerary.",
    buttonLabel: "Book now",
    href: "https://checkout.lodgify.com/en/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1",
  },
  screenReader: {
    title: "Contact Blueportel - sea-view mobile home",
    paragraphs: [
      "Owner contact details, booking request information and practical info about the property.",
    ],
  },
};

export default enContactDictionary;

