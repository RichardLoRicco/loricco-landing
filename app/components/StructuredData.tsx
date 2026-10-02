import { liveApps } from "../lib/apps";

export default function StructuredData() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://loriccoandco.com/#business",
    name: "LoRicco & Co",
    url: "https://loriccoandco.com",
    description:
      "LoRicco & Co rebuilds and operates websites, develops AI tools, trains lawyers and small businesses, analyzes digital evidence for counsel, and advises startups. The principal is a Connecticut-admitted attorney, MBA, and software engineer. The studio also publishes iOS apps.",
    email: "admin@loriccoandco.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "New Haven",
      addressRegion: "CT",
      addressCountry: "US",
    },
    areaServed: "United States",
    founder: {
      "@type": "Person",
      name: "Richard T. LoRicco",
      jobTitle: "Principal: Attorney (LL.M., J.D., MBA) and Software Engineer",
      image: "https://loriccoandco.com/portrait-bw.jpg",
      url: "https://www.richardloricco.com",
      sameAs: [
        "https://www.linkedin.com/in/richard-loricco-esq",
        "https://github.com/RichardLoRicco",
        "https://x.com/richard_loricco",
      ],
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "University of Connecticut School of Business",
        },
        {
          "@type": "CollegeOrUniversity",
          name: "Quinnipiac University School of Law",
        },
      ],
    },
    sameAs: [
      "https://x.com/richard_loricco",
      "https://www.tiktok.com/@loriccoandco",
      "https://www.youtube.com/@richardloricco",
      "https://linktr.ee/richardloricco",
    ],
    knowsAbout: [
      "Website redesign and SEO-safe migration",
      "Search engine optimization",
      "AI-search visibility (answer engine optimization, generative engine optimization)",
      "Content strategy and attorney-advertising compliance",
      "AI agents and workflow automation",
      "AI education and training for lawyers and small businesses",
      "Litigation technology and digital evidence consulting",
      "Software architecture",
      "iOS app development",
      "Business and startup strategy",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Website Rebuilds with SEO-Safe Migration",
            description:
              "Website redesigns for law firms, professional practices, and local businesses, including URL preservation, redirects, structured data, and Search Console setup.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Content & AI-Search Visibility",
            description:
              "Ongoing content, local SEO, and work to improve how a business appears in search engines and AI-generated answers, with attorney-advertising review for law firms.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Agents & Integration",
            description:
              "AI tools for law firms and small businesses, including intake, follow-up, research, documentation, and internal workflows.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Education & Training",
            description:
              "AI workshops for lawyers and small-business teams covering day-to-day use, common failures, and compliance concerns.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Technical Consulting for Law Firms",
            description:
              "Digital evidence and discovery analysis, written explanations of technical records, questions for opposing experts, and advice on law-firm technology. Retained by counsel and structured as non-testifying consulting with work-product protection in mind.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Business & Startup Advisory",
            description:
              "Pitch decks, financial projections, competitive analysis, architecture reviews, and go-to-market strategy for startups and small businesses.",
          },
        },
      ],
    },
  };

  const appsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "LoRicco & Co Apps",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appsSchema) }}
      />
    </>
  );
}
