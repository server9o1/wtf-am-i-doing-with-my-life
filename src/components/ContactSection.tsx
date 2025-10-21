import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Instagram, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
    <section id="contact" className="py-24 bg-gradient-primary">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-serif font-bold text-center mb-16 text-foreground">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-serif font-bold mb-6 text-foreground">
                Let's Work Together
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you need video editing, photo manipulation, or document creation, 
                I'm here to bring your vision to life. Reach out through any of these channels.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="mailto:ahsanmohammed3343@gmail.com"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary hover:shadow-glow transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-semibold">ahsanmohammed3343@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/aa_xsan/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary hover:shadow-glow transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Instagram className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Instagram</p>
                  <p className="text-foreground font-semibold">@aa_xsan</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 space-y-6">
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
