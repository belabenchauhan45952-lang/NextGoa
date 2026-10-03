"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const desktopImages = [
  "/placements/carousel/Desktop/HCL 36.png",
  "/placements/carousel/Desktop/LTIM  79.png",
  "/placements/carousel/Desktop/Reliance 108.png",
  "/placements/carousel/Desktop/TCS 252.png",
  "/placements/carousel/Desktop/capgemini 157.png",
  "/placements/carousel/Desktop/cognizant 86.png",
  "/placements/carousel/Desktop/hexawarw 36.png",
  // "/placements/carousel/Desktop/Microsoft.png",
];

const mobileImages = [
  "/placements/carousel/Mobile/HCL.png",
  //"/placements/carousel/Mobile/Cognizant 88.png", // Assuming correspondence
  "/placements/carousel/Mobile/Reliance 109.png",
  "/placements/carousel/Mobile/TCS 253.png",
  "/placements/carousel/Mobile/Capegeminni 157.png",
  "/placements/carousel/Mobile/Cognizant 87.png",
  "/placements/carousel/Mobile/hexaware.png",
  "/placements/carousel/Mobile/Cognizant.png", // Corresponds to Microsoft.png
];

export function PlacementsHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % desktopImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full aspect-[788/1200] md:aspect-auto min-h-0 md:min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#F0F8FF] mt-8 md:mt-0">
      
      {/* Desktop Hero Background Carousel */}
      <div className="hidden md:block absolute inset-0 w-full h-full">
        {desktopImages.map((src, index) => (
          <Image 
            key={src}
            src={src} 
            alt={`Placement Hero Desktop ${index}`} 
            fill
            priority={index === 0}
            className={`object-cover object-top transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`} 
          />
        ))}
      </div>

      {/* Mobile Hero Background Carousel */}
      <div className="block md:hidden absolute inset-0 w-full h-full">
        {mobileImages.map((src, index) => (
          <Image 
            key={src}
            src={src} 
            alt={`Placement Hero Mobile ${index}`} 
            fill
            priority={index === 0}
            className={`object-cover object-top transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`} 
          />
        ))}
      </div>
    </section>
  );
}
