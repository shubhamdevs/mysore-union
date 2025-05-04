'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const socials = [
  { name: "Instagram", icon: "/icons/instagram.svg", url: "#" },
  { name: "Dribbble", icon: "/icons/dribbble.svg", url: "#" },
  { name: "Behance", icon: "/icons/behance.svg", url: "#" },
  { name: "LinkedIn", icon: "/icons/linkedin.svg", url: "#" },
];

const Footer: React.FC = () => (
  <motion.footer 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="w-full bg-[#181818] border-t border-[#232323] py-8 px-4 flex flex-col md:flex-row items-center justify-between gap-6"
  >
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="flex items-center gap-4"
    >
      <Image src="/logo.png" alt="Mysore Union Logo" width={64} height={64} className="w-16 h-16 rounded-full" />
      <span className="text-white text-lg font-light">Mysore Union</span>
    </motion.div>

    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true }}
      className="flex gap-4"
    >
      {socials.map((s, i) => (
        <motion.a
          key={s.name}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 flex items-center justify-center rounded-full bg-[#232323] border border-[#333] hover:bg-white hover:text-black transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
          viewport={{ once: true }}
        >
          <Image src={s.icon} alt={s.name} width={20} height={20} className="w-5 h-5" />
        </motion.a>
      ))}
    </motion.div>

    <motion.span 
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
      className="text-xs text-white/50 text-center md:text-right font-light"
    >
      © {new Date().getFullYear()} Mysore Union. All rights reserved.
    </motion.span>
  </motion.footer>
);

export default Footer; 