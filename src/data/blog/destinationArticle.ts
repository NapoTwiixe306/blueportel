import type { Locale } from "../../i18n/locales";
import type { ArticleFaqItem, ArticleSection, BlogArticle } from "./types";
import type { Destination } from "./destinations/types";
import { destinations } from "./destinations";

type TemplateVars = {
  name: string;
  driveMinutes: string;
  distanceKm: string;
};

function fill(template: string, vars: TemplateVars): string {
  return template
    .replaceAll("{name}", vars.name)
    .replaceAll("{driveMinutes}", vars.driveMinutes)
    .replaceAll("{distanceKm}", vars.distanceKm);
}

/** Sections communes à toutes les pages destinations, par locale. */
const sharedSections: Record<
  Locale,
  { id: string; title: string; paragraphs: string[]; list?: { items: string[] } }[]
> = {
  fr: [
    {
      id: "camp-de-base",
      title: "Pourquoi dormir à Le Portel pour visiter {name}",
      paragraphs: [
        "Le Portel occupe une position centrale rare sur la Côte d'Opale : accolé à Boulogne-sur-Mer et à Nausicaá, à mi-chemin entre le site des Deux-Caps au nord et Le Touquet au sud. Depuis nos mobil-homes sur la falaise du camping Le Phare d'Opale, {name} se rejoint en **{driveMinutes} minutes de route** — et au retour, vous retrouvez le calme d'un camping fermé, la plage du Portel à quelques centaines de mètres et le coucher de soleil sur la Manche depuis votre terrasse.",
        "Dormir à Le Portel plutôt que sur place, c'est aussi une question de budget et de disponibilité : les hébergements des sites touristiques affichent des prix sensiblement plus élevés et se remplissent tôt en saison, alors qu'ici vous rayonnez vers **toutes** les destinations de la côte sans changer de camp de base. Notre [guide complet de la Côte d'Opale](/blog/que-faire-cote-opale) détaille les itinéraires de 2 à 7 jours au départ du Portel.",
      ],
    },
    {
      id: "mobil-homes",
      title: "Vos mobil-homes vue mer à {driveMinutes} minutes de {name}",
      paragraphs: [
        "Blueportel propose deux mobil-homes résidentiels tout équipés au camping Le Phare d'Opale, au sommet de la falaise de [Le Portel](/blog/location-mobil-home-le-portel), avec vue panoramique sur la Manche :",
      ],
      list: {
        items: [
          "**[Blueportel Prestige](/pages/prestige)** — 6 personnes, 3 chambres, terrasse couverte de 12 m² face à la mer, climatisation, cuisine équipée complète (lave-vaisselle, four, plaques), parking privatif.",
          "**[Blueportel Horizon](/pages/horizon)** — 4 personnes, 2 chambres, l'option cosy pour un couple ou une petite famille, avec le même emplacement face à la mer.",
          "Dans les deux cas : wifi, literie de qualité, jeux de société, et l'accueil personnalisé de Michel et Véronique — les voyageurs Booking notent l'emplacement 9,5/10 et le rapport qualité/prix 9,8/10.",
        ],
      },
    },
    {
      id: "reserver",
      title: "Réserver votre séjour près de {name}",
      paragraphs: [
        "Les [disponibilités sont consultables en ligne](/pages/disponibilites) en temps réel et les [tarifs par saison ici](/pages/tarifs). En réservant en direct, vous évitez les frais de service des plateformes et vous bénéficiez de nos conseils personnalisés avant le séjour : horaires de marée, itinéraires et bonnes adresses autour de {name}. Une question ? La [page contact](/pages/contact) répond en général dans la journée.",
        "Si vous hésitez encore sur la formule d'hébergement, notre [comparatif hôtel / Airbnb / gîte / mobil-home](/blog/alternative-hotel-boulogne-sur-mer) chiffre les options autour de Boulogne-sur-Mer, et notre sélection des [plus belles plages de la Côte d'Opale](/blog/plus-belles-plages-cote-opale) vous aidera à composer le reste du séjour.",
      ],
    },
  ],
  en: [
    {
      id: "base-camp",
      title: "Why stay in Le Portel to visit {name}",
      paragraphs: [
        "Le Portel enjoys a rare central position on the Opal Coast: right next to Boulogne-sur-Mer and the Nausicaá aquarium, halfway between the Two Capes Grand Site to the north and Le Touquet to the south. From our mobile homes on the clifftop of Le Phare d'Opale campsite, {name} is a **{driveMinutes}-minute drive** — and when you return, you get the quiet of a gated campsite, Le Portel beach a few hundred metres away and the sunset over the Channel from your own terrace.",
        "Staying in Le Portel rather than at the destination itself is also a matter of budget and availability: accommodation at the tourist hotspots is noticeably pricier and fills up early in the season, while from here you can reach **every** destination on the coast without moving base. Le Portel is also ideally placed for British visitors: 35 minutes from the Eurotunnel terminal at Coquelles and 40 minutes from the Calais ferries.",
      ],
    },
    {
      id: "mobile-homes",
      title: "Your sea-view mobile homes {driveMinutes} minutes from {name}",
      paragraphs: [
        "Blueportel offers two fully equipped residential mobile homes at Le Phare d'Opale campsite, on top of the [Le Portel](/blog/mobile-home-rental-le-portel) cliff, with panoramic views over the Channel:",
      ],
      list: {
        items: [
          "**[Blueportel Prestige](/pages/prestige)** — sleeps 6, 3 bedrooms, 12 m² covered terrace facing the sea, air conditioning, fully equipped kitchen (dishwasher, oven, hobs), private parking.",
          "**[Blueportel Horizon](/pages/horizon)** — sleeps 4, 2 bedrooms, the cosy option for a couple or small family, with the same seafront location.",
          "Both include wifi, quality bedding, board games and a personal welcome from your hosts Michel and Véronique — Booking guests rate the location 9.5/10 and value for money 9.8/10.",
        ],
      },
    },
    {
      id: "book",
      title: "Book your stay near {name}",
      paragraphs: [
        "[Availability can be checked online](/pages/disponibilites) in real time and [seasonal rates are here](/pages/tarifs). Booking direct means no platform service fees, plus personalised tips before your stay: tide times, itineraries and our favourite spots around {name}. Any questions? The [contact page](/pages/contact) usually gets a reply within the day.",
        "Still weighing up accommodation types? Our [hotel / Airbnb / mobile home comparison](/blog/hotel-alternative-boulogne-sur-mer) puts numbers on the options, and our [complete Opal Coast guide](/blog/things-to-do-opal-coast) covers 25 highlights with ready-made itineraries.",
      ],
    },
  ],
  nl: [
    {
      id: "uitvalsbasis",
      title: "Waarom overnachten in Le Portel om {name} te bezoeken",
      paragraphs: [
        "Le Portel heeft een zeldzaam centrale ligging aan de Opaalkust: direct naast Boulogne-sur-Mer en het aquarium Nausicaá, halverwege tussen het Grand Site van de Twee Kapen in het noorden en Le Touquet in het zuiden. Vanuit onze stacaravans op de klif van camping Le Phare d'Opale bereikt u {name} in **{driveMinutes} minuten rijden** — en bij terugkomst geniet u van de rust van een afgesloten camping, het strand van Le Portel op een paar honderd meter en de zonsondergang boven het Kanaal vanaf uw eigen terras.",
        "Overnachten in Le Portel in plaats van op de bestemming zelf scheelt bovendien in budget en beschikbaarheid: accommodaties op de toeristische toplocaties zijn duidelijk duurder en zitten in het seizoen snel vol, terwijl u van hieruit **elke** bestemming aan de kust bereikt zonder van uitvalsbasis te wisselen. Vanuit België is Le Portel bovendien snel bereikbaar: ongeveer 1,5 uur rijden vanaf Gent en 2 uur vanaf Antwerpen via de A16.",
      ],
    },
    {
      id: "stacaravans",
      title: "Uw stacaravans met zeezicht op {driveMinutes} minuten van {name}",
      paragraphs: [
        "Blueportel biedt twee volledig uitgeruste stacaravans op camping Le Phare d'Opale, boven op de klif van [Le Portel](/blog/stacaravan-huren-le-portel), met panoramisch uitzicht over het Kanaal:",
      ],
      list: {
        items: [
          "**[Blueportel Prestige](/pages/prestige)** — 6 personen, 3 slaapkamers, overdekt terras van 12 m² aan zee, airconditioning, volledig uitgeruste keuken (vaatwasser, oven, kookplaat), eigen parkeerplaats.",
          "**[Blueportel Horizon](/pages/horizon)** — 4 personen, 2 slaapkamers, de knusse optie voor een koppel of klein gezin, met dezelfde ligging aan zee.",
          "In beide gevallen: wifi, kwaliteitsbedden, gezelschapsspellen en een persoonlijk onthaal door Michel en Véronique — Booking-gasten geven de locatie een 9,5/10 en de prijs-kwaliteit een 9,8/10.",
        ],
      },
    },
    {
      id: "reserveren",
      title: "Reserveer uw verblijf bij {name}",
      paragraphs: [
        "De [beschikbaarheid is online te bekijken](/pages/disponibilites) in realtime en de [seizoenstarieven vindt u hier](/pages/tarifs). Wie rechtstreeks boekt, betaalt geen platformkosten en krijgt persoonlijke tips vóór het verblijf: getijdentabellen, routes en onze favoriete adresjes rond {name}. Vragen? Via de [contactpagina](/pages/contact) krijgt u meestal binnen een dag antwoord.",
        "Twijfelt u nog over het type accommodatie? Onze [vergelijking hotel / Airbnb / stacaravan](/blog/alternatief-hotel-boulogne-sur-mer) zet de opties op een rij, en onze [complete gids van de Opaalkust](/blog/wat-te-doen-opaalkust) behandelt 25 toppers met kant-en-klare routes.",
      ],
    },
  ],
};

