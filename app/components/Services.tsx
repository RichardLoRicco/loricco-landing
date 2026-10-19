import Reveal from "./Reveal";

type Service = {
  title: string;
  /** Short form for the email link and its subject line. */
  short: string;
  description: string;
  /** A second link beside the email link, to more detail elsewhere. */
  seeAlso?: { href: string; label: string };
};

/*
  Four lines, in order of weight. Naming rules: "and", not "&" (the ampersand
  belongs to the wordmark); "for law firms" only on the one line that is only
  for law firms; "advice", not "advisory". Legal work is offered to law firms
  only, so nothing here may read as legal services for a small business.
*/
const services: Service[] = [
  {
    title: "Websites and apps",
    short: "websites and apps",
    description:
      "I rebuild outdated websites for law firms and small businesses. Before anything changes, I inventory the URLs and search rankings the site already has and plan the move around keeping them. After launch I maintain the site, publish content, and work on how it shows up in Google and in AI answers. I also build iPhone and web apps and take them through App Store review and launch. The domain, code, content, and developer accounts stay in your name.",
    seeAlso: { href: "/apps", label: "See the apps I've built" },
  },
  {
    title: "AI training and integration",
    short: "AI training and integration",
    description:
      "I train lawyers and small-business teams to use AI tools in their daily work, including where the tools fail and, for law firms, what confidentiality requires. Each session comes with a written guide and follow-up office hours. I also build AI tools for intake and routine work.",
  },
  {
    title: "Legal and technical work for law firms",
    short: "legal and technical work",
    description:
      "Law firms bring me in as a contract attorney when they need another lawyer on a matter without making a hire. I handle legal research, research memos, and litigation and contract drafting. When a case turns on digital evidence, I read the discovery, interpret carrier and platform records, explain in writing what they show, and prepare questions for opposing experts. That consulting is structured with work-product protection in mind. I'm admitted in Connecticut, and I take legal work from law firms only.",
  },
  {
    title: "Business and startup advice",
    short: "business and startup advice",
    description:
      "I review pitch decks, financial projections, and go-to-market plans for startups and small businesses, and when there's a product behind them, its architecture and code. This is business and technical advice, not legal advice. If something needs a lawyer, I'll tell you.",
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

        <ol className="mt-2">
          {services.map((service, i) => (
            <Reveal as="li" key={service.title} delay={i * 60}>
              <article className="service-row">
                <h3 className="service-title">{service.title}</h3>
                <div>
                  <p className="body-serif pretty max-w-2xl" style={{ fontSize: "1.05rem" }}>
                    {service.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 body-serif" style={{ fontSize: "1rem" }}>
                    {/* A ready-made subject line, so nobody starts from a blank email */}
                    <a
                      href={`mailto:admin@loriccoandco.com?subject=${encodeURIComponent(service.title)}`}
                      className="link-ink"
                    >
                      Email me about {service.short}
                    </a>
                    {service.seeAlso && (
                      <a href={service.seeAlso.href} className="link-ink">
                        {service.seeAlso.label}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <p className="body-serif pretty mt-8 max-w-2xl" style={{ fontSize: "1.05rem" }}>
            Some work crosses more than one of these.{" "}
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
