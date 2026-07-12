import type { LegalDictionary } from "../types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

const dictionary: LegalDictionary = {
  locale: "fr",
  hero: {
    title: "Conditions Générales de",
    highlight: "Location",
    subtitle:
      "Blueportel Prestige & Blueportel Horizon — Locations de vacances, Le Portel (Côte d'Opale). Dernière mise à jour : juillet 2026.",
    breadcrumbCurrent: "Conditions générales de location",
  },
  sections: [
    {
      title: "1. Préambule",
      paragraphs: [
        "Les présentes Conditions Générales de Location ont pour objet de définir les droits et obligations du propriétaire et du locataire dans le cadre de la location saisonnière des hébergements <strong>Blueportel Prestige</strong> et <strong>Blueportel Horizon</strong>, situés au Camping Le Phare d'Opale à Le Portel (Pas-de-Calais).",
        "Toute réservation implique l'acceptation pleine et entière des présentes conditions.",
        "Notre objectif est simple : offrir à chaque voyageur un hébergement parfaitement propre, confortable et conforme à sa description, tout en garantissant un fonctionnement transparent et équitable pour chacun.",
      ],
    },
    {
      title: "2. Réservation",
      paragraphs: ["La réservation devient définitive après :"],
      items: [
        "l'acceptation de la réservation par Blueportel ;",
        "le paiement demandé selon les modalités communiquées ;",
        "l'acceptation des présentes Conditions Générales de Location.",
      ],
      paragraphsAfter: [
        "Une confirmation est ensuite envoyée au locataire par courrier électronique.",
      ],
    },
    {
      title: "3. Occupation du logement",
      paragraphs: [
        "Le logement est réservé exclusivement aux personnes mentionnées lors de la réservation.",
        "Le nombre maximum de personnes autorisées ne peut jamais dépasser la capacité indiquée pour l'hébergement.",
        "Toute personne supplémentaire non déclarée pourra entraîner un refus d'accès au logement ou une interruption du séjour sans remboursement.",
        "Les mineurs restent sous l'entière responsabilité de leurs accompagnants.",
      ],
    },
    {
      title: "4. Arrivée",
      paragraphs: [
        "Les arrivées s'effectuent généralement à partir de l'heure indiquée lors de la confirmation de réservation.",
        "Blueportel privilégie un système d'arrivée autonome grâce à une boîte à clés sécurisée, permettant davantage de flexibilité aux voyageurs.",
        "Le code de la boîte à clés, le guide d'accueil numérique ainsi que les informations pratiques sont transmis uniquement lorsque toutes les formalités administratives sont terminées.",
      ],
    },
    {
      title: "5. Dépôt de garantie via Swikly",
      paragraphs: [
        "Afin de garantir un fonctionnement simple, rapide et sécurisé des arrivées autonomes, Blueportel utilise la plateforme sécurisée <strong>Swikly</strong> pour la gestion du dépôt de garantie.",
        "Le dépôt de garantie est obligatoire pour toute réservation effectuée en direct. Le lien Swikly est transmis avant l'arrivée.",
        "Tant que le dépôt de garantie n'a pas été validé sur la plateforme Swikly :",
      ],
      items: [
        "le code de la boîte à clés n'est pas communiqué ;",
        "le guide d'accueil n'est pas envoyé ;",
        "l'autorisation d'accueil n'est pas transmise à notre personne d'accueil.",
      ],
      paragraphsAfter: [
        "Cette procédure s'applique à tous les voyageurs sans exception.",
        "Le dépôt de garantie ne constitue pas un paiement supplémentaire. Il est destiné à couvrir, le cas échéant : des dégradations ; un nettoyage exceptionnel rendu nécessaire par l'état du logement ; des équipements manquants ou détériorés ; le non-respect manifeste des présentes conditions.",
        "Toute retenue éventuelle fera l'objet d'une justification.",
      ],
    },
    {
      title: "6. Restitution du dépôt de garantie",
      paragraphs: [
        "Après chaque séjour, un contrôle complet du logement est effectué. Deux situations sont possibles :",
      ],
      items: [
        "un contrôle réalisé en présence du locataire lors de son départ, lorsque cela est possible ;",
        "un contrôle réalisé après le départ par notre personne d'accueil entre deux locations.",
      ],
      paragraphsAfter: [
        "En l'absence d'anomalie, le dépôt de garantie est libéré conformément aux procédures de Swikly.",
      ],
    },
    {
      title: "7. Ménage de fin de séjour",
      paragraphs: [
        "Chaque voyageur reçoit avant son arrivée un document illustré présentant les quelques gestes de ménage demandés avant son départ.",
        "Le logement doit notamment être rendu dans un état normal de propreté. Il est notamment demandé de :",
      ],
      items: [
        "laisser la vaisselle propre et rangée ;",
        "vider les poubelles dans les points de collecte prévus par le camping ;",
        "nettoyer les plans de travail et les équipements utilisés ;",
        "laisser le réfrigérateur vidé ;",
        "restituer le mobilier dans sa disposition d'origine ;",
        "signaler toute casse ou anomalie.",
      ],
      paragraphsAfter: [
        "Le ménage de remise en état entre deux locations est assuré par Blueportel.",
        "En revanche, un nettoyage exceptionnel rendu nécessaire par un logement laissé dans un état manifestement anormal pourra être facturé après justification.",
      ],
    },
    {
      title: "8. Contrôle de l'hébergement",
      paragraphs: [
        "Après chaque départ, Blueportel réalise un contrôle complet de l'hébergement.",
        "Un relevé photographique est effectué afin de conserver une preuve objective de l'état du logement entre deux locations. Cette procédure protège aussi bien le locataire sortant que le locataire entrant.",
        "Ces photographies peuvent être utilisées uniquement en cas de contestation relative à l'état du logement ou à d'éventuelles dégradations.",
      ],
    },
    {
      title: "9. Équipements",
      paragraphs: [
        "Le locataire s'engage à utiliser le logement et ses équipements en bon père de famille.",
        "Toute anomalie constatée à l'arrivée devra être signalée dans les meilleurs délais afin qu'elle puisse être prise en compte.",
        "Toute casse ou détérioration survenue pendant le séjour devra être signalée spontanément.",
      ],
    },
    {
      title: "10. Animaux",
      paragraphs: [
        "Les animaux sont admis uniquement lorsqu'ils ont été déclarés lors de la réservation et acceptés par Blueportel.",
        "Le propriétaire de l'animal reste entièrement responsable de celui-ci pendant toute la durée du séjour.",
        "Pour des raisons de sécurité et de respect du logement :",
      ],
      items: [
        "les animaux ne doivent jamais être laissés seuls dans le mobil-home ;",
        "ils doivent être tenus en laisse dans les espaces où le règlement du camping l'impose ;",
        "les éventuelles déjections doivent être ramassées.",
      ],
      paragraphsAfter: [
        "Les éventuels dégâts causés par un animal restent à la charge du locataire.",
      ],
    },
    {
      title: "11. Respect du voisinage",
      paragraphs: [
        "Blueportel est un lieu de vacances calme.",
        "Les voyageurs s'engagent à respecter le voisinage, le règlement intérieur du camping ainsi que les horaires de tranquillité.",
        "Toute nuisance importante pourra entraîner la fin anticipée du séjour sans indemnisation.",
      ],
    },
    {
      title: "12. Interdictions",
      paragraphs: ["Il est notamment interdit :"],
      items: [
        "de fumer à l'intérieur du mobil-home ;",
        "d'organiser des fêtes ou rassemblements non autorisés ;",
        "de sous-louer le logement ;",
        "d'utiliser des appareils dangereux ou non adaptés aux installations ;",
        "de déplacer durablement le mobilier à l'extérieur.",
      ],
    },
    {
      title: "13. Départ",
      paragraphs: [
        "Le logement doit être libéré à l'heure convenue.",
        "Les clés doivent être restituées conformément aux consignes communiquées avant le départ.",
        "Tout départ tardif non autorisé pourra entraîner des frais lorsque celui-ci retarde la préparation du logement pour les voyageurs suivants.",
      ],
    },
    {
      title: "14. Responsabilité du locataire",
      paragraphs: ["Le locataire est responsable :"],
      items: [
        "des personnes participant au séjour ;",
        "des dommages causés pendant la location ;",
        "des équipements mis à sa disposition.",
      ],
      paragraphsAfter: [
        "Il est recommandé de disposer d'une assurance responsabilité civile couvrant les locations saisonnières.",
      ],
    },
    {
      title: "15. Responsabilité de Blueportel",
      paragraphs: [
        "Blueportel s'engage à mettre à disposition un hébergement conforme à sa description, propre et entretenu.",
        "La responsabilité de Blueportel ne pourra être engagée en cas :",
      ],
      items: [
        "d'interruption des services indépendants de sa volonté (eau, électricité, internet, réseau téléphonique, installations du camping, etc.) ;",
        "d'événement climatique exceptionnel ;",
        "de force majeure au sens du droit français.",
      ],
    },
    {
      title: "16. Protection des données",
      paragraphs: [
        "Les informations recueillies lors de la réservation sont utilisées uniquement pour la gestion du séjour, la facturation, le respect des obligations légales et la communication avec le locataire.",
        "Elles ne sont jamais revendues à des tiers.",
        "Les données sont traitées conformément au Règlement Général sur la Protection des Données (RGPD).",
        "Le locataire peut exercer ses droits d'accès, de rectification ou de suppression en contactant Blueportel.",
      ],
    },
    {
      title: "17. Droit applicable",
      paragraphs: [
        "Les présentes Conditions Générales sont régies par le droit français.",
        "En cas de litige, les parties rechercheront en priorité une solution amiable. À défaut d'accord, les juridictions françaises territorialement compétentes seront seules compétentes.",
      ],
    },
    {
      title: "18. Contact",
      paragraphs: [
        "<strong>Blueportel</strong> — Le Portel, Côte d'Opale",
        '📧 <a href="mailto:info@blueportel.fr" class="text-blue-500 hover:underline">info@blueportel.fr</a>',
        '🌐 <a href="https://blueportel.fr" class="text-blue-500 hover:underline">https://blueportel.fr</a>',
      ],
    },
  ],
  closing: {
    title: "Merci de votre confiance",
    paragraphs: [
      "Nous vous remercions pour votre confiance et vous souhaitons un excellent séjour à Blueportel.",
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
          name: "Conditions générales de location",
          item: `${siteUrl}/fr/pages/conditions-generales-location`,
        },
      ],
    },
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Conditions Générales de Location | Blueportel",
      description:
        "Conditions générales de location des hébergements Blueportel Prestige et Blueportel Horizon au Portel (Côte d'Opale) : réservation, dépôt de garantie Swikly, arrivée autonome, ménage et responsabilités.",
      url: `${siteUrl}/fr/pages/conditions-generales-location`,
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
