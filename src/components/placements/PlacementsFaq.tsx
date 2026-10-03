"use client";

import { useState } from "react";

const placementFaqs = [
  {
    question: "What is the highest package at PU?",
    answer: "The highest reported package across the Parul ecosystem is ₹60 LPA, secured by B.Tech CSE student and Suraj Jagtap from the 2027 batch at Parul University, Vadodara. Average and median packages vary by faculty and programme - confirmed in the placement report.",
  },
  {
    question: "Will placements be available for the first PU Goa batch?",
    answer: "Yes. PU Goa students access the full 2,200+ company recruitment network of the Parul University ecosystem from Year 1. Placement training, mock interviews, profile building, internships, and industry mentorship begin in the first semester.",
  },
  {
    question: "How does PU Goa offer placement support?",
    answer: "PU Goa offers 100% placement support through guidance, mentorship, and training programmes. Trainings are given to students before actual placement where they are taught the required skills and groomed for interviews.",
  },
  {
    question: "Can I be an entrepreneur instead of taking a placement?",
    answer: "Yes. The Parul University E-Cell has incubated 254 startups, raised ₹20 Cr+ in funding and generated ₹40 Cr+ in revenue. PU Goa students inherit the full E-Cell network — alumni founders include Solnce Energy (Shark Tank India winner), Voldebug Innovations (Home Ministry award) and Cligent Aerospace (India's first hydrogen-electric aircraft startup).",
  },
  {
    question: "Are pre-placement offers available through internships?",
    answer: "Yes. Internships are embedded in the curriculum from Year 1 across faculties. A significant percentage of internship students convert to pre-placement offers - exact figures are published in the annual placement report by faculty.",
  },
];

function FaqAccordionItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="bg-white shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-gray-100 rounded-[12px] overflow-hidden">
      <button
        onClick={onToggle}
        className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left font-[family-name:var(--font-poppins)] text-[15px] sm:text-base font-medium text-[#333333]"
      >
        {question}
        <span
          className="shrink-0 text-[#EF4444] transition-transform duration-300 ease-in-out text-2xl font-light"
          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden px-6">
          <p className="mt-1 font-[family-name:var(--font-poppins)] text-sm sm:text-[15px] leading-relaxed text-gray-600">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function PlacementsFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#F5F6F8] py-16 sm:py-24">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <h3 className="text-black mb-2 section-subheading">FAQs</h3>
          <h2 className="text-[#EF4444] section-heading">
            Frequently asked questions about placements.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[380px_1fr] gap-8 lg:gap-12 items-start">
          
          {/* Yellow accent card */}
          <div className="relative hidden md:block w-full aspect-square rounded-[24px] bg-[#FACC15] overflow-hidden">
            <svg
              viewBox="57 102 238 228"
              fill="none"
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 w-[70%] -translate-x-1/2 -translate-y-1/2"
            >
              <g opacity="0.4">
                <path d="M235.499 216.428C268.36 216.428 294.999 190.921 294.999 159.456C294.999 127.992 268.36 102.484 235.499 102.484C202.638 102.484 175.999 127.992 175.999 159.456C175.999 190.921 202.638 216.428 235.499 216.428Z" fill="#FDE047" />
                <path d="M116.5 216.428C149.361 216.428 176 190.921 176 159.456C176 127.992 149.361 102.484 116.5 102.484C83.6392 102.484 57 127.992 57 159.456C57 190.921 83.6392 216.428 116.5 216.428Z" fill="#FDE047" />
                <path d="M235.499 330.369C268.36 330.369 294.999 304.861 294.999 273.397C294.999 241.932 268.36 216.425 235.499 216.425C202.638 216.425 175.999 241.932 175.999 273.397C175.999 304.861 202.638 330.369 235.499 330.369Z" fill="#FDE047" />
                <path d="M116.5 330.369C149.361 330.369 176 304.861 176 273.397C176 241.932 149.361 216.425 116.5 216.425C83.6392 216.425 57 241.932 57 273.397C57 304.861 83.6392 330.369 116.5 330.369Z" fill="#FDE047" />
                <path d="M237.912 157.146H114.088V275.709H237.912V157.146Z" fill="#CA8A04" opacity="0.3" />
                <path d="M235.499 216.422C202.643 216.422 176.001 241.931 176.001 273.399C176.001 241.931 149.36 216.422 116.504 216.422C149.36 216.422 176.001 190.921 176.001 159.452C176.001 190.921 202.643 216.422 235.499 216.422Z" fill="#FDE047" />
              </g>
            </svg>
          </div>

          {/* Accordion list */}
          <div className="flex flex-col gap-3">
            {placementFaqs.map((faq, i) => (
              <FaqAccordionItem 
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
