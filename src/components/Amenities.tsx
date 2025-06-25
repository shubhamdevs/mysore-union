'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';


// Scrolling row images
const scrollingImages = [
  { title: "Badminton Courts", image: "/images/amenities/Badminton.jpg" },
  { title: "Air Rifle Range", image: "/images/amenities/AirRifle.jpg" },
  { title: "Lounge Area", image: "/images/amenities/Lounge.jpg" },
  { title: "Pool Side View", image: "/images/amenities/LoungeSwim.jpg" },
  {
    title: "Snooker",
    image: "/images/amenities/snooker.JPG",
  },
  {
    title: "Table Tennis",
    image: "/images/amenities/TableTennis.JPG",
  }, { title: "Recreation Area", image: "/images/amenities/PoolTable.jpg" },
  { title: "Badminton Arena", image: "/images/amenities/Badminton2.jpg" },
  { title: "Garden View", image: "/images/amenities/lawn2.jpg" },
];

const amenities = [
  {
    title: "State-of-the-Art Fitness",
    image: "/images/amenities/gym1.jpg",
  },
  {
    title: "Serene Yoga Studio",
    image: "/images/amenities/gym2.jpg",
  },
  {
    title: "Championship Squash Court",
    image: "/images/amenities/squash.jpg",
  },
  {
    title: "Badminton Court",
    image: "/images/amenities/Badminton.jpg",
  },
  {
    title: "Semi-Olympic Pool",
    image: "/images/amenities/SwimmingPool2.jpg",
  },
  {
    title: "Children's Play Area",
    image: "/images/amenities/PlayArea.jpg",
  },
  {
    title: "Lounge & Swim",
    image: "/images/amenities/LoungeSwim.jpg",
  },
  {
    title: "Restaurant",
    image: "/images/amenities/Restaurant.jpg",
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
  hidden: { opacity: 0, scale: 0.95, y: 40 }, show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  },
} as const;

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
    <svg width="160" height="160" viewBox="0 0 160 160" >
      <defs>
        <path id="circlePath" d="M80,10 a70,70 0 1,1 0,140 a70,70 0 1,1 0,-140" />
      </defs>
      < text fill="#C6A962" fontSize="13" fontFamily="'Host Grotesk', Arial, sans-serif" letterSpacing="8" >
        <textPath xlinkHref="#circlePath" startOffset="0" >
          {Array(2).fill(' MYSORE UNION •').join('')}
        </textPath>
      </text>
      < g >
        <image x="55" y="55" width="50" height="50" href="/logo.png" />
      </g>
    </svg>
  </motion.div>
);

