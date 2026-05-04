"use client";
import React from "react";
import { FaProjectDiagram, FaUsers, FaCogs, FaAward } from "react-icons/fa";

const statsData = [
  { id: 1, number: "500+", text: "IT Products & Solutions Delivered", top: "40px", left: "40px", icon: <FaProjectDiagram /> },
  { id: 2, number: "100%", text: "End-to-End IT Lifecycle Support", top: "0px", left: "260px", icon: <FaUsers /> },

  // ✅ FIXED POSITIONS
  { id: 3, number: " 4+", text: "Core Service Verticals Covered", top: "200px", left: "260px", icon: <FaCogs /> },
  { id: 4, number: "10+", text: "Technology Domains Expertise", top: "320px", left: "60px", icon: <FaAward /> },
];

export default function Stats() {
  return (
    <section className="w-full bg-gray-100 py-16 px-4">

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* 📱 MOBILE GRID */}
        <div className="grid grid-cols-2 gap-4 w-full lg:hidden">
          {statsData.map((card) => (
            <div
              key={card.id}
              className="bg-white p-4 rounded-xl shadow-md border border-gray-100 flex flex-col gap-2"
            >
              <div className="text-blue-600 text-lg">{card.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900">
                {card.number}
              </h3>
              <div className="border-l-4 border-orange-400 pl-2">
                <p className="text-gray-500 text-xs font-medium leading-tight">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 💻 DESKTOP FLOATING CARDS */}
        <div className="relative w-[500px] h-[520px] shrink-0 hidden lg:block">
          {statsData.map((card) => (
            <div
              key={card.id}
              className="absolute bg-white p-5 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] w-[210px] z-10 border border-gray-50 hover:scale-105 transition"
              style={{
                top: card.top,
                left: card.left,
              }}
            >
              <div className="text-blue-600 text-xl mb-1">
                {card.icon}
              </div>

              <h3 className="text-4xl font-bold text-[#1d2129] mb-1">
                {card.number}
              </h3>

              <div className="flex items-center gap-2 border-l-4 border-orange-400 pl-3">
                <p className="text-gray-500 text-sm font-medium leading-tight">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ✨ EXPERTISE CARD */}
        <div className="max-w-md w-full">
          <div className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl p-6 md:p-8 shadow-xl text-center lg:text-left">
            
            <h2 className="text-[#2b44b1] text-3xl md:text-5xl font-black mb-4 uppercase">
              Expertise
            </h2>

            <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
              Experienced team delivering advanced IT solutions with the latest
              technologies, ensuring scalability, performance, and innovation
              for your business growth.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}