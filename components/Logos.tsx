"use client";

import React from "react";

export default function Logos() {
  const logoIds = Array.from({ length: 36 }, (_, i) => i + 1);

  const cardStyle: React.CSSProperties = {
    backgroundColor: "#f5f5f5",
    border: "3px solid #e9f90e",
    borderRadius: "8px",
    padding: "12px",
    margin: "0 10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "220px",
    boxSizing: "border-box",
  };

  const imageStyle: React.CSSProperties = {
    height: "180px",
    width: "auto",
    objectFit: "contain",
  };

  return (
    <section
      style={{
        padding: "10px 0",
        backgroundColor: "var(--bg-color)",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        <h2
          style={{
            fontSize: "34px",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Brands Associated With
        </h2>
      </div>

      <div className="marquee-container">
        {/* First Set */}
        <div className="marquee-content">
          {logoIds.map((id) => (
            <div key={`logo-1-${id}`} style={cardStyle}>
              <img
                src={`/Logos/${id}.webp`}
                alt={`Logo ${id}`}
                style={imageStyle}
              />
            </div>
          ))}
        </div>

        {/* Duplicate Set for Seamless Loop */}
        <div className="marquee-content" aria-hidden="true">
          {logoIds.map((id) => (
            <div key={`logo-2-${id}`} style={cardStyle}>
              <img
                src={`/Logos/${id}.webp`}
                alt={`Logo ${id}`}
                style={imageStyle}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}