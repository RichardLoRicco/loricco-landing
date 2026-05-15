"use client";

import { motion } from "motion/react";

const services = [
  {
    number: "01",
    title: "AI Integration",
    description:
      "We help companies weave AI into their products, websites, and internal workflows — not as a gimmick, but as a real multiplier. From intelligent features to automated pipelines, we build AI that actually ships.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {/* Brain / circuit icon */}
        <path d="M12 2a4 4 0 0 1 4 4v1a3 3 0 0 1 3 3v1a3 3 0 0 1-1 2.24V16a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4v-2.76A3 3 0 0 1 5 11v-1a3 3 0 0 1 3-3V6a4 4 0 0 1 4-4z" />
        <path d="M9 10h.01" />
        <path d="M15 10h.01" />
        <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
        <path d="M12 2v2" />
        <path d="M8 6V4.5" />
        <path d="M16 6V4.5" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Software Engineering",
    description:
      "Architecture reviews, code quality audits, and technical strategy for teams that want to build things right. We bring the same craft-first mindset from our apps to your engineering challenges.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {/* Code / architecture icon */}
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="12" y1="2" x2="12" y2="22" opacity="0.3" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "AI Education & Training",
    description:
      "Hands-on workshops and training for teams ready to understand what AI can actually do — and what it can't. We cut through the noise and teach practical skills your people can use today.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {/* Lightbulb icon */}
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" />
        <line x1="12" y1="9" x2="12" y2="12" />
        <line x1="10" y1="11" x2="14" y2="11" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 px-6 py-32" aria-label="Consulting services">
      {/* Divider line */}
      <div className="mx-auto mb-20 max-w-6xl border-t border-border-light" />

      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-2xl"
        >
          <span className="text-xs font-medium tracking-widest text-text-muted uppercase">
            Services
          </span>
          <h2 className="font-display mt-3 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
            Beyond apps,{" "}
            <span className="text-cream-gradient">we consult.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary">
            The same engineering rigor and design thinking behind our apps —
            applied to your team&apos;s toughest problems. AI strategy,
            architecture, and education for companies that build.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative flex flex-col rounded-2xl border border-border-light p-8 transition-all duration-500 hover:border-border hover:bg-surface"
            >
              {/* Subtle cream glow on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(ellipse at top, rgba(232, 220, 200, 0.03) 0%, transparent 70%)",
                }}
              />

              {/* Icon + number row */}
              <div className="relative mb-6 flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border-light bg-surface-elevated text-cream transition-colors duration-300 group-hover:border-cream/20">
                  {service.icon}
                </div>
                <span className="font-display text-xs font-bold text-cream/40">
                  {service.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display relative text-xl font-semibold tracking-tight">
                {service.title}
              </h3>

              {/* Description */}
              <p className="relative mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
                {service.description}
              </p>

              {/* Subtle bottom accent line on hover */}
              <div className="relative mt-8 overflow-hidden rounded-full">
                <div className="h-px w-full bg-border-light" />
                <div className="absolute inset-y-0 left-0 h-px w-0 bg-cream/30 transition-all duration-700 group-hover:w-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-medium text-cream transition-colors duration-300 hover:text-foreground"
          >
            Interested in working together?
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
          <p className="mt-2 text-xs text-text-muted">
            Let&apos;s start a conversation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
