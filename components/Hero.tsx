"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    image: "/Banner1.webp",
    title: "Cutting Edge IT Solutions That Power Your Business Growth",
    description:
      "From hardware infrastructure to CCTV security, forensic workstations, and enterprise servers.",
  },
  {
    image: "/Banner2.webp",
  },
  {
    image: "/Banner3.webp",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden"
    >
      {/* Background Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              current === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          />
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        <div className="max-w-4xl text-center text-white">
          {slides[current].title && (
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {slides[current].title}
            </h1>
          )}

          {slides[current].description && (
            <p className="mt-6 text-base md:text-lg text-gray-200">
              {slides[current].description}
            </p>
          )}
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-40 flex justify-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                current === index
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>

        {/* Buttons - Raised Above Bottom */}
        <div className="absolute bottom-25 left-1/2 -translate-x-1/2 flex flex-col md:flex-row gap-4">
          <a
            href="#contact"
            className="bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 text-center whitespace-nowrap"
          >
            Get Free Consultation
          </a>

          <a
            href="https://wa.me/919284232669?text=Hi%20I%20want%20to%20book%20a%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white px-8 py-3 rounded-md font-medium hover:border-green-400 hover:text-green-400 text-white transition-all duration-300 text-center whitespace-nowrap"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}