import type { Metadata } from "next";
import Dateline from "../components/Dateline";
import Navbar from "../components/Navbar";
import Studio from "../components/Studio";
import Footer from "../components/Footer";
import { AppsStructuredData } from "../components/StructuredData";
import { counts, spell } from "../lib/apps";

const description = `I build iPhone and web apps, and for iPhone apps I handle App Store review and launch. ${
  spell(counts.live)[0].toUpperCase() + spell(counts.live).slice(1)
} of my own apps are live on the App Store.`;

const title = "iPhone and Web App Development | LoRicco & Co.";
const ogImage = {
  url: "/og.jpg",
  width: 1200,
  height: 630,
  alt: "LoRicco & Co.: I'm an attorney who builds software for law firms and small businesses, with a portrait of Richard T. LoRicco.",
};

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/apps" },
  openGraph: {
    title,
    description,
    url: "/apps",
    type: "website",
    siteName: "LoRicco & Co.",
    locale: "en_US",
    images: [ogImage],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.jpg"] },
};

export default function AppsPage() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] rounded bg-[var(--ink)] px-3 py-2 text-[var(--paper)]"
      >
        Skip to main content
      </a>
      <AppsStructuredData />
      <Dateline />
      <Navbar />
      <main id="main-content" className="relative overflow-x-clip">
        <Studio />
      </main>
      <Footer />
    </>
  );
}
