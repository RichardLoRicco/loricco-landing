import { getAllPosts } from "@/content/posts";
import { liveApps } from "@/app/lib/apps";
import { EMAIL, absoluteUrl } from "@/app/lib/site";

/*
  /llms.txt: a curated markdown index for AI agents and answer engines
  (llmstxt.org), the same posture as the LoRicco Law site. Built from the
  typed content the pages render, so it cannot drift from the site. Everything
  stated here is already stated on the site; this is an index of existing
  claims, never a place to introduce new ones.
*/
export const dynamic = "force-static";

function entry(title: string, path: `/${string}` | `https://${string}`, description: string) {
  if (/[[\]\\\r\n]/.test(title) || /[\r\n]/.test(description)) {
    throw new Error(`llms.txt entry would break markdown: ${title}`);
  }
  const href = path.startsWith("/") ? absoluteUrl(path as `/${string}`) : path;
  return `- [${title}](${href}): ${description}`;
}

export function GET() {
  const posts = getAllPosts().map((post) =>
    entry(post.title, `/blog/${post.slug}`, `${post.description} (Published ${post.publishedAt})`),
  );
  const apps = liveApps.map((app) =>
    entry(app.name, (app.siteUrl ?? app.appStoreUrl ?? "/#studio") as `https://${string}`, `${app.tagline} ${app.description}`),
  );

  const body = `# LoRicco & Co.

> The solo practice of Richard T. LoRicco in New Haven, Connecticut: a Connecticut-admitted attorney, MBA, and software engineer who rebuilds and operates websites, builds AI tools, trains lawyers and small-business teams, does technical consulting for counsel, and publishes iOS apps.

Email: ${EMAIL}
Base: New Haven, CT

## Services

${[
  entry("Websites & AI Tools", "/#services", "Website rebuilds that keep existing search rankings, ongoing site care and content, visibility in Google and AI answers, and AI tools for intake and routine work. The client owns the domain, code, content, and accounts."),
  entry("AI Education & Training", "/#services", "Workshops for lawyers and small-business teams on what AI tools do well, where they fail, and how to use them without creating a compliance problem."),
  entry("Technical Consulting for Law Firms", "/#services", "Digital evidence and discovery analysis, technical memos for counsel, questions for opposing experts, and firm technology guidance."),
  entry("Contract Legal Work for Law Firms", "/#services", "Legal research, research memos, and litigation and contract drafting by a Connecticut-admitted attorney."),
  entry("Business & Startup Advisory", "/#services", "Pitch decks, projections, competitive analysis, go-to-market strategy, and architecture reviews."),
].join("\n")}

## Work

${[
  entry("Work", "/#work", "Client websites the practice has rebuilt and operates, with their Lighthouse scores."),
  entry("Process", "/#process", "How an engagement runs: discovery, strategy, design system, build, and launch."),
].join("\n")}

## Apps

Published by the studio on the App Store.

${apps.join("\n")}

## Blog

Working notes by Richard T. LoRicco. General information, not legal advice.

${posts.length ? posts.join("\n") : "- (No posts yet.)"}

## Optional

${[
  entry("About", "/#about", "Who Richard T. LoRicco is and how the practice works."),
  entry("Contact", "/#contact", `Email ${EMAIL}. Replies usually within one business day.`),
  entry("RSS", "/blog/feed.xml", "The blog's RSS 2.0 feed."),
].join("\n")}
`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
