"use client";

import { motion } from "motion/react";

const principles = [
  {
    id: "01",
    title: "Client matters stay private",
    description:
      "Consulting work for counsel is structured with privilege and work-product protection in mind, and I don't turn client matters into marketing material. That's why you won't find case studies on this page.",
  },
  {
    id: "02",
    title: "Straight answers",
    description:
      "You'll get a direct answer on what the records show, what's broken, what it costs to fix, and what AI can and can't do for you, including when the answer is that you don't need me.",
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

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 px-6 py-28" aria-label="About">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* Left — Statement */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="kicker rule-label text-text-muted">About · The Principal</p>
            <h2 className="font-display mt-5 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
              About the
              <br />
              <span className="editorial font-medium">principal</span>
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-body-muted">
              I practiced law, worked in real estate and finance, and then
              moved into building production software. The four service
              lines on this page are the four kinds of problems I kept
              getting asked to solve: a firm website that stopped
              bringing in work, AI tools a team bought and never used, a case
              that turned on carrier records, and a business plan that needed
              a straight read.
            </p>

            {/* Founder (portrait lives in the hero) */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="mt-10 border-t border-line pt-8"
            >
              <p className="font-display text-[15px] font-bold">
                Richard T. LoRicco
              </p>
              <p className="mt-0.5 font-mono text-[11px] tracking-[0.1em] text-cobalt uppercase">
                Attorney (LL.M., J.D., MBA) · Software Engineer · New Haven, CT
              </p>
              <p className="mt-2.5 max-w-md text-sm leading-relaxed text-body-muted">
                I&apos;m a Connecticut-admitted attorney and software
                engineer. I&apos;ve worked across law, real estate, finance,
                and production web and AI systems, and I&apos;ve shipped
                full-stack products, open-source tools, and the
                studio&apos;s own apps.
              </p>
            </motion.div>
          </motion.div>

          {/* Right — Principles */}
          <div className="flex flex-col justify-center gap-0">
            {principles.map((principle, i) => (
              <motion.div
                key={principle.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="border-t border-line py-7 last:border-b"
              >
                <div className="flex items-baseline gap-4">
                  <span className="shrink-0 font-mono text-[12px] font-medium whitespace-nowrap text-cobalt">
                    {principle.id} /
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold tracking-tight">
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
      </div>
    </section>
  );
}
