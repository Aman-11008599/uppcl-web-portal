"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"

const slides = [
  {
    id: 1,
    quote: '"In order to further sustainable development and people\'s well-being, we are launching the PM Surya Ghar: Muft Bijli Yojana. This project, with an investment of over Rs. 75,000 crores, aims to light up 1 crore households by providing up to 300 units of free electricity every month."',
    author: "Shri Narendra Modi",
    designation: "Hon'ble Prime Minister of India",
    bgColor: "from-[#87CEEB] via-[#B0C4DE] to-[#87CEEB]",
  },
  {
    id: 2,
    quote: '"Electricity is the backbone of modern development. We are committed to providing 24x7 uninterrupted power supply to every household in Uttar Pradesh by strengthening our infrastructure and adopting smart grid technology."',
    author: "Shri Yogi Adityanath",
    designation: "Hon'ble Chief Minister of Uttar Pradesh",
    bgColor: "from-[#a8d5ba] via-[#c8e6d0] to-[#a8d5ba]",
  },
  {
    id: 3,
    quote: '"UPPCL is dedicated to consumer satisfaction and transparent services. Our digital initiatives aim to make bill payment, new connections, and complaint registration easier for all citizens of Uttar Pradesh."',
    author: "UPPCL Administration",
    designation: "Uttar Pradesh Power Corporation Limited",
    bgColor: "from-[#f5d6ba] via-[#fae5d3] to-[#f5d6ba]",
  },
]

export function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isPaused])

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const togglePause = () => {
    setIsPaused((prev) => !prev)
  }

  const slide = slides[currentSlide]

  return (
    <div className="relative h-[350px] overflow-hidden">
      {/* Background with solar panels and gradient */}
      <div 
        className={`absolute inset-0 bg-gradient-to-r ${slide.bgColor} transition-all duration-500`}
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(135, 206, 235, 0.7), rgba(176, 196, 222, 0.5)),
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%232c5282' x='0' y='60' width='100' height='40' transform='skewY(-5)'/%3E%3C/svg%3E")
          `,
        }}
      >
        {/* Solar panel pattern overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-[200px]">
          <svg viewBox="0 0 1200 200" className="w-full h-full" preserveAspectRatio="xMidYMax slice">
            <defs>
              <linearGradient id="solarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1a365d" />
                <stop offset="100%" stopColor="#2c5282" />
              </linearGradient>
            </defs>
            {/* Solar panels rows */}
            {[...Array(8)].map((_, row) => (
              [...Array(20)].map((_, col) => (
                <rect
                  key={`${row}-${col}`}
                  x={col * 65 - 50}
                  y={80 + row * 18}
                  width="60"
                  height="15"
                  fill="url(#solarGrad)"
                  stroke="#4a5568"
                  strokeWidth="0.5"
                  transform={`skewY(-3) skewX(5)`}
                />
              ))
            ))}
          </svg>
        </div>
      </div>

      {/* Quote Box */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 max-w-lg z-10">
        <div className="bg-white/80 p-6 rounded-sm shadow-lg transition-opacity duration-500">
          <p className="text-gray-800 text-lg leading-relaxed font-medium">
            {slide.quote}
          </p>
          <div className="mt-4 text-right">
            <p className="text-[#8B4513] font-bold text-lg italic">{slide.author}</p>
            <p className="text-gray-600 text-sm">{slide.designation}</p>
          </div>
        </div>
      </div>

      {/* PM Image placeholder - positioned on right */}
      <div className="absolute right-20 top-0 bottom-0 w-[350px]">
        <div className="h-full flex items-end justify-center">
          <div className="w-full h-[320px] bg-gradient-to-t from-transparent to-transparent flex items-center justify-center">
            {/* Silhouette representation */}
            <svg viewBox="0 0 200 300" className="h-full opacity-90">
              <defs>
                <linearGradient id="personGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#d4a574" />
                  <stop offset="100%" stopColor="#c19660" />
                </linearGradient>
              </defs>
              {/* Head */}
              <ellipse cx="100" cy="50" rx="35" ry="40" fill="url(#personGrad)" />
              {/* Body */}
              <path d="M50 100 Q100 80 150 100 L160 280 L40 280 Z" fill="#f5f5dc" />
              {/* Hair */}
              <ellipse cx="100" cy="25" rx="30" ry="15" fill="#4a4a4a" />
            </svg>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {/* Left Arrow */}
        <button 
          onClick={goToPrevious}
          className="bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-[#1a4a8f]" />
        </button>

        {/* Slide Indicators */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-[#1a4a8f]" : "bg-white/60 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Pause/Play Button */}
        <button 
          onClick={togglePause}
          className="bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors"
          aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
        >
          {isPaused ? (
            <Play className="w-5 h-5 text-[#1a4a8f]" />
          ) : (
            <Pause className="w-5 h-5 text-[#1a4a8f]" />
          )}
        </button>

        {/* Right Arrow */}
        <button 
          onClick={goToNext}
          className="bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-[#1a4a8f]" />
        </button>
      </div>
    </div>
  )
}
