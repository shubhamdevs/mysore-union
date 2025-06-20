'use client';
import React, { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const description = `It All Begins Here -  where luxury meets tradition in a sanctuary of modern amenities. Discover exquisite nature, wellness, and recreation—experience state-of-the-art lifestyle amenities and family fun zones. Mysore Union is your go-to destination for unforgettable moments, premium community, and 360° growth.`;

const DescriptiveSection: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const textRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  // Animate mask translateY from 0% to 100%
  const translateY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      ref.current.style.setProperty('--mouse-x', `${x}%`);
      ref.current.style.setProperty('--mouse-y', `${y}%`);
    };

    const element = ref.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      return () => element.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section 
      ref={ref} 
      className="relative flex flex-col md:flex-row items-center justify-between min-h-[60vh] px-6 md:px-20 py-24 overflow-hidden section-bg"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black opacity-90" />
      
      {/* Mouse-following gradient */}
      <div 
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.03) 0%, rgba(0, 0, 0, 0) 50%)'
        }}
      />

      {/* Text with scroll-reveal mask */}
      <div className="flex-1 w-full md:w-3/4 relative z-10">
        <div className="relative" style={{ minHeight: 220 }}>
          <div ref={textRef} className="relative">
            <span className="block text-[clamp(1.6rem,3.2vw,2.8rem)] leading-tight text-white font-light">
              {description}
            </span>
            {/* Moving mask overlay */}
            <motion.div
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                background: 'linear-gradient(to bottom, rgba(24,24,24,0.45) 80%, rgba(24,24,24,0.05) 100%)',
                backdropFilter: 'blur(2.5px)',
                translateY,
              }}
            />
          </div>
        </div>
      </div>

      {/* Logo with hover effect */}
      <motion.div
        className="w-full md:w-1/4 flex justify-center items-center mt-12 md:mt-0 md:pl-12 relative z-10"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-full flex justify-center items-center">
          <div className="bg-[#222]/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#333] flex items-center justify-center"
            style={{ width: 'clamp(120px, 60vw, 220px)', height: 'clamp(120px, 60vw, 220px)' }}
          >
            <Image
              src="/logo.png"
              alt="Mysore Union Logo"
              width={220}
              height={220}
              className="transition-transform duration-500 hover:scale-110 object-contain"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default DescriptiveSection; 