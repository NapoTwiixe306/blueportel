import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-05-25");

  return [
    {
      url: "https://blueportel.fr",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          "fr-FR": "https://blueportel.fr",
          "en-GB": "https://blueportel.com",
          "nl-NL": "https://blueportel.fr/nl",
          "x-default": "https://blueportel.fr",
        },
      },
    },
    {
      url: "https://blueportel.com",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          "en-GB": "https://blueportel.com",
          "fr-FR": "https://blueportel.fr",
          "nl-NL": "https://blueportel.fr/nl",
          "x-default": "https://blueportel.fr",
        },
      },
    },
    {
      url: "https://blueportel.fr/nl",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          "nl-NL": "https://blueportel.fr/nl",
          "fr-FR": "https://blueportel.fr",
          "en-GB": "https://blueportel.com",
          "x-default": "https://blueportel.fr",
        },
      },
    },
  ];
}
