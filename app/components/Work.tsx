"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useStill } from "./ui/useStill";
import { FadeUp, SplitLines } from "./ui/Reveal";
import { Clause, Comment } from "./ui/Redline";

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
  /*
    Review comments pinned to the homepage as it scrolls past. `at` is the
    scroll progress (0 to 1) at which that part of the capture is in the
    frame. Each comment only restates a fact from the description above.
  */
  comments: { at: number; text: string }[];
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
    comments: [
      { at: 0, text: "Bilingual site, in English and Spanish." },
      { at: 0.08, text: "Appointment requests run on HIPAA-eligible AWS infrastructure." },
      { at: 0.32, text: "Physical, aquatic, and chiropractic care, each with its own pages." },
      { at: 0.9, text: "Five Connecticut offices, rebuilt from the old Squarespace site." },
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
    comments: [
      { at: 0, text: "Rebuilt on Next.js, keeping the URLs and rankings the old site had." },
      { at: 0.55, text: "Practice-area and town pages, plus a compliance-reviewed blog." },
      { at: 0.88, text: "Bilingual site, in English and Spanish." },
    ],
  },
];

const gaugeLabels = ["Performance", "Accessibility", "Best practices", "SEO"];

/*
  One Lighthouse ring: the arc draws and the number counts up on first view.
  MotionConfig's reducedMotion only covers transforms, so under reduced
  motion the ring and the number jump to their final values instead. The
  first render always matches the server (see useStill).
*/
function Gauge({ label, score, delay }: { label: string; score: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const still = useStill();
  const value = useMotionValue(0);
  const text = useTransform(value, (v) => Math.round(v).toString());

  useEffect(() => {
    if (still) {
      value.set(score);
      return;
    }
    if (!inView) return;
    const controls = animate(value, score, {
      duration: 1.5,
      delay,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [inView, still, score, delay, value]);

  const r = 23;
  const circumference = 2 * Math.PI * r;
  const filled = circumference * (1 - score / 100);
  const tone =
    score >= 90 ? "var(--color-good)" : score >= 50 ? "var(--color-warn)" : "var(--color-crit)";

  return (
    // Narrowest phones: label under the ring. 400px up: side by side in a 2x2. sm up: four columns.
    <div
      ref={ref}
      className="flex flex-col items-start gap-2 min-[400px]:flex-row min-[400px]:items-center min-[400px]:gap-3 sm:flex-col sm:items-center sm:gap-2.5"
    >
      <div className="relative h-12 w-12 shrink-0 sm:h-16 sm:w-16">
        <svg viewBox="0 0 60 60" className="h-full w-full -rotate-90" aria-hidden="true">
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
            animate={inView || still ? { strokeDashoffset: filled } : undefined}
            transition={still ? { duration: 0 } : { duration: 1.5, delay, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>
        <motion.span
          className="absolute inset-0 flex items-center justify-center font-mono text-[13px] font-medium text-foreground tnum sm:text-[14px]"
          aria-hidden="true"
        >
          {text}
        </motion.span>
        <span className="sr-only">
          {label}: {score} out of 100
        </span>
      </div>
      <span className="kicker text-[10px] leading-snug tracking-[0.1em] text-text-muted sm:text-center" aria-hidden="true">
        {label}
      </span>
    </div>
  );
}

/*
  The browser frame. On wide screens with motion allowed, the capture is
  driven by page scroll (`progress`): it moves on a wrapper, so the CSS
  hover-scroll that phones and tablets keep never fights it. Otherwise the
  image sits directly in .site-preview and the hover rule applies.
*/
function BrowserFrame({
  project,
  progress,
  linked,
  flipped,
}: {
  project: Project;
  progress: MotionValue<number>;
  linked: boolean;
  flipped: boolean;
}) {
  const y = useTransform(progress, (v) => `calc(${-v * 100}% + ${v * 100}cqh)`);
  const readout = useTransform(progress, (v) => `${String(Math.round(v * 100)).padStart(2, "0")}%`);
  const [active, setActive] = useState(0);
  useMotionValueEvent(progress, "change", (v) => {
    let idx = 0;
    project.comments.forEach((c, i) => {
      if (v >= c.at) idx = i;
    });
    setActive((prev) => (prev === idx ? prev : idx));
  });

  const image = (
    <Image
      src={project.fullPage}
      alt={project.fullPageAlt}
      width={1000}
      height={3281}
      sizes="(min-width: 1024px) 660px, 100vw"
      className={linked ? "block h-auto w-full" : undefined}
    />
  );

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${project.name}, ${project.host}. Opens in a new tab.`}
      className="site-preview-trigger group block"
    >
      <div className="relative overflow-hidden rounded-[4px] border border-line-strong bg-card shadow-[0_32px_64px_-32px_rgba(18,19,23,0.35)]">
        {/* Chrome bar */}
        <div className="flex items-center gap-3 border-b border-line bg-gutter px-3.5 py-2.5">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-line-strong" />
            <span className="h-2 w-2 rounded-full bg-line-strong" />
            <span className="h-2 w-2 rounded-full bg-line-strong" />
          </span>
          <span className="flex-1 truncate rounded-[2px] border border-line bg-card px-2.5 py-0.5 font-mono text-[11px] text-text-muted">
            {project.host}
          </span>
          {linked ? (
            <span className="font-mono text-[10px] text-text-muted uppercase tnum" aria-hidden="true">
              Scroll / <motion.span className="text-ins">{readout}</motion.span>
            </span>
          ) : (
            <span
              className="hidden font-mono text-[10px] text-text-muted uppercase transition-colors duration-300 group-hover:text-ins lg:inline"
              aria-hidden="true"
            >
              Hover to scroll
            </span>
          )}
        </div>

        {/* The real page, top to bottom */}
        <div className={`site-preview ${linked ? "h-[calc(100svh-15rem)] min-h-[22rem]" : "aspect-[16/10]"}`}>
          {linked ? (
            <motion.div className="absolute inset-x-0 top-0" style={{ y }}>
              {image}
            </motion.div>
          ) : (
            image
          )}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[rgba(18,19,23,0.12)] to-transparent"
            aria-hidden="true"
          />

          {/* Review comment pinned to the part of the page now in the frame */}
          {linked && (
            <div
              className={`pointer-events-none absolute bottom-5 w-64 ${flipped ? "left-5" : "right-5"}`}
              aria-hidden="true"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Comment meta={`Review ${active + 1} / ${project.comments.length}`}>
                    {project.comments[active].text}
                  </Comment>
                </motion.div>
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>

      {/* Caption line */}
      <div className="mt-3 flex items-center justify-between font-mono text-[11px] text-text-muted uppercase">
        <span>Full page / captured Sep 2026</span>
        <span className="flex items-center gap-1.5 text-ins">
          Visit <span className="btn-arrow">→</span>
        </span>
      </div>
    </a>
  );
}

/*
  Scroll linking only on wide screens and only when motion is allowed. The
  first render always matches the server (unlinked); the media query is read
  after mount.
*/
function useLinked() {
  const still = useStill();
  const [wide, setWide] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const update = () => setWide(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  return wide && !still;
}

function Exhibit({ project, index }: { project: Project; index: number }) {
  const flipped = index % 2 === 1;
  const ref = useRef<HTMLElement>(null);
  const linked = useLinked();
  // Progress runs from the frame pinning near the top to the article's end.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 96px", "end end"] });

  return (
    <article
      ref={ref}
      className={`relative grid items-start gap-10 lg:grid-cols-12 lg:gap-14 ${
        linked ? "lg:min-h-[calc(100vh+36rem)]" : ""
      }`}
    >
      {/* The frame column runs the full height of the article so the frame can stay pinned */}
      <div className={`relative lg:col-span-7 lg:self-stretch ${flipped ? "lg:order-2" : ""}`}>
        <div className={linked ? "lg:sticky lg:top-24" : ""}>
          <FadeUp y={28}>
            <BrowserFrame project={project} progress={scrollYProgress} linked={linked} flipped={flipped} />
          </FadeUp>
        </div>
      </div>

      {/* When linked, the copy pins beside the frame too: the exhibit holds still and only the client's page moves */}
      <div className={`relative lg:col-span-5 lg:self-stretch ${flipped ? "lg:order-1" : ""}`}>
        <div className={linked ? "lg:sticky lg:top-24" : ""}>
          <FadeUp delay={0.1}>
            {/* Ghost exhibit letter sits in flow beside the label, so it can't collide with the intro */}
            <div className="flex items-end gap-5">
              <span
                aria-hidden="true"
                className="ghost select-none font-display text-[4.5rem] leading-[0.8] font-bold lg:text-[6rem]"
              >
                {project.exhibit}
              </span>
              <p className="kicker flex flex-1 items-center gap-3 pb-1 text-text-muted">
                <span className="font-medium text-ins tnum">2.{index + 1}</span>
                <span className="text-line-strong" aria-hidden="true">/</span>
                Exhibit {project.exhibit}
                <span className="h-px flex-1 bg-line" aria-hidden="true" />
              </p>
            </div>
            <h3 className="font-display mt-5 text-3xl font-bold tracking-tight lg:text-[2.35rem] lg:leading-[1.08]">
              {project.name}
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-body-muted">{project.description}</p>
          </FadeUp>

          {/* Review notes as a list where the frame isn't scroll-linked (phones, reduced motion) */}
          {!linked && (
            <FadeUp delay={0.15} className="mt-6">
              <ul className="flex flex-col gap-2">
                {project.comments.map((c) => (
                  <li key={c.text} className="flex gap-2.5 text-[13.5px] leading-snug text-body-muted">
                    <span className="font-mono text-ins" aria-hidden="true">
                      +
                    </span>
                    {c.text}
                  </li>
                ))}
              </ul>
            </FadeUp>
          )}

          {/* Lighthouse, mobile */}
          <FadeUp delay={0.2} className="mt-8 border-t border-line pt-6">
            <p className="kicker text-[10px] text-text-muted">Lighthouse / mobile, Sep 2026</p>
            <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-4 sm:gap-x-2">
              {project.lighthouse.map((score, j) => (
                <Gauge key={gaugeLabels[j]} label={gaugeLabels[j]} score={score} delay={j * 0.12} />
              ))}
            </div>
          </FadeUp>

          {/* Data strip */}
          <FadeUp delay={0.25} className="mt-6">
            <dl className="editor flex flex-wrap gap-x-6 gap-y-2 rounded-[3px] bg-data-bg px-5 py-3.5 font-mono text-[11px] text-data-ink">
              {project.data.map(([label, value]) => (
                <div key={label} className="flex gap-2">
                  <dt className="uppercase">{label} /</dt>
                  <dd className="font-medium text-data-hi">{value}</dd>
                </div>
              ))}
            </dl>
          </FadeUp>
        </div>
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <section
      id="work"
      className="section-y relative scroll-mt-24 overflow-x-clip px-6"
      aria-label="Selected client work"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <FadeUp>
            <Clause num="2">Websites</Clause>
          </FadeUp>
          <SplitLines
            className="font-display mt-5 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
            lines={["Selected client work"]}
          />
          <FadeUp delay={0.15}>
            <p className="mt-5 text-lg leading-relaxed text-body-muted">
              These are websites I&apos;ve rebuilt and still maintain.
            </p>
          </FadeUp>
        </div>

        <div className="mt-20 flex flex-col gap-24 lg:gap-32">
          {projects.map((project, i) => (
            <Exhibit key={project.host} project={project} index={i} />
          ))}
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
