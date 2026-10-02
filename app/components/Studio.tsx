"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FadeUp, SplitLines } from "./ui/Reveal";
import { apps, counts, featuredApp, pad2, spell, type AppStatus, type FeaturedTheme, type StudioApp } from "../lib/apps";

const gridApps = apps.filter((a) => a !== featuredApp);
const liveGrid = gridApps.filter((a) => a.status === "live");
const reviewGrid = gridApps.filter((a) => a.status === "review");
const devGrid = gridApps.filter((a) => a.status === "development");

const statusLabel: Record<AppStatus, string> = {
  live: "Live",
  review: "In review",
  development: "In dev",
};

function StatusChip({ status, onDark = false }: { status: AppStatus; onDark?: boolean }) {
  const tone = onDark
    ? status === "review"
      ? "border-[#e8c46a]/60 bg-[#e8c46a]/10 text-[#f1d892]"
      : "border-white/30 text-data-hi"
    : status === "live"
      ? "border-good bg-good-wash text-good"
      : status === "review"
        ? "border-warn bg-warn-wash text-warn"
        : "border-line-strong bg-background text-text-muted";
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-[2px] border px-2 py-0.5 font-mono text-[10px] tracking-[0.08em] uppercase ${tone}`}
    >
      {status === "live" && (
        <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
      )}
      {statusLabel[status]}
    </span>
  );
}

/* App icons are full-bleed squares; the iOS mask is applied here. */
function AppIcon({ app, size }: { app: StudioApp; size: number }) {
  return (
    <span
      className="relative block shrink-0 overflow-hidden rounded-[22.5%] shadow-[0_1px_0_rgba(26,24,20,0.06),0_10px_22px_-12px_rgba(26,24,20,0.45)] ring-1 ring-black/5"
      style={{
        width: size,
        height: size,
        backgroundColor: app.iconIsMascot ? `${app.color}26` : undefined,
      }}
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

function ArrowOut() {
  return (
    <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" aria-hidden="true">
      <path d="M3.5 2.5h6v6M9.5 2.5 2.5 9.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function AppLinks({ app }: { app: StudioApp }) {
  const linkClass =
    "inline-flex min-h-9 items-center gap-1.5 rounded-[3px] border px-3 font-mono text-[11px] tracking-[0.08em] uppercase transition-colors duration-200";
  if (!app.siteUrl && !app.appStoreUrl) {
    return (
      <p className="font-mono text-[11px] tracking-[0.08em] text-text-muted uppercase">
        Site coming soon
      </p>
    );
  }
  return (
    <div className="flex flex-wrap gap-2">
      {app.appStoreUrl && (
        <a
          href={app.appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${app.name} on the App Store (opens in a new tab)`}
          className={`${linkClass} border-foreground bg-foreground text-background hover:border-cobalt hover:bg-cobalt`}
        >
          App Store <ArrowOut />
        </a>
      )}
      {app.siteUrl && (
        <a
          href={app.siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${app.name} website (opens in a new tab)`}
          className={`${linkClass} border-line-strong text-foreground hover:border-cobalt hover:text-cobalt`}
        >
          Website <ArrowOut />
        </a>
      )}
    </div>
  );
}

const cardClass =
  "group relative flex h-full flex-col overflow-hidden rounded-[4px] border border-line bg-card transition-[transform,border-color,box-shadow] duration-500 [transition-timing-function:var(--ease-out-expo)] hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_24px_40px_-24px_rgba(26,24,20,0.35)] focus-within:border-line-strong";

/* App-colored hairline plus a lamp that comes up behind the icon on hover. */
function CardAccent({ color }: { color: string }) {
  return (
    <>
      <div className="h-[3px] w-full" style={{ backgroundColor: color }} aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `radial-gradient(220px circle at 52px 40px, ${color}2e, transparent 70%)` }}
        aria-hidden="true"
      />
    </>
  );
}

function meta(app: StudioApp) {
  const parts = [app.category];
  if (app.price) parts.push(app.price);
  if (app.since) parts.push(`Since ${app.since}`);
  if (app.note) parts.push(app.note);
  return parts;
}

function LiveCard({ app }: { app: StudioApp }) {
  return (
    <article className={cardClass}>
      <CardAccent color={app.color} />
      <div className="relative flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <AppIcon app={app} size={60} />
          <StatusChip status={app.status} />
        </div>
        <h4 className="font-display mt-5 text-xl font-bold tracking-tight">{app.name}</h4>
        <p className="editorial mt-1 text-[15px] leading-snug text-foreground">{app.tagline}</p>
        <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-body-muted">{app.description}</p>
        <p className="mt-5 border-t border-line pt-4 font-mono text-[10px] leading-[1.8] tracking-[0.12em] text-text-muted uppercase">
          {meta(app).join(" · ")}
        </p>
        <div className="mt-4">
          <AppLinks app={app} />
        </div>
      </div>
    </article>
  );
}

/*
  In development: a ledger row, not a card. The group heading already says
  "in development", so rows carry no status chip; the app's colour is a
  short rule beside the icon, never text.
*/
function DevRow({ app }: { app: StudioApp }) {
  return (
    <article className="ledger-row group grid grid-cols-[44px_minmax(0,1fr)] gap-x-4 gap-y-3 border-t border-line py-6 md:grid-cols-[52px_minmax(0,15rem)_minmax(0,1fr)_auto] md:items-start md:gap-x-8">
      <div className="relative">
        <AppIcon app={app} size={44} />
        <span
          className="absolute -bottom-2.5 left-0 hidden h-[2px] w-11 origin-left md:block scale-x-[0.45] transition-transform duration-500 [transition-timing-function:var(--ease-out-expo)] group-hover:scale-x-100 motion-reduce:transition-none"
          style={{ backgroundColor: app.color }}
          aria-hidden="true"
        />
      </div>

      <div className="min-w-0">
        <h4 className="font-display text-[17px] font-bold tracking-tight transition-colors duration-300 group-hover:text-cobalt">
          {app.name}
        </h4>
        <p className="mt-1 text-[14px] leading-snug font-medium text-foreground">{app.tagline}</p>
        <p className="mt-2 font-mono text-[10px] tracking-[0.12em] text-text-muted uppercase">
          {app.category}
          {app.note && <span className="text-foreground"> · {app.note}</span>}
        </p>
      </div>

      <p className="col-span-2 text-[13.5px] leading-relaxed text-body-muted md:col-span-1 md:pt-0.5">
        {app.description}
      </p>

      <div className="col-span-2 md:col-span-1 md:justify-self-end">
        <AppLinks app={app} />
      </div>
    </article>
  );
}

/*
  An app in App Review that isn't the featured one gets a full-width card
  on the light ground (dark is kept for Process and the featured panel):
  copy on the left, its real screenshots on the right.
*/
function Spotlight({ app }: { app: StudioApp }) {
  const shots = app.screenshots ?? [];
  const bezel = app.featuredTheme?.bezel ?? "#111111";
  return (
    <article
      className="group relative overflow-hidden rounded-[4px] border border-line bg-card"
      style={{ ["--ft-bezel" as string]: bezel } as React.CSSProperties}
    >
      <div className="h-[3px] w-full" style={{ backgroundColor: app.color }} aria-hidden="true" />
      <div className="grid items-center gap-10 p-6 sm:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-8">
        <div>
          <div className="flex items-center gap-4">
            <AppIcon app={app} size={60} />
            <div>
              <h4 className="font-display text-2xl font-bold tracking-tight">{app.name}</h4>
              <div className="mt-1.5">
                <StatusChip status={app.status} />
              </div>
            </div>
          </div>
          <p className="font-display mt-7 text-[1.7rem] leading-[1.1] font-bold tracking-tight sm:text-[2.1rem]">
            {app.tagline}
          </p>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-body-muted">{app.description}</p>
          <p className="mt-6 border-t border-line pt-4 font-mono text-[10px] leading-[1.8] tracking-[0.12em] text-text-muted uppercase">
            {meta(app).join(" · ")}
          </p>
          <div className="mt-4">
            <AppLinks app={app} />
          </div>
        </div>

        {shots.length >= 3 && (
          <div
            className="relative mx-auto flex w-full max-w-[440px] items-end justify-center pb-4 lg:max-w-none"
            role="group"
            aria-label={`${app.name} screenshots`}
          >
            {[1, 0, 2].map((idx, k) => (
              <div
                key={shots[idx].src}
                className={
                  k === 1
                    ? "relative z-10 w-[36%] transition-transform duration-700 [transition-timing-function:var(--ease-out-expo)] motion-safe:group-hover:-translate-y-2"
                    : `relative z-0 w-[30%] transition-transform duration-700 [transition-timing-function:var(--ease-out-expo)] ${
                        k === 0
                          ? "-mr-[7%] origin-bottom-right -rotate-6 motion-safe:group-hover:-rotate-[8deg]"
                          : "-ml-[7%] origin-bottom-left rotate-6 motion-safe:group-hover:rotate-[8deg]"
                      }`
                }
              >
                <Phone src={shots[idx].src} alt={shots[idx].alt} sizes="(min-width: 1024px) 170px, 30vw" />
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

function Reveal({ i, children, className = "" }: { i: number; children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: (i % 4) * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function GroupHeading({ id, label, count }: { id: string; label: string; count: number }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <h3 id={id} className="kicker text-foreground">
        {label}
      </h3>
      <span className="font-mono text-[11px] text-text-muted tnum">/ {pad2(count)}</span>
      <span className="h-px flex-1 bg-line" aria-hidden="true" />
    </div>
  );
}

/* A phone-shaped frame around a real screenshot. */
function Phone({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 220px, 30vw",
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div
      className={`relative aspect-[1320/2868] overflow-hidden rounded-[18%/8.3%] border-[5px] border-(--ft-bezel) bg-(--ft-bezel) shadow-[0_30px_60px_-20px_rgba(0,0,0,0.75),0_0_0_1px_rgba(255,255,255,0.08)] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="rounded-[15%/7%] object-cover"
      />
    </div>
  );
}

/* The theme's colours as CSS variables, so the panel's classes stay static. */
function themeVars(t: FeaturedTheme): React.CSSProperties {
  return {
    "--ft-border": t.border,
    "--ft-text": t.text,
    "--ft-accent": t.accent,
    "--ft-body": t.body,
    "--ft-label": t.label,
    "--ft-btn": t.button.bg,
    "--ft-btn-text": t.button.text,
    "--btn-fill": t.button.hoverBg,
    "--ft-btn-hover-text": t.button.hoverText,
    "--ft-bezel": t.bezel,
  } as React.CSSProperties;
}

/* The tagline, with the theme's highlight (if it ends the line) in the accent. */
function Headline({ text, highlight }: { text: string; highlight?: string }) {
  if (!highlight || !text.endsWith(highlight)) return <>{text}</>;
  return (
    <>
      {text.slice(0, text.length - highlight.length)}
      <span className="text-(--ft-accent)">{highlight}</span>
    </>
  );
}

function Stages({ stages, label }: { stages: NonNullable<FeaturedTheme["stages"]>; label?: string }) {
  return (
    <ol className="mt-7 grid max-w-md grid-cols-5 gap-1.5 sm:gap-2.5" aria-label={label}>
      {stages.map((stage, i) => (
        <li key={stage.label} className="min-w-0">
          <span
            className="relative block aspect-square overflow-hidden rounded-[22%] bg-[radial-gradient(80%_70%_at_50%_35%,#2a2e35_0%,#202329_70%)] ring-1 ring-white/8"
            style={i === stages.length - 1 ? { boxShadow: `0 0 0 1.5px ${stage.color}, 0 8px 28px -8px ${stage.color}80` } : undefined}
          >
            <Image src={stage.src} alt="" fill sizes="(min-width: 640px) 76px, 18vw" className="object-cover" />
          </span>
          <span
            className="mt-2 block truncate text-center font-mono text-[9.5px] tracking-[0.04em] uppercase sm:text-[10px] sm:tracking-[0.1em]"
            style={{ color: stage.color }}
          >
            {stage.label}
          </span>
        </li>
      ))}
    </ol>
  );
}

function Featured({ app }: { app: StudioApp }) {
  const theme = app.featuredTheme;
  if (!theme) return null;
  const shots = app.screenshots ?? [];
  return (
    <motion.article
      aria-labelledby={`featured-${app.slug}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`${theme.surface} relative overflow-hidden rounded-[4px] border border-(--ft-border) text-(--ft-text)`}
      style={themeVars(theme)}
    >
      <div className="relative grid gap-10 p-6 sm:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-6 lg:p-12">
        {/* Copy */}
        <div className="flex flex-col">
          <p className="kicker flex items-center gap-3 text-(--ft-accent)">
            <span>{theme.kicker[0]}</span>
            <span className="h-px w-8 bg-(--ft-accent) opacity-40" aria-hidden="true" />
            <span>{theme.kicker[1]}</span>
          </p>

          <div className="mt-7 flex items-center gap-4">
            <AppIcon app={app} size={64} />
            <div>
              <h3 id={`featured-${app.slug}`} className="font-display text-2xl font-bold tracking-tight">
                {app.name}
              </h3>
              <div className="mt-1.5">
                <StatusChip status={app.status} onDark />
              </div>
            </div>
          </div>

          <p className="font-display mt-8 text-[2.1rem] leading-[1.05] font-bold tracking-tight sm:text-5xl">
            <Headline text={app.tagline} highlight={theme.highlight} />
          </p>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-(--ft-body)">{app.description}</p>

          {theme.stages && theme.stages.length > 0 && <Stages stages={theme.stages} label={theme.stagesLabel} />}

          <dl className="mt-8 grid max-w-md grid-cols-3 gap-4 border-t border-white/12 pt-5 font-mono text-[10px] tracking-[0.12em] uppercase">
            <div>
              <dt className="text-(--ft-label)">Price</dt>
              <dd className="mt-1.5 text-[12px] text-(--ft-text)">
                {app.price}
                {app.priceNote && <span className="mt-1 block text-[10px] text-(--ft-body)">{app.priceNote}</span>}
              </dd>
            </div>
            <div>
              <dt className="text-(--ft-label)">Platform</dt>
              <dd className="mt-1.5 text-[12px] text-(--ft-text)">iPhone</dd>
            </div>
            <div>
              <dt className="text-(--ft-label)">Status</dt>
              <dd className="mt-1.5 text-[12px] text-(--ft-text)">{app.note ?? statusLabel[app.status]}</dd>
            </div>
          </dl>

          {app.siteUrl && (
            <div className="mt-8">
              <a
                href={app.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${app.name} website, ${new URL(app.siteUrl).host} (opens in a new tab)`}
                className="btn inline-flex items-center gap-2 bg-(--ft-btn) px-5 py-3 text-sm font-semibold text-(--ft-btn-text) hover:text-(--ft-btn-hover-text) focus-visible:outline-(--ft-accent)"
              >
                Visit the {app.name} site <span className="btn-arrow">→</span>
              </a>
            </div>
          )}
        </div>

        {/* Real screenshots */}
        {shots.length >= 3 && (
          <div className="relative mx-auto flex w-full max-w-[520px] items-center justify-center lg:max-w-none" aria-label={`${app.name} screenshots`} role="group">
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: 0 }}
              whileInView={{ opacity: 1, y: 18, rotate: -7 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-0 -mr-[9%] w-[31%] origin-bottom-right"
            >
              <Phone src={shots[1].src} alt={shots[1].alt} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-[38%]"
            >
              <Phone src={shots[0].src} alt={shots[0].alt} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: 0 }}
              whileInView={{ opacity: 1, y: 18, rotate: 7 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-0 -ml-[9%] w-[31%] origin-bottom-left"
            >
              <Phone src={shots[2].src} alt={shots[2].alt} />
            </motion.div>
          </div>
        )}
      </div>
    </motion.article>
  );
}

