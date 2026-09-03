"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FadeUp, SplitLines } from "./ui/Reveal";

const services = [
  {
    section: "§ 01",
    num: "01",
    title: "Websites & AI Tools",
    outcome: "You own the site and accounts",
    description:
      "I rebuild outdated websites without throwing away the search rankings they already have. After launch, I can maintain the site, publish content, improve how it appears in Google and AI answers, and build AI tools for intake or routine work. The domain, code, content, and accounts stay in your name.",
    offerings: [
      "Website rebuilds without losing rankings",
      "Ongoing site care and content",
      "Visibility in Google and AI answers",
      "AI tools for intake and routine work",
    ],
  },
  {
    section: "§ 02",
    num: "02",
    title: "AI Education & Training",
    outcome: "Staff who use the tools",
    description:
      "Training for lawyers and small-business teams on what AI tools do well, where they fail, and how to use them without creating a compliance problem. The sessions use examples from the systems I build and run every day.",
    offerings: [
      "Law-firm workshops",
      "Small-business sessions",
      "Written workflow guides",
      "Follow-up office hours",
    ],
  },
  {
    section: "§ 03",
    num: "03",
    title: "Technical Consulting for Law Firms",
    outcome: "Analysis counsel can use",
    description:
      "When a case turns on technology, I work for the attorney. I read the discovery, interpret carrier and platform records, and explain what the records show in writing. The engagement is structured with work-product protection in mind. I also advise firms on their own technology decisions.",
    offerings: [
      "Digital evidence & discovery analysis",
      "Technical memos for counsel",
      "Questions for opposing experts",
      "Firm technology guidance",
    ],
  },
  {
    section: "§ 04",
    num: "04",
    title: "Business & Startup Advisory",
    outcome: "A second opinion",
    description:
      "I advise startups and business owners on pitch decks, financial projections, competitive analysis, go-to-market strategy, and architecture reviews. I read the deck, the contract, and the codebase myself, so the business, legal, and technical questions get answered by the same person.",
    offerings: [
      "Pitch decks & projections",
      "Competitive analysis",
      "Go-to-market strategy",
      "Architecture & code reviews",
    ],
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const rows = useRef<(HTMLElement | null)[]>([]);

  // A band across the middle of the viewport decides which row is "current".
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (hit) setActive(Number((hit.target as HTMLElement).dataset.index));
      },
      { rootMargin: "-42% 0px -42% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    rows.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      className="relative scroll-mt-24 px-6 py-28 lg:py-36"
      aria-label="Services"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="max-w-2xl">
          <FadeUp>
            <p className="kicker rule-label text-text-muted">Services</p>
          </FadeUp>
          <SplitLines
            className="font-display mt-5 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
            lines={["What I do"]}
          />
          <FadeUp delay={0.15}>
            <p className="mt-5 text-lg leading-relaxed text-body-muted">
              I handle each engagement myself. There is no account manager
              between us and no junior staff doing the work.
            </p>
          </FadeUp>
        </div>

        <div className="mt-16 lg:grid lg:grid-cols-[260px_1fr] lg:gap-16">
          {/* ── Sticky numeral: the section you're reading, at drafting scale ── */}
          <div className="hidden lg:block">
            <div className="sticky top-32">
              <div className="relative h-[10rem] overflow-hidden">
                <AnimatePresence initial={false} mode="popLayout">
                  <motion.span
                    key={active}
                    initial={{ y: "45%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-45%", opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="ghost-cobalt absolute inset-0 font-display text-[10rem] leading-none font-bold"
                    aria-hidden="true"
                  >
                    {services[active].num}
                  </motion.span>
                </AnimatePresence>
              </div>
              <div className="mt-4 border-t border-line pt-4">
                <p className="kicker text-[10px] text-text-muted">Outcome /</p>
                <AnimatePresence initial={false} mode="wait">
                  <motion.p
                    key={active}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="editorial mt-1.5 text-[17px] text-foreground"
                  >
                    {services[active].outcome}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* ── Ledger rows ── */}
          <div>
            {services.map((service, i) => {
              const isActive = active === i;
              return (
                <motion.article
                  key={service.title}
                  ref={(el) => {
                    rows.current[i] = el;
                  }}
                  data-index={i}
                  data-active={isActive}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="ledger-row group grid gap-4 border-t border-line py-10 last:border-b md:grid-cols-[72px_1fr_236px] md:gap-8 lg:py-12"
                >
                  {/* § number */}
                  <div className="font-mono text-sm font-medium text-cobalt tnum">
                    {service.section}
                  </div>

                  {/* Title + description */}
                  <div>
                    <h3
                      className={`font-display text-2xl font-bold tracking-tight transition-colors duration-400 lg:text-[1.9rem] ${
                        isActive ? "text-cobalt" : "text-foreground group-hover:text-cobalt"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-body-muted">
                      {service.description}
                    </p>
                  </div>

                  {/* Outcome + offerings */}
                  <div className="md:pt-1">
                    <p className="font-mono text-[10px] tracking-[0.16em] text-text-muted uppercase lg:hidden">
                      Outcome /{" "}
                      <span className="text-foreground">{service.outcome}</span>
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2 md:flex-col md:gap-2.5 lg:mt-1">
                      {service.offerings.map((offering, j) => (
                        <li
                          key={offering}
                          className="flex items-center gap-2.5 font-mono text-[12px] text-body-muted"
                        >
                          <span
                            className={`h-1 shrink-0 bg-cobalt transition-all duration-500 ${
                              isActive ? "w-3" : "w-1"
                            }`}
                            style={{ transitionDelay: isActive ? `${j * 60}ms` : "0ms" }}
                            aria-hidden="true"
                          />
                          {offering}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* CTA line */}
        <FadeUp delay={0.1} className="mt-12 lg:ml-[calc(260px+4rem)]">
          <p className="text-[15px] text-body-muted">
            Some problems cross more than one service. Most engagements start
            with a short call and a written review of where things stand.{" "}
            <a
              href="mailto:admin@loriccoandco.com"
              className="u-link font-medium text-cobalt"
            >
              Email me
            </a>{" "}
            and we&apos;ll figure it out from there.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
