import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { FloatingElements } from "@/components/floating-elements"

import { AgencyHero } from "@/components/agency-hero"
import { AgencyServices } from "@/components/agency-services"
import { AgencyProjects } from "@/components/agency-projects"
import { AgencyWhyUs } from "@/components/agency-why-us"
import { AgencyProcess } from "@/components/agency-process"
import { AgencyCTA } from "@/components/agency-cta"

export default function HomePage() {
  return (
    <main className="relative bg-white dark:bg-[#020512] min-h-screen text-slate-900 dark:text-white selection:bg-emerald-500/30 overflow-hidden transition-colors duration-500">
      <Navigation />
      <FloatingElements />
      <AgencyHero />
      <AgencyServices />
      <AgencyProjects />
      <AgencyWhyUs />
      <AgencyProcess />
      <AgencyCTA />
      <ContactSection />
      <Footer />
    </main>
  )
}
