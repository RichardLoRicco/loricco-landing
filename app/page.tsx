import Dateline from "./components/Dateline";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Work from "./components/Work";
import Process from "./components/Process";
import Studio from "./components/Studio";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
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
      <ScrollProgress />
      <main id="main-content" className="relative overflow-x-hidden">
        <Hero />
        <Services />
        <Work />
        <Process />
        <Studio />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
