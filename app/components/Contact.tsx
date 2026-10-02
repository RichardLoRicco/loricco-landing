"use client";

import { useEffect, useState } from "react";
import { FadeUp, SplitLines } from "./ui/Reveal";
import { Clause, Comment } from "./ui/Redline";

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
      className="group inline-flex items-center gap-2 rounded-[3px] border border-line-strong bg-card px-4 py-3 font-mono text-[11px] tracking-[0.04em] text-foreground transition-colors duration-200 hover:border-ins hover:text-ins"
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
    <section id="contact" className="section-y relative scroll-mt-24 px-6" aria-label="Contact">
      <div className="relative mx-auto max-w-6xl">
        <FadeUp>
          <Clause num="6">Contact</Clause>
        </FadeUp>

        <div className="mt-6 grid grid-cols-[minmax(0,1fr)] gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,20rem)] lg:items-end lg:gap-20">
          <div>
            <SplitLines
              className="font-display max-w-2xl text-4xl leading-[1.02] font-[760] tracking-[-0.03em] [font-stretch:112%] sm:text-5xl lg:text-[4rem]"
              lines={[
                "Tell me what",
                <span key="l2" className="editorial font-light tracking-[-0.02em] [font-stretch:100%]">
                  you&apos;re working on.
                </span>,
              ]}
            />
            <FadeUp delay={0.15}>
              <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-body-muted">
                Send me a note about the website, the team, the case, or the
                business. I&apos;ll reply with a few questions, and if it
                makes sense we&apos;ll set up a short call and I&apos;ll
                follow up with a written review.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.2}>
            <Comment meta="Status">
              <span className="inline-flex items-center gap-2 font-medium text-foreground">
                <span className="font-mono text-ins" aria-hidden="true">+</span>
                Accepting clients
              </span>
              <span className="mt-1 block">Replies usually come within one business day.</span>
            </Comment>
          </FadeUp>
        </div>

        {/* The address is the call to action, set at display size as an inserted line */}
        <FadeUp delay={0.25} className="mt-14 border-t border-line pt-10 lg:mt-16">
          <a
            href={`mailto:${EMAIL}`}
            className="group inline-flex max-w-full items-baseline gap-[0.3em] font-display text-[length:clamp(1.2rem,calc((100vw-3rem)/16.5),4.4rem)] leading-[1.1] font-[760] tracking-[-0.03em] [font-stretch:108%] [overflow-wrap:anywhere]"
          >
            <span className="font-mono text-[0.5em] text-ins" aria-hidden="true">+</span>
            <span className="ins-mark transition-colors duration-300 group-hover:text-ins-deep">{EMAIL}</span>
            <span className="btn-arrow shrink-0 text-ins" aria-hidden="true">
              →
            </span>
          </a>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <CopyEmail />
            <p className="font-mono text-[11px] text-text-muted">J.D. · LL.M. · MBA · Software engineer · Connecticut</p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
