"use client";

import React, { useState, useEffect } from "react";
import ProgrammeCard from "./ProgrammeCard";

export default function ManagementProgrammePicker() {
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
      { 
        title: "Bachelor of Business\nAdministration (BBA)", 
        duration: "3 Years", 
        eligibility: "Candidate shall have passed 12th Examination in any stream (Science/Commerce/Arts) with English subject from a recognized board.", 
        intake: "120", 
        mode: "Full-time",
        tuitionFee: "₹1,10,000",
        specialisations: [],
        enquiryValue: "bba"
      },
      ...["General", "Data Analytics", "Financial Management", "Human Resource", "Marketing", "Logistics and Supply Chain Management"].map(spec => ({
        title: `BBA Honours (NEP 2020)\n${spec}`, 
        duration: "4 Years", 
        eligibility: "Candidate shall have passed 12th Examination in any stream (Science/Commerce/Arts) with English subject from a recognized board.", 
        intake: "60", 
        mode: "Full-time",
        tuitionFee: "₹1,10,000",
        specialisations: [],
        enquiryValue: "bba-hons"
      }))
    ],
    "Master's": [
      ...["General", "Business Analytics", "Finance", "Human Resource", "Marketing", "Operations Management"].map(spec => ({
        title: `Master of Business\nAdministration (MBA) - ${spec}`, 
        duration: "2 Years", 
        eligibility: "Candidate shall have passed Graduation with minimum of 50% for Open category (45% for Reserved category) from a recognized university.", 
        intake: "60", 
        mode: "Full-time",
        tuitionFee: "₹2,00,000",
        specialisations: [],
        enquiryValue: "mba"
      }))
    ],
    "Doctoral Programs": [
      {
        title: "Doctor of Philosophy - Finance",
        duration: "3 Years",
        eligibility: "Master's in a relevant subject with 55% (general) / 50% (SC/ST/OBC-NCL / EWS / differently-abled), or 4-yr Bachelor's with 75%.",
        intake: "30",
        mode: "Full-time",
        tuitionFee: "₹1,05,000",
        enquiryValue: "phd"
      },
      {
        title: "Doctor of Philosophy - Human Resource", 
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
            Management Studies
          </h2>
          <h3 className="text-[#E73649] mb-6 section-heading">
            Pick your Management Programme.
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

        {!showAll && currentProgrammes.length > 3 && (
          <div className="text-center mt-12">
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
