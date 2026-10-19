import Reveal from "./Reveal";
import { counts, spell } from "../lib/apps";

const capitalize = (s: string) => s[0].toUpperCase() + s.slice(1);

type Service = {
  title: string;
  description: string;
  /** A second link beside "Email about this", to proof elsewhere on the page. */
  seeAlso?: { href: string; label: string };
};

const services: Service[] = [
  {
    title: "Websites & AI Tools",
    description:
      "I rebuild outdated websites for law firms and small businesses. Before anything changes, I inventory the URLs and search rankings the site already has and plan the move around keeping them. After launch I can maintain the site, publish content, work on how it shows up in Google and in AI answers, and build AI tools for intake or routine work. The domain, code, content, and accounts stay in your name.",
  },
  {
    title: "Web & Mobile Apps",
    // The count comes from the Studio list, so this sentence stays true as apps ship.
    description: `I build iPhone apps and web apps, from the first version through App Store review and launch. ${capitalize(spell(counts.live))} of my own are on the App Store, so I've handled review, subscriptions, analytics, and support for real apps. I can also take over an app that has stalled or add features to one you already have. The developer accounts and the App Store listing stay in your name.`,
    seeAlso: { href: "#studio", label: "See the apps I've built" },
  },
  {
    title: "AI Education & Training",
    description:
      "I train lawyers and small-business teams on what AI tools do well, where they fail, and how to use them without creating a compliance problem. The sessions use examples from systems I build and run every day, and each one comes with a written guide and follow-up office hours.",
  },
  {
    title: "Technical Consulting for Law Firms",
    description:
      "When a case turns on technology, I work for the attorney. I read the discovery, interpret carrier and platform records, explain in writing what the records show, and prepare questions for opposing experts. The engagement is structured with work-product protection in mind. I also advise firms on their own technology decisions.",
  },
  {
    title: "Contract Legal Work for Law Firms",
    description:
      "Firms bring me in when they need another attorney on a matter without making a hire. I handle legal research, research memos, and litigation and contract drafting, for a single project or on an ongoing basis. I'm admitted in Connecticut.",
  },
  {
    title: "Business & Startup Advisory",
    description:
      "I review pitch decks, financial projections, and go-to-market plans for startups and small businesses. When there's a product behind them, I review its architecture and code as well.",
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


        <ol className="mt-12">
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
                      aria-label={`Email about this: ${service.title}`}
                    >
                      Email about this
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
