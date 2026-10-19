import Reveal from "./Reveal";

/*
  The one way every engagement begins, whatever the service. Replaces the old
  four-step Process section; kept short on purpose.
*/
export default function HowWorkStarts() {
  return (
    <section
      id="how-work-starts"
      aria-labelledby="how-work-starts-title"
      className="relative"
      style={{ padding: "var(--space-section) 0" }}
    >
      <div className="page-gutter">
        <div className="section-head">
          <div>
            <h2 id="how-work-starts-title" className="balance">
              How work <span className="serif-italic">starts</span>.
            </h2>
          </div>
        </div>

        <Reveal>
          <div className="mt-10 max-w-2xl">
            <p className="body-serif pretty" style={{ fontSize: "1.15rem" }}>
              Most work starts with a short call and then a written review of where
              things stand. For a website that&apos;s a findings report, for a case
              it&apos;s a memo on the technical question, and for a business it&apos;s
              a read on the plan. You get my recommendation in writing, and you can
              act on it with me or with someone else.
            </p>
            <p className="body-serif pretty mt-5" style={{ fontSize: "1.15rem" }}>
              For ongoing work, I keep the site or system running and revisit it as
              your needs change.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
