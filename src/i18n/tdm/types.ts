export interface TDMDictionary {
  locale: string;
  hero: {
    title: string;
    subtitle: string;
    breadcrumbCurrent: string;
  };
  sections: {
    object: {
      title: string;
      paragraphs: string[];
    };
    definition: {
      title: string;
      paragraphs: string[];
    };
    reservation: {
      title: string;
      items: string[];
    };
    authorized: {
      title: string;
      paragraphs: string[];
    };
    contact: {
      title: string;
      paragraphs: string[];
      email: string;
      address: {
        name: string;
        location: string;
      };
    };
    legal: {
      title: string;
      paragraphs: string[];
    };
    summary: {
      title: string;
      text: string;
    };
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

