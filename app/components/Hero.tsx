"use client";

import Image from "next/image";
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

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        {/* ── Left: the argument ── */}
        <div>
          {/* Three-discipline line */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="kicker mb-8 text-cobalt"
          >
            Attorney · MBA · Engineer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="font-display text-[2.6rem] leading-[1.05] font-bold tracking-tight sm:text-6xl"
          >
            Technical questions.
            <br />
            <span className="editorial font-medium">Counsel-grade</span> answers.
          </motion.h1>

          {/*
            Kept out of the entrance animation on purpose: this paragraph is the
            LCP element on phones, and a delayed fade was costing ~2s of LCP.
          */}
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-body-muted">
            I&apos;m a Connecticut attorney and software engineer. I rebuild
            and run websites and AI systems for law firms and small businesses,
            train lawyers and their staff on AI, consult with counsel on the
            technology in their cases, and advise startups. You work with me
            directly from the first call to the finished work.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <a
              href="mailto:admin@loriccoandco.com"
              className="rounded-[3px] bg-cobalt px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-cobalt-deep hover:shadow-[0_8px_24px_-8px_rgba(32,56,200,0.5)]"
            >
              Get in touch
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
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-14 flex flex-wrap items-center gap-x-3 gap-y-2"
          >
            {["Websites & AI", "Education", "Case Consulting", "Advisory"].map(
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

        {/* ── Right: the principal. Same exhibit treatment as the OG share card. ── */}
        <motion.figure
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative mx-auto w-full max-w-[280px] lg:max-w-[360px] lg:justify-self-end"
        >
          {/* Backing sheet: one, quiet */}
          <div
            className="absolute inset-0 translate-x-3 translate-y-3 rounded-[4px] border border-line bg-card/60"
            aria-hidden="true"
          />

          <div className="relative overflow-hidden rounded-[4px] border border-line-strong bg-card shadow-[0_24px_48px_-24px_rgba(26,24,20,0.3)]">
            <div className="p-3 pb-0">
              <Image
                src="/portrait-bw.jpg"
                alt="Richard T. LoRicco, principal of LoRicco & Co., in a suit and tie"
                width={800}
                height={1000}
                priority
                sizes="(min-width: 1024px) 360px, 280px"
                className="aspect-[4/5] w-full rounded-[2px] object-cover"
              />
            </div>
            <figcaption className="flex items-baseline justify-between gap-4 px-4 py-3 font-mono text-[11px] tracking-[0.12em] uppercase">
              <span className="text-text-muted">
                Principal / <span className="font-medium text-foreground">R.T. LoRicco</span>
              </span>
              <span className="text-text-muted">New Haven, CT</span>
            </figcaption>
          </div>
        </motion.figure>
      </div>
    </section>
  );
}
