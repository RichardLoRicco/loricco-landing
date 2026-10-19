import Reveal from "./Reveal";
import SiteFrame from "./SiteFrame";

export type Project = {
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
  Lighthouse figures are the median of three mobile runs on 2026-10-19; the full-page captures
  are from 2026-10-19. Refresh both when the sites change materially.
*/
const projects: Project[] = [
  {
    name: "Omni Physical & Aquatic Therapy",
    exhibit: "A",
    url: "https://www.omnicanhelp.com/",
    host: "omnicanhelp.com",
    fullPage: "/work/omni-full.jpg",
    fullPageAlt:
      "Homepage of omnicanhelp.com, headed Physical therapy, aquatic therapy and chiropractic care, with its services, warm-water pool, and five Connecticut offices",
    description:
      "A physical therapy, aquatic therapy, and chiropractic practice with five Connecticut offices. I replaced its Squarespace site with a new one in English and Spanish, built so patients can find the nearest office and call it.",
    lighthouse: [97, 100, 100, 100],
    data: [
      ["Live since", "Aug 2026"],
      ["Languages", "EN · ES"],
      ["Stack", "Next.js · Vercel"],
    ],
  },
  {
    name: "The LoRicco Law Firm",
    exhibit: "B",
    url: "https://loriccolaw.com/",
    host: "loriccolaw.com",
    fullPage: "/work/loriccolaw-full.jpg",
    fullPageAlt:
      "Homepage of loriccolaw.com, headed Three generations of New Haven attorneys, with a photo of the firm's attorneys and its practice areas",
    description:
      "My family's firm, a general practice in New Haven since 1956. I rebuilt its outdated site in English and Spanish, kept its existing URLs, and added a compliance-reviewed blog and pages for the surrounding towns.",
    lighthouse: [99, 100, 100, 100],
    data: [
      ["Live since", "May 2026"],
      ["Languages", "EN · ES"],
      ["Stack", "Next.js · Vercel"],
    ],
  },
];

const scoreLabels = ["Performance", "Accessibility", "Best practices", "SEO"];

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
          Websites I&apos;ve rebuilt and still maintain, including their content
          and search work.
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

                <Reveal delay={100} className={`work-meta lg:col-span-5 ${flipped ? "lg:order-1" : ""}`}>
                  <h3 style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.35rem)", lineHeight: 1.05 }}>
                    {project.name}
                  </h3>
                  <p className="body-serif pretty mt-4" style={{ fontSize: "1.05rem" }}>
                    {project.description}
                  </p>

                  <div className="mt-8">
                    <p className="meta">Lighthouse &middot; mobile, Oct 2026</p>
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
      </div>
    </section>
  );
}
