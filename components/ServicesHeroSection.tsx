// components/ServicesHeroSection.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function ServicesHeroSection() {
  return (
    <section className="relative flex h-[50vh] items-center justify-center text-white">
      {/* Background Image */}
      <Image
        // A different, high-quality image relevant to services
        src="/towing-img-3.png"
        alt="Roadside assistance in progress"
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
        priority
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 w-full h-full flex items-center pt-16">
        {' '}
        {/* pt-16 for navbar height */}
        <motion.div
          className="max-w-2xl" // Left-aligned
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-shadow-lg">
            Our Services
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-200 text-shadow">
            Reliable 24/7 solutions to get you back on the road.
          </p>
        </motion.div>
      </div>
    </section>
  );
}