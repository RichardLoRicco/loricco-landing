"use client";

import { motion } from "motion/react";
import { SplitLines } from "./ui/Reveal";
import { Clause, DISCIPLINES, type Discipline } from "./ui/Marks";
import { counts, spell } from "../lib/apps";

const principles = [
  {
    id: "01",
    title: "Client matters stay private",
    description:
      "Consulting work for counsel is structured with privilege and work-product protection in mind. I don't turn those matters into marketing material or publish case studies about them.",
  },
  {
    id: "02",
    title: "Straight answers",
    description:
      "I'll tell you plainly what I find and what it will take to fix, including when the answer is that you don't need me.",
  },
  {
    id: "03",
    title: "Keep what's working",
    description:
      "A rebuild shouldn't cost you the search rankings you spent years earning. I inventory your URLs, rankings, and content before anything changes, and the migration is planned around keeping them.",
  },
  {
    id: "04",
    title: "You own everything",
    description:
      "The domain, code, content, analytics, and accounts are set up in your name from the first day. If we part ways, you keep a working system and everything needed to run it.",
  },
];

const credentials: { d: Discipline; facts: string[] }[] = [
  {
    d: "law",
    facts: [
      "Connecticut-admitted attorney, LL.M. and J.D.",
      "Legal research and technical consulting for other attorneys",
      "Compliance review of law-firm content",
    ],
  },
  {
    d: "biz",
    facts: [
      "MBA",
      "Startup consulting: pitch decks, projections, go-to-market",
      "Websites built around intake and search visibility",
    ],
  },
  {
    d: "eng",
    facts: [
      "Production web and AI systems",
      `${spell(counts.live)[0].toUpperCase() + spell(counts.live).slice(1)} apps live on the App Store`,
      "Open-source tools",
    ],
  },
];

export default function About() {
  return (
    <section id="about" className="section-y relative scroll-mt-24 px-6" aria-label="About">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* Left: statement */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Clause num="4">About</Clause>
            <SplitLines
              className="font-display mt-5 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
              lines={["Richard T.", "LoRicco"]}
            />
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-body-muted">
              I practice law, consult for startups, and build production
              software. The services on this page grew
              out of problems people kept bringing me, including firm websites
              that had stopped producing new business, AI tools that teams had
              bought but never used, cases that turned on carrier records, and
              business plans that needed an outside assessment.
            </p>
          </motion.div>

          {/* Right: principles */}
          <div className="flex flex-col justify-center gap-0">
            {principles.map((principle, i) => (
              <motion.div
                key={principle.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="ledger-row group border-t border-line py-7 last:border-b"
              >
                <div className="flex items-baseline gap-4">
                  <span className="shrink-0 font-mono text-[12px] whitespace-nowrap text-foreground tnum">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold tracking-tight transition-colors duration-300 group-hover:text-accent">
                      {principle.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-body-muted">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* One practice, three disciplines: only facts stated elsewhere on the page */}
        <div className="mt-20 grid gap-px bg-line sm:grid-cols-3">
          {credentials.map((c, i) => (
            <motion.div
              key={c.d}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-background pb-8 sm:px-8 sm:first:pl-0 sm:last:pr-0"
            >
              <span aria-hidden="true" className={`block h-1 w-full ${DISCIPLINES[c.d].fill}`} />
              <h3 className="font-display mt-6 text-2xl font-bold tracking-tight">{DISCIPLINES[c.d].label}</h3>
              <ul className="mt-4 space-y-2.5 text-[15px] leading-snug text-body-muted">
                {c.facts.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span aria-hidden="true" className="mt-[0.55em] h-1 w-1 shrink-0 bg-foreground" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
