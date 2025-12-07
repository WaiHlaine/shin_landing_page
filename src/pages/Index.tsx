import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GlobalPresenceSection from "@/components/GlobalPresenceSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <GlobalPresenceSection />
      <ServicesSection />
      <FeaturesSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
