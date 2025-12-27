import type { FAQDictionary } from "./types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

const faqEntries = [
  {
    id: "1",
    question: "Où se situe le mobil-home Blueportel ?",
    answer:
      "Blueportel se trouve à <strong>Le Portel</strong>, dans le <strong>Camping Le Phare d'Opale</strong>, sur la <strong>Côte d'Opale</strong>, à proximité de <strong>Boulogne-sur-Mer</strong>. Il est installé sur la falaise avec une vue directe sur la mer et les falaises anglaises. La plage, le sentier du littoral et le centre du village sont accessibles à pied en quelques minutes.",
  },
  {
    id: "2",
    question: "Combien de personnes peuvent séjourner à Blueportel ?",
    answer:
      "Le mobil-home peut accueillir <strong>jusqu'à 6 personnes</strong> :<ul class=\"list-disc list-inside mt-2 space-y-1\"><li>1 suite parentale avec lit double 160×190 et salle d'eau privative</li><li>2 chambres avec lits jumeaux</li><li>1 seconde salle d'eau et 2 toilettes</li></ul>",
  },
  {
    id: "3",
    question: "Le mobil-home dispose-t-il d'une vue sur la mer ?",
    answer:
      "Oui, la <strong>vue mer est directe</strong> depuis la terrasse couverte et le salon. Vous profitez des levers de soleil sur l'horizon et, par temps clair, des falaises anglaises.",
  },
  {
    id: "4",
    question: "Quels sont les équipements disponibles ?",
    answer:
      "Cuisine équipée (four, micro-ondes, plaque gaz, grand frigo, cafetière classique + Senseo), Smart TV, Wifi haut débit (Starlink dès 2026), vaisselle et ustensiles pour 6 personnes, salon et coin repas spacieux, deux salles d'eau, terrasse couverte de 12 m² avec salon de jardin et barbecue, parking privé pour 2 véhicules.",
  },
  {
    id: "5",
    question: "Le wifi est-il disponible ?",
    answer:
      "Le <strong>wifi Starlink</strong> est en cours d'installation et sera actif pour la saison 2026. En attendant, la <strong>5G</strong> couvre parfaitement la zone pour le télétravail et le streaming.",
  },
  {
    id: "6",
    question: "Les animaux sont-ils acceptés ?",
    answer: "Oui, <strong>un chien</strong> est accepté après accord préalable.",
  },
  {
    id: "7",
    question: "Comment se déroulent l'arrivée et le départ ?",
    answer:
      "Arrivées entre <strong>14h et 18h</strong>, accueillies par <strong>Isabelle</strong> sur place. Un dépôt de garantie ménage de 70 € est demandé. Départs avant <strong>11h</strong>. Toutes les informations pratiques sont envoyées la semaine précédant le séjour.",
  },
  {
    id: "8",
    question: "Quelles activités peut-on faire autour de Blueportel ?",
    answer:
      "Balades sur la plage du Portel, sentier du littoral, Fort de l'Heurt, falaises du Mont de Couppes. Base nautique à proximité, laser game, salles de jeux, Nausicaá à 10 minutes, marchés locaux et brasseries de la Côte d'Opale.",
  },
  {
    id: "9",
    question: "Comment réserver au meilleur tarif ?",
    answer:
      "Le meilleur tarif est toujours disponible sur <strong>blueportel.fr</strong>. Réservation possible aussi via Booking ou Airbnb (avec frais supplémentaires). Promotions annoncées sur notre Page Facebook.",
  },
  {
    id: "10",
    question: "Quand ouvre la saison 2026 ?",
    answer:
      "Blueportel ouvre du <strong>20 février au 12 novembre 2026</strong>. Les réservations sont d'ores et déjà ouvertes.",
  },
];

export const frFAQDictionary: FAQDictionary = {
  locale: "fr",
  metadata: {
    title: "FAQ Blueportel | Questions fréquentes",
    description:
      "Toutes les réponses pour préparer votre séjour face à la mer : localisation, équipements, wifi, animaux, accès et réservations Blueportel.",
    alternates: {
      canonical: "/fr/faq",
      languages: {
        "fr-FR": "/fr/faq",
        "en-GB": "/en/faq",
        "nl-NL": "/nl/faq",
      },
    },
    openGraph: {
      title: "Questions fréquentes Blueportel",
      description: "Localisation, équipements, arrivée, activités : préparez sereinement votre séjour à Le Portel.",
      type: "website",
      url: `${siteUrl}/fr/faq`,
    },
  },
  structuredData: {
    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqEntries.map((entry) => ({
        "@type": "Question",
        name: entry.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: entry.answer.replace(/<[^>]+>/g, ""),
        },
      })),
    },
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: `${siteUrl}/fr` },
        { "@type": "ListItem", position: 2, name: "FAQ", item: `${siteUrl}/fr/faq` },
      ],
    },
  },
  hero: {
    homeLabel: "Accueil",
    breadcrumbCurrent: "FAQ",
    title: "Infos / FAQ",
    subtitle: "Questions fréquentes sur la location de mobil-home face à la mer au Portel",
    srTitle: "FAQ Blueportel - Location mobil-home face à la mer",
    srParagraphs: [
      "Toutes les réponses concernant la localisation, les équipements, les arrivées et les activités autour du mobil-home Blueportel.",
      "Mobil-home 3 chambres pour 6 personnes avec vue mer panoramique, terrasse couverte et accès direct plage.",
    ],
  },
  faqItems: faqEntries,
  contactBlock: {
    title: "Vous avez d'autres questions ?",
    description:
      "Notre équipe est à votre disposition pour organiser votre séjour et répondre à vos demandes spécifiques.",
    phoneLabel: "+32 488 83 20 91",
    phoneHref: "tel:+32488832091",
    emailLabel: "info@blueportel.fr",
    emailHref: "mailto:info@blueportel.fr",
  },
};

export default frFAQDictionary;

