"use client";

import Image from "next/image";
import { motion } from "motion/react";

const values = [
  {
    title: "Craft over volume",
    description:
      "Every app and every client project gets our full attention. We'd rather ship a few great things than thirty forgettable ones.",
  },
  {
    title: "Design is the product",
    description:
      "We don't treat design as a layer on top of engineering. The interface is the experience, and it has to feel right.",
  },
  {
    title: "Ship and iterate",
    description:
      "We believe in shipping early and improving from there. Feedback from users teaches us more than any roadmap.",
  },
];

const mascots = [
  { src: "/apps/atlas/icon.png", alt: "Atlas mascot", color: "#B08630" },
  { src: "/apps/grilltonight/icon.png", alt: "Grill Tonight icon", color: "#D4652A" },
  { src: "/apps/milo/icon.png", alt: "Milo mascot", color: "#6FA3AB" },
  { src: "/apps/claro/icon.png", alt: "Claro mascot", color: "#6B8F71" },
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 px-6 py-32">
      {/* Divider line */}
      <div className="mx-auto mb-20 max-w-6xl border-t border-border-light" />

      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left — Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-medium tracking-widest text-text-muted uppercase">
              About
            </span>
            <h2 className="font-display mt-3 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
              We build software
              <br />
              <span className="text-cream-gradient">people love</span>{" "}
              to use.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-text-secondary">
              LoRicco & Co is an independent software studio. We ship our own
              apps and work directly with clients on websites, AI, and
              strategy. Either way, we care about the details, from how a
              button feels to how a business gets found.
            </p>

            {/* Founder */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10 flex items-center gap-4"
            >
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-cream/30">
                <Image
                  src="/founder.png"
                  alt="Richard LoRicco"
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Richard LoRicco
                </p>
                <p className="text-sm leading-relaxed text-text-secondary">
                  Software engineer. JD. MBA. Open-source contributor. I build apps and websites, and help startups and small businesses with AI and strategy.
                </p>
              </div>
            </motion.div>

            {/* Mascot row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 flex items-center gap-4"
            >
              <span className="text-xs text-text-muted">The crew</span>
              <div className="h-px flex-1 bg-border-light" />
              <div className="flex -space-x-2">
                {mascots.map((m) => (
                  <div
                    key={m.alt}
                    className="relative h-10 w-10 overflow-hidden rounded-full border-2 transition-transform duration-300 hover:z-10 hover:scale-110"
                    style={{ borderColor: m.color }}
                  >
                    <Image
                      src={m.src}
                      alt={m.alt}
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Values */}
          <div className="flex flex-col gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group rounded-xl border border-border-light p-6 transition-all duration-300 hover:border-border hover:bg-surface"
              >
                <div className="mb-1 flex items-center gap-3">
                  <span className="text-xs font-medium text-text-muted">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-lg font-semibold">
                    {value.title}
                  </h3>
                </div>
                <p className="ml-7 text-sm leading-relaxed text-text-secondary">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
