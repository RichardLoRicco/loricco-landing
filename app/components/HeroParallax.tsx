"use client";

import { useEffect, useRef, type ReactNode } from "react";

/*
  The hero's right column drifts down at 0.4x scroll speed on desktop, as on
  richardloricco.com. `max` caps the drift at the room below the column, so it
  never runs into the section's clipped bottom edge.
*/
export default function HeroParallax({ children, max = 200 }: { children: ReactNode; max?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mq = window.matchMedia("(min-width: 1024px) and (prefers-reduced-motion: no-preference)");
    let raf = 0;

    const apply = () => {
      raf = 0;
      el.style.transform = mq.matches
        ? `translate3d(0, ${Math.round(Math.min(window.scrollY * 0.4, max))}px, 0)`
        : "";
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    mq.addEventListener("change", apply);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      mq.removeEventListener("change", apply);
    };
  }, [max]);

  return (
    <div ref={ref} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}
