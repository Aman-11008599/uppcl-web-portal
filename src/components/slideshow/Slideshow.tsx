"use client";

import { useEffect, useState } from "react";
import "./Slideshow.css";

type Slide = {
  src: string;
  alt: string;
};

export default function Slideshow({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  if (slides.length === 0) return null;

  return (
    <div className="slideshow">
      {slides.map((slide, i) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          className={`slide ${i === index ? "active" : ""}`}
        />
      ))}

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
