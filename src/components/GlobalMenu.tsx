"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

import Image from "next/image";

const sections = [
  { name: "Amenities", id: "amenities" },
  { name: "Experiences", id: "experiences" },
  { name: "Reserve", id: "reserve" },
  { name: "FAQ", id: "faq" },
];

// Added brand colors for social icons
const socials = [
  {
    name: "Instagram",
    icon: <IoLogoInstagram className="w-5 h-5 sm:w-6 sm:h-6" />,
    url: "#",
    color: "#E1306C"
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn className="w-5 h-5 sm:w-6 sm:h-6" />,
    url: "#",
    color: "#0077B5"
  },
  {
    name: "Gmail",
    icon: <SiGmail className="w-5 h-5 sm:w-6 sm:h-6" />,
    url: "#",
    color: "#EA4335"
  },
  {
    name: "Facebook",
    icon: <FaFacebookF className="w-5 h-5 sm:w-6 sm:h-6" />,
    url: "#",
    color: "#1877F2"
  },
  {
    name: "X",
    icon: <FaXTwitter className="w-5 h-5 sm:w-6 sm:h-6" />,
    url: "#",
    color: "#000000"
  },
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
  }, [open, experiences.length]);

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

  // Enhanced mobile detection
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);

  useEffect(() => {
    const checkDeviceSize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsSmallMobile(width <= 400);
    };

    checkDeviceSize();
    window.addEventListener('resize', checkDeviceSize);
    return () => window.removeEventListener('resize', checkDeviceSize);
  }, []);

  return (
    <>
      {/* Floating menu and reserve buttons - improved for mobile */}
      <div
        ref={menuBtnRef}
        className={`fixed bottom-8 z-[100] flex gap-2   ${hide ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        style={{
          left: '50%',
          transform: 'translateX(-50%)',
          width: isSmallMobile ? '90%' : 'auto',
          transitionBehavior: 'transform, opacity',
          transitionDuration: '10s',
          transitionTimingFunction: 'ease-in-out',
          transitionDelay: '0s',
        }}
      >
        <button
          className="luxury-button px-3 py-2 flex items-center active:scale-95 hover:scale:102 justify-center gap-1 shadow-lg text-xs sm:text-sm lg:text-lg font-medium flex-1 min-h-[40px] sm:min-h-[48px]"
          style={{ fontFamily: "Host Grotesk, sans-serif" }}
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <span className="inline-block w-4 sm:w-5 h-4 sm:h-5">
            {/* Hamburger icon */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 sm:w-5 h-4 sm:h-5"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </span>
          <span className="font-semibold text-xs sm:text-lg"> Menu </span>
        </button>

        {isMobile && (
          <button
            className="luxury-button px-3 py-2 flex items-center justify-center gap-1 shadow-lg text-xs sm:text-sm lg:text-lg font-medium flex-1 min-h-[40px] sm:min-h-[48px]"
            style={{ fontFamily: "Host Grotesk, sans-serif" }}
            onClick={() => handleSectionClick('reserve')}
            aria-label="Reserve"
          >
            <span className="font-semibold text-xs sm:text-lg">Reserve</span>
            <span className="inline-block ml-1 text-sm sm:text-xl">↗</span>
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
              <div className="flex-1 flex flex-col justify-evenly items-center pt-16 pb-8 px-6 md:px-12 lg:px-20 global-menu-container  ">
                {/* Navigation Menu Section */}
                <div className="w-full max-w-md menu-section">
                  <ul className="space-y-8 md:space-y-10 w-full ">
                    {sections.map((section) => (
                      <li key={section.id}>
                        <motion.button
                          className="text-3xl sm:text-4xl  md:text-[clamp(2rem,4vw,4rem)] font-medium text-white/70 hover:text-white w-full text-center menu-item"
                          style={{ fontFamily: 'Host Grotesk, sans-serif' }}
                          onClick={() => handleSectionClick(section.id)}
                          whileHover={{ scale: 1.05, x: 10 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          {section.name}
                        </motion.button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Socials Section */}
                <div className="mt-8 md:mt-12 social-icons-container ">
                  <div className="flex flex-wrap justify-center gap-4 md:gap-5">
                    {socials.map((s) => (
                      <motion.a
                        key={s.name}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-white/50 text-white overflow-hidden group social-icon"
                        whileHover={{
                          scale: 1.1,
                          borderColor: s.color,
                          backgroundColor: `${s.color}20`, // 20% opacity of the brand color
                          boxShadow: `0 0 10px 2px ${s.color}30` // Add a subtle glow in brand color
                        }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 500, damping: 15 }}
                        aria-label={`Visit our ${s.name}`}
                        title={s.name}
                      >
                        {/* Hover background effect */}
                        <span
                          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                          style={{ backgroundColor: s.color }}
                        ></span>

                        {/* Icon */}
                        <motion.span
                          className="relative z-10 transition-all duration-300"
                          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          {s.icon}
                        </motion.span>
                      </motion.a>
                    ))}
                  </div>
                  <p className="text-white/50 text-xs mt-4 text-center">Connect with us on social media</p>
                </div>
              </div>

              {/* Right section: image carousel, only on large screens */}
              <div className="hidden lg:flex flex-1 items-center justify-center p-8">
                <div className="relative w-full h-[350px] max-w-[400px]">
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


            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GlobalMenu;