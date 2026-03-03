import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 container text-center px-4">
        <p
          className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          AI · Aviation · Analytics
        </p>

        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Sai Kiran
          <br />
          <span className="text-gradient">Jallela</span>
        </h1>

        <p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          Building AI-powered systems for smarter skies — optimizing runway capacity,
          predicting delays, and transforming airport efficiency.
        </p>

        <div
          className="flex items-center justify-center gap-4 mb-12 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          <a
            href="https://github.com/saikiranyad2606-bit"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-border bg-card hover:border-primary/50 transition-all hover:glow-border"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/sai-kiran-jallela-6262503b4/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-border bg-card hover:border-primary/50 transition-all"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:saikiranyad2606@gmail.com"
            className="p-3 rounded-lg border border-border bg-card hover:border-primary/50 transition-all"
          >
            <Mail size={20} />
          </a>
        </div>

        <a
          href="#about"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-mono opacity-0 animate-fade-up"
          style={{ animationDelay: "1s" }}
        >
          Scroll to explore <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
