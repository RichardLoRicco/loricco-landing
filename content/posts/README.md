# Blog posts

Posts live in `content/posts/authored/*.md`, one file per post, named
`YYYY-MM-DD-slug.md`. `npm run generate:posts` compiles them into
`content/posts/authored.generated.ts`, which the `/blog` routes import. The
generator runs before `dev`, `build`, and `lint`; do not edit the generated
file by hand.

The posts are drafted by the LoRicco & Co. content pipeline
(`loricco-and-co/internal/own-content/`) and reviewed by Richard before they
merge. Nothing publishes without that review.

## Frontmatter

Required:

- `title`: the visible headline and the JSON-LD headline.
- `slug`: lowercase words joined by hyphens. Becomes `/blog/<slug>`.
- `description`: the summary under the headline, the index entry, and the
  RSS description.
- `metaTitle`: about 60 characters. Becomes the browser and search title
  (suffix-free) and the share-card title. Hedge exactly as the body hedges;
  no dash punctuation.
- `metaDescription`: about 160 characters. Same rules.
- `publishedAt`: `YYYY-MM-DD`.
- `tags`: a short list, shown as "Filed under".

Optional:

- `updatedAt`: `YYYY-MM-DD`. Equal to `publishedAt` on first publish; bump it
  only for a substantive revision (a later date renders "Updated").
- `series`: a name shared by related posts. The post page lists the series in
  order in its sidebar.
- `videoUrl`: the YouTube explainer the post is the written twin of, once it
  is up. Shown as "Watch" in the sidebar and as `video` in the JSON-LD.
- `faqs`: a list of `question` / `answer` pairs. Answers are Markdown; the
  generator produces plain text for the FAQPage JSON-LD and sanitized HTML
  for the page.

## Body rules

Supported Markdown: paragraphs, `##` and `###` headings, lists, blockquotes,
bold, italic, inline code, links, line breaks. Anything else fails the build.

- Internal links have no trailing slash (`/blog/some-post`, `/#services`).
- External links use `https`, `http`, `mailto`, or `tel`.
- Do not write the general-information line into the body; the template
  renders it after every post and the generator rejects a body that repeats it.
- Attorney-advertising posture applies to every post: no results claims
  without a date and a source, no "specialist" or "expert", no guarantees,
  and no prices or offers. The only call to action is the email address,
  which the template renders.
