import { Github, ExternalLink } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import Tilt3DCard from "./3d/Tilt3DCard";

const projects = [
  {
    title: "AeroPredict",
    subtitle: "AI-Powered Arrival Management Engine",
    bullets: [
      "Designed a real-time aircraft sequencing engine using RTA-based slot allocation, ICAO wake turbulence separation standards, and event-driven state machine architecture.",
      "Implemented ETA prediction and delay forecasting logic with fuel burn impact modeling across aircraft weight classes.",
      "Simulated 50+ arrival traffic scenarios and evaluated runway utilization, arrival pressure, and sequencing stability under peak-hour operational conditions.",
    ],
    focus: "AI-driven runway sequencing and arrival flow optimization.",
    tech: ["Python", "FastAPI", "AsyncIO", "ML Algorithms"],
    github: "https://github.com/saikiranyad2606-bit/AERO-PREDICT",
  },
  {
    title: "AeroFlowSync",
    subtitle: "Aviation Operational Control & Automation Layer",
    bullets: [
      "Built a workflow orchestration system integrating real-time ATC-style Telegram monitoring dashboard with automated Google Sheets operational logging — reducing manual tracking effort.",
      "Implemented 30-minute traffic pressure forecasting and congestion detection using arrival rate and holding ratio metrics.",
      "Designed slot-based sequencing with emergency flight prioritization, optimizing runway utilization through dynamic sequencing logic.",
    ],
    focus: "Aviation workflow automation and operational monitoring.",
    tech: ["n8n", "JavaScript", "Telegram Bot API", "Google Sheets API"],
    github: "https://github.com/saikiranyad2606-bit/AERO-FLOW-SYNC-",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="container px-4 relative z-10">
        <AnimatedSection>
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-2">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground text-sm mb-12 font-mono">
            Focused on building scalable, modular aviation decision-support systems inspired by real-world AMAN architectures.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <AnimatedSection key={p.title} delay={0.2 + i * 0.15}>
              <Tilt3DCard className="h-full rounded-xl" intensity={10}>
                <div className="h-full p-8 rounded-xl border border-border bg-card/80 backdrop-blur-sm flex flex-col relative overflow-hidden group">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

                  <div className="flex items-start justify-between mb-4 relative z-10" style={{ transform: "translateZ(30px)" }}>
                    <div>
                      <h3 className="text-xl font-bold text-gradient">{p.title}</h3>
                      <p className="text-sm text-muted-foreground font-mono mt-1">{p.subtitle}</p>
                    </div>
                  </div>

                  <ul className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1 relative z-10 space-y-3" style={{ transform: "translateZ(20px)" }}>
                    {p.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-primary mt-1 shrink-0">▸</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-xs font-mono text-primary mb-4 relative z-10" style={{ transform: "translateZ(25px)" }}>
                    Focus: {p.focus}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6 relative z-10" style={{ transform: "translateZ(40px)" }}>
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs font-mono rounded-full border border-primary/20 bg-primary/5 text-primary transition-all duration-300 hover:bg-primary/15 hover:scale-110 hover:shadow-[0_0_15px_-3px_hsl(var(--primary)/0.4)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 relative z-10" style={{ transform: "translateZ(35px)" }}>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono rounded-lg border border-border bg-card/50 hover:border-primary/50 hover:bg-primary/10 transition-all active:scale-95"
                    >
                      <Github size={14} />
                      View Code
                    </a>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono rounded-lg border border-primary/30 bg-primary/5 hover:bg-primary/15 text-primary transition-all active:scale-95"
                    >
                      <ExternalLink size={14} />
                      System Architecture
                    </a>
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

export default ProjectsSection;
