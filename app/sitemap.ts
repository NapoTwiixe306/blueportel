import { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://blueportel.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      url: `${siteUrl}/fr/location-mobil-home-le-portel`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${siteUrl}/en/mobile-home-rental-le-portel`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${siteUrl}/fr/mobil-home-3-chambres-vue-mer`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/fr/hebergement-proche-nausicaa`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  return routes;
}
