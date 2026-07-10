"use client";

import { motion } from "motion/react";

const services = [
  {
    section: "§ 01",
    title: "Website Rebuilds",
    outcome: "Credibility",
    description:
      "Outdated WordPress or Squarespace site into a fast, modern build that makes your practice look like it's run well — because it is. SEO-safe migration included: your URLs, rankings, and search history survive the move.",
    offerings: [
      "Next.js builds",
      "SEO-safe migration",
      "Structured data",
      "Intake paths",
    ],
  },
  {
    section: "§ 02",
    title: "Content & AI-Search Visibility",
    outcome: "Discoverability",
    description:
      "Monthly publishing that gets your firm found — in Google, and in the AI tools your clients now ask first: ChatGPT, Claude, Perplexity, AI Overviews. For law firms, every piece passes attorney-advertising compliance review.",
    offerings: [
      "Blog & social retainers",
      "Local SEO",
      "AEO / GEO",
      "Compliance review",
    ],
  },
  {
    section: "§ 03",
    title: "AI Consulting & Integration",
    outcome: "Ownership",
    description:
      "Practical AI put to work inside your operations — intake, research, documentation, content workflows, internal tools. Straight answers about what AI can do and what it can't, from someone who builds with it daily.",
    offerings: [
      "Workflow automation",
      "AI product features",
      "Agents & RAG systems",
      "Team training",
    ],
  },
  {
    section: "§ 04",
    title: "Startup & Business Advisory",
    outcome: "Intake",
    description:
      "Engineering and business strategy from one advisor who has sat on every side of the table: architecture reviews, pitch decks, projections, competitive analysis, and the legal-adjacent judgment most technical advisors can't offer.",
    offerings: [
      "Architecture & code review",
      "Pitch decks & projections",
      "Go-to-market strategy",
      "Fractional advisory",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-24 px-6 py-28"
      aria-label="Services"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-4 max-w-2xl"
        >
          <p className="kicker rule-label text-text-muted">Services</p>
          <h2 className="font-display mt-5 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
            The work, in four registers.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-body-muted">
            Everything below is delivered by one person — no handoffs, no
            account managers, no junior staff learning on your budget.
          </p>
        </motion.div>

        {/* Ledger rows */}
        <div className="mt-14">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group grid gap-4 border-t border-line py-10 transition-colors duration-300 last:border-b md:grid-cols-[110px_1fr_240px] md:gap-10"
            >
              {/* § number */}
              <div className="font-mono text-sm font-medium text-cobalt">
                {service.section}
              </div>

              {/* Title + description */}
              <div>
                <h3 className="font-display text-2xl font-bold tracking-tight transition-colors duration-300 group-hover:text-cobalt">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-body-muted">
                  {service.description}
                </p>
              </div>

              {/* Outcome + offerings */}
              <div className="md:pt-1">
                <p className="font-mono text-[10px] tracking-[0.16em] text-text-muted uppercase">
                  Outcome —{" "}
                  <span className="text-foreground">{service.outcome}</span>
                </p>
                <ul className="mt-4 flex flex-wrap gap-2 md:flex-col md:gap-2.5">
                  {service.offerings.map((offering) => (
                    <li
                      key={offering}
                      className="flex items-center gap-2.5 font-mono text-[12px] text-body-muted"
                    >
                      <span
                        className="h-1 w-1 shrink-0 bg-cobalt"
                        aria-hidden="true"
                      />
                      {offering}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-[15px] text-body-muted"
        >
          <span className="editorial text-lg text-foreground">
            Not sure which register you need?
          </span>{" "}
          Most engagements start with a short working session and a written
          review of where you stand.{" "}
          <a
            href="mailto:admin@loriccoandco.com"
            className="font-medium text-cobalt underline decoration-cobalt/30 underline-offset-4 transition-colors hover:decoration-cobalt"
          >
            Start there
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
}
