"use client";

import { useEffect, useState } from "react";
import { FadeUp, SplitLines } from "./ui/Reveal";

const EMAIL = "admin@loriccoandco.com";

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
      className="group inline-flex items-center gap-2 border border-white/30 px-4 py-3 font-mono text-[11px] tracking-[0.06em] text-data-hi transition-colors duration-200 hover:border-biz hover:text-biz"
      aria-live="polite"
    >
      <span
        className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${copied ? "bg-biz" : "bg-current"}`}
        aria-hidden="true"
      />
      {copied ? "COPIED" : "COPY ADDRESS"}
    </button>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-0 bg-data-bg text-data-hi" aria-label="Contact">
      <div className="mx-auto grid max-w-[90rem] grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        {/* The one yellow field on the page: about a third of the band, ink type on it (11.2:1) */}
        <div className="bg-biz px-6 py-14 text-foreground sm:px-10 lg:py-24 lg:pl-[max(1.5rem,calc((100vw-72rem)/2))]">
          <FadeUp>
            {/* Ink on yellow (11.2:1): the muted grey used elsewhere fails here */}
            <p className="kicker flex items-center gap-3 text-foreground">
              <span className="tnum">06</span>
              <span aria-hidden="true">/</span>
              Contact
            </p>
          </FadeUp>
          <SplitLines
            className="font-display mt-6 max-w-md text-4xl leading-[1.02] font-bold sm:text-5xl lg:text-[3.6rem]"
            lines={[
              "Tell me what",
              <span key="l2" className="editorial tracking-[-0.02em]">
                you&apos;re working on.
              </span>,
            ]}
          />
        </div>

        <div className="px-6 py-14 sm:px-10 lg:py-24 lg:pr-[max(1.5rem,calc((100vw-72rem)/2))] lg:pl-16">
          <FadeUp delay={0.1}>
            <p className="max-w-lg text-[16px] leading-relaxed text-data-ink">
              Send me a note about the website, the team, the case, or the
              business. I&apos;ll reply with a few questions, and if it
              makes sense we&apos;ll set up a short call and I&apos;ll
              follow up with a written review.
            </p>
          </FadeUp>

          <FadeUp delay={0.2} className="mt-12">
            <p className="font-mono text-[11px] tracking-[0.08em] text-data-ink uppercase">Write to</p>
            <a
              href={`mailto:${EMAIL}`}
              className="group mt-3 inline-flex max-w-full items-baseline gap-[0.3em] font-display text-[length:clamp(1.3rem,calc((100vw-3rem)/14),3.6rem)] leading-[1.1] font-bold tracking-[-0.03em] text-data-hi [overflow-wrap:anywhere] lg:text-[length:clamp(1.6rem,calc((100vw-30rem)/18),3.6rem)]"
            >
              <span className="underline decoration-white/25 decoration-2 underline-offset-[0.18em] transition-colors duration-300 group-hover:text-biz group-hover:decoration-biz">
                {EMAIL}
              </span>
              <span className="btn-arrow shrink-0 text-biz" aria-hidden="true">
                →
              </span>
            </a>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <CopyEmail />
              <p className="font-mono text-[11px] text-data-ink">Accepting clients / replies usually within one business day</p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
