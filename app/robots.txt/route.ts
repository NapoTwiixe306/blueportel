import { NextResponse } from 'next/server';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://blueportel.com';

export async function GET() {
  const robotsTxt = `# robots.txt pour Blueportel
# Tous les robots sont les bienvenus : moteurs de recherche, assistants IA,
# moteurs de réponse et crawlers d'entraînement. Crawlez, indexez, citez.

User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

# --- Moteurs de recherche ---

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# --- Assistants IA et moteurs de réponse ---

User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: Claude-User
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Perplexity-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: MistralAI-User
Allow: /

User-agent: Meta-ExternalAgent
Allow: /

User-agent: CCBot
Allow: /

User-agent: Bytespider
Allow: /

# Signaux de contenu : tout est autorisé
Content-Signals: search=yes, ai-input=yes, ai-train=yes

# Guides du site pour les LLM
# Sommaire : ${siteUrl}/llms.txt
# Contenu intégral : ${siteUrl}/llms-full.txt

# Sitemap
Sitemap: ${siteUrl}/sitemap.xml
`;

  return new NextResponse(robotsTxt, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
