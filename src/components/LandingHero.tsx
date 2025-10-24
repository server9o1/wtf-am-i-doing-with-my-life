import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import profileImage from "@/assets/profile.jpg";
import heroBg from "@/assets/hero-bg.jpg";

interface LandingHeroProps {
  onReveal: () => void;
}

const LandingHero = ({ onReveal }: LandingHeroProps) => {
  const [isRevealing, setIsRevealing] = useState(false);

  const handleReveal = () => {
    setIsRevealing(true);
    setTimeout(() => {
      onReveal();
    }, 1000);
  };

  return (
    <section
      className={`min-h-screen relative flex items-center justify-center overflow-hidden transition-all duration-1000 ${
        isRevealing ? "clip-diagonal" : ""
      }`}
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-secondary/50" />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="mb-8 inline-block">
          <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-accent animate-glow-pulse" />
            <img
              src={profileImage}
              alt="Ahsan Mohammed"
              className="relative w-full h-full rounded-full object-cover border-4 md:border-4 border-primary shadow-glow-strong transition-all duration-500 hover:scale-105 hover:border-primary/80 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            />
          </div>
        </div>

        <h1 className="text-8xl md:text-8xl font-serif font-bold mb-8 md:mb-6 animate-fade-in">
          <span className="block text-foreground">Ahsan</span>
          <span className="block text-primary">Mohammed</span>
        </h1>

        <p className="text-2xl md:text-2xl text-muted-foreground mb-16 md:mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Night owl editor & digital creator
        </p>

        <Button
          onClick={handleReveal}
          size="lg"
          className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-2xl md:text-lg px-14 py-8 md:px-10 md:py-6 rounded-full shadow-glow transition-all duration-300 hover:shadow-glow-strong hover:scale-105 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <span className="relative z-10 flex items-center gap-2">
            Explore Portfolio
            <ChevronDown className="w-7 h-7 md:w-5 md:h-5 group-hover:translate-y-1 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Button>

        <div className="mt-20 md:mt-16 animate-bounce">
          <ChevronDown className="w-10 h-10 md:w-8 md:h-8 text-primary mx-auto" />
        </div>
      </div>

      <style>{`
        @keyframes clip-diagonal {
          from {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
          to {
            clip-path: polygon(0 0, 100% 0, 0 100%, 0 100%);
          }
        }
        .clip-diagonal {
          animation: clip-diagonal 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default LandingHero;
