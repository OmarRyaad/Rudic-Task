"use client";

import React, { useState, useEffect } from "react";

const ContestCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-04-01T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white text-center py-16 px-4">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
        تبدأ المسابقة بعد
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {[
          { unit: "days", label: "يوم" },
          { unit: "hours", label: "ساعة" },
          { unit: "minutes", label: "دقيقة" },
          { unit: "seconds", label: "ثانية" },
        ].map(({ unit, label }, index) => (
          <div
            key={index}
            className="bg-[#1A3C34] w-full max-w-[80px] sm:max-w-[100px] px-6 py-4 rounded-lg shadow-md text-center"
          >
            <span className="text-yellow-400 text-3xl sm:text-4xl md:text-5xl font-bold">
              {timeLeft[unit].toString().padStart(2, "0")}
            </span>
            <p className="text-sm mt-2 text-white font-medium">{label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center mt-10">
        <div>
          <p className="text-yellow-400 text-4xl sm:text-5xl font-bold">10</p>
          <p className="text-white text-lg sm:text-xl mt-2">أيام تداول</p>
        </div>
        <div>
          <p className="text-yellow-400 text-4xl sm:text-5xl font-bold">36</p>
          <p className="text-white text-lg sm:text-xl mt-2">عدد الرابحين</p>
        </div>
        <div>
          <p className="text-yellow-400 text-4xl sm:text-5xl font-bold">
            $4000
          </p>
          <p className="text-white text-lg sm:text-xl mt-2">المركز الأول</p>
        </div>
        <div>
          <p className="text-yellow-400 text-4xl sm:text-5xl font-bold">
            $2000
          </p>
          <p className="text-white text-lg sm:text-xl mt-2">مجموع الجوائز</p>
        </div>
      </div>
    </div>
  );
};

export default ContestCountdown;
