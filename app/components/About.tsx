"use client";

import Image from "next/image";
import { motion } from "motion/react";

const principles = [
  {
    id: "01",
    title: "Preserve what has value",
    description:
      "A redesign should never cost you the search equity you spent years earning. URLs, rankings, and content history are assets — I treat them like an attorney treats the record.",
  },
  {
    id: "02",
    title: "Plain English, no hype",
    description:
      "You'll get straight answers about what's broken, what it costs to fix, and what AI can and can't do for you. No jargon, no upsell theater.",
  },
  {
    id: "03",
    title: "You own everything",
    description:
      "Domain, code, content, analytics, accounts — all yours from day one. If we part ways, you keep a working system, not a hostage.",
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
              Three careers.
              <br />
              <span className="editorial font-medium">One</span> desk.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-body-muted">
              Most business websites fail for more than one reason — unclear
              positioning, stale content, weak technical structure, missing
              trust signals. Fixing that takes more than a designer. I look at
              the whole system: how clients decide, what search engines and AI
              tools understand, and what you can actually maintain.
            </p>

            {/* Founder */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="mt-10 flex items-start gap-5 border-t border-line pt-8"
            >
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-[4px] border border-line-strong">
                <Image
                  src="/founder.png"
                  alt="Richard T. LoRicco"
                  width={56}
                  height={56}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="font-display text-[15px] font-bold">
                  Richard T. LoRicco
                </p>
                <p className="mt-0.5 font-mono text-[11px] tracking-[0.1em] text-cobalt uppercase">
                  Attorney (LL.M., J.D., MBA) · Software Engineer
                </p>
                <p className="mt-2.5 max-w-md text-sm leading-relaxed text-body-muted">
                  Connecticut-admitted attorney and software engineer with a
                  background across law, real estate, finance, and production
                  web and AI systems. Built and shipped full-stack products,
                  open-source tooling, and the studio&apos;s own apps.
                </p>
              </div>
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
