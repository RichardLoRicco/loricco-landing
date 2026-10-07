import Image from "next/image";
import Reveal from "./Reveal";

type Project = {
  name: string;
  exhibit: string;
  url: string;
  host: string;
  fullPage: string;
  fullPageAlt: string;
  description: string;
  lighthouse: [number, number, number, number];
  data: [string, string][];
};

/*
  Real, non-privileged website work. Website engagements aren't covered by the
  work-product posture that keeps consulting matters off this page.
  Lighthouse figures are mobile runs from 2026-09-02; the full-page captures
  are from 2026-09-03. Refresh both when the sites change materially.
*/
const projects: Project[] = [
  {
    name: "Omni Physical & Aquatic Therapy",
    exhibit: "A",
    url: "https://www.omnicanhelp.com/",
    host: "omnicanhelp.com",
    fullPage: "/work/omni-full.jpg",
    fullPageAlt:
      "Full homepage of omnicanhelp.com: headline reading Physical therapy, aquatic therapy and chiropractic care, followed by service cards, a warm-water therapy pool section, and five Connecticut office locations",
    description:
      "A physical, aquatic, and chiropractic therapy practice with five Connecticut offices. I rebuilt the Squarespace site as a bilingual Next.js site with an appointment-request form running on HIPAA-eligible AWS infrastructure, and I handle content and AI-search visibility for the practice.",
    lighthouse: [94, 100, 100, 100],
    data: [
      ["Live since", "Aug 2026"],
      ["Languages", "EN · ES"],
      ["Stack", "Next.js · AWS"],
    ],
  },
  {
    name: "The LoRicco Law Firm",
    exhibit: "B",
    url: "https://loriccolaw.com/",
    host: "loriccolaw.com",
    fullPage: "/work/loriccolaw-full.jpg",
    fullPageAlt:
      "Full homepage of loriccolaw.com: headline reading Three generations of New Haven injury attorneys, followed by selected verdicts and settlements, practice areas, and the attorneys",
    description:
      "A personal injury and criminal defense firm that has practiced in New Haven since 1956. I rebuilt the outdated site as a bilingual Next.js site, kept the URLs and rankings it already had, and added a compliance-reviewed blog and pages for the surrounding towns. I also handle the firm's content and AI-search visibility.",
    lighthouse: [100, 100, 100, 100],
    data: [
      ["Live since", "May 2026"],
      ["Languages", "EN · ES"],
      ["Stack", "Next.js · Vercel"],
    ],
  },
];

const scoreLabels = ["Performance", "Accessibility", "Best practices", "SEO"];

/* The screenshot frame: the personal site's filing card, with the real homepage
   scrolling top to bottom on hover (see .site-preview in globals.css). */
function SiteFrame({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${project.name}, ${project.host}. Opens in a new tab.`}
      className="site-preview-trigger filing filing-interactive group block overflow-hidden"
    >
      <div className="flex items-center justify-between gap-3 px-5 py-4">
        <span className="meta">Exhibit {project.exhibit}</span>
        <span className="chip-meta">
          <span
            aria-hidden="true"
            style={{ width: 5, height: 5, borderRadius: 9999, background: "#4ea35c" }}
          />
          Live
        </span>
      </div>

      <div className="site-preview aspect-[16/10] border-y border-[var(--border)]">
        <Image
          src={project.fullPage}
          alt={project.fullPageAlt}
          width={1000}
          height={3281}
          sizes="(min-width: 1024px) 680px, 100vw"
        />
      </div>

      <div className="flex items-center justify-between gap-3 px-5 py-3.5">
        <span className="meta">{project.host}</span>
        <span className="meta hidden transition-colors group-hover:text-[var(--accent)] sm:inline">
          Hover to scroll &middot; Visit &rarr;
        </span>
        <span className="meta sm:hidden" style={{ color: "var(--accent)" }}>
          Visit &rarr;
        </span>
      </div>
    </a>
  );
}

export default function Work() {
  return (
    <section
      id="work"
      aria-label="Selected client work"
      className="relative"
      style={{ padding: "var(--space-section) 0" }}
    >
      <div className="page-gutter">
        <div className="section-head">
          <div>
            <p className="section-num">02 &middot; Work</p>
            <h2 className="mt-3 balance">
              Selected client <span className="serif-italic">work</span>.
            </h2>
          </div>
        </div>

        <p className="body-serif pretty mt-10 max-w-2xl" style={{ fontSize: "1.15rem" }}>
          Websites I&apos;ve rebuilt and continue to maintain.
        </p>

        <div className="mt-16 flex flex-col gap-20 lg:gap-28">
          {projects.map((project, i) => {
            const flipped = i % 2 === 1;
            return (
              <article
                key={project.host}
                className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14"
              >
                <Reveal className={`lg:col-span-7 ${flipped ? "lg:order-2" : ""}`}>
                  <SiteFrame project={project} />
                </Reveal>

                <Reveal delay={100} className={`lg:col-span-5 ${flipped ? "lg:order-1" : ""}`}>
                  <h3 style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.35rem)", lineHeight: 1.05 }}>
                    {project.name}
                  </h3>
                  <p className="body-serif pretty mt-4" style={{ fontSize: "1.05rem" }}>
                    {project.description}
                  </p>

                  <div className="mt-8">
                    <p className="meta">Lighthouse &middot; mobile, Sep 2026</p>
                    <dl className="work-scores mt-3">
                      {project.lighthouse.map((score, j) => (
                        <div key={scoreLabels[j]}>
                          <dt className="meta">{scoreLabels[j]}</dt>
                          <dd>{score}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
                    {project.data.map(([label, value]) => (
                      <div key={label}>
                        <dt className="meta">{label}</dt>
                        <dd
                          className="mt-1"
                          style={{ fontFamily: "var(--ff-display)", fontSize: "1.05rem" }}
                        >
                          {value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </Reveal>
              </article>
            );
          })}
        </div>

        <Reveal>
          <p className="marginalia footnote mt-14 max-w-2xl" style={{ textTransform: "none", letterSpacing: "0.02em" }}>
            Lighthouse figures are mobile runs from September 2026 (performance,
            accessibility, best practices, SEO). Consulting matters for counsel
            are not shown here, for the reasons described{" "}
            <a href="#about" className="link-ink">
              below
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
