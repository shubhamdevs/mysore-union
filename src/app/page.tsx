'use client';

import { useEffect } from "react";
import Hero from "../components/Hero";
import DescriptiveSection from "../components/DescriptiveSection";
import Amenities from "../components/Amenities";
import ReserveSection from "../components/ReserveSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";

export default function Home() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty('--mouse-x', `${x}%`);
      document.documentElement.style.setProperty('--mouse-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="relative" >
      {/* <div className="fixed inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black opacity-90" /> */}
      <div className="relative z-10" >
        <section id="welcome" > <Hero /></section >
        <section id="introduction" className="section-bg" > <DescriptiveSection /></section >
        <section id="amenities" className="section-bg" > <Amenities /></section >
        <section id="reserve" className="section-bg" > <ReserveSection /></section >
        <section id="faq" className="section-bg" > <FAQSection /></section >
        <Footer />
      </div>
    </main>
  );
}
