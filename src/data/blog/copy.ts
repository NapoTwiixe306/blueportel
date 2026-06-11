import type { Locale } from "../../i18n/locales";
import type { BlogArticleCopy, BlogIndexCopy } from "./types";

export const blogIndexCopy: Record<Locale, BlogIndexCopy> = {
  fr: {
    metaTitle: "Blog Côte d'Opale | Guides, plages & bons plans | Blueportel",
    metaDescription:
      "Guides complets pour vos vacances sur la Côte d'Opale : que faire, plus belles plages, Nausicaá, week-ends en famille et conseils d'hébergement à Le Portel.",
    breadcrumbHome: "Accueil",
    breadcrumbCurrent: "Blog",
    pretitle: "Le blog Blueportel",
    title: "Guides & conseils pour vos vacances sur la Côte d'Opale",
    description:
      "Rédigés depuis notre mobil-home face à la mer à Le Portel, nos guides vous aident à préparer votre séjour : activités, plages, Nausicaá, sorties en famille et hébergement.",
    categoriesLabel: {
      guide: "Guide",
      destination: "Destination",
      plages: "Plages",
      famille: "Famille",
      hebergement: "Hébergement",
    },
    readingTimeLabel: "min de lecture",
    readMoreLabel: "Lire le guide",
    updatedLabel: "Mis à jour le",
  },
  en: {
    metaTitle: "Opal Coast Blog | Guides, beaches & travel tips | Blueportel",
    metaDescription:
      "Complete guides for your Opal Coast holidays: things to do, best beaches, Nausicaá aquarium, family weekends and accommodation tips in Le Portel, France.",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Blog",
    pretitle: "The Blueportel blog",
    title: "Guides & tips for your Opal Coast holidays",
    description:
      "Written from our seafront mobile home in Le Portel, our guides help you plan your stay: activities, beaches, Nausicaá, family outings and accommodation.",
    categoriesLabel: {
      guide: "Guide",
      destination: "Destination",
      plages: "Beaches",
      famille: "Family",
      hebergement: "Accommodation",
    },
    readingTimeLabel: "min read",
    readMoreLabel: "Read the guide",
    updatedLabel: "Updated on",
  },
  nl: {
    metaTitle: "Opaalkust Blog | Gidsen, stranden & tips | Blueportel",
    metaDescription:
      "Complete gidsen voor uw vakantie aan de Opaalkust: wat te doen, mooiste stranden, Nausicaá, gezinsweekends en accommodatietips in Le Portel, Frankrijk.",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Blog",
    pretitle: "De Blueportel blog",
    title: "Gidsen & tips voor uw vakantie aan de Opaalkust",
    description:
      "Geschreven vanuit onze stacaravan met zeezicht in Le Portel helpen onze gidsen u bij het plannen van uw verblijf: activiteiten, stranden, Nausicaá, gezinsuitstapjes en accommodatie.",
    categoriesLabel: {
      guide: "Gids",
      destination: "Bestemming",
      plages: "Stranden",
      famille: "Gezin",
      hebergement: "Accommodatie",
    },
    readingTimeLabel: "min leestijd",
    readMoreLabel: "Lees de gids",
    updatedLabel: "Bijgewerkt op",
  },
};

export const blogArticleCopy: Record<Locale, BlogArticleCopy> = {
  fr: {
    breadcrumbHome: "Accueil",
    breadcrumbBlog: "Blog",
    tocTitle: "Sommaire",
    faqTitle: "Questions fréquentes",
    relatedTitle: "À lire aussi",
    updatedLabel: "Mis à jour le",
    publishedLabel: "Publié le",
    readingTimeLabel: "min de lecture",
    ctaTitle: "Séjournez face à la mer à Le Portel",
    ctaText:
      "Blueportel propose deux mobil-homes tout équipés au camping Le Phare d'Opale, sur la falaise de Le Portel : vue mer panoramique, terrasse couverte, à 10 minutes de Nausicaá et au cœur de la Côte d'Opale.",
    ctaAvailability: "Voir les disponibilités",
    ctaContact: "Poser une question",
    ctaPrestige: "Découvrir le Prestige (6 pers.)",
    ctaHorizon: "Découvrir l'Horizon (4 pers.)",
    authorLabel: "Par l'équipe Blueportel — hôtes à Le Portel",
  },
  en: {
    breadcrumbHome: "Home",
    breadcrumbBlog: "Blog",
    tocTitle: "Contents",
    faqTitle: "Frequently asked questions",
    relatedTitle: "Related guides",
    updatedLabel: "Updated on",
    publishedLabel: "Published on",
    readingTimeLabel: "min read",
    ctaTitle: "Stay facing the sea in Le Portel",
    ctaText:
      "Blueportel offers two fully equipped mobile homes at Le Phare d'Opale campsite, on the clifftop of Le Portel: panoramic sea view, covered terrace, 10 minutes from Nausicaá and at the heart of the Opal Coast.",
    ctaAvailability: "Check availability",
    ctaContact: "Ask a question",
    ctaPrestige: "Discover the Prestige (sleeps 6)",
    ctaHorizon: "Discover the Horizon (sleeps 4)",
    authorLabel: "By the Blueportel team — hosts in Le Portel",
  },
  nl: {
    breadcrumbHome: "Home",
    breadcrumbBlog: "Blog",
    tocTitle: "Inhoud",
    faqTitle: "Veelgestelde vragen",
    relatedTitle: "Lees ook",
    updatedLabel: "Bijgewerkt op",
    publishedLabel: "Gepubliceerd op",
    readingTimeLabel: "min leestijd",
    ctaTitle: "Verblijf met zeezicht in Le Portel",
    ctaText:
      "Blueportel biedt twee volledig uitgeruste stacaravans op camping Le Phare d'Opale, boven op de klif van Le Portel: panoramisch zeezicht, overdekt terras, op 10 minuten van Nausicaá en in het hart van de Opaalkust.",
    ctaAvailability: "Beschikbaarheid bekijken",
    ctaContact: "Stel een vraag",
    ctaPrestige: "Ontdek de Prestige (6 pers.)",
    ctaHorizon: "Ontdek de Horizon (4 pers.)",
    authorLabel: "Door het Blueportel-team — gastheren in Le Portel",
  },
};
