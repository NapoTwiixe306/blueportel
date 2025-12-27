import { NextResponse } from "next/server";
import { headers } from "next/headers";

function buildSitemapXml(urls: { loc: string; lastmod: string }[]) {
  const body = urls
    .map(
      ({ loc, lastmod }) => `
  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}
</urlset>
`;
}

export async function GET() {
  const host = (await headers()).get("host") || "blueportel.fr";
  const isEnDomain = host.includes("blueportel.com");

  const now = new Date().toISOString();

  const urls = isEnDomain
    ? [
        { loc: "https://blueportel.com/mobile-home-sea-view-le-portel", lastmod: now },
        { loc: "https://blueportel.com/contact", lastmod: now },
      ]
    : [
        { loc: "https://blueportel.fr/location-mobil-home-vue-mer-le-portel", lastmod: now },
        { loc: "https://blueportel.fr/contact", lastmod: now },
      ];

  const xml = buildSitemapXml(urls);

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}


