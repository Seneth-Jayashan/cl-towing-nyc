'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Phone, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const heroVideos = [
  '/videos/towing-video-1.mp4',
  '/videos/towing-video-2.mp4',
  '/videos/towing-video-3.mp4',
];

export function HeroSection() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % heroVideos.length);
    }, 8000); // 8-second timer
    return () => clearInterval(timer);
  }, []);

  const goToNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % heroVideos.length);
  };

  const goToPrevVideo = () => {
    setCurrentVideoIndex(
      (prevIndex) => (prevIndex - 1 + heroVideos.length) % heroVideos.length
    );
  };

  return (
    <div className="relative bg-gray-900 text-white min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background (z-0) */}
      <AnimatePresence initial={false}>
        <motion.video
          key={currentVideoIndex}
          src={heroVideos[currentVideoIndex]}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 z-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
      </AnimatePresence>

      {/* Dark Overlay (z-10) */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>

      {/* Navigation Arrows (z-30) - Sit on top of everything */}
      <button
        onClick={goToPrevVideo}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 text-white p-2 rounded-full bg-black/30 hover:bg-black/50 transition-all"
        aria-label="Previous video"
      >
        <ChevronLeft size={30} />
      </button>
      <button
        onClick={goToNextVideo}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 text-white p-2 rounded-full bg-black/30 hover:bg-black/50 transition-all"
        aria-label="Next video"
      >
        <ChevronRight size={30} />
      </button>

      {/* Content (z-20) - Sits on top of overlay */}
      <div className="relative z-20 container mx-auto px-4 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Image
            src="/logo-light.png"
            alt="CL Towing NYC Logo"
            width={280}
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