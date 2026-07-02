"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <section aria-label="Introduction" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Radial glow — warm cream center */}
        <div
          className="animate-pulse-soft absolute left-1/2 top-1/3 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(232, 220, 200, 0.06) 0%, transparent 70%)",
          }}
        />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(232,220,200,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(232,220,200,0.3) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl text-center">
        {/* Studio badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cream" />
          <span className="text-xs font-medium tracking-widest text-text-muted uppercase">
            Software Studio &amp; Consultancy
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-7xl"
        >
          LoRicco{" "}
          <span className="text-cream-gradient">&</span>{" "}
          Co
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-text-secondary sm:text-xl"
        >
          We ship our own apps — and build websites, AI, and
          <br className="hidden sm:block" />
          {" "}strategy for businesses that want the same craft.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <a
            href="#services"
            className="group inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:bg-foreground hover:shadow-[0_0_30px_rgba(232,220,200,0.15)]"
          >
            Work with us
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a
            href="#apps"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-text-secondary transition-all duration-300 hover:border-cream/40 hover:text-foreground"
          >
            See our apps
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="h-8 w-px bg-gradient-to-b from-transparent to-text-muted" />
        </div>
      </motion.div>
    </section>
  );
}
