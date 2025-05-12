"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "What are your operating hours?",
    answer: "We are open daily from 6:00 AM to 10:00 PM. Our dining facilities operate from 7:00 AM to 11:00 PM."
  },
  {
    question: "Do I need a membership to access the facilities?",
    answer: "Yes, Mysore Union is a members-only club. We offer various membership tiers to suit different needs and preferences."
  },
  {
    question: "What amenities are included in the membership?",
    answer: "Members have access to our state-of-the-art fitness center, swimming pool, squash courts, yoga studio, and fine dining facilities. Additional services like personal training and spa treatments are available at an extra cost."
  },
  {
    question: "How can I book a dining reservation?",
    answer: "You can make dining reservations through our website, mobile app, or by calling our concierge service. We recommend booking at least 24 hours in advance for peak hours."
  },
  {
    question: "Is there parking available?",
    answer: "Yes, we provide complimentary valet parking for all members and their guests. Self-parking is also available in our secure underground parking facility."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="w-full mx-auto my-32 px-4 py-20 bg-[#181818] rounded-3xl shadow-2xl border border-[#232323]">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-[22px] font-normal text-center mb-8 font-host-grotesk text-gold" 
        style={{ color: 'white', letterSpacing: '0.04em' }}
      >
        FREQUENTLY ASKED QUESTIONS
      </motion.h2>
      <div className="divide-y divide-[#232323] flex flex-col faq-list">
        {faqs.map((faq, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="py-3"
          >
            <motion.button
              className="w-full text-left flex justify-between items-center font-light text-white focus:outline-none px-2 font-host-grotesk luxury-button faq-question"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              whileHover={{ x: 5 }}
            >
              {faq.question}
              <motion.span 
                className="ml-6 text-white transition-transform duration-300"
                animate={{ rotate: openIndex === i ? 90 : 0 }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </motion.span>
            </motion.button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ 
                height: openIndex === i ? 'auto' : 0,
                opacity: openIndex === i ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="text-white/80 leading-relaxed px-2 font-light font-montserrat faq-answer">
                {faq.answer}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection; 