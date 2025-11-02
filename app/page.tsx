import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { WhyChooseUsSection } from '@/components/WhyChooseUsSection';
import { CallToActionSection } from '@/components/CallToActionSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <CallToActionSection />
    </>
  );
}