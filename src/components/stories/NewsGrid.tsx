"use client";
import React, { useState, useEffect, Suspense } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import { Clock, User } from "lucide-react";

export interface Story {
   tag: string;
   tagClass: string;
   title: string;
   body: string;
   image?: string;
   featured_image_alt_text?: string;
   link?: string;
   date?: string;
   author_name?: string;
}

const STORIES_PER_PAGE = 8;

function StoryCard({ s, trackHeader, trackCategory, eventName }: { s: Story; trackHeader?: string; trackCategory?: string; eventName?: string }) {
   return (
      <li className="group flex flex-col justify-between overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:shadow-lg">
         <Link 
            href={s.link || '#'} 
            className="flex flex-col justify-between h-full"
            data-track
            data-track-event={eventName || "news_click"}
            data-track-header={trackHeader || "NA"}
            data-track-category={trackCategory || "NA"}
            data-track-text={s.title}
         >
            <div>
               <div className="relative aspect-[16/12] bg-gradient-to-br from-brand via-brand-bright to-ocean overflow-hidden">
                  {s.image ? (
                     <Image src={s.image} alt={s.featured_image_alt_text?.trim() ? s.featured_image_alt_text : s.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                     <div className="absolute inset-0 opacity-25 [background:radial-gradient(circle_at_25%_70%,#ffffff_0,transparent_45%)]" />
                  )}
               </div>
               <div className="p-7">
                  <span className={`inline-block rounded-full px-5 py-2 text-[11px] font-bold uppercase tracking-wide ${s.tagClass}`}>
                     {s.tag}
                  </span>
                  <h3 className="mt-4 font-poppins text-lg font-semibold leading-snug tracking-tight text-ink group-hover:text-brand transition-colors line-clamp-2">
                     {s.title}
                  </h3>
                  
                  {/* Date & Author */}
                  <div className="flex items-center gap-2 mt-3 text-[13px] font-medium text-ink/80">
                     {s.date && (
                        <span className="flex items-center gap-1.5">
                           <Clock size={14} className="text-brand" />
                           {new Date(s.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </span>
                     )}
                     {s.date && s.author_name && <span>|</span>}
                     {s.author_name && (
                        <span className="flex items-center gap-1.5">
                           <User size={14} className="text-brand" />
                           {s.author_name}
                        </span>
                     )}
                  </div>

                  <p className="mt-3 font-[family-name:var(--font-poppins)] text-sm leading-relaxed text-ink/70 line-clamp-2">
                     {s.body}
                  </p>
               </div>
            </div>
            <div className="px-7 pb-7 pt-0">
               <span className="text-[15px] font-semibold text-brand/80 group-hover:text-brand flex items-center gap-1 transition-colors">
                  Read More
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
               </span>
            </div>
         </Link>
      </li>
   );
}

function NewsGridInner() {
   const [stories, setStories] = useState<Story[]>([]);
   const [loading, setLoading] = useState(true);
   const [currentPage, setCurrentPage] = useState(1);

   useEffect(() => {
      async function fetchStories() {
         try {
            const res = await fetch("/api/news");
            const data = await res.json();
            const formatted = data.map((blog: any) => ({
               tag: blog.category_names || "News",
               tagClass: "bg-brand/10 text-brand ring-1 ring-brand/20",
               title: blog.title,
               body: blog.excerpt,
               image: blog.featured_image,
               featured_image_alt_text: blog.featured_image_alt_text || "",
               link: `/news/${blog.slug}`,
               date: blog.publish_at || blog.created_at,
               author_name: blog.author_name,
            }));
            setStories(formatted);
         } catch (err) {
            console.error(err);
         } finally {
            setLoading(false);
         }
      }
      fetchStories();
   }, []);

   const totalPages = Math.ceil(
      stories.length / STORIES_PER_PAGE
   );
   const paginatedStories = stories.slice(
      (currentPage - 1) * STORIES_PER_PAGE,
      currentPage * STORIES_PER_PAGE
   );

   return (
      <div id="stories-grid" className="w-full">
         <section className="bg-brand-white py-16 sm:py-24">
            <div className="mx-auto max-w-[1680px] px-6 sm:px-10">
               {loading ? (
                  <div className="text-center py-20">
                     Loading...
                  </div>
               ) : stories.length > 0 ? (
                  <>
                     <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8 transition-all duration-300">
                        {paginatedStories.map((s, index) => (
                           <StoryCard key={s.title + index} s={s} trackHeader="News" trackCategory="All" eventName="news_click" />
                        ))}
                     </ul>
                     {totalPages > 1 && (
                        <div className="flex justify-center items-center gap-3 mt-14">
                           <button
                              onClick={() => setCurrentPage((p) => p - 1)}
                              disabled={currentPage === 1}
                              className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#d62b3d]/20 bg-white text-[#d62b3d] hover:bg-[#d62b3d] hover:text-white transition-all duration-300 disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-[#d62b3d]"
                           >
                              <ChevronLeft size={18} />
                           </button>

                           {Array.from({ length: totalPages }).map((_, i) => (
                              <button
                                 key={i}
                                 onClick={() => setCurrentPage(i + 1)}
                                 className={`w-11 h-11 rounded-full text-sm font-semibold transition-all duration-300 ${currentPage === i + 1
                                    ? "bg-[#5B6933] text-white shadow-lg scale-105"
                                    : "bg-white border border-gray-300 text-gray-700 hover:border-[#d62b3d] hover:text-[#d62b3d] hover:shadow"
                                    }`}
                              >
                                 {i + 1}
                              </button>
                           ))}

                           <button
                              onClick={() => setCurrentPage((p) => p + 1)}
                              disabled={currentPage === totalPages}
                              className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#5B6933]/20 bg-white text-[#5B6933] hover:bg-[#5B6933] hover:text-white transition-all duration-300 disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-[#5B6933]"
                           >
                              <ChevronRight size={18} />
                           </button>
                        </div>
                     )}
                  </>
               ) : (
                  <div className="text-center py-16 bg-white rounded-3xl shadow-sm border border-black/5">
                     <p className="font-poppins text-lg text-ink/60">No news articles found.</p>
                  </div>
               )}
            </div>
         </section>
      </div>
   );
}

export function NewsGrid() {
   return (
      <Suspense
         fallback={
            <div className="h-96 w-full flex items-center justify-center bg-brand-white">
               Loading news...
            </div>
         }
      >
         <NewsGridInner />
      </Suspense>
   );
}
