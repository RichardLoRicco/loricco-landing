import Reveal from "./Reveal";

const principles = [
  {
    title: "Client matters stay private",
    description:
      "Consulting work for counsel stays between me and the attorney. I don't turn those matters into marketing material or publish case studies about them.",
  },
  {
    title: "Straight answers",
    description:
      "I'll tell you plainly what I find and what it would cost to fix, including when the answer is that you don't need me.",
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
            <p className="section-num">03 &middot; About</p>
            <h2 className="mt-3 balance">
              About the <span className="serif-italic">principal</span>.
            </h2>
          </div>
        </div>

        <div className="grid gap-12 pt-14 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-20">
          <Reveal>
            <p className="body-serif pretty" style={{ fontSize: "1.2rem", lineHeight: 1.65 }}>
              LoRicco &amp; Co. is my practice. I&apos;m an attorney admitted in
              Connecticut and a software engineer, and I hold an MBA. I&apos;m also of
              counsel to The LoRicco Law Firm in New Haven, which is a separate
              business. Because I work in all three fields, a client whose problem
              touches more than one of them only has to explain it once.
            </p>

            <div className="mt-10 border-t border-[var(--rule-color)] pt-8">
              <p style={{ fontFamily: "var(--ff-display)", fontSize: "1.5rem", lineHeight: 1.1 }}>
                Richard T. LoRicco
              </p>
              <p className="meta mt-2" style={{ color: "var(--accent)" }}>
                Attorney (LL.M., J.D., MBA) &middot; Software Engineer &middot; New Haven, CT
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ul className="flex flex-col">
              {principles.map((principle) => (
                <li
                  key={principle.title}
                  className="border-t border-[var(--rule-color)] py-6 last:border-b"
                >
                  <h3 style={{ fontSize: "1.35rem", lineHeight: 1.15 }}>{principle.title}</h3>
                  <p className="body-serif pretty mt-2" style={{ fontSize: "0.98rem" }}>
                    {principle.description}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
