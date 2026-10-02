import Navbar from "./components/Navbar";
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
      <Navbar />
      <main id="main-content" className="relative">
        {/*
          The margin: a double rule down the left edge of the content column,
          with each section's number hanging outside it (see Clause). Only
          where the page margin is wide enough to hold the numbers.
        */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-[calc(50%-36rem-1.25rem)] z-10 hidden w-[4px] border-x border-del/35 xl:block"
        />
        <Hero />
        <Services />
        <Work />
        <Process />
        <About />
        <Studio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
