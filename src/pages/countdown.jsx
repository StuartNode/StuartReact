import { useEffect, useState } from "react";

const TIME = new Date("2026-07-30T14:15:00-04:00").getTime();

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

const UNITS = [
    ["day", DAY],
    ["hours", HOUR],
    ["minutes", MINUTE],
    ["seconds", SECOND],
];

function getTimeLeft() {
    let remaining = Math.max(TIME - Date.now(), 0);

    return UNITS.reduce((timeLeft, [name, duration]) => {
        timeLeft[name] = Math.floor(remaining / duration);
        remaining %= duration;
        return timeLeft;
    }, {});
}

function formatTime(value) {
    return String(value).padStart(2, "0");
}

function CountDownValue({ value }) {
    return (
        <span
            className="min-w-[1.9em] text-center text-[clamp(3.5rem,12vh,10rem)] tracking-[0.08em]
            tabular-nums max-md:text-[clamp(2.4rem,15vw,5rem)] max-md:tracking-[0.04em]">
            {formatTime(value)}
        </span>
    );
}

export default function CountDown() {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft);

    useEffect(() => {
        const interval = setInterval(() => {
            const nextTimeLeft = getTimeLeft();

            setTimeLeft(nextTimeLeft);

            if (Object.values(nextTimeLeft).every((value) => value === 0)) {
                clearInterval(interval);
            }
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="relative grid place-items-center w-full min-h-screen overflow-hidden bg-black">
            {/* Background */}
            <svg
                className="absolute inset-0 w-full h-full">
                <defs>
                    <pattern id="diagonal-stripes" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                        <line x1="0" y1="0" x2="0" y2="20" stroke="rgba(255,255,255,0.05)" strokeWidth="2"/>
                    </pattern>
                </defs>

                <rect width="100%" height="100%" fill="black"/>
                <rect width="100%" height="100%" fill="url(#diagonal-stripes)"/>

                <g className="animate-line-one">
                    <line x1="0" y1="0" x2="100%" y2="100%" stroke="rgba(255,255,255,0.08)" strokeWidth="2"/>
                </g>

                <g className="animate-line-two">
                    <line x1="0" y1="0" x2="100%" y2="100%" stroke="rgba(255,255,255,0.08)" strokeWidth="2"/>
                </g>

                <g className="animate-line-three">
                    <line x1="0" y1="0" x2="100%" y2="100%" stroke="rgba(255,255,255,0.08)" strokeWidth="2"/>
                </g>
            </svg>

            {/* Countdown */}
            <div
                aria-label="Countdown to freedom"
                className="relative z-10 flex items-baseline justify-center gap-[clamp(0.5rem,2vw,1.5rem)]
                text-white font-extrabold leading-[0.85] max-md:gap-[0.35rem] max-[420px]:scale-90">
                {UNITS.map(([name], index) => (
                    <span className="contents" key={name}>
                        <CountDownValue value={timeLeft[name]} />

                        {index < UNITS.length - 1 && (
                            <span aria-hidden="true" className="text-[clamp(3rem,10vh,8rem)] max-md:text-[clamp(2.1rem,12vw,4.2rem)]">:</span>
                        )}
                    </span>
                ))}
            </div>
        </div>
    );
}