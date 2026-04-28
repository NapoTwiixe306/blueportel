import type { TDMDictionary } from './types';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://blueportel.com';

const en: TDMDictionary = {
  locale: 'en',
  hero: {
    title: 'Text and Data Mining (TDM) Policy',
    subtitle: 'Blueportel.fr – Premium Mobile Home Rental in Le Portel',
    breadcrumbCurrent: 'TDM Policy',
  },
  sections: {
    object: {
      title: '1. Purpose of this policy',
      paragraphs: [
        "This page aims to inform users and automated operators (robots, artificial intelligences, data collection tools, etc.) that <strong>Blueportel.fr expressly reserves all rights relating to Text and Data Mining (TDM) techniques</strong>, in accordance with <strong>Article L.122-5-3 of the French Intellectual Property Code</strong>.",
        "Consequently, any automated reproduction, extraction or reuse of texts, images, videos or databases present on the Blueportel.fr site is <strong>strictly prohibited without prior written authorization</strong>.",
      ],
    },
    definition: {
      title: '2. Definition of TDM',
      paragraphs: [
        "<em>Text and Data Mining (TDM)</em> refers to any technique aimed at automatically analyzing digital content (texts, images, sounds, videos, data, etc.) in order to extract information, trends or patterns. This practice notably includes <strong>generative artificial intelligence systems</strong>, <strong>extended indexing robots</strong> and <strong>data exploration agents</strong>.",
      ],
    },
    reservation: {
      title: '3. Reservation of rights',
      items: [
        'Blueportel expressly reserves its TDM rights on all site content;',
        'This reservation is indicated in the site metadata (meta tags and <code className="bg-gray-100 px-2 py-1 rounded">tdmrep.json</code> file);',
        'Any automated use of texts, visuals and data for training, extraction or exploitation purposes is prohibited without prior authorization.',
      ],
    },
    authorized: {
      title: '4. Authorized use',
      paragraphs: [
        "Manual access and human consultation of Blueportel.fr site content are <strong>free and encouraged</strong> for any information, booking or tourist discovery purposes. Any automated, partial or complete use for research, algorithm training or derivative content generation purposes is <strong>subject to authorization</strong>.",
      ],
    },
    contact: {
      title: '5. Contact for authorization',
      paragraphs: [
        'For any request for exploitation, citation or content partnership, please contact:',
      ],
      email: 'info@blueportel.fr',
      address: {
        name: 'Blueportel – Premium Mobile Home facing the sea',
        location: 'Le Portel (Opal Coast), France',
      },
    },
    legal: {
      title: '6. Legal reference',
      paragraphs: [
        "This policy is established in application of <strong>Article L.122-5-3 of the French Intellectual Property Code</strong>, introduced by European Directive (EU) 2019/790 of April 17, 2019 on copyright and related rights in the digital single market.",
      ],
    },
    summary: {
      title: 'Summary:',
      text: 'Blueportel.fr protects its content (texts, images, visuals and data) against unauthorized text and data mining. Any automated extraction or use is prohibited without prior agreement.',
    },
  },
  screenReader: {
    heading: 'Blueportel TDM Policy - Protection of content against Text and Data Mining',
    paragraphs: [
      "Blueportel expressly reserves all rights relating to Text and Data Mining (TDM) techniques in accordance with Article L.122-5-3 of the French Intellectual Property Code. Any automated extraction of content is prohibited without prior authorization.",
      "Policy for protecting digital content against automated extraction, algorithm training and unauthorized derivative content generation. Contact: info@blueportel.fr for any exploitation request.",
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
          name: 'TDM Policy',
          item: `${siteUrl}/en/pages/politique-tdm`,
        },
      ],
    },
    webPage: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Text and Data Mining (TDM) Policy',
      description: 'Policy for protecting content against unauthorized Text and Data Mining',
      url: `${siteUrl}/en/pages/politique-tdm`,
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

