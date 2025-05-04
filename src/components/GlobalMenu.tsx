"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const sections = [
  { name: "Amenities", id: "amenities" },
  { name: "Experiences", id: "experiences" },
  { name: "Reserve", id: "reserve" },
  { name: "FAQ", id: "faq" },
];

const socials = [
  { name: "Instagram", icon: "/icons/instagram.svg", url: "#" },
  { name: "Dribbble", icon: "/icons/dribbble.svg", url: "#" },
  { name: "Behance", icon: "/icons/behance.svg", url: "#" },
  { name: "LinkedIn", icon: "/icons/linkedin.svg", url: "#" },
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
        className={`fixed left-1/2 -translate-x-1/2 bottom-8 z-[100] transition-opacity ${hide ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        <button
          className="bg-[#181818] text-white rounded-full px-8 py-2 flex items-center gap-3 shadow-lg text-lg font-medium border border-[#232323] hover:bg-[#232323] transition-colors min-w-[90px] min-h-[48px]"
          style={{ fontFamily: 'Host Grotesk, sans-serif' }}
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <span className="inline-block w-6 h-6">
            {/* Hamburger icon */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </span>
          <span className="font-semibold">Menu</span>
        </button>
      </div>
      {/* Overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[200] flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ background: "#fff" }}
          >
            <div className="flex w-full h-full">
              {/* Left: Section links */}
              <div className="w-full md:w-[48vw] max-w-[600px] flex flex-col justify-between p-12 md:p-20 bg-white z-10">
                <div>
                  <ul className="space-y-6 md:space-y-8 mt-8">
                    {sections.map((section) => (
                      <li key={section.id}>
                        <button
                          className="text-[clamp(2rem,4vw,4rem)] font-medium text-[#232323]/60 hover:text-[#181818] transition-colors"
                          style={{ fontFamily: 'Host Grotesk, sans-serif', textAlign: 'left' }}
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
                      <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-[#232323] hover:bg-[#232323] hover:text-white transition-colors">
                        <Image src={s.icon} alt={s.name} width={32} height={32} className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              {/* Right: Hero image preview */}
              <div className="hidden md:flex flex-1 items-center justify-center p-8 z-0">
                <div className="w-full h-[80vh] rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#232323] bg-[#232323]/60 flex items-center justify-center">
                  <Image
                    src="/hero.png"
                    alt="Mysore Union Hero Preview"
                    fill
                    className="object-cover w-full h-full"
                    style={{ filter: 'brightness(0.8)' }}
                    priority
                  />
                </div>
              </div>
            </div>
            {/* Close button (center bottom) */}
            <button
              className="fixed left-1/2 -translate-x-1/2 bottom-8 z-[300] bg-[#181818] text-white rounded-full px-8 py-2 flex items-center gap-3 shadow-lg text-lg font-medium border border-[#232323] hover:bg-[#232323] transition-colors min-w-[90px] min-h-[48px]"
              style={{ fontFamily: 'Host Grotesk, sans-serif' }}
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <span className="font-semibold">Close</span>
              <span className="inline-block w-6 h-6">
                {/* X icon */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GlobalMenu; 