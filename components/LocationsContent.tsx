// components/LocationsContent.tsx
'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react'; // Removed MapPin, it's redundant

// Lists for SEO and user confidence
const queensNeighborhoods = [
  'Astoria',
  'Long Island City',
  'Sunnyside',
  'Flushing',
  'Forest Hills',
  'Jamaica',
  'Jackson Heights',
  'Elmhurst',
  'Ridgewood',
  'Rockaway',
];

const brooklynNeighborhoods = [
  'Williamsburg',
  'Bushwick',
  'Brooklyn Heights',
  'DUMBO',
  'Park Slope',
  'Bed-Stuy',
  'Crown Heights',
  'Greenpoint',
  'Coney Island',
  'Bay Ridge',
];

export function LocationsContent() {
  return (
    // The py-16/py-24 adds the top padding that was removed from <main>
    <div className="container mx-auto px-4 py-16 md:py-24">
      
      {/* --- 1. Header Section (REMOVED) --- */}
      {/* The H1 and intro text are now in the HeroSection */}

      {/* --- 2. Content Section (Map + Lists) --- */}
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Side: Map */}
        <motion.div
          className="w-full h-96 lg:h-full min-h-[400px] rounded-lg overflow-hidden shadow-xl border"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          {/* TODO: Create a Google Map embed for "Queens and Brooklyn" 
            and paste your <iframe> src here.
          */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d96815.1143899128!2d-73.92131336421448!3d40.69534612335134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1730623812345!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="CL Towing NYC Service Area (Queens & Brooklyn)"
          ></iframe>
        </motion.div>

        {/* Right Side: Neighborhood Lists */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div className="grid sm:grid-cols-2 gap-8">
            {/* Queens */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">
                Queens
              </h2>
              <ul className="space-y-2">
                {queensNeighborhoods.map((name) => (
                  <li key={name} className="flex items-center text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 mr-2 flex-shrink-0" />
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Brooklyn */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">
                Brooklyn
              </h2>
              <ul className="space-y-2">
                {brooklynNeighborhoods.map((name) => (
                  <li key={name} className="flex items-center text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 mr-2 flex-shrink-0" />
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-gray-600 mt-8 italic border-t pt-6">
            Don't see your neighborhood? Don't worry. If you're in
            Queens or Brooklyn, we've got you covered.
          </p>
        </motion.div>
      </div>
    </div>
  );
}