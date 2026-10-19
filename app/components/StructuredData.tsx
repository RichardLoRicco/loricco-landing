import { liveApps } from "../lib/apps";
import { services } from "../lib/services";

const SITE = "https://loriccoandco.com";

/*
  One graph: the site, the business, and its principal, linked by @id.
  - Organization, not ProfessionalService (deprecated on schema.org) and never
    LegalService: this is not a law firm, and the markup must not suggest one.
  - The offer catalog is built from the same list as the visible Services rows,
    and each description is the visible paragraph word for word (Google's
    structured-data policy: markup describes what readers can see).
*/
export default function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE}/#website`,
        url: SITE,
        name: "LoRicco & Co.",
        alternateName: ["LoRicco and Co", "loriccoandco"],
        publisher: { "@id": `${SITE}/#business` },
      },
      {
        "@type": "Organization",
        "@id": `${SITE}/#business`,
        name: "LoRicco & Co.",
        legalName: "LoRicco & Co. LLC",
        url: SITE,
        description:
          "LoRicco & Co. is the New Haven, Connecticut practice of Richard T. LoRicco, an attorney and software engineer. He builds websites and apps, trains teams to use AI and builds it into their work, takes on legal research and technical consulting for law firms, and advises startups and small businesses.",
        email: "admin@loriccoandco.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "New Haven",
          addressRegion: "CT",
          addressCountry: "US",
        },
        areaServed: "United States",
        founder: { "@id": `${SITE}/#richard` },
        sameAs: [
          "https://x.com/richard_loricco",
          "https://www.tiktok.com/@loriccoandco",
          "https://www.youtube.com/@richardloricco",
          "https://linktr.ee/richardloricco",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.description,
              provider: { "@id": `${SITE}/#business` },
            },
          })),
        },
      },
      {
        "@type": "Person",
        "@id": `${SITE}/#richard`,
        name: "Richard T. LoRicco",
        jobTitle: "Attorney and software engineer",
        image: `${SITE}/portrait-bw.jpg`,
        url: "https://www.richardloricco.com",
        worksFor: { "@id": `${SITE}/#business` },
        sameAs: [
          "https://www.linkedin.com/in/richard-loricco-esq",
          "https://github.com/RichardLoRicco",
          "https://x.com/richard_loricco",
        ],
        alumniOf: [
          { "@type": "CollegeOrUniversity", name: "University of Connecticut School of Business" },
          { "@type": "CollegeOrUniversity", name: "Quinnipiac University School of Law" },
        ],
      },
    ],
  };

  const appsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "LoRicco & Co. Apps",
    itemListElement: liveApps.map((app, i) => ({
      "@type": "SoftwareApplication",
      position: i + 1,
      name: app.name,
      applicationCategory: app.schemaCategory,
      operatingSystem: "iOS",
      url: app.siteUrl,
      installUrl: app.appStoreUrl,
      description: `${app.tagline} ${app.description}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appsSchema) }}
      />
    </>
  );
}
