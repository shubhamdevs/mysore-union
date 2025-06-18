"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const tabs = ["Dining", "Amenities"];

const amenities = [
  "Pool", "Yoga Studio", "Squash Court", "Fitness Center", "Fine Dining"
];

const experiences = [
  { title: "Poolside Dining", desc: "Enjoy gourmet meals by the pool.", img: "/images/amenities/Restaurant.jpg" },
  { title: "Yoga Retreat", desc: "Find your zen in our serene studio.", img: "/images/amenities/SwimmingPool2.jpg" },
  { title: "Squash Challenge", desc: "Compete or play for fun.", img: "/images/amenities/squash.jpg" },
  { title: "Luxury Fitness", desc: "State-of-the-art equipment and trainers.", img: "/images/amenities/gym5.jpg" },
];

const ReserveSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Dining");
  const [carouselIdx, setCarouselIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIdx((i) => (i + 1) % experiences.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="reserve" className="w-full mt-0 my-32 px-4 py-20 bg-[#181818] rounded-3xl shadow-2xl border border-[#232323] flex flex-col md:flex-row gap-12 items-stretch">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="absolute -top-20 left-0 w-full flex justify-center"
      >
        <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-normal text-center mb-6" style={{ color: '#C6A962', letterSpacing: '0.04em' }}>RESERVE YOUR EXPERIENCE</h2>
      </motion.div>

      {/* Form (2/3) */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex-1 md:basis-2/3 flex flex-col justify-center gap-10"
      >
        <div className="flex gap-6 mb-8">
          {tabs.map(tab => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`luxury-button px-8 py-3 text-xl font-light transition-colors tracking-wide ${activeTab === tab ? 'bg-white text-black' : 'bg-[#232323] text-white hover:bg-[#333]'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </motion.button>
          ))}
        </div>
        {activeTab === "Dining" ? (
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-8 items-stretch"
          >
            <div className="flex gap-6 w-full">
              <input type="date" className="flex-1 px-6 py-4 bg-[#232323] text-white border border-[#333] focus:outline-none focus:ring-2 focus:ring-white text-lg font-light" />
              <input type="time" className="flex-1 px-6 py-4 bg-[#232323] text-white border border-[#333] focus:outline-none focus:ring-2 focus:ring-white text-lg font-light" />
            </div>
            <input type="number" min="1" max="20" placeholder="Number of Guests" className="w-full px-6 py-4 bg-[#232323] text-white border border-[#333] focus:outline-none focus:ring-2 focus:ring-white text-lg font-light" />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="luxury-button w-full bg-white text-black font-light py-4 shadow-lg hover:bg-gray-100 transition-colors text-xl"
            >
              Reserve Dining
            </motion.button>
          </motion.form>
        ) : (
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-8 items-stretch"
          >
            <select className="w-full px-6 py-4 bg-[#232323] text-white border border-[#333] focus:outline-none focus:ring-2 focus:ring-white text-lg font-light">
              <option value="">Select Amenity</option>
              {amenities.map(a => <option key={a} value={a}>{a}</option>)}
            </select>
            <div className="flex gap-6 w-full">
              <input type="date" className="flex-1 px-6 py-4 bg-[#232323] text-white border border-[#333] focus:outline-none focus:ring-2 focus:ring-white text-lg font-light" />
              <input type="time" className="flex-1 px-6 py-4 bg-[#232323] text-white border border-[#333] focus:outline-none focus:ring-2 focus:ring-white text-lg font-light" />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="luxury-button w-full bg-white text-black font-light py-4 shadow-lg hover:bg-gray-100 transition-colors text-xl"
            >
              Reserve Amenity
            </motion.button>
          </motion.form>
        )}
      </motion.div>

      {/* Card stack carousel (1/3) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex-1 md:basis-1/3 flex flex-col justify-center items-center relative min-h-[340px]"
      >
        <div className="relative w-full h-[340px] flex items-center justify-center">
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
                borderRadius: '2rem',
                background: '#232323',
                border: '1.5px solid #333',
              }}
            >
              <Image
                src={exp.img}
                alt={exp.title}
                width={400}
                height={192}
                className="w-full h-full object-cover rounded-t-2xl"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ReserveSection; 