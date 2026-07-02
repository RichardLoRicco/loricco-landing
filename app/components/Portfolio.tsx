"use client";

import Image from "next/image";
import { motion } from "motion/react";

const apps = [
  {
    number: "01",
    name: "Atlas",
    tagline: "Your daily fuel to stay moving.",
    category: "Fitness & Motivation",
    description:
      "Swipe through powerful fitness quotes, build unbreakable streaks, and let Atlas the bear keep you accountable — one day at a time.",
    image: "/apps/atlas/mascot.png",
    imageAlt: "Atlas the bear mascot",
    imageSize: 220,
    url: "https://atlas.loriccoandco.com/",
    color: "#B08630",
    colorGlow: "rgba(176, 134, 48, 0.12)",
    colorLight: "rgba(176, 134, 48, 0.06)",
    colorBorder: "rgba(176, 134, 48, 0.15)",
  },
  {
    number: "02",
    name: "Grill Tonight",
    tagline: "Should you grill tonight?",
    category: "Weather & Utility",
    description:
      "Real-time weather analysis, a clear YES/NO verdict, and practical tips — so you stop guessing and start grilling.",
    image: "/apps/grilltonight/icon.png",
    imageAlt: "Grill Tonight app icon — a blazing grill",
    imageSize: 180,
    url: "https://grilltonight-landing.vercel.app/",
    color: "#D4652A",
    colorGlow: "rgba(212, 101, 42, 0.12)",
    colorLight: "rgba(212, 101, 42, 0.06)",
    colorBorder: "rgba(212, 101, 42, 0.15)",
  },
  {
    number: "03",
    name: "Milo",
    tagline: "Quit nicotine, one breath at a time.",
    category: "Health & Wellness",
    description:
      "A calm companion through cravings — guided breathing, smart tracking, and gentle motivation to help you quit for good.",
    image: "/apps/milo/mascot.png",
    imageAlt: "Milo the otter mascot waving",
    imageSize: 200,
    url: "https://quitwithmilo.com/",
    color: "#6FA3AB",
    colorGlow: "rgba(111, 163, 171, 0.12)",
    colorLight: "rgba(111, 163, 171, 0.06)",
    colorBorder: "rgba(111, 163, 171, 0.15)",
  },
  {
    number: "04",
    name: "Claro",
    tagline: "Quit drinking, one day at a time.",
    category: "Health & Wellness",
    description:
      "A calm sobriety companion for cravings, streaks, guided breathing, and no-shame recovery support.",
    image: "/apps/claro/mascot.png",
    imageAlt: "Claro the elephant mascot waving",
    imageSize: 200,
    url: "https://claro.loriccoandco.com/",
    color: "#6B8F71",
    colorGlow: "rgba(107, 143, 113, 0.12)",
    colorLight: "rgba(107, 143, 113, 0.06)",
    colorBorder: "rgba(107, 143, 113, 0.15)",
  },
];

export default function Portfolio() {
  return (
    <section id="apps" className="relative scroll-mt-24 px-6 py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-xs font-medium tracking-widest text-text-muted uppercase">
            Our Apps
          </span>
          <h2 className="font-display mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            We ship our own products.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary">
            Everything we recommend to clients, we practice here — live on the
            App Store, in real users&apos; hands.
          </p>
        </motion.div>

        {/* App cards — visual grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {apps.map((app, i) => (
            <motion.a
              key={app.name}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${app.name}: ${app.tagline} Opens in a new tab.`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border-light transition-all duration-500 hover:border-border"
              style={{
                background: `linear-gradient(180deg, ${app.colorLight} 0%, var(--color-surface) 50%)`,
              }}
            >
              {/* Image area */}
              <div className="relative flex items-center justify-center px-8 pt-10 pb-4">
                {/* Atmospheric glow behind image */}
                <div
                  className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-all duration-700 group-hover:scale-125"
                  style={{ backgroundColor: app.colorGlow }}
                />
                <div
                  className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 blur-3xl transition-all duration-700 group-hover:opacity-100"
                  style={{ backgroundColor: app.colorGlow }}
                />

                {/* Mascot / Icon */}
                <div className="relative transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105">
                  <Image
                    src={app.image}
                    alt={app.imageAlt}
                    width={app.imageSize}
                    height={app.imageSize}
                    className="drop-shadow-2xl"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col px-8 pb-8">
                {/* Number + category */}
                <div className="mb-3 flex items-center gap-3">
                  <span
                    className="font-display text-xs font-bold"
                    style={{ color: app.color }}
                  >
                    {app.number}
                  </span>
                  <span
                    className="rounded-full px-2.5 py-0.5 text-[10px] font-medium tracking-wide uppercase"
                    style={{
                      backgroundColor: app.colorLight,
                      color: app.color,
                      border: `1px solid ${app.colorBorder}`,
                    }}
                  >
                    {app.category}
                  </span>
                </div>

                {/* App name */}
                <h3 className="font-display text-2xl font-bold tracking-tight">
                  {app.name}
                </h3>

                {/* Tagline */}
                <p
                  className="mt-1 text-sm font-medium italic"
                  style={{ color: app.color }}
                >
                  {app.tagline}
                </p>

                {/* Description */}
                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
                  {app.description}
                </p>

                {/* Learn more + accent line */}
                <div className="mt-6 flex items-center gap-2">
                  <span
                    className="text-xs font-medium opacity-60 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100"
                    style={{ color: app.color }}
                  >
                    Learn more
                  </span>
                  <svg
                    className="h-3 w-3 opacity-60 transition-all duration-300 md:opacity-0 md:group-hover:translate-x-1 md:group-hover:opacity-100"
                    style={{ color: app.color }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <div className="flex-1 overflow-hidden rounded-full">
                    <div
                      className="h-0.5 w-0 transition-all duration-700 group-hover:w-full"
                      style={{ backgroundColor: app.color }}
                    />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
