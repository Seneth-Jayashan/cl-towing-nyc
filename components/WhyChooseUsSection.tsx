'use client';

import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

export function WhyChooseUsSection() {
  const features = [
    {
      name: '24/7 Availability',
      desc: 'We are ready to help you day or night, 365 days a year.',
    },
    {
      name: 'Fast Response Times',
      desc: 'Our dispatch team gets a driver to you fast, anywhere in Queens or Brooklyn.',
    },
    {
      name: 'Professional & Insured',
      desc: 'Our drivers are experienced, friendly, and fully insured for your peace of mind.',
    },
    {
      name: 'Affordable Rates',
      desc: 'Transparent, upfront pricing with no hidden fees.',
    },
  ];

const listVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: ["easeOut"] as any // ✅ makes TS happy
    }
  })
};

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      {' '}
      {/* Added overflow-hidden */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="text-cyan-500 font-semibold">
              WHY CHOOSE US
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
              The CL Towing NYC Difference
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              When you're stranded, you need a service you can trust. We build
              that trust with every call by providing reliable, professional,
              and fast service.
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  custom={index}
                  variants={listVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <CheckCircle className="text-cyan-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {feature.name}
                    </h4>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Image */}
          <motion.div
            className="rounded-lg overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <Image
              src="/towing-img-4.png"
              alt="Professional tow truck driver"
              width={600} // Increased size for better quality
              height={314}
              objectFit="cover"
              className="w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}