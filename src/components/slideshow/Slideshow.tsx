"use client";

import { useEffect, useState } from "react";
import "./Slideshow.css"

const slides = [
  { src: "/slides/slide1.jpg", alt: "Power Infrastructure" },
  { src: "/slides/slide2.jpeg", alt: "Electricity Distribution" },
  { src: "/slides/slide3.jpeg", alt: "UPPCL Services" },
  { src: "/slides/slide4.jpeg", alt: "UPPCL Services" },
  { src: "/slides/slide5.jpeg", alt: "UPPCL Services" },
  { src: "/slides/slide6.jpg", alt: "UPPCL Services" },
  { src: "/slides/slide7.jpg", alt: "UPPCL Services" }
];

export default function Slideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow">
      {slides.map((slide, i) => (
        <img
          key={i}
          src={slide.src}
          alt={slide.alt}
          className={`slide ${i === index ? "active" : ""}`}
        />
      ))}

      {/* Controls */}
      <button
        className="nav prev"
        onClick={() =>
          setIndex(index === 0 ? slides.length - 1 : index - 1)
        }
      >
        ‹
      </button>

      <button
        className="nav next"
        onClick={() => setIndex((index + 1) % slides.length)}
      >
        ›
      </button>
    </div>
  );
}
