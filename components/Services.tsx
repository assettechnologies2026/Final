"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect } from "react";

export default function WhyChooseUs() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: false,
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  const cards = [
    {
      img: "/IT Hardware.webp",
      title: "IT Hardware",
      desc: "Servers, desktops, laptops, storage systems, networking equipment, and workstations.",
      dark: false,
    },
    {
      img: "/IT SERVICES 1.webp",
      title: "Software Solution",
      desc: "CRM, ERP, cybersecurity solutions, operating systems, and custom software development.",
      dark: true,
    },
    {
      img: "/IT PERIPHERALS.webp",
      title: "IT Peripherals",
      desc: "Printers, scanners, monitors, projectors, keyboards, mice, audiovisual equipment, and accessories.",
      dark: false,
    },
    {
      img: "/Forensic Workstation.webp",
      title: "Forensic Workstation & Enterprise Servers",
      desc: "High-performance systems for digital forensics, data recovery, investigation analysis, and secure data processing.",
      dark: true,
    },
  ];

  return (
    <div className="w-full px-4 py-10">
      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 ml-2 md:ml-0 py-4"> {/* Added py-4 to prevent scale clipping */}
          {cards.map((card, index) => {
            const isActive = activeCard === index;

            return (
              <div
                key={index}
                className="flex-[0_0_80%] md:flex-[0_0_25%] flex justify-center px-2"
              >
                {/* Card Container */}
                <div
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                  onClick={() =>
                    setActiveCard(activeCard === index ? null : index)
                  }
                  className={`w-[252px] h-[500px] flex flex-col rounded-2xl border-2 shadow-xl cursor-pointer transition-all duration-500 group overflow-hidden isolate ${
                    isActive 
                      ? "scale-105 border-blue-500 z-10" 
                      : "border-gray-200 hover:scale-105 hover:border-blue-400"
                  } bg-white`}
                >
                  {/* Image Section */}
                  <div
                    className={`relative w-full transition-all duration-500 overflow-hidden ${
                      isActive ? "h-[30%]" : "h-[70%]"
                    } ${card.dark ? "bg-white" : "bg-[#001f3f]"}`}
                  >
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Content Section */}
                  <div
                    className={`transition-all duration-500 flex flex-col justify-center items-center text-center px-5 flex-grow ${
                      isActive ? "h-[70%]" : "h-[30%]"
                    } ${card.dark ? "bg-[#001f3f]" : "bg-white"}`}
                  >
                    {/* Title */}
                    <h3
                      className={`font-bold transition-all duration-500 ${
                        isActive ? "text-xl mb-4 text-blue-400" : "text-sm"
                      } ${
                        card.dark && !isActive ? "text-white" : "text-[#001f3f]"
                      } ${isActive && !card.dark ? "text-blue-600" : ""}`}
                    >
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p
                      className={`transition-all duration-500 ${
                        isActive
                          ? "text-sm opacity-100 leading-relaxed"
                          : "text-xs opacity-0 h-0 overflow-hidden" 
                      } ${card.dark ? "text-gray-200" : "text-gray-700"}`}
                    >
                      {card.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dots (Mobile Only) */}
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