import Reveal from "./Reveal";
import { services } from "../lib/services";

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
                <h3 className="service-title balance">{service.title}</h3>
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
