import { Plane, Brain, BarChart3 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import FlipCard from "./3d/FlipCard";

const pillars = [
  {
    icon: Brain,
    label: "Artificial Intelligence",
    desc: "ML models, LLMs, and agentic AI workflows",
    backDesc: "Building intelligent systems using cutting-edge machine learning, large language models, and autonomous AI agent pipelines.",
  },
  {
    icon: Plane,
    label: "Aviation Systems",
    desc: "AMAN, ADS-B, wake turbulence, runway optimization",
    backDesc: "Designing real-time arrival management, surveillance data processing, and capacity optimization for safer airports.",
  },
  {
    icon: BarChart3,
    label: "Data Analytics",
    desc: "Power BI dashboards, SQL, data-driven insights",
    backDesc: "Transforming raw aviation and operational data into actionable intelligence through interactive dashboards and analysis.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container px-4 relative z-10">
        <AnimatedSection>
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-2">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Where <span className="text-gradient">AI meets Aviation</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-muted-foreground text-lg max-w-3xl mb-12 leading-relaxed">
            I'm an AI & Machine Learning undergraduate at Vignan Institute of Technology and Science (Class of 2027),
            passionate about applying artificial intelligence to solve real-world aviation challenges. My work focuses on
            optimizing runway capacity, predicting flight delays, and improving airport operational efficiency through
            data-driven AI systems.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <AnimatedSection key={p.label} delay={0.3 + i * 0.15}>
              <FlipCard
                className="h-48"
                front={
                  <div className="h-full p-6 rounded-xl border border-border bg-card/80 backdrop-blur-sm card-hover flex flex-col justify-center items-start floating-card" style={{ animationDelay: `${i * 0.5}s` }}>
                    <p.icon size={28} className="text-primary mb-4" />
                    <h3 className="font-semibold text-lg mb-2">{p.label}</h3>
                    <p className="text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                }
                back={
                  <div className="h-full p-6 rounded-xl border border-primary/30 bg-primary/10 backdrop-blur-sm flex flex-col justify-center">
                    <p.icon size={28} className="text-primary mb-4" />
                    <p className="text-sm text-foreground leading-relaxed">{p.backDesc}</p>
                  </div>
                }
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
