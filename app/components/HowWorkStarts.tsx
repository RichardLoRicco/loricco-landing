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
              The first step is usually a short call, then a written review of where
              things stand, whether that&apos;s a findings report on a website, a memo
              on the technical question in a case, or notes on a business plan. You
              can act on it with me or with someone else.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
