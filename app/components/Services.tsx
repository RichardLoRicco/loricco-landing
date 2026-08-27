"use client";

import { motion } from "motion/react";

const services = [
  {
    section: "§ 01",
    title: "Technical Consulting for Law Firms",
    outcome: "Command of the record",
    description:
      "When a case turns on technology, I work for counsel: reading the discovery, decoding carrier and platform records, and writing plain-English analysis you can build a strategy on. Retained by the attorney and structured to protect work product. The same desk handles the firm's own technology decisions.",
    offerings: [
      "Digital evidence & discovery analysis",
      "Technical memos for counsel",
      "Questions for opposing experts",
      "Firm technology decisions",
    ],
  },
  {
    section: "§ 02",
    title: "Websites & AI Systems",
    outcome: "A system that compounds",
    description:
      "Outdated site into a fast, credible build that preserves your search equity, then kept working: publishing with compliance review, SEO and AI-search visibility, and AI agents wired into intake and operations. You own the domain, the code, the content, and the accounts from day one.",
    offerings: [
      "Next.js rebuilds, SEO-safe migration",
      "Care, content & visibility retainers",
      "AI-search visibility (AEO / GEO)",
      "AI agents, built & operated",
    ],
  },
  {
    section: "§ 03",
    title: "AI Education & Training",
    outcome: "Force multiplication",
    description:
      "Hands-on training for lawyers and small-business teams: what the tools actually do, where they fail, and how to fold them into real work without compliance surprises. Taught by someone who builds with them daily, not from a slide deck.",
    offerings: [
      "Law-firm workshops",
      "Small-business sessions",
      "Workflow playbooks",
      "Follow-up office hours",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-24 px-6 py-28"
      aria-label="The practice"
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
          <p className="kicker rule-label text-text-muted">The Practice</p>
          <h2 className="font-display mt-5 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
            Three parts. One desk.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-body-muted">
            Everything below is delivered by one person. No handoffs, no
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
              className="group grid gap-4 border-t border-line py-10 transition-colors duration-300 md:grid-cols-[110px_1fr_260px] md:gap-10"
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
                  Outcome /{" "}
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

          {/* The quiet fourth row: advisory */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: 0.24 }}
            className="grid gap-4 border-t border-b border-line py-7 md:grid-cols-[110px_1fr_260px] md:gap-10"
          >
            <div className="editorial text-lg text-text-muted">&amp;</div>
            <div>
              <h3 className="font-display text-lg font-bold tracking-tight text-body-muted">
                Business &amp; Startup Advisory
              </h3>
              <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-text-muted">
                A smaller line, kept deliberately small: pitch decks,
                projections, competitive analysis, architecture reviews, and
                advising owners on using AI as a force multiplier. Where it
                fits, it folds into the work above.
              </p>
            </div>
            <div className="md:pt-1">
              <p className="font-mono text-[10px] tracking-[0.16em] text-text-muted uppercase">
                Outcome / <span className="text-body-muted">Leverage</span>
              </p>
            </div>
          </motion.article>
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
            Not sure which part you need?
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
