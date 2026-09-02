"use client";

import { motion } from "motion/react";

const steps = [
  {
    id: "01",
    verb: "Diagnose",
    detail:
      "Most engagements start with a written review of what's there: a technical memo, a website findings report, a workflow audit, or a read on a business plan.",
  },
  {
    id: "02",
    verb: "Clarify",
    detail:
      "I explain what I found and what I'd do about it, in plain English and ranked by impact. The recommendation goes in writing so you can act on it or get a second opinion.",
  },
  {
    id: "03",
    verb: "Build",
    detail:
      "Then I do the work: the memo, the website or the agent, the deck, or the training session.",
  },
  {
    id: "04",
    verb: "Improve",
    detail:
      "For ongoing work, I monitor the system, handle updates, and revisit it when the underlying needs change.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative scroll-mt-24 bg-data-bg px-6 py-24"
      aria-label="How I work"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-wrap items-end justify-between gap-6"
        >
          <div>
            <p className="kicker text-data-ink">How I work</p>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-data-hi sm:text-4xl">
              Diagnose <span className="text-cobalt-bright">→</span> Clarify{" "}
              <span className="text-cobalt-bright">→</span> Build{" "}
              <span className="text-cobalt-bright">→</span> Improve
            </h2>
          </div>
          <p className="max-w-xs font-mono text-[12px] leading-relaxed text-data-ink">
            The same four steps apply whether the engagement is a website, a
            training, a case, or a business plan.
          </p>
        </motion.div>

        <div className="grid gap-px overflow-hidden rounded-[4px] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group bg-data-bg p-7 transition-colors duration-300 hover:bg-[#221f1a]"
            >
              <p className="font-mono text-[12px] text-cobalt-bright">
                {step.id} /
              </p>
              <h3 className="font-display mt-3 text-xl font-semibold text-data-hi">
                {step.verb}
              </h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-data-ink">
                {step.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
