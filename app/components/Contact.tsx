"use client";

import { useEffect, useState } from "react";
import { EMAIL } from "../lib/site";

function CopyButton() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(EMAIL);
          setCopied(true);
        } catch {
          /* No clipboard access; the mailto link still works. */
        }
      }}
      className="inline-flex h-12 items-center gap-2.5 rounded-full border border-night-rule px-5 text-[14px] font-semibold text-night-ink transition-colors hover:border-night-soft"
    >
      <span
        className={`h-2 w-2 rounded-full transition-colors ${copied ? "bg-[#5fd08a]" : "bg-signal-bright"}`}
        aria-hidden="true"
      />
      <span aria-live="polite">{copied ? "Copied" : "Copy address"}</span>
    </button>
  );
}

export default function Contact() {
  const [user, domain] = EMAIL.split("@");

  return (
    <section data-dark id="contact" aria-label="Contact" className="bg-night pt-28 pb-20 text-night-ink lg:pt-36">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <p className="label flex items-center gap-4 border-t border-night-rule pt-4 text-night-soft">
          <span className="text-signal-bright">06</span>
          Contact
        </p>

        <h2 className="display mt-10 max-w-5xl text-[2.9rem] sm:text-[4.4rem] lg:text-[6rem]">
          Tell me what you&apos;re <span className="serif-i text-signal-bright">working on.</span>
        </h2>

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-10">
          <p className="max-w-lg text-[1.0625rem] leading-[1.65] text-night-soft lg:col-span-5">
            Send a note about the website, the team, the case, or the business.
            I&apos;ll reply with a few questions. If it makes sense, we&apos;ll set
            up a short call and I&apos;ll follow up with a written review.
          </p>

          <div className="lg:col-span-7">
            <a
              href={`mailto:${EMAIL}`}
              className="group block border-b-2 border-night-rule pb-4 transition-colors hover:border-signal-bright"
            >
              <span className="label text-[10px] text-night-soft">Email</span>
              <span className="mt-3 flex items-end justify-between gap-4">
                <span className="text-[1.3rem] leading-[1.15] font-bold tracking-[-0.02em] [font-variation-settings:'wdth'_105] min-[400px]:text-[1.45rem] sm:text-[2.4rem] xl:text-[2.9rem]">
                  {user}
                  <span className="text-night-soft transition-colors group-hover:text-signal-bright">@</span>
                  <wbr />
                  {domain}
                </span>
                <span
                  className="mb-1 text-[1.8rem] leading-none transition-transform duration-500 [transition-timing-function:var(--ease-snap)] group-hover:translate-x-1 group-hover:-translate-y-1"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </span>
            </a>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
              <CopyButton />
              <p className="text-[14px] text-night-soft">Replies usually within one business day.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
