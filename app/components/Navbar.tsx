"use client";

import { useEffect, useRef, useState } from "react";
import { SECTIONS, useActiveSection } from "./ActiveSection";
import ThemeToggle from "./ThemeToggle";

const EMAIL = "admin@loriccoandco.com";

const SHORT_LABELS: Partial<Record<(typeof SECTIONS)[number]["id"], string>> = {
  work: "Work",
  process: "Process",
  studio: "Studio",
};

const links = SECTIONS.map((s) => ({
  href: `#${s.id}`,
  id: s.id,
  num: s.num,
  label: SHORT_LABELS[s.id] ?? s.label,
}));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const active = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => window.innerWidth >= 1100 && setMenuOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setMenuOpen(false);
      toggleRef.current?.focus();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <nav aria-label="Main navigation" className={`nav-shell ${scrolled ? "is-scrolled" : ""}`}>
        <div className="nav-inner">
          <a href="#top" className="nav-mark" aria-label="LoRicco & Co., back to top">
            LoRicco <em>&amp;</em> Co.
          </a>

          <div className="nav-links">
            {links.map(({ href, id, num, label }) => (
              <a
                key={href}
                href={href}
                aria-current={active === id ? "page" : undefined}
                className="nav-link"
              >
                <span className="num">{num}</span>
                <span>{label}</span>
              </a>
            ))}
            <div className="ml-2 flex items-center gap-3 pl-3" style={{ borderLeft: "1px solid var(--border)" }}>
              <ThemeToggle />
              <a href={`mailto:${EMAIL}`} className="btn btn-primary nav-cta">
                Get in touch
              </a>
            </div>
          </div>

          <button
            ref={toggleRef}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="nav-mobile-btn"
          >
            <span className="sr-only">Toggle menu</span>
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                <line x1="18" x2="6" y1="6" y2="18" />
                <line x1="6" x2="18" y1="6" y2="18" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                <line x1="4" x2="20" y1="8" y2="8" />
                <line x1="4" x2="20" y1="16" y2="16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      <nav
        id="mobile-menu"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        className={`nav-drawer ${menuOpen ? "is-open" : ""}`}
        style={{ zIndex: 109 }}
      >
        <div className="nav-drawer-inner">
          {links.map(({ href, id, num, label }) => (
            <a
              key={href}
              href={href}
              aria-current={active === id ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
              className="nav-link"
              style={{ justifyContent: "space-between" }}
            >
              <span style={{ display: "inline-flex", gap: "0.9rem" }}>
                <span className="num">{num}</span>
                <span>{label}</span>
              </span>
            </a>
          ))}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "1rem",
              marginTop: "0.25rem",
              borderTop: "1px solid var(--border)",
            }}
          >
            <span className="label">Theme</span>
            <ThemeToggle />
          </div>
          <a
            href={`mailto:${EMAIL}`}
            onClick={() => setMenuOpen(false)}
            className="btn btn-primary mt-5 w-full"
          >
            Get in touch
          </a>
        </div>
      </nav>
    </>
  );
}
