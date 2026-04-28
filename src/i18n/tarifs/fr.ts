import type { TarifsDictionary } from "./types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

export const frTarifsDictionary: TarifsDictionary = {
  locale: "fr",
  metadata: {
    title: "Tarifs Mobil-home Blueportel | Location face à la mer",
    description:
      "Découvrez les tarifs basse, moyenne et haute saison du mobil-home Blueportel. Acompte 30%, caution 500€, linge et ménage inclus. Réservez votre séjour face à la mer.",
    alternates: {
      canonical: "/fr/pages/tarifs",
      languages: {
        "fr-FR": "/fr/pages/tarifs",
        "en-GB": "/en/pages/tarifs",
        "nl-NL": "/nl/pages/tarifs",
      },
    },
    openGraph: {
      title: "Tarifs Blueportel | Mobil-home face à la mer",
      description:
        "Tarifs par saison, politique d’acompte et prestations incluses pour votre location mobil-home au Portel.",
      type: "website",
      url: `${siteUrl}/fr/pages/tarifs`,
    },
  },
  structuredData: {
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: `${siteUrl}/fr` },
        { "@type": "ListItem", position: 2, name: "Tarifs", item: `${siteUrl}/fr/pages/tarifs` },
      ],
    },
  },
  hero: {
    breadcrumbCurrent: "Tarifs",
    homeLabel: "Accueil",
    pretitle: "Mobil-home Blueportel",
    title: "Tarifs & politique de réservation",
    description:
      "Consultez nos tarifs par saison, les services inclus et la politique d’acompte/caution avant de réserver votre séjour face à la mer.",
  },
  seasons: [
    {
      name: "Basse saison",
      period: "Février • Mars • Octobre",
      priceEUR: { min: 75 },
      minStay: "2 nuits minimum",
      perks: [
        "Couchers de soleil d'hiver",
        "Idéal pour télétravail zen",
        "Tarifs les plus doux de l'année",
      ],
    },
    {
      name: "Moyenne saison",
      period: "Avril • Mai • Juin • Septembre",
      priceEUR: { min: 100 },
      minStay: "3 nuits minimum",
      perks: [
        "Printemps et arrière-saison lumineux",
        "Idéal pour les sentiers côtiers",
        "Moins d'affluence sur les plages",
      ],
    },
    {
      name: "Haute saison",
      period: "Juillet • Août",
      priceEUR: { min: 130, max: 150 },
      minStay: "6 nuits minimum",
      perks: [
        "Vue mer exceptionnelle",
        "Accès direct à la plage",
        "Parfait pour les grandes vacances",
      ],
    },
  ],
  infoBlocks: [
    {
      icon: "deposit",
      title: "Politique d’acompte",
      items: [
        "Acompte de 30% à la réservation (paiement sécurisé Lodgify).",
        "Solde 30 jours avant l’arrivée.",
        "Réservation de dernière minute : règlement intégral à la confirmation.",
      ],
    },
    {
      icon: "caution",
      title: "Caution & ménage",
      items: [
        "Caution de 200€ (empreinte ou chèque).",
        "Ménage NON INCLUS.",
        "Animaux acceptés sur demande pas de supplément",
      ],
    },
    {
      icon: "schedule",
      title: "Horaires",
      items: [
        "Arrivée : 14h – 18h · Départ : avant 11h.",
        "Arrivée tardive possible sur demande.",
        "Assistance sur place par notre hôtesse.",
      ],
    },
    {
      icon: "included",
      title: "Inclus dans le tarif",
      items: [
        "Linge de lit, serviettes et kits d’accueil.",
        "Wi-Fi Starlink (dès 2026) & TV connectée.",
        "Parking privé pour 2 véhicules.",
      ],
    },
  ],
  cta: {
    title: "Besoin d’un devis sur mesure ?",
    description:
      "Contactez-nous pour les séjours longue durée, les demandes spécifiques ou les offres d’entreprise.",
    buttons: {
      primary: {
        label: "Réserver en ligne",
        href: "https://checkout.lodgify.com/fr/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1",
        rel: "nofollow",
      },
      secondary: { label: "Demander un devis", href: "mailto:info@blueportel.fr" },
    },
  },
  screenReader: {
    title: "Tarifs Blueportel",
    content: [
      "Tarifs basse, moyenne et haute saison pour la location du mobil-home Blueportel.",
      "Acompte de 30%, caution de 500€, linge de lit et ménage inclus, animaux acceptés sur demande.",
    ],
  },
};

export default frTarifsDictionary;

