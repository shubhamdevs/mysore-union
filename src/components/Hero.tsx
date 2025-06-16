'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 600);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="min-h-screen  relative" >
      {/* Top Bar */}
      < motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-0 left-0 w-full flex justify-between items-start px-6 pt-6 z-20"
      >
        <h1 className="text-white text-[clamp(2.5rem,8vw,6.5rem)] font-normal leading-none select-none" > Mysore Union </h1>
        {
          !isMobile && (
            <motion.a
              href="#reserve"
              className="luxury-button px-6 py-2 text-lg font-normal shadow-md flex items-center gap-2 mt-2 hover:bg-gray-900/40 hover:text-white"
              whileHover={{ scale: 1.05 }
              }
              whileTap={{ scale: 0.95 }}
            >
              Reserve
              < span className="inline-block ml-1 text-xl" >↗</span>
            </motion.a>
          )}
      </motion.div>

      {/* Hero Image fills section with rounded corners */}
      {/* <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute inset-0 w-full h-full flex items-center justify-center z-0"
      > */}
      <div className="w-full h-full bg-black/60 " >
        <div className="relative w-full h-full  overflow-hidden" >
          {/* <video src="/videos/hero_background.mp4" autoPlay loop muted className="object-cover w-full h-full border-none" /> */}

          <div className="absolute  inset-0" >
            {/* The content here will be visible on top of the background */}
          </div>

        </div>
      </div>
      {/* </motion.div> */}

      {/* Floating Reserve Button for Mobile */}
      {
        isMobile && (
          <motion.a
            href="#reserve"
            className="luxury-button fixed top-0 left-0 mt-20 ml-6 z-30 px-6 py-3 text-base font-semibold shadow-lg flex items-center gap-2"
            whileHover={{ scale: 1.05 }
            }
            whileTap={{ scale: 0.95 }}
          >
            Reserve
            < span className="inline-block ml-1 text-xl" >↗</span>
          </motion.a>
        )}

      {/* Bottom Left Tagline & Description - only for desktop */}
      {
        !isMobile && (
          <>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }
              }
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute bottom-10 left-10 z-20 max-w-xs hidden sm:block"
            >
              <span className="text-white text-2xl md:text-3xl font-light leading-tight" >
                Closer to Nature—Closer to Yourself
              </span>
            </motion.div>

            < motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute bottom-10 right-10 z-20 max-w-xs text-right hidden sm:block"
            >
              <span className="text-white text-sm md:text-base opacity-80 font-light" >
                Spend unforgettable and remarkable time in the Mysore Union club—luxury, nature, and you.
              </span>
            </motion.div>
          </>
        )}
    </div>
  );
};

export default Hero; 
