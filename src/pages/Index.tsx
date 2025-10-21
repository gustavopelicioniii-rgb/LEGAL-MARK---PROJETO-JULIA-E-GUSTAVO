import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ExitIntentPopup from "@/components/ExitIntentPopup";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Benefits />
      <Process />
      <Testimonials />
      <WhyChooseUs />
      <FinalCTA />
      <FAQ />
      <Footer />
      <ExitIntentPopup />
    </main>
  );
};

export default Index;
