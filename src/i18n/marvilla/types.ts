export interface MarvillaDictionary {
  locale: string;
  hero: {
    title: string;
    breadcrumbCurrent: string;
  };
  alert: {
    title: string;
    message: string;
  };
  content: {
    paragraph1: string;
    paragraph2: string;
  };
  summary: {
    title: string;
    items: string[];
  };
  screenReader: {
    heading: string;
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

