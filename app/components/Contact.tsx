"use client";

import { useEffect, useState } from "react";
import Blueprint from "./Blueprint";
import { FadeUp, SplitLines } from "./ui/Reveal";
import { TitleBlock, Zones, type TitleCell } from "./ui/Sheet";

const EMAIL = "admin@loriccoandco.com";

/* The closing sheet's title block. */
const titleCells: TitleCell[] = [
  { label: "Principal", value: "R.T. LoRicco" },
  { label: "Base", value: "Connecticut, USA" },
  { label: "Background", value: "J.D. · LL.M. · MBA · SWE", wide: true },
  { label: "Work", value: "websites\u00a0· training\u00a0· research\u00a0· consulting\u00a0· advisory", wide: true },
  {
    label: "Status",
    value: (
      <span className="inline-flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-background" aria-hidden="true" />
        Accepting clients
      </span>
    ),
    wide: true,
  },
];

function CopyEmail() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2200);
    return () => clearTimeout(t);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
    } catch {
      /* Clipboard unavailable: the mailto link next to this still works. */
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="group inline-flex items-center gap-2 rounded-[3px] border border-background/50 px-4 py-3 font-mono text-[12px] tracking-[0.06em] text-background transition-colors duration-200 hover:border-background hover:bg-background hover:text-cobalt"
      aria-live="polite"
    >
      <span
        className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${copied ? "bg-good-wash" : "bg-current"}`}
        aria-hidden="true"
      />
      {copied ? "COPIED" : "COPY ADDRESS"}
    </button>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="sheet relative overflow-hidden px-6 pt-24 pb-20 lg:pt-32 lg:pb-28"
      aria-label="Contact"
    >
      <Blueprint cobalt />
      <Zones edge="top" />

      <div className="relative mx-auto max-w-6xl">
        {/* Sheet header: the page closes on the same drawing it opened with */}
        <FadeUp y={8}>
          <div className="flex items-center justify-between gap-6 border-b border-background/30 pb-3 font-mono text-[11px] tracking-[0.14em] text-background/80 uppercase">
            <span>LCO / Contact</span>
            <span className="tnum">Sheet 06 / 06</span>
          </div>
        </FadeUp>

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,25rem)] lg:gap-20">
          <div>
            <SplitLines
              className="font-display max-w-xl text-4xl leading-[1.04] font-bold tracking-tight text-background sm:text-5xl lg:text-[3.8rem]"
              lines={[
                "Tell me what",
                <span key="l2" className="editorial font-medium text-cobalt-pale">
                  you&apos;re working on.
                </span>,
              ]}
            />
            <FadeUp delay={0.15}>
              <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-background/85">
                Send me a note about the website, the team, the case, or the
                business. I&apos;ll reply with a few questions, and if it
                makes sense we&apos;ll set up a short call and I&apos;ll
                follow up with a written review.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.2}>
            <TitleBlock heading="LoRicco & Co. LLC" cells={titleCells} />
          </FadeUp>
        </div>

        {/* The address itself is the call to action, set at display size */}
        <FadeUp delay={0.25} className="mt-16 border-t border-background/30 pt-10 lg:mt-20">
          <p className="font-mono text-[11px] tracking-[0.14em] text-background/80 uppercase">Write to</p>
          <a
            href={`mailto:${EMAIL}`}
            className="group mt-3 inline-flex max-w-full items-baseline gap-[0.25em] font-display text-[length:clamp(1.35rem,calc((100vw-3rem)/13),5.5rem)] leading-[1.05] font-bold tracking-[-0.025em] text-background [overflow-wrap:anywhere]"
          >
            <span className="u-link [background-size:100%_2px] pb-1 group-hover:text-cobalt-pale">{EMAIL}</span>
            <span className="btn-arrow shrink-0 text-cobalt-pale" aria-hidden="true">
              →
            </span>
          </a>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <CopyEmail />
            <p className="font-mono text-[12px] text-background/80">REPLIES / usually one business day</p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
