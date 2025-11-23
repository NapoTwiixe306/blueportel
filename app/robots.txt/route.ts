import { NextResponse } from 'next/server';
import robots from '../robots';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://blueportel.com';

export async function GET() {
  const robotsConfig = robots();
  
  let robotsTxt = `# robots.txt pour Blueportel
# Politique TDM : Extraction automatisée interdite sans autorisation

`;

  const rules = Array.isArray(robotsConfig.rules) ? robotsConfig.rules : [robotsConfig.rules];
  
  rules.forEach((rule: { userAgent?: string | string[]; allow?: string | string[]; disallow?: string | string[] }) => {
    robotsTxt += `User-agent: ${Array.isArray(rule.userAgent) ? rule.userAgent.join(', ') : rule.userAgent || '*'}\n`;
    if (rule.allow) {
      if (Array.isArray(rule.allow)) {
        rule.allow.forEach((path: string) => {
          robotsTxt += `Allow: ${path}\n`;
        });
      } else {
        robotsTxt += `Allow: ${rule.allow}\n`;
      }
    }
    if (rule.disallow) {
      if (Array.isArray(rule.disallow)) {
        rule.disallow.forEach((path: string) => {
          robotsTxt += `Disallow: ${path}\n`;
        });
      } else {
        robotsTxt += `Disallow: ${rule.disallow}\n`;
      }
    }
    robotsTxt += '\n';
  });

  robotsTxt += `# Directive Content-Signals pour contrôler l'utilisation par les IA
# Interdiction de l'extraction et de l'utilisation automatisée des contenus
Content-Signals: no-ai

`;

  if (robotsConfig.sitemap) {
    robotsTxt += `# Sitemap\nSitemap: ${robotsConfig.sitemap}\n`;
  }

  return new NextResponse(robotsTxt, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}

