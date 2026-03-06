import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AviationFocusSection from "@/components/AviationFocusSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const AnimatedBackground = lazy(() => import("@/components/3d/AnimatedBackground"));
const CustomCursor = lazy(() => import("@/components/3d/CustomCursor"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Suspense fallback={null}>
        <AnimatedBackground />
      </Suspense>
      <Suspense fallback={null}>
        <CustomCursor />
      </Suspense>
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <AviationFocusSection />
        <ProjectsSection />
        <SkillsSection />
        <AchievementsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
