"use client";

import { useEffect, useState } from "react";
import Blueprint from "./Blueprint";
import { FadeUp, SplitLines } from "./ui/Reveal";

const EMAIL = "admin@loriccoandco.com";

const manifest: [string, string][] = [
  ["PRINCIPAL", "R.T. LoRicco"],
  ["BACKGROUND", "J.D. · LL.M. · MBA · SWE"],
  ["WORK", "websites\u00a0· training\u00a0· consulting\u00a0· advisory"],
  ["BASE", "Connecticut, USA"],
  ["PROCESS", "review → work → follow-up"],
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
    <section id="contact" className="section-y relative scroll-mt-24 px-6" aria-label="Contact">
      <div className="mx-auto max-w-6xl">
        <FadeUp y={28}>
          <div className="relative overflow-hidden rounded-[4px] bg-data-bg">
            <Blueprint dark />

            <div className="relative grid gap-10 px-6 py-14 sm:px-14 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-16 lg:py-24">
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
                    className="btn max-w-full bg-cobalt px-5 py-4 text-[13px] font-semibold text-white hover:text-data-bg min-[400px]:px-7 min-[400px]:text-sm"
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

              {/* Mono manifest: a spec sheet, so long values wrap in their own column */}
              <FadeUp delay={0.25} className="hidden lg:block">
                <div className="border-l border-white/10 pl-10 font-mono text-[12px] text-data-ink">
                  <p className="pb-3 text-data-hi">LCO / PROJECT DETAILS</p>
                  <dl className="grid grid-cols-[auto_1fr] gap-x-5">
                    {manifest.map(([label, value]) => (
                      <div key={label} className="contents">
                        <dt className="border-t border-white/8 py-2.5 tracking-[0.08em] text-data-ink/80">
                          {label} /
                        </dt>
                        <dd className="border-t border-white/8 py-2.5 leading-relaxed text-data-hi/90">
                          {value}
                        </dd>
                      </div>
                    ))}
                    <dt className="border-y border-white/8 py-2.5 tracking-[0.08em] text-data-ink/80">
                      STATUS /
                    </dt>
                    <dd className="flex items-center gap-2 border-y border-white/8 py-2.5 text-cobalt-bright">
                      <span className="h-1.5 w-1.5 rounded-full bg-cobalt-bright" aria-hidden="true" />
                      accepting clients
                    </dd>
                  </dl>
                </div>
              </FadeUp>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
