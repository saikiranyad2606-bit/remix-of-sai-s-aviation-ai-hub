import { Radar, TowerControl, BarChart3, Plane } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const focusAreas = [
  { icon: TowerControl, label: "Arrival Management Systems (AMAN)" },
  { icon: Plane, label: "Air Traffic Flow Optimization" },
  { icon: Radar, label: "Runway Capacity Modeling" },
  { icon: BarChart3, label: "Aviation Operational Analytics" },
];

const AviationFocusSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container px-4 relative z-10">
        <AnimatedSection>
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-2">Domain Expertise</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Aviation Systems <span className="text-gradient">Focus</span>
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {focusAreas.map((area, i) => (
            <AnimatedSection key={area.label} delay={0.2 + i * 0.1}>
              <div className="p-6 rounded-xl border border-border bg-card/80 backdrop-blur-sm text-center group hover:border-primary/40 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <area.icon size={24} className="text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">{area.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AviationFocusSection;
