"use client";
import React from "react";
import Image from "next/image";
import { FaProjectDiagram, FaUsers, FaCogs, FaAward } from "react-icons/fa";

const statsData = [
  {
    id: 1,
    number: "500+",
    text: "IT Products & Solutions Delivered",
    top: "40px",
    left: "40px",
    icon: <FaProjectDiagram />,
  },
  {
    id: 2,
    number: "100%",
    text: "End-to-End IT Lifecycle Support",
    top: "0px",
    left: "260px",
    icon: <FaUsers />,
  },
  {
    id: 3,
    number: "4+",
    text: "Core Service Verticals Covered",
    top: "200px",
    left: "260px",
    icon: <FaCogs />,
  },
  {
    id: 4,
    number: "10+",
    text: "Technology Domains Expertise",
    top: "320px",
    left: "60px",
    icon: <FaAward />,
  },
];

export default function Stats() {
  return (
    <section className="relative w-full py-16 px-4 overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Aboutus.png" // put your image inside public folder
          alt="Background"
          fill
          className="object-cover"
        />

        {/* 50% Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* 📱 MOBILE GRID */}
        <div className="grid grid-cols-2 gap-4 w-full lg:hidden">
          {statsData.map((card) => (
            <div
              key={card.id}
              className="bg-white/20 backdrop-blur-md p-4 rounded-xl shadow-md border border-white/20 flex flex-col gap-2 transition"
            >
              <div className="text-blue-400 text-lg">
                {card.icon}
              </div>

              <h3 className="text-2xl font-bold text-white">
                {card.number}
              </h3>

              <div className="border-l-4 border-orange-400 pl-2">
                <p className="text-gray-200 text-xs font-medium leading-tight">
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
              className="absolute bg-white/10 backdrop-blur-lg p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] w-[210px] z-10 border border-white/10 hover:scale-105 transition duration-300"
              style={{
                top: card.top,
                left: card.left,
              }}
            >
              <div className="text-blue-400 text-xl mb-1">
                {card.icon}
              </div>

              <h3 className="text-4xl font-bold text-white mb-1">
                {card.number}
              </h3>

              <div className="flex items-center gap-2 border-l-4 border-orange-400 pl-3">
                <p className="text-gray-200 text-sm font-medium leading-tight">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ✨ EXPERTISE CARD */}
        <div className="max-w-md w-full">
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl text-center lg:text-left transition">

            <h2 className="text-blue-400 text-3xl md:text-5xl font-black mb-4 uppercase">
              Expertise
            </h2>

            <p className="text-gray-200 text-sm md:text-lg leading-relaxed">
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