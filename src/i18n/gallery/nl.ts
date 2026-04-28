import type { GalleryDictionary, GalleryImage } from "./types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

const galleryImagesNl: GalleryImage[] = [
  {
    src: "/galerie/blueportel-hero-vue-mer.png",
    alt: "Mobilhome Blueportel met panoramisch zeezicht op de Opaalkust",
    caption: "Panoramisch zeezicht vanuit Blueportel",
  },
  {
    src: "/galerie/blueportel-panorama-cote-opale.jpg",
    alt: "Kustpanorama vanaf het terras van Blueportel in Le Portel",
    caption: "Panorama over de Opaalkust",
  },
  {
    src: "/galerie/blueportel-terrasse-ensoleillee.jpg",
    alt: "Zonnig terras van de Blueportel mobilhome",
    caption: "Overdekt terras voor buitenmaaltijden",
  },
  {
    src: "/galerie/blueportel-terrasse-couverte-1920x1280.jpg",
    alt: "Overdekt terras met loungeset en zeezicht",
    caption: "Buitenlounge met zicht op zee",
  },
  {
    src: "/galerie/blueportel-terrasse-cote-opale-1920x2880.jpg",
    alt: "Verhoogd terras met zicht op de Opaalkust",
    caption: "Panoramisch terras boven de kust",
  },
  {
    src: "/galerie/blueportel-panorama-le-portel-1920x2880.jpg",
    alt: "Verticale blik op kliffen en zee vanuit Blueportel",
    caption: "Kliffen van Le Portel en oneindige zee",
  },
  {
    src: "/galerie/blueportel-vue-mer-cote-opale.jpg",
    alt: "Vrij zicht op zee vanaf het klifpad",
    caption: "Zee en horizon vanaf de klif",
  },
  {
    src: "/galerie/blueportel-salon-vue-mer-1040x693.jpg",
    alt: "Lichte woonkamer met grote erker op zee",
    caption: "Woonkamer open naar de oceaan",
  },
  {
    src: "/galerie/blueportel-espace-repas-1040x693.jpg",
    alt: "Gezellige eethoek in de mobilhome",
    caption: "Eethoek voor zes personen",
  },
  {
    src: "/galerie/blueportel-sejour-lumineux-1920x1280.jpg",
    alt: "Heldere leefruimte met eigentijdse decoratie",
    caption: "Warme en ruime leefruimte",
  },
  {
    src: "/galerie/blueportel-detente-salon-1920x1280.jpg",
    alt: "Loungehoek met sofa en smart-tv",
    caption: "Gezellige zithoek met smart-tv",
  },
  {
    src: "/galerie/blueportel-cuisine-equipee-1920x1280.jpg",
    alt: "Volledig uitgeruste keuken in de mobilhome",
    caption: "Keuken klaar voor familiediners",
  },
  {
    src: "/galerie/blueportel-suite-parentale-1040x693.jpg",
    alt: "Master bedroom met queensize bed en kasten",
    caption: "Comfortabele master suite",
  },
  {
    src: "/galerie/blueportel-chambre-enfants-1920x1280.jpg",
    alt: "Kinderkamer met twee eenpersoonsbedden",
    caption: "Kinderkamer met twinbedden",
  },
  {
    src: "/galerie/blueportel-salle-de-bain-1920x1280.jpg",
    alt: "Moderne badkamer met grote douche",
    caption: "Moderne en functionele badkamer",
  },
];

export const nlGalleryDictionary: GalleryDictionary = {
  locale: "nl",
  metadata: {
    title: "Blueportel fotogalerij | Mobilhome aan zee",
    description:
      "Bekijk de Blueportel mobilhome in beelden: terras met zeezicht, lichte leefruimtes, knusse slaapkamers en directe toegang tot de Opaalkust.",
    alternates: {
      canonical: "/nl/pages/galerie-photo",
      languages: {
        "fr-FR": "/fr/pages/galerie-photo",
        "en-GB": "/en/pages/galerie-photo",
        "nl-NL": "/nl/pages/galerie-photo",
      },
    },
    openGraph: {
      title: "Blueportel fotogalerij",
      description: "HD-foto's van het terras, de kamers en het zeezicht van de Blueportel mobilhome.",
      type: "website",
      url: `${siteUrl}/nl/pages/galerie-photo`,
    },
  },
  structuredData: {
    gallery: {
      "@context": "https://schema.org",
      "@type": "ImageGallery",
      name: "Blueportel fotogalerij",
      description: "Fotogalerij van de Blueportel mobilhome in Le Portel aan de Opaalkust",
      image: galleryImagesNl.map((image) => ({
        "@type": "ImageObject",
        contentUrl: `${siteUrl}${image.src}`,
        description: image.alt,
      })),
    },
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${siteUrl}/nl`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Fotogalerij",
          item: `${siteUrl}/nl/pages/galerie-photo`,
        },
      ],
    },
  },
  hero: {
    homeLabel: "Home",
    breadcrumbCurrent: "Fotogalerij",
    title: "Fotogalerij —",
    highlight: "Mobilhome aan zee",
    description:
      "Ontdek Blueportel in beelden: terras met zeezicht, lichte leefruimten, gezellige slaapkamers en directe toegang tot de kust.",
  },
  carouselImages: galleryImagesNl.slice(0, 8),
  galleryImages: galleryImagesNl,
  infoCards: [
    {
      icon: "camera",
      title: "Leg elk moment vast",
      description:
        "Ontbijt met zeezicht, aperitieven bij zonsondergang en knusse avonden—herbeleef elk moment dankzij onze HD-foto’s.",
    },
    {
      icon: "sparkles",
      title: "Design voor onbezorgde vakanties",
      description:
        "Warme materialen, slimme opbergplaatsen, eigentijdse inrichting en hotelbedden voor 4 tot 6 personen.",
    },
  ],
  gridHeading: "Alle Blueportel foto’s",
  cta: {
    title: "Ziet u zichzelf hier al zitten?",
    description:
      "Boek uw verblijf aan zee of vraag een virtuele rondleiding aan—wij beantwoorden al uw vragen.",
    bookingLabel: "Nu boeken",
    bookingHref:
      "https://checkout.lodgify.com/nl/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1",
    bookingRel: "nofollow",
    contactLabel: "Contacteer ons",
    contactHref: "/pages/contact",
  },
  screenReader: {
    title: "Blueportel fotogalerij",
    paragraphs: [
      "Fotogalerij in hoge resolutie van de Blueportel mobilhome aan de Opaalkust.",
      "Overdekt terras met zeezicht, ruime leefruimtes, master suite, kinderkamer, uitgeruste keuken en snelle toegang tot Nausicaá.",
    ],
  },
};

export default nlGalleryDictionary;

