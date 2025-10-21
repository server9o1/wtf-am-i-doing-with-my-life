import { Video, Image, FileText, Film } from "lucide-react";

const skills = [
  {
    icon: Video,
    name: "Video Editing",
    tool: "Adobe Premiere Pro",
    level: "Expert",
    years: "6 years",
  },
  {
    icon: Image,
    name: "Photo Editing",
    tool: "Adobe Photoshop CC",
    level: "Advanced",
    years: "3 years",
  },
  {
    icon: Film,
    name: "Motion Graphics",
    tool: "After Effects",
    level: "Proficient",
    years: "7 months",
  },
  {
    icon: FileText,
    name: "Office Suite",
    tool: "Word, Excel, PowerPoint",
    level: "Expert",
    years: "8 years",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-serif font-bold text-center mb-16 text-foreground">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group bg-card border border-border rounded-2xl p-8 hover:border-primary transition-all duration-300 hover:shadow-glow hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 bg-gradient-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <skill.icon className="w-10 h-10 text-primary-foreground" />
              </div>

              <h3 className="text-2xl font-serif font-bold mb-2 text-foreground">
                {skill.name}
              </h3>
              
              <p className="text-primary font-semibold mb-2">{skill.tool}</p>
              
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>{skill.level}</span>
                <span className="font-semibold">{skill.years}</span>
              </div>

              <div className="mt-4 h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-accent transition-all duration-1000"
                  style={{ 
                    width: skill.level === "Expert" ? "100%" : skill.level === "Advanced" ? "85%" : "70%"
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
