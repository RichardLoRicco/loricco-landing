import type { MetadataRoute } from "next";
import { getAllPosts, newestPostDate } from "@/content/posts";
import { toIsoDate } from "./lib/dates";
import { absoluteUrl } from "./lib/site";

// Static pages keep a stable "last meaningfully revised" date rather than the
// build time, so a blog deploy does not restamp them. Bump a date by hand when
// that page's copy actually changes.
const HOME_REVISED = new Date("2026-10-19T00:00:00Z");
const APPS_REVISED = new Date("2026-10-19T00:00:00Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const newest = newestPostDate();

  return [
    {
      url: absoluteUrl("/"),
      lastModified: HOME_REVISED,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: absoluteUrl("/apps"),
      lastModified: APPS_REVISED,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: absoluteUrl("/blog"),
      lastModified: newest ? toIsoDate(newest) : HOME_REVISED,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: toIsoDate(post.updatedAt ?? post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
