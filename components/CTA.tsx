"use client";

export default function CTA() {
  return (
    <section
      className="relative w-full h-[200px] flex items-center"
      style={{
        backgroundImage: "url('/Banner.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center md:justify-between text-white text-center md:text-left">
        
        {/* Left Text */}
        <div>
          <h1 className="text-xl md:text-5xl font-bold mb-3 md:mb-4">
            Ready to Transform Your Business with Technology?
          </h1>

          <p className="text-sm md:text-xl">
            Just one call away:{" "}
            <a
              href="tel:+8411022703"
              className="underline hover:text-blue-400"
            >
              +84 1102 2703
            </a>
          </p>
        </div>

        {/* Button */}
        <a
          href="#contact"
          className="mt-4 md:mt-0 inline-block border border-white px-5 md:px-6 py-2 md:py-3 text-sm md:text-lg font-medium whitespace-nowrap hover:bg-white hover:text-black transition duration-300"
        >
          Book Free Consultation
        </a>

      </div>
    </section>
  );
}