import SectionHead from "./ui/SectionHead";

const steps = [
  {
    verb: "Review",
    detail:
      "Most engagements start with a written review of what's there: a technical memo, a website findings report, a workflow audit, or a read on a business plan.",
  },
  {
    verb: "Recommend",
    detail:
      "I explain what I found and what I'd do about it, in plain English, most important first. You get it in writing so you can act on it or get a second opinion.",
  },
  {
    verb: "Build",
    detail: "Then I write the memo, build the website or AI tool, draft the deck, or run the training.",
  },
  {
    verb: "Maintain",
    detail:
      "If the work is ongoing, I monitor the system, handle updates, and make changes as you need them.",
  },
];

export default function Process() {
  return (
    <section id="process" aria-label="How an engagement runs" className="py-28 lg:py-36">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <SectionHead
          index="03"
          label="Process"
          title={
            <>
              How an
              <br />
              engagement <span className="serif-i text-signal-ink">runs</span>
            </>
          }
          intro="Websites, training, cases, and business plans all go through the same four steps."
        />

        <ol className="mt-16 grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.verb} className="bg-card p-6 sm:p-8">
              <div className="flex h-5 items-center justify-between">
                <span className="label text-signal-ink">Step 0{i + 1}</span>
                {i < steps.length - 1 && (
                  <span className="hidden text-ink-mute lg:inline" aria-hidden="true">
                    →
                  </span>
                )}
              </div>
              <h3 className="display display-tight mt-14 text-[2rem] sm:text-[2.3rem]">{s.verb}</h3>
              <p className="mt-4 text-[15px] leading-[1.6] text-ink-soft">{s.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
