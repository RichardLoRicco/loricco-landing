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

/*
  The dateline's left cell. Phones hide the middle cell, so once the reader is
  past the hero the credentials give way to the same running head there
  (globals.css swaps them below 860px; desktop always shows the credentials).
*/
export function DatelineCredentials() {
  const active = useActiveSection();
  const section = SECTIONS.find((s) => s.id === active);

  return (
    <span className="dateline-left" data-section={section ? true : undefined}>
      <span className="dateline-cred">
        Attorney &middot; MBA &middot; <span className="dateline-long">Software engineer</span>
        <span className="dateline-short">Engineer</span>
      </span>
      {section && (
        <span key={section.id} className="running-head dateline-run-phone" aria-hidden="true">
          &sect; {section.num} &middot; {section.label}
        </span>
      )}
    </span>
  );
}
