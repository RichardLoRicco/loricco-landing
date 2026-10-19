import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import SiteFrame from "./SiteFrame";
import { liveApps } from "../lib/apps";

export type Project = {
  name: string;
  exhibit: string;
  url: string;
  host: string;
  fullPage: string;
  /** Pixel height of the capture (all captures are 1000px wide). */
  fullPageHeight: number;
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
    fullPageHeight: 3281,
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
    // Stops above the firm's verdicts block on purpose: next to my own legal
    // services, those results could read as mine (attorney-advertising rules).
    fullPageHeight: 1330,
    fullPageAlt:
      "Top of the loriccolaw.com homepage, headed Three generations of New Haven attorneys, above a photo of the firm's attorneys",
    description:
      "A general practice firm in New Haven since 1956, where I'm of counsel. It's a separate business from LoRicco & Co. I rebuilt its outdated site in English and Spanish, kept its existing URLs, and added a blog that the firm's attorneys review before each post goes up, along with pages for the surrounding towns.",
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
              Client <span className="serif-italic">work</span>.
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

        {/* The apps as proof that the app work ships; the full list lives on /apps */}
        <Reveal>
          <div className="mt-20 border-t border-[var(--rule-color)] pt-10">
            <h3 style={{ fontSize: "clamp(1.5rem, 2.2vw, 2rem)" }}>Apps I&apos;ve shipped</h3>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 lg:grid-cols-6">
              {liveApps.map((app) => (
                <li key={app.slug}>
                  <a
                    href={app.appStoreUrl ?? app.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3"
                    aria-label={`${app.name} on the App Store (opens in a new tab)`}
                  >
                    <span
                      className="block h-11 w-11 shrink-0 overflow-hidden rounded-[22.5%]"
                      style={{ border: "1px solid var(--border)" }}
                    >
                      <Image src={app.icon} alt="" width={44} height={44} sizes="44px" className="h-full w-full object-cover" />
                    </span>
                    <span className="body-serif transition-colors group-hover:text-[var(--accent)]" style={{ fontSize: "1rem" }}>
                      {app.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="body-serif mt-8" style={{ fontSize: "1rem" }}>
              <Link href="/apps" className="link-ink">
                More about the apps
              </Link>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
