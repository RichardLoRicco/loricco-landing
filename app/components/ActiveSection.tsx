"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

/*
  The page is one document with numbered sections. This provider watches a
  thin band near the top third of the viewport and reports which section is
  crossing it, so the navbar can highlight it and the dateline can name it.
  `num` and `label` match the "§ 0n · Label" line in each section's heading;
  keep them in step.
*/

export const SECTIONS = [
  { id: "services", num: "01", label: "Services" },
  { id: "work", num: "02", label: "Work" },
  { id: "process", num: "03", label: "Process" },
  { id: "studio", num: "04", label: "Studio" },
  { id: "about", num: "05", label: "About" },
  { id: "contact", num: "06", label: "Contact" },
] as const;

export type SectionId = (typeof SECTIONS)[number]["id"];

const Ctx = createContext<SectionId | null>(null);

export function ActiveSectionProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<SectionId | null>(null);

  useEffect(() => {
    const crossing = new Set<SectionId>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id as SectionId;
          if (entry.isIntersecting) crossing.add(id);
          else crossing.delete(id);
        }
        const next = SECTIONS.find((s) => crossing.has(s.id))?.id ?? null;
        setActive(next);
      },
      // A 1%-tall band sitting 38% down the viewport.
      { rootMargin: "-38% 0px -61% 0px", threshold: 0 }
    );

    for (const s of SECTIONS) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return <Ctx.Provider value={active}>{children}</Ctx.Provider>;
}

export function useActiveSection() {
  return useContext(Ctx);
}
