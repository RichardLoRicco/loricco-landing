import Navbar from "./components/Navbar";
import MarginIndex from "./components/MarginIndex";
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
      <MarginIndex />
      <main id="main-content">
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
