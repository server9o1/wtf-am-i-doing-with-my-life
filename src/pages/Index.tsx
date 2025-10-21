import { useState } from "react";
import LandingHero from "@/components/LandingHero";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const [showPortfolio, setShowPortfolio] = useState(false);

  return (
    <div className="min-h-screen">
      {!showPortfolio ? (
        <LandingHero onReveal={() => setShowPortfolio(true)} />
      ) : (
        <main className="animate-slide-in-diagonal">
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <PortfolioSection />
          <ContactSection />
          
          <footer className="bg-background border-t border-border py-8">
            <div className="container mx-auto px-6 text-center">
              <p className="text-muted-foreground">
                © 2025 Ahsan Mohammed. All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Night owl creative • Self-taught expert • Digital artist
              </p>
            </div>
          </footer>
        </main>
      )}
    </div>
  );
};

export default Index;
