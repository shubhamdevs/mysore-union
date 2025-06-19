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
  { name: "Instagram", icon: <IoLogoInstagram className="w-5 h-5 sm:w-8 sm:h-8" />, url: "#" },
  { name: "LinkedIn", icon: <FaLinkedinIn className="w-5 h-5 sm:w-8 sm:h-8" />, url: "#" },
];

const GlobalMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [hide, setHide] = useState(false);
  const menuBtnRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement | null>(null);
  // Images for right section with descriptions
  const experiences = [
    { title: "Lounge Area", desc: "Relax in our luxurious lounge", img: '/images/amenities/Lounge.jpg' },
    { title: "Snooker & Billiards", desc: "Challenge friends for a game", img: '/images/amenities/snooker1.jpg' },
    { title: "Badminton Courts", desc: "World-class indoor courts", img: '/images/amenities/Badminton2.jpg' },
    { title: "Squash Court", desc: "Professional glass-backed court", img: '/images/amenities/squash.jpg' },
    { title: "Fitness Center", desc: "State-of-the-art equipment", img: '/images/amenities/gym1.jpg' },
    { title: "Badminton Arena", desc: "Multiple courts for tournaments", img: '/images/amenities/Badminton.jpg' },
  ];
  const [carouselIdx, setCarouselIdx] = useState(0);

  useEffect(() => {
    if (!open) return;
    const interval = setInterval(() => {
      setCarouselIdx((prev) => (prev + 1) % experiences.length);
    }, 3500);
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
          className="luxury-button px-2 sm:px-2 lg:px-8 py-2 flex items-center gap-1 sm:gap-3 shadow-lg text-[5px] sm:text-sm  lg:text-lg font-medium min-h-[40px] sm:min-h-[48px]"
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
          <span className="font-semibold text-[10px] sm:text-lg"> Menu </span>
        </button>
        {isMobile && (
          <button
            className="luxury-button px-[2px] sm:px-6 py-2 flex items-center justify-between  sm:gap-3 shadow-lg  font-medium min-h-[40px] sm:min-h-[48px]"
            style={{ fontFamily: "Host Grotesk, sans-serif" }}
            onClick={() => handleSectionClick('reserve')}
            aria-label="Reserve"          >
            <span className="font-semibold text-[10px]  sm:text-sm md:text-lg">Reserve</span>
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
              className="w-full h-full flex flex-row bg-gray/20 backdrop-blur-lg noisy-glass z-10 relative"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.2, type: 'spring', stiffness: 300, damping: 30 }}
            >
              {/* Left section: menu links and socials */}
              <div className="flex-1 flex flex-col justify-center items-center  space-y-6    border-2 border-white border-solid">
                <div className=" flex flex-col justify-between    md:p-20     border-2 border-white border-solid">
                  <ul className="space-y-12 md:space-y-8 mt-0 md:mt-4">
                    {sections.map((section) => (
                      <li key={section.id}>
                        <button
                          className="text-3xl sm:text-4xl hover:scale-105 transition-all tap:scale-95 md:text-[clamp(2rem,4vw,4rem)] font-medium text-white/70 hover:text-white"
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
                </div>

                {/* Mobile Carousel */}
                {/* <div className="lg:hidden w-full px-4 mt-8 mb-6">
                  <div className="relative w-full h-[200px] sm:h-[240px]">
                    {experiences.map((exp, i) => (
                      <motion.div
                        key={exp.title}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{
                          opacity: i === carouselIdx ? 1 : 0,
                          scale: i === carouselIdx ? 1 : 0.95,
                          zIndex: i === carouselIdx ? 20 : 10
                        }}
                        transition={{ duration: 0.5 }}
                        className="absolute left-0 top-0 w-full h-full"
                        style={{
                          boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18)',
                          borderRadius: '1rem',
                          background: '#232323',
                          border: '1.5px solid #333',
                        }}
                      >
                        <Image
                          src={exp.img}
                          alt={exp.title}
                          fill
                          sizes="100vw"
                          className="object-cover rounded-t-[1rem]"
                          priority={i === 0}
                        />
                        <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/80 to-transparent">
                          <h3 className="text-white text-base sm:text-lg font-medium">{exp.title}</h3>
                          <p className="text-white/80 text-xs sm:text-sm mt-1">{exp.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div> */}

                {/* Socials and copyright */}
                <div className="flex flex-col gap-4 mb-4">
                  <div className="flex gap-4">
                    {socials.map((s) => (
                      <a
                        key={s.name}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-[#232323] hover:bg-[#232323] text-white transition-colors"
                      >
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>{/* Right section: image carousel, only on large screens */}
              <div className="hidden lg:flex flex-1 items-center justify-center p-8">
                <div className="relative w-full h-[400px] max-w-[500px]">
                  {experiences.map((exp, i) => (
                    <motion.div
                      key={exp.title}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{
                        opacity: i === carouselIdx ? 1 : 0,
                        scale: i === carouselIdx ? 1 : 0.95,
                        zIndex: i === carouselIdx ? 20 : 10
                      }}
                      transition={{ duration: 0.5 }}
                      className="absolute left-0 top-0 w-full h-full"
                      style={{
                        boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18)',
                        borderRadius: '1.5rem',
                        background: '#232323',
                        border: '1.5px solid #333',
                      }}
                    >
                      <Image
                        src={exp.img}
                        alt={exp.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover rounded-t-[1.5rem]"
                        priority={i === 0}
                      />
                      <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                        <h3 className="text-white text-lg sm:text-xl font-medium">{exp.title}</h3>
                        <p className="text-white/80 text-sm sm:text-base mt-1">{exp.desc}</p>
                      </div>
                    </motion.div>
                  ))}
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