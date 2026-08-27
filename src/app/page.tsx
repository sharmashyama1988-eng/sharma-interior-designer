import HeroSection from '@/components/HeroSection';
import HeritageAbout from '@/components/HeritageAbout';
import ArchitectBio from '@/components/ArchitectBio';
import ServicesSection from '@/components/ServicesSection';
import CatalogTeaser from '@/components/CatalogTeaser';
import MaterialCraftsmanship from '@/components/MaterialCraftsmanship';
import CostEstimator from '@/components/CostEstimator';
import ProjectPortfolio from '@/components/ProjectPortfolio';
import VirtualShowroom from '@/components/VirtualShowroom';
import ProcessTimeline from '@/components/ProcessTimeline';
import TestimonialsSection from '@/components/TestimonialsSection';
import JournalSection from '@/components/JournalSection';
import AwardsPress from '@/components/AwardsPress';
import FaqSection from '@/components/FaqSection';
import ContactInquiry from '@/components/ContactInquiry';
import BookingHashListener from '@/components/BookingHashListener';

export default function Home() {
  return (
    <>
      <BookingHashListener />
      <HeroSection />
      <HeritageAbout />
      <ArchitectBio />
      <ServicesSection />
      <CatalogTeaser />
      <MaterialCraftsmanship />
      <CostEstimator />
      <ProjectPortfolio />
      <VirtualShowroom />
      <ProcessTimeline />
      <TestimonialsSection />
      <JournalSection />
      <AwardsPress />
      <FaqSection />
      <ContactInquiry />
    </>
  );
}
