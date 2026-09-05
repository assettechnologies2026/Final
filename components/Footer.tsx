
"use client";

import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  const iconStyle =
    "w-16 h-16 bg-gray-700 text-white rounded-full flex items-center justify-center text-xl transition-transform duration-300 hover:scale-125 cursor-pointer";

  return (
    <footer className="w-full">

      {/* ================= TOP SECTION ================= */}
      <div className="bg-gray-200 py-12 px-6 md:px-10 flex flex-col lg:flex-row justify-between gap-10">

        {/* ================= LEFT INFO ================= */}
        <div className="space-y-4 text-sm lg:w-1/2">

          {/* Address */}
          <div className="flex flex-col sm:flex-row leading-7 text-gray-900">
            <span className="text-blue-700 font-semibold min-w-max mr-2">
              ADDRESS:
            </span>

            <p>
              Al Madina Building, P Nagare Ln, Pannalal Terrace,
              Grant Road East, Bharat Nagar, Grant Road,
              Mumbai, Maharashtra 400007
            </p>
          </div>

          {/* Phone */}
          <p>
            <span className="text-blue-700 font-semibold">
              PHONE:
            </span>{" "}
            <span className="text-gray-900">
              +91 99871 20290
            </span>
          </p>

          {/* Email */}
          <p>
            <span className="text-blue-700 font-semibold">
              EMAIL:
            </span>{" "}
            <span className="text-gray-900">
              sales@assettechnologies.co.in
            </span>
          </p>

          {/* ================= SOCIAL ICONS ================= */}
          <div className="pt-4">
            <p className="text-blue-700 font-semibold mb-4">
              SOCIAL:
            </p>

            <div className="flex items-center gap-6 flex-wrap">

              {/* Facebook */}
              <div className={iconStyle}>
                <a
                  href="https://www.facebook.com/people/Asset-Technologies/61560926654624"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
              </div>

              {/* WhatsApp */}
              <div className={iconStyle}>
                <a
                  href="https://wa.me/919987120290?text=Hi%20I%20want%20to%20book%20a%20consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
              </div>

              {/* Instagram */}
              <div className={iconStyle}>
                <a
                  href="https://instagram.com/assettechnologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:text-pink-500"
                >
                  <FaInstagram />
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* ================= GOOGLE MAP ================= */}
        <div className="w-full lg:w-1/2">

          <p className="text-blue-700 font-semibold mb-4">
            FIND US:
          </p>

          <div className="w-full h-[300px] rounded-lg overflow-hidden shadow-md">

            <iframe
              src="https://www.google.com/maps?q=Al%20Madina%20Building,%20P%20Nagare%20Ln,%20Grant%20Road%20East,%20Mumbai,%20Maharashtra%20400007&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Asset Technologies Location"
            />

          </div>

          {/* Open Google Maps */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Al+Madina+Building,+P+Nagare+Ln,+Grant+Road+East,+Mumbai,+Maharashtra+400007"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-blue-700 font-semibold hover:text-blue-900 transition-colors"
          >
            📍 Open in Google Maps →
          </a>

        </div>

      </div>

      {/* ================= BOTTOM NAVIGATION ================= */}
      <div className="bg-blue-800 text-white py-4 text-center">

        <div className="flex flex-wrap justify-center items-center text-sm md:text-lg">

          <a
            href="#home"
            className="px-3 border-r border-white/40 hover:text-gray-200 transition-colors"
          >
            Home
          </a>

          <a
            href="#services"
            className="px-3 border-r border-white/40 hover:text-gray-200 transition-colors"
          >
            Services
          </a>

          <a
            href="#about"
            className="px-3 border-r border-white/40 hover:text-gray-200 transition-colors"
          >
            About Us
          </a>

          <a
            href="#projects"
            className="px-3 border-r border-white/40 hover:text-gray-200 transition-colors"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="px-3 hover:text-gray-200 transition-colors"
          >
            Contact Us
          </a>

        </div>

      </div>

    </footer>
  );
}

