"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { useActiveSection } from "./ActiveSection";
import { SECTIONS } from "../lib/sections";

const navLinks = SECTIONS.map((s) => ({
  id: s.id,
  label: s.id === "work" ? "Work" : s.label,
  href: `/#${s.id}`,
}));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const active = useActiveSection();

  // Reading-progress hairline along the bottom edge of the bar.
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      const firstLink = document.querySelector<HTMLAnchorElement>("#mobile-menu a");
      firstLink?.focus();
    }
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [mobileOpen]);

  return (
    <motion.nav
      aria-label="Main navigation"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-line"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-tight text-foreground"
        >
          LoRicco <span className="editorial font-medium text-ins">&</span> Co.
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={`u-link text-sm font-medium transition-colors duration-200 ${
                  isActive ? "text-ins" : "text-body-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="mailto:admin@loriccoandco.com"
            className="btn bg-foreground px-4 py-2 text-sm font-semibold text-background"
            style={{ ["--btn-fill" as string]: "var(--color-ins)" }}
          >
            Get in touch
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          ref={toggleRef}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-50 -mr-2.5 flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <span
            className={`block h-px w-5 bg-foreground transition-all duration-300 ${
              mobileOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-foreground transition-all duration-300 ${
              mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Reading progress: a ins hairline that grows along the bottom edge */}
      <motion.div
        aria-hidden="true"
        className={`absolute bottom-[-1px] left-0 h-px w-full origin-left bg-ins transition-opacity duration-300 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
        style={{ scaleX: progress }}
      />

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-line bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-baseline gap-4 font-display text-lg text-body-muted transition-colors hover:text-ins"
                >
                  <span className="font-mono text-[11px] text-ins tnum">
                    {i + 1}
                  </span>
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:admin@loriccoandco.com"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex w-fit rounded-[3px] bg-foreground px-4 py-2 text-sm font-semibold text-background"
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
