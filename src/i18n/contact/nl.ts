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

export const nlContactDictionary: ContactDictionary = {
  locale: "nl",
  metadata: {
    title: "Contact Blueportel | Michel & Véro",
    description:
      "Neem contact op met de eigenaars van Blueportel in Le Portel. Vraag advies, beschikbaarheid of een offerte op maat voor uw verblijf aan zee.",
    alternates: {
      canonical: "/nl/pages/contact",
      languages: {
        "fr-FR": "/fr/pages/contact",
        "en-GB": "/en/pages/contact",
        "nl-NL": "/nl/pages/contact",
      },
    },
    openGraph: {
      title: "Contact Blueportel",
      description:
        "Neem rechtstreeks contact op met Michel & Véro om uw verblijf in onze mobilhome met zeezicht te regelen.",
      type: "website",
      url: `${siteUrl}/nl/pages/contact`,
    },
  },
  structuredData: {
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/nl` },
        { "@type": "ListItem", position: 2, name: "Contact", item: `${siteUrl}/nl/pages/contact` },
      ],
    },
    person: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Michel Milants",
      jobTitle: "Eigenaar Blueportel",
      email: "info@blueportel.fr",
      telephone: "+32488832091",
      url: siteUrl,
    },
    contact: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact Blueportel",
      url: `${siteUrl}/nl/pages/contact`,
      mainEntity: {
        "@type": "Organization",
        name: "Blueportel",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+32488832091",
          contactType: "Customer Service",
          email: "info@blueportel.fr",
          availableLanguage: ["French", "Dutch"],
        },
      },
    },
  },
  hero: {
    homeLabel: "Home",
    breadcrumbCurrent: "Contact",
    title: "Contacteer Blueportel",
    subtitle: "Bereik Michel & Véro voor al uw vragen over het verblijf aan zee",
    srTitle: "Contact Blueportel - mobilhome met zeezicht",
    srParagraphs: [
      "Contactgegevens van de eigenaars om vragen te stellen of een verblijf te plannen.",
      "Mobilhome met drie slaapkamers, panoramisch zeezicht en overdekt terras.",
    ],
  },
  hostBlock: {
    title: "Maak kennis met uw hosts",
    name: "Michel Milants",
    paragraphs: [
      "We zijn verliefd op de Opaalkust en maakten van Blueportel een warme, stijlvolle plek. Elk detail zorgt ervoor dat u zich meteen thuis voelt.",
      "We delen graag onze favoriete adressen, wandelingen en tips zodat elke gast een onvergetelijke vakantie beleeft.",
    ],
    quote: "Terugkerende gasten zijn voor ons het mooiste compliment.",
    methods: [
      { icon: "email", label: "info@blueportel.fr", href: "mailto:info@blueportel.fr" },
      { icon: "phone", label: "+32 488 83 20 91", href: "tel:+32488832091" },
      { icon: "site", label: "blueportel.fr", href: "https://blueportel.fr" },
    ],
  },
  form: {
    title: "Reservatie-aanvraag",
    description: "Vul dit formulier in voor een snelle offerte of extra vragen.",
    fields: {
      email: { label: "E-mail", placeholder: "jij@email.com" },
      firstName: { label: "Voornaam", placeholder: "Voornaam" },
      lastName: { label: "Familienaam", placeholder: "Familienaam" },
      guests: { label: "Gasten", placeholder: "1" },
      phone: { label: "Telefoon", placeholder: "+32 4 88 83 20 91" },
      country: { label: "Land", options: countryOptions },
      arrival: { label: "Aankomst" },
      departure: { label: "Vertrek" },
      comment: { label: "Bericht", placeholder: "Uw vraag of bericht..." },
    },
    privacy:
      "Ik ga akkoord met het privacybeleid. Deze site wordt beschermd door reCAPTCHA en het privacybeleid van Google is van toepassing.",
    recaptcha:
      "Het formulier is tijdelijk gedeactiveerd. Neem rechtstreeks contact op via telefoon of e-mail voor een snel antwoord.",
    submitLabel: "Verzoek versturen",
    disabledHint: "Formulier tijdelijk uitgeschakeld",
  },
  bookingCta: {
    title: "Klaar om te boeken?",
    description: "Reserveer meteen online of contacteer ons voor een verblijf op maat.",
    buttonLabel: "Nu boeken",
    href: "https://checkout.lodgify.com/nl/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1",
  },
  screenReader: {
    title: "Contact Blueportel - mobilhome met zeezicht",
    paragraphs: [
      "Contactgegevens van Michel & Véro, aanvraagformulier en praktische info voor uw verblijf.",
    ],
  },
};

export default nlContactDictionary;

