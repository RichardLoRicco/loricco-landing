"use client";

import { motion } from "motion/react";

/* Redaction bar: reads as blacked-out text, announces nothing to screen readers */
function Redacted({ width }: { width: number }) {
  return (
    <span
      aria-hidden="true"
      className="inline-block h-[0.72em] translate-y-[0.06em] rounded-[1px] bg-foreground align-baseline"
      style={{ width: `${width}px` }}
    />
  );
}

export default function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="relative overflow-hidden px-6 pt-36 pb-24 sm:pt-44 sm:pb-32"
    >
      {/* Faint blueprint grid, cobalt-tinted */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(32,56,200,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(32,56,200,0.5) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 80%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 80%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.12fr_0.88fr]">
        {/* ── Left: the argument ── */}
        <div>
          {/* Three-discipline line */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="kicker mb-8 text-cobalt"
          >
            Attorney · MBA · Engineer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="font-display text-[2.6rem] leading-[1.05] font-bold tracking-tight sm:text-6xl"
          >
            Technical questions.
            <br />
            <span className="editorial font-medium">Counsel-grade</span> answers.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.4 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-body-muted"
          >
            I consult with law firms on the technology inside their cases,
            build and run websites and AI systems for firms and small
            businesses, and teach lawyers and business teams how to put AI to
            work. I do the thinking and the work myself.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.55 }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <a
              href="mailto:admin@loriccoandco.com"
              className="rounded-[3px] bg-cobalt px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-cobalt-deep hover:shadow-[0_8px_24px_-8px_rgba(32,56,200,0.5)]"
            >
              Book a working session
            </a>
            <a
              href="#services"
              className="group font-mono text-[13px] text-foreground transition-colors duration-200 hover:text-cobalt"
            >
              See the practice{" "}
              <span className="inline-block transition-transform duration-200 group-hover:translate-y-0.5">
                ↓
              </span>
            </a>
          </motion.div>

          {/* Practice-area labels */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="mt-14 flex flex-wrap items-center gap-x-3 gap-y-2"
          >
            {["Case Consulting", "Websites & AI", "Education", "Advisory"].map(
              (area, i) => (
                <span key={area} className="flex items-center gap-3">
                  {i > 0 && (
                    <span className="h-px w-4 bg-line-strong" aria-hidden="true" />
                  )}
                  <span className="font-mono text-[11px] tracking-[0.14em] text-text-muted uppercase">
                    {area}
                  </span>
                </span>
              )
            )}
          </motion.div>
        </div>

        {/* ── Right: the artifact — a matter file, three deliverables deep ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.5 }}
          className="relative hidden lg:block"
          aria-hidden="true"
        >
          <div className="relative">
          {/* Backing sheets: the other two deliverables in the file */}
          <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-[4px] border border-line bg-card/50">
            <p className="absolute right-3 bottom-1 font-mono text-[9px] tracking-[0.14em] text-text-muted uppercase">
              03 / Training Syllabus
            </p>
          </div>
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[4px] border border-line bg-card/70">
            <p className="absolute left-4 bottom-1 font-mono text-[9px] tracking-[0.14em] text-text-muted uppercase">
              02 / Website Findings Review
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[4px] border border-line-strong bg-card shadow-[0_24px_48px_-24px_rgba(26,24,20,0.25)]">
            {/* Work-product stamp */}
            <div className="absolute top-4 right-5 -rotate-6 rounded-[2px] border-[1.5px] border-crit/70 px-2.5 py-1">
              <p className="font-mono text-[9px] font-medium tracking-[0.18em] text-crit uppercase">
                Attorney Work Product
              </p>
            </div>

            {/* Doc header */}
            <div className="border-b border-line px-6 pt-5 pb-4">
              <p className="font-mono text-[10px] tracking-[0.18em] text-text-muted uppercase">
                01 / Technical Analysis Memo
              </p>
              <p className="font-display mt-1.5 text-lg font-semibold tracking-tight">
                State v. <Redacted width={104} />
              </p>
              <p className="mt-1.5 font-mono text-[9px] tracking-[0.1em] text-text-muted uppercase">
                Privileged &amp; Confidential · Prepared for defense counsel
              </p>
            </div>

            {/* Memo table of contents */}
            <div className="space-y-2.5 px-6 pt-5 pb-4">
              {[
                ["§ 01", "What the State's records contain"],
                ["§ 04", "What the records actually show"],
                ["§ 07", "Questions for the opposing expert"],
              ].map(([num, title]) => (
                <div key={num} className="flex items-baseline gap-4">
                  <span className="font-mono text-[12px] font-medium text-cobalt">
                    {num}
                  </span>
                  <span className="font-display text-[14px] font-semibold">
                    {title}
                  </span>
                </div>
              ))}
            </div>

            <p className="px-6 pb-5 text-[13px] leading-relaxed text-body-muted">
              <span className="editorial text-[15px] text-foreground">
                The records don&apos;t support the timeline as presented.
              </span>{" "}
              I decoded the carrier logs, rebuilt the timeline, and explained
              the technology in terms counsel can use.
            </p>

            {/* Engineering-voice data strip */}
            <div className="flex flex-wrap gap-x-7 gap-y-1 bg-data-bg px-6 py-3.5 font-mono text-[11px] text-data-ink">
              <span>
                DISCOVERY REVIEWED <b className="font-medium text-data-hi">312 pp</b>
              </span>
              <span>
                SOURCES DECODED <b className="font-medium text-data-hi">6</b>
              </span>
              <span>
                QUESTIONS FOR CROSS <b className="font-medium text-data-hi">9</b>
              </span>
            </div>
          </div>
          </div>

          {/* Margin annotation */}
          <p className="relative mt-12 pl-1 font-mono text-[11px] text-text-muted">
            ↑ most engagements start with a written review you can act on
          </p>
        </motion.div>
      </div>
    </section>
  );
}
