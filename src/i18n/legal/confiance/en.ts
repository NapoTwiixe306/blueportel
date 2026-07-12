import type { LegalDictionary } from "../types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

const dictionary: LegalDictionary = {
  locale: "en",
  hero: {
    title: "The Blueportel",
    highlight: "Trust Charter",
    subtitle:
      "Blueportel Prestige & Blueportel Horizon — Holiday rentals, Le Portel (Opal Coast).",
    breadcrumbCurrent: "Trust charter",
  },
  intro: [
    "<strong>Welcome to Blueportel.</strong> Thank you for choosing Blueportel Prestige or Blueportel Horizon for your stay on the Opal Coast.",
    "We are not a big hotel chain. We are a family business that personally prepares each of its accommodations with the same care as if we were welcoming friends.",
    "Our goal is simple: for you to have an excellent holiday, and for the travellers who come after you to enjoy the same experience.",
  ],
  sections: [
    {
      title: "Our commitment",
      paragraphs: [
        "<strong>Preparing your accommodation with care.</strong> Each mobile home is fully cleaned, checked and prepared before your arrival. We verify that all the equipment works properly so that you can fully enjoy your stay.",
        "<strong>Welcoming you with complete trust.</strong> Thanks to our self check-in system, you can arrive freely, even outside the usual hours. The access information is sent to you as soon as your file is complete.",
        "<strong>Being available.</strong> Before, during and after your stay, we remain available to answer your questions or quickly solve any problem. A simple message or a call is enough.",
        "<strong>Playing it transparent.</strong> We carry out an inspection after each departure. Photographs of the general state of the mobile home are taken solely to protect both departing travellers and those who follow. This method avoids misunderstandings and ensures an objective follow-up of each rental.",
        "<strong>Respecting your peace and quiet.</strong> We do not carry out any visits during your stay, except at your request or in case of emergency. You fully enjoy your holiday in complete autonomy.",
      ],
    },
    {
      title: "Your commitment",
      paragraphs: ["In return, we simply ask you to:"],
      items: [
        "take care of the mobile home as if it were your own;",
        "respect the neighbourhood and the calm of the campsite;",
        "quickly report any breakdown or incident;",
        "inform us honestly in the event of accidental breakage;",
        "follow the few departure instructions that will be communicated to you.",
      ],
      paragraphsAfter: [
        "We know that accidents can happen. What matters to us is trust and dialogue.",
      ],
    },
    {
      title: "The security deposit",
      paragraphs: [
        "To facilitate self check-in, a security deposit is requested before your arrival via the secure platform <strong>Swikly</strong>.",
        "This deposit is not intended to penalise travellers. It simply guarantees respect for the premises and avoids lengthy formalities on arrival and departure.",
        "In the absence of damage or exceptional cleaning, the security deposit is released after the inspection of the accommodation.",
      ],
    },
    {
      title: "Departures",
      paragraphs: [
        "Before your arrival, you will receive an illustrated guide covering the few cleaning tasks requested before your departure.",
        "These tasks are simple and allow our team to quickly prepare the accommodation for the following travellers.",
        "The final inspection is then carried out by a person, never by an automated system.",
      ],
    },
    {
      title: "Our philosophy",
      paragraphs: [
        "We believe that a successful stay is above all built on trust. That is why we favour simple rules, explained with transparency, rather than a long list of prohibitions.",
        "We trust our travellers. In return, we simply ask them to respect the premises as they would their own home.",
        "This mutual trust allows us to offer self check-in, simplified departures and a more pleasant experience for everyone.",
      ],
    },
  ],
  closing: {
    title: "Thank you",
    paragraphs: [
      "Thank you for contributing, through your care and respect for the premises, to making Blueportel a place everyone loves to come back to.",
      "We wish you an excellent stay facing the sea and wonderful memories on the Opal Coast.",
      "See you soon at Blueportel! — The Blueportel team",
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
          name: "Home",
          item: `${siteUrl}/en`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Trust charter",
          item: `${siteUrl}/en/pages/contrat-de-confiance`,
        },
      ],
    },
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "The Blueportel Trust Charter",
      description:
        "The Blueportel trust charter: our commitments to our travellers (careful preparation, self check-in, availability, transparency) and what we ask of them in return.",
      url: `${siteUrl}/en/pages/contrat-de-confiance`,
      inLanguage: "en-GB",
      isPartOf: {
        "@type": "WebSite",
        name: "Blueportel",
        url: siteUrl,
      },
    },
  },
};

export default dictionary;
