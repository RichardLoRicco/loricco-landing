"use client";

import { SECTIONS, useActiveSection } from "./ActiveSection";

/*
  The document's margin index: a fixed rail of § numbers that tracks the
  section in view. It only renders where the page margin is wide enough to
  hold it (see .margin-index in globals.css), so it never overlaps content.
*/
export default function MarginIndex() {
  const active = useActiveSection();

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
            href={`#${s.id}`}
            aria-current={isActive ? "true" : undefined}
            className="group flex items-center gap-2.5 py-0.5"
          >
            <span
              className={`h-px transition-all duration-500 ${
                isActive ? "w-5 bg-cobalt" : "w-2.5 bg-line-strong group-hover:w-4 group-hover:bg-text-muted"
              }`}
              aria-hidden="true"
            />
            <span
              className={`font-mono text-[10px] tracking-[0.14em] transition-colors duration-300 tnum ${
                isActive ? "text-cobalt" : "text-text-muted group-hover:text-foreground"
              }`}
            >
              {s.num}
            </span>
            <span
              className={`font-mono text-[10px] tracking-[0.12em] uppercase whitespace-nowrap transition-all duration-300 ${
                isActive
                  ? "translate-x-0 text-cobalt opacity-100"
                  : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:text-foreground group-hover:opacity-100"
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
