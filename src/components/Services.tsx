'use client';

import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

const services = [
  {
    title: "Driver Service",
    description:
      "Professional local drivers familiar with Nepal's roads, available for single trips, multi-day tours, and point-to-point transfers.",
    icon: "🚘",
  },
  {
    title: "Van Rental",
    description:
      "Comfortable vans for groups and families — ideal for long-distance travel, pilgrimages, and group tours across Nepal.",
    icon: "🚐",
  },
  {
    title: "Hiace / Mini Buses",
    description:
      "Hiace and mini-bus options for medium-sized groups, weddings, corporate travel, and organized excursions.",
    icon: "🚌",
  },
  {
    title: "Private Cars",
    description:
      "Sedan and SUV options for private transfers, airport pickups, and city travel — clean, reliable vehicles.",
    icon: "🚗",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 skew-y-3 -z-10" />
      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl font-bold">Our Services</h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Reliable transport solutions across Nepal tailored to your needs.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 grid gap-6 sm:grid-cols-2"
        >
          {services.map((s, i) => (
            <ServiceCard 
              key={s.title} 
              title={s.title} 
              description={s.description}
              icon={s.icon}
              index={i}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
