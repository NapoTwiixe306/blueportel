import type { GalleryDictionary, GalleryImage } from "./types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.fr";

const galleryImagesFr: GalleryImage[] = [
  {
    src: "/galerie/blueportel-hero-vue-mer.png",
    alt: "Mobil-home Blueportel avec vue mer panoramique sur la Côte d'Opale",
    caption: "Vue mer panoramique depuis Blueportel",
  },
  {
    src: "/galerie/blueportel-panorama-cote-opale.jpg",
    alt: "Panorama côtier depuis la terrasse Blueportel à Le Portel",
    caption: "Panorama sur la Côte d'Opale",
  },
  {
    src: "/galerie/blueportel-terrasse-ensoleillee.jpg",
    alt: "Terrasse ensoleillée du mobil-home Blueportel",
    caption: "Terrasse abritée pour les repas en plein air",
  },
  {
    src: "/galerie/blueportel-terrasse-couverte-1920x1280.jpg",
    alt: "Terrasse couverte du mobil-home Blueportel avec salon extérieur",
    caption: "Salon extérieur avec vue sur la mer",
  },
  {
    src: "/galerie/blueportel-terrasse-cote-opale-1920x2880.jpg",
    alt: "Terrasse surélevée dominant la Côte d'Opale",
    caption: "Terrasse panoramique dominant la mer",
  },
  {
    src: "/galerie/blueportel-panorama-le-portel-1920x2880.jpg",
    alt: "Vue verticale sur les falaises et la mer depuis Blueportel",
    caption: "Falaises du Portel et mer infinie",
  },
  {
    src: "/galerie/blueportel-vue-mer-cote-opale.jpg",
    alt: "Vue mer dégagée depuis la falaise du Portel",
    caption: "Mer et horizon depuis la falaise",
  },
  {
    src: "/galerie/blueportel-salon-vue-mer-1040x693.jpg",
    alt: "Salon lumineux avec large baie vitrée sur la mer",
    caption: "Salon lumineux ouvert sur la mer",
  },
  {
    src: "/galerie/blueportel-espace-repas-1040x693.jpg",
    alt: "Espace repas convivial dans le mobil-home Blueportel",
    caption: "Espace repas pour 6 personnes",
  },
  {
    src: "/galerie/blueportel-sejour-lumineux-1920x1280.jpg",
    alt: "Séjour lumineux avec décoration contemporaine",
    caption: "Séjour chaleureux et spacieux",
  },
  {
    src: "/galerie/blueportel-detente-salon-1920x1280.jpg",
    alt: "Coin détente avec canapé et télévision connectée",
    caption: "Coin détente avec TV connectée",
  },
  {
    src: "/galerie/blueportel-cuisine-equipee-1920x1280.jpg",
    alt: "Cuisine entièrement équipée du mobil-home Blueportel",
    caption: "Cuisine complète prête pour vos repas",
  },
  {
    src: "/galerie/blueportel-suite-parentale-1040x693.jpg",
    alt: "Suite parentale avec lit queen size et rangements",
    caption: "Suite parentale confortable",
  },
  {
    src: "/galerie/blueportel-chambre-enfants-1920x1280.jpg",
    alt: "Chambre enfants avec lits jumeaux",
    caption: "Chambre enfants avec lits jumeaux",
  },
  {
    src: "/galerie/blueportel-salle-de-bain-1920x1280.jpg",
    alt: "Salle de bain moderne avec grande douche",
    caption: "Salle de bain moderne et fonctionnelle",
  },
];

export const frGalleryDictionary: GalleryDictionary = {
  locale: "fr",
  metadata: {
    title: "Galerie photo Blueportel | Mobil-home face à la mer",
    description:
      "Explorez en photos le mobil-home Blueportel : terrasse vue mer, pièces lumineuses, chambres cosy et accès direct à la Côte d'Opale.",
    alternates: {
      canonical: "https://blueportel.fr/fr/galerie-photo",
      languages: {
        "fr-FR": "https://blueportel.fr/fr/galerie-photo",
        "en-GB": "https://blueportel.com/en/photo-gallery",
        "nl-NL": "https://blueportel.com/nl/fotos",
      },
    },
    openGraph: {
      title: "Galerie photo Blueportel",
      description: "Images HD de la terrasse, des chambres et de la vue mer du mobil-home Blueportel.",
      type: "website",
      url: `${siteUrl}/fr/galerie-photo`,
    },
  },
  structuredData: {
    gallery: {
      "@context": "https://schema.org",
      "@type": "ImageGallery",
      name: "Galerie photo Blueportel",
      description: "Photographies du mobil-home Blueportel à Le Portel sur la Côte d'Opale",
      image: galleryImagesFr.map((image) => ({
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
          name: "Accueil",
          item: `${siteUrl}/fr`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Galerie photo",
          item: `${siteUrl}/fr/galerie-photo`,
        },
      ],
    },
  },
  hero: {
    homeLabel: "Accueil",
    breadcrumbCurrent: "Galerie photo",
    title: "Galerie photo —",
    highlight: "Mobil-home face à la mer",
    description:
      "Explorez en images l’univers Blueportel : terrasse vue mer, pièces lumineuses, chambres cosy et accès direct à la Côte d’Opale.",
  },
  carouselImages: galleryImagesFr.slice(0, 8),
  galleryImages: galleryImagesFr,
  infoCards: [
    {
      icon: "camera",
      title: "Tous vos moments en images",
      description:
        "Vue mer au petit-déjeuner, apéros au coucher du soleil, soirées cocooning : capturez chaque instant de votre séjour.",
    },
    {
      icon: "sparkles",
      title: "Design pensé pour vos vacances",
      description:
        "Matériaux chaleureux, rangements pratiques, décoration contemporaine et literie hôtelière pour 4 à 6 personnes.",
    },
  ],
  gridHeading: "Toutes les photos Blueportel",
  cta: {
    title: "Vous imaginez déjà vos prochaines photos ?",
    description:
      "Réservez votre séjour face à la mer ou contactez-nous pour une visite guidée en visio. Nous répondons à toutes vos questions.",
    bookingLabel: "Réserver maintenant",
    bookingHref:
      "https://checkout.lodgify.com/fr/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1",
    bookingRel: "nofollow",
    contactLabel: "Nous contacter",
    contactHref: "/contact",
  },
  screenReader: {
    title: "Galerie photo Blueportel",
    paragraphs: [
      "Galerie photo haute définition du mobil-home Blueportel situé à Le Portel sur la Côte d'Opale.",
      "Terrasse couverte avec vue mer, pièces de vie lumineuses, suite parentale, chambre enfants, cuisine équipée et accès rapide à Nausicaá.",
    ],
  },
};

export default frGalleryDictionary;

