"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const stories = [
  {
    names: "Suraj Jagtap",
    batch: "B.Tech. CSE, Class of 2027",
    quote: "Grateful for this huge milestone! Thanks to placements at Parul University for always pushing me forward and believing in my journey. Excited to dive in and make the most of this opportunity!",
    company: "Microsoft",
    package: "₹60 LPA",
    image: "/placements/suraj-jagtap.png"
  },
  {
    names: "Suhani Shah",
    batch: "B.Tech. CSE, Class of 2025",
    quote: "I want to be a tech leader who blends creativity with code. This is just the beginning.",
    company: "Goldman Sachs",
    package: "",
    image: "/placements/Suhani Shah.jpg"
  },
  {
    names: "Ayush Bhuyar",
    batch: "B.Tech. CSE & IT, Class of 2026",
    quote: "Today, I’m happy to share that I’m stepping into the fintech world, and I couldn’t have asked for a better place to begin this journey than Bank of America. Grateful for the learnings, the setbacks, and everything that led me here.",
    company: "Bank Of America",
    package: "",
    image: "/placements/hero3.jpg"
  },
  {
    names: "Yuvraj Ranjan Singh",
    batch: "Indian Navy Officer",
    quote: "Commissioned as an officer in the Indian Navy - proof that PU outcomes go well beyond corporate placements.",
    company: "Indian Navy",
    package: "",
    image: "/placements/Yuvraj Ranjan Singh.jpg"
  },
  {
    names: "Pratham Pandya",
    batch: "Hotel Management, BHMCT",
    quote: "I’m happy to share that I’m starting a new position as Guest Service Agent at Downtown Indianapolis - Union Station Crowne Plaza!",
    company: "Crowne Plaza",
    package: "₹45 LPA",
    image: "/placements/Pratham-Pandya.png"
  }
];

