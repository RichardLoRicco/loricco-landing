"use client";

import Image from "next/image";
import { useEffect, useRef, type ReactNode } from "react";
import Blueprint from "./Blueprint";
import { FadeUp, SplitLines } from "./ui/Reveal";
import { TitleBlock, Zones, type TitleCell } from "./ui/Sheet";
import { counts, pad2 } from "../lib/apps";

/*
  The title block in the corner of the sheet. Every figure here is checkable
  elsewhere on the page or on the linked sites; update it when the Work or
  Studio sections change.
*/
const titleCells: TitleCell[] = [
  { label: "Drawing", value: "LCO-001" },
  { label: "Base", value: "New Haven, CT" },
  { label: "Apps on the App Store", value: pad2(counts.live) },
  { label: "Lighthouse, loriccolaw.com", value: "100 · 100 · 100 · 100" },
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
      className="sheet relative overflow-hidden px-6 pt-28 pb-20 sm:pt-32 lg:flex lg:min-h-[100svh] lg:flex-col lg:justify-center lg:pt-32 lg:pb-24"
    >
      <Blueprint cobalt />

      {/* The expressive ampersand, drawn in outline at drafting scale */}
      <span
        aria-hidden="true"
        className="editorial ghost-pale pointer-events-none absolute -right-[0.06em] -bottom-[0.2em] select-none text-[46vw] leading-none lg:top-[2%] lg:bottom-auto lg:text-[30vw]"
      >
        &amp;
      </span>

      <div className="relative mx-auto w-full max-w-6xl">
        {/* ── Sheet header, like the top rule of a drawing ── */}
        <FadeUp immediate delay={0} y={8}>
          <div className="flex items-center justify-between gap-6 border-b border-background/30 pb-3 font-mono text-[11px] tracking-[0.14em] text-background/80 uppercase">
            <span>LCO / Cover sheet</span>
            <span className="hidden text-background sm:inline">Attorney · MBA · Engineer</span>
            <span className="tnum">Sheet 00 / 06</span>
          </div>
          <p className="mt-3 font-mono text-[11px] tracking-[0.14em] text-background uppercase sm:hidden">
            Attorney · MBA · Engineer
          </p>
        </FadeUp>

        {/* ── The argument, at full width ── */}
        <SplitLines
          as="h1"
          immediate
          /*
            Phones: "Websites, AI, and" is ~7.7em wide, so the size tracks the
            viewport (gutters out, divided by 8) to keep that line whole
            instead of stranding "and" on a line of its own.
          */
          className="font-display mt-12 max-w-5xl text-[length:min(2.9rem,calc((100vw-3rem)/8))] leading-[0.98] font-bold tracking-[-0.03em] text-background sm:text-[3.8rem] lg:mt-16 lg:text-[5.4rem] xl:text-[6.2rem]"
          lines={[
            "Websites, AI, and",
            <span key="l2" className="editorial font-medium tracking-[-0.01em] text-cobalt-pale">
              technical consulting.
            </span>,
          ]}
        />

        <div className="mt-10 grid items-start gap-14 lg:mt-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-24">
          <div className="max-w-xl">
            {/*
              Kept out of the entrance animation on purpose: this paragraph is the
              LCP element on phones, and a delayed fade was costing ~2s of LCP.
            */}
            <p className="text-lg leading-relaxed text-background/85 lg:text-[1.15rem]">
              I&apos;m a Connecticut attorney and software engineer. I rebuild
              and run websites and AI systems for law firms and small businesses,
              train lawyers and their staff on AI, do legal research and
              technical consulting for other attorneys, and advise startups.
              You work with me directly from the first call to the finished work.
            </p>

            <FadeUp immediate delay={0.3} className="mt-9 flex flex-wrap items-center gap-6">
              <a
                href="mailto:admin@loriccoandco.com"
                className="btn bg-background px-6 py-3.5 text-sm font-semibold text-cobalt [outline-offset:4px] hover:text-background hover:shadow-[0_14px_30px_-12px_rgba(10,16,60,0.6)]"
                style={{ ["--btn-fill" as string]: "var(--color-foreground)" }}
              >
                Get in touch <span className="btn-arrow">→</span>
              </a>
              <a
                href="#services"
                className="group font-mono text-[13px] text-background transition-colors duration-200 hover:text-cobalt-pale"
              >
                See what I do{" "}
                <span className="inline-block transition-transform duration-300 group-hover:translate-y-1">
                  ↓
                </span>
              </a>
            </FadeUp>

            {/* ── Title block ── */}
            <FadeUp immediate delay={0.45} y={12} className="mt-12 lg:mt-16">
              <TitleBlock heading="LoRicco & Co. LLC" cells={titleCells} />
            </FadeUp>
          </div>

          {/* ── The principal, drawn into the sheet as figure 1 ── */}
          <FadeUp
            immediate
            delay={0.2}
            y={24}
            className="relative mx-auto mt-6 w-full max-w-[280px] lg:mx-0 lg:mt-0 lg:w-[310px] xl:w-[340px]"
          >
            {/* Drafting annotation: one leader to the figure label */}
            <div aria-hidden="true" className="pointer-events-none absolute -top-9 left-0 hidden items-center gap-2 font-mono text-[10px] tracking-[0.14em] text-background/80 uppercase lg:flex">
              <span>Fig. 1</span>
              <span className="h-px w-16 bg-background/50" />
              <span className="h-1.5 w-1.5 rotate-45 border border-background/70" />
            </div>

            <TiltCard>
              {/* Backing sheets: a short stack of prepared work */}
              <div
                className="absolute inset-0 translate-x-6 translate-y-6 rounded-[4px] border border-background/25 bg-background/5"
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-[4px] border border-background/35 bg-background/10"
                aria-hidden="true"
              />

              <figure className="relative overflow-hidden rounded-[4px] border border-background/60 bg-card text-foreground shadow-[0_40px_70px_-30px_rgba(12,22,96,0.85)]">
                <div className="tilt-sheen z-10" aria-hidden="true" />
                <div className="p-3 pb-0">
                  <Image
                    src="/portrait-bw.jpg"
                    alt="Richard T. LoRicco, principal of LoRicco & Co., in a suit and tie"
                    width={800}
                    height={1000}
                    priority
                    sizes="(min-width: 1280px) 340px, (min-width: 1024px) 310px, 280px"
                    className="aspect-[4/5] w-full rounded-[2px] object-cover"
                  />
                </div>
                {/* Base and disciplines live in the title block and sheet header, so the caption is the name. */}
                <figcaption className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-4 py-3 font-mono text-[10.5px] tracking-[0.1em] uppercase">
                  <span className="whitespace-nowrap text-text-muted">
                    Principal / <span className="font-medium text-foreground">R.T. LoRicco</span>
                  </span>
                </figcaption>
              </figure>
            </TiltCard>
          </FadeUp>
        </div>
      </div>

      <Zones edge="bottom" />
    </section>
  );
}
