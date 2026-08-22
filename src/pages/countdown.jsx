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
            className="min-w-[1.9em] text-center text-[clamp(3.5rem,12vh,10rem)] tracking-[0.08em] tabular-nums max-md:text-[clamp(2.4rem,15vw,5rem)] max-md:tracking-[0.04em]">
            {formatTime(value)}
        </span>
    );
}

export default function CountDown() {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft);

    useEffect(() => {
        document.title = "CountDown | StuartNode"
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
        <div className="relative w-screen min-h-screen overflow-hidden bg-[#09090B] text-white">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(135deg,transparent_0%,transparent_58%,rgba(96,165,250,0.12)_58%,rgba(96,165,250,0.12)_59%,transparent_59%,transparent_100%)] [background-size:54px_54px,54px_54px,100%_100%]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,#09090B_85%)]" />
                <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[160px]"/>
            </div>

            {/* Countdown */}
            <div aria-label="Countdown to freedom" className="relative z-10 grid place-items-center w-full min-h-screen">
                <div className="flex items-baseline justify-center gap-[clamp(0.5rem,2vw,1.5rem)] text-white font-extrabold leading-[0.85] max-md:gap-[0.35rem] max-[420px]:scale-90">
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
        </div>
    );
}
