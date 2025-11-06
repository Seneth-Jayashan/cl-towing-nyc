// components/ServicesListSection.tsx
'use client';

import { motion } from 'framer-motion';
import {
  Truck,
  BatteryCharging,
  Car,
  Key,
  Fuel,
  Wrench,
} from 'lucide-react';

const services = [
  {
    icon: Truck,
    title: '24/7 Emergency Towing',
    description:
      'Flatbed and wheel-lift towing for all vehicles. We handle accidents, breakdowns, and unauthorized vehicles safely and quickly.',
  },
  {
    icon: Wrench,
    title: 'Roadside Assistance',
    description:
      "Stuck on the side of the road? We'll be there fast to assess the situation and provide the help you need.",
  },
  {
    icon: BatteryCharging,
    title: 'Battery Jump Start',
    description:
      'Dead battery? Our professional-grade equipment will safely jump start your car and get you running again.',
  },
  {
    icon: Car,
    title: 'Flat Tire Change',
    description:
      "Don't risk changing a tire on a busy road. We'll swap your flat with your spare tire safely and securely.",
  },
  {
    icon: Key,
    title: 'Vehicle Lockout',
    description:
      'Locked your keys in the car? Our technicians use damage-free tools to get you back inside in minutes.',
  },
  {
    icon: Fuel,
    title: 'Fuel Delivery',
    description:
      'Ran out of gas? We deliver 2 gallons of gasoline or diesel directly to your location.',
  },
];

// Animation variants for Framer Motion
import { Variants } from "framer-motion";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: ["easeOut"] as any // ✅ Type-safe fix
    }
  })
};


export function ServicesListSection() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Header */}
      <motion.div
        className="text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          How We Can Help
        </h2>
        <p className="text-gray-700 text-lg mt-4">
          We offer a complete range of services for any situation. Our team is
          trained and equipped to handle every call with professionalism.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            className="bg-gray-50 p-8 rounded-lg shadow-md flex flex-col items-start"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <service.icon
              className="w-12 h-12 text-cyan-500"
              strokeWidth={1.5}
            />
            <h3 className="text-2xl font-bold text-gray-900 mt-5 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-700">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}