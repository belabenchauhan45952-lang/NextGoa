"use client";

import React, { useState, useEffect } from "react";
import ProgrammeCard from "./ProgrammeCard";

type Programme = {
  title: string;
  duration: string;
  eligibility: string;
  intake: string;
  mode: string;
  isNew?: boolean;
  tuitionFee?: string;
  enquiryValue?: string;
};

export default function ItComputerSciencePicker() {
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

  const bcaEligibility = "Candidate shall have passed 12th Examination in any stream (Science/ Commerce/Arts) with English and Maths or Statistics subject from a rocognized board. If candidate doesn't have these subjects in 12th then check for it in 10th.";
  const mcaEligibility = "Candidate shall have passed Graduation with minimum 50% for Open Category and 45% for Reserved Category from a recognized university.";

  const specialisationsList = [
    "AI",
    "Cyber Security",
    "AI and Data Science",
    "AI and Machine Learning",
    "Quantum Computing in AI"
  ];

  const bcaProgrammes: Programme[] = [
    {
      title: "Bachelor of Computer Application (BCA)\nGeneral",
      duration: "3 Years",
      eligibility: bcaEligibility,
      intake: "120",
      mode: "Full-time",
      tuitionFee: "₹95,000",
      enquiryValue: "bca"
    },
    ...specialisationsList.map(spec => ({
      title: `Bachelor of Computer Application (BCA)\nwith ${spec}`,
      isNew: true,
      duration: "3 Years",
      eligibility: bcaEligibility,
      intake: "120",
      mode: "Full-time",
      tuitionFee: "₹95,000",
      enquiryValue: "bca"
    })),
    {
      title: "Bachelor of Computer Application - Honors (BCA Hons.)\nGeneral (NEP 2020)",
      duration: "4 Years",
      eligibility: bcaEligibility,
      intake: "120",
      mode: "Full-time",
      tuitionFee: "₹95,000",
      enquiryValue: "bca"
    },
    ...specialisationsList.map(spec => ({
      title: `Bachelor of Computer Application - Honors (BCA Hons.)\nwith ${spec} (NEP 2020)`,
      isNew: true,
      duration: "4 Years",
      eligibility: bcaEligibility,
      intake: "120",
      mode: "Full-time",
      tuitionFee: "₹95,000",
      enquiryValue: "bca"
    }))
  ];

  const mcaProgrammes: Programme[] = [
    {
      title: "Master of Computer Application (MCA)\nGeneral",
      duration: "2 Years",
      eligibility: mcaEligibility,
      intake: "120",
      mode: "Full-time",
      tuitionFee: "₹1,35,000",
      enquiryValue: "mca"
    },
    ...specialisationsList.map(spec => ({
      title: `Master of Computer Application (MCA)\nwith ${spec}`,
      isNew: true,
      duration: "2 Years",
      eligibility: mcaEligibility,
      intake: "120",
      mode: "Full-time",
      tuitionFee: "₹1,35,000",
      enquiryValue: "mca"
    }))
  ];

  const doctoralProgrammes: Programme[] = [
    {
      title: "Doctor of Philosophy - Information Technology",
      duration: "3 Years",
      eligibility: "Master's in a relevant subject with 55% (general) / 50% (SC/ST/OBC-NCL / EWS / differently-abled), or 4-yr Bachelor's with 75%.",
      intake: "30",
      mode: "Full-time",
      tuitionFee: "₹1,05,000",
      enquiryValue: "phd"
    },
    {
      title: "Doctor of Philosophy - IT and Computer Science",
      duration: "3 Years",
      eligibility: "Master's in a relevant subject with 55% (general) / 50% (SC/ST/OBC-NCL / EWS / differently-abled), or 4-yr Bachelor's with 75%.",
      intake: "30",
      mode: "Full-time",
      tuitionFee: "₹1,05,000",
      enquiryValue: "phd"
    }
  ];

  const programmeData: Record<string, Programme[]> = {
    "Bachelor's": bcaProgrammes,
    "Master's": mcaProgrammes,
    "Doctoral Programs": doctoralProgrammes
  };

  const currentProgrammes = programmeData[activeLevel] || [];
  const visibleProgrammes = showAll ? currentProgrammes : currentProgrammes.slice(0, 3);

  return (
    <section className="w-full bg-[#FAFAFA] pt-16 pb-13 sm:pt-24">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-ink mb-2 section-subheading">
            IT &amp; Computer Science
          </h2>
          <h3 className="text-[#0CAADD] mb-10 section-heading">
            Pick your Computing Programme.
          </h3>
          
          {/* Toggles */}
          <div className="flex flex-wrap justify-center items-center gap-3">
            {["Bachelor's", "Master's", "Doctoral Programs"].map((level) => (
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

        {/* View All / View Less Button */}
        {currentProgrammes.length > 3 && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="border-2 border-[#E73649] text-[#E73649] hover:bg-[#E73649] hover:text-white rounded-full px-12 py-3 font-bold text-[17px] transition-all inline-flex items-center justify-center gap-2"
            >
              {showAll ? "View less \u2190" : "View all \u2192"}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
