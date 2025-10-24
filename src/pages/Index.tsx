import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import QuickBenefits from "@/components/QuickBenefits";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import ClientLogos from "@/components/ClientLogos";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ExitIntentPopup from "@/components/ExitIntentPopup";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <SocialProof />
      <QuickBenefits />
      <Benefits />
      <Process />
      <ClientLogos />
      <Pricing />
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
