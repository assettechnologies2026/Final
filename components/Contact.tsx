"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "Reason for Contacting*",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // The WhatsApp number (including country code, e.g., 91 for India)
    const phoneNumber = "919876543210";

    // Formatting the message with bold headers and spacing
    const message = `*New Contact Form Submission*%0A%0A` +
      `*👤 Name:* ${formData.name}%0A` +
      `*📧 Email:* ${formData.email}%0A` +
      `*❓ Reason:* ${formData.reason}%0A` +
      `*📞 Phone:* ${formData.phone || "Not provided"}%0A%0A` +
      `*💬 Message:*%0A${formData.message}`;

    const whatsappUrl = `https://wa.me/${919284232669}?text=${message}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-[#1d2129] text-4xl md:text-5xl font-bold mb-4">
          What can we do for you?
        </h2>
        <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          We are ready to work on a project of any complexity,
          whether it's commercial or residential.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name*"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              required
            />
            <div className="relative">
              <select
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className={`w-full p-4 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none ${formData.reason === "Reason for Contacting*" ? "text-gray-400" : "text-black"
                  }`}
              >
                <option>Reason for Contacting*</option>
                <option>Commercial Project</option>
                <option>Residential Project</option>
                <option>Other</option>
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-blue-800">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-4 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-black"
            />
          </div>

          <textarea
            name="message"
            placeholder="Message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 resize-none"
          ></textarea>

          <p className="text-left text-gray-500 text-sm">
            <span className="text-red-500 font-bold">*</span> indicates a required field
          </p>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-[#2b44b1] hover:bg-[#1e328f] text-white font-bold py-4 px-16 rounded-md transition-all duration-300 transform active:scale-95 shadow-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}