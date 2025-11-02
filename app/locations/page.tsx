// app/locations/page.tsx

import { LocationsHeroSection } from '@/components/LocationsHeroSection'; // <-- 1. Import new hero
import { LocationsContent } from '@/components/LocationsContent';
import { CallToActionSection } from '@/components/CallToActionSection';
import type { Metadata } from 'next';

// Metadata remains the same
export const metadata: Metadata = {
  title: 'Service Areas | CL Towing NYC',
  description:
    'We provide fast, 24/7 towing and roadside assistance to all neighborhoods across Queens and Brooklyn.',
};

export default function LocationsPage() {
  return (
    <>
      <LocationsHeroSection />

      {/* 3. Remove 'pt-16' from main. The white bg is still needed. */}
      <main className="bg-white">
        <LocationsContent />
      </main>
      <CallToActionSection />
    </>
  );
}