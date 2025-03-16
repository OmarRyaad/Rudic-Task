"use client";

import React from "react";
import Image from "next/image";
import {
  FaYoutube,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
  FaTelegram,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { name: "YouTube", icon: FaYoutube, url: "https://youtube.com" },
    { name: "LinkedIn", icon: FaLinkedin, url: "https://linkedin.com" },
    { name: "Facebook", icon: FaFacebook, url: "https://facebook.com" },
    { name: "WhatsApp", icon: FaWhatsapp, url: "https://whatsapp.com" },
    { name: "Telegram", icon: FaTelegram, url: "https://telegram.org" },
    { name: "TikTok", icon: FaTiktok, url: "https://tiktok.com" },
  ];

  const navLinks = [
    { name: "الرئيسية", url: "/" },
    { name: "الأسئلة الشائعة", url: "/faq" },
    { name: "خدماتنا", url: "/services" },
    { name: "مواسم", url: "/seasons" },
  ];

  return (
    <footer
      style={{ backgroundColor: "#0d2a2c" }}
      className="text-white py-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex gap-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition"
            >
              {React.createElement(link.icon, { className: "w-6 h-6" })}
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center space-y-2">
          <h3 className="text-lg font-semibold text-teal-400">روابط هامة</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-gray-300 hover:text-teal-400 transition font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center">
          <Image
            src="/images/primeWinnerLogo.png"
            alt="Prime Winner Logo"
            width={150}
            height={50}
            className="w-[150px] h-auto object-contain"
          />
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        <h3 className="text-teal-400">Rudic Technical Task - Omar Ryad</h3>©
        Copyright Rudic Software Platform 2025 All Rights Reserved • Developed
        By <span className="text-teal-400">Omar Ryad</span>
      </div>
    </footer>
  );
};

export default Footer;
