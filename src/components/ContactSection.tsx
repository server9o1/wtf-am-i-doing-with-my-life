import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Instagram, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import ParticlesBackground from "@/components/ParticlesBackground";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-primary relative overflow-hidden">
      <ParticlesBackground />
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl md:text-6xl font-serif font-bold text-center mb-16 text-foreground">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Get in Touch Button Section */}
          <div className="flex flex-col items-center space-y-8">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12 py-8 text-xl rounded-2xl shadow-glow hover:shadow-glow-strong transition-all duration-500 hover:scale-105"
                >
                  Get in Touch
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[340px] p-0 border-2 border-primary/50 bg-card shadow-glow-strong backdrop-blur-sm">
                <div className="flex flex-col gap-3 p-4">
                  <a
                    href="mailto:ahsanmohammed3343@gmail.com"
                    className="flex items-center gap-4 p-4 bg-background/50 border border-border rounded-xl hover:border-primary hover:bg-primary/10 transition-all duration-300 group/link"
                  >
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover/link:bg-primary/30 transition-colors">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-xs text-muted-foreground">Email</p>
                      <p className="text-foreground font-semibold text-sm break-all">ahsanmohammed3343@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="https://www.instagram.com/aa_xsan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-background/50 border border-border rounded-xl hover:border-primary hover:bg-primary/10 transition-all duration-300 group/link"
                  >
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover/link:bg-primary/30 transition-colors">
                      <Instagram className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-xs text-muted-foreground">Instagram</p>
                      <p className="text-foreground font-semibold text-sm">@aa_xsan</p>
                    </div>
                  </a>
                </div>
              </PopoverContent>
            </Popover>

            <p className="text-muted-foreground text-center max-w-2xl">
              Whether you need video editing, photo manipulation, or document creation, 
              I'm here to bring your vision to life. Click the button to see my contact options.
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 space-y-6 max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold mb-4 text-foreground">
              Send a Message
            </h3>
            
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                Name
              </label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-background border-border focus:border-primary"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-background border-border focus:border-primary"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                Message
              </label>
              <Textarea
                id="message"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-background border-border focus:border-primary min-h-[150px]"
                placeholder="Tell me about your project..."
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 rounded-xl shadow-glow hover:shadow-glow-strong transition-all duration-300 group"
            >
              <span className="flex items-center justify-center gap-2">
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
