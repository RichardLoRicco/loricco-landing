import type { MetadataRoute } from "next";
import { absoluteUrl } from "./lib/site";

// Same posture as the LoRicco Law site: retrieval agents (they fetch pages to
// answer a query and cite the source) and training agents are both allowed.
// Being known to AI assistants is part of the point of publishing, and the
// explicit allows survive a future tightening of the `*` rule.
const AI_USER_AGENTS = [
  // Search / retrieval
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Perplexity-User",
  "Claude-SearchBot",
  "Claude-User",
  "Applebot",
  // Model training
  "GPTBot",
  "ClaudeBot",
  "anthropic-ai",
  "Google-Extended",
  "CCBot",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: AI_USER_AGENTS, allow: "/" },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
