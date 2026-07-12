import type { LegalDictionary } from "../types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

const dictionary: LegalDictionary = {
  locale: "nl",
  hero: {
    title: "Het Blueportel",
    highlight: "Vertrouwenscontract",
    subtitle:
      "Blueportel Prestige & Blueportel Horizon — Vakantieverhuur, Le Portel (Opaalkust).",
    breadcrumbCurrent: "Vertrouwenscontract",
  },
  intro: [
    "<strong>Welkom bij Blueportel.</strong> Bedankt dat u voor Blueportel Prestige of Blueportel Horizon hebt gekozen voor uw verblijf aan de Opaalkust.",
    "Wij zijn geen grote hotelketen. Wij zijn een familiebedrijf dat elk van zijn accommodaties persoonlijk voorbereidt, met dezelfde zorg als wanneer we vrienden zouden ontvangen.",
    "Ons doel is eenvoudig: dat u een uitstekende vakantie beleeft en dat de reizigers na u dezelfde ervaring kunnen beleven.",
  ],
  sections: [
    {
      title: "Onze belofte",
      paragraphs: [
        "<strong>Uw accommodatie met zorg voorbereiden.</strong> Elke stacaravan wordt vóór uw aankomst volledig schoongemaakt, gecontroleerd en voorbereid. Wij controleren de goede werking van de apparatuur zodat u ten volle van uw verblijf kunt genieten.",
        "<strong>U in alle vertrouwen ontvangen.</strong> Dankzij ons systeem van zelfstandige aankomst kunt u in alle vrijheid aankomen, zelfs buiten de gebruikelijke uren. De toegangsinformatie wordt u meegedeeld zodra uw dossier compleet is.",
        "<strong>Beschikbaar zijn.</strong> Vóór, tijdens en na uw verblijf blijven wij beschikbaar om uw vragen te beantwoorden of een eventueel probleem snel op te lossen. Een eenvoudig bericht of telefoontje volstaat.",
        "<strong>Transparant zijn.</strong> Na elk vertrek voeren wij een controle uit. Foto's van de algemene staat van de stacaravan worden uitsluitend genomen om zowel vertrekkende als volgende reizigers te beschermen. Deze methode voorkomt misverstanden en zorgt voor een objectieve opvolging van elke verhuring.",
        "<strong>Uw rust respecteren.</strong> Wij brengen geen bezoek tijdens uw verblijf, behalve op uw verzoek of in geval van nood. U geniet volop van uw vakantie, in alle zelfstandigheid.",
      ],
    },
    {
      title: "Uw belofte",
      paragraphs: ["In ruil daarvoor vragen wij u eenvoudigweg om:"],
      items: [
        "voor de stacaravan te zorgen alsof het uw eigen was;",
        "de buren en de rust van de camping te respecteren;",
        "elke storing of elk incident snel te melden;",
        "ons eerlijk te informeren bij accidentele breuk;",
        "de enkele vertrekinstructies die u worden meegedeeld na te leven.",
      ],
      paragraphsAfter: [
        "Wij weten dat een ongeluk kan gebeuren. Wat voor ons telt, is vertrouwen en dialoog.",
      ],
    },
    {
      title: "De waarborgsom",
      paragraphs: [
        "Om zelfstandige aankomsten te vergemakkelijken, wordt vóór uw aankomst een waarborgsom gevraagd via het beveiligde platform <strong>Swikly</strong>.",
        "Deze waarborg is niet bedoeld om reizigers te bestraffen. Ze garandeert eenvoudigweg het respect voor de accommodatie en voorkomt lange formaliteiten bij aankomst en vertrek.",
        "Bij afwezigheid van schade of uitzonderlijke schoonmaak wordt de waarborgsom vrijgegeven na de controle van de accommodatie.",
      ],
    },
    {
      title: "Het vertrek",
      paragraphs: [
        "Vóór uw aankomst ontvangt u een geïllustreerde gids met de enkele schoonmaaktaken die vóór uw vertrek worden gevraagd.",
        "Deze taken zijn eenvoudig en stellen ons team in staat de accommodatie snel voor te bereiden voor de volgende reizigers.",
        "De eindcontrole wordt vervolgens uitgevoerd door een persoon, nooit door een geautomatiseerd systeem.",
      ],
    },
    {
      title: "Onze filosofie",
      paragraphs: [
        "Wij geloven dat een geslaagd verblijf vooral op vertrouwen berust. Daarom geven wij de voorkeur aan eenvoudige, transparant uitgelegde regels boven een lange lijst met verbodsbepalingen.",
        "Wij vertrouwen onze reizigers. In ruil daarvoor vragen wij hen eenvoudigweg de accommodatie te respecteren zoals ze dat thuis zouden doen.",
        "Dit wederzijdse vertrouwen stelt ons in staat om zelfstandige aankomsten, vereenvoudigde vertrekken en een aangenamere ervaring voor iedereen aan te bieden.",
      ],
    },
  ],
  closing: {
    title: "Bedankt",
    paragraphs: [
      "Bedankt om, door uw aandacht en respect voor de accommodatie, bij te dragen aan het maken van Blueportel tot een plek waar iedereen graag terugkomt.",
      "Wij wensen u een uitstekend verblijf met zicht op zee en prachtige herinneringen aan de Opaalkust.",
      "Tot binnenkort bij Blueportel! — Het Blueportel-team",
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
          name: "Startpagina",
          item: `${siteUrl}/nl`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Vertrouwenscontract",
          item: `${siteUrl}/nl/pages/contrat-de-confiance`,
        },
      ],
    },
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Het Blueportel Vertrouwenscontract",
      description:
        "Het vertrouwenscontract van Blueportel: onze beloften aan onze reizigers (zorgvuldige voorbereiding, zelfstandige aankomst, beschikbaarheid, transparantie) en wat wij in ruil daarvoor vragen.",
      url: `${siteUrl}/nl/pages/contrat-de-confiance`,
      inLanguage: "nl-NL",
      isPartOf: {
        "@type": "WebSite",
        name: "Blueportel",
        url: siteUrl,
      },
    },
  },
};

export default dictionary;
