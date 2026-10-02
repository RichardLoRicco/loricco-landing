import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Blueprint from "./components/Blueprint";

export const metadata: Metadata = {
  title: "Page not found | LoRicco & Co.",
  robots: { index: false },
};

/* The site is one page, so every wrong address gets the same short answer. */
export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="relative overflow-hidden px-6 pt-40 pb-28 lg:pt-48 lg:pb-36">
        <Blueprint fade />
        <div className="relative mx-auto max-w-6xl">
          <p className="kicker text-ins">LCO / Not found / 404</p>
          <p
            aria-hidden="true"
            className="ghost-ins mt-6 select-none font-display text-[clamp(7rem,24vw,16rem)] leading-[0.85] font-bold"
          >
            404
          </p>
          <h1 className="font-display mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-body-muted">
            There&apos;s nothing at this address. The home page has everything on the site.
          </p>
          <Link
            href="/"
            className="btn mt-9 inline-flex items-center gap-2 bg-ins px-6 py-3.5 text-sm font-semibold text-white"
            style={{ ["--btn-fill" as string]: "var(--color-foreground)" }}
          >
            Back to the home page <span className="btn-arrow">→</span>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
