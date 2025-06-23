"use client";
import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';


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
      {/* Mouse-following gradient */}
      < div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.03) 0%, rgba(0, 0, 0, 0) 50%)'
        }
        }
      />


      <div className="max-w-[90%] mx-auto my-8 ">
        {/* Headline outside the card, styled like reservation section */}
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 mb-12 tracking-tight text-center" style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '0.04em' }}>
          FREQUENTLY ASKED QUESTIONS
        </h1>
        {/* Glass-morphism card container */}
        {/* <div className="backdrop-blur-xl bg-gradient-to-br from-black/80 via-gray-900/60 to-gray-800/40 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-600/20"> */}
        <div className="
  backdrop-blur-xl bg-[rgba(12,12,16,0.72)] bg-gradient-to-br from-white/5 via-slate-200/5 to-white/5
  rounded-3xl
  p-8 md:p-12
  shadow-2xl
  border border-white/10
">
          {/* Accordion items */}
          <div className="space-y-4">
            {faqData.map((item) => (
              <div
                key={item.id}
                className="border border-gray-500/30 rounded-full overflow-hidden transition-all duration-300 hover:border-gray-400/50 hover:shadow-lg"
              >
                {/* Question button */}
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-5 md:px-8 md:py-6 text-left bg-gradient-to-r from-gray-700/20 to-gray-800/20 hover:from-gray-600/30 hover:to-gray-700/30 transition-all duration-300 active:scale-[0.99] group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white text-lg md:text-xl font-medium pr-4 group-hover:text-gray-100 transition-colors duration-200">
                      {item.question}
                    </span>
                    <ChevronDownIcon
                      className={`w-6 h-6 text-gray-300 transition-all duration-300 flex-shrink-0 group-hover:text-white ${openItem === item.id ? 'rotate-180' : 'rotate-0'
                        }`}
                    />
                  </div>
                </button>

                {/* Answer content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openItem === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <div className="px-6 py-5 md:px-8 md:py-6 bg-gradient-to-r from-gray-800/10 to-gray-900/10 border-t border-gray-600/20">
                    <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom decorative element */}
          <div className="mt-12 text-center">
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