/** FAQ communes, par locale. */
const sharedFaq: Record<Locale, ArticleFaqItem[]> = {
  fr: [
    {
      question: "À quelle distance de {name} se trouvent les mobil-homes Blueportel ?",
      answer:
        "À {distanceKm} km environ, soit {driveMinutes} minutes de route depuis le camping Le Phare d'Opale à Le Portel. La position centrale de Le Portel permet de rayonner le même jour vers {name}, Nausicaá (10 minutes) et les autres sites de la Côte d'Opale.",
    },
    {
      question: "Peut-on louer pour un week-end seulement ?",
      answer:
        "Oui, les mobil-homes Blueportel se réservent dès 2 nuits, toute l'année — contrairement à de nombreux gîtes loués à la semaine. Les disponibilités sont consultables en ligne en temps réel, et la réservation en direct évite les frais de plateforme.",
    },
  ],
  en: [
    {
      question: "How far is {name} from the Blueportel mobile homes?",
      answer:
        "About {distanceKm} km — a {driveMinutes}-minute drive from Le Phare d'Opale campsite in Le Portel. Le Portel's central position lets you combine {name}, the Nausicaá aquarium (10 minutes) and the rest of the Opal Coast in the same day.",
    },
    {
      question: "Can I book for just a weekend?",
      answer:
        "Yes, Blueportel mobile homes can be booked from 2 nights, all year round. Availability is shown online in real time, and booking direct avoids platform service fees.",
    },
  ],
  nl: [
    {
      question: "Hoe ver ligt {name} van de Blueportel-stacaravans?",
      answer:
        "Ongeveer {distanceKm} km — {driveMinutes} minuten rijden vanaf camping Le Phare d'Opale in Le Portel. Dankzij de centrale ligging combineert u {name}, het aquarium Nausicaá (10 minuten) en de rest van de Opaalkust op dezelfde dag.",
    },
    {
      question: "Kan ik ook voor één weekend boeken?",
      answer:
        "Ja, de stacaravans van Blueportel zijn het hele jaar door te boeken vanaf 2 nachten. De beschikbaarheid is online in realtime te raadplegen en rechtstreeks boeken vermijdt platformkosten.",
    },
  ],
};

