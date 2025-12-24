import type { MarvillaDictionary } from './types';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://blueportel.com';

const en: MarvillaDictionary = {
  locale: 'en',
  hero: {
    title: 'Marvilla Tohapi Information',
    breadcrumbCurrent: 'Marvilla Tohapi Information',
  },
  alert: {
    title: 'Important note:',
    message: 'This is <strong>not</strong> a Marvilla Tohapi listing.',
  },
  content: {
    paragraph1:
      "The <strong>Blueportel mobile home</strong> is an <em>independent rental</em> located within the <strong>Le Phare d'Opale – Marvilla Tohapi campsite</strong> in <strong>Le Portel</strong>, on the <strong>Opal Coast</strong>. This is a private accommodation, not affiliated with Marvilla or Tohapi, offering a <em>direct sea view</em> and all the comfort of a premium mobile home.",
    paragraph2:
      'The mentioned brands (<strong>Marvilla</strong>, <strong>Tohapi</strong>) remain the property of their respective owners. Their mention does not imply any commercial partnership, but allows vacationers to precisely locate the <strong>Le Phare d\'Opale – Marvilla Tohapi campsite</strong>.',
  },
  summary: {
    title: 'In summary',
    items: [
      '<strong>Blueportel</strong> is an independent and personal rental',
      "The mobile home is located at the <strong>Le Phare d'Opale – Marvilla Tohapi campsite</strong> in <strong>Le Portel</strong>",
      'Accommodation <strong>not affiliated</strong> with Marvilla or Tohapi',
      'Premium mobile home with <strong>direct sea view</strong> on the <strong>Opal Coast</strong>',
    ],
  },
  screenReader: {
    heading: 'Marvilla Tohapi Information - Blueportel Independent Rental',
    paragraphs: [
      "Blueportel is an independent mobile home rental located at the Le Phare d'Opale - Marvilla Tohapi campsite in Le Portel, on the Opal Coast. Private accommodation not affiliated with Marvilla or Tohapi, offering a direct sea view and all the comfort of a premium mobile home.",
      'The Marvilla and Tohapi brands remain the property of their respective owners. Their mention allows to precisely locate the Le Phare d\'Opale - Marvilla Tohapi campsite in Le Portel.',
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
          name: 'Home',
          item: siteUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Marvilla Tohapi Information',
          item: `${siteUrl}/en/seaside-campsite-opal-coast`,
        },
      ],
    },
    webPage: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Marvilla Tohapi Information',
      description:
        'Important information regarding the independent Blueportel rental at Le Phare d\'Opale - Marvilla Tohapi campsite',
      url: `${siteUrl}/en/seaside-campsite-opal-coast`,
      inLanguage: 'en-US',
      isPartOf: {
        '@type': 'WebSite',
        name: 'Blueportel',
        url: siteUrl,
      },
    },
  },
};

export default en;

