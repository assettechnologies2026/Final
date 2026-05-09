"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Award } from 'lucide-react';

const certificates = [
  { id: 2, src: 'Certificates/ASSET TECHNOLOGIES QMS FINAL 560.webp', title: 'ISO 9001:2015 Quality Management' },
  { id: 3, src: 'Certificates/ASSET TECHNOLOGIES_certificate.webp', title: 'Dell Loyalty Partner 2026' },
  { id: 1, src: 'Certificates/Asset -Mumbai.webp', title: 'AOC Authorized Partner 2024' },
  { id: 4, src: 'Certificates/Dynamic_Authorization_Letter.webp', title: 'Dynamic Retail Partner' },
  { id: 5, src: 'Certificates/Jabra_Asset Technologies_Authorised Certificate.webp', title: 'Jabra Authorized Partner 2025-26' },
  { id: 6, src: 'Certificates/LENOVO CERTIFICATION.webp', title: 'Lenovo Evolve Partner 2025' },
];

export default function Partners() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  return (
    /* 
       ADAPTIVE: Changed bg-slate-950 to bg-slate-50 (light) and dark:bg-slate-950.
       ADAPTIVE: Changed text-white to text-slate-900 (light) and dark:text-white.
    */
    <div className="h-screen w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white flex flex-col items-center justify-center p-6 overflow-hidden transition-colors duration-300">

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center pt-8 mb-4"
      >
        <div className="flex justify-center mb-2">
          <Award className="w-10 h-10 text-yellow-600 dark:text-yellow-500 drop-shadow-[0_0_10px_rgba(234,179,8,0.4)]" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 dark:from-yellow-200 dark:via-yellow-500 dark:to-yellow-200 bg-clip-text text-transparent">
          Asset Technologies
        </h1>
        {/* ADAPTIVE: Subtext color */}
        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base mt-1">Verified Certifications & Partnerships</p>
      </motion.div>

      {/* Carousel Container */}
      <div className="relative w-full max-w-4xl h-[55vh] md:h-[60vh] flex items-center justify-center perspective-1000">
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.9, rotateY: 20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute w-full h-full flex flex-col items-center justify-center"
          >
            {/* ADAPTIVE: Shadow and border adjust slightly for light theme visibility */}
            <div className="relative group shadow-[0_0_50px_rgba(234,179,8,0.15)] dark:shadow-[0_0_50px_rgba(234,179,8,0.1)] rounded-lg border border-yellow-500/30 dark:border-yellow-500/20 overflow-hidden bg-white h-full">
              <div className="absolute -inset-1 bg-yellow-500/10 blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>

              <img
                src={certificates[currentIndex].src}
                alt={certificates[currentIndex].title}
                className="relative h-full w-auto object-contain p-1"
              />
            </div>

            <motion.p
              className="mt-6 text-base md:text-lg font-semibold text-yellow-600 dark:text-yellow-500 uppercase tracking-widest text-center px-4"
            >
              {certificates[currentIndex].title}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons - ADAPTIVE: Backdrop and border colors */}
        <button
          onClick={prevSlide}
          className="absolute left-0 md:-left-20 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full border border-yellow-500/50 bg-white/20 dark:bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-600 dark:text-yellow-500 transition-all z-20 backdrop-blur-md"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 md:-right-20 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full border border-yellow-500/50 bg-white/20 dark:bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-600 dark:text-yellow-500 transition-all z-20 backdrop-blur-md"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex gap-3 mt-8 pb-4">
        {certificates.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            /* ADAPTIVE: Dots changed from bg-slate-800 to bg-slate-300 in light mode */
            className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentIndex ? "w-10 bg-yellow-500" : "w-2 bg-slate-300 dark:bg-slate-800"
              }`}
          />
        ))}
      </div>
    </div>
  );
}