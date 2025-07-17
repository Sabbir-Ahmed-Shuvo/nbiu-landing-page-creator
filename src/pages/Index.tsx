import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { ProgramsSection } from "@/components/ProgramsSection";
import { AdmissionSection } from "@/components/AdmissionSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <HeroSection />
        
        <section id="about">
          <WhyChooseSection />
        </section>
        
        <section id="programs">
          <ProgramsSection />
        </section>
        
        <section id="admission">
          <AdmissionSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
