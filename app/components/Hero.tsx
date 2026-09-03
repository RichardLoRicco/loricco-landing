"use client";

import Image from "next/image";
import { useEffect, useRef, type ReactNode } from "react";
import Blueprint from "./Blueprint";
import { FadeUp, SplitLines } from "./ui/Reveal";

/*
  Every figure here is checkable elsewhere on the page or on the linked sites.
  Update these when the Work or Studio sections change.
*/
const facts: [string, string][] = [
  ["Sites in production", "02"],
  ["Apps on the App Store", "04"],
  ["Lighthouse, loriccolaw.com", "100 · 100 · 100 · 100"],
  ["Base", "New Haven, CT"],
];

/* The exhibit card leans a few degrees toward the cursor. */
function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      el.style.setProperty("--ry", `${((px - 0.5) * 9).toFixed(2)}deg`);
      el.style.setProperty("--rx", `${((0.5 - py) * 9).toFixed(2)}deg`);
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    const leave = () => {
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
    };
    el.addEventListener("pointermove", move, { passive: true });
    el.addEventListener("pointerleave", leave);
    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <div ref={ref} className={`tilt ${className}`}>
      {children}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="relative overflow-hidden px-6 pt-32 pb-16 sm:pt-36 lg:flex lg:min-h-[100svh] lg:flex-col lg:justify-center lg:pt-40 lg:pb-14"
    >
      <Blueprint fade />

      {/* The expressive ampersand, drawn in outline at drafting scale */}
      <span
        aria-hidden="true"
        className="editorial ghost-cobalt pointer-events-none absolute -bottom-[0.24em] -right-[0.06em] select-none text-[46vw] leading-none opacity-60 lg:top-[4%] lg:bottom-auto lg:text-[30vw]"
      >
        &
      </span>

      <div className="relative mx-auto w-full max-w-6xl">
        <FadeUp immediate delay={0} y={10}>
          <p className="kicker mb-7 text-cobalt">Attorney · MBA · Engineer</p>
        </FadeUp>

        {/* ── The argument, at full width ── */}
        <SplitLines
          as="h1"
          immediate
          className="font-display max-w-5xl text-[2.9rem] leading-[0.98] font-bold tracking-[-0.03em] sm:text-[3.8rem] lg:text-[5.2rem] xl:text-[5.8rem]"
          lines={[
            "Websites, AI, and",
            <span key="l2" className="editorial font-medium tracking-[-0.01em]">
              technical consulting.
            </span>,
          ]}
        />

        <div className="mt-10 grid items-start gap-12 lg:mt-14 lg:grid-cols-[1fr_auto] lg:gap-20">
          <div className="max-w-xl">
            {/*
              Kept out of the entrance animation on purpose: this paragraph is the
              LCP element on phones, and a delayed fade was costing ~2s of LCP.
            */}
            <p className="text-lg leading-relaxed text-body-muted lg:text-[1.15rem]">
              I&apos;m a Connecticut attorney and software engineer. I rebuild
              and run websites and AI systems for law firms and small businesses,
              train lawyers and their staff on AI, consult with counsel on the
              technology in their cases, and advise startups. You work with me
              directly from the first call to the finished work.
            </p>

            <FadeUp immediate delay={0.3} className="mt-9 flex flex-wrap items-center gap-6">
              <a
                href="mailto:admin@loriccoandco.com"
                className="btn bg-cobalt px-6 py-3.5 text-sm font-semibold text-white hover:shadow-[0_12px_28px_-10px_rgba(32,56,200,0.55)]"
                style={{ ["--btn-fill" as string]: "var(--color-foreground)" }}
              >
                Get in touch <span className="btn-arrow">→</span>
              </a>
              <a
                href="#services"
                className="group font-mono text-[13px] text-foreground transition-colors duration-200 hover:text-cobalt"
              >
                See what I do{" "}
                <span className="inline-block transition-transform duration-300 group-hover:translate-y-1">
                  ↓
                </span>
              </a>
            </FadeUp>
          </div>

          {/* ── The principal. Same exhibit treatment as the OG share card. ── */}
          <FadeUp
            immediate
            delay={0.2}
            y={24}
            className="relative mx-auto w-full max-w-[280px] lg:mx-0 lg:-mt-16 lg:w-[300px] xl:w-[330px]"
          >
            <TiltCard>
              {/* Backing sheets: a short stack of prepared work */}
              <div
                className="absolute inset-0 translate-x-6 translate-y-6 rounded-[4px] border border-line bg-card/40"
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-[4px] border border-line bg-card/70"
                aria-hidden="true"
              />

              <figure className="relative overflow-hidden rounded-[4px] border border-line-strong bg-card shadow-[0_32px_64px_-28px_rgba(26,24,20,0.38)]">
                <div className="tilt-sheen z-10" aria-hidden="true" />
                <div className="p-3 pb-0">
                  <Image
                    src="/portrait-bw.jpg"
                    alt="Richard T. LoRicco, principal of LoRicco & Co., in a suit and tie"
                    width={800}
                    height={1000}
                    priority
                    sizes="(min-width: 1280px) 330px, (min-width: 1024px) 300px, 280px"
                    className="aspect-[4/5] w-full rounded-[2px] object-cover"
                  />
                </div>
                <figcaption className="flex items-baseline justify-between gap-4 px-4 py-3 font-mono text-[11px] tracking-[0.12em] uppercase">
                  <span className="text-text-muted">
                    Principal / <span className="font-medium text-foreground">R.T. LoRicco</span>
                  </span>
                  <span className="text-text-muted">New Haven, CT</span>
                </figcaption>
              </figure>
            </TiltCard>
          </FadeUp>
        </div>
      </div>

      {/* ── Facts ledger ── */}
      <FadeUp immediate delay={0.5} y={12} className="relative mx-auto mt-16 w-full max-w-6xl lg:mt-20">
        <dl className="grid grid-cols-2 border-y border-line bg-background/60 backdrop-blur-sm lg:grid-cols-4">
          {facts.map(([label, value], i) => (
            <div
              key={label}
              className={`px-5 py-5 ${i % 2 === 0 ? "border-r border-line" : ""} ${
                i < 2 ? "border-b border-line lg:border-b-0" : ""
              } ${i === 2 ? "lg:border-r lg:border-line" : ""}`}
            >
              <dt className="kicker text-[10px] text-text-muted">{label}</dt>
              <dd className="mt-2 font-mono text-[15px] font-medium text-foreground tnum">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </FadeUp>
    </section>
  );
}
