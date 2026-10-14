import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import PageChrome from "../components/PageChrome";
import { formatShortDate, readingTime } from "../lib/dates";
import { BUSINESS_ID, DEFAULT_OG_IMAGE, PERSON_ID, SITE_ORIGIN, absoluteUrl } from "../lib/site";
import { getAllPosts } from "@/content/posts";

const TITLE = "Blog | LoRicco & Co";
const DESCRIPTION =
  "Working notes from Richard T. LoRicco on building websites, AI systems, and software for small firms and local businesses, and on running a one-person practice on agents.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/blog",
    types: { "application/rss+xml": `${SITE_ORIGIN}/blog/feed.xml` },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/blog",
    type: "website",
    siteName: "LoRicco & Co",
    locale: "en_US",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [DEFAULT_OG_IMAGE.url] },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <PageChrome />
      <main id="main-content" className="relative overflow-x-clip" style={{ paddingTop: "calc(var(--nav-h) + 3rem)" }}>
        <section aria-labelledby="blog-heading" className="page-gutter pb-20">
          <div className="section-head">
            <div>
              <p className="section-num">Blog</p>
              <h1 id="blog-heading" className="mt-3 balance" style={{ fontSize: "clamp(2.75rem, 7vw, 5.5rem)" }}>
                Working <span className="serif-italic">notes</span>.
              </h1>
            </div>
            <a href="/blog/feed.xml" className="meta link-accent hidden sm:inline" style={{ color: "var(--text-muted)" }}>
              RSS
            </a>
          </div>

          <p className="body-serif pretty mt-10 max-w-2xl" style={{ fontSize: "1.15rem" }}>
            What I&apos;m building and how I run the practice: the websites, the
            AI systems, the apps, and the rules I work under as a Connecticut
            attorney. Written for the firm or business owner deciding whether
            any of it applies to them.
          </p>

          {posts.length === 0 ? (
            <p className="meta mt-14">Nothing published yet.</p>
          ) : (
            <ol className="post-ledger mt-14" aria-label="Posts, newest first">
              {posts.map((post) => (
                <li key={post.slug}>
                  <article className="post-row">
                    <div className="post-row-when">
                      <time className="meta" dateTime={post.publishedAt}>
                        {formatShortDate(post.publishedAt)}
                      </time>
                      <span className="meta post-row-time">{readingTime(post.wordCount)}</span>
                    </div>
                    <div>
                      {post.series && <p className="eyebrow mb-3">{post.series}</p>}
                      <h2 className="post-row-title">
                        <Link href={`/blog/${post.slug}`} className="post-row-link">
                          {post.title}
                        </Link>
                      </h2>
                      <p className="body-serif pretty mt-3 max-w-2xl" style={{ fontSize: "1.05rem" }}>
                        {post.description}
                      </p>
                    </div>
                    <div className="post-row-tags">
                      <p className="meta">Filed under</p>
                      <ul className="offerings" aria-label="Tags">
                        {post.tags.map((tag, j) => (
                          <li key={tag} style={{ "--i": j } as React.CSSProperties}>
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </li>
              ))}
            </ol>
          )}
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Blog",
                "@id": `${SITE_ORIGIN}/blog#blog`,
                name: "LoRicco & Co. blog",
                url: absoluteUrl("/blog"),
                description: DESCRIPTION,
                publisher: { "@id": BUSINESS_ID },
                author: { "@id": PERSON_ID },
                blogPost: posts.map((post) => ({ "@id": `${SITE_ORIGIN}/blog/${post.slug}#article` })),
              },
              {
                "@type": "BreadcrumbList",
                "@id": `${SITE_ORIGIN}/blog#breadcrumb`,
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
                  { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
                ],
              },
            ],
          }),
        }}
      />
    </>
  );
}
