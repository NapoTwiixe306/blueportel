import type { TDMDictionary } from './types';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://blueportel.com';

const nl: TDMDictionary = {
  locale: 'nl',
  hero: {
    title: 'Text and Data Mining (TDM) Beleid',
    subtitle: 'Blueportel.fr – Premium Mobilhome Verhuur in Le Portel',
    breadcrumbCurrent: 'TDM Beleid',
  },
  sections: {
    object: {
      title: '1. Doel van dit beleid',
      paragraphs: [
        "Deze pagina heeft tot doel gebruikers en geautomatiseerde operators (robots, kunstmatige intelligenties, gegevensverzamelingsinstrumenten, enz.) te informeren dat <strong>Blueportel.fr uitdrukkelijk alle rechten met betrekking tot Text and Data Mining (TDM) technieken voorbehoudt</strong>, in overeenstemming met <strong>Artikel L.122-5-3 van de Franse Intellectuele Eigendoms Code</strong>.",
        "Bijgevolg is elke geautomatiseerde reproductie, extractie of hergebruik van teksten, afbeeldingen, video's of databases op de Blueportel.fr site <strong>strikt verboden zonder voorafgaande schriftelijke toestemming</strong>.",
      ],
    },
    definition: {
      title: '2. Definitie van TDM',
      paragraphs: [
        "<em>Text and Data Mining (TDM)</em> verwijst naar elke techniek die gericht is op het automatisch analyseren van digitale inhoud (teksten, afbeeldingen, geluiden, video's, gegevens, enz.) om informatie, trends of patronen te extraheren. Deze praktijk omvat met name <strong>generatieve kunstmatige intelligentiesystemen</strong>, <strong>uitgebreide indexeringsrobots</strong> en <strong>gegevensverkenning agents</strong>.",
      ],
    },
    reservation: {
      title: '3. Voorbehoud van rechten',
      items: [
        'Blueportel behoudt zich uitdrukkelijk zijn TDM-rechten voor op alle site-inhoud;',
        'Dit voorbehoud wordt aangegeven in de site-metadata (meta-tags en <code className="bg-gray-100 px-2 py-1 rounded">tdmrep.json</code> bestand);',
        'Elk geautomatiseerd gebruik van teksten, visuals en gegevens voor trainings-, extractie- of exploitatie doeleinden is verboden zonder voorafgaande autorisatie.',
      ],
    },
    authorized: {
      title: '4. Toegestaan gebruik',
      paragraphs: [
        "Handmatige toegang en menselijke raadpleging van Blueportel.fr site-inhoud zijn <strong>vrij en aangemoedigd</strong> voor elk informatie-, boekings- of toeristische ontdekkingsdoeleinde. Elk geautomatiseerd, gedeeltelijk of volledig gebruik voor onderzoeks-, algoritme training- of afgeleide inhoud generatie doeleinden is <strong>onderworpen aan autorisatie</strong>.",
      ],
    },
    contact: {
      title: '5. Contact voor autorisatie',
      paragraphs: [
        'Voor elk verzoek tot exploitatie, citatie of inhoudspartnerschap, neem contact op:',
      ],
      email: 'info@blueportel.fr',
      address: {
        name: 'Blueportel – Premium Mobilhome met zicht op zee',
        location: 'Le Portel (Opaalkust), Frankrijk',
      },
    },
    legal: {
      title: '6. Juridische referentie',
      paragraphs: [
        "Dit beleid is opgesteld in toepassing van <strong>Artikel L.122-5-3 van de Franse Intellectuele Eigendoms Code</strong>, geïntroduceerd door Europese Richtlijn (EU) 2019/790 van 17 april 2019 betreffende auteursrecht en naburige rechten in de digitale interne markt.",
      ],
    },
    summary: {
      title: 'Samenvatting:',
      text: 'Blueportel.fr beschermt zijn inhoud (teksten, afbeeldingen, visuals en gegevens) tegen niet-geautoriseerde text and data mining. Elke geautomatiseerde extractie of gebruik is verboden zonder voorafgaande overeenkomst.',
    },
  },
  screenReader: {
    heading: 'Blueportel TDM Beleid - Bescherming van inhoud tegen Text and Data Mining',
    paragraphs: [
      "Blueportel behoudt zich uitdrukkelijk alle rechten met betrekking tot Text and Data Mining (TDM) technieken voor in overeenstemming met Artikel L.122-5-3 van de Franse Intellectuele Eigendoms Code. Elke geautomatiseerde extractie van inhoud is verboden zonder voorafgaande autorisatie.",
      "Beleid voor de bescherming van digitale inhoud tegen geautomatiseerde extractie, algoritme training en niet-geautoriseerde afgeleide inhoud generatie. Contact: info@blueportel.fr voor elk exploitatieverzoek.",
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
          name: 'TDM Beleid',
          item: `${siteUrl}/nl/voorwaarden`,
        },
      ],
    },
    webPage: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Text and Data Mining (TDM) Beleid',
      description: 'Beleid voor de bescherming van inhoud tegen niet-geautoriseerde Text and Data Mining',
      url: `${siteUrl}/nl/voorwaarden`,
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

