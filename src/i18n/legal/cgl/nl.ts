import type { LegalDictionary } from "../types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

const dictionary: LegalDictionary = {
  locale: "nl",
  hero: {
    title: "Algemene",
    highlight: "Huurvoorwaarden",
    subtitle:
      "Blueportel Prestige & Blueportel Horizon — Vakantieverhuur, Le Portel (Opaalkust). Laatst bijgewerkt: juli 2026.",
    breadcrumbCurrent: "Algemene huurvoorwaarden",
  },
  sections: [
    {
      title: "1. Inleiding",
      paragraphs: [
        "Deze Algemene Huurvoorwaarden hebben tot doel de rechten en plichten van de eigenaar en de huurder vast te leggen in het kader van de seizoensverhuur van de accommodaties <strong>Blueportel Prestige</strong> en <strong>Blueportel Horizon</strong>, gelegen op Camping Le Phare d'Opale in Le Portel (Pas-de-Calais).",
        "Elke reservering houdt de volledige aanvaarding van deze voorwaarden in.",
        "Ons doel is eenvoudig: elke reiziger een perfect schone, comfortabele accommodatie bieden die overeenkomt met de beschrijving, met een transparante en eerlijke werkwijze voor iedereen.",
      ],
    },
    {
      title: "2. Reservering",
      paragraphs: ["De reservering wordt definitief na:"],
      items: [
        "de aanvaarding van de reservering door Blueportel;",
        "de gevraagde betaling volgens de meegedeelde modaliteiten;",
        "de aanvaarding van deze Algemene Huurvoorwaarden.",
      ],
      paragraphsAfter: [
        "Vervolgens wordt een bevestiging per e-mail naar de huurder gestuurd.",
      ],
    },
    {
      title: "3. Bewoning van de accommodatie",
      paragraphs: [
        "De accommodatie is uitsluitend gereserveerd voor de personen die bij de reservering zijn vermeld.",
        "Het maximale aantal toegestane personen mag nooit de aangegeven capaciteit van de accommodatie overschrijden.",
        "Elke extra niet-aangemelde persoon kan leiden tot weigering van toegang tot de accommodatie of tot beëindiging van het verblijf zonder terugbetaling.",
        "Minderjarigen blijven volledig onder de verantwoordelijkheid van hun begeleiders.",
      ],
    },
    {
      title: "4. Aankomst",
      paragraphs: [
        "Aankomsten vinden doorgaans plaats vanaf het tijdstip dat in de reserveringsbevestiging is vermeld.",
        "Blueportel geeft de voorkeur aan een systeem van zelfstandige aankomst via een beveiligde sleutelkluis, wat reizigers meer flexibiliteit biedt.",
        "De code van de sleutelkluis, de digitale welkomstgids en de praktische informatie worden pas verstrekt zodra alle administratieve formaliteiten zijn afgerond.",
      ],
    },
    {
      title: "5. Waarborgsom via Swikly",
      paragraphs: [
        "Om een eenvoudige, snelle en veilige zelfstandige aankomst te garanderen, gebruikt Blueportel het beveiligde platform <strong>Swikly</strong> voor het beheer van de waarborgsom.",
        "De waarborgsom is verplicht voor elke rechtstreekse reservering. De Swikly-link wordt vóór aankomst verzonden.",
        "Zolang de waarborgsom niet is gevalideerd op het Swikly-platform:",
      ],
      items: [
        "wordt de code van de sleutelkluis niet meegedeeld;",
        "wordt de welkomstgids niet verzonden;",
        "wordt de ontvangsttoestemming niet doorgegeven aan onze ontvangstpersoon.",
      ],
      paragraphsAfter: [
        "Deze procedure geldt voor alle reizigers, zonder uitzondering.",
        "De waarborgsom is geen extra betaling. Zij is bedoeld om, indien nodig, het volgende te dekken: schade; uitzonderlijke schoonmaak die noodzakelijk is door de staat van de accommodatie; ontbrekende of beschadigde uitrusting; duidelijke niet-naleving van deze voorwaarden.",
        "Elke eventuele inhouding wordt gerechtvaardigd.",
      ],
    },
    {
      title: "6. Teruggave van de waarborgsom",
      paragraphs: [
        "Na elk verblijf wordt een volledige controle van de accommodatie uitgevoerd. Er zijn twee mogelijkheden:",
      ],
      items: [
        "een controle in aanwezigheid van de huurder bij vertrek, indien mogelijk;",
        "een controle na vertrek door onze ontvangstpersoon tussen twee verhuringen in.",
      ],
      paragraphsAfter: [
        "Bij afwezigheid van onregelmatigheden wordt de waarborgsom vrijgegeven volgens de procedures van Swikly.",
      ],
    },
    {
      title: "7. Eindschoonmaak van het verblijf",
      paragraphs: [
        "Elke reiziger ontvangt vóór aankomst een geïllustreerd document met de enkele schoonmaaktaken die vóór vertrek worden gevraagd.",
        "De accommodatie moet met name in een normale staat van netheid worden achtergelaten. Er wordt onder meer gevraagd om:",
      ],
      items: [
        "de vaat schoon en opgeruimd achter te laten;",
        "de vuilnisbakken te legen op de door de camping voorziene inzamelpunten;",
        "de werkbladen en gebruikte apparatuur schoon te maken;",
        "de koelkast leeg achter te laten;",
        "het meubilair in de oorspronkelijke opstelling terug te plaatsen;",
        "elke breuk of onregelmatigheid te melden.",
      ],
      paragraphsAfter: [
        "De schoonmaak tussen twee verhuringen wordt verzorgd door Blueportel.",
        "Een uitzonderlijke schoonmaak die noodzakelijk is doordat de accommodatie in een duidelijk abnormale staat is achtergelaten, kan daarentegen na rechtvaardiging worden gefactureerd.",
      ],
    },
    {
      title: "8. Controle van de accommodatie",
      paragraphs: [
        "Na elk vertrek voert Blueportel een volledige controle van de accommodatie uit.",
        "Er wordt een fotografische vastlegging gemaakt om een objectief bewijs van de staat van de accommodatie tussen twee verhuringen te bewaren. Deze procedure beschermt zowel de vertrekkende als de aankomende huurder.",
        "Deze foto's mogen uitsluitend worden gebruikt bij een geschil over de staat van de accommodatie of eventuele schade.",
      ],
    },
    {
      title: "9. Uitrusting",
      paragraphs: [
        "De huurder verbindt zich ertoe de accommodatie en de uitrusting als een goede huisvader te gebruiken.",
        "Elke bij aankomst vastgestelde onregelmatigheid moet zo snel mogelijk worden gemeld, zodat er rekening mee kan worden gehouden.",
        "Elke breuk of beschadiging tijdens het verblijf moet spontaan worden gemeld.",
      ],
    },
    {
      title: "10. Huisdieren",
      paragraphs: [
        "Huisdieren zijn alleen toegestaan wanneer ze bij de reservering zijn aangemeld en door Blueportel zijn geaccepteerd.",
        "De eigenaar van het dier blijft tijdens het hele verblijf volledig verantwoordelijk voor het dier.",
        "Om veiligheidsredenen en uit respect voor de accommodatie:",
      ],
      items: [
        "mogen dieren nooit alleen in de stacaravan worden achtergelaten;",
        "moeten ze aangelijnd zijn in de zones waar het reglement van de camping dit vereist;",
        "moeten eventuele uitwerpselen worden opgeruimd.",
      ],
      paragraphsAfter: [
        "Eventuele schade veroorzaakt door een dier blijft ten laste van de huurder.",
      ],
    },
    {
      title: "11. Respect voor de buren",
      paragraphs: [
        "Blueportel is een rustige vakantieplek.",
        "Reizigers verbinden zich ertoe de buren, het interne reglement van de camping en de rusttijden te respecteren.",
        "Elke ernstige overlast kan leiden tot vroegtijdige beëindiging van het verblijf zonder schadevergoeding.",
      ],
    },
    {
      title: "12. Verbodsbepalingen",
      paragraphs: ["Het is met name verboden om:"],
      items: [
        "binnen in de stacaravan te roken;",
        "niet-toegestane feesten of bijeenkomsten te organiseren;",
        "de accommodatie onder te verhuren;",
        "gevaarlijke of voor de installaties ongeschikte apparaten te gebruiken;",
        "het meubilair langdurig naar buiten te verplaatsen.",
      ],
    },
    {
      title: "13. Vertrek",
      paragraphs: [
        "De accommodatie moet op het afgesproken tijdstip worden vrijgemaakt.",
        "De sleutels moeten worden teruggegeven volgens de instructies die vóór het vertrek worden meegedeeld.",
        "Elk niet-toegestaan laat vertrek kan kosten met zich meebrengen wanneer dit de voorbereiding van de accommodatie voor de volgende reizigers vertraagt.",
      ],
    },
    {
      title: "14. Aansprakelijkheid van de huurder",
      paragraphs: ["De huurder is verantwoordelijk voor:"],
      items: [
        "de personen die aan het verblijf deelnemen;",
        "de schade veroorzaakt tijdens de huurperiode;",
        "de ter beschikking gestelde uitrusting.",
      ],
      paragraphsAfter: [
        "Het wordt aanbevolen een aansprakelijkheidsverzekering te hebben die seizoensverhuur dekt.",
      ],
    },
    {
      title: "15. Aansprakelijkheid van Blueportel",
      paragraphs: [
        "Blueportel verbindt zich ertoe een accommodatie ter beschikking te stellen die overeenkomt met de beschrijving, schoon en goed onderhouden.",
        "Blueportel kan niet aansprakelijk worden gesteld in geval van:",
      ],
      items: [
        "onderbreking van diensten buiten haar wil om (water, elektriciteit, internet, telefoonnetwerk, voorzieningen van de camping, enz.);",
        "uitzonderlijke weersomstandigheden;",
        "overmacht in de zin van het Franse recht.",
      ],
    },
    {
      title: "16. Gegevensbescherming",
      paragraphs: [
        "De bij de reservering verzamelde gegevens worden uitsluitend gebruikt voor het beheer van het verblijf, de facturatie, de naleving van wettelijke verplichtingen en de communicatie met de huurder.",
        "Ze worden nooit doorverkocht aan derden.",
        "De gegevens worden verwerkt in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG).",
        "De huurder kan zijn recht op inzage, rectificatie of verwijdering uitoefenen door contact op te nemen met Blueportel.",
      ],
    },
    {
      title: "17. Toepasselijk recht",
      paragraphs: [
        "Deze Algemene Voorwaarden worden beheerst door het Franse recht.",
        "In geval van een geschil zullen de partijen eerst een minnelijke oplossing zoeken. Bij gebrek aan overeenstemming zijn uitsluitend de territoriaal bevoegde Franse rechtbanken bevoegd.",
      ],
    },
    {
      title: "18. Contact",
      paragraphs: [
        "<strong>Blueportel</strong> — Le Portel, Opaalkust",
        '📧 <a href="mailto:info@blueportel.fr" class="text-blue-500 hover:underline">info@blueportel.fr</a>',
        '🌐 <a href="https://blueportel.fr" class="text-blue-500 hover:underline">https://blueportel.fr</a>',
      ],
    },
  ],
  closing: {
    title: "Bedankt voor uw vertrouwen",
    paragraphs: [
      "Wij danken u voor uw vertrouwen en wensen u een uitstekend verblijf bij Blueportel.",
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
          name: "Algemene huurvoorwaarden",
          item: `${siteUrl}/nl/pages/conditions-generales-location`,
        },
      ],
    },
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Algemene Huurvoorwaarden | Blueportel",
      description:
        "Algemene huurvoorwaarden van de accommodaties Blueportel Prestige en Blueportel Horizon in Le Portel (Opaalkust): reservering, Swikly-waarborgsom, zelfstandige aankomst, schoonmaak en aansprakelijkheid.",
      url: `${siteUrl}/nl/pages/conditions-generales-location`,
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
