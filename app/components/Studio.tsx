"use client";

import Image from "next/image";
import { motion } from "motion/react";

type AppStatus = "live" | "development";

type App = {
  name: string;
  tagline: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  url?: string;
  color: string;
  status: AppStatus;
};

const apps: App[] = [
  {
    name: "Atlas",
    tagline: "Your daily fuel to stay moving.",
    category: "Fitness & Motivation",
    description:
      "Daily fitness motivation with quotes, streaks, and Atlas the bear keeping you accountable.",
    image: "/apps/atlas/mascot.png",
    imageAlt: "Atlas the bear mascot",
    url: "https://atlas.loriccoandco.com/",
    color: "#B08630",
    status: "live",
  },
  {
    name: "Grill Tonight",
    tagline: "Should you grill tonight?",
    category: "Weather & Utility",
    description:
      "Real-time weather analysis with a clear YES/NO verdict, so you stop guessing and start grilling.",
    image: "/apps/grilltonight/icon.png",
    imageAlt: "Grill Tonight app icon, a blazing grill",
    url: "https://grilltonight-landing.vercel.app/",
    color: "#D4652A",
    status: "live",
  },
  {
    name: "Milo",
    tagline: "Quit nicotine, one breath at a time.",
    category: "Health & Wellness",
    description:
      "A calm companion through cravings, with guided breathing, smart tracking, and gentle motivation.",
    image: "/apps/milo/mascot.png",
    imageAlt: "Milo the otter mascot waving",
    url: "https://quitwithmilo.com/",
    color: "#6FA3AB",
    status: "live",
  },
  {
    name: "Claro",
    tagline: "Quit drinking, one day at a time.",
    category: "Health & Wellness",
    description:
      "A calm sobriety companion for cravings, streaks, guided breathing, and no-shame recovery support.",
    image: "/apps/claro/mascot.png",
    imageAlt: "Claro the elephant mascot waving",
    url: "https://claro.loriccoandco.com/",
    color: "#6B8F71",
    status: "live",
  },
  {
    name: "BowelBuddy",
    tagline: "Track your gut without making it weird.",
    category: "Digestive Health",
    description:
      "Private bowel movement logging, pattern insights, and doctor-ready context for digestive health.",
    image: "/apps/bowelbuddy/mascot.png",
    imageAlt: "BowelBuddy mascot waving",
    color: "#7FA37A",
    status: "development",
  },
  {
    name: "Haven",
    tagline: "Support for the messy middle.",
    category: "Breakup Recovery",
    description:
      "Mood-aware recovery support with SOS tools and a guided path through the first hard weeks.",
    image: "/apps/haven/mascot.png",
    imageAlt: "Haven companion mascot",
    color: "#B48895",
    status: "development",
  },
  {
    name: "Hark",
    tagline: "Scripts that follow your voice.",
    category: "Voice Teleprompter",
    description:
      "An on-device teleprompter that scrolls with your pace, pauses, and ad-libs.",
    image: "/apps/hark/logo-v2.png",
    imageAlt: "Hark logo mark",
    color: "#5EA5E8",
    status: "development",
  },
];

function StatusChip({ status }: { status: AppStatus }) {
  if (status === "live") {
    return (
      <span className="rounded-[2px] border border-good bg-good-wash px-2 py-0.5 font-mono text-[10px] tracking-[0.08em] text-good">
        LIVE
      </span>
    );
  }
  return (
    <span className="rounded-[2px] border border-line-strong bg-background px-2 py-0.5 font-mono text-[10px] tracking-[0.08em] text-text-muted">
      IN DEV
    </span>
  );
}

function AppCardInner({ app }: { app: App }) {
  return (
    <>
      {/* Top accent hairline in app color */}
      <div
        className="h-[3px] w-full"
        style={{ backgroundColor: app.color }}
        aria-hidden="true"
      />

      {/* Image area */}
      <div className="relative flex h-36 items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.07] transition-opacity duration-300 group-hover:opacity-[0.12]"
          style={{ backgroundColor: app.color }}
          aria-hidden="true"
        />
        <Image
          src={app.image}
          alt={app.imageAlt}
          width={104}
          height={104}
          className="relative h-24 w-24 object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col border-t border-line px-5 pt-4 pb-5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-display text-lg font-bold tracking-tight">
            {app.name}
          </h3>
          <StatusChip status={app.status} />
        </div>
        <p className="editorial mt-0.5 text-[13px]" style={{ color: app.color }}>
          {app.tagline}
        </p>
        <p className="mt-2.5 flex-1 text-[13px] leading-relaxed text-body-muted">
          {app.description}
        </p>
        <p className="mt-4 font-mono text-[10px] tracking-[0.14em] text-text-muted uppercase">
          {app.category}
          {app.url && (
            <span className="ml-2 inline-block text-cobalt opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              VISIT →
            </span>
          )}
        </p>
      </div>
    </>
  );
}

const cardClass =
  "group relative flex flex-col overflow-hidden rounded-[4px] border border-line bg-card transition-all duration-300 hover:-translate-y-0.5 hover:border-line-strong hover:shadow-[0_16px_32px_-20px_rgba(26,24,20,0.3)]";

export default function Studio() {
  return (
    <section id="studio" className="relative scroll-mt-24 px-6 py-28" aria-label="The studio">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-2xl"
        >
          <p className="kicker rule-label text-text-muted">The Studio · Exhibit A</p>
          <h2 className="font-display mt-5 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
            Proof of craft:
            <br />I ship my own software.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-body-muted">
            Every recommendation I make to clients gets tested here first.
            Seven products designed, built, and operated end to end — App
            Store review, subscriptions, analytics, support, all of it.
          </p>
        </motion.div>

        {/* App grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {apps.map((app, i) =>
            app.url ? (
              <motion.a
                key={app.name}
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${app.name}: ${app.tagline} Opens in a new tab.`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.07 }}
                className={cardClass}
              >
                <AppCardInner app={app} />
              </motion.a>
            ) : (
              <motion.article
                key={app.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.07 }}
                className={cardClass}
              >
                <AppCardInner app={app} />
              </motion.article>
            )
          )}

          {/* Closing annotation card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 0.28 }}
            className="flex flex-col justify-between rounded-[4px] border border-dashed border-line-strong p-5"
          >
            <p className="font-mono text-[12px] leading-[1.9] text-text-muted">
              SHIPPED / 4<br />
              IN PIPELINE / 3<br />
              PLATFORMS / iOS · WEB
            </p>
            <p className="mt-6 text-[13.5px] leading-relaxed text-body-muted">
              <span className="editorial text-[15px] text-foreground">
                Why this matters to clients:
              </span>{" "}
              I don&apos;t hand you advice I haven&apos;t bet my own products
              on.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
