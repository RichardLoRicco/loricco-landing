export function formatDisplayDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));
}

/** "Oct 2026", for the ledger. */
export function formatShortDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));
}

export function toIsoDate(value: string) {
  return new Date(`${value}T00:00:00Z`);
}

/** Only a substantive revision shows an Updated date. */
export function hasSubstantiveUpdate<T extends { publishedAt: string; updatedAt?: string }>(
  post: T,
): post is T & { updatedAt: string } {
  return post.updatedAt !== undefined && post.updatedAt > post.publishedAt;
}

export function readingTime(wordCount: number) {
  return `${Math.max(1, Math.round(wordCount / 230))} min read`;
}
