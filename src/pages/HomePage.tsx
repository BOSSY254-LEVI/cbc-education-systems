import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import QuickAccessSection from '@/components/landing/QuickAccessSection';
import StatsSection from '@/components/landing/StatsSection';
import FoundationSection from '@/components/landing/FoundationSection';
import WorkflowSection from '@/components/landing/WorkflowSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <QuickAccessSection />
      <StatsSection />
      <FoundationSection />
      <WorkflowSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
