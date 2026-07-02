"use client";

import { motion } from "motion/react";

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-border-light"
        >
          {/* Background glow */}
          <div
            aria-hidden="true"
            className="animate-gradient-shift pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(176,134,48,0.04) 0%, rgba(212,101,42,0.04) 33%, rgba(111,163,171,0.04) 66%, rgba(232,220,200,0.04) 100%)",
              backgroundSize: "200% 200%",
            }}
          />

          <div className="relative px-8 py-16 text-center sm:px-16 sm:py-24">
            <span className="text-xs font-medium tracking-widest text-text-muted uppercase">
              Get in touch
            </span>
            <h2 className="font-display mx-auto mt-4 max-w-lg text-3xl font-bold tracking-tight sm:text-5xl">
              Have a project?
              <br />
              <span className="text-cream-gradient">Let&apos;s talk.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-text-secondary">
              Need a website that gets found, help putting AI to work, or a
              second opinion on your product or business? Tell us what
              you&apos;re working on. App feedback and hellos are welcome too.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10"
            >
              <a
                href="mailto:admin@loriccoandco.com"
                className="group inline-flex items-center gap-3 rounded-full bg-cream px-8 py-4 text-sm font-semibold text-background transition-all duration-300 hover:bg-foreground hover:shadow-[0_0_40px_rgba(232,220,200,0.12)]"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                admin@loriccoandco.com
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
