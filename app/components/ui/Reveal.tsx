"use client";

import { motion, useInView, type Variants } from "motion/react";
import { useRef, type ReactNode } from "react";

/*
  SplitLines: a headline revealed one line at a time from behind a mask.
  Each line is an overflow-hidden span; the inner span slides up into it.
  Lines are passed explicitly (not measured) so the break points are the
  same ones the copy was written for.

  The in-view trigger observes the heading itself, never the sliding spans:
  IntersectionObserver reports clipped boxes, so a span translated fully
  outside its mask would never count as visible and would never animate.
*/

const line: Variants = {
  hidden: { y: "108%", rotate: 1.2 },
  visible: (i: number) => ({
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.75,
      delay: 0.06 + i * 0.09,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

type SplitLinesProps = {
  lines: ReactNode[];
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  /** Animate on mount (hero) instead of when scrolled into view. */
  immediate?: boolean;
  id?: string;
};

export function SplitLines({
  lines,
  as: Tag = "h2",
  className = "",
  immediate = false,
  id,
}: SplitLinesProps) {
  const ref = useRef<HTMLHeadingElement & HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });
  const shown = immediate || inView;

  return (
    <Tag id={id} ref={ref} className={className}>
      {lines.map((content, i) => (
        <span
          key={i}
          className="block overflow-hidden pb-[0.12em] -mb-[0.12em]"
        >
          <motion.span
            className="block origin-left"
            custom={i}
            variants={line}
            initial="hidden"
            animate={shown ? "visible" : "hidden"}
          >
            {content}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

/* FadeUp: the standard block reveal. */
export function FadeUp({
  children,
  className = "",
  delay = 0,
  immediate = false,
  y = 18,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  immediate?: boolean;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      {...(immediate
        ? { animate: { opacity: 1, y: 0 } }
        : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" } })}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
