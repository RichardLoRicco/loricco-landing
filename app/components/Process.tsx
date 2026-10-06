import Reveal from "./Reveal";

const steps = [
  {
    id: "01",
    verb: "Diagnose",
    detail:
      "Most engagements start with a written review of what's there: a technical memo, a website findings report, a workflow audit, or a read on a business plan.",
  },
  {
    id: "02",
    verb: "Clarify",
    detail:
      "I explain what I found and what I'd do about it, in plain English and ranked by impact. The recommendation goes in writing so you can act on it or get a second opinion.",
  },
  {
    id: "03",
    verb: "Build",
    detail:
      "Then I do the work: the memo, the website or the agent, the deck, or the training session.",
  },
  {
    id: "04",
    verb: "Improve",
    detail:
      "For ongoing work, I monitor the system, handle updates, and revisit it when the underlying needs change.",
  },
];

/* Each step keeps its arrow on the same line, so a wrap never starts with "→". */
function Step({ children, last = false }: { children: React.ReactNode; last?: boolean }) {
  return (
    <span style={{ whiteSpace: "nowrap" }}>
      {children}
      {!last && (
        <span aria-hidden="true" style={{ color: "var(--accent)", fontWeight: 400 }}>
          {" "}&rarr;
        </span>
      )}
    </span>
  );
}

export default function Process() {
  return (
    <section
      id="process"
      aria-label="How I work"
      className="relative"
      style={{ padding: "var(--space-section) 0" }}
    >
      <div className="page-gutter">
        <div className="section-head">
          <div>
            <p className="section-num">03 &middot; Process</p>
            <h2 className="mt-3 balance">
              <Step>Diagnose</Step> <Step>Clarify</Step> <Step>Build</Step>{" "}
              <Step last>
                <span className="serif-italic">Improve</span>.
              </Step>
            </h2>
          </div>
        </div>

        <p className="body-serif pretty mt-10 max-w-2xl" style={{ fontSize: "1.15rem" }}>
          The same four steps apply whether the engagement is a website, a
          training, a case, or a business plan.
        </p>

        <ol className="process-steps mt-14">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.id} delay={i * 80}>
              <p className="meta" style={{ color: "var(--accent)" }}>
                {step.id}
              </p>
              <h3 className="mt-4" style={{ fontSize: "clamp(1.6rem, 2.4vw, 2rem)" }}>
                {step.verb}
              </h3>
              <p className="body-serif pretty mt-3" style={{ fontSize: "1rem" }}>
                {step.detail}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
