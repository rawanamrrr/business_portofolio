import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ProjectsSection } from "@/components/projects-section"
import { TeamSection } from "@/components/team-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { FloatingElements } from "@/components/floating-elements"

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <Navigation />
      <FloatingElements />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TeamSection />
      <ContactSection />
    </main>
  )
}
