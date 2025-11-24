import { locales, type Locale } from "./locales";

export type FooterDictionary = {
  contactTitle: string;
  addressTitle: string;
  addressLines: string[];
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
      addressLines: ["Rue de la Mer 2", "Le Portel, France 62480"],
      phonePrimaryLabel: "+32 488 83 20 91",
      phoneSecondaryLabel: "+33 745 32 48 36",
      emailLabel: "info@blueportel.fr",
      quickLinks: [
        { href: "/pages/information-marvilla-tohapi", label: "Information Marvilla Tohapi" },
        { href: "/pages/politique-tdm", label: "Politique TDM" },
        { href: "/pages/contact", label: "Contact" },
      ],
      facebookLabel: "Suivez-nous sur Facebook",
      rights: "© {year} Blueportel. Tous droits réservés.",
    },
  },
  en: {
    footer: {
      contactTitle: "Contact",
      addressTitle: "Address",
      addressLines: ["Rue de la Mer 2", "Le Portel, France 62480"],
      phonePrimaryLabel: "+32 488 83 20 91",
      phoneSecondaryLabel: "+33 745 32 48 36",
      emailLabel: "info@blueportel.fr",
      quickLinks: [
        { href: "/pages/information-marvilla-tohapi", label: "Marvilla Tohapi Info" },
        { href: "/pages/politique-tdm", label: "TDM Policy" },
        { href: "/pages/contact", label: "Contact" },
      ],
      facebookLabel: "Follow us on Facebook",
      rights: "© {year} Blueportel. All rights reserved.",
    },
  },
  nl: {
    footer: {
      contactTitle: "Contact",
      addressTitle: "Adres",
      addressLines: ["Rue de la Mer 2", "Le Portel, Frankrijk 62480"],
      phonePrimaryLabel: "+32 488 83 20 91",
      phoneSecondaryLabel: "+33 745 32 48 36",
      emailLabel: "info@blueportel.fr",
      quickLinks: [
        { href: "/pages/information-marvilla-tohapi", label: "Marvilla Tohapi info" },
        { href: "/pages/politique-tdm", label: "TDM-beleid" },
        { href: "/pages/contact", label: "Contact" },
      ],
      facebookLabel: "Volg ons op Facebook",
      rights: "© {year} Blueportel. Alle rechten voorbehouden.",
    },
  },
};

export function getLayoutDictionary(locale: Locale): LayoutDictionary {
  const safeLocale = locales.includes(locale) ? locale : "fr";
  const base = dictionaries[safeLocale];

  return {
    footer: {
      ...base.footer,
      quickLinks: base.footer.quickLinks.map((link) => {
        if (link.href.startsWith("http")) {
          return link;
        }
        return {
          ...link,
          href: `/${safeLocale}${link.href}`,
        };
      }),
    },
  };
}

