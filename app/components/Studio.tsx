"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  apps,
  counts,
  featuredApp,
  spell,
  type AppStatus,
  type FeaturedTheme,
  type StudioApp,
} from "../lib/apps";
import SectionHead from "./ui/SectionHead";

const statusLabel: Record<AppStatus, string> = {
  live: "On the App Store",
  review: "In App Review",
  development: "In development",
};

const statusTone: Record<AppStatus, string> = {
  live: "bg-ok-wash text-ok",
  review: "bg-pending-wash text-pending",
  development: "bg-paper-deep text-ink-soft",
};

function Status({ status }: { status: AppStatus }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11.5px] font-semibold whitespace-nowrap ${statusTone[status]}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full bg-current ${status === "development" ? "opacity-50" : ""}`}
        aria-hidden="true"
      />
      {statusLabel[status]}
    </span>
  );
}

function AppIcon({ app, size }: { app: StudioApp; size: number }) {
  return (
    <span
      className="relative block shrink-0 overflow-hidden rounded-[23%] ring-1 ring-black/8"
      style={{ width: size, height: size, backgroundColor: app.iconIsMascot ? `${app.color}30` : undefined }}
    >
      <Image
        src={app.icon}
        alt={app.iconAlt}
        width={size}
        height={size}
        sizes={`${size}px`}
        className={app.iconIsMascot ? "h-full w-full scale-[0.86] object-contain" : "h-full w-full object-cover"}
      />
    </span>
  );
}

/* ── Featured app ── */

function themeVars(t: FeaturedTheme): React.CSSProperties {
  return {
    "--ft-border": t.border,
    "--ft-text": t.text,
    "--ft-accent": t.accent,
    "--ft-body": t.body,
    "--ft-label": t.label,
    "--ft-btn": t.button.bg,
    "--ft-btn-text": t.button.text,
    "--slab-fill": t.button.hoverBg,
    "--ft-btn-hover-text": t.button.hoverText,
    "--ft-bezel": t.bezel,
  } as React.CSSProperties;
}

function Phone({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[1320/2868] overflow-hidden rounded-[17%/8%] border-[5px] border-(--ft-bezel) bg-(--ft-bezel) shadow-[0_40px_70px_-25px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.08)]">
      <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 220px, 30vw" className="rounded-[14%/6.6%] object-cover" />
    </div>
  );
}

function Tagline({ text, highlight }: { text: string; highlight?: string }) {
  if (!highlight || !text.endsWith(highlight)) return <>{text}</>;
  return (
    <>
      {text.slice(0, text.length - highlight.length)}
      <span className="text-(--ft-accent)">{highlight}</span>
    </>
  );
}

function Featured({ app }: { app: StudioApp }) {
  const t = app.featuredTheme;
  if (!t) return null;
  const shots = app.screenshots ?? [];
  const fan = [
    { shot: shots[1], className: "z-0 -mr-[10%] w-[30%] origin-bottom-right", rotate: -8, y: 20 },
    { shot: shots[0], className: "z-10 w-[38%]", rotate: 0, y: 0 },
    { shot: shots[2], className: "z-0 -ml-[10%] w-[30%] origin-bottom-left", rotate: 8, y: 20 },
  ];

  return (
    <article
      aria-labelledby={`featured-${app.slug}`}
      className={`${t.surface} relative overflow-hidden rounded-[8px] border border-(--ft-border) text-(--ft-text)`}
      style={themeVars(t)}
    >
      <div className="grid gap-12 p-6 sm:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-8 lg:p-14">
        <div className="flex flex-col">
          <p className="label flex items-center gap-3 text-(--ft-accent)">
            {t.kicker[0]}
            <span className="h-px w-8 bg-current opacity-50" aria-hidden="true" />
            {t.kicker[1]}
          </p>

          <div className="mt-8 flex items-center gap-4">
            <AppIcon app={app} size={60} />
            <div>
              <h3 id={`featured-${app.slug}`} className="text-[1.4rem] font-bold tracking-[-0.01em]">
                {app.name}
              </h3>
              <p className="text-[13px] text-(--ft-label)">{statusLabel[app.status]}</p>
            </div>
          </div>

          <p className="display mt-8 text-[2.5rem] sm:text-[3.4rem]">
            <Tagline text={app.tagline} highlight={t.highlight} />
          </p>
          <p className="mt-6 max-w-md text-[15.5px] leading-[1.65] text-(--ft-body)">{app.description}</p>

          {t.stages && t.stages.length > 0 && (
            <ol className="mt-8 grid max-w-md grid-cols-5 gap-2 sm:gap-3" aria-label={t.stagesLabel}>
              {t.stages.map((stage, i) => (
                <li key={stage.label} className="min-w-0">
                  <span
                    className="relative block aspect-square overflow-hidden rounded-[22%] bg-[#202329] ring-1 ring-white/10"
                    style={i === t.stages!.length - 1 ? { boxShadow: `0 0 0 1.5px ${stage.color}, 0 10px 28px -8px ${stage.color}90` } : undefined}
                  >
                    <Image src={stage.src} alt="" fill sizes="(min-width: 640px) 76px, 18vw" className="object-cover" />
                  </span>
                  <span
                    className="mt-2 block truncate text-center font-mono text-[9.5px] tracking-[0.06em] uppercase sm:text-[10px]"
                    style={{ color: stage.color }}
                  >
                    {stage.label}
                  </span>
                </li>
              ))}
            </ol>
          )}

          <dl className="mt-9 grid max-w-md grid-cols-3 gap-4 border-t border-white/12 pt-5">
            {[
              ["Price", app.price ?? "TBA", app.priceNote],
              ["Platform", "iPhone"],
              ["Status", app.note ?? (app.status === "development" ? "In development" : statusLabel[app.status])],
            ].map(([k, v, note]) => (
              <div key={k}>
                <dt className="label text-[10px] text-(--ft-label)">{k}</dt>
                <dd className="mt-1.5 text-[14px] font-medium">
                  {v}
                  {note && <span className="block text-[12px] font-normal text-(--ft-body)">{note}</span>}
                </dd>
              </div>
            ))}
          </dl>

          {app.siteUrl && (
            <a
              href={app.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${app.name} website, ${new URL(app.siteUrl).host} (opens in a new tab)`}
              className="slab mt-9 self-start bg-(--ft-btn) px-5 py-3.5 text-[14px] font-semibold text-(--ft-btn-text) hover:text-(--ft-btn-hover-text) focus-visible:outline-(--ft-accent)"
            >
              Visit the {app.name} site <span className="slab-arrow" aria-hidden="true">→</span>
            </a>
          )}
        </div>

        {shots.length >= 3 && (
          <div
            role="group"
            aria-label={`${app.name} screenshots`}
            className="relative mx-auto flex w-full max-w-[520px] items-center justify-center lg:max-w-none"
          >
            {fan.map(({ shot, className, rotate, y }, i) => (
              <motion.div
                key={shot.src}
                initial={{ opacity: 0, y: 60, rotate: 0 }}
                whileInView={{ opacity: 1, y, rotate }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1, delay: [0.15, 0, 0.25][i], ease: [0.2, 0.9, 0.1, 1] }}
                className={`relative ${className}`}
              >
                <Phone src={shot.src} alt={shot.alt} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

/* ── Catalog ── */

type Filter = "all" | AppStatus;

const filters: { id: Filter; label: string; count: number }[] = [
  { id: "all", label: "All", count: apps.length },
  { id: "live", label: "On the App Store", count: counts.live },
  { id: "review", label: "In review", count: counts.review },
  { id: "development", label: "In development", count: counts.development },
];

function ExternalLink({ href, label, children, solid = false }: { href: string; label: string; children: React.ReactNode; solid?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`inline-flex h-9 items-center gap-1.5 rounded-full px-3.5 text-[12.5px] font-semibold whitespace-nowrap transition-colors duration-200 ${
        solid
          ? "bg-ink text-paper hover:bg-signal hover:text-ink"
          : "border border-rule-strong text-ink hover:border-ink"
      }`}
    >
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  );
}

function meta(app: StudioApp) {
  const parts = [app.category];
  if (app.price) parts.push(app.price);
  if (app.since) parts.push(`Since ${app.since}`);
  if (app.note) parts.push(app.note);
  return parts.join(" · ");
}

function Row({ app }: { app: StudioApp }) {
  return (
    <div className="grid grid-cols-[52px_1fr] gap-x-4 gap-y-4 py-6 sm:grid-cols-[64px_1fr] sm:gap-x-6 lg:grid-cols-[64px_minmax(0,1fr)_17rem_11rem] lg:items-center lg:gap-x-10">
      <span className="hidden sm:block">
        <AppIcon app={app} size={64} />
      </span>
      <span className="sm:hidden">
        <AppIcon app={app} size={52} />
      </span>

      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h4 className="text-[1.2rem] font-bold tracking-[-0.01em]">{app.name}</h4>
          <span className="serif-i text-[1.1rem] text-ink-soft">{app.tagline}</span>
        </div>
        <p className="mt-1.5 max-w-xl text-[14px] leading-[1.6] text-ink-mute">{app.description}</p>
      </div>

      <div className="col-start-2 flex flex-wrap items-center gap-x-4 gap-y-2 lg:col-start-auto lg:flex-col lg:items-start">
        <Status status={app.status} />
        <span className="font-mono text-[11.5px] text-ink-mute">{meta(app)}</span>
      </div>

      <div className="col-start-2 flex flex-wrap gap-2 lg:col-start-auto lg:justify-end">
        {app.appStoreUrl && (
          <ExternalLink solid href={app.appStoreUrl} label={`${app.name} on the App Store (opens in a new tab)`}>
            App Store
          </ExternalLink>
        )}
        {app.siteUrl && (
          <ExternalLink href={app.siteUrl} label={`${app.name} website (opens in a new tab)`}>
            Site
          </ExternalLink>
        )}
        {!app.siteUrl && !app.appStoreUrl && (
          <span className="inline-flex h-9 items-center text-[12.5px] text-ink-mute">Site coming soon</span>
        )}
      </div>
    </div>
  );
}

function Catalog() {
  const [filter, setFilter] = useState<Filter>("all");
  const shown = filter === "all" ? apps : apps.filter((a) => a.status === filter);

  return (
    <div className="mt-20">
      <div className="flex flex-col gap-5 border-b border-ink pb-5 lg:flex-row lg:items-end lg:justify-between">
        <h3 className="display display-tight text-[2rem] sm:text-[2.4rem]">Every app</h3>
        <div role="group" aria-label="Filter apps by status" className="-mx-1 flex flex-wrap gap-1.5">
          {filters.map((f) => {
            const on = filter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                aria-pressed={on}
                onClick={() => setFilter(f.id)}
                className={`inline-flex h-10 items-center gap-2 rounded-full px-4 text-[13.5px] font-semibold transition-colors duration-200 ${
                  on ? "bg-ink text-paper" : "text-ink-soft hover:bg-paper hover:text-ink"
                }`}
              >
                {f.label}
                <span className={`font-mono text-[11px] tnum ${on ? "text-signal-bright" : "text-ink-mute"}`}>
                  {f.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {shown.length} {shown.length === 1 ? "app" : "apps"}
      </p>

      <ul className="divide-y divide-rule">
        <AnimatePresence initial={false} mode="popLayout">
          {shown.map((app) => (
            <motion.li
              key={app.slug}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              transition={{ duration: 0.4, ease: [0.2, 0.9, 0.1, 1] }}
            >
              <Row app={app} />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}

export default function Studio() {
  const sentence =
    `${spell(counts.live)[0].toUpperCase()}${spell(counts.live).slice(1)} are live on the App Store, ` +
    `${spell(counts.review)} is in App Review, and ${spell(counts.development)} more are in development. ` +
    "I build them and handle App Store review, subscriptions, analytics, and support myself. " +
    "The product advice I give clients comes from doing that.";

  return (
    <section id="studio" aria-label="Studio" className="bg-paper-deep py-28 lg:py-36">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <SectionHead
          index="04"
          label="Studio"
          title={
            <>
              I also ship
              <br />
              my own <span className="serif-i text-signal-ink">apps</span>
            </>
          }
          intro={sentence}
        />

        <div className="mt-16 lg:mt-20">{featuredApp && <Featured app={featuredApp} />}</div>

        <Catalog />
      </div>
    </section>
  );
}