export default function Studio() {
  return (
    <section id="studio" className="section-y relative scroll-mt-24 px-6" aria-label="The studio">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-14 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="max-w-2xl">
            <FadeUp>
              <p className="kicker rule-label text-text-muted">The Studio</p>
            </FadeUp>
            <SplitLines
              className="font-display mt-5 text-[1.85rem] font-bold leading-[1.05] tracking-tight min-[400px]:text-4xl sm:text-5xl lg:text-6xl"
              lines={["I also build and ship", "my own apps."]}
            />
            <FadeUp delay={0.15}>
              <p className="mt-5 text-lg leading-relaxed text-body-muted">
                {spell(counts.live)[0].toUpperCase() + spell(counts.live).slice(1)} are live on the
                App Store, {spell(counts.review)} is in App Review, and {spell(counts.development)} more
                are in development. I build them myself and handle App Store review,
                subscriptions, analytics, and support. I draw on that work when advising clients
                on product decisions.
              </p>
            </FadeUp>
          </div>

          {/* Ledger */}
          <FadeUp delay={0.2}>
            <dl className="grid grid-cols-3 gap-px overflow-hidden rounded-[4px] border border-line bg-line lg:min-w-[340px]">
              {(
                [
                  ["Live", counts.live, "text-good"],
                  ["In review", counts.review, "text-warn"],
                  ["In dev", counts.development, "text-foreground"],
                ] as const
              ).map(([label, n, tone]) => (
                <div key={label} className="bg-card px-4 py-4">
                  <dt className="font-mono text-[10px] tracking-[0.14em] text-text-muted uppercase">{label}</dt>
                  <dd className={`font-display mt-1 text-3xl font-bold tnum ${tone}`}>{pad2(n)}</dd>
                </div>
              ))}
            </dl>
          </FadeUp>
        </div>

        {featuredApp && <Featured app={featuredApp} />}

        {/* On the App Store */}
        <div className="mt-16" role="group" aria-labelledby="studio-live">
          <GroupHeading id="studio-live" label="On the App Store" count={liveGrid.length} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {liveGrid.map((app, i) => (
              <Reveal
                key={app.slug}
                i={i}
                className={`${i < 2 ? "lg:col-span-3" : "lg:col-span-2"} ${
                  i === liveGrid.length - 1 && liveGrid.length % 2 === 1 ? "sm:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <LiveCard app={app} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* In App Review (apps in review that aren't featured): a full-width spotlight when the
            app has screenshots, otherwise its card */}
        {reviewGrid.length > 0 && (
          <div className="mt-16" role="group" aria-labelledby="studio-review">
            <GroupHeading id="studio-review" label="In App Review" count={reviewGrid.length} />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {reviewGrid.map((app, i) =>
                (app.screenshots?.length ?? 0) >= 3 ? (
                  <Reveal key={app.slug} i={i} className="sm:col-span-2 lg:col-span-3">
                    <Spotlight app={app} />
                  </Reveal>
                ) : (
                  <Reveal key={app.slug} i={i}>
                    <LiveCard app={app} />
                  </Reveal>
                )
              )}
            </div>
          </div>
        )}

        {/* In development: ledger rows */}
        <div className="mt-16" role="group" aria-labelledby="studio-dev">
          <GroupHeading id="studio-dev" label="In development" count={devGrid.length} />
          <div className="border-b border-line">
            {devGrid.map((app, i) => (
              <Reveal key={app.slug} i={i}>
                <DevRow app={app} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
