"use client";

import { useEffect, useState } from "react";
import Blueprint from "./Blueprint";
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
      className="group inline-flex items-center gap-2 rounded-[3px] border border-white/15 px-4 py-3 font-mono text-[12px] tracking-[0.06em] text-data-ink transition-colors duration-200 hover:border-cobalt-bright hover:text-data-hi"
      aria-live="polite"
    >
      <span className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${copied ? "bg-good" : "bg-cobalt-bright"}`} aria-hidden="true" />
      {copied ? "COPIED" : "COPY ADDRESS"}
    </button>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 px-6 py-28 lg:py-36" aria-label="Contact">
      <div className="mx-auto max-w-6xl">
        <FadeUp y={28}>
          <div className="relative overflow-hidden rounded-[4px] bg-data-bg">
            <Blueprint dark />

            <div className="relative grid gap-10 px-8 py-14 sm:px-14 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-16 lg:py-24">
              <div>
                <FadeUp delay={0.1}>
                  <p className="kicker text-data-ink">Contact</p>
                </FadeUp>
                <SplitLines
                  className="font-display mt-4 max-w-xl text-3xl font-bold leading-[1.08] tracking-tight text-data-hi sm:text-5xl lg:text-[3.6rem]"
                  lines={[
                    "Tell me what",
                    <span key="l2" className="editorial font-medium text-cobalt-bright">
                      you&apos;re working on.
                    </span>,
                  ]}
                />
                <FadeUp delay={0.2}>
                  <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-data-ink">
                    Send me a note about the website, the team, the case, or the
                    business. I&apos;ll reply with a few questions, and if it
                    makes sense we&apos;ll set up a short call and I&apos;ll
                    follow up with a written review.
                  </p>
                </FadeUp>

                <FadeUp delay={0.3} className="mt-9 flex flex-wrap items-center gap-4">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="btn bg-cobalt px-7 py-4 text-sm font-semibold text-white hover:text-data-bg"
                    style={{ ["--btn-fill" as string]: "var(--color-cobalt-bright)" }}
                  >
                    {EMAIL} <span className="btn-arrow">→</span>
                  </a>
                  <CopyEmail />
                </FadeUp>
                <FadeUp delay={0.35}>
                  <p className="mt-5 font-mono text-[12px] text-data-ink">
                    REPLIES / usually one business day
                  </p>
                </FadeUp>
              </div>

              {/* Mono manifest */}
              <FadeUp delay={0.25} className="hidden lg:block">
                <div
                  className="border-l border-white/10 pl-10 font-mono text-[12px] leading-[2.3] text-data-ink"
                  aria-hidden="true"
                >
                  <p className="text-data-hi">LCO / PROJECT DETAILS</p>
                  <p>PRINCIPAL / R.T. LoRicco</p>
                  <p>BACKGROUND / JD · MBA · SWE</p>
                  <p>WORK / websites · training · consulting · advisory</p>
                  <p>BASE / Connecticut, USA</p>
                  <p>PROCESS / review → work → follow-up</p>
                  <p>
                    STATUS /{" "}
                    <span className="text-cobalt-bright">accepting clients</span>
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
