"use client";

import { motion } from "motion/react";

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 px-6 py-28" aria-label="Contact">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[4px] bg-data-bg"
        >
          {/* Faint cobalt blueprint grid on ink */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            aria-hidden="true"
            style={{
              backgroundImage:
                "linear-gradient(rgba(143,160,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(143,160,255,0.6) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />

          <div className="relative grid gap-10 px-8 py-14 sm:px-14 sm:py-18 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="kicker text-data-ink">§ Final / Get in touch</p>
              <h2 className="font-display mt-4 max-w-xl text-3xl font-bold leading-[1.1] tracking-tight text-data-hi sm:text-5xl">
                Start with the{" "}
                <span className="editorial font-medium text-cobalt-bright">
                  evidence.
                </span>
              </h2>
              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-data-ink">
                Tell me about your firm, your startup, or your site. Most
                engagements begin with a short working session and a written
                review of where you stand. No pitch deck, no pressure.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-5">
                <a
                  href="mailto:admin@loriccoandco.com"
                  className="rounded-[3px] bg-cobalt px-7 py-4 text-sm font-semibold text-white transition-all duration-200 hover:bg-cobalt-bright hover:text-data-bg"
                >
                  admin@loriccoandco.com
                </a>
                <span className="font-mono text-[12px] text-data-ink">
                  REPLIES / within one business day
                </span>
              </div>
            </div>

            {/* Mono manifest */}
            <div className="hidden border-l border-white/10 pl-10 font-mono text-[12px] leading-[2.3] text-data-ink lg:block" aria-hidden="true">
              <p className="text-data-hi">LCO / ENGAGEMENT MANIFEST</p>
              <p>PRINCIPAL / R.T. LoRicco</p>
              <p>DISCIPLINES / JD · MBA · SWE</p>
              <p>BASE / Connecticut, USA</p>
              <p>SEQUENCE / Diagnose → Improve</p>
              <p>
                STATUS /{" "}
                <span className="text-cobalt-bright">accepting clients</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
