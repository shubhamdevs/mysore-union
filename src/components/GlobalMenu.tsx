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
  // { name: "Dribbble", icon: "/icons/dribbble.svg", url: "#" },
  // { name: "Behance", icon: "/icons/behance.svg", url: "#" },
  { name: "LinkedIn", icon: <FaLinkedinIn />, url: "#" },
];

const GlobalMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [hide, setHide] = useState(false);
  const menuBtnRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement | null>(null);

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

  return (
    <>
      {/* Floating menu button */}
      <div
        ref={menuBtnRef}
        className={`fixed left-1/2 -translate-x-1/2 bottom-8 z-[100] transition-opacity ${hide ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
      >
        <button
          className="luxury-button px-8 py-2 flex items-center gap-3 shadow-lg text-lg font-medium min-w-[90px] min-h-[48px]"
          style={{ fontFamily: "Host Grotesk, sans-serif" }}
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <span className="inline-block w-6 h-6">
            {/* Hamburger icon */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </span>
          <span className="font-semibold"> Menu </span>
        </button>
      </div>
      {/* Overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[200] flex" // overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Slide-in menu panel */}
            <motion.div
              className="w-full md:w-1/2 max-w-[600px] h-full flex flex-col justify-between p-12 md:p-20 bg-gray/60 backdrop-blur-lg noisy-glass z-10 relative"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.2, type: 'spring', stiffness: 300, damping: 30 }}
            >
              {/* Close button inside menu, top right */}
              <button
                className="absolute top-6 right-6 luxury-button px-4 py-2 flex items-center gap-2 shadow text-base font-medium z-20"
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
              <div>
                <ul className="space-y-6 md:space-y-8 mt-8">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <button
                        className="text-[clamp(2rem,4vw,4rem)] font-medium text-white/70 hover:text-white transition-colors"
                        style={{
                          fontFamily: "Host Grotesk, sans-serif",
                          textAlign: "left",
                        }}
                        onClick={() => handleSectionClick(section.id)}
                      >
                        {section.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GlobalMenu;