import type { NextConfig } from "next";

type Redirect = { source: string; destination: string; permanent: boolean };

const r = (source: string, destination: string): Redirect => ({
  source,
  destination,
  permanent: true,
});

const liveLocales = ["fr", "en", "nl"] as const;

/** Pages à segment unique servies sous /{locale}/pages/{slug}. */
const pageSlugs = [
  "avis",
  "contact",
  "disponibilites",
  "FAQ",
  "galerie-photo",
  "guide-touristique",
  "horizon",
  "information-marvilla-tohapi",
  "nausicaa-proche-le-portel",
  "plan",
  "politique-tdm",
  "prestige",
  "reserver",
  "tarifs",
  "vue-densemble",
];

/**
 * 1) Ancienne structure plate /{locale}/{slug} → /{locale}/pages/{slug}.
 *    Couvre toutes les pages (pas seulement celles vues en 404 dans GSC).
 */
const flatSlugRedirects: Redirect[] = liveLocales.flatMap((locale) =>
  pageSlugs.map((slug) => r(`/${locale}/${slug}`, `/${locale}/pages/${slug}`))
);

/**
 * 2) Anciens slugs traduits / variantes historiques (suffixe "1", noms NL/EN)
 *    vers la page canonique de la même locale.
 */
const aliasRedirects: Redirect[] = [
  // nl
  r("/nl/overzicht", "/nl/pages/vue-densemble"),
  r("/nl/nausicaa", "/nl/pages/nausicaa-proche-le-portel"),
  r("/nl/veelgestelde-vragen-blueportel", "/nl/pages/FAQ"),
  r("/nl/tdm-beleid", "/nl/pages/politique-tdm"),
  r("/nl/tdm-beleid1", "/nl/pages/politique-tdm"),
  r("/nl/gepersonaliseerde-boekingsaanvraag", "/nl/pages/reserver"),
  // en
  r("/en/nausicaa", "/en/pages/nausicaa-proche-le-portel"),
  r("/en/faq-blueportel", "/en/pages/FAQ"),
  r("/en/tdm-policy", "/en/pages/politique-tdm"),
  r("/en/tdm-policy1", "/en/pages/politique-tdm"),
  r("/en/custom-page-name", "/en"),
  // fr
  r("/fr/faq-blueportel", "/fr/pages/FAQ"),
  r("/fr/politique-tdm1", "/fr/pages/politique-tdm"),
];

/**
 * 3) Locales supprimées (de, it) : on renvoie vers l'équivalent français
 *    quand il existe, sinon vers l'accueil FR via le catch-all plus bas.
 */
const removedLocaleAliases: Redirect[] = [
  r("/de/faq-blueportel", "/fr/pages/FAQ"),
  r("/de/informationen-marvilla-tohapi", "/fr/pages/information-marvilla-tohapi"),
  r("/de/tdm-richtlinie1", "/fr/pages/politique-tdm"),
  r("/de/uberblick", "/fr/pages/vue-densemble"),
  r("/de/benutzerdefinierter-seitenname", "/fr"),
];

/** 4) Ancien chemin d'accueil /{locale}/home → /{locale} (ou /fr si locale morte). */
const homeRedirects: Redirect[] = ["fr", "en", "nl", "de", "it"].map((locale) =>
  r(`/${locale}/home`, (liveLocales as readonly string[]).includes(locale) ? `/${locale}` : "/fr")
);

/** 5) Divers : landing keyword historique + filet pour les locales mortes. */
const miscRedirects: Redirect[] = [
  r("/location-mobil-home-vue-mer-le-portel", "/fr"),
  // catch-all des locales supprimées (après les alias spécifiques ci-dessus)
  r("/de/:path*", "/fr"),
  r("/it/:path*", "/fr"),
];

/**
 * 6) Anciennes URLs non localisées (avant l'i18n) /pages/* et /blog/*.
 *    Sensible au domaine : blueportel.com sert l'anglais, le reste le français.
 */
const comHost = "(.*\\.)?blueportel\\.com";
const legacyUnlocalizedRedirects: Redirect[] = ["/pages/:path*", "/blog/:path*", "/blog"].flatMap(
  (source) => [
    { ...r(source, source.replace(/^\//, "/en/")), has: [{ type: "host" as const, value: comHost }] },
    r(source, source.replace(/^\//, "/fr/")),
  ]
);

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    // L'ordre compte : les règles spécifiques avant les catch-all.
    return [
      ...flatSlugRedirects,
      ...aliasRedirects,
      ...removedLocaleAliases,
      ...homeRedirects,
      ...miscRedirects,
      ...legacyUnlocalizedRedirects,
    ];
  },
};

export default nextConfig;
