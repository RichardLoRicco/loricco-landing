"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FadeUp, SplitLines } from "./ui/Reveal";
import { Clause } from "./ui/Redline";

const services = [
  {
    section: "1.1",
    num: "01",
    title: "Websites & AI Tools",
    outcome: "You own the site and accounts",
    description:
      "I rebuild outdated websites without throwing away the search rankings they already have. After launch, I can maintain the site, publish content, improve how it appears in Google and AI answers, and build AI tools for intake or routine work.",
    offerings: [
      "Website rebuilds without losing rankings",
      "Ongoing site care and content",
      "Visibility in Google and AI answers",
      "AI tools for intake and routine work",
    ],
  },
  {
    section: "1.2",
    num: "02",
    title: "AI Education & Training",
    outcome: "Staff who use the tools",
    description:
      "I train lawyers and small-business teams on what AI tools do well, where they fail, and how to use them without creating a compliance problem. The sessions use examples from the systems I build and run every day.",
    offerings: [
      "Law-firm workshops",
      "Small-business sessions",
      "Written workflow guides",
      "Follow-up office hours",
    ],
  },
  {
    section: "1.3",
    num: "03",
    title: "Research & Consulting for Law Firms",
    outcome: "Work counsel can use",
    description:
      "I work for other attorneys on legal research and on cases that turn on technology. I research legal questions, write up what I find, and take on other projects a firm needs help with. On technology cases, I read the discovery, interpret carrier and platform records, and explain what the records show in writing. That work is structured with work-product protection in mind.",
    offerings: [
      "Legal research & memos",
      "Project work for lawyers",
      "Digital evidence & discovery analysis",
      "Questions for opposing experts",
      "Firm technology guidance",
    ],
  },
  {
    section: "1.4",
    num: "04",
    title: "Business & Startup Advisory",
    outcome: "A second opinion",
    description:
      "I advise startups and business owners on pitch decks, financial projections, competitive analysis, go-to-market strategy, and architecture reviews. I review the deck, the projections, and the code myself and put my assessment in writing.",
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
      className="section-y relative scroll-mt-24 px-6"
      aria-label="Services"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="max-w-2xl">
          <FadeUp>
            <Clause num="1">Services</Clause>
          </FadeUp>
          <SplitLines
            className="font-display mt-5 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
            lines={["What I do"]}
          />
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
                    className="ghost-ins absolute inset-0 font-display text-[10rem] leading-none font-bold"
                    aria-hidden="true"
                  >
                    {services[active].section}
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

              {/* Contents: the four services, the one in view marked */}
              <nav aria-label="Services contents" className="mt-8 border-t border-line pt-4">
                <ol className="flex flex-col">
                  {services.map((service, i) => {
                    const isActive = active === i;
                    return (
                      <li key={service.num}>
                        <a
                          href={`#service-${service.num}`}
                          aria-current={isActive ? "true" : undefined}
                          className="group flex items-baseline gap-3 py-1.5 text-[13.5px] leading-snug"
                        >
                          <span
                            className={`font-mono text-[10px] tnum transition-colors duration-300 ${
                              isActive ? "text-ins" : "text-text-muted"
                            }`}
                          >
                            {service.section}
                          </span>
                          <span
                            className={`transition-colors duration-300 ${
                              isActive
                                ? "font-medium text-foreground"
                                : "text-body-muted group-hover:text-foreground"
                            }`}
                          >
                            {service.title}
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ol>
              </nav>
            </div>
          </div>

          {/* ── Ledger rows ── */}
          <div>
            {services.map((service, i) => {
              const isActive = active === i;
              return (
                <motion.article
                  key={service.title}
                  id={`service-${service.num}`}
                  ref={(el) => {
                    rows.current[i] = el;
                  }}
                  data-index={i}
                  data-active={isActive}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="ledger-row group grid scroll-mt-28 gap-4 border-t border-line py-10 last:border-b md:grid-cols-[72px_1fr_236px] md:gap-8 lg:py-12"
                >
                  {/* Clause number, with a change bar when this row is the one in view */}
                  <div className="relative font-mono text-sm font-medium text-ins tnum">
                    <span
                      aria-hidden="true"
                      className={`absolute top-0 -left-4 h-full w-[3px] origin-top bg-ins transition-transform duration-500 motion-reduce:transition-none [transition-timing-function:var(--ease-out-expo)] md:-left-5 ${
                        isActive ? "scale-y-100" : "scale-y-0"
                      }`}
                    />
                    {service.section}
                  </div>

                  {/* Title + description */}
                  <div>
                    <h3 className="font-display text-2xl font-bold tracking-tight lg:text-[1.9rem]">
                      {/* Highlighter sweep on the row in view, on hover and on focus */}
                      <span className="hl-sweep" data-on={isActive}>
                        {service.title}
                      </span>
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
                            className={`h-1 shrink-0 bg-ins transition-all duration-500 motion-reduce:transition-none ${
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
              className="u-link font-medium text-ins"
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
