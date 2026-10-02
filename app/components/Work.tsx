"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll } from "motion/react";
import SectionHead from "./ui/SectionHead";

type Project = {
  name: string;
  url: string;
  host: string;
  fullPage: string;
  fullPageAlt: string;
  description: string;
  lighthouse: [number, number, number, number];
  details: [string, string][];
};

/*
  Lighthouse figures are mobile runs from 2026-09-02; the full-page captures are
  from 2026-09-03. Refresh both when the sites change materially.
*/
const projects: Project[] = [
  {
    name: "Omni Physical & Aquatic Therapy",
    url: "https://www.omnicanhelp.com/",
    host: "omnicanhelp.com",
    fullPage: "/work/omni-full.jpg",
    fullPageAlt:
      "Full homepage of omnicanhelp.com: headline reading Physical therapy, aquatic therapy and chiropractic care, followed by service cards, a warm-water therapy pool section, and five Connecticut office locations",
    description:
      "A physical, aquatic, and chiropractic therapy practice with five Connecticut offices. I rebuilt the Squarespace site as a bilingual Next.js site with an appointment-request form running on HIPAA-eligible AWS infrastructure, and I handle content and AI-search visibility for the practice.",
    lighthouse: [94, 100, 100, 100],
    details: [
      ["Live since", "Aug 2026"],
      ["Languages", "English, Spanish"],
      ["Stack", "Next.js, AWS"],
    ],
  },
  {
    name: "The LoRicco Law Firm",
    url: "https://loriccolaw.com/",
    host: "loriccolaw.com",
    fullPage: "/work/loriccolaw-full.jpg",
    fullPageAlt:
      "Full homepage of loriccolaw.com: headline reading Three generations of New Haven injury attorneys, followed by selected verdicts and settlements, practice areas, and the attorneys",
    description:
      "A personal injury and criminal defense firm that has practiced in New Haven since 1956. I rebuilt the outdated site as a bilingual Next.js site, kept the URLs and rankings it already had, and added a compliance-reviewed blog and pages for the surrounding towns. I also handle the firm's content and AI-search visibility.",
    lighthouse: [100, 100, 100, 100],
    details: [
      ["Live since", "May 2026"],
      ["Languages", "English, Spanish"],
      ["Stack", "Next.js, Vercel"],
    ],
  },
];

const scoreLabels = ["Performance", "Accessibility", "Best practices", "SEO"];

/* A browser window whose screenshot scrolls top to bottom as the window crosses the viewport. */
function ScrollingSite({ project }: { project: Project }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 15%"] });

  return (
    <a
      ref={ref}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${project.host} (opens in a new tab)`}
      className="group block"
    >
      <div className="overflow-hidden rounded-[6px] bg-night-raise ring-1 ring-night-rule transition-transform duration-700 [transition-timing-function:var(--ease-snap)] group-hover:-translate-y-1.5">
        <div className="flex items-center gap-3 border-b border-night-rule px-4 py-3">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-night-rule" />
            <span className="h-2.5 w-2.5 rounded-full bg-night-rule" />
            <span className="h-2.5 w-2.5 rounded-full bg-night-rule" />
          </span>
          <span className="flex-1 truncate rounded-[3px] bg-night px-3 py-1 text-center font-mono text-[11.5px] text-night-soft">
            {project.host}
          </span>
          <span className="w-[42px] text-right text-night-soft transition-colors group-hover:text-signal-bright" aria-hidden="true">
            ↗
          </span>
        </div>
        <motion.div
          className="scroller aspect-[4/3] bg-white"
          style={{ ["--p" as string]: scrollYProgress }}
        >
          <Image
            src={project.fullPage}
            alt={project.fullPageAlt}
            width={1000}
            height={3281}
            sizes="(min-width: 1024px) 720px, 100vw"
          />
        </motion.div>
      </div>
    </a>
  );
}

function Scores({ scores }: { scores: Project["lighthouse"] }) {
  return (
    <div>
      <p className="label text-[10px] text-night-soft">Lighthouse, mobile, Sep 2026</p>
      <dl className="mt-4 grid grid-cols-4 gap-3">
        {scores.map((score, i) => (
          <div key={scoreLabels[i]} className="flex flex-col-reverse justify-end">
            <dt className="mt-2 text-[11.5px] leading-tight text-night-soft">{scoreLabels[i]}</dt>
            <dd>
              <span className="display display-tight block text-[2rem] tnum text-night-ink sm:text-[2.4rem]">
                {score}
              </span>
              <span className="mt-2 block h-[3px] bg-night-rule" aria-hidden="true">
                <span className="block h-full bg-[#5fd08a]" style={{ width: `${score}%` }} />
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function Work() {
  return (
    <section
      data-dark
      id="work"
      aria-label="Client work"
      className="bg-night pt-28 pb-28 text-night-ink lg:pt-36 lg:pb-36"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <SectionHead
          dark
          index="02"
          label="Client work"
          title={
            <>
              Sites I built
              <br />
              and <span className="serif-i text-signal-bright">still run</span>
            </>
          }
          intro="Both are rebuilds of older sites. Scroll past either one to see the whole homepage, or open the live site."
        />

        <div className="mt-20 flex flex-col gap-28 lg:mt-24 lg:gap-36">
          {projects.map((p, i) => (
            <article key={p.host} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className={`lg:col-span-7 ${i % 2 ? "lg:order-2" : ""}`}>
                <ScrollingSite project={p} />
              </div>

              <div className={`lg:col-span-5 ${i % 2 ? "lg:order-1" : ""}`}>
                <p className="label text-signal-bright">{p.host}</p>
                <h3 className="display display-tight mt-4 text-[2rem] leading-[1] sm:text-[2.6rem]">
                  {p.name}
                </h3>
                <p className="mt-5 text-[1rem] leading-[1.65] text-night-soft">{p.description}</p>

                <div className="mt-9">
                  <Scores scores={p.lighthouse} />
                </div>

                <dl className="mt-9 grid grid-cols-3 gap-3 border-t border-night-rule pt-5">
                  {p.details.map(([k, v]) => (
                    <div key={k}>
                      <dt className="label text-[10px] text-night-soft">{k}</dt>
                      <dd className="mt-1.5 text-[14px] font-medium">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-20 max-w-2xl text-[14px] leading-[1.6] text-night-soft">
          Consulting work for counsel isn&apos;t shown here. Those matters stay
          private, for the reasons under About.
        </p>
      </div>
    </section>
  );
}
