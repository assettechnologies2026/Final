"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect } from "react";

export default function WhyChooseUs() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: false,
    // Optional: add skipSnaps for smoother scrolling on mobile
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  const cards = [
    { img: "/IT Hardware.webp", title: "IT Hardware", dark: false },
    { img: "/IT SERVICES 1.webp", title: "IT Services", dark: true },
    { img: "/IT PERIPHERALS.webp", title: "IT Peripherals", dark: false },
    { img: "/Forensic Workstation.webp", title: "Forensic Workstation/ Servers", dark: true },
  ];

  return (
    <div className="w-full px-4 py-10">
      
      {/* Carousel Container */}
      <div className="overflow-hidden" ref={emblaRef}>
        {/* Solution 1: Added gap between slides (gap-4) and a slight margin start (ml-2) for mobile air */}
        <div className="flex gap-4 ml-2 md:ml-0">
          {cards.map((card, index) => (
            <div
              key={index}
              // Solution 1: Added px-2 to ensure cards don't touch when scrolling
              className="flex-[0_0_80%] md:flex-[0_0_25%] flex justify-center px-2"
            >
              <div className="w-[252px] h-[500px] flex flex-col overflow-hidden rounded-xl shadow-lg border border-gray-200 transition-transform duration-300">
                
                {/* Image */}
                <div className={`relative h-[70%] w-full ${card.dark ? "bg-white" : "bg-[#001f3f]"}`}>
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div
                  className={`h-[30%] p-4 flex flex-col justify-center items-center text-center ${
                    card.dark ? "bg-[#001f3f]" : "bg-white"
                  }`}
                >
                  <h3 className={`font-semibold text-sm ${card.dark ? "text-white" : "text-[#001f3f]"}`}>
                    {card.title}
                  </h3>
                  <p className={`text-xs mt-1 ${card.dark ? "text-blue-200" : "text-[#001f3f]"}`}>
                    Short description goes here.
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Solution 2: Added md:hidden to hide dots on laptop size screens */}
      <div className="flex justify-center mt-8 gap-2 md:hidden">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex ? "bg-blue-600 w-6" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}