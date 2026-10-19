import Image from "next/image";
import HeroParallax from "./HeroParallax";

const EMAIL = "admin@loriccoandco.com";

export default function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative flex items-center overflow-hidden pt-[calc(var(--nav-h)+2.5rem)] pb-16 lg:min-h-[calc(100dvh-var(--dateline-h))] lg:pt-[calc(var(--nav-h)+3rem)] lg:pb-20"
    >
      {/* The brand's ampersand in place of the personal site's § watermark */}
      <span aria-hidden="true" className="ink-mark" style={{ top: "6%", right: "-3%" }}>
        &amp;
      </span>

      <div className="page-gutter relative z-10 w-full">
        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            {/*
              Phones: a small framed portrait opens the hero beside the practice's
              name and city, which the dateline hides at this width. Desktop keeps
              the credential eyebrow and the full portrait column on the right.
            */}
            <div className="flex items-center gap-4 animate-reveal lg:block">
              <span
                className="block shrink-0 lg:hidden"
                style={{
                  width: 64,
                  padding: 4,
                  border: "1px solid var(--border-strong)",
                  background: "var(--surface-raised)",
                  borderRadius: 2,
                }}
              >
                <Image
                  src="/portrait-bw.jpg"
                  alt="Richard T. LoRicco"
                  width={160}
                  height={200}
                  sizes="56px"
                  loading="eager"
                  className="aspect-[4/5] w-full object-cover"
                  style={{ display: "block" }}
                />
              </span>
              {/* Desktop shows the credentials in the dateline just above, so this is phones only */}
              <p className="eyebrow hero-eyebrow lg:hidden">
                <span className="flex flex-col gap-1.5">
                  <span>LoRicco &amp; Co. LLC</span>
                  <span>New Haven, CT</span>
                </span>
              </p>
            </div>
            <h1
              className="mt-6 animate-reveal reveal-delay-100 balance"
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
              I&apos;m Richard LoRicco, a Connecticut attorney and software engineer
              in New Haven. I rebuild and maintain websites for law firms and small businesses, consult with
              attorneys on the technology in their cases, and take on research and
              drafting for firms. I also build apps and AI tools, train teams on AI,
              and advise startups. You work with me directly.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4 animate-reveal reveal-delay-300">
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
          {/* Lazy on purpose: the column is display:none on phones, where an eager
              image would still download; on desktop it is in view at load, so
              lazy loading fetches it immediately. */}
          <aside className="hidden animate-reveal reveal-delay-400 lg:block">
            {/* The portrait drifts at most the section's 5rem bottom padding */}
            <HeroParallax max={80}>
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
                  sizes="240px"
                  className="aspect-[4/5] w-full object-cover"
                  style={{ display: "block" }}
                />
                <figcaption className="meta mt-3" style={{ textAlign: "center" }}>
                  Principal &middot; R.&nbsp;T.&nbsp;LoRicco
                </figcaption>
              </figure>
            </HeroParallax>
          </aside>
        </div>
      </div>
    </section>
  );
}
