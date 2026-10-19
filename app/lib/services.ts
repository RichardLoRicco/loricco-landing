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
  for law firms; "advice", not "advisory". Legal work is offered to law firms
  only, so nothing here may read as legal services for a small business.
*/
export const services: Service[] = [
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
      "Law firms bring me in as a contract attorney when they need another lawyer on a matter without making a hire. I handle legal research, research memos, and contract drafting. When a case turns on digital evidence, I read the discovery, interpret carrier and platform records, explain in writing what they show, and prepare questions for opposing experts. That consulting is structured with work-product protection in mind. I'm admitted in Connecticut, and I take legal work from law firms only.",
  },
  {
    title: "Business and startup advice",
    short: "business and startup advice",
    description:
      "I review pitch decks, financial projections, and go-to-market plans for startups and small businesses, and when there's a product behind them, its architecture and code. This is business and technical advice, not legal advice.",
    // Richard's call (2026-10-19): anyone who needs a lawyer goes to the firm.
    // The relationship stays visible ("of counsel") so the pointer isn't misleading.
    referral: {
      before: "If you need a lawyer, I'll refer you to ",
      linkText: "The LoRicco Law Firm",
      href: "https://loriccolaw.com/",
      after: " in New Haven, where I'm of counsel.",
    },
  },
];
