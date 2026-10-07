"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";

const EMAIL = "admin@loriccoandco.com";
const [EMAIL_USER, EMAIL_DOMAIN] = EMAIL.split("@");

function CopyEmail() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2200);
    return () => clearTimeout(t);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
    } catch {
      /* Clipboard unavailable: the mailto link next to this still works. */
    }
  };

  return (
    <button type="button" onClick={copy} className="btn btn-secondary" aria-live="polite">
      {copied ? "Copied" : "Copy address"}
    </button>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact"
      className="relative"
      style={{ padding: "var(--space-section) 0 6rem" }}
    >
      <div className="page-gutter">
        <div className="section-head">
          <div>
            <p className="section-num">06 &middot; Contact</p>
            <h2 className="mt-3 balance">
              Tell me what <span className="serif-italic">you&apos;re working on</span>.
            </h2>
          </div>
        </div>

        <Reveal>
          <div className="pt-14">
            <p className="body-serif pretty max-w-2xl" style={{ fontSize: "1.2rem" }}>
              Send me a note about the website, the team, the case, or the
              business. I&apos;ll reply with a few questions, and if it makes
              sense we&apos;ll set up a short call and I&apos;ll follow up with
              a written review.
            </p>

            {/* The address itself, set large, as on the personal site */}
            <a href={`mailto:${EMAIL}`} className="contact-email group mt-10 inline-block">
              <span className="contact-email-line">
                {EMAIL_USER}
                <span style={{ color: "var(--accent)", fontStyle: "italic" }}>@</span>
                {EMAIL_DOMAIN}
              </span>
            </a>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href={`mailto:${EMAIL}`} className="btn btn-primary">
                Get in touch
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <CopyEmail />
            </div>
            <p className="meta mt-6">Replies &middot; usually one business day</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
