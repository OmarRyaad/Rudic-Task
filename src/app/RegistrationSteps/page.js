"use client";

import React, { useEffect } from "react";

const RegistrationSteps = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Check if the step has text-right (for right-aligned text)
            if (entry.target.classList.contains("text-right-step")) {
              entry.target.classList.add("animate-slide-from-right");
            } else {
              entry.target.classList.add("animate-slide-from-left");
            }
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the element is visible
    );

    const steps = document.querySelectorAll(".step");
    steps.forEach((step) => observer.observe(step));

    return () => {
      steps.forEach((step) => observer.unobserve(step));
    };
  }, []);

  return (
    <div className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-teal-400">
          مراحل تسجيل المسابقة
        </h1>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-teal-400"></div>

          {/* Steps */}
          <div className="flex flex-col items-center space-y-16">
            {/* Step 1 - Left */}
            <div className="step flex flex-col sm:flex-row items-center w-full max-w-4xl opacity-0">
              <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-teal-400 flex items-center justify-center text-white font-bold text-lg sm:text-xl">
                  1
                </div>
              </div>
              <div className="text-center sm:text-left bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg w-full sm:w-3/4">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                  إنشاء حساب المستخدم
                </h2>
                <p className="text-sm sm:text-base text-gray-300">
                  قم بإنشاء حساب جديد باستخدام بريدك الإلكتروني وكلمة مرور قوية.
                </p>
              </div>
            </div>

            {/* Step 2 - Right */}
            <div className="step text-right-step flex flex-col sm:flex-row items-center w-full max-w-4xl opacity-0">
              <div className="flex-shrink-0 mb-4 sm:mb-0 sm:ml-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-teal-400 flex items-center justify-center text-white font-bold text-lg sm:text-xl">
                  2
                </div>
              </div>
              <div className="text-center sm:text-right bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg w-full sm:w-3/4">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                  تحميل ملفات المشاركة
                </h2>
                <p className="text-sm sm:text-base text-gray-300">
                  قم برفع الملفات المطلوبة للمشاركة في المسابقة.
                </p>
              </div>
            </div>

            {/* Step 3 - Left */}
            <div className="step flex flex-col sm:flex-row items-center w-full max-w-4xl opacity-0">
              <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-teal-400 flex items-center justify-center text-white font-bold text-lg sm:text-xl">
                  3
                </div>
              </div>
              <div className="text-center sm:text-left bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg w-full sm:w-3/4">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                  مراجعة الحساب وتأكيده
                </h2>
                <p className="text-sm sm:text-base text-gray-300">
                  قم بمراجعة بياناتك وتأكيد حسابك لاستكمال التسجيل.
                </p>
              </div>
            </div>

            {/* Step 4 - Right */}
            <div className="step text-right-step flex flex-col sm:flex-row items-center w-full max-w-4xl opacity-0">
              <div className="flex-shrink-0 mb-4 sm:mb-0 sm:ml-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-teal-400 flex items-center justify-center text-white font-bold text-lg sm:text-xl">
                  4
                </div>
              </div>
              <div className="text-center sm:text-right bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg w-full sm:w-3/4">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                  إرسال طلب التسجيل النهائي
                </h2>
                <p className="text-sm sm:text-base text-gray-300">
                  أرسل طلب التسجيل النهائي للمشاركة في المسابقة.
                </p>
              </div>
            </div>

            {/* Step 5 - Left */}
            <div className="step flex flex-col sm:flex-row items-center w-full max-w-4xl opacity-0">
              <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-teal-400 flex items-center justify-center text-white font-bold text-lg sm:text-xl">
                  5
                </div>
              </div>
              <div className="text-center sm:text-left bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg w-full sm:w-3/4">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                  انتظار المصادقة النهائية
                </h2>
                <p className="text-sm sm:text-base text-gray-300">
                  انتظر المصادقة النهائية من الإدارة للبدء في المسابقة.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS for animations */}
      <style jsx>{`
        .animate-slide-from-left {
          animation: slideFromLeft 0.5s ease-out forwards;
          opacity: 1;
        }

        .animate-slide-from-right {
          animation: slideFromRight 0.5s ease-out forwards;
          opacity: 1;
        }

        @keyframes slideFromLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideFromRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default RegistrationSteps;
