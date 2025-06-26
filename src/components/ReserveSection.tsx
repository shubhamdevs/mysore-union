"use client";
import React, { useState } from 'react';
import { Calendar, Clock, Users, ChevronDown, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import ExperienceCarousel from './ExperienceCarousal';

// interface TabData {
//   id: string;
//   label: string;
//   isActive: boolean;
// }


const ReserveSection: React.FC = () => {

  const [activeTab, setActiveTab] = useState<'dining' | 'amenities'>('dining');
  const [selectedAmenity, setSelectedAmenity] = useState<string>('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
  });

  const amenityOptions = [
    'Pool',
    'Yoga Studio',
    'Squash Court',
    'Fitness Center',
    'Fine Dining',
    'Spa & Wellness',
    'Tennis Court',
    'Business Center'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { activeTab, formData, selectedAmenity });
  };



  return (
    <div className="min-h-screen ">


      <div className=" mx-auto pl-4 pr-6 py-8 lg:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 mb-6 tracking-tight" style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '0.04em' }}>
            RESERVE YOUR EXPERIENCE
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience luxury dining and premium amenities. Reserve your perfect moment with us.
          </p>
        </div>


        <div className="w-full max-w-7xl mx-auto  md:p-8">
          <div className="">
            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full "
            >
              <div className=" flex flex-col lg:flex-row gap-8 lg:gap-12 items-center bg-[rgba(12,12,16,0.72)]  bg-gradient-to-br from-white/5 via-slate-200/5 to-white/5 backdrop-blur-xl  rounded-3xl border border-white/10  shadow-2xl overflow-hidden">
                <div className="w-full lg:w-1/2 p-6 md:p-10">
                  {/* Tab Navigation */}
                  <div className="flex space-x-2 mb-8">
                    <button
                      onClick={() => setActiveTab('dining')}
                      className={cn(
                        "px-8 py-3 rounded-full font-medium text-sm transition-all duration-300 ease-out",
                        "border relative overflow-hidden group backdrop-blur-sm",
                        activeTab === 'dining'
                          ? "bg-white/20 text-white border-white/30 shadow-lg shadow-white/10"
                          : "text-gray-400 border-gray-600/30 hover:text-gray-200 hover:border-gray-500/50 hover:bg-white/10"
                      )}
                    >
                      <span className="relative z-10">Dining</span>
                      {activeTab === 'dining' && (
                        <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 animate-pulse" />
                      )}
                    </button>

                    <button
                      onClick={() => setActiveTab('amenities')}
                      className={cn(
                        "px-8 py-3 rounded-full font-medium text-sm transition-all duration-300 ease-out",
                        "border relative overflow-hidden group backdrop-blur-sm",
                        activeTab === 'amenities'
                          ? "bg-white/20 text-white border-white/30 shadow-lg shadow-white/10"
                          : "text-gray-400 border-gray-600/30 hover:text-gray-200 hover:border-gray-500/50 hover:bg-white/10"
                      )}
                    >
                      <span className="relative z-10">Amenities</span>
                      {activeTab === 'amenities' && (
                        <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 animate-pulse" />
                      )}
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {activeTab === 'amenities' && (
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          className={cn(
                            "w-full p-4 bg-gray-800/60 border border-gray-600/40 rounded-2xl",
                            "text-left text-gray-300 hover:border-gray-500/60 transition-all duration-200",
                            "flex items-center justify-between group hover:bg-gray-800/80",
                            isDropdownOpen && "border-gray-500/80 bg-gray-800/80"
                          )}
                        >
                          <div className="flex items-center space-x-3">
                            <MapPin className="w-5 h-5 text-gray-400 group-hover:text-gray-300" />
                            <span className={selectedAmenity ? "text-white" : "text-gray-400"}>
                              {selectedAmenity || "Select Amenity"}
                            </span>
                          </div>
                          <ChevronDown
                            className={cn(
                              "w-5 h-5 text-gray-400 transition-transform duration-200",
                              isDropdownOpen && "rotate-180"
                            )}
                          />
                        </button>

                        {isDropdownOpen && (
                          <div className="absolute top-full left-0 right-0 mt-2 z-20">
                            <div className="bg-gray-800 border border-gray-600/50 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm">
                              <div className="py-2">
                                {amenityOptions.map((option, index) => (
                                  <button
                                    key={option}
                                    type="button"
                                    onClick={() => {
                                      setSelectedAmenity(option);
                                      setIsDropdownOpen(false);
                                    }}
                                    className={cn(
                                      "w-full px-4 py-3 text-left text-gray-300 hover:bg-gray-700/50",
                                      "hover:text-white transition-colors duration-150",
                                      "border-b border-gray-700/30 last:border-b-0"
                                    )}
                                    style={{
                                      animationDelay: `${index * 50}ms`
                                    }}
                                  >
                                    {option}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Date and Time Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative group">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
                          <Calendar className="w-5 h-5 text-gray-400 group-hover:text-gray-300 transition-colors" />
                        </div>
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => handleInputChange('date', e.target.value)}
                          className={cn(
                            "w-full pl-12 pr-4 py-4 bg-gray-800/60 border border-gray-600/40 rounded-2xl",
                            "text-white placeholder-gray-400 focus:outline-none focus:border-gray-400/80",
                            "hover:border-gray-500/60 transition-all duration-200 hover:bg-gray-800/80",
                            "focus:bg-gray-800/90 focus:shadow-lg focus:shadow-black/20"
                          )}
                        />
                      </div>

                      <div className="relative group">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
                          <Clock className="w-5 h-5 text-gray-400 group-hover:text-gray-300 transition-colors" />
                        </div>
                        <input
                          type="time"
                          value={formData.time}
                          onChange={(e) => handleInputChange('time', e.target.value)}
                          className={cn(
                            "w-full pl-12 pr-4 py-4 bg-gray-800/60 border border-gray-600/40 rounded-2xl",
                            "text-white placeholder-gray-400 focus:outline-none focus:border-gray-400/80",
                            "hover:border-gray-500/60 transition-all duration-200 hover:bg-gray-800/80",
                            "focus:bg-gray-800/90 focus:shadow-lg focus:shadow-black/20"
                          )}
                        />
                      </div>
                    </div>

                    {/* Number of Guests - Only show in dining tab */}
                    {activeTab === 'dining' && (
                      <div className="relative group">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
                          <Users className="w-5 h-5 text-gray-400 group-hover:text-gray-300 transition-colors" />
                        </div>
                        <input
                          type="number"
                          min="1"
                          max="20"
                          value={formData.guests}
                          onChange={(e) => handleInputChange('guests', e.target.value)}
                          placeholder="Number of Guests"
                          className={cn(
                            "w-full pl-12 pr-4 py-4 bg-gray-800/60 border border-gray-600/40 rounded-2xl",
                            "text-white placeholder-gray-400 focus:outline-none focus:border-gray-400/80",
                            "hover:border-gray-500/60 transition-all duration-200 hover:bg-gray-800/80",
                            "focus:bg-gray-800/90 focus:shadow-lg focus:shadow-black/20"
                          )}
                        />
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className={cn(
                        "w-full mt-8 py-4 px-8 font-semibold rounded-2xl",
                        "bg-gradient-to-r from-white/15 via-white/20 to-white/15 text-white border border-white/20",
                        "hover:from-white/20 hover:via-white/25 hover:to-white/20 hover:border-white/30",
                        "active:from-white/25 active:via-white/30 active:to-white/25 active:border-white/40",
                        "transition-all duration-300 backdrop-blur-sm",
                        "shadow-lg hover:shadow-xl shadow-white/10 hover:shadow-white/20",
                        "transform hover:scale-[1.02] active:scale-[0.98]",
                        "focus:outline-none focus:ring-2 focus:ring-white/30",
                        "group relative overflow-hidden"
                      )}
                    >
                      <span className="relative z-10">
                        {activeTab === 'dining' ? 'Reserve Dining' : 'Reserve Amenity'}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </button>
                  </form>
                </div>
                {/* Carousel Section */}
                <div className="w-full lg:w-1/2 p-6 md:p-12 flex items-center justify-center ">
                  <ExperienceCarousel />
                </div>
              </div>
            </motion.div>


          </div>
        </div>
      </div>
    </div>
  );
};


export default ReserveSection;