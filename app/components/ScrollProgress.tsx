"use client";

import { useEffect, useRef } from "react";

/*
  The reading-progress hairline along the very top of the window, above the
  dateline, so it isn't mistaken for the nav's active-section underline. It
  scales a full-width line with a transform written straight to the element,
  so scrolling never re-renders React or triggers layout.
*/
export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const progress = Math.min(max > 0 ? window.scrollY / max : 0, 1);
      el.style.transform = `scaleX(${progress})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "1px",
        background: "var(--accent)",
        zIndex: 130,
        transform: "scaleX(0)",
        transformOrigin: "left",
        willChange: "transform",
      }}
    />
  );
}
