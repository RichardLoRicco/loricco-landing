"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { EMAIL, NAV } from "../lib/site";

function useActiveSection() {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    const crossing = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) crossing.add(e.target.id);
          else crossing.delete(e.target.id);
        }
        setActive(NAV.find((n) => crossing.has(n.id))?.id ?? null);
      },
      { rootMargin: "-40% 0px -59% 0px" }
    );
    for (const n of NAV) {
      const el = document.getElementById(n.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);
  return active;
}

/* True while a section marked data-dark sits under the header bar. */
function useOverDark() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const under = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) under.add(e.target);
          else under.delete(e.target);
        }
        setDark(under.size > 0);
      },
      { rootMargin: "0px 0px -93% 0px" }
    );
    document.querySelectorAll("[data-dark]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return dark;
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const active = useActiveSection();
  const overDark = useOverDark();
  const dark = open || overDark;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    document.querySelector<HTMLAnchorElement>("#menu a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300 ${
        open
          ? "border-b border-transparent"
          : overDark
            ? "border-b border-night-rule bg-night/85 backdrop-blur-md"
            : scrolled
              ? "border-b border-rule bg-paper/90 backdrop-blur-md"
              : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-[1320px] items-center justify-between px-5 sm:px-8"
      >
        <a
          href="#top"
          className={`relative z-10 text-[17px] font-extrabold tracking-[-0.02em] transition-colors [font-variation-settings:'wdth'_112] ${
            dark ? "text-night-ink" : "text-ink"
          }`}
        >
          LoRicco <span className="serif-i font-normal text-signal">&amp;</span> Co.
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7">
            {NAV.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? "true" : undefined}
                  className={`line-link pb-0.5 text-[14px] font-medium transition-colors ${
                    dark
                      ? active === item.id
                        ? "text-night-ink"
                        : "text-night-soft hover:text-night-ink"
                      : active === item.id
                        ? "text-ink"
                        : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${EMAIL}`}
            className={`slab px-4 py-2.5 text-[13px] font-semibold hover:text-ink ${
              dark ? "bg-night-ink text-ink" : "bg-ink text-paper"
            }`}
          >
            Email me
          </a>
        </div>

        <button
          ref={toggle}
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className={`relative z-10 -mr-2 flex h-11 w-11 items-center justify-center md:hidden ${
            dark ? "text-night-ink" : "text-ink"
          }`}
        >
          <span className="relative block h-3 w-6" aria-hidden="true">
            <span
              className={`absolute left-0 h-[2px] w-6 bg-current transition-transform duration-300 ${
                open ? "top-[5px] rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 h-[2px] w-6 bg-current transition-transform duration-300 ${
                open ? "top-[5px] -rotate-45" : "top-[10px]"
              }`}
            />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.2, 0.9, 0.1, 1] }}
            className="fixed inset-0 flex flex-col bg-night px-5 pt-24 pb-10 text-night-ink sm:px-8 md:hidden"
          >
            <ul className="flex flex-col">
              {NAV.map((item, i) => (
                <li key={item.id} className="border-b border-night-rule">
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between py-4"
                  >
                    <span className="display text-[2.6rem]">{item.label}</span>
                    <span className="label text-night-soft">0{i + 1}</span>
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${EMAIL}`}
              onClick={() => setOpen(false)}
              className="mt-auto bg-signal px-5 py-4 text-center text-[15px] font-semibold text-ink"
            >
              {EMAIL}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
