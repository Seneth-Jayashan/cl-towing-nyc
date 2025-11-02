'use client';

import Image from 'next/image';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <div className="relative bg-gray-900 text-white min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://cltowingnyc.com/wp-content/uploads/elementor/thumbs/photo-1-r87nokjtcc0n2o64hgoap6b7c10za27reqz5qiic2o.jpg"
        alt="Tow truck in NYC"
        layout="fill"
        objectFit="cover"
        className="absolute z-0 opacity-30" // Reduced opacity a bit
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Image
            src="/logo-light.png" // Updated logo path
            alt="CL Towing NYC Logo"
            width={280} // Slightly larger
            height={56}
            priority
          />
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          24/7 Emergency Towing & Roadside Assistance
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          Serving Queens & Brooklyn with fast, reliable, and professional service.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
        >
          <a
            href="tel:+19292846067"
            // This is the highlighted button!
            className="flex items-center justify-center gap-2 bg-cyan-400 text-gray-900 font-bold px-8 py-4 rounded-full text-lg hover:bg-cyan-300 transition-all duration-300 shadow-lg hover:scale-105 transform animate-pulse-bright"
          >
            <Phone size={20} />
            Call Now for Immediate Help
          </a>
          <a
            href="#services"
            className="bg-transparent border-2 border-white text-white font-medium px-8 py-4 rounded-full text-lg hover:bg-white hover:text-gray-900 transition-colors"
          >
            Our Services
          </a>
        </motion.div>
      </div>
    </div>
  );
}