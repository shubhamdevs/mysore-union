"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

import Image from "next/image";
import { RainbowButton } from "./magicui/rainbow-button";
import { ArrowRight } from "lucide-react";

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
          transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out', // Changed from 25s to 0.5s

          width: isSmallMobile ? '90%' : 'auto',
        }}
      >
        {/* Menu Button */}
        {/* <button
          className="luxury-button px-3 py-2 flex items-center active:scale-95 hover:scale:102 justify-center gap-1 shadow-lg text-xs sm:text-sm lg:text-lg font-medium flex-1 min-h-[40px] sm:min-h-[48px] relative overflow-hidden group"
          style={{ fontFamily: "Host Grotesk, sans-serif" }}
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >


          {/* Company colors gradient border glow */}
        {/* <div className="absolute inset-[-2px] rounded-full bg-gradient-to-r from-cyan-400 via-lime-400 to-orange-500 opacity-70 blur-sm animate-pulse"></div> */}

        {/* Hover shimmer effect */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out rounded-full"></div> */}

        {/* Click pulse effect */}

        {/*
        <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-active:scale-110 group-active:opacity-0 transition-all duration-300 ease-out opacity-100"></div>

          <span className="inline-block w-4 sm:w-5 h-4 sm:h-5 relative z-10 transform group-hover:rotate-90 group-active:rotate-180 transition-transform duration-300">
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
          <span className="font-semibold text-xs sm:text-lg relative z-10  transition-colors duration-300"> Menu </span>
        </button> */}
        <RainbowButton
          className="menu-button px-3 py-2 flex items-center active:scale-95 hover:scale:102 justify-center gap-1  text-xs sm:text-sm lg:text-lg font-medium flex-1 min-h-[40px] sm:min-h-[48px] relative overflow-hidden group"
          style={{ fontFamily: "Host Grotesk, sans-serif" }}
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >

          {/* Company colors gradient border glow */}
          {/* <div className="absolute inset-[-2px] rounded-full bg-gradient-to-r from-cyan-400 via-lime-400 to-orange-500 opacity-70 blur-sm animate-pulse"></div> */}
          <div className="absolute inset-[-2px] rounded-full bg-gradient-to-r from-blue-500 to-purple-500 to-pink-500 to-red-500 to-orange-500 to-yellow-500 to-green-500 to-blue-500 opacity-60 blur-sm animate-pulse"></div>

          {/* Hover shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out rounded-full"></div>

          {/* Click pulse effect */}
          <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-active:scale-110 group-active:opacity-0 transition-all duration-300 ease-out opacity-100"></div>

          <span className="inline-block w-4 sm:w-5 h-4 sm:h-5 relative z-10 transform group-hover:rotate-90 group-active:rotate-180 transition-transform duration-300">
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
          <span className="font-semibold text-xs sm:text-lg relative z-10  transition-colors duration-300"> Menu </span>
        </RainbowButton>
        {/* Conditional Reserve Button */}
        {isMobile && (
          <RainbowButton
            className="reserve-button px-3 py-2 flex items-center justify-center gap-1 shadow-lg text-xs sm:text-sm lg:text-lg font-medium flex-1 min-h-[40px] sm:min-h-[48px] relative overflow-hidden group  bg-slate-200/30 border-slate-300 text-slate-100 hover:bg-slate-400/70 hover:text-white"
            style={{ fontFamily: "Host Grotesk, sans-serif" }}
            onClick={() => handleSectionClick('reserve')}
            aria-label="Reserve"
          >
            {/* Always visible silver glow */}
            <div className="absolute inset-[-2px] rounded-full bg-gradient-to-r from-slate-200 via-gray-300 to-slate-400 opacity-60 blur-sm animate-pulse"></div>

            {/* Hover shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-300/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>

            {/* Click pulse effect */}
            <div className="absolute inset-0 bg-slate-400/50 rounded-full scale-0 group-active:scale-110 group-active:opacity-0 transition-all duration-300 ease-out opacity-100"></div>

            <span className="font-semibold text-xs sm:text-lg relative z-10 group-hover:text-black/50 transition-colors duration-300">Reserve</span>
            <span className="inline-block ml-1 text-sm sm:text-xl relative z-10 transform group-hover:translate-x-1 group-hover:-translate-y-1 group-active:scale-125 transition-transform duration-300">
              <ArrowRight className="size-3  -rotate-45 " />

            </span>
          </RainbowButton>
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
              className="w-full h-full flex flex-row bg-gray/20 backdrop-blur-2xl noisy-glass z-10 relative"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1]  // Custom cubic-bezier for smooth ease-in-out
              }}>
              {/* Left section: menu links and socials */}
              <div className="w-full flex-1 flex flex-col items-center  pt-16 pb-8 md:px-12 lg:px-20 global-menu-container border-2 border-white border-solid "

              >
                {/* Navigation Menu Section */}
                <div className="w-full  menu-section  border-2 border-white border-solid ">
                  <ul className="  w-full h-[60vh] flex flex-col justify-between border-2 border-white border-solid">
                    {sections.map((section) => {

                      const hoverColor = '#cbd5e1 '

                      return (
                        <li className="block h-full" key={section.id}>
                          <motion.button
                            className={`text-4xl sm:text-5xl h-full font-medium text-white/70 hover:text-slate-300 w-full text-center menu-item`}
                            style={{ fontFamily: 'Host Grotesk, sans-serif' }}
                            onClick={() => handleSectionClick(section.id)}
                            whileHover={{
                              scale: 1.05,
                              x: 10,
                              color: hoverColor,
                              textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
                            }}
                            whileTap={{ scale: 0.95 }}

                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          >
                            {section.name}
                          </motion.button>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Socials Section */}
                <div className="mt-4 md:mt-8 social-icons-container ">
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
                          backgroundColor: `${s.color}20`,
                          boxShadow: `0 0 10px 2px ${s.color}30`
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
                        className="object-cover rounded-[1.5rem]"
                        priority={i === 0}
                      />
                      <div className="absolute bottom-0 left-0 w-full p-4 rounded-[1.5rem] bg-gradient-to-t from-black/80 to-transparent">
                        <h3 className="text-white text-lg sm:text-xl font-medium">{exp.title}</h3>
                        <p className="text-white/80 text-sm sm:text-base mt-1">{exp.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Close button for large screens, bottom center */}
              <div className="hidden md:flex fixed left-1/2 -translate-x-1/2 bottom-8 z-[100] transition-opacity ">
                <button
                  className="luxury-button px-8 py-2 flex items-center gap-3 shadow-lg text-lg font-medium min-w-[90px] min-h-[48px] relative overflow-hidden group bg-red-600/20 border-red-400 hover:bg-red-500/30"
                  style={{ fontFamily: 'Host Grotesk, sans-serif' }}
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  {/* Modern red gradient border glow */}
                  <div className="absolute inset-[-2px] rounded-full bg-gradient-to-r from-red-400 via-rose-500 to-red-600 opacity-60 blur-sm animate-pulse"></div>

                  {/* Hover shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-300/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out rounded-full"></div>

                  {/* Click pulse effect */}
                  <div className="absolute inset-0 bg-red-400/30 rounded-full scale-0 group-active:scale-110 group-active:opacity-0 transition-all duration-300 ease-out opacity-100"></div>

                  <span className="inline-block w-6 h-6 relative z-10 transform group-hover:rotate-90 group-active:rotate-180 transition-transform duration-300">
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
                  <span className="font-semibold relative z-10 group-hover:text-red-100 transition-colors duration-300">Close</span>
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