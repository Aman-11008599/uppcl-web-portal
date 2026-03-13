"use client";

import React, { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import en from "@/locales/en.json";
import hi from "@/locales/hi.json";
import "./Marquee.css";

const dictionaries: any = { en, hi };

export default function Marquee() {
  const { lang } = useParams();

  const messages =
    dictionaries[lang as "en" | "hi"]?.marquee?.messages ||
    dictionaries.en.marquee.messages;

  const [index, setIndex] = useState(0);

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  const [durationSec, setDurationSec] = useState(25);
  const [vars, setVars] = useState({ start: "0px", end: "0px" });

  const PIXELS_PER_SEC = 100;
  const PAUSE_BETWEEN = 1.2;

  useEffect(() => {
    function update() {
      const wrap = wrapperRef.current;
      const txt = textRef.current;
      if (!wrap || !txt) return;

      const wrapW = wrap.offsetWidth;
      const txtW = txt.offsetWidth;

      const distance = wrapW + txtW;
      const dur = Math.max(3, distance / PIXELS_PER_SEC);

      setDurationSec(dur);
      setVars({ start: `${wrapW}px`, end: `${-txtW}px` });
    }

    update();

    const ro = new ResizeObserver(update);
    if (wrapperRef.current) ro.observe(wrapperRef.current);
    if (textRef.current) ro.observe(textRef.current);

    return () => ro.disconnect();
  }, [index, lang]);

  useEffect(() => {
    const t = setTimeout(() => {
      setIndex((i) => (i + 1) % messages.length);
    }, (durationSec + PAUSE_BETWEEN) * 1000);

    return () => clearTimeout(t);
  }, [durationSec, index, messages]);

  return (
    <div className="marquee-wrapper" ref={wrapperRef} aria-live="polite">
      <div
        key={index}
        ref={textRef}
        className="marquee-text"
        style={{
          animationDuration: `${durationSec}s`,
          ["--start" as any]: vars.start,
          ["--end" as any]: vars.end,
        }}
      >
        {messages[index]}
      </div>
    </div>
  );
}

