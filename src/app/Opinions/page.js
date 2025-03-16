"use client";

import React, { useEffect, useRef } from "react";

const Opinions = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let currentPosition = 0;
    const boxWidth = 304; // 280px box + 24px gap
    const totalSlides = 7; // 9 boxes - 2 visible = 7 slides

    const slideInterval = setInterval(() => {
      currentPosition -= boxWidth;
      if (currentPosition <= -totalSlides * boxWidth) currentPosition = 0;
      slider.style.transform = `translateX(${currentPosition}px)`;
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(slideInterval);
  }, []);

  const opinions = [
    {
      quote: "2025 كانت تجربة رائعة مع المنتج، أنصح الجميع بتجربتها!",
      name: "تامر",
      initial: "S",
    },
    {
      quote: "أعلى جودة وخدمة رائعة، شكراً على الدعم المستمر، سأعود مجدداً!",
      name: "محمد",
      initial: "Y",
    },
    {
      quote: "منتج ممتاز، سهل الاستخدام ويلبي احتياجاتي بشكل كامل، شكراً!",
      name: "خالد",
      initial: "Kh",
    },
    {
      quote: "التجربة كانت ممتعة، المنتج يستحق التجربة بكل تأكيد!",
      name: "ليلى",
      initial: "L",
    },
    {
      quote: "خدمة ممتازة ودعم سريع، أنا سعيد جدًا بالتجربة!",
      name: "محمد",
      initial: "M",
    },
    {
      quote: "المنتج رائع وسهل الاستخدام، أنصح به بشدة!",
      name: "فاطمة",
      initial: "F",
    },
    {
      quote: "تجربة فريدة من نوعها، شكراً على الجهود المبذولة!",
      name: "علي",
      initial: "A",
    },
    {
      quote: "جودة عالية وأداء ممتاز، أحببت المنتج!",
      name: "نور",
      initial: "N",
    },
    {
      quote: "أفضل تجربة استخدام حتى الآن، شكراً لكم!",
      name: "ريم",
      initial: "R",
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-35 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto overflow-hidden">
        <h1 className="text-3xl sm:text-6xl font-bold text-center mb-12 text-teal-400">
          <span className="text-white">آراء </span>
          المتسابقين
        </h1>

        <div className="overflow-hidden w-[584px] mx-auto">
          <div
            ref={sliderRef}
            className="flex gap-6 transition-transform duration-500"
            style={{ width: `${9 * 304}px` }} // Total width for 9 boxes (280px + 24px gap)
          >
            {opinions.map((opinion, index) => (
              <div
                key={index}
                className="relative p-8 rounded-xl shadow-lg min-w-[280px] flex-shrink-0 flex items-center justify-center h-64"
                style={{ backgroundColor: "#253631" }}
              >
                {/* Quote Text */}
                <p className="text-gray-300 text-center text-lg leading-relaxed">
                  {opinion.quote}
                </p>

                {/* Quote Symbol */}
                <span className="absolute bottom-6 left-6 text-gray-500 text-5xl">
                  &quot;
                </span>

                {/* Name and Initial */}
                <div className="absolute bottom-6 right-6 flex items-center space-x-3 space-x-reverse">
                  <span className="text-white pr-5 text-base">
                    {opinion.name}
                  </span>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-bold"
                    style={{ backgroundColor: "#B8A04B" }}
                  >
                    {opinion.initial}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opinions;
