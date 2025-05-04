'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from "next/image";

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className="min-h-screen bg-[#181818] relative">
      {/* Top Bar */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-0 left-0 w-full flex justify-between items-start px-6 pt-6 z-20"
      >
        <h1 className="text-white text-[clamp(2.5rem,8vw,6.5rem)] font-normal leading-none select-none">Mysore Union</h1>
        <motion.a
          href="#reserve"
          className="bg-white text-black rounded-full px-6 py-2 text-lg font-normal shadow-md flex items-center gap-2 mt-2 hover:bg-gray-100 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Reserve
          <span className="inline-block ml-1 text-xl">↗</span>
        </motion.a>
      </motion.div>

      {/* Hero Image fills section with rounded corners */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute inset-0 w-full h-full flex items-center justify-center z-0"
      >
        <div className="w-full h-full">
          <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl border border-[#232323] bg-[#222]/60">
            <Image
              src="/hero.png"
              alt="Mysore Union Hero"
              fill
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </motion.div>

      {/* Bottom Left Tagline */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute bottom-10 left-10 z-20 max-w-xs"
      >
        <span className="text-white text-2xl md:text-3xl font-light leading-tight">
          Closer to Nature—Closer to Yourself
        </span>
      </motion.div>

      {/* Bottom Right Description */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-10 right-10 z-20 max-w-xs text-right"
      >
        <span className="text-white text-sm md:text-base opacity-80 font-light">
          Spend unforgettable and remarkable time in the Mysore Union club—luxury, nature, and you.
        </span>
      </motion.div>
    </div>
  );
};

export default Hero; 