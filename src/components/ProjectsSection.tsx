import { Github, ExternalLink } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import Tilt3DCard from "./3d/Tilt3DCard";

const projects = [
  {
    title: "AeroPredict",
    subtitle: "AI-Powered Arrival Management System (AMAN)",
    description:
      "Real-time aviation Arrival Management System simulating airport approach operations.\n\nImplements dynamic aircraft sequencing using Required Time of Arrival (RTA), Estimated Time to Threshold (ETT), and ICAO wake turbulence separation standards.\n\nIncludes delay absorption strategies such as speed control, vectoring, and holding pattern simulation to maintain runway capacity during peak traffic.\n\nFeatures an event-driven aircraft lifecycle model (Approach → Landing → Rollout → Landed) with automated ATC voice instructions.\n\nBackend built using FastAPI with asynchronous simulation loop for real-time arrival flow optimization.",
    focus: "AI-driven runway sequencing and arrival flow optimization.",
    tech: ["Python", "FastAPI", "AsyncIO", "pyttsx3", "ML Algorithms"],
    github: "https://github.com/saikiranyad2606-bit",
  },
  {
    title: "AeroFlowSync",
    subtitle: "Aviation Workflow Automation System",
    description:
      "Aviation operations workflow automation platform designed to support AMAN-style arrival monitoring.\n\nProcesses aircraft arrival data to simulate slot-based sequencing, calculate holding delays, and estimate fuel burn impact.\n\nIncludes automated congestion detection, real-time operational logging, and Telegram-based ATC dashboard for monitoring arrival flow.\n\nIntegrates Google Sheets for persistent flight data storage and operational analytics.",
    focus: "Aviation workflow automation and operational monitoring.",
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
              <Tilt3DCard className="h-full rounded-xl" intensity={10}>
                <div className="h-full p-8 rounded-xl border border-border bg-card/80 backdrop-blur-sm flex flex-col relative overflow-hidden group">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

                  <div className="flex items-start justify-between mb-4 relative z-10" style={{ transform: "translateZ(30px)" }}>
                    <div>
                      <h3 className="text-xl font-bold text-gradient">{p.title}</h3>
                      <p className="text-sm text-muted-foreground font-mono mt-1">{p.subtitle}</p>
                    </div>
                  </div>

                  <div className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1 relative z-10 space-y-2" style={{ transform: "translateZ(20px)" }}>
                    {p.description.split("\n\n").map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>

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
