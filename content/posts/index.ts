import { authoredPosts } from "./authored.generated";
import type { Post } from "./schema";

export type { Post, PostFAQ } from "./schema";

/** Every published post, newest first. The generator sorts them. */
export function getAllPosts(): readonly Post[] {
  return authoredPosts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return authoredPosts.find((post) => post.slug === slug);
}

/** Other posts in the same series, in publication order (oldest first). */
export function getSeriesPosts(post: Post): readonly Post[] {
  if (!post.series) return [];
  return [...authoredPosts]
    .filter((p) => p.series === post.series)
    .sort((a, b) => a.publishedAt.localeCompare(b.publishedAt));
}

/** The newest date across all posts, for the index's lastModified. */
export function newestPostDate(): string | undefined {
  return authoredPosts
    .map((p) => p.updatedAt ?? p.publishedAt)
    .sort()
    .at(-1);
}
