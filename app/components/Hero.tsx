"use client";

import { motion } from "motion/react";

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

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
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
            Old-line credibility.
            <br />
            <span className="editorial font-medium">New-stack</span> execution.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.4 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-body-muted"
          >
            I rebuild outdated websites, run content and AI-search visibility,
            and put practical AI to work for law firms, professional practices,
            and startups. One principal does the thinking and the work.
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
              See the services{" "}
              <span className="inline-block transition-transform duration-200 group-hover:translate-y-0.5">
                ↓
              </span>
            </a>
          </motion.div>

          {/* Outcome labels */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="mt-14 flex flex-wrap items-center gap-x-3 gap-y-2"
          >
            {["Credibility", "Discoverability", "Intake", "Ownership"].map(
              (outcome, i) => (
                <span key={outcome} className="flex items-center gap-3">
                  {i > 0 && (
                    <span className="h-px w-4 bg-line-strong" aria-hidden="true" />
                  )}
                  <span className="font-mono text-[11px] tracking-[0.14em] text-text-muted uppercase">
                    {outcome}
                  </span>
                </span>
              )
            )}
          </motion.div>
        </div>

        {/* ── Right: the artifact — a findings document, the thing clients buy ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.5 }}
          className="relative hidden lg:block"
          aria-hidden="true"
        >
          {/* Offset backing sheet */}
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[4px] border border-line bg-card/60" />

          <div className="relative overflow-hidden rounded-[4px] border border-line-strong bg-card shadow-[0_24px_48px_-24px_rgba(26,24,20,0.25)]">
            {/* Doc header */}
            <div className="flex items-start justify-between border-b border-line px-6 pt-5 pb-4">
              <div>
                <p className="font-mono text-[10px] tracking-[0.18em] text-text-muted uppercase">
                  Website Findings Review
                </p>
                <p className="font-display mt-1.5 text-lg font-semibold tracking-tight">
                  Your Firm, LLC
                </p>
              </div>
              <div className="text-right font-mono text-[10px] leading-[1.9] text-text-muted">
                LCO / REVIEW
                <br />
                <span className="text-foreground">LoRicco &amp; Co.</span>
              </div>
            </div>

            {/* Section line */}
            <div className="flex items-baseline gap-4 px-6 pt-5">
              <span className="font-mono text-[13px] font-medium text-cobalt">
                § 01
              </span>
              <span className="font-display text-[15px] font-semibold">
                Executive Summary
              </span>
            </div>

            <p className="px-6 pt-2.5 pb-5 text-[13px] leading-relaxed text-body-muted">
              <span className="editorial text-[15px] text-foreground">
                The site is losing work it should be winning.
              </span>{" "}
              Twelve findings follow, ranked by impact on inquiries — three need
              attention before anything else matters.
            </p>

            {/* Diagnostic chips */}
            <div className="flex flex-wrap gap-2 px-6 pb-6">
              <span className="rounded-[2px] border border-crit bg-crit-wash px-2.5 py-1 font-mono text-[10px] tracking-[0.06em] text-crit">
                3 CRITICAL
              </span>
              <span className="rounded-[2px] border border-warn bg-warn-wash px-2.5 py-1 font-mono text-[10px] tracking-[0.06em] text-warn">
                5 MODERATE
              </span>
              <span className="rounded-[2px] border border-good bg-good-wash px-2.5 py-1 font-mono text-[10px] tracking-[0.06em] text-good">
                4 SOUND
              </span>
            </div>

            {/* Engineering-voice data strip */}
            <div className="flex flex-wrap gap-x-7 gap-y-1 bg-data-bg px-6 py-3.5 font-mono text-[11px] text-data-ink">
              <span>
                MOBILE SCORE <b className="font-medium text-data-hi">41/100</b>
              </span>
              <span>
                INDEXED PAGES <b className="font-medium text-data-hi">7</b>
              </span>
              <span>
                AI CITATIONS <b className="font-medium text-data-hi">0</b>
              </span>
            </div>
          </div>

          {/* Margin annotation */}
          <p className="relative mt-7 pl-1 font-mono text-[11px] text-text-muted">
            ↑ every engagement starts with evidence, not a pitch
          </p>
        </motion.div>
      </div>
    </section>
  );
}
