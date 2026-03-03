import { Mail, Linkedin, Github } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      {/* Floating translucent layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/3 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/3 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/2 blur-[100px]" />
      </div>

      <div className="container px-4 relative z-10">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-2">Contact</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-muted-foreground mb-10">
              Open to remote and international internship opportunities in AI, Aviation, and Analytics.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:saikiranyad2606@gmail.com"
                className="btn-3d flex items-center gap-3 px-6 py-3 rounded-xl border border-primary bg-primary/10 text-primary hover:bg-primary/20 transition-all font-mono text-sm w-full sm:w-auto justify-center"
              >
                <Mail size={18} /> saikiranyad2606@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/sai-kiran-jallela-6262503b4/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-3d flex items-center gap-3 px-6 py-3 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all font-mono text-sm w-full sm:w-auto justify-center"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
              <a
                href="https://github.com/saikiranyad2606-bit"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-3d flex items-center gap-3 px-6 py-3 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all font-mono text-sm w-full sm:w-auto justify-center"
              >
                <Github size={18} /> GitHub
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
