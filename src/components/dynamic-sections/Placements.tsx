
"use client";
import Image from "next/image";
import { Eyebrow } from "./Decor";
import { useState, useEffect } from "react";
// import { TwoThousandPlusIcon } from "./TwoThousandPlusIcon";

interface PlacementsProps {
  data: {
    eyebrow?: string;
    heading?: string;
    description?: string;

    highlightCard?: {
      badge?: string;
      package?: string;
      suffix?: string;
      description?: string;
      image?: string;
    };

    recruiting?: {
      count?: string;
      title?: string;
      description?: string;
    };

    stats?: {
      title: string;
      titleClass?: string;
      label: string;
    }[];

    aboutStats?: {
      title: string;
      titleClass?: string;
      label: string;
    }[];
  };

  variant?: "landing" | "about";
}

export function Placements({ data, variant = "landing" }: PlacementsProps) {
  const isAbout = variant === "about";

  const stats = data?.stats || [];

  const aboutExtraStats = data?.aboutStats || [];

  const highlight = data?.highlightCard || {};

  const recruiting = data?.recruiting || {};

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
    <section
      id="placements"
      className={
        isAbout
          ? "bg-gradient-to-b from-[#D6F0FA] via-[#F8F8F8]/50 to-brand-white -mt-10 pt-10 relative z-0"
          : "bg-brand-white"
      }
    >
      <div className="mx-auto max-w-6xl px-4 pt-15 pb-20 sm:py-15">
        <div className="flex justify-center mb-6">
          <img
            src="/Test.svg"
            alt=""
            aria-hidden="true"
            className="h-[97px] w-auto"
          />
        </div>
        <Eyebrow className="mt-3 text-ink">
          {isAbout ? "Legacy in Numbers" : "Numbers That Matter"}
        </Eyebrow>
        <h2 className="mt-2 text-center section-heading text-brand">
          {isAbout
            ? "Excellence That Needs No Introduction!"
            : "The ecosystem in figures."}
        </h2>
        <p className="mt-3 text-center section-body text-ink">
          {isAbout
            ? "Figures from Parul University, Gujarat."
            : "Three decades of placement results, distilled."}
        </p>

       {/* ── Auto-Updating Image Slider Replacing Static Cards ── */}
        <div className="relative mt-8 w-full pb-3">
          
          {/* Images Layout Container Frame */}
          <div className="relative w-full rounded-[24px] overflow-hidden shadow-lg min-h-[140px] sm:min-h-[280px]">
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

          {/* ── Corrected Dot Navigation with Custom Yellow Active Pill ── */}
          <div className="absolute -bottom-6 left-0 right-0 z-20 flex justify-center items-center gap-2.5">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-3.5 transition-all duration-300 rounded-full ${
                  index === currentIndex 
                    ? "w-10 bg-[#FEDB2F]" // Active state: Wide yellow pill shape
                    : "w-3.5 bg-[#E5E7EB] " // Inactive state: Translucent round dot
                }`}
              />
            ))}
          </div>
        </div>

        {/* Recruiting companies line */}
        <div className="mt-8 flex items-center justify-center gap-3.5 sm:gap-8">
          {/* Left: 2200 SVG image */}
              <div
                className="flex-shrink-0"
                dangerouslySetInnerHTML={{
                  __html: recruiting.count || "",
                }}
              />

          {/* Middle: Vertical divider */}
          <div className="h-14 sm:h-[90px] w-px bg-zinc-300" />

          {/* Right: Text block */}
          <div className="text-left">
            <h3 className="font-poppins font-semibold text-[18px] sm:text-[40px] leading-tight text-[#1F1F1F]">
              {recruiting.title}
            </h3>
            <p
              className="mt-0.5 sm:mt-2 font-[family-name:var(--font-poppins)] font-normal text-[11px] sm:text-[18px] text-zinc-500"
              dangerouslySetInnerHTML={{
                __html: recruiting.description || "",
              }}
            />
          </div>
        </div>

        {/* Stat trio - Row 1 */}
        <dl className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className={`${
                idx === 0 ? "col-span-2 sm:col-span-1" : ""
              } flex flex-col items-center justify-center rounded-[16px] sm:rounded-[20px] border border-zinc-300 bg-white text-center shadow-sm ${
                idx === 0 ? "px-7 py-6" : "px-4 py-5 sm:px-7 sm:py-6"
              }`}
            >
              <dt
                className={`font-sans font-bold leading-[1.15] text-[#0CAADD] tracking-tight ${
                  item.titleClass || "text-[22px] sm:text-[28px] lg:text-[30px]"
                }`}
                dangerouslySetInnerHTML={{
                  __html: item.title,
                }}
              />

              <dd className="mt-2 sm:mt-3 font-[family-name:var(--font-poppins)] font-normal text-ink leading-[1.45] text-[14px] sm:text-[15px]">
                {item.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
