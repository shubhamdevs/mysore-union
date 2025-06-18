"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";

import Image from "next/image";

const sections = [
  { name: "Amenities", id: "amenities" },
  { name: "Experiences", id: "experiences" },
  { name: "Reserve", id: "reserve" },
  { name: "FAQ", id: "faq" },
];

const socials = [
  { name: "Instagram", icon: <IoLogoInstagram />, url: "#" },
  { name: "LinkedIn", icon: <FaLinkedinIn />, url: "#" },
];

const GlobalMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [hide, setHide] = useState(false);
  const menuBtnRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement | null>(null);

  // Images for right section
  const images = [
    '/images/amenities/Lounge.jpg',
    '/images/amenities/snooker1.jpg',
    '/images/amenities/Badminton2.jpg',
    '/images/amenities/squash.jpg',
    '/images/amenities/gym1.jpg',
    '/images/amenities/Badminton.jpg',
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (!open) return;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [open]);

  // Hide menu button when footer is in view
  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) {
        footerRef.current = document.querySelector("footer");
      }
      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect();
        setHide(rect.top < window.innerHeight);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section
  const handleSectionClick = (id: string) => {
    setOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 200);
  };

  // Replace MUI with custom isMobile logic
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      {/* Floating menu and reserve buttons */}
      <div
        ref={menuBtnRef}
        className={`fixed sm:left-1/2  -translate-x-1/2 bottom-8 z-[100] flex gap-2 sm:gap-4 transition-opacity ${hide ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        style={{ left: '50%', transform: 'translateX(-50%)' }}
      >
        <button
          className="luxury-button px-2 sm:px-2 lg:px-8 py-2 flex items-center gap-1 sm:gap-3 shadow-lg text-[5px] sm:text-base lg:text-lg font-medium min-h-[40px] sm:min-h-[48px]"
          style={{ fontFamily: "Host Grotesk, sans-serif" }}
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <span className="inline-block w-5 sm:w-6 h-5 sm:h-6">
            {/* Hamburger icon */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 sm:w-6 h-4 sm:h-6"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </span>
          <span className="font-semibold "> Menu </span>
        </button>
        {isMobile && (
          <button
            className="luxury-button px-3 sm:px-6 py-2 flex items-center gap-1 sm:gap-3 shadow-lg text-sm sm:text-base font-medium min-h-[40px] sm:min-h-[48px]"
            style={{ fontFamily: "Host Grotesk, sans-serif" }}
            onClick={() => handleSectionClick('reserve')}
            aria-label="Reserve"          >
            <span className="font-semibold">Reserve</span>
            <span className="inline-block ml-1 text-lg sm:text-xl">↗</span>
          </button>
        )}
      </div>
      {/* Overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[200] flex w-full" // overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Slide-in menu panel */}
            <motion.div
              className="w-full h-full flex flex-row bg-gray/60 backdrop-blur-lg noisy-glass z-10 relative"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.2, type: 'spring', stiffness: 300, damping: 30 }}
            >
              {/* Left section: menu links and socials */}
              <div className="flex-1 flex flex-col justify-between p-8 md:p-20">
                <ul className="space-y-6 md:space-y-8 mt-8">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <button
                        className="text-[clamp(2rem,4vw,4rem)] font-medium text-white/70 hover:text-white transition-colors"
                        style={{
                          fontFamily: 'Host Grotesk, sans-serif',
                          textAlign: 'left',
                        }}
                        onClick={() => handleSectionClick(section.id)}
                      >
                        {section.name}
                      </button>
                    </li>
                  ))}
                </ul>
                {/* Socials and copyright */}
                <div className="flex flex-col gap-6">
                  <div className="flex gap-4 mb-2">
                    {socials.map((s) => (
                      <a
                        key={s.name}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center rounded-full border border-[#232323] hover:bg-[#232323] text-white transition-colors"
                      >
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              {/* Right section: image slideshow, only on large screens */}
              <div className="hidden lg:flex flex-1 items-center justify-center p-8">
                <div className="relative w-full h-[400px] max-w-[400px] rounded-2xl overflow-hidden shadow-lg bg-slate-600/15">
                  <AnimatePresence mode="sync">
                    <motion.div
                      key={images[currentImage]}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.03 }}
                      transition={{ opacity: { duration: 0.25 }, scale: { duration: 0.3 }, type: 'spring', stiffness: 300, damping: 30 }}
                      className="absolute inset-0"
                      style={{ zIndex: 1 }}
                    >
                      <Image
                        src={images[currentImage]}
                        alt="Menu Visual"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Close button for large screens, bottom center */}
              <div className="hidden lg:flex fixed left-1/2 -translate-x-1/2 bottom-8 z-[100] transition-opacity ">
                <button
                  className="luxury-button px-8 py-2 flex items-center gap-3 shadow-lg text-lg font-medium min-w-[90px] min-h-[48px]"
                  style={{ fontFamily: 'Host Grotesk, sans-serif' }}
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <span className="inline-block w-6 h-6">
                    {/* X icon */}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </span>
                  <span className="font-semibold">Close</span>
                </button>
              </div>



              {/* Close button for small screens, top right */}
              <button
                className="absolute top-6 right-6 luxury-button px-4 py-2 flex items-center gap-2 shadow text-base font-medium z-20 lg:hidden"
                style={{ fontFamily: 'Host Grotesk, sans-serif' }}
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <span className="inline-block w-5 h-5">
                  {/* X icon */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </span>
                <span className="font-semibold">Close</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GlobalMenu;