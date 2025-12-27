import { MetadataRoute } from 'next';
import { headers } from 'next/headers';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headersList = await headers();
  const host = headersList.get('host') || 'blueportel.fr';
  
  const isEnDomain = host.includes('blueportel.com');
  const frDomain = 'https://blueportel.fr';
  const enDomain = 'https://blueportel.com';

  // Si on est sur le .com, on ne renvoie que la page EN
  if (isEnDomain) {
    return [
      {
        url: `${enDomain}/en/mobile-home-rental-le-portel`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 1.0,
      },
    ];
  }

  // Sinon (sur le .fr), on renvoie les 3 pages FR
  return [
    {
      url: `${frDomain}/fr/location-mobil-home-le-portel`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${frDomain}/fr/mobil-home-3-chambres-vue-mer`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${frDomain}/fr/hebergement-proche-nausicaa`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];
}
