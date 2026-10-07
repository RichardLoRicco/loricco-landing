"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";

const EMAIL = "admin@loriccoandco.com";
const [EMAIL_USER, EMAIL_DOMAIN] = EMAIL.split("@");

export default function Contact() {
  // Copying "stamps" the address: its underline draws in the accent and the
  // italic @ sets upright until the button resets (see .contact-email).
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
      /* Clipboard unavailable: the address above is still a mailto link. */
    }
  };

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

            {/* The address itself, set large, as on the personal site. It is the mailto. */}
            <a
              href={`mailto:${EMAIL}`}
              className="contact-email mt-10 inline-block"
              data-copied={copied || undefined}
            >
              <span className="contact-email-line">
                {EMAIL_USER}
                <span className="contact-email-at">@</span>
                {EMAIL_DOMAIN}
              </span>
            </a>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <button type="button" onClick={copy} className="btn btn-secondary">
                {copied ? "Copied" : "Copy address"}
              </button>
              <span role="status" className="sr-only">
                {copied ? "Email address copied" : ""}
              </span>
              <p className="meta">Replies &middot; usually one business day</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
