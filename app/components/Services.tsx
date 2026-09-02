"use client";

import { motion } from "motion/react";

const services = [
  {
    section: "§ 01",
    title: "Websites & AI Tools",
    outcome: "You own the site and accounts",
    description:
      "I rebuild outdated websites without throwing away the search rankings they already have. After launch, I can maintain the site, publish content, improve how it appears in Google and AI answers, and build AI tools for intake or routine work. The domain, code, content, and accounts stay in your name.",
    offerings: [
      "Website rebuilds without losing rankings",
      "Ongoing site care and content",
      "Visibility in Google and AI answers",
      "AI tools for intake and routine work",
    ],
  },
  {
    section: "§ 02",
    title: "AI Education & Training",
    outcome: "Staff who use the tools",
    description:
      "Training for lawyers and small-business teams on what AI tools do well, where they fail, and how to use them without creating a compliance problem. The sessions use examples from the systems I build and run every day.",
    offerings: [
      "Law-firm workshops",
      "Small-business sessions",
      "Written workflow guides",
      "Follow-up office hours",
    ],
  },
  {
    section: "§ 03",
    title: "Technical Consulting for Law Firms",
    outcome: "Analysis counsel can use",
    description:
      "When a case turns on technology, I work for the attorney. I read the discovery, interpret carrier and platform records, and explain what the records show in writing. The engagement is structured with work-product protection in mind. I also advise firms on their own technology decisions.",
    offerings: [
      "Digital evidence & discovery analysis",
      "Technical memos for counsel",
      "Questions for opposing experts",
      "Firm technology guidance",
    ],
  },
  {
    section: "§ 04",
    title: "Business & Startup Advisory",
    outcome: "A second opinion",
    description:
      "I advise startups and business owners on pitch decks, financial projections, competitive analysis, go-to-market strategy, and architecture reviews. I read the deck, the contract, and the codebase myself, so the business, legal, and technical questions get answered by the same person.",
    offerings: [
      "Pitch decks & projections",
      "Competitive analysis",
      "Go-to-market strategy",
      "Architecture & code reviews",
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
            What I do
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-body-muted">
            I handle each engagement myself. There is no account manager
            between us and no junior staff doing the work.
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
              className="group grid gap-4 border-t border-line py-10 transition-colors duration-300 last:border-b md:grid-cols-[110px_1fr_260px] md:gap-10"
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

        </div>

        {/* CTA line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-[15px] text-body-muted"
        >
          Some problems cross more than one service. Most engagements start
          with a short call and a written review of where things stand.{" "}
          <a
            href="mailto:admin@loriccoandco.com"
            className="font-medium text-cobalt underline decoration-cobalt/30 underline-offset-4 transition-colors hover:decoration-cobalt"
          >
            Email me
          </a>{" "}
          and we&apos;ll figure it out from there.
        </motion.p>
      </div>
    </section>
  );
}
