"use client";

import React, { useEffect, useRef, useState } from "react";
import "./Marquee.css";

const messages: React.ReactNode[] = [
	`To avail the benefits of PM Surya Ghar Free Electricity Scheme, download PM Surya Ghar APP from Play Store and APPLY on it.`,

	`Dear Consumer, Bill Payment, Electricity Supply information is sent to you by the Electricity Department only from the UPPCLT-S / UPPCLA-S / ISSPLN-S / SAICOM-P Header on SMS and from verified green tick account on whatsapp. Discomwise whatsapp no are - MVVNL - 8010924203 / DVVNL - 8010957826 / PuVVNL - 8010968292 / PVVNL - 7859804803 / Kesco - 8287835233. Ignore SMS/whatsapp received from any other source/header. Be aware, Be alert -UPPCL`,

	<span>
		Online Payment Helpdesk - For payment done through Billdesk Payment Gateway - Email - <strong>payment.uppcl@billdesk.com</strong> / Toll Free Number - <strong>9513438004</strong>. For payment done through PayU Payment Gateway Email - <strong>uppcl.support@payu.in</strong> / Toll Free Number - <strong>18002021810</strong>
	</span>
];

export default function Marquee() {
	const [index, setIndex] = useState(0);

	// measured variables for pixel-perfect animation
	const wrapperRef = useRef<HTMLDivElement | null>(null);
	const textRef = useRef<HTMLDivElement | null>(null);

	const [durationSec, setDurationSec] = useState(25); // seconds
	const [vars, setVars] = useState({ start: "0px", end: "0px" });

	// speed in pixels per second (adjust to taste)
	const PIXELS_PER_SEC = 100;
	const PAUSE_BETWEEN = 1.2; // seconds pause after each message

	useEffect(() => {
		function update() {
			const wrap = wrapperRef.current;
			const txt = textRef.current;
			if (!wrap || !txt) return;

			const wrapW = wrap.offsetWidth;
			const txtW = txt.offsetWidth;

			const distance = wrapW + txtW; // px to travel
			const dur = Math.max(3, distance / PIXELS_PER_SEC);

			setDurationSec(dur);
			setVars({ start: `${wrapW}px`, end: `${-txtW}px` });
		}

		update();

		const ro = new ResizeObserver(update);
		if (wrapperRef.current) ro.observe(wrapperRef.current);
		if (textRef.current) ro.observe(textRef.current);

		return () => ro.disconnect();
	}, [index]);

	useEffect(() => {
		const t = setTimeout(() => {
			setIndex((i) => (i + 1) % messages.length);
		}, (durationSec + PAUSE_BETWEEN) * 1000);

		return () => clearTimeout(t);
	}, [durationSec, index]);

	return (
		<div className="marquee-wrapper" ref={wrapperRef} aria-live="polite">
			<div
				key={index}
				ref={textRef}
				className="marquee-text"
				style={{
					animationDuration: `${durationSec}s`,
					// CSS custom properties for pixel animation
					["--start" as any]: vars.start,
					["--end" as any]: vars.end
				}}
			>
				{messages[index]}
			</div>
		</div>
	);
}

