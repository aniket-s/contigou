import HeroSection from '@/components/home/HeroSection';
import FindCareSection from '@/components/home/FindCareSection';
import FeaturedFacilities from '@/components/home/FeaturedFacilities';
import PartnersSection from '@/components/home/PartnersSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';

export default function Home() {
  return (
      <main>
        <HeroSection />
        <FindCareSection />
        <FeaturedFacilities />
        <PartnersSection />
        <TestimonialsSection />
      </main>
  );
}