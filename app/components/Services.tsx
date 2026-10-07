import Reveal from "./Reveal";

const services = [
  {
    section: "01",
    title: "Websites & AI Tools",
    outcome: "You own the site and accounts",
    description:
      "I rebuild outdated websites without throwing away the search rankings they already have. After launch, I can maintain the site, publish content, improve how it appears in Google and AI answers, and build AI tools for intake or routine work. The domain, code, content, and accounts stay in your name.",
    offerings: [
      "Website rebuilds without losing rankings",
      "Ongoing site care and content",
      "Visibility in Google and AI answers",
      "AI tools for intake and routine work",
    ],
  },
  {
    section: "02",
    title: "AI Education & Training",
    outcome: "Staff who use the tools",
    description:
      "Training for lawyers and small-business teams on what AI tools do well, where they fail, and how to use them without creating a compliance problem. The sessions use examples from the systems I build and run every day.",
    offerings: [
      "Law-firm workshops",
      "Small-business sessions",
      "Written workflow guides",
      "Follow-up office hours",
    ],
  },
  {
    section: "03",
    title: "Technical Consulting for Law Firms",
    outcome: "Analysis counsel can use",
    description:
      "When a case turns on technology, I work for the attorney. I read the discovery, interpret carrier and platform records, and explain what the records show in writing. The engagement is structured with work-product protection in mind. I also advise firms on their own technology decisions.",
    offerings: [
      "Digital evidence & discovery analysis",
      "Technical memos for counsel",
      "Questions for opposing experts",
      "Firm technology guidance",
    ],
  },
  {
    section: "04",
    title: "Contract Legal Work for Law Firms",
    outcome: "Extra capacity when you need it",
    description:
      "Firms bring me in when they need another attorney on a matter without making a hire. I take on legal research, research memos, and drafting, and I return work your attorneys can review and use. I'm admitted in Connecticut.",
    offerings: [
      "Legal research",
      "Research memos",
      "Litigation & contract drafting",
      "Single projects or ongoing help",
    ],
  },
  {
    section: "05",
    title: "Business & Startup Advisory",
    outcome: "A second opinion",
    description:
      "I advise startups and business owners on pitch decks, financial projections, competitive analysis, go-to-market strategy, and architecture reviews. I read the deck, the contract, and the codebase myself, so the business, legal, and technical questions get answered by the same person.",
    offerings: [
      "Pitch decks & projections",
      "Competitive analysis",
      "Go-to-market strategy",
      "Architecture & code reviews",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      aria-label="Services"
      className="relative"
      style={{ padding: "var(--space-section) 0" }}
    >
      <div className="page-gutter">
        <div className="section-head">
          <div>
            <p className="section-num">01 &middot; Services</p>
            <h2 className="mt-3 balance">
              What I <span className="serif-italic">do</span>.
            </h2>
          </div>
        </div>

        <p className="body-serif pretty mt-10 max-w-2xl" style={{ fontSize: "1.15rem" }}>
          I handle each engagement myself. There is no account manager between
          us and no junior staff doing the work.
        </p>

        <ol className="mt-14">
          {services.map((service, i) => (
            <Reveal as="li" key={service.title} delay={i * 60}>
              <article className="service-row group">
                <p className="meta" style={{ color: "var(--accent)" }}>
                  {service.section}
                </p>

                <div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="body-serif pretty mt-4 max-w-2xl" style={{ fontSize: "1.05rem" }}>
                    {service.description}
                  </p>
                </div>

                <div>
                  <p className="meta">Outcome</p>
                  <p className="serif-italic mt-1" style={{ fontSize: "1.15rem" }}>
                    {service.outcome}
                  </p>
                  <ul className="offerings" aria-label={`${service.title} includes`}>
                    {service.offerings.map((offering) => (
                      <li key={offering}>{offering}</li>
                    ))}
                  </ul>
                  {/* A ready-made subject line, so nobody starts from a blank email */}
                  <a
                    href={`mailto:admin@loriccoandco.com?subject=${encodeURIComponent(service.title)}`}
                    className="link-accent meta mt-6 inline-block"
                    style={{ color: "var(--accent)" }}
                    aria-label={`Email about ${service.title}`}
                  >
                    Email about this &rarr;
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <p className="body-serif pretty mt-8 max-w-2xl" style={{ fontSize: "1.05rem" }}>
            Some problems cross more than one service. Most engagements start
            with a short call and a written review of where things stand.{" "}
            <a href="mailto:admin@loriccoandco.com" className="link-ink">
              Email me
            </a>{" "}
            and we&apos;ll figure it out from there.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
