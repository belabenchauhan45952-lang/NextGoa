"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

interface Vacancy {
  id: number;
  title: string;
  slug: string;
}

export default function SuccessPage() {
  const params = useParams();
  const slug = params?.slug as string;

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
      <div className="w-full min-h-screen flex items-center justify-center bg-[#14A8DA]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-t-[#EF3341] border-white/50 rounded-full animate-spin"></div>
          <p className="text-white font-medium">Loading success details...</p>
        </div>
      </div>
    );
  }

  if (error || !job) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[#14A8DA] px-4">
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm max-w-md w-full text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Vacancy Not Found</h2>
          <p className="text-gray-600 mb-6">{error || "The vacancy you applied for could not be found."}</p>
          <Link href="/careers" className="inline-block bg-[#EF3341] hover:bg-[#D92A36] text-white font-bold px-6 py-2.5 rounded-full transition-colors">
            Back to Listings
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="w-full flex flex-col min-h-screen bg-[#14A8DA]">
      {/* Full Screen Background Image */}
      <section className="w-full relative flex-1 flex items-center z-20 overflow-hidden py-16 sm:py-24">
        <img 
          src="/car-hero-1.png" 
          alt="Thank You Background" 
          className="absolute top-0 left-0 w-full object-cover object-top z-0"
          style={{ height: '115%' }}
        />

        {/* Absolute Content Overlay */}
        <div className="absolute inset-0 z-10 flex items-center pt-20">
          <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-12 flex flex-col items-start h-full justify-center">
            {/* Left Content */}
            <div className="flex flex-col pb-16 lg:pb-32 w-full max-w-[700px]">
              <h1 className="text-[#152347] font-extrabold text-[44px] md:text-[56px] lg:text-[68px] leading-[1.1] mb-6 tracking-tight">
                Thank you for<br />
                applying for<br />
                {job.title}.
              </h1>
              
              <p className="text-[#111111] font-bold text-[22px] md:text-[26px] leading-snug">
                Your journey towards a victorious<br />
                career begins here.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
