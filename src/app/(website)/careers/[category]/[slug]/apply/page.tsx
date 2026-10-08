"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import ApplyForm from "./ApplyForm";
import ApplyScrollButton from "@/components/career/ApplyScrollButton";

interface Vacancy {
  id: number;
  title: string;
  slug: string;
  department: string;
  position: string;
  location: string;
  type: string;
}

export default function ApplyPage() {
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
          <p className="text-gray-600 font-medium">Loading details...</p>
        </div>
      </div>
    );
  }

  if (error || !job) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm max-w-md w-full text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Vacancy Not Found</h2>
          <p className="text-gray-600 mb-6">{error || "The vacancy you are looking for does not exist."}</p>
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
        style={{ minHeight: 'max(500px, 45vw)' }}
      >
        {/* Background Image Overflowing Downward */}
        <img 
          src="/sub.png" 
          alt="Hero Background" 
          className="absolute top-0 left-0 w-full object-cover object-bottom z-0"
          style={{ height: 'calc(100% + 10vw)', minHeight: '55vw' }}
        />
        
        {/* Relative Content Overlay */}
        <div className="relative z-10 flex items-center w-full py-10">
          <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center h-full">
            {/* Left Content */}
            <div className="flex-1 flex flex-col justify-center w-full max-w-[800px] md:pr-8">
              <Link href={`/careers/${category}/${job.slug}`} className="text-[#111111] hover:opacity-80 transition-opacity mb-4 md:mb-6 font-medium text-sm w-fit flex items-center gap-2">
                &larr; Back to Job Details
              </Link>
              
              <h1 className="text-[#152347] font-extrabold text-[36px] md:text-[64px] lg:text-[84px] leading-[1.05] mb-6 md:mb-8 tracking-tight relative z-10">
                You are just one <br className="hidden lg:block"/>
                helicopter shot <br />
                away from a <br />
                winning career
              </h1>
              
              <ApplyScrollButton />
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="apply-form" className="w-full relative z-10 pb-16 sm:pb-24 pt-8 md:pt-[10vw]">
        <div className="max-w-[1140px] mx-auto px-6 lg:px-12 bg-white p-8 lg:p-12 rounded-[2rem] border border-gray-200 shadow-sm mt-12 md:mt-[5vw]">
          <h2 className="text-3xl font-extrabold mb-10 text-[#111111]">Basic Details</h2>
          
          <ApplyForm jobId={job.id} jobSlug={job.slug} jobTitle={job.title} jobCategory={category} />
        </div>
      </section>
    </main>
  );
}
