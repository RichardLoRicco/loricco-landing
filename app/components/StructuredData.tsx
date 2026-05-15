export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LoRicco & Co",
    url: "https://loriccoandco.com",
    description:
      "Independent iOS app studio and AI consulting practice building thoughtful mobile experiences and helping companies integrate AI into their workflows.",
    founder: {
      "@type": "Person",
      name: "Richard LoRicco",
      jobTitle: "Founder & Developer",
      url: "https://www.richardloricco.com",
    },
    email: "admin@loriccoandco.com",
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
