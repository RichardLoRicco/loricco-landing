import type { MetadataRoute } from "next";

/* Dates are the last substantive change to each page; bump them by hand. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://loriccoandco.com",
      lastModified: "2026-10-19",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://loriccoandco.com/apps",
      lastModified: "2026-10-19",
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
