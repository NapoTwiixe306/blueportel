import type { LegalDictionary } from "../types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

const dictionary: LegalDictionary = {
  locale: "fr",
  hero: {
    title: "Le Contrat de",
    highlight: "Confiance",
    titleAfter: "Blueportel",
    subtitle:
      "Blueportel Prestige & Blueportel Horizon — Locations de vacances, Le Portel (Côte d'Opale).",
    breadcrumbCurrent: "Contrat de confiance",
  },
  intro: [
    "<strong>Bienvenue chez Blueportel.</strong> Merci d'avoir choisi Blueportel Prestige ou Blueportel Horizon pour votre séjour sur la Côte d'Opale.",
    "Nous ne sommes pas une grande chaîne hôtelière. Nous sommes une entreprise familiale qui prépare personnellement chacun de ses hébergements avec le même soin que si nous accueillions des amis.",
    "Notre objectif est simple : que vous passiez d'excellentes vacances et que les voyageurs qui vous succéderont puissent vivre la même expérience.",
  ],
  sections: [
    {
      title: "Notre engagement",
      paragraphs: [
        "<strong>Préparer votre hébergement avec soin.</strong> Chaque mobil-home est entièrement nettoyé, contrôlé et préparé avant votre arrivée. Nous vérifions le bon fonctionnement des équipements afin que vous puissiez profiter pleinement de votre séjour.",
        "<strong>Vous accueillir en toute confiance.</strong> Grâce à notre système d'arrivée autonome, vous pouvez arriver en toute liberté, même en dehors des horaires habituels. Les informations d'accès vous sont communiquées dès que votre dossier est complet.",
        "<strong>Être disponibles.</strong> Avant, pendant et après votre séjour, nous restons disponibles pour répondre à vos questions ou résoudre rapidement un éventuel problème. Un simple message ou un appel suffit.",
        "<strong>Jouer la transparence.</strong> Nous réalisons un contrôle après chaque départ. Des photographies de l'état général du mobil-home sont prises uniquement afin de protéger aussi bien les voyageurs sortants que les voyageurs suivants. Cette méthode évite les malentendus et permet d'assurer un suivi objectif de chaque location.",
        "<strong>Respecter votre tranquillité.</strong> Nous n'effectuons aucune visite pendant votre séjour, sauf à votre demande ou en cas d'urgence. Vous profitez pleinement de vos vacances en toute autonomie.",
      ],
    },
    {
      title: "Votre engagement",
      paragraphs: ["En retour, nous vous demandons simplement de :"],
      items: [
        "prendre soin du mobil-home comme si c'était le vôtre ;",
        "respecter le voisinage et le calme du camping ;",
        "signaler rapidement toute panne ou tout incident ;",
        "nous informer honnêtement en cas de casse accidentelle ;",
        "respecter les quelques consignes de départ qui vous seront communiquées.",
      ],
      paragraphsAfter: [
        "Nous savons qu'un accident peut arriver. Ce qui compte pour nous, c'est la confiance et le dialogue.",
      ],
    },
    {
      title: "Le dépôt de garantie",
      paragraphs: [
        "Afin de faciliter les arrivées autonomes, un dépôt de garantie est demandé avant votre arrivée via la plateforme sécurisée <strong>Swikly</strong>.",
        "Ce dépôt n'est pas destiné à pénaliser les voyageurs. Il permet simplement de garantir le respect des lieux et d'éviter les formalités longues lors des arrivées et des départs.",
        "En l'absence de dégradation ou de nettoyage exceptionnel, le dépôt de garantie est libéré après le contrôle de l'hébergement.",
      ],
    },
    {
      title: "Les départs",
      paragraphs: [
        "Avant votre arrivée, vous recevrez un guide illustré reprenant les quelques gestes de ménage demandés avant votre départ.",
        "Ces gestes sont simples et permettent à notre équipe de préparer rapidement le logement pour les voyageurs suivants.",
        "Le contrôle final est ensuite réalisé par une personne, jamais par un système automatisé.",
      ],
    },
    {
      title: "Notre philosophie",
      paragraphs: [
        "Nous croyons qu'un séjour réussi repose avant tout sur la confiance. C'est pourquoi nous privilégions des règles simples, expliquées avec transparence, plutôt qu'une longue liste d'interdictions.",
        "Nous faisons confiance à nos voyageurs. En retour, nous leur demandons simplement de respecter les lieux comme ils le feraient chez eux.",
        "Cette confiance réciproque nous permet d'offrir des arrivées autonomes, des départs simplifiés et une expérience plus agréable pour tous.",
      ],
    },
  ],
  closing: {
    title: "Merci",
    paragraphs: [
      "Merci de contribuer, par votre attention et votre respect des lieux, à faire de Blueportel un endroit où chacun prend plaisir à revenir.",
      "Nous vous souhaitons un excellent séjour face à la mer et de merveilleux souvenirs sur la Côte d'Opale.",
      "À très bientôt chez Blueportel ! — L'équipe Blueportel",
    ],
  },
  structuredData: {
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
          name: "Contrat de confiance",
          item: `${siteUrl}/fr/pages/contrat-de-confiance`,
        },
      ],
    },
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Le Contrat de Confiance Blueportel",
      description:
        "Le contrat de confiance Blueportel : nos engagements envers nos voyageurs (préparation soignée, arrivée autonome, disponibilité, transparence) et ce que nous leur demandons en retour.",
      url: `${siteUrl}/fr/pages/contrat-de-confiance`,
      inLanguage: "fr-FR",
      isPartOf: {
        "@type": "WebSite",
        name: "Blueportel",
        url: siteUrl,
      },
    },
  },
};

export default dictionary;
