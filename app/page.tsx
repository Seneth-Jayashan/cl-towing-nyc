// app/page.tsx

import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { WhyChooseUsSection } from '@/components/WhyChooseUsSection';
import { CallToActionSection } from '@/components/CallToActionSection';

export default function Home() {
  return (
    <>
      {/* This section has its own background and is now visible behind the navbar */}
      <HeroSection />

      {/* Add a background to <main> for the rest of your page content */}
      <main className="bg-white">
        <ServicesSection />
        <WhyChooseUsSection />
        <CallToActionSection />
      </main>
    </>
  );
}