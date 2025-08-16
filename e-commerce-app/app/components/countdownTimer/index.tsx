'use client'
import { useEffect, useState } from "react";

const calculateTimeLeft = () => {
  const difference = +new Date(Date.now() + (5 * 86400 + 23 * 3600 + 59 * 60 + 35) * 1000) - +new Date();
  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

export default function EnhanceMusicExperience() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const labels = ["Days", "Hours", "Minutes", "Seconds"];
  const times = [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds];

  return (
    <div className="flex p-8 bg-black text-white rounded-lg items-center gap-100 w-full mx-auto">
      <div>
        <p className="text-green-500 font-bold font-sans">Categories</p>
        <h1 className="font-extrabold text-4xl mt-2 leading-tight">
          Enhance Your<br />Music Experience
        </h1>
        <div className="flex gap-4 mt-6 mb-6">
          {times.map((t, i) => (
            <div key={labels[i]} className="w-14 h-14 rounded-full bg-white text-black flex flex-col items-center justify-center">
              <span className="font-bold text-lg">{String(t).padStart(2, '0')}</span>
              <small className="text-xs">{labels[i]}</small>
            </div>
          ))}
        </div>
        <button className="bg-green-500 px-6 py-3 text-black font-bold rounded hover:bg-green-600 transition">
          Buy Now!
        </button>
      </div>
      <div>
        <img src="/Frame.png" alt="JBL Speaker" className="h-100 items-center" />
      </div>
    </div>
  );
}
