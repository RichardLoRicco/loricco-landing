import Link from "next/link";
import Dateline from "./components/Dateline";

export const metadata = {
  title: "Page not found | LoRicco & Co",
  robots: { index: false },
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <>
      <Dateline />
      <header className="nav-shell is-scrolled">
        <div className="nav-inner">
          <Link href="/" className="nav-mark" aria-label="LoRicco & Co., home">
            LoRicco <em>&amp;</em> Co.
          </Link>
        </div>
      </header>
      <main
        className="page-gutter flex min-h-[70vh] flex-col items-start justify-center"
        style={{ paddingTop: "calc(var(--nav-h) + 4rem)", paddingBottom: "4rem" }}
      >
        <p className="section-num">404</p>
        <h1 className="mt-4" style={{ fontSize: "clamp(3rem, 10vw, 6rem)" }}>
          Page <span className="serif-italic">not found</span>.
        </h1>
        <p className="body-serif pretty mt-6 max-w-xl" style={{ fontSize: "1.15rem" }}>
          This page doesn&apos;t exist. The link may be mistyped, or the page may
          have moved.
        </p>
        <Link href="/" className="btn btn-primary mt-10">
          &larr; Back to the homepage
        </Link>
      </main>
    </>
  );
}
