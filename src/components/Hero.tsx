'use client';

import React from 'react';
import { motion } from 'framer-motion';
// Image is not currently used but may be needed for future enhancements
// import Image from "next/image";
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const arrow = '../../public/right-arrow.png';


// const handleSectionClick = (id: string) => {
//   setTimeout(() => {
//     const el = document.getElementById(id);
//     if (el) {
//       el.scrollIntoView({ behavior: "smooth" });
//     }
//   }, 200);
// };

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  // const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Enhanced mobile detection (including tablets)
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      console.log("Device is mobile:", mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle video loading
  // const handleVideoLoaded = () => {
  //   setVideoLoaded(true);
  //   console.log("Video loaded successfully");
  // };

  return (
    <div className="md:min-h-screen relative">


      {/* Video background with overlay */}
      <div className="w-full h-screen">
        <div className="relative w-full h-full overflow-hidden">
          {/* Show loading indicator if video hasn't loaded yet */}
          {/* {!videoLoaded && (
            <div className="absolute inset-0 flex items-center justify-center z-10 bg-black">
              <div className="animate-pulse flex space-x-4">
                <div className="h-3 w-3 bg-white rounded-full"></div>
                <div className="h-3 w-3 bg-white rounded-full"></div>
                <div className="h-3 w-3 bg-white rounded-full"></div>
              </div>
            </div>
          )} */}

          {isMobile ? (
            <video
              key="mobile-video"
              src="/videos/mob-hero-background.mp4"
              autoPlay
              loop
              muted
              playsInline
              // onLoadedData={handleVideoLoaded}
              className={`object-cover w-full h-full border-none transition-opacity duration-700 opacity-100`}
              poster="/images/amenities/PlayArea.JPG" // Fallback image while video loads
            />
          ) : (
            <video
              key="desktop-video"
              src="/videos/hero_background.mp4"
              autoPlay
              loop
              muted
              playsInline
              // onLoadedData={handleVideoLoaded}
              className={`object-cover w-full h-full border-none transition-opacity duration-700 opacity-100`}
              poster="/images/amenities/PlayArea.JPG" // Fallback image while video loads
            />
          )}

          {/* Blackish overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/70 z-10"></div>

          <div className="absolute inset-0 z-20">

            {/* Top Bar */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute top-0 left-0 w-full flex justify-center md:justify-between  items-center px-4 md:pr-16 md:pl-10 sm:px-6 pt-4 sm:pt-6 z-20"
            >
              <h1 className="text-white text-5xl sm:text-8xl md:text-9xl mt-[4rem] md:mt-0 changa-one-regular leading-none select-none">Mysore Union</h1>
              {!isMobile && (
                <motion.a
                  href="#reserve"
                  className="z-40 luxury-button px-6 py-2 text-lg font-normal shadow-md flex items-center gap-2 mt-2 relative overflow-hidden group bg-slate-200/30 border-slate-300 text-slate-100 hover:bg-slate-400/70 hover:text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Always visible silver glow */}
                  <div className="absolute inset-[-2px] rounded-full bg-gradient-to-r from-slate-200 via-gray-300 to-slate-400 opacity-60 blur-sm animate-pulse"></div>

                  {/* Hover shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-300/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>

                  {/* Click pulse effect */}
                  <div className="absolute inset-0 bg-slate-400/50 rounded-full scale-0 group-active:scale-110 group-active:opacity-0 transition-all duration-300 ease-out opacity-100"></div>

                  <span className="relative z-10 group-hover:text-black/50 transition-colors duration-300">Reserve</span>
                  <span className="inline-block ml-1 text-xl !bg-transparent relative z-10 transform group-hover:translate-x-1 group-hover:-translate-y-1 group-active:scale-125 transition-transform duration-300" style={{ backgroundColor: 'transparent' }}>
                    <ArrowRight className="size-5  -rotate-45 " />
                  </span>
                </motion.a>
              )}
            </motion.div>





            {/* The content here will be visible on top of the background */}
            {/* Bottom Tagline & Description - responsive for all devices */}
            {/* For mobile devices - centered layout */}
            {isMobile ? (
              <div className="absolute bottom-40 left-0 right-0 z-20 flex flex-col items-center justify-center space-y-4 px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-center"
                >
                  <span className="text-white text-3xl font-light leading-tight">
                    Closer to Nature Closer to Yourself
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-center max-w-xs"
                >
                  <span className="text-white text-lg opacity-80 font-light">
                    Spend unforgettable and remarkable time in the Mysore Union club—luxury, nature, and you.
                  </span>
                </motion.div>
              </div>
            ) : (
              <>
                {/* For desktop - left/right layout */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute bottom-10 left-10 z-20 max-w-xs"
                >
                  <span className="text-white text-2xl md:text-3xl font-light leading-tight">
                    Closer to Nature, <br />
                    Closer to Yourself
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="absolute bottom-10 right-10 z-20 max-w-sm text-right"
                >
                  <span className="text-white text-xl opacity-80 font-light montserrat-regular">
                    Spend unforgettable and remarkable time in the Mysore Union club — luxury, nature, and you.
                  </span>
                </motion.div>
              </>
            )}

          </div>

        </div>
      </div>
    </div>

  );
};

export default Hero;
