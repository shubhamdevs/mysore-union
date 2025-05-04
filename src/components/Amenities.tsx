'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const amenities = [
  {
    title: "State-of-the-Art Fitness",
    image: "/images/amenities-1.png",
  },
  {
    title: "Serene Yoga Studio",
    image: "/images/amenities-2.png",
  },
  {
    title: "Championship Squash Court",
    image: "/images/amenities-3.png",
  },
  {
    title: "Family Fun Zones",
    image: "/images/amenities-bar.png",
  },
  {
    title: "Semi-Olympic Pool",
    image: "/images/amenities-1.png",
  },
  {
    title: "Fine Dining",
    image: "/images/amenities-food.png",
  },
  {
    title: "Exclusive Events",
    image: "/images/amenities-dance.png",
  },
  {
    title: "Concierge Service",
    image: "/images/amenities-aesthetic.png",
  },
];

const gridVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 40 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const gridAreas = [
  // visually editorial, not a strict grid
  'area1', // large left
  'area2', // large right
  'area3', // small top right
  'area4', // small mid right
  'area5', // small bottom right
  'area6', // bottom left
  'area7', // bottom center
  'area8', // bottom right
];

const areaStyles: Record<string, string> = {
  area1: 'col-span-3 row-span-2',
  area2: 'col-span-3 row-span-2',
  area3: 'col-span-2 row-span-1',
  area4: 'col-span-2 row-span-1',
  area5: 'col-span-2 row-span-1',
  area6: 'col-span-2 row-span-2',
  area7: 'col-span-2 row-span-2',
  area8: 'col-span-2 row-span-2',
};

// CircularTextLogo component with continuous rotation and improved perimeter text
const CircularTextLogo = ({ className = '', style = {}, zIndex = 10, reverse = false }) => (
  <motion.div
    className={`pointer-events-none select-none absolute ${className}`}
    style={{ zIndex, ...style }}
    animate={{ rotate: reverse ? 360 : -360 }}
    transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
  >
    <svg width="160" height="160" viewBox="0 0 160 160">
      <defs>
        <path id="circlePath" d="M80,10 a70,70 0 1,1 0,140 a70,70 0 1,1 0,-140" />
      </defs>
      <text fill="#C6A962" fontSize="13" fontFamily="'Host Grotesk', Arial, sans-serif" letterSpacing="8">
        <textPath xlinkHref="#circlePath" startOffset="0">
          {Array(2).fill(' MYSORE UNION •').join('')}
        </textPath>
      </text>
      <g>
        <image x="55" y="55" width="50" height="50" href="/logo.png" />
      </g>
    </svg>
  </motion.div>
);

const Amenities: React.FC = () => {
  const sectionRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      sectionRef.current.style.setProperty('--mouse-x', `${x}%`);
      sectionRef.current.style.setProperty('--mouse-y', `${y}%`);
    };

    const element = sectionRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      return () => element.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 px-4 md:px-16 overflow-visible section-bg">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black opacity-90" />
      
      {/* Mouse-following gradient */}
      <div 
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.03) 0%, rgba(0, 0, 0, 0) 50%)'
        }}
      />

      {/* Top left circular logo (behind grid, clockwise) */}
      <CircularTextLogo className="-top-16 -left-16 opacity-40" zIndex={0} style={{ filter: 'blur(1px)' }} reverse={false} />

      {/* Section Title */}
      <div className="flex items-center gap-6 mb-16 ml-2 relative z-10">
        <span className="text-[clamp(2.5rem,6vw,5rem)] font-bold" style={{ color: '#C6A962', fontFamily: 'Playfair Display, serif', letterSpacing: '0.04em' }}>CRAFTING</span>
        <span className="text-[clamp(2.5rem,6vw,5rem)] font-bold text-white" style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '0.04em' }}>EXPERIENCES</span>
      </div>

      {/* Custom grid layout */}
      <motion.div
        className="relative max-w-6xl mx-auto min-h-[1200px] grid grid-cols-6 grid-rows-6 gap-8"
        variants={gridVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {amenities.map((amenity, i) => (
          <motion.div
            key={amenity.title}
            className={`relative group rounded-2xl overflow-hidden shadow-lg bg-[#181818] border border-[#232323] flex flex-col ${areaStyles[gridAreas[i]]}`}
            variants={itemVariants}
            // style={{ aspectRatio: '4/3' }}
          >
            {/* Image fills container absolutely */}
            <div className="relative w-full h-full min-h-[100px]">
              <img
                src={amenity.image}
                alt={amenity.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                style={{ borderRadius: 0 }}
              />
              {/* Black gradient mask from bottom */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent z-10" />
              {/* Amenity name on top of gradient */}
              <div className="absolute bottom-0 left-0 w-full z-20 p-4 flex items-end">
                <span className="text-white text-xl font-light drop-shadow-lg">{amenity.title}</span>
              </div>
            </div>
          </motion.div>
        ))}
        {/* Bottom right circular logo (on top of grid, counterclockwise) */}
        <CircularTextLogo className="bottom-0 right-0 translate-x-1/3 translate-y-1/3" zIndex={30} reverse={true} />
      </motion.div>
    </section>
  );
};

export default Amenities; 