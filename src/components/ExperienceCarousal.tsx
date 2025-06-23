import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Experience {
    title: string;
    desc: string;
    img: string;
}

const amenities = [
    "Pool", "Yoga Studio", "Squash Court", "Fitness Center", "Fine Dining"
];

const experiences = [
    { title: "Poolside Dining", desc: "Enjoy gourmet meals by the pool.", img: "/images/amenities/Restaurant.jpg" },
    { title: "Yoga Retreat", desc: "Find your zen in our serene studio.", img: "/images/amenities/SwimmingPool2.jpg" },
    { title: "Squash Challenge", desc: "Compete or play for fun.", img: "/images/amenities/squash.jpg" },
    { title: "Luxury Fitness", desc: "State-of-the-art equipment and trainers.", img: "/images/amenities/gym5.jpg" },
];

const ExperienceCarousel: React.FC = () => {
    const [carouselIdx, setCarouselIdx] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCarouselIdx((prev) => (prev + 1) % experiences.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            viewport={{ once: true }}
            className="flex-1 md:basis-1/3 flex flex-col justify-center items-center relative min-h-[240px] sm:min-h-[280px] md:min-h-[320px] mt-6 md:mt-0"
        >
            <div className="relative w-full h-[240px] sm:h-[280px] md:h-[320px] flex items-center justify-center">
                {experiences.map((exp, i) => (
                    <motion.div
                        key={exp.title}
                        animate={{
                            opacity: i === carouselIdx ? 1 : 0,
                            zIndex: i === carouselIdx ? 20 : 10
                        }}
                        transition={{ duration: 0.5 }}
                        className="absolute left-0 top-0 w-full h-full"
                        style={{
                            boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18) overflow-hidden',
                            borderRadius: '1.5rem',
                            background: '#232323',
                            border: '1.5px solid #333',
                        }}
                    >
                        <img
                            src={exp.img}
                            alt={exp.title}
                            className="w-full h-full object-cover rounded-[1.5rem]"
                            loading={i === 0 ? "eager" : "lazy"}
                        />
                        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-[1.5rem]">
                            <h3 className="text-white text-lg sm:text-xl font-medium">{exp.title}</h3>
                            <p className="text-white/80 text-sm sm:text-base mt-1">{exp.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Carousel Indicators */}
            <div className="flex space-x-2 mt-4">
                {experiences.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCarouselIdx(i)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${i === carouselIdx
                            ? 'bg-white shadow-lg shadow-white/30'
                            : 'bg-gray-600 hover:bg-gray-500'
                            }`}
                    />
                ))}
            </div>
        </motion.div>
    );
};

export default ExperienceCarousel;