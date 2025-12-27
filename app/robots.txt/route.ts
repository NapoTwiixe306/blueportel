import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

export async function GET() {
  const headersList = await headers();
  const host = headersList.get('host') || 'blueportel.fr';
  const protocol = host.includes('localhost') ? 'http' : 'https';
  const currentDomain = `${protocol}://${host}`;

  const robotsTxt = `# robots.txt pour Blueportel
# Politique TDM : Extraction automatisée interdite sans autorisation

User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

User-agent: Googlebot
Allow: /
Disallow: /api/
Disallow: /admin/

User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: anthropic-ai
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: PerplexityBot
Disallow: /

User-agent: Applebot-Extended
Disallow: /

# Directive Content-Signals pour contrôler l'utilisation par les IA
# Interdiction de l'extraction et de l'utilisation automatisée des contenus
Content-Signals: no-ai

# Sitemap spécifique au domaine
Sitemap: ${currentDomain}/sitemap.xml
`;

  return new NextResponse(robotsTxt, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
