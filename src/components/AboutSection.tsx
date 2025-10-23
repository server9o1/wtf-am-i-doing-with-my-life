import { GraduationCap, Palette } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-primary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-center mb-16 text-foreground">
            About <span className="text-primary">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-glow transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Palette className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-foreground">Creative Editor</h3>
              <p className="text-muted-foreground leading-relaxed">
                Hi there, I'm a CS student and great at editing videos, photos, and writing documents. 
                I can edit high-resolution videos based on your needs, such as gaming, IRL content, or 
                cooking videos. I also create thumbnails and manipulate photos. I'm great at using AI, 
                but during work, I always try to add a human touch to everything I make.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-glow transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-foreground">Academic Excellence</h3>
              <p className="text-muted-foreground leading-relaxed">
                Recent IGCSE graduate with an A grade. My dedication to learning extends beyond 
                academics into mastering industry-standard creative software through self-teaching 
                and continuous practice.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-secondary/50 border border-primary/20 rounded-2xl p-8 text-center">
            <p className="text-lg text-foreground leading-relaxed">
              I've created a biology book during my junior years, an Excel sheet for my freelance earnings, 
              and some solid PowerPoint presentations. I'm also a digital artist, so I'm pretty good with 
              creative visuals too. I can make websites as well, though I don't work on them much. 
              Maybe we can get in touch, check out my socials!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
