"use client";

import React, { useState, useEffect } from "react";
import ProgrammeCard from "./ProgrammeCard";

export default function AppliedAndHealthSciencesProgrammePicker() {
  const [activeLevel, setActiveLevel] = useState<string>("Bachelor's");
  const [showAll, setShowAll] = useState<boolean>(false);
  
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    let levelParam = urlParams.get('level');
    if (levelParam === 'Bachelors') levelParam = "Bachelor's";
    if (levelParam === 'Masters') levelParam = "Master's";
    if (levelParam) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActiveLevel(levelParam);
    }
  }, []);

  const programmes: Record<string, any[]> = {
    "Bachelor's": [
      // From Applied Sciences
      ...["Biotechnology", "Microbiology"].map(spec => ({
        title: `Bachelor of Science (B.Sc.)\n${spec}`, 
        duration: "3 Years", 
        eligibility: "Candidate shall have passed 12th Examination in Science stream from a recognized board.", 
        intake: "60", 
        mode: "Full-time",
        tuitionFee: "₹95,000",
        specialisations: [],
        enquiryValue: spec === "Biotechnology" ? "bsc-biotech" : "bsc-microbio"
      })),
      ...["Biotechnology", "Microbiology"].map(spec => ({
        title: `Bachelor of Science - Honors (B.Sc. Hons.) (NEP 2020)\n${spec}`, 
        duration: "4 Years", 
        eligibility: "Candidate shall have passed 12th Examination in Science stream from a recognized board.", 
        intake: "60", 
        mode: "Full-time",
        tuitionFee: "₹95,000",
        specialisations: [],
        enquiryValue: spec === "Biotechnology" ? "bsc-hons-biotech" : "bsc-hons-microbio"
      })),
      // From Allied Health
      { 
        title: "Bachelor of Anaesthesia & Operation Theatre Technology (B.AOTT)", 
        duration: "4 Years", 
        eligibility: "Candidate shall have passed 12th Examination in Science stream with Physics, Chemistry & Biology subjects from a recognized board.", 
        intake: "60", 
        mode: "Full-time",
        tuitionFee: "₹95,000",
        enquiryValue: "baott"
      },
      { 
        title: "Bachelor of Medical Laboratory Science (BMLS)", 
        duration: "4 Years", 
        eligibility: "Candidate shall have passed 12th Examination in Science stream with Physics, Chemistry & Biology subjects from a recognized board.", 
        intake: "60", 
        mode: "Full-time",
        tuitionFee: "₹95,000",
        enquiryValue: "bmls"
      }
    ],
    "Master's": [
      // From Applied Sciences
      {
        title: "Master of Science (M.Sc.)\nBiotechnology",
        duration: "2 Years",
        eligibility: "Candidate shall have passed B.Sc in Biotechnology/Life Sciences/Microbiology/Biochemistry/Botany/Zoology/Genetics from a recognized university.",
        intake: "30",
        mode: "Full-time",
        tuitionFee: "₹1,10,000",
        specialisations: [],
        enquiryValue: "msc-biotech"
      },
      {
        title: "Master of Science (M.Sc.)\nMicrobiology",
        duration: "2 Years",
        eligibility: "Candidate shall have passed B.Sc. in Microbiology/Life Sciences/Biotechnology from a recognized university.",
        intake: "30",
        mode: "Full-time",
        tuitionFee: "₹1,10,000",
        specialisations: [],
        enquiryValue: "msc-microbio"
      }
    ],
    "Doctoral Programs": [
      // From Allied Health
      {
        title: "Doctor of Philosophy - Biotechnology",
        duration: "3 Years",
        eligibility: "Master's in a relevant subject with 55% (general) / 50% (SC/ST/OBC-NCL / EWS / differently-abled), or 4-yr Bachelor's with 75%.",
        intake: "30",
        mode: "Full-time",
        tuitionFee: "₹1,05,000",
        enquiryValue: "phd"
      },
      {
        title: "Doctor of Philosophy - Microbiology",
        duration: "3 Years",
        eligibility: "Master's in a relevant subject with 55% (general) / 50% (SC/ST/OBC-NCL / EWS / differently-abled), or 4-yr Bachelor's with 75%.",
        intake: "30",
        mode: "Full-time",
        tuitionFee: "₹1,05,000",
        enquiryValue: "phd"
      }
    ]
  };

  const currentProgrammes = programmes[activeLevel] || [];
  const visibleProgrammes = showAll ? currentProgrammes : currentProgrammes.slice(0, 3);

  return (
    <section className="w-full bg-[#FAFAFA] py-12 sm:py-16">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-ink mb-2 section-subheading">
            Applied and Health Sciences
          </h2>
          <h3 className="text-[#0CAADD] mb-6 section-heading">
            Pick your Programme.
          </h3>
          
          {/* Toggles */}
          <div className="flex flex-wrap justify-center items-center gap-3">
            {Object.keys(programmes).map((level) => (
              <button
                key={level}
                onClick={() => {
                  setActiveLevel(level);
                  setShowAll(false);
                }}
                className={`rounded-full px-8 sm:px-10 py-3.5 sm:py-4 font-bold text-[16px] sm:text-[18px] transition-all duration-200 border ${
                  activeLevel === level
                    ? "bg-[#0CAADD] text-white border-[#0CAADD] shadow-md shadow-[#0CAADD]/20"
                    : "bg-transparent text-ink border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 w-full mx-auto items-stretch">
          {visibleProgrammes.map((prog, idx) => (
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

        {!showAll && currentProgrammes.length > 3 && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setShowAll(true)}
              className="border-2 border-[#E73649] text-[#E73649] hover:bg-[#E73649] hover:text-white rounded-full px-12 py-3 font-bold text-[17px] transition-all inline-flex items-center justify-center gap-2"
            >
              View all programmes &rarr;
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
