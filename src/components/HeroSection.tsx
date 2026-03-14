import { lazy, Suspense } from "react";
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";

const HeroGlobe = lazy(() => import("./3d/HeroGlobe"));

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Suspense fallback={null}>
        <HeroGlobe />
      </Suspense>

      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background z-[1]" />

      <div className="relative z-10 container text-center px-4" style={{ perspective: "1000px" }}>
        <p
          className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s", transform: "translateZ(20px)" }}
        >
          AI · Aviation · Analytics
        </p>

        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s", transform: "translateZ(60px)" }}
        >
          Sai Kiran
          <br />
          <span className="text-gradient">Jallela</span>
        </h1>

        <p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.6s", transform: "translateZ(30px)" }}
        >
          AI & Aviation-focused AIML undergraduate — building AI-powered systems for smarter skies,
          optimizing runway capacity, predicting delays, and transforming airport efficiency.
        </p>

        <p
          className="text-xs font-mono text-primary/70 mb-8 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.7s" }}
        >
          Hyderabad, India · Seeking Aviation AI / Data Analytics Internships
        </p>

        <div
          className="flex items-center justify-center gap-4 mb-12 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          <a
            href="https://github.com/saikiranyad2606-bit"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all hover:glow-border hover:scale-110 active:scale-95"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/sai-kiran-jallela-6262503b4/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all hover:scale-110 active:scale-95"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:saikiranyad2606@gmail.com"
            className="p-3 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all hover:scale-110 active:scale-95"
          >
            <Mail size={20} />
          </a>
          <a
            href="tel:+919392989907"
            className="p-3 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all hover:scale-110 active:scale-95"
          >
            <Phone size={20} />
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
