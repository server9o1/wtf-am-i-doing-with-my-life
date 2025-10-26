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
        <div className="mb-6 sm:mb-8 inline-block">
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-accent animate-glow-pulse" />
            <img
              src={profileImage}
              alt="Ahsan Mohammed"
              className="relative w-full h-full rounded-full object-cover border-4 border-primary shadow-glow-strong transition-all duration-500 hover:scale-105 hover:border-primary/80 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            />
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-serif font-bold mb-4 animate-fade-in text-white [text-shadow:_2px_2px_8px_rgb(0_0_0_/_60%)]">
          Ahsan Mohammed
        </h1>
        
        <p className="text-lg sm:text-xl md:text-3xl text-white/90 mb-12 animate-fade-in [animation-delay:200ms] [text-shadow:_1px_1px_4px_rgb(0_0_0_/_50%)]">
          Night Owl Creative & Digital Artist
        </p>

        <button
          onClick={handleReveal}
          className="group relative px-8 sm:px-12 md:px-20 py-3 sm:py-4 md:py-8 text-base sm:text-xl md:text-3xl font-semibold rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-primary transition-all duration-500 animate-fade-in [animation-delay:400ms] hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
        >
          <span className="flex items-center gap-2">
            Explore Portfolio
            <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 group-hover:translate-y-1 transition-transform" />
          </span>
        </button>

        <div className="mt-20 animate-bounce">
          <ChevronDown className="w-10 h-10 text-primary mx-auto" />
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
