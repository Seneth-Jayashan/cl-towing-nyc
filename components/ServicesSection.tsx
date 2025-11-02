'use client'; // <-- Must be a Client Component for animations

import {
  Car,
  BatteryCharging,
  Wrench,
  LockKeyhole,
} from 'lucide-react';
import { motion } from 'framer-motion';

// Define the animation properties
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1, // Faster stagger
      duration: 0.5,
      ease: 'easeInOut',
    },
  }),
};

export function ServicesSection() {
  const services = [
    {
      icon: <Car size={40} className="text-cyan-400" />,
      title: 'Emergency Towing',
      desc: 'Fast, reliable towing 24/7. We handle cars, motorcycles, and light-duty trucks.',
    },
    {
      icon: <BatteryCharging size={40} className="text-cyan-400" />,
      title: 'Battery Jump Start',
      desc: 'Dead battery? We’ll get you started and back on the road in minutes.',
    },
    {
      icon: <Wrench size={40} className="text-cyan-400" />,
      title: 'Flat Tire Change',
      desc: 'Got a flat? We can change it with your spare or tow you to a tire shop.',
    },
    {
      icon: <LockKeyhole size={40} className="text-cyan-400" />,
      title: 'Car Lockout Service',
      desc: 'Locked out of your car? Our technicians can get you back in safely.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Services
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-xl mx-auto">
          Whatever your roadside needs, we have the solution. We are fully
          licensed and insured.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center"
              variants={cardVariants}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="p-4 bg-cyan-100 rounded-full mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}