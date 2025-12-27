import type { MarvillaDictionary } from './types';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://blueportel.com';

const fr: MarvillaDictionary = {
  locale: 'fr',
  hero: {
    title: 'Information Marvilla Tohapi',
    breadcrumbCurrent: 'Information Marvilla Tohapi',
  },
  alert: {
    title: 'Note importante :',
    message: "Ceci n'est <strong>pas</strong> une annonce Marvilla Tohapi.",
  },
  content: {
    paragraph1:
      "Le <strong>mobil-home Blueportel</strong> est une <em>location indépendante</em> située au sein du <strong>camping Le Phare d'Opale – Marvilla Tohapi</strong> à <strong>Le Portel</strong>, sur la <strong>Côte d'Opale</strong>. Il s'agit d'un hébergement personnel, non affilié à Marvilla ou Tohapi, offrant une <em>vue mer directe</em> et tout le confort d'un mobil-home premium.",
    paragraph2:
      "Les marques citées (<strong>Marvilla</strong>, <strong>Tohapi</strong>) demeurent la propriété de leurs détenteurs respectifs. Leur mention n'implique aucun partenariat commercial, mais permet aux vacanciers de situer précisément le <strong>camping Le Phare d'Opale – Marvilla Tohapi</strong>.",
  },
  summary: {
    title: 'En résumé',
    items: [
      '<strong>Blueportel</strong> est une location indépendante et personnelle',
      "Le mobil-home est situé au <strong>camping Le Phare d'Opale – Marvilla Tohapi</strong> à <strong>Le Portel</strong>",
      'Hébergement <strong>non affilié</strong> à Marvilla ou Tohapi',
      'Mobil-home premium avec <strong>vue mer directe</strong> sur la <strong>Côte d\'Opale</strong>',
    ],
  },
  screenReader: {
    heading: 'Information Marvilla Tohapi - Blueportel Location Indépendante',
    paragraphs: [
      "Blueportel est une location indépendante de mobil-home située au camping Le Phare d'Opale - Marvilla Tohapi à Le Portel, sur la Côte d'Opale. Hébergement personnel non affilié à Marvilla ou Tohapi, offrant une vue mer directe et tout le confort d'un mobil-home premium.",
      'Les marques Marvilla et Tohapi demeurent la propriété de leurs détenteurs respectifs. Leur mention permet de situer précisément le camping Le Phare d\'Opale - Marvilla Tohapi à Le Portel.',
    ],
  },
  structuredData: {
    breadcrumb: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Accueil',
          item: siteUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Information Marvilla Tohapi',
          item: `${siteUrl}/fr/pages/information-marvilla-tohapi`,
        },
      ],
    },
    webPage: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Information Marvilla Tohapi',
      description:
        "Information importante concernant la location indépendante Blueportel au camping Le Phare d'Opale - Marvilla Tohapi",
      url: `${siteUrl}/fr/pages/information-marvilla-tohapi`,
      inLanguage: 'fr-FR',
      isPartOf: {
        '@type': 'WebSite',
        name: 'Blueportel',
        url: siteUrl,
      },
    },
  },
};

export default fr;

