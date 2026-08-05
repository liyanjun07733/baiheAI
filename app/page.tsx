import AISolutions from "./components/AISolutions";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Process from "./components/Process";
import Cases from "./components/Cases";
import Why from "./components/Why";
import Services from "./components/Services";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        <Hero />
        <Services />
        <AISolutions />
        <Why />
        <Cases />
        <Testimonials />
        <Process />
        <Contact />
        <Footer />
      </main>
    </>
  );
}