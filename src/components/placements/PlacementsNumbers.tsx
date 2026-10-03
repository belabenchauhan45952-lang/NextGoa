"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Animated2200Icon } from "@/components/placements/Animated2200Icon";

export function PlacementsNumbers() {

   const banners = [
    "/placements/placement-banner-1.png",
    "/placements/placement-banner-2.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // 2. Setup interval for auto-updating every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <section className="relative w-full z-10 overflow-hidden bg-transparent text-white -mt-6 sm:-mt-12 py-16 sm:py-24"
      style={{
        paddingTop: "clamp(5rem, 12.2vw, 600px)",
        paddingBottom: "clamp(5rem, 13.3vw, 600px)"
      }}
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Middle Solid Blue Background */}
        <div 
          className="absolute inset-x-0 bg-[#0CAADD]" 
          style={{ 
            top: "calc(clamp(50px, 8vw, 500px) - 1.5px)", 
            bottom: "calc(clamp(50px, 8vw, 500px) - 1.5px)" 
          }} 
        />
        {/* Top Wave */}
        <div 
          className="absolute top-0 left-0 right-0 overflow-hidden"
          style={{ height: "clamp(50px, 8vw, 500px)" }}
        >
          <div 
            className="absolute top-0 left-0 w-[400%] h-full animate-wave-flow"
            style={{
              backgroundImage: "url('/88-double.svg?v=3')",
              backgroundSize: "50% auto",
              backgroundPosition: "top left",
              backgroundRepeat: "repeat-x"
            }}
          />
        </div>
        {/* Bottom Wave */}
        <div 
          className="absolute bottom-0 left-0 right-0 overflow-hidden"
          style={{ height: "clamp(50px, 8vw, 500px)" }}
        >
          <div 
            className="absolute bottom-0 left-0 w-[400%] h-full animate-wave-flow"
            style={{
              backgroundImage: "url('/88-double.svg?v=3')",
              backgroundSize: "50% auto",
              backgroundPosition: "bottom left",
              backgroundRepeat: "repeat-x"
            }}
          />
        </div>
      </div>
      
      {/* Decorative Assets */}
      <div className="absolute left-0 top-[20%] z-0 w-32 md:w-64 h-64 md:h-[400px] pointer-events-none opacity-40">
        <Image
          src="/abroad/Global Lighthouse.svg"
          alt="Lighthouse Decoration"
          fill
          className="object-contain object-left"
        />
      </div>
      <div className="absolute right-0 bottom-[10%] z-0 w-40 md:w-72 h-40 md:h-72 pointer-events-none">
        <Image
          src="/abroad/Global Sunrise.png"
          alt="Sunrise Decoration"
          fill
          className="object-contain object-right"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 flex flex-col items-center justify-center">
        {/* Heading Section */}
        <p className="text-white mb-2 text-center section-subheading">
          Numbers That Matter
        </p>
        <h2 className="text-center text-white section-heading">
          The ecosystem in figures.
        </h2>
        <p className="text-center text-white/90 section-body">
          Three decades of placement results, distilled.
        </p>

     {/* ── Auto-Updating Image Slider ── */}
        <div className="relative mt-6 sm:mt-12 w-full rounded-[24px] overflow-hidden pb-10">
          
          {/* Images Layout Container */}
          <div className="relative w-full h-full min-h-[140px] sm:min-h-[280px]">
            {banners.map((src, index) => (
              <div
                key={src}
                className={`w-full transition-opacity duration-700 ease-in-out ${
                  index === currentIndex 
                    ? "relative opacity-100 z-10 block" 
                    : "absolute inset-0 opacity-0 z-0 hidden"
                }`}
              >
                <img
                  src={src}
                  alt={`Placement Banner ${index + 1}`}
                  className="w-full h-auto object-contain block mx-auto rounded-[24px]"
                />
              </div>
            ))}
          </div>

          {/* Dot Navigation Indicators */}
          <div className="absolute bottom-3 left-0 right-0 z-20 flex justify-center gap-2">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "w-6 sm:w-8 bg-[#FEDB2F]" 
                    : "w-2 sm:w-2.5 bg-white/40 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* 2200++ Recruiting companies line */}
        <div className="mt-10 sm:mt-12 flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-12 w-full max-w-5xl">
          <div className="flex-shrink-0">
            <Animated2200Icon className="h-20 sm:h-24 md:h-28 w-auto" />
          </div>

          <div className="hidden md:block h-16 sm:h-32 w-[1px] bg-white/40" />

          <div className="text-center md:text-left">
            <h3 className="font-poppins font-semibold text-[24px] sm:text-[32px] md:text-[48px] lg:text-[56px] leading-tight text-white tracking-tight whitespace-nowrap">
              Recruiting companies<span className="text-white">*</span>
            </h3>
            <p className="mt-1 md:mt-2 font-[family-name:var(--font-poppins)] font-normal text-[14px] sm:text-[18px] md:text-[24px] text-white/90">
              Across the Parul University ecosystem, every year.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}
