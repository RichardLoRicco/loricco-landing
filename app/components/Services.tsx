"use client";

import { useEffect, useState } from "react";
import { services } from "../lib/services";
import { EMAIL } from "../lib/site";
import SectionHead from "./ui/SectionHead";

export default function Services() {
  const [open, setOpen] = useState<string | null>(services[0].slug);

  // The service links in the hero point at #websites, #training, and so on. Open the one named.
  useEffect(() => {
    const sync = () => {
      const slug = window.location.hash.slice(1);
      if (services.some((s) => s.slug === slug)) setOpen(slug);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  return (
    <section id="services" aria-label="Services" className="pt-28 pb-24 lg:pt-36 lg:pb-32">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <SectionHead
          index="01"
          label="Services"
          title={
            <>
              Four kinds
              <br />
              of <span className="serif-i text-signal-ink">work</span>
            </>
          }
          intro="I handle each engagement myself. There's no account manager between us and no junior staff doing the work."
        />

        <ol className="mt-16 border-b border-rule lg:mt-20">
          {services.map((s, i) => {
            const isOpen = open === s.slug;
            return (
              <li key={s.slug} id={s.slug} className="scroll-mt-24 border-t border-rule">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`${s.slug}-panel`}
                    onClick={() => setOpen(isOpen ? null : s.slug)}
                    className="group grid w-full grid-cols-[2.5rem_1fr_auto] items-center gap-x-3 py-6 text-left sm:grid-cols-[4.5rem_1fr_auto] sm:py-8 lg:grid-cols-[6rem_1fr_16rem_auto]"
                  >
                    <span className="label self-start pt-2 text-ink-mute sm:pt-3">0{i + 1}</span>
                    <span
                      className={`display display-tight text-[1.65rem] leading-[1.02] transition-colors duration-300 sm:text-[2.4rem] lg:text-[3rem] ${
                        isOpen ? "text-ink" : "text-ink-soft group-hover:text-ink"
                      }`}
                    >
                      {s.title}
                    </span>
                    <span className="serif-i hidden text-[1.15rem] text-ink-mute lg:block">
                      {s.outcome}
                    </span>
                    <span
                      className={`relative flex h-10 w-10 shrink-0 items-center justify-center border transition-colors duration-300 sm:h-12 sm:w-12 ${
                        isOpen
                          ? "border-ink bg-ink text-paper"
                          : "border-rule-strong text-ink group-hover:border-ink"
                      }`}
                      aria-hidden="true"
                    >
                      <span className="absolute h-[2px] w-3.5 bg-current" />
                      <span
                        className={`absolute h-3.5 w-[2px] bg-current transition-transform duration-500 [transition-timing-function:var(--ease-snap)] ${
                          isOpen ? "scale-y-0" : "scale-y-100"
                        }`}
                      />
                    </span>
                  </button>
                </h3>

                <div
                  id={`${s.slug}-panel`}
                  role="region"
                  aria-label={s.title}
                  className="fold"
                  data-open={isOpen}
                  inert={!isOpen}
                >
                  <div>
                    <div className="grid gap-8 pb-10 sm:pl-[4.5rem] lg:grid-cols-[1fr_16rem] lg:gap-14 lg:pb-14 lg:pl-[6rem]">
                      <div>
                        <p className="serif-i text-[1.15rem] text-signal-ink lg:hidden">{s.outcome}</p>
                        <p className="mt-3 max-w-2xl text-[1.0625rem] leading-[1.65] text-ink-soft lg:mt-0">
                          {s.description}
                        </p>
                      </div>
                      <ul className="grid gap-px self-start border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-1">
                        {s.offerings.map((o) => (
                          <li key={o} className="flex gap-3 bg-card px-4 py-3 text-[14px] leading-snug">
                            <span className="mt-[0.45em] h-1.5 w-1.5 shrink-0 bg-signal" aria-hidden="true" />
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>

        <p className="mt-10 max-w-2xl text-[1.0625rem] leading-[1.6] text-ink-soft">
          Some problems cross more than one of these. Most engagements start with
          a short call and a written review of where things stand.{" "}
          <a href={`mailto:${EMAIL}`} className="line-link font-semibold text-ink">
            Email me
          </a>{" "}
          and we&apos;ll go from there.
        </p>
      </div>
    </section>
  );
}
