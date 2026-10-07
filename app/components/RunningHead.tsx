"use client";

import { SECTIONS, useActiveSection } from "./ActiveSection";

/*
  The dateline's middle cell works as a running head: the practice's name and
  city at the top of the page, then the section being read ("§ 02 · Work").
  A new key on each change replays a short fade (.running-head in globals.css).
*/
export default function RunningHead() {
  const active = useActiveSection();
  const section = SECTIONS.find((s) => s.id === active);
  const text = section ? `§ ${section.num} · ${section.label}` : "LoRicco & Co. LLC · New Haven, CT";

  return (
    <span className="dateline-middle" aria-hidden={section ? true : undefined}>
      <span key={text} className="running-head">
        {text}
      </span>
    </span>
  );
}
