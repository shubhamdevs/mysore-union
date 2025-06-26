'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

// Added brand colors for social icons to match GlobalMenu
const socials = [
  {
    name: "Instagram",
    icon: <IoLogoInstagram className="w-4 h-4 md:w-5 md:h-5" />,
    url: "#",
    color: "#E1306C"
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn className="w-4 h-4 md:w-5 md:h-5" />,
    url: "#",
    color: "#0077B5"
  },
  {
    name: "Gmail",
    icon: <SiGmail className="w-4 h-4 md:w-5 md:h-5" />,
    url: "#",
    color: "#EA4335"
  },
  {
    name: "Facebook",
    icon: <FaFacebookF className="w-4 h-4 md:w-5 md:h-5" />,
    url: "#",
    color: "#1877F2"
  },
  {
    name: "X",
    icon: <FaXTwitter className="w-4 h-4 md:w-5 md:h-5" />,
    url: "#",
    color: "#000000"
  },
];


const Footer: React.FC = () => (
  <motion.footer
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="w-full border-t border-[#232323] py-8 md:py-10 px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6 rounded-t-3xl"
  >
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="flex items-center gap-4"
    >
      <Image src="/logo.png" alt="Mysore Union Logo" width={64} height={64} className="w-12 h-12 md:w-16 md:h-16 rounded-full" />
      <span className="text-white text-lg md:text-xl font-light">Mysore Union</span>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true }}
      className="flex gap-3 social-icons-container"
    >
      {socials.map((s, i) => (
        <motion.a
          key={s.name}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full border border-white/50 text-white overflow-hidden group social-icon"
          whileHover={{
            scale: 1.1,
            borderColor: s.color,
            backgroundColor: `${s.color}20` // 20% opacity of the brand color
          }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 15,
            delay: 0.4 + i * 0.1
          }}
          viewport={{ once: true }}
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
    </motion.div>

    <motion.span
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
      className="text-xs md:text-sm text-white/60 text-center md:text-right font-light"
    >
      © {new Date().getFullYear()} Mysore Union. All rights reserved.
    </motion.span>
  </motion.footer>
);

export default Footer;