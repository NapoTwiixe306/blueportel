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

export const frContactDictionary: ContactDictionary = {
  locale: "fr",
  metadata: {
    title: "Contact Blueportel | Michel & Véro",
    description:
      "Contactez les propriétaires du mobil-home Blueportel à Le Portel. Conseils, disponibilités et devis personnalisés pour votre séjour face à la mer.",
    alternates: {
      canonical: "/fr/pages/contact",
      languages: {
        "fr-FR": "/fr/pages/contact",
        "en-GB": "/en/pages/contact",
        "nl-NL": "/nl/pages/contact",
      },
    },
    openGraph: {
      title: "Contact Blueportel",
      description:
        "Parlez directement avec Michel & Véro pour organiser votre séjour dans notre mobil-home face à la mer.",
      type: "website",
      url: `${siteUrl}/fr/pages/contact`,
    },
  },
  structuredData: {
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: `${siteUrl}/fr` },
        { "@type": "ListItem", position: 2, name: "Contact", item: `${siteUrl}/fr/pages/contact` },
      ],
    },
    person: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Michel Milants",
      jobTitle: "Propriétaire Blueportel",
      email: "info@blueportel.fr",
      telephone: "+32488832091",
      url: siteUrl,
    },
    contact: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact Blueportel",
      url: `${siteUrl}/fr/pages/contact`,
      mainEntity: {
        "@type": "Organization",
        name: "Blueportel",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+32488832091",
          contactType: "Customer Service",
          email: "info@blueportel.fr",
          availableLanguage: ["French"],
        },
      },
    },
  },
  hero: {
    homeLabel: "Accueil",
    breadcrumbCurrent: "Contact",
    title: "Contact Blueportel",
    subtitle: "Contactez Michel & Véro pour votre location de mobil-home face à la mer",
    srTitle: "Contact Blueportel - Location mobil-home face à la mer",
    srParagraphs: [
      "Coordonnées et informations pour contacter les propriétaires Michel & Véro.",
      "Mobil-home 3 chambres avec vue mer panoramique, terrasse couverte et accès plage.",
    ],
  },
  hostBlock: {
    title: "À propos de l'hôte",
    name: "Michel Milants",
    paragraphs: [
      "Passionnés par la Côte d'Opale, nous avons imaginé Blueportel comme un cocon raffiné et chaleureux. Chaque détail a été pensé pour que vous vous sentiez immédiatement chez vous.",
      "Nous adorons partager nos bonnes adresses, nos balades préférées et aider nos voyageurs à vivre un séjour inoubliable face à la mer.",
    ],
    quote: "Notre plus belle récompense ? Vous voir revenir et profiter encore plus de la vue sur la mer.",
    methods: [
      { icon: "email", label: "info@blueportel.fr", href: "mailto:info@blueportel.fr" },
      { icon: "phone", label: "+32 488 83 20 91", href: "tel:+32488832091" },
      { icon: "site", label: "blueportel.fr", href: "https://blueportel.fr" },
    ],
  },
  form: {
    title: "Demande de réservation",
    description: "Complétez ce formulaire pour recevoir un devis rapide ou poser vos questions.",
    fields: {
      email: { label: "E-mail", placeholder: "votre@email.com" },
      firstName: { label: "Prénom", placeholder: "Prénom" },
      lastName: { label: "Nom", placeholder: "Nom" },
      guests: { label: "Invités", placeholder: "1" },
      phone: { label: "Téléphone", placeholder: "06 12 34 56 78" },
      country: { label: "Indicatif", options: countryOptions },
      arrival: { label: "Arrivée" },
      departure: { label: "Départ" },
      comment: { label: "Commentaire", placeholder: "Votre message..." },
    },
    privacy:
      "J'accepte la politique de confidentialité. Ce site est protégé par reCAPTCHA et la politique de confidentialité de Google s'applique.",
    recaptcha:
      "Ce formulaire est désactivé pour éviter les envois automatiques. Contactez-nous directement par téléphone ou email.",
    submitLabel: "Envoyer",
    disabledHint: "Formulaire désactivé pour le moment",
  },
  bookingCta: {
    title: "Prêt à réserver votre séjour ?",
    description:
      "Réservez directement en ligne votre mobil-home face à la mer ou contactez-nous pour une demande sur mesure.",
    buttonLabel: "Réserver maintenant",
    href: "/fr/pages/reserver",
  },
  screenReader: {
    title: "Contact Blueportel - Mobil-home face à la mer",
    paragraphs: [
      "Coordonnées des propriétaires Michel & Véro, formulaire de réservation, informations pratiques.",
    ],
  },
};

export default frContactDictionary;