// ScrollingRow component for continuous right to left animation
const ScrollingRow: React.FC<{ images: Array<{ title: string, image: string }> }> = ({ images }) => {
  return (
    <div className="w-full overflow-hidden mt-8">
      <div className="flex gap-6 animate-scrolling-row">
        {/* Double the images to create seamless looping */}
        {[...images, ...images].map((item, i) => (
          <div
            key={`${item.title}-${i}`}
            className="relative group rounded-2xl overflow-hidden shadow-lg bg-[#181818] border border-[#232323]  flex-shrink-0"
            style={{ width: '300px', height: '200px' }}
          >
            <div className="relative w-full h-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                style={{ borderRadius: 0 }}
                sizes="300px"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent z-10" />
              <div className="absolute bottom-0 left-0 w-full z-20 p-4 flex items-end">
                <span className="text-white text-xl font-light drop-shadow-lg">{item.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Amenities: React.FC = () => {
  const sectionRef = React.useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 600);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
    <section ref={sectionRef} className="relative py-24 sm:py-32 px-4 md:px-16 overflow-visible " >

      {/* Top left circular logo (behind grid, clockwise) */}
      <CircularTextLogo className="-top-16 -left-16 opacity-40" zIndex={0} style={{ filter: 'blur(1px)' }} reverse={false} />

      {/* Section Title */}
      < div className="flex flex-col sm:flex-row items-center sm:items-center justify-center gap-2 sm:gap-6 mb-10 sm:mb-16 mx-auto w-full relative z-10 text-center" >
        <span className="text-2xl sm:text-[clamp(2.5rem,6vw,5rem)] font-bold block" style={{ color: '#C6A962', fontFamily: 'Playfair Display, serif', letterSpacing: '0.04em' }}> CRAFTING </span>
        < span className="text-2xl sm:text-[clamp(2.5rem,6vw,5rem)] font-bold text-white block" style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '0.04em' }}> EXPERIENCES </span>
      </div>

      {/* Custom grid layout for desktop, vertical stack for mobile */}
      {
        isMobile ? (
          <div className="flex flex-col gap-6 w-full max-w-md mx-auto mb-16 " >
            {
              amenities.map((amenity, i) => (
                <div
                  key={amenity.title}
                  className="relative group rounded-2xl overflow-hidden hover:shadow-[0_-8px_32px_-4px_rgba(192,199,207,0.4),0_8px_32px_-4px_rgba(192,199,207,0.4),0_0_0_1px_rgba(224,230,237,0.2)] bg-[#181818] border border-[#232323] flex flex-col"
                >
                  <div className="relative w-full h-48 min-h-[100px] " >
                    <Image
                      src={amenity.image}
                      alt={amenity.title}
                      fill
                      className=" glow-hover absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      style={{ borderRadius: 0 }}
                      sizes="100vw"
                      priority={i < 2}
                    />
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent z-10" />
                    <div className="absolute bottom-0 left-0 w-full z-20 p-4 flex items-end" >
                      <span className="text-white text-xl font-light drop-shadow-lg" > {amenity.title} </span>
                    </div>
                  </div>
                </div>
              ))
            }

            {/* Mobile Scrolling Row */}
            <ScrollingRow images={scrollingImages} />
          </div>
        ) : (
          <>
            <motion.div
              className="relative max-w-6xl mx-auto min-h-[900px] grid grid-cols-6 grid-rows-6 gap-8"
              variants={gridVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {
                amenities.map((amenity, i) => (
                  <motion.div
                    key={amenity.title}
                    className={`relative group rounded-2xl overflow-hidden hover:shadow-[0_-8px_32px_-4px_rgba(192,199,207,0.4),0_8px_32px_-4px_rgba(192,199,207,0.4),0_0_0_1px_rgba(224,230,237,0.2)]  bg-[#181818] border border-[#232323] flex flex-col ${areaStyles[gridAreas[i]]}`}
                    variants={itemVariants}
                  >
                    {/* <div className="silver-glow" /> */}
                    <div className="z-50 relative w-full h-full min-h-[100px]" >
                      <Image
                        src={amenity.image}
                        alt={amenity.title}
                        fill
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        style={{ borderRadius: 0 }}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority={i < 2}
                      />
                      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent z-10" />
                      <div className="absolute bottom-0 left-0 w-full z-20 p-4 flex items-end" >
                        <span className="text-white text-xl font-light drop-shadow-lg" > {amenity.title} </span>
                      </div>
                    </div>
                  </motion.div>
                ))}

            </motion.div>
            {/* Desktop Scrolling Row */}
            <div className="relative z-30 max-w-6xl mx-auto mb-32">
              <h3 className="text-xl sm:text-6xl text-white mb-6 ml-2 antic-slab-regular font-light relative z-20 drop-shadow-lg" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>More Amenities</h3>
              <ScrollingRow images={scrollingImages} />
            </div>
            {/* Bottom right circular logo (on top of grid, counterclockwise) */}
            <CircularTextLogo className="bottom-32 right-0 translate-x-1/3 translate-y-1/3" zIndex={30} reverse={true} />
          </>
        )}
    </section>
  );
};

export default Amenities;