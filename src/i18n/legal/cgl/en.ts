import type { LegalDictionary } from "../types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

const dictionary: LegalDictionary = {
  locale: "en",
  hero: {
    title: "General Rental",
    highlight: "Terms & Conditions",
    subtitle:
      "Blueportel Prestige & Blueportel Horizon — Holiday rentals, Le Portel (Opal Coast). Last updated: July 2026.",
    breadcrumbCurrent: "General rental conditions",
  },
  sections: [
    {
      title: "1. Preamble",
      paragraphs: [
        "These General Rental Terms and Conditions define the rights and obligations of the owner and the guest in the context of the seasonal rental of the <strong>Blueportel Prestige</strong> and <strong>Blueportel Horizon</strong> accommodations, located at Camping Le Phare d'Opale in Le Portel (Pas-de-Calais).",
        "Any booking implies full and complete acceptance of these conditions.",
        "Our goal is simple: to offer every traveller a perfectly clean, comfortable accommodation that matches its description, while guaranteeing transparent and fair operation for everyone.",
      ],
    },
    {
      title: "2. Booking",
      paragraphs: ["The booking becomes final after:"],
      items: [
        "acceptance of the booking by Blueportel;",
        "payment as requested according to the communicated terms;",
        "acceptance of these General Rental Terms and Conditions.",
      ],
      paragraphsAfter: ["A confirmation is then sent to the guest by email."],
    },
    {
      title: "3. Occupancy of the accommodation",
      paragraphs: [
        "The accommodation is reserved exclusively for the persons mentioned at the time of booking.",
        "The maximum number of persons allowed may never exceed the capacity indicated for the accommodation.",
        "Any additional undeclared person may result in refusal of access to the accommodation or interruption of the stay without refund.",
        "Minors remain under the full responsibility of the adults accompanying them.",
      ],
    },
    {
      title: "4. Arrival",
      paragraphs: [
        "Arrivals generally take place from the time indicated in the booking confirmation.",
        "Blueportel favours a self check-in system using a secure key box, offering travellers greater flexibility.",
        "The key box code, the digital welcome guide and practical information are transmitted only once all administrative formalities have been completed.",
      ],
    },
    {
      title: "5. Security deposit via Swikly",
      paragraphs: [
        "To guarantee a simple, fast and secure self check-in process, Blueportel uses the secure platform <strong>Swikly</strong> to manage the security deposit.",
        "The security deposit is mandatory for any booking made directly. The Swikly link is sent before arrival.",
        "As long as the security deposit has not been validated on the Swikly platform:",
      ],
      items: [
        "the key box code is not communicated;",
        "the welcome guide is not sent;",
        "the check-in authorisation is not transmitted to our welcome person.",
      ],
      paragraphsAfter: [
        "This procedure applies to all travellers without exception.",
        "The security deposit does not constitute an additional payment. Where applicable, it is intended to cover: damage; exceptional cleaning made necessary by the state of the accommodation; missing or damaged equipment; manifest non-compliance with these conditions.",
        "Any deduction will be justified.",
      ],
    },
    {
      title: "6. Return of the security deposit",
      paragraphs: [
        "After each stay, a complete inspection of the accommodation is carried out. Two situations are possible:",
      ],
      items: [
        "an inspection carried out in the presence of the guest upon departure, when possible;",
        "an inspection carried out after departure by our welcome person between two rentals.",
      ],
      paragraphsAfter: [
        "In the absence of any anomaly, the security deposit is released in accordance with Swikly's procedures.",
      ],
    },
    {
      title: "7. End-of-stay cleaning",
      paragraphs: [
        "Before arrival, each traveller receives an illustrated document presenting the few cleaning tasks requested before departure.",
        "The accommodation must in particular be returned in a normal state of cleanliness. Guests are asked in particular to:",
      ],
      items: [
        "leave the dishes clean and put away;",
        "empty the bins at the collection points provided by the campsite;",
        "clean the worktops and the equipment used;",
        "leave the refrigerator emptied;",
        "return the furniture to its original arrangement;",
        "report any breakage or anomaly.",
      ],
      paragraphsAfter: [
        "The full cleaning between two rentals is carried out by Blueportel.",
        "However, exceptional cleaning made necessary by an accommodation left in a manifestly abnormal state may be invoiced, with justification.",
      ],
    },
    {
      title: "8. Inspection of the accommodation",
      paragraphs: [
        "After each departure, Blueportel carries out a complete inspection of the accommodation.",
        "A photographic record is taken to keep objective proof of the state of the accommodation between two rentals. This procedure protects both the departing guest and the arriving guest.",
        "These photographs may only be used in the event of a dispute relating to the state of the accommodation or any damage.",
      ],
    },
    {
      title: "9. Equipment",
      paragraphs: [
        "The guest undertakes to use the accommodation and its equipment with due care.",
        "Any anomaly noticed on arrival must be reported as soon as possible so that it can be taken into account.",
        "Any breakage or damage occurring during the stay must be reported spontaneously.",
      ],
    },
    {
      title: "10. Pets",
      paragraphs: [
        "Pets are only admitted when they have been declared at the time of booking and accepted by Blueportel.",
        "The owner of the animal remains fully responsible for it throughout the stay.",
        "For safety reasons and out of respect for the accommodation:",
      ],
      items: [
        "animals must never be left alone in the mobile home;",
        "they must be kept on a leash in areas where the campsite rules require it;",
        "any droppings must be picked up.",
      ],
      paragraphsAfter: [
        "Any damage caused by an animal remains the responsibility of the guest.",
      ],
    },
    {
      title: "11. Respect for the neighbourhood",
      paragraphs: [
        "Blueportel is a peaceful holiday location.",
        "Travellers undertake to respect the neighbourhood, the campsite's internal rules and the quiet hours.",
        "Any significant nuisance may result in the early termination of the stay without compensation.",
      ],
    },
    {
      title: "12. Prohibitions",
      paragraphs: ["It is in particular forbidden to:"],
      items: [
        "smoke inside the mobile home;",
        "organise unauthorised parties or gatherings;",
        "sublet the accommodation;",
        "use dangerous appliances or appliances unsuited to the installations;",
        "permanently move furniture outside.",
      ],
    },
    {
      title: "13. Departure",
      paragraphs: [
        "The accommodation must be vacated at the agreed time.",
        "The keys must be returned in accordance with the instructions communicated before departure.",
        "Any unauthorised late departure may result in charges when it delays the preparation of the accommodation for the following travellers.",
      ],
    },
    {
      title: "14. Guest liability",
      paragraphs: ["The guest is responsible for:"],
      items: [
        "the persons taking part in the stay;",
        "damage caused during the rental;",
        "the equipment made available to them.",
      ],
      paragraphsAfter: [
        "It is recommended to have civil liability insurance covering seasonal rentals.",
      ],
    },
    {
      title: "15. Blueportel's liability",
      paragraphs: [
        "Blueportel undertakes to provide accommodation that matches its description, clean and well maintained.",
        "Blueportel cannot be held liable in the event of:",
      ],
      items: [
        "interruption of services beyond its control (water, electricity, internet, telephone network, campsite facilities, etc.);",
        "exceptional weather events;",
        "force majeure within the meaning of French law.",
      ],
    },
    {
      title: "16. Data protection",
      paragraphs: [
        "The information collected during the booking is used solely for the management of the stay, invoicing, compliance with legal obligations and communication with the guest.",
        "It is never sold to third parties.",
        "Data is processed in accordance with the General Data Protection Regulation (GDPR).",
        "The guest may exercise their rights of access, rectification or deletion by contacting Blueportel.",
      ],
    },
    {
      title: "17. Applicable law",
      paragraphs: [
        "These General Terms and Conditions are governed by French law.",
        "In the event of a dispute, the parties will first seek an amicable solution. Failing agreement, the territorially competent French courts will have sole jurisdiction.",
      ],
    },
    {
      title: "18. Contact",
      paragraphs: [
        "<strong>Blueportel</strong> — Le Portel, Opal Coast",
        '📧 <a href="mailto:info@blueportel.fr" class="text-blue-500 hover:underline">info@blueportel.fr</a>',
        '🌐 <a href="https://blueportel.fr" class="text-blue-500 hover:underline">https://blueportel.fr</a>',
      ],
    },
  ],
  closing: {
    title: "Thank you for your trust",
    paragraphs: [
      "We thank you for your trust and wish you an excellent stay at Blueportel.",
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
          name: "General rental conditions",
          item: `${siteUrl}/en/pages/conditions-generales-location`,
        },
      ],
    },
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "General Rental Terms & Conditions | Blueportel",
      description:
        "General rental terms and conditions for the Blueportel Prestige and Blueportel Horizon accommodations in Le Portel (Opal Coast): booking, Swikly security deposit, self check-in, cleaning and liability.",
      url: `${siteUrl}/en/pages/conditions-generales-location`,
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
