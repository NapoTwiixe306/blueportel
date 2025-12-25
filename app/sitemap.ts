import { MetadataRoute } from 'next';
import { headers } from 'next/headers';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headersList = await headers();
  const host = headersList.get('host') || 'blueportel.fr';
  
  const isEnDomain = host.includes('blueportel.com');
  const frDomain = 'https://blueportel.fr';
  const enDomain = 'https://blueportel.com';

  // Nettoyage agressif: sitemap = pages money + 1 page soutien max
  if (isEnDomain) {
    return [
      {
        url: `${enDomain}/mobile-home-sea-view-le-portel`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 1.0,
      },
      {
        url: `${enDomain}/contact`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.2,
      },
    ];
  }

  // Sinon (sur le .fr), on renvoie uniquement money + contact
  return [
    {
      url: `${frDomain}/location-mobil-home-vue-mer-le-portel`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${frDomain}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.2,
    },
  ];
}
