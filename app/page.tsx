import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BusinessBridge from "./components/BusinessBridge";
import ThailandFocus from "./components/ThailandFocus";
import ConsultingApproach from "./components/ConsultingApproach";
import TeamPreview from "./components/TeamPreview";
import Cases from "./components/Cases";
import Testimonials from "./components/Testimonials";
import Process from "./components/Process";
import LatestInsights from "./components/LatestInsights";
import FAQ from "./components/FAQ";
import HomeCTA from "./components/HomeCTA";
import HomeShareCTA from "./components/HomeShareCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white">
        <Hero />
        <BusinessBridge />
        <ThailandFocus />
        <ConsultingApproach />
        <TeamPreview />
        <Cases />
        <Testimonials />
        <Process />
        <LatestInsights />
        <FAQ />
        <HomeShareCTA />
        <HomeCTA />
        <Footer />
      </main>
    </>
  );
}
