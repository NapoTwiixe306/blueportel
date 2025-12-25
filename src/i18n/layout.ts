import { locales, type Locale } from "./locales";

export type FooterDictionary = {
  contactTitle: string;
  addressTitle: string;
  addressLines: string[];
  ressourceTitle: string;
  ressourceLines: string;
  phonePrimaryLabel: string;
  phoneSecondaryLabel: string;
  emailLabel: string;
  quickLinks: { href: string; label: string }[];
  facebookLabel: string;
  rights: string;
};

export type LayoutDictionary = {
  footer: FooterDictionary;
};

const dictionaries: Record<Locale, LayoutDictionary> = {
  fr: {
    footer: {
      contactTitle: "Contact",
      addressTitle: "Adresse",
      ressourceTitle: "Ressources",
      ressourceLines: "Annuaire Google",
      addressLines: ["Rue de la Mer 2", "Le Portel, France 62480"],
      phonePrimaryLabel: "+32 488 83 20 91",
      phoneSecondaryLabel: "+33 745 32 48 36",
      emailLabel: "info@blueportel.fr",
      quickLinks: [
        { href: "/location-mobil-home-vue-mer-le-portel", label: "Réserver (vue mer Le Portel)" },
        { href: "/contact", label: "Contact" },
      ],
      facebookLabel: "Suivez-nous sur Facebook",
      rights: "© {year} Blueportel. Tous droits réservés.",
    },
  },
  en: {
    footer: {
      contactTitle: "Contact",
      addressTitle: "Address",
      ressourceTitle: "Resources",
      ressourceLines: "Google Annuaire",
      addressLines: ["Rue de la Mer 2", "Le Portel, France 62480"],
      phonePrimaryLabel: "+32 488 83 20 91",
      phoneSecondaryLabel: "+33 745 32 48 36",
      emailLabel: "info@blueportel.fr",
      quickLinks: [
        { href: "/mobile-home-sea-view-le-portel", label: "Book (sea view Le Portel)" },
        { href: "/contact", label: "Contact" },
      ],
      facebookLabel: "Follow us on Facebook",
      rights: "© {year} Blueportel. All rights reserved.",
    },
  },
};

export function getLayoutDictionary(locale: Locale): LayoutDictionary {
  const safeLocale = locales.includes(locale) ? locale : "fr";
  const base = dictionaries[safeLocale];

  return {
    footer: {
      ...base.footer,
      quickLinks: base.footer.quickLinks,
    },
  };
}

