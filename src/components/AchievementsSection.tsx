import { Award, Trophy, GraduationCap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const items = [
  {
    icon: GraduationCap,
    title: "Introduction to Machine Learning",
    org: "NPTEL · IIT Madras",
    detail: "Elite certification — 2025",
    type: "cert" as const,
  },
  {
    icon: Trophy,
    title: "Top 4 / 657 Teams",
    org: "Hack with AI · KL University",
    detail: "Ayushman Bharat Fraud Detection — AI-powered solution",
    type: "hack" as const,
  },
  {
    icon: Award,
    title: "Top 50 / 300 Teams",
    org: "Hack Vibe · Vignan Institute",
    detail: "AI Interior Designing — Generative AI application",
    type: "hack" as const,
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

        <div className="space-y-4">
          {items.map((item, i) => (
            <AnimatedSection key={item.title} delay={0.2 + i * 0.12}>
              <div className="flex items-start gap-5 p-6 rounded-xl border border-border bg-card card-hover">
                <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                  <item.icon size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-primary font-mono">{item.org}</p>
                  <p className="text-sm text-muted-foreground mt-1">{item.detail}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
