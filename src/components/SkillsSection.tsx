import AnimatedSection from "./AnimatedSection";
import Tilt3DCard from "./3d/Tilt3DCard";

const categories = [
  {
    title: "Programming & Data",
    skills: ["Python (Pandas, NumPy)", "SQL", "Excel", "Data Cleaning & EDA"],
  },
  {
    title: "Machine Learning",
    skills: ["Regression Models", "Train-Test Split", "MAE Evaluation", "Predictive Modeling (ETA & Delay)"],
  },
  {
    title: "Backend & APIs",
    skills: ["FastAPI", "REST APIs", "AsyncIO", "JSON", "Telegram Bot API", "Google Sheets API"],
  },
  {
    title: "Aviation Domain",
    skills: ["AMAN Systems", "RTA Slot Allocation", "ICAO Wake Turbulence", "Runway Capacity Modeling", "ADS-B Data", "Fuel Burn Modeling", "ATC Sequencing Logic"],
  },
  {
    title: "AI & Automation",
    skills: ["LLM Integration", "Prompt Engineering", "Agentic Workflows", "n8n Automation", "AI-Assisted Prototyping"],
  },
  {
    title: "AI Web Development",
    skills: ["Lovable", "Replit", "Antigravity", "Cursor", "AI-Assisted Builders"],
  },
  {
    title: "Data Visualization",
    skills: ["Power BI", "Excel Dashboards"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Replit"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container px-4">
        <AnimatedSection>
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-2">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <AnimatedSection key={cat.title} delay={0.1 + i * 0.08}>
              <Tilt3DCard className="rounded-xl h-full" intensity={8}>
                <div className="p-6 rounded-xl border border-border bg-card/60 backdrop-blur-md glass-card h-full">
                  <h3 className="font-mono text-sm font-semibold text-primary mb-4 tracking-wide">
                    {cat.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((s, si) => (
                      <span
                        key={s}
                        className="skill-bubble px-3 py-1.5 text-sm rounded-lg bg-secondary text-secondary-foreground border border-border/50 hover:border-primary/40 hover:bg-primary/10 hover:text-primary hover:scale-110 hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.3)] transition-all duration-300 cursor-default"
                        style={{
                          animationDelay: `${si * 0.1}s`,
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Tilt3DCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
