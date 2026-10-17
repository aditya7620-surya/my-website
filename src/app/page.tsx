import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import TechStack from "@/components/TechStack";
import ProcessTimeline from "@/components/ProcessTimeline";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import FinalCTA from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <ProjectsShowcase />
      <TechStack />
      <ProcessTimeline />
      <WhyWorkWithMe />
      <Testimonials />
      <ContactSection />
      <FinalCTA />
    </>
  );
}
