"use client";

import Image from "next/image";
import React from "react";

const OurAdvantages = () => {
  return (
    <div className="bg-gradient-to-r from-[#1A3C34] to-[#0A1C1A] text-white py-8 sm:py-12 px-4 sm:px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Side: Smartphone Graphic Placeholder */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0 flex justify-center animate-image">
          <div className="w-full max-w-[300px] sm:max-w-[400px] rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/images/phoneLogo1 (1).png"
              alt="شعار مسابقة Prime Winner"
              width={500}
              height={400}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Right Side: Title and Advantages */}
        <div className="w-full md:w-1/2 text-right animate-text">
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-teal-400">PRIME WINNER</span> لماذا مسابقة
          </h2>

          {/* Advantages List */}
          <div className="space-y-6">
            {[
              {
                icon: "✨",
                title: "جوائز حقيقية يصل مجموعها ل 20.000 دولار",
                description: "سحب فوري لجائزتك بدون أي قيد أي شرط",
              },
              {
                icon: "⚠️",
                title: "صفر مخاطرة",
                description: "التقديم على المسابقة مجاني وعلى حسابات تجريبية",
              },
              {
                icon: "⚙️",
                title: "التطبيق العملي",
                description: "فرصة لتجربة استراتيجيات جديدة",
              },
            ].map((advantage, index) => (
              <div
                key={index}
                className="flex flex-row-reverse items-start space-x-4 space-x-reverse"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white text-sm sm:text-base">
                      {advantage.icon}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {advantage.title}
                  </h3>
                  <p className="text-xs sm:text-sm mt-1 leading-relaxed text-gray-300">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add CSS for animations */}
      <style jsx>{`
        /* Image animation */
        .animate-image {
          opacity: 0;
          transform: translateX(-50px);
          animation: slideInImage 0.8s ease-out forwards;
          animation-play-state: paused;
        }

        /* Text animation */
        .animate-text {
          opacity: 0;
          transform: translateX(50px);
          animation: slideInText 0.8s ease-out forwards;
          animation-play-state: paused;
        }

        /* Trigger animations when in view */
        @media (prefers-reduced-motion: no-preference) {
          .animate-image,
          .animate-text {
            animation-play-state: running;
          }
        }

        @keyframes slideInImage {
          0% {
            opacity: 0;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInText {
          0% {
            opacity: 0;
            transform: translateX(50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Ensure animations restart on scroll */
        .animate-image,
        .animate-text {
          animation-iteration-count: 1;
        }
      `}</style>
    </div>
  );
};

export default OurAdvantages;
