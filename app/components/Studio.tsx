import Image from "next/image";
import Reveal from "./Reveal";
import { apps, counts, featuredApp, spell, type AppStatus, type FeaturedTheme, type StudioApp } from "../lib/apps";

const gridApps = apps.filter((a) => a !== featuredApp);
const liveGrid = gridApps.filter((a) => a.status === "live");
const reviewGrid = gridApps.filter((a) => a.status === "review");
const devGrid = gridApps.filter((a) => a.status === "development");

const statusLabel: Record<AppStatus, string> = {
  live: "Live",
  review: "In review",
  development: "In dev",
};

/* App icons are full-bleed squares; the iOS mask is applied here. */
function AppIcon({ app, size }: { app: StudioApp; size: number }) {
  return (
    <span
      className="relative block shrink-0 overflow-hidden rounded-[22.5%]"
      style={{
        width: size,
        height: size,
        border: "1px solid var(--border)",
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

function AppLinks({ app }: { app: StudioApp }) {
  if (!app.siteUrl && !app.appStoreUrl) {
    return <p className="meta">Site coming soon</p>;
  }
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-2">
      {app.appStoreUrl && (
        <a
          href={app.appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${app.name} on the App Store (opens in a new tab)`}
          className="link-accent meta"
          style={{ color: "var(--accent)" }}
        >
          App Store
        </a>
      )}
      {app.siteUrl && (
        <a
          href={app.siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${app.name} website (opens in a new tab)`}
          className="link-accent meta"
          style={{ color: "var(--text-primary)" }}
        >
          Website
        </a>
      )}
    </div>
  );
}

function meta(app: StudioApp) {
  const parts = [app.category];
  if (app.price) parts.push(app.price);
  if (app.since) parts.push(`Since ${app.since}`);
  if (app.note) parts.push(app.note);
  return parts;
}

/*
  Live and in-review apps: the personal site's filing card. `wide` lays a lone
  card out in one row (identity, description, details) so it never sits in a
  grid with empty cells beside it.
*/
function AppCard({ app, wide = false }: { app: StudioApp; wide?: boolean }) {
  return (
    <article className="filing flex h-full flex-col overflow-hidden">
      <div
        className={`flex flex-1 flex-col p-6 ${
          wide ? "md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)_minmax(0,1fr)] md:items-start md:gap-10" : ""
        }`}
      >
        <div className="flex items-center gap-4">
          <AppIcon app={app} size={56} />
          <div className="min-w-0">
            <h4 style={{ fontSize: "clamp(1.5rem, 2.2vw, 1.85rem)", lineHeight: 1 }}>{app.name}</h4>
            <p className="serif-italic mt-1" style={{ fontSize: "1.05rem" }}>
              {app.tagline}
            </p>
          </div>
        </div>
        <p className={`body-serif mt-5 flex-1 ${wide ? "md:mt-0" : ""}`} style={{ fontSize: "0.98rem" }}>
          {app.description}
        </p>
        <div className={wide ? "md:mt-0" : ""}>
          <p className={`meta mt-5 ${wide ? "md:mt-0" : ""}`} style={{ lineHeight: 1.8 }}>
            {meta(app).join(" · ")}
          </p>
          <div className="mt-4 border-t border-[var(--border)] pt-4">
            <AppLinks app={app} />
          </div>
        </div>
      </div>
    </article>
  );
}

/* In development: the personal site's numbered editorial list. */
function DevRow({ app }: { app: StudioApp }) {
  return (
    <div className="grid grid-cols-[auto_1fr] items-start gap-5 border-b border-[var(--rule-color)] py-6">
      <AppIcon app={app} size={44} />
      <div className="min-w-0">
        <h4 style={{ fontSize: "1.35rem", lineHeight: 1.1 }}>{app.name}</h4>
        <p className="serif-italic mt-1" style={{ fontSize: "1rem" }}>
          {app.tagline}
        </p>
        <p className="body-serif mt-2" style={{ fontSize: "0.92rem" }}>
          {app.description}
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
          <span className="meta">
            {app.category}
            {app.note && <> &middot; {app.note}</>}
          </span>
          <AppLinks app={app} />
        </div>
      </div>
    </div>
  );
}

/* A phone-shaped frame around a real screenshot. */
function Phone({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[1320/2868] overflow-hidden rounded-[18%/8.3%] border-[5px] border-(--ft-bezel) bg-(--ft-bezel) shadow-[0_30px_60px_-20px_rgba(0,0,0,0.75),0_0_0_1px_rgba(255,255,255,0.08)]">
      <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 220px, 30vw" className="rounded-[15%/7%] object-cover" />
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
    "--ft-btn-hover": t.button.hoverBg,
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

/*
  The featured app keeps its own colours (they come from the app's theme), so
  it reads as that app's panel set inside this page. Only the frame and the
  type follow the Chambers system.
*/
function Featured({ app }: { app: StudioApp }) {
  const theme = app.featuredTheme;
  if (!theme) return null;
  const shots = app.screenshots ?? [];
  return (
    <article
      aria-labelledby={`featured-${app.slug}`}
      className={`${theme.surface} featured-panel relative overflow-hidden border border-(--ft-border) text-(--ft-text)`}
      style={{ ...themeVars(theme), borderRadius: "var(--radius-lg)" }}
    >
      <div className="relative grid gap-10 p-6 sm:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-6 lg:p-12">
        <div className="flex flex-col">
          <p className="flex items-center gap-3 font-mono text-[0.68rem] tracking-[0.2em] text-(--ft-accent) uppercase">
            <span>{theme.kicker[0]}</span>
            <span className="h-px w-8 bg-(--ft-accent) opacity-40" aria-hidden="true" />
            <span>{theme.kicker[1]}</span>
          </p>

          <div className="mt-7 flex items-center gap-4">
            <AppIcon app={app} size={64} />
            <div>
              <h3 id={`featured-${app.slug}`} style={{ fontSize: "1.9rem", color: "var(--ft-text)" }}>
                {app.name}
              </h3>
              <p className="mt-1.5 font-mono text-[0.65rem] tracking-[0.12em] text-(--ft-label) uppercase">
                {statusLabel[app.status]}
              </p>
            </div>
          </div>

          <p
            className="mt-8"
            style={{
              fontFamily: "var(--ff-display)",
              fontSize: "clamp(2.1rem, 4.2vw, 3.1rem)",
              lineHeight: 1.02,
              fontWeight: 500,
              letterSpacing: "-0.03em",
              fontVariationSettings: '"opsz" 144, "SOFT" 40',
            }}
          >
            <Headline text={app.tagline} highlight={theme.highlight} />
          </p>
          <p className="mt-5 max-w-md text-(--ft-body)" style={{ fontFamily: "var(--ff-body)", fontSize: "1.02rem", lineHeight: 1.65 }}>
            {app.description}
          </p>

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
                className="btn bg-(--ft-btn) text-(--ft-btn-text) hover:bg-(--ft-btn-hover) hover:text-(--ft-btn-hover-text) focus-visible:outline-(--ft-accent)"
              >
                Visit the {app.name} site &rarr;
              </a>
            </div>
          )}
        </div>

        {/* Real screenshots, fanned */}
        {shots.length >= 3 && (
          <div
            className="relative mx-auto flex w-full max-w-[520px] items-center justify-center lg:max-w-none"
            aria-label={`${app.name} screenshots`}
            role="group"
          >
            <div className="relative z-0 -mr-[9%] w-[31%] origin-bottom-right translate-y-[18px] -rotate-[7deg]">
              <Phone src={shots[1].src} alt={shots[1].alt} />
            </div>
            <div className="relative z-10 w-[38%]">
              <Phone src={shots[0].src} alt={shots[0].alt} />
            </div>
            <div className="relative z-0 -ml-[9%] w-[31%] origin-bottom-left translate-y-[18px] rotate-[7deg]">
              <Phone src={shots[2].src} alt={shots[2].alt} />
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

function GroupHeading({ id, label }: { id: string; label: string }) {
  return (
    <div className="mb-8 border-b border-[var(--rule-color)] pb-4">
      <h3 id={id} style={{ fontSize: "clamp(1.5rem, 2.2vw, 2rem)" }}>
        {label}
      </h3>
    </div>
  );
}

const capitalize = (s: string) => s[0].toUpperCase() + s.slice(1);

export default function Studio() {
  return (
    <section
      id="studio"
      aria-label="The studio"
      className="relative"
      style={{ padding: "var(--space-section) 0" }}
    >
      <div className="page-gutter">
        <div className="section-head">
          <div>
            <p className="section-num">04 &middot; Studio</p>
            <h2 className="mt-3 balance">
              I also build and ship my own <span className="serif-italic">apps</span>.
            </h2>
          </div>
        </div>

        {/* The review clause only appears while an app is actually in review */}
        <p className="body-serif pretty mt-10 max-w-2xl" style={{ fontSize: "1.15rem" }}>
          {capitalize(spell(counts.live))} are live on the App Store
          {counts.review > 0 && <>, {spell(counts.review)} {counts.review === 1 ? "is" : "are"} in App Review,</>}
          {" "}and {spell(counts.development)} more are in development.
        </p>

        {featuredApp && (
          <Reveal className="mt-14">
            <Featured app={featuredApp} />
          </Reveal>
        )}

        <div className="mt-20" role="group" aria-labelledby="studio-live">
          <GroupHeading id="studio-live" label="On the App Store" />
          {/* Three across on desktop, two on tablets; an odd last card on tablets spans the row */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {liveGrid.map((app, i) => (
              <Reveal
                key={app.slug}
                delay={(i % 3) * 80}
                className={i === liveGrid.length - 1 && liveGrid.length % 2 === 1 ? "md:col-span-2 lg:col-span-1" : undefined}
              >
                <AppCard app={app} />
              </Reveal>
            ))}
          </div>
        </div>

        {reviewGrid.length > 0 && (
          <div className="mt-20" role="group" aria-labelledby="studio-review">
            <GroupHeading id="studio-review" label="In App Review" />
            <div className={`grid gap-6 ${reviewGrid.length > 1 ? "md:grid-cols-2 xl:grid-cols-3" : ""}`}>
              {reviewGrid.map((app, i) => (
                <Reveal key={app.slug} delay={(i % 3) * 80}>
                  <AppCard app={app} wide={reviewGrid.length === 1} />
                </Reveal>
              ))}
            </div>
          </div>
        )}

        <div className="mt-20" role="group" aria-labelledby="studio-dev">
          <GroupHeading id="studio-dev" label="In development" />
          <ol className="grid grid-cols-1 gap-x-10 md:grid-cols-2">
            {devGrid.map((app, i) => (
              <Reveal as="li" key={app.slug} delay={(i % 2) * 60}>
                <DevRow app={app} />
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
