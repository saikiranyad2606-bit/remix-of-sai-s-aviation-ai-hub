import AnimatedSection from "./AnimatedSection";

const categories = [
  {
    title: "Programming & Data",
    skills: ["Python", "SQL", "FastAPI", "Machine Learning", "Power BI"],
  },
  {
    title: "Aviation Domain",
    skills: ["AMAN Systems", "ADS-B Data", "ICAO Wake Turbulence", "Runway Capacity Modeling"],
  },
  {
    title: "AI & Emerging Tech",
    skills: ["LLMs", "Prompt Engineering", "Agentic AI Workflows"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "Postman", "VS Code", "n8n", "Replit"],
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

        <div className="grid sm:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
            <AnimatedSection key={cat.title} delay={0.15 + i * 0.1}>
              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="font-mono text-sm font-semibold text-primary mb-4 tracking-wide">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-secondary-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
