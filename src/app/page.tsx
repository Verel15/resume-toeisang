export const dynamic = 'force-dynamic';

import HeroSection from "@/components/sections/HeroSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import SystemExperienceSection from "@/components/sections/SystemExperienceSection";
import TechStackSection from "@/components/sections/TechStackSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ArchitectureSection from "@/components/sections/ArchitectureSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ExpertiseSection />
      <SystemExperienceSection />
      <TechStackSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <ArchitectureSection />
      <ContactSection />
    </>
  );
}
