"use client";

import React from "react";
import Image from "next/image";

const Seasons = () => {
  // Season data
  const seasons = [
    {
      title: "اقرا تفاصيل الموسم الاول",
      description: "جائزة نقدية 4000 دولار",
      image: "/images/season1.jpg", // Replace with actual image path
      videoUrl: "https://www.youtube.com/watch?v=example1",
    },
    {
      title: "اقرا تفاصيل الموسم الثاني",
      description: "جائزة نقدية 1500 دولار",
      image: "/images/season2.jpg", // Replace with actual image path
      videoUrl: "https://www.youtube.com/watch?v=example2",
    },
    {
      title: "اقرا تفاصيل الموسم الثالث",
      description: "جائزة نقدية 4000 دولار",
      image: "/images/season3.jpg", // Replace with actual image path
      videoUrl: "https://www.youtube.com/watch?v=example3",
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-teal-400">
          PRIME WINNER <span className="text-white">مواسم مسابقة</span>
        </h1>

        {/* Seasons Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {seasons.map((season, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <div className="relative w-full h-48">
                <Image
                  src={season.image}
                  alt={season.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <a
                    href={season.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 text-4xl"
                  >
                    ▶
                  </a>
                </div>
              </div>
              <div className="p-4 text-center">
                <h2 className="text-xl font-semibold mb-2">{season.title}</h2>
                <p className="text-gray-300">{season.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Seasons;
