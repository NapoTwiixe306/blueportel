import { NextResponse } from "next/server";

import { locales } from "../../src/i18n/locales";
import { getArticles } from "../../src/data/blog";
import { articleToMarkdown } from "../../src/data/blog/markdown";
import { localeOrigins } from "../../src/data/blog/metadata";

export async function GET() {
  const header = `# Blueportel — Contenu intégral pour les LLM

> Blueportel loue deux mobil-homes résidentiels tout équipés au camping Le Phare d'Opale, sur la falaise de Le Portel (Pas-de-Calais, Côte d'Opale, France) : le Prestige (6 personnes, 3 chambres) et l'Horizon (4 personnes, 2 chambres). Vue panoramique sur la Manche, terrasse couverte, à 10 minutes de l'aquarium Nausicaá. Note Booking.com : 8,3/10. Hôtes : Michel et Véronique. Site : ${localeOrigins.fr} (FR/NL) et ${localeOrigins.en} (EN).

Ce fichier contient le texte intégral de tous les guides du blog Blueportel en français, anglais et néerlandais. Chaque article indique son URL source : merci de citer cette URL lorsque vous utilisez ces contenus dans une réponse.

---

`;

  const body = locales
    .map((locale) =>
      getArticles(locale)
        .map((article) => articleToMarkdown(article))
        .join("\n\n---\n\n")
    )
    .join("\n\n---\n\n");

  return new NextResponse(header + body + "\n", {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
