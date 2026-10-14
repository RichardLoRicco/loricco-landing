/*
  One post. Authored in content/posts/authored/*.md and compiled to
  authored.generated.ts by scripts/generate-posts.mjs. The same shape the
  LoRicco Law site uses, trimmed for a single-author studio blog.
*/
export type PostFAQ = {
  question: string;
  /** Plain text, used by the FAQPage JSON-LD. */
  answer: string;
  /** Sanitized inline HTML when the answer carries a link or emphasis. */
  answerHtml?: string;
};

export type Post = {
  slug: string;
  /** Editorial headline: the visible H1 and the JSON-LD headline. */
  title: string;
  /** Visible summary under the H1, the index entry, and the RSS description. */
  description: string;
  /**
    Search-facing title and description: <title>, meta description, Open Graph
    and Twitter. About 60 and 160 characters. They must hedge exactly as the
    body hedges and carry no claim the body does not make. Required; the
    generator fails without them.
  */
  metaTitle: string;
  metaDescription: string;
  /** YYYY-MM-DD. */
  publishedAt: string;
  /** YYYY-MM-DD. Equal to publishedAt on first publish; later only for a substantive revision. */
  updatedAt?: string;
  /** A named run of related posts, e.g. the Practice Book §4-9 series. */
  series?: string;
  tags: readonly string[];
  /** The YouTube explainer this post is the written twin of, once it exists. */
  videoUrl?: string;
  /** Body word count, for the reading-time line. */
  wordCount: number;
  bodyHtml: string;
  faqs?: readonly PostFAQ[];
};

/** Routes under /blog that a post slug may not shadow. */
export const RESERVED_POST_SLUGS = ["feed.xml", "page"] as const;
