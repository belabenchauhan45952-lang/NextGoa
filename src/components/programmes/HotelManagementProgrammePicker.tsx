"use client";

import React, { useState, useEffect } from "react";
import ProgrammeCard from "./ProgrammeCard";

export default function HotelManagementProgrammePicker() {
  const [activeLevel, setActiveLevel] = useState<string>("Bachelor's");

  const hmProgrammes = [
    { 
      title: "BHMCT",
      level: "Bachelor's",
      duration: "4 Years",
      eligibility: "Candidate shall have passed 12th Examination in any stream (Science/ Commerce/Arts) with a minimum of 45% for General category (40% for SC/ST/SEBC Candidates) with English subject from a recognized board.",
      intake: "60",
      mode: "Full-time",
      tuitionFee: "₹1,00,000",
      enquiryValue: "bhmct"
    },
    { 
      title: "Bachelor of Science -\nHotel Management",
      level: "Bachelor's",
      duration: "3 Years",
      eligibility: "Candidate shall have passed 12th Examination in any stream  (Science/ Commerce/Arts) from a recognized board.",
      intake: "60",
      mode: "Full-time",
      tuitionFee: "₹1,00,000",
      enquiryValue: "bsc-hotel-management"
    },
    { 
      title: "Bachelor of Science - Honors\n(B.Sc Hons.) - Hotel Management",
      level: "Bachelor's",
      duration: "4 Years",
      eligibility: "Candidate shall have passed 12th Examination in any stream  (Science/ Commerce/Arts) from a recognized board.",
      intake: "60",
      mode: "Full-time",
      tuitionFee: "₹1,00,000",
      enquiryValue: "bsc-hons-hotel-management"
    }
  ];

  const levels = Array.from(new Set(hmProgrammes.map(p => p.level)));
  const filteredProgrammes = hmProgrammes.filter(p => p.level === activeLevel);

  return (
    <section className="w-full bg-[#FAFAFA] py-12 sm:py-16">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-ink mb-2 section-subheading">
            Hotel Management
          </h2>
          <h3 className="text-[#E73649] mb-6 section-heading">
            Pick your Hospitality Programme.
          </h3>
          
          {/* Toggles */}
          <div className="flex flex-wrap justify-center items-center gap-3">
            {levels.map((level) => (
              <button
                key={level}
                onClick={() => setActiveLevel(level)}
                className={`rounded-full px-8 sm:px-10 py-3.5 sm:py-4 font-bold text-[16px] sm:text-[18px] transition-all duration-200 border ${
                  activeLevel === level
                    ? "bg-[#E73649] text-white border-[#E73649] shadow-md shadow-[#E73649]/20"
                    : "bg-transparent text-ink border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 w-full max-w-7xl mx-auto items-stretch">
          {filteredProgrammes.map((prog, idx) => (
            <ProgrammeCard
              key={idx}
              title={prog.title}
              duration={prog.duration}
              eligibility={prog.eligibility}
              tuitionFee={prog.tuitionFee}
              intake={prog.intake}
              mode={prog.mode}
              enquiryValue={prog.enquiryValue}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
