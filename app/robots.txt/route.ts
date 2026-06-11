import { NextResponse } from 'next/server';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://blueportel.com';

export async function GET() {
  const robotsTxt = `# robots.txt pour Blueportel
# Politique : les robots de recherche et les assistants IA qui CITENT leurs
# sources (avec lien) sont les bienvenus. L'extraction massive destinée à
# l'ENTRAÎNEMENT de modèles reste interdite sans autorisation (politique TDM).

User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

User-agent: Googlebot
Allow: /
Disallow: /api/
Disallow: /admin/

# --- Assistants IA / moteurs de réponse (citation avec lien) : AUTORISÉS ---

# OpenAI — recherche et navigation à la demande de l'utilisateur (citations ChatGPT)
User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

# Anthropic — recherche et navigation à la demande de l'utilisateur (citations Claude)
User-agent: Claude-SearchBot
Allow: /

User-agent: Claude-User
Allow: /

User-agent: ClaudeBot
Allow: /

# Perplexity — moteur de réponse avec citations
User-agent: PerplexityBot
Allow: /

User-agent: Perplexity-User
Allow: /

# Mistral
User-agent: MistralAI-User
Allow: /

# Microsoft Copilot s'appuie sur Bingbot (autorisé via *)

# --- Robots d'ENTRAÎNEMENT de modèles : INTERDITS (politique TDM) ---

User-agent: GPTBot
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: Applebot-Extended
Disallow: /

User-agent: Meta-ExternalAgent
Disallow: /

User-agent: Bytespider
Disallow: /

# Signaux de contenu : recherche et réponses IA avec citation oui, entraînement non
Content-Signals: search=yes, ai-input=yes, ai-train=no

# Guide du site pour les LLM
# ${siteUrl}/llms.txt

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
