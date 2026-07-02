export default function StructuredData() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://loriccoandco.com/#business",
    name: "LoRicco & Co",
    url: "https://loriccoandco.com",
    description:
      "Independent software studio and consultancy. LoRicco & Co builds websites optimized for search and AI discoverability, integrates AI into products and workflows, and advises startups and small businesses on engineering and business strategy. The studio also ships its own iOS apps.",
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
      name: "Richard LoRicco",
      jobTitle: "Founder & Software Engineer",
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
      "Web development",
      "Search engine optimization",
      "AI discoverability (answer engine optimization)",
      "AI integration and consulting",
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
            name: "Web Development & AI Discoverability",
            description:
              "Design and development of fast, modern websites structured for search engine ranking and AI assistant discoverability, including SEO best practices, structured data, and custom web applications.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Consulting & Integration",
            description:
              "AI strategy, product features, workflow automation, and agent/RAG systems for products, websites, and internal operations.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Software Engineering Consulting",
            description:
              "Architecture reviews, code quality audits, and technical strategy for engineering teams.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Business & Startup Consulting",
            description:
              "Pitch decks, financial projections, competitive analysis, and go-to-market strategy for startups and small businesses.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Education & Training",
            description:
              "AI workshops and practical training for teams.",
          },
        },
      ],
    },
  };

  const appsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "LoRicco & Co Apps",
    itemListElement: [
      {
        "@type": "SoftwareApplication",
        position: 1,
        name: "Atlas",
        applicationCategory: "HealthApplication",
        operatingSystem: "iOS",
        url: "https://atlas.loriccoandco.com/",
        installUrl:
          "https://apps.apple.com/us/app/atlas-fitness-motivation/id6760481617",
        description:
          "Daily fitness motivation app with quotes, streaks, and accountability.",
      },
      {
        "@type": "SoftwareApplication",
        position: 2,
        name: "Grill Tonight",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "iOS",
        url: "https://grilltonight-landing.vercel.app/",
        installUrl:
          "https://apps.apple.com/us/app/grill-tonight/id6760918522",
        description:
          "Real-time weather analysis with a clear yes/no verdict on whether to grill tonight.",
      },
      {
        "@type": "SoftwareApplication",
        position: 3,
        name: "Milo",
        applicationCategory: "HealthApplication",
        operatingSystem: "iOS",
        url: "https://quitwithmilo.com/",
        installUrl:
          "https://apps.apple.com/us/app/milo-quit-vaping-smoking/id6758960403",
        description:
          "Quit-nicotine companion with craving support, streak tracking, and guided breathing.",
      },
      {
        "@type": "SoftwareApplication",
        position: 4,
        name: "Claro",
        applicationCategory: "HealthApplication",
        operatingSystem: "iOS",
        url: "https://claro.loriccoandco.com/",
        installUrl:
          "https://apps.apple.com/us/app/claro-quit-drinking-tracker/id6762022094",
        description:
          "Sobriety companion for quitting alcohol with cravings support, streaks, and guided breathing.",
      },
    ],
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
