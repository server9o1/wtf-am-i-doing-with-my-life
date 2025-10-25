import { Calendar, Award } from "lucide-react";

const experiences = [
  {
    skill: "Microsoft Office Suite",
    tools: "Word, Excel, PowerPoint",
    duration: "8 years",
    description: "Mastered document creation, data analysis, and professional presentations",
  },
  {
    skill: "Adobe Premiere Pro",
    tools: "Video Editing",
    duration: "6 years",
    description: "Professional video editing including 50+ AMV edits and client projects",
  },
  {
    skill: "Adobe Photoshop CC",
    tools: "Photo Editing",
    duration: "3 years",
    description: "Advanced photo manipulation and design for diverse client needs",
  },
  {
    skill: "Adobe After Effects",
    tools: "Motion Graphics",
    duration: "7 months",
    description: "Creating dynamic motion graphics and visual effects",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-gradient-primary">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-serif font-bold text-center mb-16 text-foreground">
          My <span className="text-primary">Journey</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-secondary/30 border border-primary/20 rounded-2xl p-8 mb-12 text-center">
            <Award className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-serif font-bold mb-4 text-foreground">
              Self-Taught Mastery
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Every skill I possess has been acquired through dedication, practice, and self-learning. 
              I believe in continuous improvement and am always willing to seek help when facing new challenges.
            </p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={exp.skill}
                className="relative bg-card border border-border rounded-2xl p-8 hover:border-primary transition-all duration-300 hover:shadow-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-primary" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-2xl font-serif font-bold text-foreground">
                        {exp.skill}
                      </h3>
                      <span className="text-primary font-bold text-lg whitespace-nowrap ml-4">
                        {exp.duration}
                      </span>
                    </div>
                    
                    <p className="text-primary/80 font-semibold mb-3">{exp.tools}</p>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
