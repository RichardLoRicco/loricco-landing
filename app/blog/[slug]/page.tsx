import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../components/Footer";
import PageChrome from "../../components/PageChrome";
import PostDisclaimer from "../../components/PostDisclaimer";
import { formatDisplayDate, hasSubstantiveUpdate, readingTime, toIsoDate } from "../../lib/dates";
import {
  AUTHOR,
  BUSINESS_ID,
  DEFAULT_OG_IMAGE,
  EMAIL,
  PERSON_ID,
  SITE_ORIGIN,
  absoluteUrl,
} from "../../lib/site";
import { getAllPosts, getPostBySlug, getSeriesPosts, type Post } from "@/content/posts";

export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const path = `/blog/${post.slug}` as const;
  return {
    // Suffix-free: the metaTitle is the whole search title, as on the law site.
    title: { absolute: post.metaTitle },
    description: post.metaDescription,
    authors: [{ name: AUTHOR.name, url: AUTHOR.url }],
    alternates: {
      canonical: path,
      types: { "application/rss+xml": `${SITE_ORIGIN}/blog/feed.xml` },
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: path,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: [AUTHOR.url],
      tags: [...post.tags],
      siteName: "LoRicco & Co",
      locale: "en_US",
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [DEFAULT_OG_IMAGE.url],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const series = getSeriesPosts(post);
  const all = getAllPosts();
  const index = all.findIndex((p) => p.slug === post.slug);
  const newer = index > 0 ? all[index - 1] : undefined;
  const older = index < all.length - 1 ? all[index + 1] : undefined;

  return (
    <>
      <PageChrome />
      <main id="main-content" className="relative overflow-x-clip" style={{ paddingTop: "calc(var(--nav-h) + 3rem)" }}>
        <article className="page-gutter pb-20">
          <nav aria-label="Breadcrumb" className="meta">
            <ol className="flex flex-wrap items-center gap-x-2">
              <li><Link href="/" className="link-accent" style={{ color: "var(--text-muted)" }}>Home</Link></li>
              <li aria-hidden="true">&middot;</li>
              <li><Link href="/blog" className="link-accent" style={{ color: "var(--text-muted)" }}>Blog</Link></li>
              {post.series && (
                <>
                  <li aria-hidden="true">&middot;</li>
                  <li aria-current="page" style={{ color: "var(--text-secondary)" }}>{post.series}</li>
                </>
              )}
            </ol>
          </nav>

          <header className="post-header">
            <h1 className="balance post-title">{post.title}</h1>
            <p className="body-serif pretty post-lede">{post.description}</p>
            <dl className="post-byline">
              <div>
                <dt className="meta">By</dt>
                <dd>
                  <a href={AUTHOR.url} className="link-ink" rel="author">{AUTHOR.name}</a>
                </dd>
              </div>
              <div>
                <dt className="meta">Published</dt>
                <dd><time dateTime={post.publishedAt}>{formatDisplayDate(post.publishedAt)}</time></dd>
              </div>
              {hasSubstantiveUpdate(post) && (
                <div>
                  <dt className="meta">Updated</dt>
                  <dd><time dateTime={post.updatedAt}>{formatDisplayDate(post.updatedAt)}</time></dd>
                </div>
              )}
              <div>
                <dt className="meta">Length</dt>
                <dd>{readingTime(post.wordCount)}</dd>
              </div>
            </dl>
          </header>

          <div className="post-layout">
            <aside className="post-aside">
              {post.videoUrl && (
                <div className="post-aside-block">
                  <p className="meta">Watch</p>
                  <a href={post.videoUrl} className="link-ink mt-2 inline-block" target="_blank" rel="noopener noreferrer">
                    The video version &rarr;
                  </a>
                </div>
              )}
              {series.length > 1 && post.series && (
                <div className="post-aside-block">
                  <p className="meta">{post.series}</p>
                  <ol className="post-series mt-3">
                    {series.map((p, i) => (
                      <li key={p.slug}>
                        <span className="num">{String(i + 1).padStart(2, "0")}</span>
                        {p.slug === post.slug ? (
                          <span aria-current="page" style={{ color: "var(--text-primary)" }}>{p.title}</span>
                        ) : (
                          <Link href={`/blog/${p.slug}`} className="link-ink">{p.title}</Link>
                        )}
                      </li>
                    ))}
                  </ol>
                </div>
              )}
              <div className="post-aside-block">
                <p className="meta">Filed under</p>
                <ul className="offerings" aria-label="Tags">
                  {post.tags.map((tag, j) => (
                    <li key={tag} style={{ "--i": j } as React.CSSProperties}>{tag}</li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="post-body">
              <div className="blog-prose" dangerouslySetInnerHTML={{ __html: post.bodyHtml }} />
              <PostFAQs faqs={post.faqs} />
              <PostDisclaimer />
              <div className="post-contact">
                <p className="meta">Get in touch</p>
                <p className="body-serif pretty mt-3" style={{ fontSize: "1.1rem" }}>
                  If you want help with the website, the AI setup, or the software,
                  write to me. I read every note myself.
                </p>
                <a href={`mailto:${EMAIL}`} className="btn btn-primary mt-6">{EMAIL}</a>
              </div>
            </div>
          </div>

          <nav aria-label="More posts" className="post-pager">
            {older ? (
              <Link href={`/blog/${older.slug}`} className="post-pager-link">
                <span className="meta">&larr; Older</span>
                <span className="post-pager-title">{older.title}</span>
              </Link>
            ) : <span />}
            {newer ? (
              <Link href={`/blog/${newer.slug}`} className="post-pager-link text-right items-end">
                <span className="meta">Newer &rarr;</span>
                <span className="post-pager-title">{newer.title}</span>
              </Link>
            ) : <span />}
          </nav>
        </article>
      </main>
      <Footer />
      <PostStructuredData post={post} />
    </>
  );
}

function PostFAQs({ faqs }: { faqs?: Post["faqs"] }) {
  if (!faqs?.length) return null;
  return (
    <section aria-labelledby="post-faqs" className="post-faqs">
      <h2 id="post-faqs">Questions I get on this</h2>
      <dl>
        {faqs.map((faq) => (
          <div key={faq.question}>
            <dt>{faq.question}</dt>
            <dd>
              {faq.answerHtml ? (
                <span dangerouslySetInnerHTML={{ __html: faq.answerHtml }} />
              ) : (
                faq.answer
              )}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function PostStructuredData({ post }: { post: Post }) {
  const url = absoluteUrl(`/blog/${post.slug}`);
  const faq = post.faqs?.length
    ? {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: post.faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }
    : undefined;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.description,
        url,
        image: `${SITE_ORIGIN}${DEFAULT_OG_IMAGE.url}`,
        datePublished: toIsoDate(post.publishedAt).toISOString(),
        dateModified: toIsoDate(post.updatedAt ?? post.publishedAt).toISOString(),
        wordCount: post.wordCount,
        keywords: post.tags.join(", "),
        ...(post.series ? { isPartOf: { "@type": "CreativeWorkSeries", name: post.series } } : {}),
        ...(post.videoUrl ? { video: { "@type": "VideoObject", url: post.videoUrl, name: post.title } } : {}),
        inLanguage: "en-US",
        // Both ids are defined by the site-wide graph in StructuredData.tsx (root layout).
        author: { "@id": PERSON_ID },
        publisher: { "@id": BUSINESS_ID },
        mainEntityOfPage: { "@id": `${url}#webpage` },
      },
      ...(faq ? [faq] : []),
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: post.metaTitle,
        description: post.metaDescription,
        breadcrumb: { "@id": `${url}#breadcrumb` },
        mainEntity: faq ? [{ "@id": `${url}#article` }, { "@id": `${url}#faq` }] : { "@id": `${url}#article` },
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />;
}
