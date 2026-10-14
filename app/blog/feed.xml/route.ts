import { getAllPosts } from "@/content/posts";
import { toIsoDate } from "@/app/lib/dates";
import { AUTHOR, SITE_ORIGIN, absoluteUrl } from "@/app/lib/site";

/* RSS 2.0 for /blog, built from the same typed posts the pages render. */
export const dynamic = "force-static";

function escape(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export function GET() {
  const posts = getAllPosts();
  const lastBuild = posts[0] ? toIsoDate(posts[0].updatedAt ?? posts[0].publishedAt) : new Date(0);

  const items = posts
    .map((post) => {
      const url = absoluteUrl(`/blog/${post.slug}`);
      return `    <item>
      <title>${escape(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${toIsoDate(post.publishedAt).toUTCString()}</pubDate>
      <dc:creator>${escape(AUTHOR.name)}</dc:creator>
${post.tags.map((t) => `      <category>${escape(t)}</category>`).join("\n")}
      <description>${escape(post.description)}</description>
      <content:encoded><![CDATA[${post.bodyHtml.replaceAll("]]>", "]]]]><![CDATA[>")}]]></content:encoded>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>LoRicco &amp; Co. blog</title>
    <link>${absoluteUrl("/blog")}</link>
    <atom:link href="${SITE_ORIGIN}/blog/feed.xml" rel="self" type="application/rss+xml" />
    <description>Working notes from Richard T. LoRicco on websites, AI systems, software, and running a one-person practice.</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuild.toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
