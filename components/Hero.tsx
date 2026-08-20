"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    image: "/Banner1.webp",
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
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative w-full">

      {/* ================= BANNER ================= */}
      {/* Subtracting header height (e.g. 80px) so the bottom never overflows the screen */}
      <div className="relative w-full sm:h-[calc(100vh-80px)] overflow-hidden">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={`Banner ${index + 1}`}
            className={`
              w-full
              h-auto
              sm:h-full
              object-cover
              block
              transition-opacity
              duration-1000
              ease-in-out
              ${
                current === index
                  ? "opacity-100"
                  : "opacity-0 absolute inset-0"
              }
            `}
          />
        ))}

        {/* ================= PC BUTTONS ================= */}
        {/* Adjusted bottom positions slightly higher to account for taskbars/browser UI */}
        <div
          className="
            hidden
            sm:flex
            absolute
            bottom-6
            md:bottom-8
            lg:bottom-10
            left-1/2
            -translate-x-1/2
            items-center
            justify-center
            gap-3
            md:gap-4
            w-full
            px-6
            z-10
          "
        >
          {/* Consultation */}
          <a
            href="#contact"
            className="
              bg-white
              text-black
              px-6
              md:px-8
              py-2.5
              md:py-3
              rounded-md
              font-medium
              text-sm
              md:text-base
              hover:bg-blue-600
              hover:text-white
              transition-all
              duration-300
              text-center
              whitespace-nowrap
            "
          >
            Get Free Consultation
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919284232669?text=Hi%20I%20want%20to%20book%20a%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="
              border
              border-white
              text-white
              px-6
              md:px-8
              py-2.5
              md:py-3
              rounded-md
              font-medium
              text-sm
              md:text-base
              hover:border-green-400
              hover:text-green-400
              transition-all
              duration-300
              text-center
              whitespace-nowrap
            "
          >
            WhatsApp
          </a>
        </div>

        {/* ================= PC DOTS ================= */}
        <div
          className="
            hidden
            sm:flex
            absolute
            bottom-20
            md:bottom-24
            lg:bottom-28
            left-1/2
            -translate-x-1/2
            items-center
            justify-center
            gap-2
            md:gap-3
            z-10
          "
        >
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`
                w-2.5
                h-2.5
                md:w-3
                md:h-3
                rounded-full
                transition-all
                duration-300
                ${
                  current === index
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white"
                }
              `}
            />
          ))}
        </div>
      </div>

      {/* ================= PHONE BUTTONS ================= */}
      <div
        className="
          flex
          sm:hidden
          flex-col
          items-center
          justify-center
          gap-3
          w-full
          px-5
          py-6
          bg-black
        "
      >
        {/* Consultation */}
        <a
          href="#contact"
          className="
            w-full
            max-w-[320px]
            bg-white
            text-black
            px-6
            py-3
            rounded-md
            font-medium
            text-sm
            text-center
            hover:bg-blue-600
            hover:text-white
            transition-all
            duration-300
          "
        >
          Get Free Consultation
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919284232669?text=Hi%20I%20want%20to%20book%20a%20consultation"
          target="_blank"
          rel="noopener noreferrer"
          className="
            w-full
            max-w-[320px]
            border
            border-white
            bg-black
            text-white
            px-6
            py-3
            rounded-md
            font-medium
            text-sm
            text-center
            hover:border-green-400
            hover:text-green-400
            transition-all
            duration-300
          "
        >
          WhatsApp
        </a>

        {/* Phone Dots */}
        <div className="flex items-center justify-center gap-3 pt-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`
                w-2.5
                h-2.5
                rounded-full
                transition-all
                duration-300
                ${
                  current === index
                    ? "bg-white scale-125"
                    : "bg-gray-400"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}