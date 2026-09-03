"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { animate, motion, useInView, useMotionValue, useTransform } from "motion/react";
import { FadeUp, SplitLines } from "./ui/Reveal";

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

const gaugeLabels = ["Performance", "Accessibility", "Best practices", "SEO"];

/* One Lighthouse ring: the arc draws and the number counts up on first view. */
function Gauge({ label, score, delay }: { label: string; score: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const value = useMotionValue(0);
  const text = useTransform(value, (v) => Math.round(v).toString());

  useEffect(() => {
    if (!inView) return;
    const controls = animate(value, score, {
      duration: 1.5,
      delay,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [inView, score, delay, value]);

  const r = 23;
  const circumference = 2 * Math.PI * r;
  const tone =
    score >= 90 ? "var(--color-good)" : score >= 50 ? "var(--color-warn)" : "var(--color-crit)";

  return (
    <div ref={ref} className="flex flex-col items-center gap-2.5">
      <div className="relative h-16 w-16">
        <svg viewBox="0 0 60 60" className="h-16 w-16 -rotate-90" aria-hidden="true">
          <circle cx="30" cy="30" r={r} fill="none" stroke="var(--color-line)" strokeWidth="2.5" />
          <motion.circle
            cx="30"
            cy="30"
            r={r}
            fill="none"
            stroke={tone}
            strokeWidth="2.5"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={inView ? { strokeDashoffset: circumference * (1 - score / 100) } : undefined}
            transition={{ duration: 1.5, delay, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>
        <motion.span
          className="absolute inset-0 flex items-center justify-center font-mono text-[14px] font-medium text-foreground tnum"
          aria-hidden="true"
        >
          {text}
        </motion.span>
        <span className="sr-only">
          {label}: {score} out of 100
        </span>
      </div>
      <span className="kicker px-0.5 text-center text-[8px] leading-tight tracking-[0.08em] text-text-muted sm:text-[9px] sm:tracking-[0.14em]">{label}</span>
    </div>
  );
}

function BrowserFrame({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${project.name}, ${project.host}. Opens in a new tab.`}
      className="site-preview-trigger group block"
    >
      <div className="relative overflow-hidden rounded-[4px] border border-line-strong bg-card shadow-[0_32px_64px_-32px_rgba(26,24,20,0.35)] transition-[transform,box-shadow] duration-500 [transition-timing-function:var(--ease-out-expo)] group-hover:-translate-y-1 group-hover:shadow-[0_40px_72px_-32px_rgba(26,24,20,0.42)]">
        {/* Chrome bar */}
        <div className="flex items-center gap-3 border-b border-line bg-background px-3.5 py-2.5">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-line-strong" />
            <span className="h-2 w-2 rounded-full bg-line-strong" />
            <span className="h-2 w-2 rounded-full bg-line-strong" />
          </span>
          <span className="flex-1 truncate rounded-[2px] border border-line bg-card px-2.5 py-0.5 font-mono text-[11px] tracking-[0.06em] text-text-muted">
            {project.host}
          </span>
          <span
            className="hidden font-mono text-[10px] tracking-[0.14em] text-text-muted uppercase transition-colors duration-300 group-hover:text-cobalt lg:inline"
            aria-hidden="true"
          >
            Hover to scroll
          </span>
        </div>

        {/* The real page, top to bottom */}
        <div className="site-preview aspect-[16/10]">
          <Image
            src={project.fullPage}
            alt={project.fullPageAlt}
            width={1000}
            height={3281}
            sizes="(min-width: 1024px) 660px, 100vw"
          />
          {/* Soft ink at the bottom edge so the cut reads as a fold, not a crop */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[rgba(26,24,20,0.12)] to-transparent"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Caption line */}
      <div className="mt-3 flex items-center justify-between font-mono text-[11px] tracking-[0.1em] text-text-muted uppercase">
        <span>
          Full page / captured Sep 2026
        </span>
        <span className="flex items-center gap-1.5 text-cobalt">
          Visit <span className="btn-arrow">→</span>
        </span>
      </div>
    </a>
  );
}

export default function Work() {
  return (
    <section
      id="work"
      className="relative scroll-mt-24 overflow-hidden px-6 py-28 lg:py-36"
      aria-label="Selected work"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <FadeUp>
            <p className="kicker rule-label text-text-muted">Selected work</p>
          </FadeUp>
          <SplitLines
            className="font-display mt-5 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
            lines={["Two websites I rebuilt", "and still run."]}
          />
          <FadeUp delay={0.15}>
            <p className="mt-5 text-lg leading-relaxed text-body-muted">
              Both sites are live and linked below. The screenshots are the
              full homepages as they stand today.
            </p>
          </FadeUp>
        </div>

        <div className="mt-20 flex flex-col gap-24 lg:gap-32">
          {projects.map((project, i) => {
            const flipped = i % 2 === 1;
            return (
              <article
                key={project.host}
                className="relative grid items-center gap-10 lg:grid-cols-12 lg:gap-14"
              >
                {/* Ghost exhibit numeral */}
                <span
                  aria-hidden="true"
                  className={`ghost pointer-events-none absolute -top-[6.5rem] hidden select-none font-display text-[7.5rem] leading-none font-bold lg:block ${
                    flipped ? "right-0" : "left-0"
                  }`}
                >
                  0{i + 1}
                </span>

                <FadeUp
                  className={`relative lg:col-span-7 ${flipped ? "lg:order-2" : ""}`}
                  y={28}
                >
                  <BrowserFrame project={project} />
                </FadeUp>

                <div className={`relative lg:col-span-5 ${flipped ? "lg:order-1" : ""}`}>
                  <FadeUp delay={0.1}>
                    <p className="kicker rule-label text-text-muted">
                      Exhibit {project.exhibit}
                    </p>
                    <h3 className="font-display mt-5 text-3xl font-bold tracking-tight lg:text-[2.35rem] lg:leading-[1.08]">
                      {project.name}
                    </h3>
                    <p className="mt-4 text-[15px] leading-relaxed text-body-muted">
                      {project.description}
                    </p>
                  </FadeUp>

                  {/* Lighthouse, mobile */}
                  <FadeUp delay={0.2} className="mt-8 border-t border-line pt-6">
                    <p className="kicker text-[10px] text-text-muted">
                      Lighthouse / mobile, Sep 2026
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-x-2 gap-y-5 sm:grid-cols-4">
                      {project.lighthouse.map((score, j) => (
                        <Gauge key={gaugeLabels[j]} label={gaugeLabels[j]} score={score} delay={j * 0.12} />
                      ))}
                    </div>
                  </FadeUp>

                  {/* Data strip */}
                  <FadeUp delay={0.25} className="mt-6">
                    <dl className="flex flex-wrap gap-x-6 gap-y-2 rounded-[3px] bg-data-bg px-5 py-3.5 font-mono text-[11px] text-data-ink">
                      {project.data.map(([label, value]) => (
                        <div key={label} className="flex gap-2">
                          <dt className="uppercase tracking-[0.1em]">{label} /</dt>
                          <dd className="font-medium text-data-hi">{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </FadeUp>
                </div>
              </article>
            );
          })}
        </div>

        <FadeUp delay={0.1} className="mt-16">
          <p className="max-w-2xl font-mono text-[12px] leading-relaxed text-text-muted">
            Lighthouse figures are mobile runs from September 2026 (performance,
            accessibility, best practices, SEO). Consulting matters for counsel
            are not shown here, for the reasons described below.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
