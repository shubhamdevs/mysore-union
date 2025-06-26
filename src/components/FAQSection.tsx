"use client";
import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { cn } from '..//lib/utils'; // Import cn function from your utils

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [{
  id: 1,
  question: "What are your operating hours?",
  answer: "We are open daily from 6:00 AM to 10:00 PM. Our dining facilities operate from 7:00 AM to 11:00 PM."
},
{
  id: 2,
  question: "Do I need a membership to access the facilities?",
  answer: "Yes, Mysore Union is a members-only club. We offer various membership tiers to suit different needs and preferences."
},
{
  id: 3,
  question: "What amenities are included in the membership?",
  answer: "Members have access to our state-of-the-art fitness center, swimming pool, squash courts, yoga studio, and fine dining facilities. Additional services like personal training and spa treatments are available at an extra cost."
},
{
  id: 4,
  question: "How can I book a dining reservation?",
  answer: "You can make dining reservations through our website, mobile app, or by calling our concierge service. We recommend booking at least 24 hours in advance for peak hours."
},
{
  id: 5,
  question: "Is there parking available?",
  answer: "Yes, we provide complimentary valet parking for all members and their guests. Self-parking is also available in our secure underground parking facility."
}
];

const FAQSection: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="min-h-screen p-4 md:p-8">

      <div className="max-w-[90%] mx-auto my-8 ">
        {/* Headline outside the card, styled like reservation section */}
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 mb-12 tracking-tight text-center" style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '0.04em' }}>
          FREQUENTLY ASKED QUESTIONS
        </h1>
        {/* Glass-morphism card container */}
        {/* <div className="backdrop-blur-xl bg-gradient-to-br from-black/80 via-gray-900/60 to-gray-800/40 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-600/20"> */}
        <div className="bg-transparent">
          {/* Accordion items */}
          <div className="space-y-0 divide-y divide-gray-700/40">
            {faqData.map((item) => (
              <div key={item.id}>
                <button
                  onClick={() => toggleItem(item.id)}
                  className={cn(
                    "w-full flex items-center justify-between py-5 md:py-6 text-left transition duration-200 group focus:outline-none",
                    openItem === item.id
                      ? "font-semibold text-white"
                      : "text-gray-200",
                    "hover:scale-[1.03] active:scale-[0.98]"
                  )}
                  aria-expanded={openItem === item.id}
                  aria-controls={`faq-answer-${item.id}`}
                  style={{ transition: 'transform 0.2s, color 0.3s' }}
                >
                  <span className="text-base md:text-lg pr-4 transition-colors duration-200">{item.question}</span>
                  <ChevronDownIcon
                    className={cn(
                      "w-6 h-6 text-gray-400 transition-transform duration-300 flex-shrink-0 group-hover:text-amber-200",
                      openItem === item.id ? "rotate-180 text-amber-200" : "rotate-0"
                    )}
                  />
                </button>
                <div
                  id={`faq-answer-${item.id}`}
                  className={cn(
                    "overflow-hidden transition-all duration-500 ease-in-out",
                    openItem === item.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  )}
                  style={{
                    background: openItem === item.id ? 'rgba(30,30,36,0.92)' : 'none',
                    borderRadius: openItem === item.id ? '1rem' : '0',
                    marginBottom: openItem === item.id ? '1.5rem' : '0',
                    transition: 'background 0.3s, border-radius 0.3s, max-height 0.5s, opacity 0.5s',
                  }}
                >
                  <div className={cn(
                    openItem === item.id ? "px-2 md:px-6 py-4 md:py-6" : "px-2 md:px-6 py-0"
                  )}>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                      {openItem === item.id && item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom decorative element */}
          <div className="mt-6 text-center">
            <div className="inline-block w-24 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent rounded-full opacity-50"></div>
            <p className="mt-6 text-gray-300 text-base md:text-lg text-center">
              Have more questions? Please <a href="/contact" className="underline hover:text-amber-200 transition-colors">contact us</a> for further assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;