import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-void text-text-high font-sans selection:bg-indigo-500/30">
      <Header />
      <main>
        <HeroSection />
        <ExpertiseSection />
        <ProjectsSection />
        <ApproachSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
