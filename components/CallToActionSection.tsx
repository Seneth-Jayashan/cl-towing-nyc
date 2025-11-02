'use client';

import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export function CallToActionSection() {
  return (
    <motion.section
      className="bg-blue-950 text-white py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Stuck on the Road?
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
          Don't wait. Call us now for immediate dispatch to your location in
          Queens or Brooklyn.
        </p>
        <a
          href="tel:+19292846067"
          // This is the second highlighted button!
          className="flex items-center justify-center gap-2 w-max mx-auto bg-cyan-400 text-gray-900 font-bold px-10 py-4 rounded-full text-xl hover:bg-cyan-300 transition-all duration-300 shadow-lg hover:scale-105 transform animate-pulse-bright"
        >
          <Phone size={24} />
          Call +1 (929) 284-6067
        </a>
      </div>
    </motion.section>
  );
}