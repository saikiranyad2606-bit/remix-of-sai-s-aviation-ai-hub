import { Award, Trophy, GraduationCap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import Tilt3DCard from "./3d/Tilt3DCard";

const certs = [
  {
    icon: GraduationCap,
    title: "Introduction to Machine Learning",
    org: "NPTEL · IIT Madras",
    detail: "Elite Certificate — Jul–Oct 2025",
  },
  {
    icon: GraduationCap,
    title: "Gen AI 101",
    org: "FutureSkills Prime · IT-ITeS SSC Nasscom",
    detail: "Mar 2026",
  },
  {
    icon: GraduationCap,
    title: "Gen AI Tools",
    org: "FutureSkills Prime · IT-ITeS SSC Nasscom",
    detail: "Mar 2026",
  },
];

const achievements = [
  {
    icon: Trophy,
    title: "Top 4 / 657 Participants",
    org: "Hack with AI · KL University",
    detail: "Ayushman Bharat Fraud Detection System — AI-based fraud detection for healthcare scheme · Feb 2026",
  },
  {
    icon: Award,
    title: "Top 50 / 300 Participants",
    org: "Hack Vibe · Vignan Institute of Technology",
    detail: "AI Interior Designing Tool — AI-powered interior design automation · Jul 2025",
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="container px-4 relative z-10">
        <AnimatedSection>
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-2">
            Certifications & Achievements
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Recognition & <span className="text-gradient">Growth</span>
          </h2>
        </AnimatedSection>

        {/* Certifications */}
        <AnimatedSection delay={0.15}>
          <h3 className="font-mono text-sm text-primary mb-4 tracking-wide">Certifications</h3>
        </AnimatedSection>
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {certs.map((item, i) => (
            <AnimatedSection key={item.title} delay={0.2 + i * 0.1}>
              <Tilt3DCard className="h-full rounded-xl" intensity={6}>
                <div className="h-full flex items-start gap-4 p-5 rounded-xl border border-border bg-card/80 backdrop-blur-sm">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{item.title}</h4>
                    <p className="text-xs text-primary font-mono mt-1">{item.org}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.detail}</p>
                  </div>
                </div>
              </Tilt3DCard>
            </AnimatedSection>
          ))}
        </div>

        {/* Achievements */}
        <AnimatedSection delay={0.35}>
          <h3 className="font-mono text-sm text-primary mb-4 tracking-wide">Hackathon Achievements</h3>
        </AnimatedSection>
        <div className="space-y-4">
          {achievements.map((item, i) => (
            <AnimatedSection key={item.title} delay={0.4 + i * 0.12}>
              <Tilt3DCard className="rounded-xl" intensity={5}>
                <div className="flex items-start gap-5 p-6 rounded-xl border border-border bg-card/80 backdrop-blur-sm group">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0 group-hover:animate-spin-slow transition-transform">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">
                      <span className="text-gradient font-bold" style={{ textShadow: "0 0 20px hsl(var(--primary) / 0.3)" }}>
                        {item.title}
                      </span>
                    </h4>
                    <p className="text-sm text-primary font-mono">{item.org}</p>
                    <p className="text-sm text-muted-foreground mt-1">{item.detail}</p>
                  </div>
                </div>
              </Tilt3DCard>
            </AnimatedSection>
          ))}
        </div>

        {/* Additional Info */}
        <AnimatedSection delay={0.6}>
          <div className="mt-12 p-6 rounded-xl border border-border bg-card/60 backdrop-blur-sm">
            <h3 className="font-mono text-sm text-primary mb-3 tracking-wide">Additional</h3>
            <p className="text-sm text-muted-foreground">
              <span className="text-foreground font-medium">Soft Skills:</span> Problem-Solving, Analytical Thinking, Quick Learner, Systems Thinking, Adaptability
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              <span className="text-foreground font-medium">Languages:</span> English, Telugu, Hindi
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AchievementsSection;
