"use client";

import { useEffect, useState } from "react";
import { useActiveSection } from "./ActiveSection";
import { SECTIONS } from "../lib/sections";

/*
  The document's margin index: a fixed rail of § numbers that tracks the
  section in view. It only renders where the page margin is wide enough to
  hold it (see .margin-index in globals.css), so it never overlaps content.
*/
export default function MarginIndex() {
  const active = useActiveSection();

  // The rail sits over a cobalt sheet at the top (the cover) and at Contact.
  const [atTop, setAtTop] = useState(false);
  useEffect(() => {
    const check = () => setAtTop(window.scrollY < window.innerHeight * 0.7);
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);
  const onSheet = active === "contact" || (active === null && atTop);

  return (
    <nav
      aria-label="Section index"
      className="margin-index fixed top-1/2 left-5 z-40 -translate-y-1/2 flex-col gap-3"
    >
      {SECTIONS.map((s) => {
        const isActive = active === s.id;
        return (
          <a
            key={s.id}
            href={`/#${s.id}`}
            aria-current={isActive ? "true" : undefined}
            className="group flex items-center gap-2.5 py-0.5"
          >
            <span
              className={`h-px transition-all duration-500 ${
                isActive
                  ? `w-5 ${onSheet ? "bg-background" : "bg-cobalt"}`
                  : `w-2.5 group-hover:w-4 ${
                      onSheet ? "bg-background/50 group-hover:bg-background" : "bg-line-strong group-hover:bg-text-muted"
                    }`
              }`}
              aria-hidden="true"
            />
            <span
              className={`font-mono text-[10px] tracking-[0.14em] transition-colors duration-300 tnum ${
                onSheet
                  ? isActive
                    ? "text-background"
                    : "text-background/80 group-hover:text-background"
                  : isActive
                    ? "text-cobalt"
                    : "text-text-muted group-hover:text-foreground"
              }`}
            >
              {s.num}
            </span>
            <span
              className={`font-mono text-[10px] tracking-[0.12em] uppercase whitespace-nowrap transition-all duration-300 ${
                isActive
                  ? `translate-x-0 opacity-100 ${onSheet ? "text-background" : "text-cobalt"}`
                  : `-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 ${
                      onSheet ? "group-hover:text-background" : "group-hover:text-foreground"
                    }`
              }`}
            >
              {s.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
