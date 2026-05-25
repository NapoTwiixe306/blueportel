import type { Locale } from "../../i18n/locales";

const JSONLD_DATA = {
  fr: {
    url: "https://blueportel.fr",
    description:
      "Location de mobil-home prestige face a la mer au Portel sur la Cote d'Opale. 3 chambres, vue panoramique, acces direct plage.",
    name: "Blueportel",
  },
  en: {
    url: "https://blueportel.com",
    description:
      "Luxury seafront mobile home rental in Le Portel on the Opal Coast. 3 bedrooms, panoramic sea view, direct beach access.",
    name: "Blueportel",
  },
  nl: {
    url: "https://blueportel.fr/nl",
    description:
      "Luxe mobiel huis aan zee in Le Portel aan de Opaalkust. 3 slaapkamers, panoramisch zeezicht, direct strandtoegang.",
    name: "Blueportel",
  },
} as const satisfies Record<Locale, { url: string; description: string; name: string }>;

export function JsonLdVacationRental({ locale }: { locale: Locale }) {
  const data = JSONLD_DATA[locale];

  const featureLabels = {
    panoramic:
      locale === "nl"
        ? "Panoramisch zeezicht"
        : locale === "en"
        ? "Panoramic sea view"
        : "Vue mer panoramique",
    beach:
      locale === "nl"
        ? "Direct strandtoegang"
        : locale === "en"
        ? "Direct beach access"
        : "Acces direct plage",
    bedrooms: locale === "nl" ? "3 slaapkamers" : locale === "en" ? "3 bedrooms" : "3 chambres",
    guests: locale === "nl" ? "6 personen" : locale === "en" ? "6 guests" : "6 personnes",
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LodgingBusiness", "VacationRental"],
    "@id": `${data.url}#lodging`,
    name: data.name,
    description: data.description,
    url: data.url,
    telephone: "+33745324836",
    email: "info@blueportel.fr",
    priceRange: "EUR 75-140",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2 Rue de la Mer",
      addressLocality: "Le Portel",
      postalCode: "62480",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.7167,
      longitude: 1.5667,
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: featureLabels.panoramic, value: true },
      { "@type": "LocationFeatureSpecification", name: featureLabels.beach, value: true },
      { "@type": "LocationFeatureSpecification", name: featureLabels.bedrooms, value: true },
      { "@type": "LocationFeatureSpecification", name: featureLabels.guests, value: true },
    ],
    availableLanguage: [
      { "@type": "Language", name: "French" },
      { "@type": "Language", name: "English" },
      { "@type": "Language", name: "Dutch" },
    ],
    sameAs: [
      "https://blueportel.fr",
      "https://blueportel.com",
      "https://www.facebook.com/Blueportel",
    ],
    numberOfRooms: 3,
    occupancy: {
      "@type": "QuantitativeValue",
      maxValue: 6,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
