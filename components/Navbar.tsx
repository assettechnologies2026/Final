"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-slate-50 text-black dark:bg-black dark:text-white fixed top-0 z-50 transition-colors duration-300">
      
      {/* Top Bar */}
      <div className="flex items-center justify-between px-8 py-4">
        
        {/* Logo */}
        <a href="#home" className="flex flex-col items-start leading-tight">
          
          {/* Light Theme Logo */}
          <img
            src="/LogoB.png"
            alt="logo"
            className="h-14 block dark:hidden"
          />

          {/* Dark Theme Logo */}
          <img
            src="/LogoW.png"
            alt="logo"
            className="h-14 hidden dark:block"
          />

        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-lg">
          <a href="#home" className="hover:text-blue-400">Home</a>
          <a href="#services" className="hover:text-blue-400">Services</a>
          <a href="#about" className="hover:text-blue-400">About Us</a>
          <a href="#certificate" className="hover:text-blue-400">Certificates</a>
          <a href="#contact" className="hover:text-blue-400">Contact Us</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-8 pb-6 bg-slate-50 dark:bg-black">
          <div className="flex flex-col gap-4 text-lg">
            <a href="#home" onClick={() => setOpen(false)}>Home</a>
            <a href="#services" onClick={() => setOpen(false)}>Services</a>
            <a href="#about" onClick={() => setOpen(false)}>About Us</a>
            <a href="#certificate" onClick={() => setOpen(false)}>Certificates</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
}