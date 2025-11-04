'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center hero-gradient overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50" />
        <Image
          src="/nepal-landscape.jpg"
          alt="Scenic Nepal landscape"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="container py-24 relative z-10">
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl font-bold leading-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent"
          >
            Explore Nepal with trusted local transport
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground mt-6"
          >
            Khadka Tours & Travels provides driver services, van rentals, Hiace and private cars for all your travel needs across Nepal. Safe, punctual, and comfortable journeys — tailored to groups, families and solo travelers.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link 
              href="#contact" 
              className="btn relative overflow-hidden group bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg"
            >
              <span className="relative z-10">Book a Ride</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
            <Link 
              href="#services" 
              className="btn border hover:bg-foreground/5 px-8 py-4 text-lg transition-colors"
              style={{borderColor: 'rgba(15,23,36,0.1)'}}
            >
              See services
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
