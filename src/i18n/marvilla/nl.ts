import type { MarvillaDictionary } from './types';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://blueportel.com';

const nl: MarvillaDictionary = {
  locale: 'nl',
  hero: {
    title: 'Marvilla Tohapi Informatie',
    breadcrumbCurrent: 'Marvilla Tohapi Informatie',
  },
  alert: {
    title: 'Belangrijke opmerking:',
    message: 'Dit is <strong>geen</strong> Marvilla Tohapi advertentie.',
  },
  content: {
    paragraph1:
      "De <strong>Blueportel mobilhome</strong> is een <em>onafhankelijke verhuur</em> gelegen binnen het <strong>Le Phare d'Opale – Marvilla Tohapi camping</strong> in <strong>Le Portel</strong>, aan de <strong>Opaalkust</strong>. Dit is een privé-accommodatie, niet verbonden aan Marvilla of Tohapi, met <em>direct zicht op zee</em> en alle comfort van een premium mobilhome.",
    paragraph2:
      'De genoemde merken (<strong>Marvilla</strong>, <strong>Tohapi</strong>) blijven eigendom van hun respectieve eigenaren. Hun vermelding impliceert geen commerciële samenwerking, maar stelt vakantiegangers in staat om de <strong>Le Phare d\'Opale – Marvilla Tohapi camping</strong> precies te lokaliseren.',
  },
  summary: {
    title: 'Samenvatting',
    items: [
      '<strong>Blueportel</strong> is een onafhankelijke en persoonlijke verhuur',
      "De mobilhome bevindt zich op de <strong>Le Phare d'Opale – Marvilla Tohapi camping</strong> in <strong>Le Portel</strong>",
      'Accommodatie <strong>niet verbonden</strong> aan Marvilla of Tohapi',
      'Premium mobilhome met <strong>direct zicht op zee</strong> aan de <strong>Opaalkust</strong>',
    ],
  },
  screenReader: {
    heading: 'Marvilla Tohapi Informatie - Blueportel Onafhankelijke Verhuur',
    paragraphs: [
      "Blueportel is een onafhankelijke mobilhome verhuur gelegen op de Le Phare d'Opale - Marvilla Tohapi camping in Le Portel, aan de Opaalkust. Privé-accommodatie niet verbonden aan Marvilla of Tohapi, met direct zicht op zee en alle comfort van een premium mobilhome.",
      'De Marvilla en Tohapi merken blijven eigendom van hun respectieve eigenaren. Hun vermelding stelt in staat om de Le Phare d\'Opale - Marvilla Tohapi camping in Le Portel precies te lokaliseren.',
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
          name: 'Marvilla Tohapi Informatie',
          item: `${siteUrl}/nl/pages/information-marvilla-tohapi`,
        },
      ],
    },
    webPage: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Marvilla Tohapi Informatie',
      description:
        'Belangrijke informatie over de onafhankelijke Blueportel verhuur op Le Phare d\'Opale - Marvilla Tohapi camping',
      url: `${siteUrl}/nl/pages/information-marvilla-tohapi`,
      inLanguage: 'nl-NL',
      isPartOf: {
        '@type': 'WebSite',
        name: 'Blueportel',
        url: siteUrl,
      },
    },
  },
};

export default nl;

