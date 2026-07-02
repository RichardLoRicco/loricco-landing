"use client";

import { motion } from "motion/react";

const services = [
  {
    number: "01",
    verb: "Build",
    title: "Websites & Software",
    description:
      "Fast, modern websites for businesses that want to be found — structured so search engines rank them and AI assistants like ChatGPT recommend them. When you need more than a site, we build custom web apps too.",
    offerings: [
      "Web design & development",
      "SEO & site structure best practices",
      "AI discoverability (AEO)",
      "Custom web apps",
    ],
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
        {/* Browser window icon */}
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <line x1="2" y1="9" x2="22" y2="9" />
        <path d="M5.5 6.5h.01" />
        <path d="M8.5 6.5h.01" />
        <path d="M10 17l3-5 3 5" opacity="0.6" />
      </svg>
    ),
  },
  {
    number: "02",
    verb: "Integrate",
    title: "AI Consulting & Integration",
    description:
      "We help companies weave AI into their products, websites, and internal workflows — not as a gimmick, but as a real multiplier. From intelligent features to automated pipelines, we build AI that actually ships.",
    offerings: [
      "AI strategy & roadmaps",
      "AI-powered product features",
      "Workflow & pipeline automation",
      "Agents, RAG & search systems",
    ],
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
    number: "03",
    verb: "Advise",
    title: "Engineering & Business Consulting",
    description:
      "Engineering strategy and business strategy from one advisor — a software engineer with an MBA and JD who has consulted for the Connecticut Small Business Development Center. Plus hands-on AI training for teams ready to use it.",
    offerings: [
      "Architecture & code reviews",
      "Pitch decks, projections & competitive analysis",
      "Startup & small business strategy",
      "AI workshops & team training",
    ],
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
        {/* Compass icon */}
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 px-6 py-32" aria-label="Services">
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
            What we do
          </span>
          <h2 className="font-display mt-3 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
            Build. Integrate.{" "}
            <span className="text-cream-gradient">Advise.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary">
            Websites, AI, and strategy for startups and small businesses —
            built with the same craft we put into our own apps.
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

              {/* Icon + verb row */}
              <div className="relative mb-6 flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border-light bg-surface-elevated text-cream transition-colors duration-300 group-hover:border-cream/20">
                  {service.icon}
                </div>
                <span className="font-display text-xs font-bold tracking-widest text-cream/40 uppercase">
                  {service.number} — {service.verb}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display relative text-xl font-semibold tracking-tight">
                {service.title}
              </h3>

              {/* Description */}
              <p className="relative mt-3 text-sm leading-relaxed text-text-secondary">
                {service.description}
              </p>

              {/* Offerings */}
              <ul className="relative mt-6 flex flex-1 flex-col gap-2.5">
                {service.offerings.map((offering) => (
                  <li
                    key={offering}
                    className="flex items-start gap-2.5 text-sm text-text-secondary"
                  >
                    <span
                      className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-cream/50"
                      aria-hidden="true"
                    />
                    {offering}
                  </li>
                ))}
              </ul>

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
            Tell us about your project
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
            Most projects start with a short conversation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
