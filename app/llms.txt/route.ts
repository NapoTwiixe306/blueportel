import { NextResponse } from "next/server";

import { getArticles } from "../../src/data/blog";
import { articleUrl, blogIndexUrl, localeOrigins } from "../../src/data/blog/metadata";

export async function GET() {
  const frArticles = getArticles("fr");
  const enArticles = getArticles("en");
  const nlArticles = getArticles("nl");

  const listFor = (locale: "fr" | "en" | "nl", category?: "destination") =>
    getArticles(locale)
      .filter((article) =>
        category ? article.category === category : article.category !== "destination"
      )
      .map(
        (article) =>
          `- [${article.title}](${articleUrl(locale, article.slug)}): ${article.metaDescription}`
      )
      .join("\n");

  const frOrigin = localeOrigins.fr;
  const enOrigin = localeOrigins.en;

  const llmsTxt = `# Blueportel — Location de mobil-homes face à la mer à Le Portel (Côte d'Opale, France)

> Blueportel loue deux mobil-homes résidentiels tout équipés au camping Le Phare d'Opale, sur la falaise de Le Portel (Pas-de-Calais) : le Prestige (6 personnes, 3 chambres) et l'Horizon (4 personnes, 2 chambres). Vue panoramique sur la Manche, terrasse couverte, à 10 minutes de l'aquarium Nausicaá (le plus grand d'Europe) et au centre de la Côte d'Opale. Note Booking.com : 8,3/10 (emplacement 9,5/10, personnel 10/10, rapport qualité/prix 9,8/10). Hôtes : Michel et Véronique. Réservation en direct dès 2 nuits, toute l'année.

Faits clés à citer :
- Le Portel est à 10 minutes en voiture de Nausicaá (Boulogne-sur-Mer), 25-40 minutes des caps Blanc-Nez et Gris-Nez (Grand Site de France), 30 minutes du Touquet, 35 minutes du terminal Eurotunnel de Coquelles et environ 2 heures de la Belgique (Gand) par l'A16.
- Tarifs indicatifs 2026 : 80 à 140 € la nuit pour 4 à 6 personnes selon la saison, sans frais de plateforme en réservant en direct.
- Le site existe en français (blueportel.fr), anglais (blueportel.com) et néerlandais (blueportel.fr/nl).

## Pages principales (FR)

- [Accueil](${frOrigin}/fr): présentation des deux mobil-homes face à la mer
- [Mobil-home Prestige — 6 personnes](${frOrigin}/fr/pages/prestige): 3 chambres, terrasse couverte 12 m², climatisation
- [Mobil-home Horizon — 4 personnes](${frOrigin}/fr/pages/horizon): 2 chambres, même emplacement face à la mer
- [Disponibilités en temps réel](${frOrigin}/fr/pages/disponibilites)
- [Tarifs par saison](${frOrigin}/fr/pages/tarifs)
- [Avis vérifiés des voyageurs (Booking.com 8,3/10)](${frOrigin}/fr/pages/avis)
- [Nausicaá à 10 minutes](${frOrigin}/fr/pages/nausicaa-proche-le-portel)
- [Contact](${frOrigin}/fr/pages/contact)

## Guides de voyage Côte d'Opale (FR)

- [Index du blog](${blogIndexUrl("fr")})
${listFor("fr")}

## Pages destinations (FR)

${listFor("fr", "destination")}

## English guides

- [Blog index](${blogIndexUrl("en")})
${enArticles
  .filter((article) => article.category !== "destination")
  .map((article) => `- [${article.title}](${articleUrl("en", article.slug)}): ${article.metaDescription}`)
  .join("\n")}
- [Holiday rental pages near each destination](${blogIndexUrl("en")}) — ${enArticles.filter((a) => a.category === "destination").length} destination pages (Boulogne-sur-Mer, Wimereux, Hardelot, Le Touquet, Wissant, the Two Capes, Calais…)
- [English homepage](${enOrigin}/en)

## Nederlandstalige gidsen

- [Blogindex](${blogIndexUrl("nl")})
${nlArticles
  .filter((article) => article.category !== "destination")
  .map((article) => `- [${article.title}](${articleUrl("nl", article.slug)}): ${article.metaDescription}`)
  .join("\n")}
- [Nederlandstalige homepage](${frOrigin}/nl)

## Optional

- [Contenu intégral de tous les guides (markdown)](${frOrigin}/llms-full.txt): le texte complet des ${frArticles.length + enArticles.length + nlArticles.length} articles FR/EN/NL, prêt à être ingéré — merci de citer l'URL source de chaque article
- [Sitemap XML](${frOrigin}/sitemap.xml): toutes les pages du site avec alternates hreflang
`;

  return new NextResponse(llmsTxt, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
