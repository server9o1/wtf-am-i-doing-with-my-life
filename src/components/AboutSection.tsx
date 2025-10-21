import { GraduationCap, Moon } from "lucide-react";

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
                <Moon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-foreground">Night Owl Creator</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a night owl who mostly works on projects during midnights in silence. 
                There's something magical about the quiet hours where creativity flows freely 
                and focus comes naturally.
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
              Self-taught in all my creative skills, I've dedicated years to mastering video editing, 
              photo manipulation, and productivity tools. When challenges arise, I'm not afraid to seek 
              guidance and learn from others, always striving to deliver professional results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
