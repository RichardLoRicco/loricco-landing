"use client";

import Image from "next/image";
import { useEffect, useRef, type ReactNode } from "react";
import Blueprint from "./Blueprint";
import { FadeUp, SplitLines } from "./ui/Reveal";
import { Clause, Comment } from "./ui/Redline";

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
      className="relative overflow-hidden px-6 pt-28 pb-16 sm:pt-32 lg:flex lg:min-h-[100svh] lg:flex-col lg:justify-center lg:pt-32 lg:pb-20"
    >
      <Blueprint fade />

      <div className="relative mx-auto w-full max-w-6xl">
        {/* Document header: the page is a draft under revision */}
        <FadeUp immediate delay={0} y={8}>
          <div className="flex items-center justify-between gap-6 font-mono text-[11px] tracking-[0.06em] text-text-muted uppercase">
            <Clause num="0" rule={false}>LCO / Overview</Clause>
            <span className="tnum">Rev. Oct 2026</span>
          </div>
          <p className="kicker mt-6 text-foreground">Attorney · MBA · Engineer</p>
        </FadeUp>

        {/* ── The argument ── */}
        <SplitLines
          as="h1"
          immediate
          /*
            Phones: "Websites, AI, and" is about 8.6em wide in Archivo at this
            width setting, so the size tracks the viewport (gutters out,
            divided by 9) to keep that line whole.
          */
          className="font-display mt-5 max-w-5xl text-[length:min(2.8rem,calc((100vw-3rem)/9))] leading-[1] sm:text-[3.7rem] lg:text-[5.2rem] xl:text-[5.9rem]"
          lines={[
            "Websites, AI, and",
            <span key="l2" className="editorial font-light tracking-[-0.02em] [font-stretch:100%]">
              <span className="ins-mark">technical consulting.</span>
            </span>,
          ]}
        />

        <div className="mt-10 grid grid-cols-[minmax(0,1fr)] items-start gap-14 lg:mt-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-20">
          <div className="max-w-xl">
            {/*
              Kept out of the entrance animation on purpose: this paragraph is the
              LCP element on phones, and a delayed fade was costing ~2s of LCP.
            */}
            <p className="text-lg leading-relaxed text-body-muted lg:text-[1.15rem]">
              I&apos;m a Connecticut attorney and software engineer. I rebuild
              and run websites and AI systems for law firms and small businesses,
              train lawyers and their staff on AI, do legal research and
              technical consulting for other attorneys, and advise startups.
              You work with me directly from the first call to the finished work.
            </p>

            <FadeUp immediate delay={0.3} className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href="mailto:admin@loriccoandco.com"
                className="btn bg-ins px-6 py-3.5 text-sm font-semibold text-white hover:shadow-[0_14px_30px_-12px_rgba(11,122,75,0.55)]"
                style={{ ["--btn-fill" as string]: "var(--color-foreground)" }}
              >
                Get in touch <span className="btn-arrow">→</span>
              </a>

              {/*
                The page's one AI suggestion: the secondary link offered as
                ghost text after a caret, "accepted" (inked and underlined)
                on hover or focus. The Tab hint only shows on devices with a
                pointer that hovers.
              */}
              <a
                href="#services"
                className="group inline-flex items-center gap-2.5 text-[15px] text-ghost transition-colors duration-200 hover:text-foreground focus-visible:text-foreground"
              >
                <span className="caret" aria-hidden="true" />
                <span className="border-b border-dashed border-line-strong pb-0.5 transition-colors group-hover:border-ins group-focus-visible:border-ins">
                  See what I do
                </span>
                <span className="kbd kbd-hint" aria-hidden="true">
                  Tab ↹
                </span>
              </a>
            </FadeUp>
          </div>

          {/* ── The principal, with a review comment pinned to the figure ── */}
          <FadeUp
            immediate
            delay={0.2}
            y={24}
            className="relative mx-auto w-full max-w-[280px] lg:mx-0 lg:w-[310px] xl:w-[330px]"
          >
            <TiltCard>
              <figure className="relative overflow-hidden rounded-[4px] border border-line-strong bg-card shadow-[0_32px_64px_-28px_rgba(18,19,23,0.4)]">
                <div className="tilt-sheen z-10" aria-hidden="true" />
                <div className="p-3 pb-0">
                  <Image
                    src="/portrait-bw.jpg"
                    alt="Richard T. LoRicco, principal of LoRicco & Co., in a suit and tie"
                    width={800}
                    height={1000}
                    priority
                    sizes="(min-width: 1280px) 330px, (min-width: 1024px) 310px, 280px"
                    className="aspect-[4/5] w-full rounded-[2px] object-cover"
                  />
                </div>
                <figcaption className="flex items-baseline justify-between gap-4 px-4 py-3 font-mono text-[10.5px] tracking-[0.04em] uppercase">
                  <span className="text-text-muted">Fig. 1</span>
                  <span className="font-medium whitespace-nowrap text-foreground">R.T. LoRicco</span>
                </figcaption>
              </figure>
            </TiltCard>

            {/* Review comment, anchored to the figure by a short leader */}
            <div className="relative mt-5 xl:absolute xl:top-[58%] xl:-left-[13.5rem] xl:mt-0 xl:w-56">
              <span
                aria-hidden="true"
                className="absolute top-1/2 -right-6 hidden h-px w-6 bg-line-strong xl:block"
              />
              <Comment meta="Principal">Attorney (LL.M., J.D., MBA) and software engineer, based in New Haven.</Comment>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
