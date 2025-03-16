"use client";

import React, { useState, useEffect, useRef } from "react";

const FrequentlyQuestions = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqRefs = useRef([]);
  const sectionRef = useRef(null);

  // Animation for expanding/collapsing FAQ answers
  useEffect(() => {
    faqRefs.current.forEach((el, index) => {
      if (el) {
        if (openIndex === index) {
          el.style.height = `${el.scrollHeight}px`;
          el.style.opacity = "1";
        } else {
          el.style.height = "0px";
          el.style.opacity = "0";
        }
      }
    });
  }, [openIndex]);

  // Scroll-triggered animation for the section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in");
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("opacity-0");
          } else {
            entry.target.classList.remove("animate-slide-in");
            entry.target.classList.add("opacity-0");
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    const section = sectionRef.current;
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const faqs = [
    {
      question: "هل يمكنني التسجيل في المسابقة؟",
      answer:
        "نعم، يمكنك التسجيل في المسابقة بسهولة من خلال إنشاء حساب على منصتنا، ثم اتباع الخطوات الموضحة في قسم التسجيل.",
    },
    {
      question: "كيف أبدأ بإعداد حسابي؟",
      answer:
        "لإعداد حسابك، انتقل إلى صفحة التسجيل، أدخل بريدك الإلكتروني وكلمة المرور، ثم أكمل المعلومات المطلوبة.",
    },
    {
      question: "هل هناك رسوم للمشاركة؟",
      answer:
        "لا، المشاركة في المسابقة مجانية تمامًا، ولكن قد تكون هناك تكاليف إضافية حسب نوع المسابقة.",
    },
    {
      question: "كيف يمكنني التواصل مع الدعم؟",
      answer:
        "يمكنك التواصل مع فريق الدعم عبر البريد الإلكتروني أو صفحة الاتصال على الموقع الرسمي.",
    },
    {
      question: "ما هي شروط المشاركة؟",
      answer:
        "يجب أن تكون مسجلاً في المنصة وأن تلتزم بجميع الشروط الموضحة في صفحة المسابقة.",
    },
    {
      question: "هل المسابقة متاحة عالمياً؟",
      answer: "نعم، المسابقة متاحة عالمياً، ولكن قد تكون هناك قيود حسب بلدك.",
    },
    {
      question: "كيف أعرف إذا تم قبول طلبي؟",
      answer: "ستتلقى إشعاراً عبر البريد الإلكتروني بمجرد مراجعة طلبك وتأكيده.",
    },
    {
      question: "هل يمكنني التسجيل بأكثر من حساب؟",
      answer:
        "لا، يُسمح بتسجيل حساب واحد فقط لكل شخص، وأي انتهاك قد يؤدي إلى استبعادك.",
    },
  ];

  return (
    <div className="text-white py-12 px-4 sm:px-6 lg:px-8">
      <style jsx global>{`
        :root {
          --bg-color-trans: rgba(26, 60, 52, 0.5);
          --bg-color: #0a1c1a;
        }
      `}</style>

      <div className="container mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-teal-400">
          <span className="text-white">الأسئلة </span>الشائعة
        </h1>

        <div
          ref={sectionRef}
          className="w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 opacity-0"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="relative bg-gray-800 p-4 rounded-lg shadow-md w-full"
            >
              {/* Question and Toggle */}
              <button
                className="w-full text-center flex justify-between items-center text-gray-300 text-lg font-semibold hover:bg-gray-700 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-teal-400 text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>
                <span>{faq.question}</span>
              </button>

              {/* Answer with Animation */}
              <div
                ref={(el) => (faqRefs.current[index] = el)}
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ height: "0px", opacity: 0 }}
              >
                <p className="text-gray-300 text-center text-base leading-relaxed p-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        div {
            var(--bg-color) 100%
          );
        }
        .animate-slide-in {
          animation: slideInFromSides 1s ease-out forwards;
        }
        @keyframes slideInFromSides {
          from {
            opacity: 0;
            transform: translateX(var(--direction, 0)) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        /* Apply direction for left and right columns */
        .grid-cols-2 > div:nth-child(odd) {
          --direction: -100px; /* Slide in from left for odd (left) columns */
        }
        .grid-cols-2 > div:nth-child(even) {
          --direction: 100px; /* Slide in from right for even (right) columns */
        }
        @media (max-width: 640px) {
          .grid-cols-2 > div {
            --direction: -100px; /* Slide from left on mobile */
          }
        }
      `}</style>
    </div>
  );
};

export default FrequentlyQuestions;
