import { getAllPosts } from "@/content/posts";
import { liveApps } from "@/app/lib/apps";
import { services } from "@/app/lib/services";
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
    entry(app.name, (app.siteUrl ?? app.appStoreUrl ?? "/apps") as `https://${string}`, `${app.tagline} ${app.description}`),
  );

  // The summary repeats the Organization description in StructuredData.tsx,
  // and the service lines come from the same list the Services section renders.
  const body = `# LoRicco & Co.

> LoRicco & Co. is the New Haven, Connecticut company of Richard T. LoRicco, an attorney and software engineer. He builds websites and apps, trains teams to use AI and builds it into their work, takes on legal research and technical consulting for law firms, and works with startups and small businesses on the business and the product.

Email: ${EMAIL}
Base: New Haven, CT

## Services

${services.map((service) => entry(service.title, "/#services", service.description)).join("\n")}

## Work

${[
  entry("Work", "/#work", "Client websites the practice has rebuilt and operates, with their Lighthouse scores."),
  entry("How work starts", "/#how-work-starts", "Every engagement starts with a short call, then a written review of where things stand, which the client can act on with LoRicco & Co. or with someone else."),
].join("\n")}

## Apps

Published by the studio on the App Store. The full list is at ${absoluteUrl("/apps")}.

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
