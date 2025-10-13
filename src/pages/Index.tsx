import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Benefits />
      <Process />
      <Testimonials />
      <Services />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
