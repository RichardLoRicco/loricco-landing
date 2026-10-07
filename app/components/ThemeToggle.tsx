"use client";

import { useEffect, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

/* public/theme-init.js sets data-theme on <html> before first paint; this
   component reads it from there and writes it back on toggle. */
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}
const getTheme = (): Theme =>
  document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
const getServerTheme = (): Theme | null => null;

const CHROME = { dark: "#121110", light: "#efeae0" } as const;

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme);

  // Browser chrome (the theme-color metas) follows the chosen theme, not only
  // the OS setting. Done after hydration so the server-rendered head matches.
  useEffect(() => {
    if (!theme) return;
    document
      .querySelectorAll('meta[name="theme-color"]')
      .forEach((m) => m.setAttribute("content", CHROME[theme]));
  }, [theme]);

  if (!theme) {
    return (
      <span aria-hidden="true" className="theme-toggle" style={{ visibility: "hidden" }}>
        <svg width="12" height="12" viewBox="0 0 24 24" />
        <span>Paper</span>
      </span>
    );
  }

  const isDark = theme === "dark";
  const toggle = () => {
    const next: Theme = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${isDark ? "paper" : "ink"} mode`}
      title={isDark ? "Paper mode" : "Ink mode"}
      className="theme-toggle"
    >
      {isDark ? (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      ) : (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      )}
      <span>{isDark ? "Paper" : "Ink"}</span>
    </button>
  );
}
