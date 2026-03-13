"use client"

import { useEffect, useState, useRef } from "react"

const notices = [
  "To avail the benefits of PM Surya Ghar Free Electricity Scheme, download PM Surya Ghar APP from Play Store and APPLY on it.",
  "Online bill payment facility available 24x7. Pay your electricity bill through UPPCL website or mobile app.",
  "New electricity connection applications are now being processed within 7 working days. Apply online today!",
]

export function ScrollingAnnouncement() {
  const [offset, setOffset] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  
  const separator = "          ||          "
  const fullText = notices.join(separator) + separator

  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
      return
    }

    intervalRef.current = setInterval(() => {
      setOffset((prev) => (prev + 1) % (fullText.length * 8))
    }, 40)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPaused, fullText.length])

  return (
    <div 
      className="bg-[#e8e8e8] py-2 overflow-hidden border-t-4 border-[#f57c00] border border-black"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex whitespace-nowrap">
        <p
          className="text-[#1a4a8f] text-sm font-medium"
          style={{ transform: `translateX(-${offset}px)` }}
        >
          {fullText.repeat(5)}
        </p>
      </div>
    </div>
  )
}
