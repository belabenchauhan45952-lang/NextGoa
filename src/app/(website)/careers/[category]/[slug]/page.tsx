"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

interface BlockItem {
  bold_title: string;
  text: string;
}

interface ContentBlock {
  type: "paragraph" | "unordered-list" | "ordered-list";
  text?: string;
  items?: BlockItem[];
}

interface ContentSection {
  section_title: string;
  blocks: ContentBlock[];
}

interface ContentCard {
  card_title: string;
  sections: ContentSection[];
}

interface Vacancy {
  id: number;
  title: string;
  slug: string;
  department: string;
  position: string;
  location: string;
  type: string;
  card_description: string;
  status: string;
  content: ContentCard[];
}

export default function CareerDetailsPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const category = params?.category as string;

  const [job, setJob] = useState<Vacancy | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    async function fetchJobDetails() {
      try {
        setLoading(true);
        const res = await fetch(`/api/vacancies/${slug}`);
        const result = await res.json();
        if (result.success && result.data) {
          setJob(result.data);
        } else {
          setError(result.message || "Vacancy not found");
        }
      } catch (err: any) {
        console.error("Error fetching job details:", err);
        setError("Failed to load vacancy details");
      } finally {
        setLoading(false);
      }
    }

    fetchJobDetails();
  }, [slug]);

  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-t-[#EF3341] border-gray-200 rounded-full animate-spin"></div>
          <p className="text-gray-600 font-medium">Loading vacancy details...</p>
        </div>
      </div>
    );
  }

  if (error || !job) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm max-w-md w-full text-center">
          <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Vacancy Not Found</h2>
          <p className="text-gray-600 mb-6">{error || "The vacancy you are looking for does not exist or has been deleted."}</p>
          <Link href="/careers" className="inline-block bg-[#EF3341] hover:bg-[#D92A36] text-white font-bold px-6 py-2.5 rounded-full transition-colors">
            Back to Listings
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="w-full flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full relative lg: flex items-center z-20 py-16 sm:py-24"
        style={{ minHeight: 'max(500px, 42vw)' }}
      >
        {/* Background Image Overflowing Downward */}
        <img 
          src="/car-2.png" 
          alt="Hero Background" 
          className="absolute top-0 left-0 w-full object-cover object-bottom z-0"
          style={{ height: 'calc(100% + 10vw)', minHeight: '52vw' }}
        />

        {/* Relative Content Overlay */}
        <div className="relative z-10 flex items-center w-full py-10">
          <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center h-full">
            
            {/* Left Content */}
            <div className="flex-1 flex flex-col justify-center w-full max-w-[750px] md:pr-8">
              <Link href="/careers" className="text-white hover:opacity-80 transition-opacity mb-6 font-medium text-sm w-fit flex items-center gap-2">
                &larr; Back to Listings
              </Link>

              {/* Pill */}
              <div className="border border-white text-white font-medium px-4 py-1.5 md:px-6 md:py-2 rounded-full w-fit mb-4 md:mb-6 text-[12px] md:text-sm lg:text-base">
                {job.position} Position
              </div>
              
              {/* Title */}
              <h1 className="text-white font-bold text-[36px] md:text-[60px] lg:text-[76px] leading-[1.1] mb-6 md:mb-8 tracking-tight relative z-10 pr-20 sm:pr-0">
                {job.title}
              </h1>
              
              {/* CTA */}
              <Link href={`/careers/${category}/${job.slug}/apply`} className="bg-[#EF3341] hover:bg-[#D92A36] transition-colors text-white text-[16px] md:text-[18px] font-bold px-8 py-3 md:px-10 md:py-3.5 rounded-full w-fit shadow-md text-center">
                Apply Now
              </Link>
            </div>
            
          </div>
        </div>
      </section>

      {/* Details Content Section */}
      <section className="w-full relative z-10 pb-16 sm:pb-24 pt-8 md:pt-[10vw]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 flex flex-col gap-6 mt-12 md:mt-[5vw]">
          
          {/* Render content cards from DB */}
          {Array.isArray(job.content) && job.content.map((card, cardIdx) => (
            <div key={cardIdx} className="bg-white rounded-[1rem] border border-gray-200 p-8 shadow-sm flex flex-col gap-6">
              {card.card_title && (
                <h2 className="text-[22px] font-bold text-[#111111] border-b pb-2 mb-2">
                  {card.card_title}
                </h2>
              )}
              {Array.isArray(card.sections) && card.sections.map((section, secIdx) => (
                <div key={secIdx} className="flex flex-col gap-3">
                  {section.section_title && (
                    <h3 className="text-lg font-bold text-[#111111]">
                      {section.section_title}
                    </h3>
                  )}
                  {Array.isArray(section.blocks) && section.blocks.map((block, blockIdx) => {
                    if (block.type === "paragraph") {
                      return (
                        <p key={blockIdx} className="text-[#333333] text-[15px] leading-[1.6]">
                          {block.text}
                        </p>
                      );
                    }
                    if (block.type === "unordered-list" && Array.isArray(block.items)) {
                      return (
                        <ul key={blockIdx} className="list-disc pl-5 space-y-2 text-[#333333] text-[15px] leading-[1.6]">
                          {block.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              {item.bold_title && <strong className="mr-1">{item.bold_title}</strong>}
                              {item.text}
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    if (block.type === "ordered-list" && Array.isArray(block.items)) {
                      return (
                        <ol key={blockIdx} className="list-decimal pl-5 space-y-2 text-[#333333] text-[15px] leading-[1.6]">
                          {block.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              {item.bold_title && <strong className="mr-1">{item.bold_title}</strong>}
                              {item.text}
                            </li>
                          ))}
                        </ol>
                      );
                    }
                    return null;
                  })}
                </div>
              ))}
            </div>
          ))}
          
        </div>
      </section>
    </main>
  );
}
