'use client';

import Image from 'next/image';
import { FC } from "react";
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  BadgeCheck,
  MapPin,
  Truck,
  Wrench,
  Siren,
  Users,
  Heart,
} from 'lucide-react';

interface ValueCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay?: number;
}

// --- Card for Core Values ---
const ValueCard: FC<ValueCardProps> = ({ icon: Icon, title, description, delay = 0 }) => (
  <motion.div
    className="bg-gray-50 p-6 rounded-lg shadow-md text-center"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5, delay }}
  >
    <Icon
      className="w-10 h-10 text-cyan-500 mx-auto"
      strokeWidth={1.5}
    />
    <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">{title}</h3>
    <p className="text-gray-700 text-base">{description}</p>
  </motion.div>
);

// --- Main Component ---
export function AboutContentSection() {
  return (
    <main className="bg-white text-gray-800">
      <div className="container mx-auto px-4 py-16 md:py-24 space-y-20">
        {/* --- OUR STORY SECTION --- */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="text-cyan-500 font-bold uppercase tracking-wider">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
              Your Local Towing Experts, Born in NYC
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                CL Towing NYC wasn't started in a boardroom. It was started on
                the streets of Queens by our founder, [Founder's Name], a
                mechanic and lifelong resident who saw his neighbors stranded,
                waiting hours for unreliable service.
              </p>
              <p>
                In 2015, he bought his first flatbed truck with a simple
                mission: to provide fast, professional, and honest roadside
                assistance to the community he loved.
              </p>
              <p>
                Today, our fleet has grown, but that core mission remains the
                same. We're not a faceless corporation; we're your neighbors. We
                know the frustration of a flat tire on the BQE or a dead battery
                in a Brooklyn snowstorm. We're here to be your first call,
                ready to turn a bad day around.
              </p>
            </div>
          </div>
          <motion.div
            className="w-full h-96 rounded-lg overflow-hidden shadow-xl"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              // Replace with a photo of your team or founder
              src="/towing-img-2.png"
              alt="CL Towing NYC founder or team"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        <hr />
    
        {/* --- OUR FLEET & SAFETY SECTION --- */}
        <div>
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Ready for Anything
            </h2>
            <p className="text-gray-700 text-lg mt-4">
              We invest in top-of-the-line equipment and rigorous training to
              ensure your vehicle is handled with the utmost care and safety.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Our Fleet Card */}
            <motion.div
              className="bg-gray-50 p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Truck
                className="w-12 h-12 text-cyan-500 mb-4"
                strokeWidth={1.5}
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Our Modern Fleet
              </h3>
              <p className="text-gray-700">
                Our fleet includes state-of-the-art flatbeds for damage-free
                towing of all vehicles, from sports cars to SUVs. We also have
                light-duty wreckers and roadside service vans, all
                GPS-equipped for fast dispatch.
              </p>
            </motion.div>

            {/* Safety Card */}
            <motion.div
              className="bg-gray-50 p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ShieldCheck
                className="w-12 h-12 text-cyan-500 mb-4"
                strokeWidth={1.5}
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Commitment to Safety
              </h3>
              <p className="text-gray-700">
                Safety is our non-negotiable. Our operators are fully licensed,
                insured, and WreckMaster-certified. We conduct daily vehicle
                inspections and adhere to the strictest safety protocols on
                every call.
              </p>
            </motion.div>

            {/* Our Services Card */}
            <motion.div
              className="bg-gray-50 p-8 rounded-lg shadow-md lg:col-span-1 md:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Wrench
                className="w-12 h-12 text-cyan-500 mb-4"
                strokeWidth={1.5}
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Full-Service Roadside
              </h3>
              <p className="text-gray-700">
                We're more than just towing. Our team is equipped for jump
                starts, tire changes, vehicle lockouts, and fuel delivery to
                get you moving again without a tow.
              </p>
            </motion.div>
          </div>
        </div>

        <hr />

        {/* --- OUR VALUES SECTION --- */}
        <div>
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What We Stand For
            </h2>
            <p className="text-gray-700 text-lg mt-4">
              These are the principles that guide every call we take.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <ValueCard
              icon={Siren}
              title="24/7 Reliability"
              description="We are available 24 hours a day, 7 days a week. When you call, we answer."
              delay={0.1}
            />
            <ValueCard
              icon={BadgeCheck}
              title="Professionalism"
              description="Our team is trained, certified, and equipped to handle any situation safely."
              delay={0.2}
            />
            <ValueCard
              icon={MapPin}
              title="Local Focus"
              description="We are 100% focused on Queens & Brooklyn. We know these roads better than anyone."
              delay={0.3}
            />
            <ValueCard
              icon={Heart}
              title="Community First"
              description="We're not just a service; we're part of this community. We treat every client like a neighbor."
              delay={0.4}
            />
          </div>
        </div>
      </div>
    </main>
  );
}