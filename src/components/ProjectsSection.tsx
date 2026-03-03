import { ExternalLink, Github } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    title: "AeroPredict",
    subtitle: "AI-Powered Arrival Management System (AMAN)",
    description:
      "Real-time aircraft sequencing system with RTA slot allocation, wake turbulence separation, holding pattern simulation, and ATC voice instructions for optimized runway operations.",
    tech: ["Python", "FastAPI", "AsyncIO", "pyttsx3", "ML Algorithms"],
    github: "https://github.com/saikiranyad2606-bit",
  },
  {
    title: "AeroFlowSync",
    subtitle: "Aviation Workflow Automation System",
    description:
      "Slot-based AMAN simulation with fuel burn modeling, Telegram ATC dashboard, Google Sheets logging, and congestion detection for streamlined aviation workflows.",
    tech: ["n8n", "JavaScript", "Telegram Bot API", "Google Sheets API"],
    github: "https://github.com/saikiranyad2606-bit",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="container px-4 relative z-10">
        <AnimatedSection>
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-2">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Featured <span className="text-gradient">Work</span>
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <AnimatedSection key={p.title} delay={0.2 + i * 0.15}>
              <div className="h-full p-8 rounded-xl border border-border bg-card card-hover flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gradient">{p.title}</h3>
                    <p className="text-sm text-muted-foreground font-mono mt-1">{p.subtitle}</p>
                  </div>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg border border-border hover:border-primary/50 transition-colors"
                  >
                    <Github size={16} />
                  </a>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-mono rounded-full border border-primary/20 bg-primary/5 text-primary"
                    >
                      {t}
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

export default ProjectsSection;