const pillarRelated: Record<Locale, string[]> = {
  fr: ["location-mobil-home-le-portel", "que-faire-cote-opale", "plus-belles-plages-cote-opale"],
  en: ["mobile-home-rental-le-portel", "things-to-do-opal-coast", "best-beaches-opal-coast"],
  nl: ["stacaravan-huren-le-portel", "wat-te-doen-opaalkust", "mooiste-stranden-opaalkust"],
};

const publishedDate = "2026-06-11";

export function buildDestinationArticle(destination: Destination, locale: Locale): BlogArticle {
  const content = destination.content[locale];
  const vars: TemplateVars = {
    name: content.name,
    driveMinutes: String(destination.driveMinutes),
    distanceKm: String(destination.distanceKm),
  };

  const templateSections: ArticleSection[] = sharedSections[locale].map((section) => ({
    id: section.id,
    title: fill(section.title, vars),
    paragraphs: section.paragraphs.map((paragraph) => fill(paragraph, vars)),
    list: section.list
      ? { items: section.list.items.map((item) => fill(item, vars)) }
      : undefined,
  }));

  const templateFaq: ArticleFaqItem[] = sharedFaq[locale].map((item) => ({
    question: fill(item.question, vars),
    answer: fill(item.answer, vars),
  }));

  const relatedDestinationSlugs = destination.relatedKeys
    .map((key) => destinations.find((other) => other.key === key))
    .filter((other): other is Destination => Boolean(other))
    .map((other) => other.content[locale].slug);

  return {
    slug: content.slug,
    translationKey: `destination-${destination.key}`,
    locale,
    category: "destination",
    metaTitle: content.metaTitle,
    metaDescription: content.metaDescription,
    keywords: content.keywords,
    title: content.title,
    excerpt: content.excerpt,
    heroImage: destination.heroImage,
    datePublished: publishedDate,
    dateModified: publishedDate,
    readingTimeMinutes: 11,
    intro: content.intro,
    sections: [...content.sections, ...templateSections],
    faq: [...content.faq, ...templateFaq],
    relatedSlugs: [...relatedDestinationSlugs, ...pillarRelated[locale]],
  };
}

export function buildDestinationArticles(locale: Locale): BlogArticle[] {
  return destinations.map((destination) => buildDestinationArticle(destination, locale));
}
