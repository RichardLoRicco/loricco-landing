"use client";

import Image from "next/image";
import { motion } from "motion/react";

const developmentApps = [
  {
    name: "BowelBuddy",
    category: "Digestive Health",
    tagline: "Track your gut without making it weird.",
    description:
      "Private bowel movement logging, pattern insights, and doctor-ready context for digestive health.",
    image: "/apps/bowelbuddy/mascot.png",
    imageAlt: "BowelBuddy mascot waving",
    imageClassName: "h-full w-full object-contain p-1",
    color: "#7FA37A",
    colorGlow: "rgba(127, 163, 122, 0.14)",
    details: ["Fast logs", "Pattern view", "Doctor export"],
  },
  {
    name: "Haven",
    category: "Breakup Recovery",
    tagline: "Support for the messy middle.",
    description:
      "Mood-aware recovery support with SOS tools and a guided path through the first hard weeks.",
    image: "/apps/haven/mascot.png",
    imageAlt: "Haven companion mascot",
    imageClassName: "h-full w-full object-contain p-1",
    color: "#B48895",
    colorGlow: "rgba(180, 136, 149, 0.14)",
    details: ["SOS mode", "60-day journey", "Mood-aware prompts"],
  },
  {
    name: "Hark",
    category: "Voice Teleprompter",
    tagline: "Scripts that follow your voice.",
    description:
      "An on-device teleprompter that scrolls with your pace, pauses, and ad-libs.",
    image: "/apps/hark/logo-v2.png",
    imageAlt: "Hark logo mark",
    imageClassName: "h-full w-full object-cover",
    color: "#5EA5E8",
    colorGlow: "rgba(94, 165, 232, 0.16)",
    details: ["Voice follow", "Script library", "On-device audio"],
  },
];

export default function Development() {
  return (
    <section id="development" className="relative scroll-mt-24 overflow-hidden px-6 py-28">
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-6xl bg-border-light" />
      <div className="absolute left-1/2 top-10 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-cream/[0.03] blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-medium tracking-widest text-text-muted uppercase">
              In Development
            </span>
            <h2 className="font-display mt-3 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
              Next in the studio.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-xl text-base leading-relaxed text-text-secondary lg:justify-self-end"
          >
            A few more apps are moving through build, polish, and launch prep.
            They&apos;re not all public yet, but they&apos;re part of the
            portfolio we&apos;re actively shaping.
          </motion.p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {developmentApps.map((app, i) => (
            <motion.article
              key={app.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="group relative overflow-hidden rounded-2xl border border-border-light bg-surface/70 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-border"
            >
              <div
                className="absolute -right-20 -top-20 h-44 w-44 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-125"
                style={{ backgroundColor: app.colorGlow }}
              />
              <div className="relative flex min-h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span
                      className="inline-flex rounded-full border px-2.5 py-1 text-[10px] font-medium tracking-wide uppercase"
                      style={{
                        borderColor: app.color,
                        color: app.color,
                        backgroundColor: app.colorGlow,
                      }}
                    >
                      {app.category}
                    </span>
                    <h3 className="font-display mt-4 text-2xl font-bold tracking-tight">
                      {app.name}
                    </h3>
                  </div>
                  <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-border-light bg-background/60">
                    <Image
                      src={app.image}
                      alt={app.imageAlt}
                      width={72}
                      height={72}
                      className={app.imageClassName}
                    />
                  </div>
                </div>

                <p
                  className="mt-4 text-sm font-medium italic"
                  style={{ color: app.color }}
                >
                  {app.tagline}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {app.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {app.details.map((detail) => (
                    <span
                      key={detail}
                      className="rounded-full border border-border-light bg-background/40 px-3 py-1 text-[11px] text-text-muted"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
