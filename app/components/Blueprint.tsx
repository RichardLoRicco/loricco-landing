"use client";

import { useEffect, useRef } from "react";

/*
  A drafting-table grid that lights up around the cursor. The parent section
  owns the pointer events; this layer only receives coordinates as CSS
  variables, and the CSS transition (registered @property) does the gliding.
*/
export default function Blueprint({
  dark = false,
  fade = false,
  className = "",
}: {
  dark?: boolean;
  fade?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const host = el?.parentElement;
    if (!el || !host) return;
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (e: PointerEvent) => {
      const r = host.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    host.addEventListener("pointermove", onMove, { passive: true });
    return () => host.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`blueprint ${dark ? "blueprint-dark" : ""} ${fade ? "blueprint-fade" : ""} ${className}`}
    />
  );
}
