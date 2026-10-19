import type { Metadata } from "next";
import Dateline from "../components/Dateline";
import Navbar from "../components/Navbar";
import Studio from "../components/Studio";
import Footer from "../components/Footer";
import { counts, spell } from "../lib/apps";

const description = `I build iPhone and web apps and take them through App Store review and launch. ${
  spell(counts.live)[0].toUpperCase() + spell(counts.live).slice(1)
} of my own apps are live on the App Store.`;

export const metadata: Metadata = {
  title: "iPhone and Web App Development | LoRicco & Co.",
  description,
  alternates: { canonical: "/apps" },
  openGraph: {
    title: "iPhone and Web App Development | LoRicco & Co.",
    description,
    url: "/apps",
    type: "website",
    siteName: "LoRicco & Co.",
    locale: "en_US",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
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
      <Dateline />
      <Navbar />
      <main id="main-content" className="relative overflow-x-clip">
        <Studio />
      </main>
      <Footer />
    </>
  );
}
