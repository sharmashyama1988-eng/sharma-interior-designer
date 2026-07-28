import HeroSection from '@/components/HeroSection';
import HeritageAbout from '@/components/HeritageAbout';
import ServicesSection from '@/components/ServicesSection';
import FurnitureCatalog from '@/components/FurnitureCatalog';
import InteractiveCustomizer from '@/components/InteractiveCustomizer';
import MaterialCraftsmanship from '@/components/MaterialCraftsmanship';
import CostEstimator from '@/components/CostEstimator';
import ProjectPortfolio from '@/components/ProjectPortfolio';
import VirtualShowroom from '@/components/VirtualShowroom';
import ProcessTimeline from '@/components/ProcessTimeline';
import ArtisansSpotlight from '@/components/ArtisansSpotlight';
import TestimonialsSection from '@/components/TestimonialsSection';
import JournalSection from '@/components/JournalSection';
import AwardsPress from '@/components/AwardsPress';
import FaqSection from '@/components/FaqSection';
import ContactInquiry from '@/components/ContactInquiry';

export default function Home() {
  return (
    <>
      <HeroSection />
      <HeritageAbout />
      <ServicesSection />
      <FurnitureCatalog />
      <InteractiveCustomizer />
      <MaterialCraftsmanship />
      <CostEstimator />
      <ProjectPortfolio />
      <VirtualShowroom />
      <ProcessTimeline />
      <ArtisansSpotlight />
      <TestimonialsSection />
      <JournalSection />
      <AwardsPress />
      <FaqSection />
      <ContactInquiry />
    </>
  );
}
