export interface LegalSection {
  title: string;
  paragraphs?: string[];
  items?: string[];
  paragraphsAfter?: string[];
}

export interface LegalDictionary {
  locale: string;
  hero: {
    title: string;
    highlight: string;
    titleAfter?: string;
    subtitle: string;
    breadcrumbCurrent: string;
  };
  intro?: string[];
  sections: LegalSection[];
  closing?: {
    title: string;
    paragraphs: string[];
  };
  structuredData: {
    breadcrumb: {
      "@context": string;
      "@type": string;
      itemListElement: Array<{
        "@type": string;
        position: number;
        name: string;
        item: string;
      }>;
    };
    webPage: {
      "@context": string;
      "@type": string;
      name: string;
      description: string;
      url: string;
      inLanguage: string;
      isPartOf: {
        "@type": string;
        name: string;
        url: string;
      };
    };
  };
}
