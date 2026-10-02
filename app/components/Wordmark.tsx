"use client";

import { useEffect, useRef } from "react";

const REST = 800;
const LIGHT = 250;
const HEAVY = 900;
const parts = ["L", "o", "R", "i", "c", "c", "o", " ", "&", " ", "C", "o", "."];

/* The footer name. On a pointer device each letter's weight follows the cursor: heavy under it, light far from it. */
export default function Wordmark() {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    if (!window.matchMedia("(hover: hover) and (prefers-reduced-motion: no-preference)").matches) return;

    const letters = Array.from(root.querySelectorAll<HTMLSpanElement>("[data-letter]"));
    let centers: number[] = [];
    let frame = 0;

    const measure = () => {
      centers = letters.map((el) => {
        const r = el.getBoundingClientRect();
        return r.left + r.width / 2;
      });
    };
    const set = (weights: number[]) => {
      letters.forEach((el, i) => {
        el.style.fontVariationSettings = `"wdth" 118, "wght" ${weights[i]}`;
      });
    };
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const reach = root.clientWidth * 0.11;
        set(centers.map((c) => Math.round(LIGHT + (HEAVY - LIGHT) * Math.exp(-(((e.clientX - c) / reach) ** 2)))));
      });
    };
    const onEnter = () => measure();
    const onLeave = () => {
      cancelAnimationFrame(frame);
      set(letters.map(() => REST));
    };

    root.addEventListener("pointerenter", onEnter);
    root.addEventListener("pointermove", onMove);
    root.addEventListener("pointerleave", onLeave);
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(frame);
      root.removeEventListener("pointerenter", onEnter);
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <p
      ref={ref}
      aria-label="LoRicco & Co."
      className="font-sans text-[12.4vw] leading-[0.8] tracking-[-0.045em] whitespace-nowrap select-none min-[1600px]:text-[12.25rem]"
    >
      {parts.map((ch, i) =>
        ch === " " ? (
          <span key={i} aria-hidden="true">
            {" "}
          </span>
        ) : ch === "&" ? (
          <span key={i} aria-hidden="true" className="serif-i px-[0.02em] text-signal-bright">
            &amp;
          </span>
        ) : (
          <span
            key={i}
            data-letter
            aria-hidden="true"
            className="wm-letter"
            style={{ fontVariationSettings: `"wdth" 118, "wght" ${REST}` }}
          >
            {ch}
          </span>
        )
      )}
    </p>
  );
}
