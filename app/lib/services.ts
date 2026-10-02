export type Service = {
  slug: string;
  title: string;
  short: string;
  outcome: string;
  description: string;
  offerings: string[];
};

export const services: Service[] = [
  {
    slug: "websites",
    title: "Websites & AI tools",
    short: "Websites & AI tools",
    outcome: "You own the site and the accounts",
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
    slug: "training",
    title: "AI education & training",
    short: "AI training",
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
    slug: "consulting",
    title: "Technical consulting for law firms",
    short: "Consulting for counsel",
    outcome: "Analysis counsel can use",
    description:
      "When a case turns on technology, I work for the attorney. I read the discovery, interpret carrier and platform records, and explain what the records show in writing. The engagement is structured with work-product protection in mind. I also advise firms on their own technology decisions.",
    offerings: [
      "Digital evidence and discovery analysis",
      "Technical memos for counsel",
      "Questions for opposing experts",
      "Firm technology guidance",
    ],
  },
  {
    slug: "advisory",
    title: "Business & startup advisory",
    short: "Startup advisory",
    outcome: "A second opinion",
    description:
      "I advise startups and business owners on pitch decks, financial projections, competitive analysis, go-to-market strategy, and architecture reviews. I read the deck, the contract, and the codebase myself, so the business, legal, and technical questions get answered by the same person.",
    offerings: [
      "Pitch decks and projections",
      "Competitive analysis",
      "Go-to-market strategy",
      "Architecture and code reviews",
    ],
  },
];
