"use client";

import Image from "next/image";
import { useEffect, useRef, type CSSProperties } from "react";
import { FadeUp, SplitLines } from "./ui/Reveal";
import { Mark } from "./ui/Marks";

/*
  The figure: the portrait with three planes, one per discipline, laid over
  the jacket (never the face). Coordinates are percentages of the photo box;
  planes may overhang its edges. Where all three overlap is the AI box,
  computed from the planes. Planes, outlines, the AI box and the tags drift
  together as one layer (like a print slightly out of register), so the box
  always bounds the real overlap.
*/
type Plane = { key: "law" | "biz" | "eng"; fill: string; x: number; y: number; w: number; h: number };

const planes: Plane[] = [
  // Overhanging the photo's edges, so most of each plane reads as true colour on chalk;
  // the triple overlap falls on the white shirt, where the multiply stays clean.
  { key: "law", fill: "bg-law", x: -10, y: 64, w: 66, h: 36 },
  { key: "biz", fill: "bg-biz", x: 46, y: 58, w: 60, h: 34 },
  { key: "eng", fill: "bg-eng", x: 34, y: 78, w: 38, h: 40 },
];

const overlap = {
  x: Math.max(...planes.map((p) => p.x)),
  y: Math.max(...planes.map((p) => p.y)),
  r: Math.min(...planes.map((p) => p.x + p.w)),
  b: Math.min(...planes.map((p) => p.y + p.h)),
};

const box = (x: number, y: number, w: number, h: number): CSSProperties => ({
  left: `${x}%`,
  top: `${y}%`,
  width: `${w}%`,
  height: `${h}%`,
});

/* An opaque label tag: never set on the blended colour itself. */
function Tag({ children, style, swatch }: { children: string; style: CSSProperties; swatch?: string }) {
  return (
    <span
      aria-hidden="true"
      style={style}
      className="absolute z-20 inline-flex items-center gap-1.5 border border-foreground bg-background px-1.5 py-0.5 font-mono text-[10px] tracking-[0.06em] whitespace-nowrap text-foreground uppercase"
    >
      {swatch && <span className={`h-1.5 w-1.5 ${swatch}`} />}
      {children}
    </span>
  );
}

