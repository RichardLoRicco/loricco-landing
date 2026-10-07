import Image from "next/image";
import HeroParallax from "./HeroParallax";
import { counts, pad2 } from "../lib/apps";

const EMAIL = "admin@loriccoandco.com";

/*
  Every figure here is checkable elsewhere on the page or on the linked sites.
  Update these when the Work or Studio sections change.
*/
const facts: { label: string; value: string; wide?: boolean }[] = [
  { label: "Base", value: "New Haven, CT" },
  { label: "Apps on the App Store", value: pad2(counts.live) },
  { label: "Lighthouse, loriccolaw.com", value: "100 · 100 · 100 · 100", wide: true },
];

export default function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative flex min-h-[calc(100dvh-var(--dateline-h))] items-center overflow-hidden pt-[calc(var(--nav-h)+3rem)] pb-20"
    >
      {/* The brand's ampersand in place of the personal site's § watermark */}
      <span aria-hidden="true" className="ink-mark" style={{ top: "6%", right: "-3%" }}>
        &amp;
      </span>

      <div className="page-gutter relative z-10 w-full">
        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <p className="eyebrow animate-reveal">
              <span>Attorney &middot; MBA &middot; Engineer</span>
            </p>
            <h1
              className="mt-6 animate-reveal delay-100 balance"
              style={{ fontSize: "clamp(3rem, 6.3vw, 5.75rem)", letterSpacing: "-0.045em" }}
            >
              Websites, AI, and{" "}
              <br className="hidden sm:block" />
              <span
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "var(--accent)",
                  fontVariationSettings: '"opsz" 144, "SOFT" 60',
                }}
              >
                technical consulting.
              </span>
            </h1>

            {/*
              Kept out of the entrance animation on purpose: this paragraph is the
              LCP element on phones, and a delayed fade was costing ~2s of LCP.
            */}
            <p
              className="mt-8 body-serif pretty max-w-2xl"
              style={{ fontSize: "clamp(1.15rem, 1.6vw, 1.35rem)" }}
            >
              I&apos;m a Connecticut attorney and software engineer. I rebuild and
              run websites and AI systems for law firms and small businesses, train
              lawyers and their staff on AI, consult with counsel on the technology
              in their cases, take on contract research and drafting for law
              firms, and advise startups. You work with me directly from
              the first call to the finished work.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4 animate-reveal delay-300">
              <a href={`mailto:${EMAIL}`} className="btn btn-primary">
                Get in touch
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a href="#services" className="btn btn-secondary">
                See what I do
              </a>
            </div>
          </div>

          {/* The principal, framed the way the personal site frames its portrait */}
          <aside className="animate-reveal delay-400">
            {/* Portrait and facts drift together, at most the section's 5rem bottom padding */}
            <HeroParallax max={80}>
              <div className="flex flex-col gap-8">
                <figure
                  className="relative mx-auto w-[200px] sm:w-[240px]"
                  style={{
                    border: "1px solid var(--border-strong)",
                    padding: "10px",
                    background: "var(--surface-raised)",
                    borderRadius: 2,
                  }}
                >
                  <Image
                    src="/portrait-bw.jpg"
                    alt="Richard T. LoRicco, principal of LoRicco & Co., in a suit and tie"
                    width={800}
                    height={1000}
                    priority
                    sizes="240px"
                    className="aspect-[4/5] w-full object-cover"
                    style={{ display: "block" }}
                  />
                  <figcaption className="meta mt-3" style={{ textAlign: "center" }}>
                    Principal &middot; R.&nbsp;T.&nbsp;LoRicco
                  </figcaption>
                </figure>

                <dl
                  className="grid grid-cols-2 gap-x-6 gap-y-4"
                  style={{
                    borderTop: "1px solid var(--rule-color)",
                    borderBottom: "1px solid var(--rule-color)",
                    padding: "1.25rem 0",
                  }}
                >
                  {facts.map(({ label, value, wide }) => (
                    <div key={label} className={wide ? "col-span-2" : undefined}>
                      <dt className="meta">{label}</dt>
                      <dd
                        className="mt-1"
                        style={{
                          fontFamily: "var(--ff-display)",
                          fontSize: "1.05rem",
                          fontVariantNumeric: "tabular-nums",
                        }}
                      >
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </HeroParallax>
          </aside>
        </div>
      </div>
    </section>
  );
}
