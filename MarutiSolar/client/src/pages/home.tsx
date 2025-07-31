import HeroSection from "@/components/sections/hero-section";
import StatsSection from "@/components/sections/stats-section";
import ServicesSection from "@/components/sections/services-section";
import AboutSection from "@/components/sections/about-section";
import ProjectsSection from "@/components/sections/projects-section";
import ReviewsSection from "@/components/sections/reviews-section";
import FAQSection from "@/components/sections/faq-section";
import ContactSection from "@/components/sections/contact-section";
import SolarCalculator from "@/components/ui/solar-calculator";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <AboutSection />
      <ProjectsSection />
      <SolarCalculator />
      <ReviewsSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}
