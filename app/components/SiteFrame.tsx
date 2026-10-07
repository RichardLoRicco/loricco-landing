"use client";

import Image from "next/image";
import { useRef, useState, type MouseEvent, type PointerEvent } from "react";
import type { Project } from "./Work";

/*
  The screenshot frame: the personal site's filing card, with the real homepage
  scrolling top to bottom (see .site-preview in globals.css).
  - Mouse: hovering scrolls it; a click visits the site.
  - Touch: there is no hover, so the first tap on the screenshot plays the
    scroll and a second tap brings it back. The header and footer still visit.
  Only a real touch pointer is intercepted, so keyboard and assistive-tech
  activation always follow the link.
*/
export default function SiteFrame({ project }: { project: Project }) {
  const [scrolling, setScrolling] = useState(false);
  const pointer = useRef<string>("");

  const onPointerDown = (e: PointerEvent) => {
    pointer.current = e.pointerType;
  };

  const onClick = (e: MouseEvent) => {
    const onPreview = (e.target as HTMLElement).closest(".site-preview");
    if (pointer.current === "touch" && onPreview) {
      e.preventDefault();
      setScrolling((v) => !v);
    }
    pointer.current = "";
  };

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${project.name}, ${project.host}. Opens in a new tab.`}
      className="site-preview-trigger filing filing-interactive group block overflow-hidden"
      data-scrolling={scrolling || undefined}
      onPointerDown={onPointerDown}
      onClick={onClick}
    >
      <div className="flex items-center justify-between gap-3 px-5 py-4">
        <span className="meta">Exhibit {project.exhibit}</span>
        <span className="chip-meta">
          <span
            aria-hidden="true"
            style={{ width: 5, height: 5, borderRadius: 9999, background: "#4ea35c" }}
          />
          Live
        </span>
      </div>

      <div className="site-preview aspect-[16/10] border-y border-[var(--border)]">
        <Image
          src={project.fullPage}
          alt={project.fullPageAlt}
          width={1000}
          height={3281}
          sizes="(min-width: 1024px) 680px, calc(100vw - 2.5rem)"
        />
      </div>

      <div className="flex items-center justify-between gap-3 px-5 py-3.5">
        <span className="meta">{project.host}</span>
        <span className="meta transition-colors group-hover:text-[var(--accent)]">
          <span className="hint-hover">Hover to scroll &middot; </span>
          <span className="hint-touch">{scrolling ? "Tap to return" : "Tap to scroll"} &middot; </span>
          <span style={{ color: "var(--accent)" }}>Visit &rarr;</span>
        </span>
      </div>
    </a>
  );
}
