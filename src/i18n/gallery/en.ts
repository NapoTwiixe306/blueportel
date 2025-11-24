import type { GalleryDictionary, GalleryImage } from "./types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

const galleryImagesEn: GalleryImage[] = [
  {
    src: "/galerie/blueportel-hero-vue-mer.png",
    alt: "Blueportel mobile home with panoramic sea view over the Opal Coast",
    caption: "Panoramic sea view from Blueportel",
  },
  {
    src: "/galerie/blueportel-panorama-cote-opale.jpg",
    alt: "Coastal panorama from the Blueportel terrace in Le Portel",
    caption: "Opal Coast panorama",
  },
  {
    src: "/galerie/blueportel-terrasse-ensoleillee.jpg",
    alt: "Sun-drenched terrace at the Blueportel mobile home",
    caption: "Sheltered terrace for outdoor dining",
  },
  {
    src: "/galerie/blueportel-terrasse-couverte-1920x1280.jpg",
    alt: "Covered terrace with lounge set overlooking the sea",
    caption: "Outdoor lounge facing the sea",
  },
  {
    src: "/galerie/blueportel-terrasse-cote-opale-1920x2880.jpg",
    alt: "Elevated terrace dominating the Opal Coast",
    caption: "Panoramic terrace above the sea",
  },
  {
    src: "/galerie/blueportel-panorama-le-portel-1920x2880.jpg",
    alt: "Vertical view of cliffs and sea from Blueportel",
    caption: "Cliffs of Le Portel and endless sea",
  },
  {
    src: "/galerie/blueportel-vue-mer-cote-opale.jpg",
    alt: "Clear sea view from the cliff path",
    caption: "Sea and horizon from the cliff",
  },
  {
    src: "/galerie/blueportel-salon-vue-mer-1040x693.jpg",
    alt: "Bright living room with large bay window facing the sea",
    caption: "Living room opening onto the water",
  },
  {
    src: "/galerie/blueportel-espace-repas-1040x693.jpg",
    alt: "Cozy dining corner inside the Blueportel mobile home",
    caption: "Dining area for six guests",
  },
  {
    src: "/galerie/blueportel-sejour-lumineux-1920x1280.jpg",
    alt: "Light-filled lounge with contemporary décor",
    caption: "Warm and spacious living space",
  },
  {
    src: "/galerie/blueportel-detente-salon-1920x1280.jpg",
    alt: "Relaxation corner with sofa and smart TV",
    caption: "Cozy lounge with smart TV",
  },
  {
    src: "/galerie/blueportel-cuisine-equipee-1920x1280.jpg",
    alt: "Fully equipped kitchen inside the Blueportel rental",
    caption: "Kitchen ready for family meals",
  },
  {
    src: "/galerie/blueportel-suite-parentale-1040x693.jpg",
    alt: "Master bedroom with queen bed and storage",
    caption: "Comfortable master suite",
  },
  {
    src: "/galerie/blueportel-chambre-enfants-1920x1280.jpg",
    alt: "Kids bedroom with twin beds",
    caption: "Twin bedroom for kids",
  },
  {
    src: "/galerie/blueportel-salle-de-bain-1920x1280.jpg",
    alt: "Modern bathroom with spacious shower",
    caption: "Modern and functional bathroom",
  },
];

export const enGalleryDictionary: GalleryDictionary = {
  locale: "en",
  metadata: {
    title: "Blueportel Photo Gallery | Seafront mobile home",
    description:
      "Discover the Blueportel mobile home in photos: panoramic terrace, bright living areas, cozy bedrooms and direct access to the Opal Coast.",
    alternates: {
      canonical: "/en/pages/galerie-photo",
      languages: {
        "fr-FR": "/fr/pages/galerie-photo",
        "en-GB": "/en/pages/galerie-photo",
        "nl-NL": "/nl/pages/galerie-photo",
      },
    },
    openGraph: {
      title: "Blueportel photo gallery",
      description: "HD visuals of the terrace, interiors and sea view of the Blueportel mobile home.",
      type: "website",
      url: `${siteUrl}/en/pages/galerie-photo`,
    },
  },
  structuredData: {
    gallery: {
      "@context": "https://schema.org",
      "@type": "ImageGallery",
      name: "Blueportel photo gallery",
      description: "Photo gallery of the Blueportel mobile home located in Le Portel on the Opal Coast",
      image: galleryImagesEn.map((image) => ({
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
          item: `${siteUrl}/en`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Photo gallery",
          item: `${siteUrl}/en/pages/galerie-photo`,
        },
      ],
    },
  },
  hero: {
    homeLabel: "Home",
    breadcrumbCurrent: "Photo gallery",
    title: "Photo gallery —",
    highlight: "Seafront mobile home",
    description:
      "Explore Blueportel through images: sea-view terrace, bright living spaces, cozy bedrooms and direct access to the Opal Coast.",
  },
  carouselImages: galleryImagesEn.slice(0, 8),
  galleryImages: galleryImagesEn,
  infoCards: [
    {
      icon: "camera",
      title: "Capture every moment",
      description:
        "Breakfast facing the sea, sunset aperitifs, cozy evenings—relive every moment of your stay with HD visuals.",
    },
    {
      icon: "sparkles",
      title: "Design for effortless holidays",
      description:
        "Warm materials, clever storage, contemporary décor and hotel-grade bedding for 4 to 6 guests.",
    },
  ],
  gridHeading: "All Blueportel photos",
  cta: {
    title: "Already picturing your next photos?",
    description:
      "Book your seaside stay or schedule a virtual tour—our team answers every question promptly.",
    bookingLabel: "Book now",
    bookingHref:
      "https://checkout.lodgify.com/en/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1",
    bookingRel: "nofollow",
    contactLabel: "Contact us",
    contactHref: "/pages/contact",
  },
  screenReader: {
    title: "Blueportel photo gallery",
    paragraphs: [
      "High-definition gallery of the Blueportel mobile home on the Opal Coast.",
      "Covered terrace with sea view, bright living areas, master suite, kids room, fully equipped kitchen and quick access to Nausicaá.",
    ],
  },
};

export default enGalleryDictionary;

