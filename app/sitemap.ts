import { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://blueportel.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const frDomain = 'https://blueportel.fr';
  const enDomain = 'https://blueportel.com';

  const routes = [
    {
      url: `${frDomain}/fr/location-mobil-home-le-portel`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${enDomain}/en/mobile-home-rental-le-portel`,
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

  return routes;
}
