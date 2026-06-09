"use client";

import React from "react";

export default function Logos() {
  const logoIds = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <section
      style={{
        padding: "60px 0",
        backgroundColor: "var(--bg-color)",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Client & Partners
        
        </h2>
      </div>

      <div className="marquee-container">
        {/* First set */}
        <div className="marquee-content">
          {logoIds.map((id) => (
            <img
              key={`logo-1-${id}`}
              src={`/Logos/Clients/${id}.webp`}
              alt={`Logo ${id}`}
              style={{
                height: "80px",
                width: "auto",
                objectFit: "contain",
              }}
            />
          ))}
        </div>

        {/* Second set */}
        <div className="marquee-content" aria-hidden="true">
          {logoIds.map((id) => (
            <img
              key={`logo-2-${id}`}
              src={`/Logos/Clients/${id}.webp`}
              alt={`Logo ${id}`}
              style={{
                height: "60px",
                width: "auto",
                objectFit: "contain",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}