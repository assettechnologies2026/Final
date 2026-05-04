"use client";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import { useState } from "react";
import { Menu, X } from "lucide-react";


export default function Footer() {
  const [open, setOpen] = useState(false);
  const iconStyle =
    "w-16 h-16 bg-gray-700 text-white rounded-full flex items-center justify-center text-xl transition-transform duration-300 hover:scale-125 cursor-pointer";

  return (
    <footer className="w-full">
      {/* Top Section */}
      <div className="bg-gray-200 py-12 px-10 flex flex-col md:flex-row justify-between items-center md:items-start">

        {/* Left Info */}
        <div className="space-y-4 text-sm">
          <p>
            <span className="text-blue-700 font-semibold">ADDRESS:</span>{" "}
            <span className="text-gray-900">Grant Road, Mumbai</span>
          </p>
          <p>
            <span className="text-blue-700 font-semibold">PHONE:</span>{" "}
            <span className="text-gray-900">+84 1102 2703</span>
          </p>
          <p>
            <span className="text-blue-700 font-semibold">EMAIL:</span>{" "}
            <span className="text-gray-900">info@assettechnologies.co.in</span>
          </p>
        </div>

        {/* Social Icons */}
        <div className="mt-8 md:mt-0 text-center">
          <p className="text-blue-700 font-semibold mb-4">SOCIAL:</p>

          <div className="flex items-center justify-center gap-6 flex-wrap">

            <div className={iconStyle}>
              <FaFacebookF />
            </div>

            <div className={iconStyle}>
              <FaLinkedinIn />
            </div>

            <div className={iconStyle}>
              <a
                href="https://wa.me/919284232669?text=Hi%20I%20want%20to%20book%20a%20consultation"
                target="_blank"
                rel="noopener noreferrer"
              ><FaWhatsapp /></a>
            </div>

            <div className={iconStyle}>
              <a
                href="https://instagram.com/assettechnologies"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500"
              ><FaInstagram /></a>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-blue-800 text-white py-4 text-center">
        <div className="flex flex-wrap justify-center items-center text-sm md:text-lg">

          <a href="#home" className="px-3 border-r border-white/40">Home</a>
          <a href="#services" className="px-3 border-r border-white/40">Services</a>
          <a href="#about" className="px-3 border-r border-white/40">About Us</a>
          <a href="#projects" className="px-3 border-r border-white/40">Projects</a>
          <a href="#contact" className="px-3">Contact Us</a>

        </div>
      </div>
    </footer>
  );
}