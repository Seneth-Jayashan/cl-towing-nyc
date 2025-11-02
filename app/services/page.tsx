// app/services/page.tsx

import { ServicesHeroSection } from '@/components/ServicesHeroSection';
import { ServicesListSection } from '@/components/ServicesListSection';
import { WhyChooseUsSection } from '@/components/WhyChooseUsSection';
import { CallToActionSection } from '@/components/CallToActionSection';
import type { Metadata } from 'next';

// Add specific metadata for this page
export const metadata: Metadata = {
  title: 'Our Services - CL Towing NYC',
  description:
    'Full list of 24/7 services from CL Towing NYC, including emergency towing, jump starts, tire changes, lockouts, and fuel delivery in Queens & Brooklyn.',
};

export default function ServicesPage() {
  return (
    <>
      {/* 1. New hero section for this page */}
      <ServicesHeroSection />

      {/* 2. New services list */}
      {/* This <main> tag provides the white background for the page */}
      {/* and for the navbar to transition onto. */}
      <main className="bg-white">
        <ServicesListSection />

        {/* 3. Re-used component for value prop */}
        <WhyChooseUsSection />


        {/* 4. Re-used component for conversion */}
        <CallToActionSection />
      </main>
    </>
  );
}