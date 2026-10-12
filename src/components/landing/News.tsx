"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { Eyebrow } from "./Decor";
import Image from "next/image";

const placeholderStories = [
  {
    tag: "STUDENT LIFE",
    tagClass: "bg-[#04B86A] text-white",
    title: "How Students Learn Creative Design and Editing at Parul University's Adobe Lab",
    body: "The Adobe Creative Design Studio inside Parul University's Lakshya 2047...",
    image: "",
    link: "/blog/how-students-learn-creative-design",
  },
  {
    tag: "STUDENT LIFE",
    tagClass: "bg-[#04B86A] text-white",
    title: "Parul University Autodesk Lab: CAD Studio for Mechanical, Civil and Architecture Students",
    body: "The Autodesk Lab inside Parul University's Lakshya 2047 Centre provides...",
    image: "",
    link: "/blog/parul-university-autodesk-lab",
  },
  {
    tag: "STUDENT LIFE",
    tagClass: "bg-[#04B86A] text-white",
    title: "How Parul University's Home Automation Lab Trains Students in BMS and HVAC...",
    body: "The Home Automation Lab inside Parul University's Lakshya 2047 Centre...",
    image: "",
    link: "/blog/how-parul-universitys-home-automation-lab-trains",
  },
];

export function News() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [stories, setStories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Use up to 3 of the latest fetched stories, fallback to placeholders if empty
  const activeStories = stories.length > 0 ? stories : placeholderStories;

  /* Update dot indicator using IntersectionObserver */
 useEffect(() => {
  async function loadStories() {
    try {
      const res = await fetch("/api/blogs?limit=3");
      const data = await res.json();

      if (!Array.isArray(data)) {
        throw new Error(data.message || "Failed to fetch blogs");
      }

      const formatted = data.map((blog: any) => ({
        tag: blog.category_names,
        tagClass: "bg-[#04B86A] text-white",
        title: blog.title,
        body: blog.excerpt,
        image: blog.featured_image,
        link: `/blog/${blog.slug}`,
      }));

      setStories(formatted);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  loadStories();
}, []);

  const scrollTo = (idx: number) => {
    cardRefs.current[idx]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  const CardContent = ({ s }: { s: any }) => (
    <Link href={s.link || "#"} className="group flex flex-col justify-between overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:shadow-lg h-full">
      <div className="flex flex-col h-full">
        <div className="p-3 sm:p-3.5 pb-0 shrink-0">
          <div className="relative aspect-[16/11] rounded-2xl bg-gradient-to-br from-brand via-brand-bright to-ocean overflow-hidden">
            {s.image ? (
              <Image
                src={s.image}
                alt={s.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="absolute inset-0 opacity-25 [background:radial-gradient(circle_at_25%_70%,#ffffff_0,transparent_45%)]" />
            )}
            {s.tag && (
              <div className="absolute top-3 left-3 z-10">
                <span className="inline-block rounded-full bg-white/95 backdrop-blur-md px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wide text-brand shadow-sm ring-1 ring-black/5">
                  {s.tag}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="px-6 pt-3 pb-5">
          <h3 className="font-poppins text-lg font-semibold leading-snug tracking-tight text-ink group-hover:text-brand transition-colors line-clamp-2">
            {s.title}
          </h3>
          <p className="mt-3 font-[family-name:var(--font-poppins)] text-sm leading-relaxed text-ink/70 line-clamp-3">
            {s.body}
          </p>
        </div>
      </div>
    </Link>
  );

  return (
    <section id="news" className="bg-brand-white py-10 sm:pt-5 sm:pb-10">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <Eyebrow className="text-ink">News &amp; Stories</Eyebrow>
        <h2 className="mt-2 text-center section-heading text-brand">
          What&apos;s happening on campus.
        </h2>

        {/* Mobile: swipeable carousel */}
        <div className="mt-12 md:hidden">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-2 px-[7.5vw]"
            style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" } as React.CSSProperties}
          >
            {activeStories.map((s, idx) => (
              <div
                key={s.title}
                ref={(el) => { cardRefs.current[idx] = el; }}
                className="snap-center flex-shrink-0 w-[85vw] max-w-sm"
              >
                <CardContent s={s} />
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-5">
            {activeStories.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                aria-label={`Go to story ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? "w-8 bg-brand" : "w-2.5 bg-ink/20"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: 3-column grid */}
        <ul className="hidden md:grid mt-12 grid-cols-3 gap-6">
          {activeStories.map((s) => (
            <li key={s.title}>
              <CardContent s={s} />
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <Link 
            href="/blog" 
            className="inline-flex items-center justify-center rounded-full bg-brand px-8 py-3 text-[15px] font-poppins font-semibold text-white shadow-sm transition-all hover:bg-brand/90 hover:shadow-md"
          >
            All 12 news →
          </Link>
        </div>
      </div>
    </section>
  );
}