function Figure() {
  const ref = useRef<HTMLDivElement>(null);

  // The colour layer drifts with the cursor (8px at most), not on touch or reduced motion.
  useEffect(() => {
    const el = ref.current;
    const host = el?.closest("section");
    if (!el || !host) return;
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const dx = Math.max(-1, Math.min(1, (e.clientX - (r.left + r.width / 2)) / (r.width * 1.5)));
      const dy = Math.max(-1, Math.min(1, (e.clientY - (r.top + r.height / 2)) / (r.height * 1.5)));
      el.style.setProperty("--dx", dx.toFixed(3));
      el.style.setProperty("--dy", dy.toFixed(3));
    };
    const leave = () => {
      el.style.setProperty("--dx", "0");
      el.style.setProperty("--dy", "0");
    };
    host.addEventListener("pointermove", move, { passive: true });
    host.addEventListener("pointerleave", leave);
    return () => {
      host.removeEventListener("pointermove", move);
      host.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <figure className="relative">
      <div ref={ref} className="relative isolate">
        {/* Registration marks at the photo's corners */}
        {/* Bottom-left is left out: the Law tag sits there */}
        {["-left-3 -top-3 border-t border-l", "-right-3 -top-3 border-t border-r", "-right-3 -bottom-3 border-b border-r"].map((pos) => (
          <span key={pos} aria-hidden="true" className={`absolute h-3 w-3 border-foreground ${pos}`} />
        ))}

        <Image
          src="/portrait-bw.jpg"
          alt="Richard T. LoRicco, principal of LoRicco & Co., in a suit and tie"
          width={800}
          height={1000}
          priority
          sizes="(min-width: 1280px) 360px, (min-width: 1024px) 320px, 300px"
          className="relative aspect-[4/5] w-full object-cover grayscale"
        />

        {/*
          Two layers that drift together. A transformed layer is its own blend
          group, so the planes' layer multiplies onto the photo as a whole
          (and each plane multiplies with the others inside it); the outlines,
          the AI box and the opaque tags ride in a normal layer above.
        */}
        <div aria-hidden="true" className="drift absolute inset-0 mix-blend-multiply">
          {planes.map((p) => (
            <span
              key={p.key}
              aria-hidden="true"
              className={`plane ${p.fill}`}
              style={box(p.x, p.y, p.w, p.h)}
            />
          ))}
        </div>
        <div aria-hidden="true" className="drift absolute inset-0">
          {planes.map((p) => (
            <span
              key={`${p.key}-o`}
              aria-hidden="true"
              className="plane-outline z-10"
              style={box(p.x, p.y, p.w, p.h)}
            />
          ))}

          {/* Where all three meet: AI, drawn as structure rather than colour */}
          <span
            aria-hidden="true"
            className="absolute z-10 border-[1.5px] border-foreground"
            style={box(overlap.x, overlap.y, overlap.r - overlap.x, overlap.b - overlap.y)}
          />
          <Tag style={{ left: `${overlap.r}%`, top: `${overlap.y}%`, transform: "translate(6px, -50%)" }}>AI</Tag>

          <Tag
            swatch="bg-law"
            style={{ left: `${planes[0].x}%`, top: `${planes[0].y + planes[0].h}%`, transform: "translate(0, 8px)" }}
          >
            Law
          </Tag>
          <Tag
            swatch="bg-biz"
            style={{
              right: `${100 - (planes[1].x + planes[1].w)}%`,
              top: `${planes[1].y}%`,
              transform: "translate(0, calc(-100% - 6px))",
            }}
          >
            Business
          </Tag>
          <Tag
            swatch="bg-eng"
            style={{
              // Inside the plane's bottom-left corner: clear of the Law tag at every supported width
              left: `${planes[2].x}%`,
              top: `${planes[2].y + planes[2].h}%`,
              transform: "translate(6px, calc(-100% - 6px))",
            }}
          >
            Engineering
          </Tag>
        </div>
      </div>

      <figcaption className="mt-24 flex items-baseline justify-between gap-1 font-mono whitespace-nowrap text-[11px] tracking-[0.06em] text-text-muted uppercase">
        <span>Fig. 1</span>
        <span className="text-foreground">R.T. LoRicco, principal</span>
        <span className="sr-only">
          Three overlapping panels labelled Law, Business and Engineering cover the lower part of the
          portrait; the area where all three overlap is labelled AI.
        </span>
      </figcaption>
    </figure>
  );
}

export default function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="relative overflow-hidden px-6 pt-28 pb-16 sm:pt-32 lg:flex lg:min-h-[100svh] lg:flex-col lg:justify-center lg:pt-32 lg:pb-20"
    >
      <div className="relative mx-auto w-full max-w-6xl">
        <FadeUp immediate delay={0} y={8}>
          <p className="kicker flex items-center gap-3 text-foreground">
            <Mark className="text-[18px]" />
            Attorney · MBA · Engineer
          </p>
        </FadeUp>

        <SplitLines
          as="h1"
          immediate
          /*
            Phones: "Websites, AI, and" is about 7.9em wide in this face,
            so the size tracks the viewport to keep that line whole.
          */
          className="font-display mt-6 text-[length:min(3rem,calc((100vw-3rem)/8.3))] leading-[0.98] font-bold sm:text-[4rem] lg:text-[5.4rem] xl:text-[6.2rem]"
          lines={[
            "Websites, AI, and",
            <span key="l2" className="editorial tracking-[-0.02em]">
              technical consulting.
            </span>,
          ]}
        />

        <div className="mt-10 grid grid-cols-[minmax(0,1fr)] items-start gap-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-20">
          <div className="max-w-xl lg:pt-2">
            {/*
              Kept out of the entrance animation on purpose: this paragraph is the
              LCP element on phones.
            */}
            <p className="text-lg leading-relaxed text-body-muted lg:text-[1.15rem]">
              I&apos;m a Connecticut attorney and software engineer. I rebuild
              and run websites and AI systems for law firms and small businesses,
              train lawyers and their staff on AI, do legal research and
              technical consulting for other attorneys, and advise startups.
              You work with me directly from the first call to the finished work.
            </p>

            <FadeUp immediate delay={0.3} className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <a
                href="mailto:admin@loriccoandco.com"
                className="btn bg-foreground px-6 py-3.5 text-sm font-semibold text-background"
                style={{ ["--btn-fill" as string]: "var(--color-eng)" }}
              >
                Get in touch <span className="btn-arrow">→</span>
              </a>
              <a
                href="#services"
                className="group font-mono text-[13px] text-foreground underline decoration-line-strong underline-offset-[6px] transition-colors hover:text-accent hover:decoration-accent"
              >
                See what I do{" "}
                <span className="inline-block transition-transform duration-300 group-hover:translate-y-1 motion-reduce:transition-none">
                  ↓
                </span>
              </a>
            </FadeUp>
          </div>

          <FadeUp
            immediate
            delay={0.15}
            y={20}
            className="mx-auto w-full max-w-[300px] px-6 min-[360px]:px-8 lg:mx-0 lg:w-[340px] lg:max-w-none lg:px-6 xl:w-[380px]"
          >
            <Figure />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
