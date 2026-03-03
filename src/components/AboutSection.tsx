import { Plane, Brain, BarChart3 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const pillars = [
  { icon: Brain, label: "Artificial Intelligence", desc: "ML models, LLMs, and agentic AI workflows" },
  { icon: Plane, label: "Aviation Systems", desc: "AMAN, ADS-B, wake turbulence, runway optimization" },
  { icon: BarChart3, label: "Data Analytics", desc: "Power BI dashboards, SQL, data-driven insights" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container px-4">
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
              <div className="p-6 rounded-xl border border-border bg-card card-hover">
                <p.icon size={28} className="text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">{p.label}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
