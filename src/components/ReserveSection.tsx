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
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [selectedAmenity, setSelectedAmenity] = useState('');

  // Reset form function
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setDate('');
    setTime('');
    setGuests('');
    setSelectedAmenity('');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIdx((i) => (i + 1) % experiences.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="w-full flex flex-1 flex-col items-center relative px-4 py-8 sm:py-16 sm:px-6 md:px-12 lg:px-6">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full flex justify-center mb-12 sm:mb-20"
      >
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[clamp(2.5rem,6vw,5rem)] font-normal text-center" style={{ color: '#C6A962', fontFamily: 'Playfair Display, serif', letterSpacing: '0.04em' }}>RESERVE YOUR EXPERIENCE</h2>
      </motion.div>

      {/* Container */}
      <div id="reserve" className="w-[95%] sm:w-[90%] md:w-full bg-[#181818] rounded-3xl shadow-2xl border border-[#232323] flex flex-col md:flex-row gap-8 md:gap-12 items-stretch p-5 sm:p-8 md:p-12 lg:p-16">
        {/* Form (2/3) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 md:basis-2/3 flex flex-col justify-center gap-6 sm:gap-8 md:gap-10"
        >
          <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-6 mb-4 sm:mb-8">
            {tabs.map(tab => (
              <motion.button
                key={tab}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`luxury-button px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-base sm:text-lg md:text-xl font-light transition-colors tracking-wide ${activeTab === tab ? 'bg-white text-black' : 'bg-[#232323] text-white hover:bg-[#333]'}`}
                onClick={() => handleTabChange(tab)}
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
              className="flex flex-col gap-4 sm:gap-6 md:gap-8 items-stretch"
            >              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
                <div className="flex-1 relative">
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-[#232323] text-white border border-[#333] focus:outline-none focus:ring-2 focus:ring-white text-base sm:text-lg font-light rounded-lg appearance-none"
                    style={{ colorScheme: 'white' }}
                    placeholder='dd-mm-yyyy'
                  />
                  {/* {!date && (
                    <div className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 text-gray-400 text-base sm:text-lg pointer-events-none">
                      dd-mm-yyyy
                    </div>
                  )} */}
                </div>
                <div className="flex-1 relative">
                  <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-[#232323] text-white border border-[#333] focus:outline-none focus:ring-2 focus:ring-white text-base sm:text-lg font-light rounded-lg appearance-none"
                    style={{ colorScheme: 'white' }}
                    placeholder='--:--'
                  />
                  {/* {!time && (
                    <div className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 text-gray-400 text-base sm:text-lg pointer-events-none">
                      --:--
                    </div>
                  )} */}
                </div>
              </div>
              <input type="number" min="1" max="20" placeholder="Number of Guests" value={guests} onChange={(e) => setGuests(e.target.value)} className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-[#232323] text-white border border-[#333] focus:outline-none focus:ring-2 focus:ring-white text-base sm:text-lg font-light rounded-lg" />              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={!date || !time || !guests}
                className={`luxury-button w-full font-light py-3 sm:py-4 shadow-lg transition-colors text-base sm:text-lg md:text-xl rounded-lg ${!date || !time || !guests ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'bg-white text-black hover:bg-gray-100'}`}
                onClick={(e) => {
                  e.preventDefault();
                  if (date && time && guests) {
                    alert(`Dining reservation for ${guests} guests on ${date} at ${time} has been submitted.`);
                    setDate('');
                    setTime('');
                    setGuests('');
                  }
                }}
              >
                Reserve Dining
              </motion.button>
            </motion.form>
          ) : (
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-4 sm:gap-6 md:gap-8 items-stretch"
            >
              <select value={selectedAmenity} onChange={(e) => setSelectedAmenity(e.target.value)} className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-[#232323] text-white border border-[#333] focus:outline-none focus:ring-2 focus:ring-white text-base sm:text-lg font-light rounded-lg">
                <option value="">Select Amenity</option>
                {amenities.map(a => <option key={a} value={a}>{a}</option>)}
              </select>              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
                <div className="flex-1 relative">
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-[#232323] text-white border border-[#333] focus:outline-none focus:ring-2 focus:ring-white text-base sm:text-lg font-light rounded-lg appearance-none"
                    style={{ colorScheme: 'dark' }}
                  />
                  {/* {!date && (
                    <div className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 text-gray-400 text-base sm:text-lg pointer-events-none">
                      dd-mm-yyyy
                    </div>
                  )} */}
                </div>
                <div className="flex-1 relative">
                  <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-[#232323] text-white border border-[#333] focus:outline-none focus:ring-2 focus:ring-white text-base sm:text-lg font-light rounded-lg appearance-none"
                    style={{ colorScheme: 'dark' }}
                  />
                  {/* {!time && (
                    <div className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 text-gray-400 text-base sm:text-lg pointer-events-none">
                      --:--
                    </div>
                  )} */}
                </div>
              </div>
              <motion.button whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="luxury-button w-full bg-white text-black font-light py-3 sm:py-4 shadow-lg hover:bg-gray-100 transition-colors text-base sm:text-lg md:text-xl rounded-lg"
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
          className="flex-1 md:basis-1/3 flex flex-col justify-center items-center relative min-h-[240px] sm:min-h-[280px] md:min-h-[320px] mt-6 md:mt-0"
        >
          <div className="relative w-full h-[240px] sm:h-[280px] md:h-[320px] flex items-center justify-center">
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
        </motion.div>
      </div>
    </section>
  );
};

export default ReserveSection;