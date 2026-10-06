"use client";

import { useEffect, useRef, type ReactNode } from "react";

/* The portrait drifts down at 0.4x scroll speed on desktop, as on richardloricco.com. */
export default function HeroParallax({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mq = window.matchMedia("(min-width: 1024px) and (prefers-reduced-motion: no-preference)");
    let raf = 0;

    const apply = () => {
      raf = 0;
      el.style.transform = mq.matches
        ? `translate3d(0, ${Math.round(Math.min(window.scrollY * 0.4, 200))}px, 0)`
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
  }, []);

  return (
    <div ref={ref} style={{ willChange: "transform", transition: "transform 100ms linear" }}>
      {children}
    </div>
  );
}
