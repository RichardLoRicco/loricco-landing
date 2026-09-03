"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, type MotionValue } from "motion/react";
import Blueprint from "./Blueprint";
import { FadeUp, SplitLines } from "./ui/Reveal";

const steps = [
  {
    id: "01",
    verb: "Diagnose",
    detail:
      "Most engagements start with a written review of what's there: a technical memo, a website findings report, a workflow audit, or a read on a business plan.",
  },
  {
    id: "02",
    verb: "Clarify",
    detail:
      "I explain what I found and what I'd do about it, in plain English and ranked by impact. The recommendation goes in writing so you can act on it or get a second opinion.",
  },
  {
    id: "03",
    verb: "Build",
    detail:
      "Then I do the work: the memo, the website or the agent, the deck, or the training session.",
  },
  {
    id: "04",
    verb: "Improve",
    detail:
      "For ongoing work, I monitor the system, handle updates, and revisit it when the underlying needs change.",
  },
];

function Arrow() {
  return (
    <span className="mx-[0.12em] inline-block text-cobalt-bright" aria-hidden="true">
      →
    </span>
  );
}

/* A step lights up as the track's fill passes its node. */
function Step({
  step,
  index,
  progress,
}: {
  step: (typeof steps)[number];
  index: number;
  progress: MotionValue<number>;
}) {
  const start = index / steps.length;
  const reached = useTransform(progress, [start, start + 0.08], [0, 1]);
  const nodeScale = useTransform(reached, [0, 1], [0.6, 1]);
  const textColor = useTransform(reached, [0, 1], ["#a29f97", "#f0ede6"]);

  return (
    <div className="relative pl-9 lg:pl-0 lg:pt-12">
      {/* Node on the track */}
      <motion.span
        aria-hidden="true"
        className="absolute top-2 left-0 h-2.5 w-2.5 -translate-x-[4.5px] rounded-full border border-cobalt-bright bg-data-bg lg:top-0 lg:left-0 lg:translate-x-0 lg:-translate-y-[4.5px]"
        style={{ scale: nodeScale }}
      >
        <motion.span
          className="absolute inset-[2px] rounded-full bg-cobalt-bright"
          style={{ opacity: reached }}
        />
      </motion.span>

      <span
        aria-hidden="true"
        className="ghost-bright font-display text-[4.5rem] leading-none font-bold lg:text-[5.5rem]"
      >
        {step.id}
      </span>
      <motion.h3
        className="font-display mt-3 text-2xl font-semibold"
        style={{ color: textColor }}
      >
        {step.verb}
      </motion.h3>
      <p className="mt-3 max-w-xs text-[14px] leading-relaxed text-data-ink">
        {step.detail}
      </p>
    </div>
  );
}

export default function Process() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 78%", "end 55%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 70, damping: 22, mass: 0.5 });

  return (
    <section
      id="process"
      className="relative scroll-mt-24 overflow-hidden bg-data-bg px-6 py-28 lg:py-36"
      aria-label="How I work"
    >
      <Blueprint dark />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <FadeUp>
              <p className="kicker text-data-ink">How I work</p>
            </FadeUp>
            <SplitLines
              className="font-display mt-4 text-3xl font-bold tracking-tight text-data-hi sm:text-4xl lg:text-[3.4rem] lg:leading-[1.05]"
              lines={[
                <span key="a">
                  Diagnose <Arrow /> Clarify <Arrow />
                </span>,
                <span key="b">
                  Build <Arrow /> Improve.
                </span>,
              ]}
            />
          </div>
          <FadeUp delay={0.2}>
            <p className="max-w-xs font-mono text-[12px] leading-relaxed text-data-ink">
              The same four steps apply whether the engagement is a website, a
              training, a case, or a business plan.
            </p>
          </FadeUp>
        </div>

        {/* ── The track: fills as you read down the page ── */}
        <div ref={trackRef} className="relative mt-16 lg:mt-24">
          <div
            aria-hidden="true"
            className="absolute top-0 left-0 h-full w-px bg-white/10 lg:h-px lg:w-full"
          />
          {/* Vertical fill (phones, tablets) */}
          <motion.div
            aria-hidden="true"
            className="absolute top-0 left-0 h-full w-px origin-top bg-cobalt-bright lg:hidden"
            style={{ scaleY: progress }}
          />
          {/* Horizontal fill (desktop) */}
          <motion.div
            aria-hidden="true"
            className="absolute top-0 left-0 hidden h-px w-full origin-left bg-cobalt-bright lg:block"
            style={{ scaleX: progress }}
          />

          <div className="grid gap-12 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, i) => (
              <Step key={step.id} step={step} index={i} progress={progress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
