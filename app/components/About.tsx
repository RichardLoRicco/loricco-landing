import Reveal from "./Reveal";

const principles = [
  {
    id: "01",
    title: "Client matters stay private",
    description:
      "Consulting work for counsel is structured with privilege and work-product protection in mind. I don't turn those matters into marketing material or publish case studies about them.",
  },
  {
    id: "02",
    title: "Straight answers",
    description:
      "You'll get a direct answer on what the records show, what's broken, what it costs to fix, and what AI can and can't do for you, including when the answer is that you don't need me.",
  },
  {
    id: "03",
    title: "Keep what's working",
    description:
      "A rebuild shouldn't cost you the search rankings you spent years earning. I inventory your URLs, rankings, and content before anything changes, and the migration is planned around keeping them.",
  },
  {
    id: "04",
    title: "You own everything",
    description:
      "The domain, code, content, analytics, and accounts are set up in your name from the first day. If we part ways, you keep a working system and everything needed to run it.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-label="About"
      className="relative"
      style={{ padding: "var(--space-section) 0" }}
    >
      <div className="page-gutter">
        <div className="section-head">
          <div>
            <p className="section-num">05 &middot; About</p>
            <h2 className="mt-3 balance">
              About the <span className="serif-italic">principal</span>.
            </h2>
          </div>
        </div>

        <div className="grid gap-12 pt-14 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-20">
          <Reveal>
            <p className="drop-cap body-serif pretty" style={{ fontSize: "1.2rem", lineHeight: 1.65 }}>
              I practiced law, consulted for startups, and then moved into
              building production software. The services on this page grew
              out of problems people kept bringing me. Their firm website had
              stopped bringing in work. Their team bought AI tools but never
              used them. Their case turned on carrier records. Their business
              plan needed a straight read.
            </p>

            <div className="mt-10 border-t border-[var(--rule-color)] pt-8">
              <p style={{ fontFamily: "var(--ff-display)", fontSize: "1.5rem", lineHeight: 1.1 }}>
                Richard T. LoRicco
              </p>
              <p className="meta mt-2" style={{ color: "var(--accent)" }}>
                Attorney (LL.M., J.D., MBA) &middot; Software Engineer &middot; New Haven, CT
              </p>
              <p className="body-serif pretty mt-4 max-w-xl" style={{ fontSize: "1.05rem" }}>
                I&apos;m a Connecticut-admitted attorney and software
                engineer with an LL.M., J.D., and MBA. My work has included
                legal practice, startup consulting, production web and AI
                systems, open-source tools, and the studio&apos;s apps.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ul className="flex flex-col">
              {principles.map((principle) => (
                <li
                  key={principle.id}
                  className="group grid grid-cols-[auto_1fr] items-baseline gap-6 border-t border-[var(--rule-color)] py-6 last:border-b"
                >
                  <span className="meta" style={{ color: "var(--accent)", minWidth: "2.5rem" }}>
                    {principle.id}
                  </span>
                  <div>
                    <h3
                      className="transition-colors group-hover:text-[var(--accent)]"
                      style={{ fontSize: "1.35rem", lineHeight: 1.15 }}
                    >
                      {principle.title}
                    </h3>
                    <p className="body-serif pretty mt-2" style={{ fontSize: "0.98rem" }}>
                      {principle.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