export function AlumniStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false); // start fade out
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % stories.length);
        setFade(true); // fade back in
      }, 500); // 500ms transition
    }, 6000); // changes every 6 seconds

    return () => clearInterval(timer);
  }, []);

  const currentStory = stories[currentIndex];

  return (
    <section id="alumni"
      className="relative w-full overflow-hidden bg-transparent pt-[calc(clamp(50px,8vw,120px)+4rem)] pb-[calc(clamp(50px,8vw,120px)+4rem)] scroll-mt-24 md:scroll-mt-32 py-16 sm:py-24"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Top Background */}
        <div className="absolute top-0 left-0 right-0 bottom-1/2 bg-[#fff]" />
        {/* Bottom Background */}
        <div className="absolute bottom-0 left-0 right-0 top-1/2 bg-[#f0f2f5]" />
        {/* Middle Solid Red Background */}
        <div
          className="absolute inset-x-0 bg-[#E73649]"
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
              backgroundImage: "url('/89-double.svg?v=3')",
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
              backgroundImage: "url('/89-double.svg?v=3')",
              backgroundSize: "50% auto",
              backgroundPosition: "bottom left",
              backgroundRepeat: "repeat-x"
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 mt-4 sm:mt-6 mb-4 sm:mb-6">
        {/* Title Section */}
        <div className="text-center mb-16 sm:mb-20 mb-10">
          <h3 className="text-white mb-3 section-subheading">
            Alumni stories
          </h3>
          <h2 className="text-white tracking-tight section-heading">
            Real outcomes from the PU ecosystem.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 lg:gap-10 items-end">

          {/* Left Card - Image Frame */}
          <div className="hidden lg:flex items-center justify-center lg:justify-start mt-16 lg:mt-0 relative z-10 w-full max-w-md mx-auto lg:max-w-none lg:w-[95%]">
            <div className="relative w-full aspect-square">
              {/* Decorative Frame SVG */}
              <svg
                viewBox="0 0 519 520"
                fill="none"
                aria-hidden="true"
                className="pointer-events-none absolute -top-[27.5%] -left-[27.5%] w-[127.5%] h-[127.5%] z-0 hidden lg:block"
              >
                <rect x="271" y="271" width="239" height="238" rx="16" transform="rotate(180 271 271)" fill="#FEDB2F" />
                <line x1="293.293" y1="112" x2="293.293" y2="-3.09108e-08" stroke="#F8F8F8" strokeWidth="1.41431" strokeDasharray="14.14 14.14" />
                <line x1="251" y1="69.2928" x2="519" y2="69.2928" stroke="#F8F8F8" strokeWidth="1.41431" strokeDasharray="14.14 14.14" />
                <circle cx="294.009" cy="69.3235" r="5.76442" transform="rotate(180 294.009 69.3235)" fill="#FEDB2F" />
                <line y1="-0.707157" x2="112" y2="-0.707157" transform="matrix(-1 4.37114e-08 4.37114e-08 1 112 295)" stroke="#F8F8F8" strokeWidth="1.41431" strokeDasharray="14.14 14.14" />
                <line y1="-0.707157" x2="268" y2="-0.707157" transform="matrix(-8.74228e-08 1 1 8.74228e-08 70 252)" stroke="#F8F8F8" strokeWidth="1.41431" strokeDasharray="14.14 14.14" />
                <circle cx="5.76442" cy="5.76442" r="5.76442" transform="matrix(0 -1 -1 0 75.0887 300.773)" fill="#FEDB2F" />
              </svg>

              {/* Image Container */}
              <div
                className={`relative z-10 w-full h-full transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
              >
                <Image
                  src={currentStory.image}
                  alt={currentStory.names}
                  fill
                  className="object-cover object-top rounded-[20px] sm:rounded-[24px] border-[4px] sm:border-[8px] border-white drop-shadow-2xl bg-[#f0f0f0]"
                />
              </div>
            </div>
          </div>

          {/* Right Card - Quote */}
          <div className="relative z-10 w-full h-full lg:h-auto mt-12 lg:mt-0">
            <div className="bg-[#1C1C1C] rounded-[32px] p-2 sm:p-2.5 border-[3px] border-white shadow-2xl h-full">
              <div className="relative rounded-[24px] p-8 sm:p-10 flex flex-col h-full bg-[#1C1C1C] min-h-[480px]">

                {/* 8px Dashed Border Overlay */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none rounded-[24px]" style={{ overflow: 'visible' }} xmlns="http://www.w3.org/2000/svg">
                  <rect width="100%" height="100%" rx="24" fill="none" stroke="white" strokeWidth="2" strokeDasharray="8 8" />
                </svg>

                <div className={`transition-opacity duration-500 flex flex-col h-full flex-grow ${fade ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="relative z-10 mb-6">
                    <h4 className="text-white font-poppins font-semibold text-[22px] mb-1">{currentStory.names}</h4>
                    <p className="text-gray-400 font-sans text-xs sm:text-sm font-light">{currentStory.batch}</p>
                  </div>

                  <blockquote className="relative z-10 text-[#FEDB2F] font-sans font-medium text-[18px] sm:text-[22px] lg:text-[24px] leading-snug mb-10 flex-grow">
                    &quot;{currentStory.quote}&quot;
                  </blockquote>

                  {/* Bottom section pushed to end via mt-auto */}
                  <div className="mt-auto">
                    {/* 8px Dashed HR Separator */}
                    <svg width="100%" height="2" className="relative z-10 mb-6" aria-hidden="true">
                      <line x1="0" y1="1" x2="100%" y2="1" stroke="white" strokeWidth="2" strokeDasharray="8 8" />
                    </svg>

                    <div className="relative z-10 grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-gray-400 font-sans text-xs uppercase tracking-wider mb-1.5">Now at</p>
                        <p className="text-white font-sans font-medium text-sm sm:text-[15px]">{currentStory.company}</p>
                      </div>
                      {currentStory.package && (
                        <div>
                          <p className="text-gray-400 font-sans text-xs uppercase tracking-wider mb-1.5">Package</p>
                          <p className="text-[#E73649] font-sans font-bold text-sm sm:text-[15px]">{currentStory.package}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center items-center gap-2 mt-12 relative z-10">
          {stories.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setFade(false);
                setTimeout(() => {
                  setCurrentIndex(idx);
                  setFade(true);
                }, 300);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "bg-[#FEDB2F] w-8" : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
