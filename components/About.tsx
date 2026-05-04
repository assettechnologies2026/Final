import React from 'react';

export default function AssetTechnologiesSection() {
  return (
    // Default background (white) for the whole section
    <main className="min-h-screen bg-white text-gray-900 font-sans p-6 md:p-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Division 1: Image/Logo */}
        <div className="flex justify-center items-center p-8 bg-gray-50 rounded-2xl h-full min-h-[400px]">
          {/* Custom SVG Logo Implementation */}
          <div className="w-full max-w-sm">
            <svg viewBox="0 0 400 400" className="w-full h-full fill-[#1a3db6]">
              <path d="M50 300 L180 50 L280 50 Q310 50 310 80 L310 120 L230 120 L230 150 L310 150 L310 180 L230 180 L230 210 L350 210 L400 300 H300 L240 180 L180 300 Z" />
              <circle cx="340" cy="120" r="15" fill="none" stroke="#1a3db6" strokeWidth="8" />
              <circle cx="380" cy="180" r="15" fill="none" stroke="#1a3db6" strokeWidth="8" />
            </svg>
          </div>
        </div>

        {/* Division 2: Text Content */}
        <div className="space-y-6 md:pr-12">
          {/* Subtle sub-header accent */}
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
            Company Overview
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tighter">
            About us
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed font-normal">
            Asset Technologies is a leading IT solutions provider delivering
            innovative and customized technology solutions to businesses.
            We focus on improving productivity, efficiency, and growth.
          </p>



        </div>

      </div>
    </main>
  );
}