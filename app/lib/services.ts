/* The four service lines: one source for the visible Services rows and the JSON-LD offer catalog. */

export type Service = {
  title: string;
  /** Short form for the email link and its subject line. */
  short: string;
  description: string;
  /** A second link beside the email link, to more detail elsewhere. */
  seeAlso?: { href: string; label: string };
  /** A closing sentence with one link, rendered after the description. */
  referral?: { before: string; linkText: string; href: string; after: string };
};

/*
  Four lines, in order of weight. Naming rules: "and", not "&" (the ampersand
  belongs to the wordmark); "for law firms" only on the one line that is only
  for law firms; plain nouns ("work", not "advisory"). Legal work is offered to law firms
  only, so nothing here may read as legal services for a small business.
*/
export const services: Service[] = [
  {
    title: "Websites and apps",
    short: "websites and apps",
    description:
      "I rebuild outdated websites for law firms and small businesses. Before anything changes, I inventory the URLs and search rankings the site already has and plan the rebuild around keeping them. After launch I maintain the site, publish content, and work on how it shows up in Google and in AI answers. I also build web and iPhone apps, and for iPhone apps I handle App Store review and launch. The domain, code, content, and developer accounts stay in your name.",
    seeAlso: { href: "/apps", label: "See the apps I've built" },
  },
  {
    title: "AI training and integration",
    short: "AI training and integration",
    description:
      "I train lawyers, small-business teams, and engineers to use AI in their daily work, including where the tools fail. For law firms, the training also covers what client confidentiality requires, and each session comes with a written guide. I also set up AI systems that take on day-to-day work like intake, scheduling, and routine admin. For engineering teams, I set up AI-assisted development, from the tools to the review process.",
  },
  {
    title: "Legal and technical work for law firms",
    short: "legal and technical work",
    description:
      "Law firms can bring me in as a contract attorney for legal research, research memos, and contract drafting. When a case turns on digital evidence, I review the discovery, interpret carrier and platform records, and explain to the firm's attorneys in writing what the records show. I work for the attorney and don't appear in court or testify. That consulting is structured with work-product protection in mind. I'm admitted in Connecticut, and I take this work only from law firms.",
  },
  {
    title: "Business and startup work",
    short: "business and startup work",
    description:
      "Startups can hire me for much of what an early team needs. I build pitch decks, financial projections, and go-to-market plans, work as a product manager, and set up how the product gets built, or build it myself. I do the same for small businesses starting something new. This is business and technical work, not legal advice.",
  },
];
