'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  quote: string;
  image: string;
}

const team: TeamMember[] = [
  {
    name: "John Doe",
    role: "Founder & CEO",
    quote: "Building Mysore's Future, One Experience at a Time",
    image: "/images/team/ceo.jpg"
  },
  {
    name: "Jane Smith",
    role: "Chief Experience Officer",
    quote: "Crafting Moments That Last a Lifetime",
    image: "/images/team/cxo.jpg"
  },
  {
    name: "Mike Johnson",
    role: "Head of Operations",
    quote: "Excellence is Not an Act, But a Habit",
    image: "/images/team/operations.jpg"
  }
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16"
        >
          People Behind Mysore Union
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="relative mb-6 mx-auto w-64 h-64 overflow-hidden rounded-full bg-gray-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-4">{member.role}</p>
              
              <blockquote className="italic text-gray-800 max-w-xs mx-auto">
                "{member.quote}"
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team; 