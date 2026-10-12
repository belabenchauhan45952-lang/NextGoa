"use client";

import React, { useState, useEffect } from "react";
import ProgrammeCard from "./ProgrammeCard";

export default function NursingProgrammePicker() {
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

  const programmesData: Record<string, any[]> = {
    "Bachelor's": [
      { 
        title: "General Nursing and\nMidwifery (G.N.M)", 
        duration: "3 Years", 
        eligibility: "Candidate shall have passed 12th Examination in any stream (Science,Commerce,Arts) with English with minimum 40% for General Category, 40% for EWS and 35% for Reserved category from a recognized board\nOR\nCandidate shall have passed 12th Examination with English having 40% in vocational ANM Course from the school recognized by Indian Nursing Council.", 
        intake: "40", 
        mode: "Full-time",
        tuitionFee: "₹1,55,000",
        enquiryValue: "gnm"
      },
      { 
        title: "Bachelor of Science\nin Nursing", 
        duration: "4 Years", 
        eligibility: "Candidate shall have passed 12th Examination in Science stream with Physics, Chemistry and Biology as compulsory subjects with minimum 45% for general category, 45% For EWS and 40% for reserved category in theory + practical (PCB) with English as a compulsory subject from a recognized board. \nNote - Apart from this candidate shall have appeared NEET examination in the concurrent year\nAdmission will be granted based on the entrance examination conducted by the University.", 
        intake: "100", 
        mode: "Full-time",
        tuitionFee: "₹2,10,000",
        enquiryValue: "bsc-nursing"
      },
      { 
        title: "Post Basic Bachelor of Science\nin Nursing (PB-B.Sc.)", 
        duration: "2 Years", 
        eligibility: "Candidate shall have passed GNM Examination as regular candidate from an institution recognized by Gujarat Nursing Council/ Indian Nursing Council.\n\nAlso candidate should be registered as Registered Nurse & Registered Midwife with the Gujarat Nursing Council or equivalent State Nursing Council", 
        intake: "40",   
        mode: "Full-time",
        tuitionFee: "₹1,20,000",
        enquiryValue: "pb-bsc-nursing"
      }
    ],
    "Doctoral Programs": [
      {
        title: "Doctor of Philosophy - Nursing",
        duration: "3 Years",
        eligibility: "Master's in a relevant subject with 55% (general) / 50% (SC/ST/OBC-NCL / EWS / differently-abled), or 4-yr Bachelor's with 75%.",
        intake: "30",
        mode: "Full-time",
        tuitionFee: "₹1,05,000",
        enquiryValue: "phd"
      }
    ]
  };

  const currentProgrammes = programmesData[activeLevel] || [];
  const visibleProgrammes = showAll ? currentProgrammes : currentProgrammes.slice(0, 3);

  return (
    <section className="w-full bg-[#FAFAFA] py-12 sm:py-16">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-ink mb-2 section-subheading">
            Nursing
          </h2>
          <h3 className="text-[#0CAADD] mb-6 section-heading">
            Pick your Nursing Programme.
          </h3>
          
          {/* Toggles */}
          <div className="flex flex-wrap justify-center items-center gap-3">
            {["Bachelor's", "Doctoral Programs"].map((level) => (
              <button
                key={level}
                onClick={() => setActiveLevel(level)}
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

        {/* Important Notes */}
        <div className="mt-12 text-center text-ink/80 text-[14px] sm:text-[15px] max-w-2xl mx-auto">
          <p>Admission will be granted based on the entrance examination conducted by the University.</p>
        </div>

        {/* View All Button */}
        {!showAll && currentProgrammes.length > 3 && (
          <div className="text-center mt-8">
            <button 
              onClick={() => setShowAll(true)}
              className="border-2 border-[#E73649] text-[#E73649] hover:bg-[#E73649] hover:text-white rounded-full px-12 py-3 font-bold text-[17px] transition-all inline-flex items-center justify-center gap-2"
            >
              View all &rarr;
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
