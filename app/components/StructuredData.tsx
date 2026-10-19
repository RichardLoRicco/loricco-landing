import { liveApps } from "../lib/apps";
import { services } from "../lib/services";

const SITE = "https://loriccoandco.com";

/*
  One graph: the site, the business, and its principal, linked by @id.
  - Organization, not ProfessionalService (deprecated on schema.org) and never
    LegalService: this is not a law firm, and the markup must not suggest one.
  - The offer catalog is built from the same list as the visible Services rows,
    and each description is that row's visible paragraph (Google's
    structured-data policy: markup describes what readers can see). The apps
    list lives on /apps only (AppsStructuredData), where the apps are shown.
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
          "LoRicco & Co. is the New Haven, Connecticut company of Richard T. LoRicco, an attorney and software engineer. He builds websites and apps, trains teams to use AI and builds it into their work, takes on legal research and technical consulting for law firms, and works with startups and small businesses on the business and the product.",
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
          { "@type": "CollegeOrUniversity", name: "University of Miami School of Law" },
          { "@type": "CollegeOrUniversity", name: "University of Connecticut School of Business" },
          { "@type": "CollegeOrUniversity", name: "Quinnipiac University School of Law" },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

/* The six live apps, rendered on /apps only. Prices come from the App Store. */
export function AppsStructuredData() {
  const list = {
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
      publisher: { "@id": `${SITE}/#business` },
      offers: {
        "@type": "Offer",
        price: app.price && app.price !== "Free" ? app.price.replace("$", "") : "0",
        priceCurrency: "USD",
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(list) }}
    />
  );
}
