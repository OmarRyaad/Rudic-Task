"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="nav-header bg-gradient-to-r text-white py-4 px-4 sm:px-6 relative"
      dir="rtl"
    >
      <nav className="container mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <div className="flex-shrink-0 z-50">
          <Image
            src="/images/apcLogo.png"
            alt="APC Prime Logo"
            width={100}
            height={0}
            className="h-12 w-auto"
          />
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-white focus:outline-none z-50 relative"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`fixed md:static top-0 right-0 bg-teal-900 md:bg-transparent w-full md:w-auto h-screen md:h-auto pt-20 md:pt-0 px-4 md:px-0 transition-transform duration-300 ease-in-out text-lg md:text-base lg:text-lg z-40 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:flex md:flex-row md:items-center md:translate-x-0 md:h-auto md:pt-0`}
        >
          <li className="mb-6 md:mb-0 md:ml-8">
            <Link
              href="#HeroSection"
              className="block py-3 md:py-0 hover:text-green-300 transition-colors duration-200 font-medium"
              onClick={() => setIsOpen(false)}
            >
              الصفحة الرئيسية
            </Link>
          </li>
          <li className="mb-6 md:mb-0 md:ml-8">
            <Link
              href="#OurAdvantages"
              className="block py-3 md:py-0 hover:text-green-300 transition-colors duration-200 font-medium"
              onClick={() => setIsOpen(false)}
            >
              مميزاتنا
            </Link>
          </li>
          <li className="mb-6 md:mb-0 md:ml-8">
            <Link
              href="#RegistrationSteps"
              className="block py-3 md:py-0 hover:text-green-300 transition-colors duration-200 font-medium"
              onClick={() => setIsOpen(false)}
            >
              خطوات التسجيل
            </Link>
          </li>
          <li className="mb-6 md:mb-0 md:ml-8">
            <Link
              href="#FrequentlyQuestions"
              className="block py-3 md:py-0 hover:text-green-300 transition-colors duration-200 font-medium"
              onClick={() => setIsOpen(false)}
            >
              الأسئلة الشائعة
            </Link>
          </li>
          <li className="mb-6 md:mb-0 md:ml-8">
            <Link
              href="#Seasons"
              className="block py-3 md:py-0 hover:text-green-300 transition-colors duration-200 font-medium"
              onClick={() => setIsOpen(false)}
            >
              المواسم
            </Link>
          </li>
          <li className="mt-6 md:mt-0 md:ml-8">
            <Link href="#RegisterNow" onClick={() => setIsOpen(false)}>
              <button className="group bg-[rgb(107,165,67)] hover:bg-green-600 cursor-pointer text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 w-full md:w-auto text-lg">
                سجل الآن
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
