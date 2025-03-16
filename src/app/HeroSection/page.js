"use client";

import React from "react";
import { motion } from "framer-motion";
import NavBar from "../NavBar/page";
import Image from "next/image";
import ContestCountdown from "../ContestCountdown/page";
import OurAdvantages from "../OurAdvantages/page";
import RegistrationSteps from "../RegistrationSteps/page";
import Opinions from "../Opinions/page";
import FrequentlyQuestions from "../FrequentlyQuestions/page";
import Seasons from "../Seasons/page";
import Footer from "../Footer/page";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen">
      <div
        style={{
          backgroundImage: `url("/images/banner_bg.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
        className="absolute inset-0"
      >
        <NavBar />
        <div className="container mx-auto flex flex-col-reverse md:flex-row-reverse items-center justify-between text-center md:text-right px-6 sm:px-12 lg:px-20 pt-20">
          <div className="max-w-2xl pb-10">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide"
              style={{ color: "#d1a949" }}
            >
              PRIME WINNER CONTEST
            </h1>
            <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mt-4">
              المسابقة مقدمة من APC PRIME وتهدف لتطوير مهارتك وزيادة خبرتك
              بالتداول . وتعتبر فرصة مثالية لعيش مغامرة مثيرة ومنافسة شديدة على
              المراكز الأولى للحصول على جوائز قيمة
            </p>
            <button
              style={{ backgroundColor: "#d1a949" }}
              className="hover:opacity-80 text-black font-semibold py-3 px-6 rounded-lg transition duration-200 text-base sm:text-lg md:text-xl mt-6"
            >
              سجل الآن
            </button>
          </div>

          <motion.div
            animate={{
              y: [0, -50, 0], // يتحرك لأعلى ثم لأسفل
            }}
            transition={{
              duration: 3, // مدة الحركة
              repeat: Infinity, // تكرار لا نهائي
              ease: "easeInOut",
            }}
          >
            <Image
              src="/images/primeWinnerLogo.png"
              alt="شعار مسابقة Prime Winner"
              width={500}
              height={400}
              className="w-72 sm:w-80 md:w-96 lg:w-[500px] h-auto mb-6 md:mb-0"
            />
          </motion.div>
        </div>
        <ContestCountdown />
        <OurAdvantages />
        <RegistrationSteps />
        <Opinions />
        <FrequentlyQuestions />
        <Seasons />
        <Footer />
      </div>
    </div>
  );
};

export default HeroSection;
