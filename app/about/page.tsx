// app/about/page.tsx

import { AboutHeroSection } from '@/components/AboutHeroSection';
import { AboutContentSection } from '@/components/AboutContentSection';
import type { Metadata } from 'next';

// Add specific metadata for this page
export const metadata: Metadata = {
  title: 'About CL Towing NYC - Our Story',
  description:
    'Learn about CL Towing NYC, our mission, and our commitment to serving Queens and Brooklyn with reliable roadside assistance.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutContentSection />
    </>
  );
}