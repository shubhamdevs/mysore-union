'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BookingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
    // TODO: Integrate Eleven Labs widget here
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleWidget}
        className="luxury-button fixed bottom-8 right-8 z-50 shadow-lg"
        style={{ minWidth: 56, minHeight: 56 }}
      >
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <span className="font-medium">Book a Table</span>
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-8 z-50 bg-white rounded-lg shadow-xl p-6 w-96"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Book Your Table</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            
            <div id="eleven-labs-widget">
              {/* Eleven Labs Widget will be mounted here */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BookingButton; 