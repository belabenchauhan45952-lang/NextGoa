"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, User } from "lucide-react";
import { Story } from "./NewsGrid";

export function LatestNews() {
  const [carouselCards, setCarouselCards] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    loadStories();
  }, []);

  async function loadStories() {
    try {
      const res = await fetch("/api/news?limit=15");
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
        authors_name: blog.authors_name,
      }));

      setCarouselCards(formatted);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!formData.email.trim()) {
      alert("Email is required");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/form-submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formName: "Newsletter Subscription",
          sendToCRM: false,
          sendToGoogleSheet: false,
          data: formData,
        }),
      });

      const result = await res.json();

      if (!result.success) {
        throw new Error(result.message);
      }

      alert("Subscribed Successfully");
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'subscribe_click_success',
        click_text: 'Subscribe',
      });

      setFormData({
        name: "",
        email: "",
      });

    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const isCarousel = carouselCards.length > 3;

  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [slideLock, setSlideLock] = useState(false);

  useEffect(() => {
    if (carouselCards.length > 0) {
      setCurrentIndex(isCarousel ? 1 : 0);
    }
  }, [carouselCards.length, isCarousel]);

  const extendedCards = isCarousel ? [
    carouselCards[carouselCards.length - 1],
    ...carouselCards,
    carouselCards[0],
  ] : carouselCards;

  const handlePrev = () => {
    if (!isCarousel || slideLock) return;
    setSlideLock(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (!isCarousel || slideLock) return;
    setSlideLock(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const isSwiping = useRef(false);
  const touchStartRef = useRef<number | null>(null);
  const dragStartRef = useRef<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    if (!isCarousel) return;
    isSwiping.current = false;
    touchStartRef.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isCarousel || touchStartRef.current === null) return;
    const currentX = e.targetTouches[0].clientX;
    const diff = Math.abs(touchStartRef.current - currentX);
    if (diff > 10) {
      isSwiping.current = true;
    }
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (!isCarousel || touchStartRef.current === null) return;
    const endX = e.changedTouches[0].clientX;
    const distance = touchStartRef.current - endX;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    touchStartRef.current = null;
    if (isSwiping.current) {
      setTimeout(() => {
        isSwiping.current = false;
      }, 50);
    }
  };

  const onMouseDown = (e: React.MouseEvent) => {
    if (!isCarousel || e.button !== 0) return;
    isSwiping.current = false;
    dragStartRef.current = e.clientX;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isCarousel || dragStartRef.current === null) return;
    const diff = Math.abs(dragStartRef.current - e.clientX);
    if (diff > 10) {
      isSwiping.current = true;
    }
  };

  const onMouseUp = (e: React.MouseEvent) => {
    if (!isCarousel || dragStartRef.current === null) return;
    const distance = dragStartRef.current - e.clientX;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    dragStartRef.current = null;
    if (isSwiping.current) {
      setTimeout(() => {
        isSwiping.current = false;
      }, 50);
    }
  };

  const onMouseLeave = () => {
    if (!isCarousel) return;
    if (dragStartRef.current !== null) {
      dragStartRef.current = null;
      setTimeout(() => {
        isSwiping.current = false;
      }, 50);
    }
  };

  const handleTransitionEnd = () => {
    if (!isCarousel) return;
    if (currentIndex === extendedCards.length - 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
    } else if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(carouselCards.length);
    }
    setSlideLock(false);
  };

  useEffect(() => {
    if (!isCarousel) return;
    if (!isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning, isCarousel]);

  useEffect(() => {
    if (!isCarousel) return;
    if (currentIndex >= extendedCards.length) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
        setSlideLock(false);
      }, 0);
      return () => clearTimeout(timer);
    } else if (currentIndex < 0) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(carouselCards.length);
        setSlideLock(false);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, extendedCards.length, isCarousel]);

  useEffect(() => {
    if (!isCarousel) return;
    if (slideLock) {
      const timer = setTimeout(() => {
        setSlideLock(false);
      }, 850);
      return () => clearTimeout(timer);
    }
  }, [slideLock, isCarousel]);

  if (loading || carouselCards.length === 0) return null;

  return (
    <section className="bg-brand-white border-t border-black/5 py-12 sm:py-16">
      <div className="mx-auto max-w-[1680px] px-6 sm:px-10">

        {/* Header content & Nav */}
        <div className="w-full mb-8 sm:mb-5 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 relative z-10">
          <div className="flex flex-row items-center gap-6 text-left">
            <div className="pointer-events-none select-none shrink-0">
              <img
                src="/1.svg"
                alt="Lighthouse logo"
                className="w-[50px] h-[63px]"
              />
            </div>
            <div className="flex flex-col">
              <p className="font-sans font-bold text-sm uppercase tracking-[0.15em] text-ink/60">
                LATEST
              </p>
              <h2 className="mt-1 text-brand section-heading">
                Across all categories.
              </h2>
            </div>
          </div>

          {/* Navigation Buttons */}
          {isCarousel && (
            <div className="flex items-center gap-3 mt-4 md:mt-0">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border border-black/10 bg-white text-ink flex items-center justify-center hover:bg-brand hover:text-white hover:border-brand shadow-sm transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
                aria-label="Previous slide"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full border border-black/10 bg-white text-ink flex items-center justify-center hover:bg-brand hover:text-white hover:border-brand shadow-sm transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
                aria-label="Next slide"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Carousel Wrapper */}
        <div
          className="relative mx-auto w-full max-w-[1680px] overflow-hidden px-4 md:px-0 py-4 select-none"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
        >
          <style dangerouslySetInnerHTML={{
            __html: `
            .carousel-track-container-news {
              display: flex;
              transition: ${isTransitioning ? "transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)" : "none"};
            }
            ${isCarousel ? `
            @media (max-width: 767px) {
              .carousel-track-container-news {
                transform: translateX(calc(-${currentIndex * 85}%));
              }
            }
            @media (min-width: 768px) and (max-width: 1023px) {
              .carousel-track-container-news {
                transform: translateX(calc(-${currentIndex * 45}%));
              }
            }
            @media (min-width: 1024px) {
              .carousel-track-container-news {
                transform: translateX(calc(-${currentIndex * 30}%));
              }
            }
            ` : `
            .carousel-track-container-news {
              transform: none !important;
              justify-content: center;
            }
            `}
          `}} />

          <div
            className="carousel-track-container-news -mx-2 md:-mx-3 py-2"
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedCards.map((card, idx) => {
              const isActive = idx === currentIndex;
              return (
                <div
                  key={idx}
                  className={`w-[85%] md:w-[45%] lg:w-[30%] flex-shrink-0 px-2 md:px-3 transition-all duration-700 ease-in-out ${isActive
                      ? "scale-100 opacity-100 z-10"
                      : "scale-[0.98] opacity-60 lg:opacity-100 z-0"
                    }`}
                >
                  <Link
                    href={card.link || '#'}
                    onClick={(e) => { if (isSwiping.current) e.preventDefault(); }}
                    onDragStart={(e) => e.preventDefault()}
                    className="rounded-3xl bg-white shadow-sm ring-1 ring-black/5 overflow-hidden flex flex-col justify-between h-full group transition-all duration-300"
                    data-track
                    data-track-event="news_click"
                    data-track-header="Across all categories."
                    data-track-category="All"
                    data-track-text={card.title}
                  >
                    <div>
                      {/* Top: Inset Image */}
                      <div className="p-3 sm:p-3.5 pb-0">
                        <div className="relative aspect-[16/11] rounded-2xl bg-gradient-to-br from-brand via-brand-bright to-ocean overflow-hidden">
                          {card.image ? (
                            <Image
                              src={card.image}
                              alt={card.featured_image_alt_text?.trim() ? card.featured_image_alt_text : card.title}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                              priority={idx === 0 || idx === 1}
                            />
                          ) : (
                            <div className="absolute inset-0 bg-gradient-to-br from-brand via-brand-bright to-ocean opacity-25 [background:radial-gradient(circle_at_25%_70%,#ffffff_0,transparent_45%)]" />
                          )}
                          {card.tag && (
                            <div className="absolute top-3 left-3 z-10">
                              <span className="inline-block rounded-full bg-white/95 backdrop-blur-md px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wide text-brand shadow-sm ring-1 ring-black/5">
                                {card.tag}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Content details */}
                      <div className="px-6 pt-3 pb-5">
                        <h3 className="font-poppins text-lg font-semibold leading-snug tracking-tight text-ink group-hover:text-brand transition-colors line-clamp-2">
                          {card.title}
                        </h3>

                        {/* Date & Author */}
                        {(card.date || card.authors_name) && (
                          <div className="flex items-center gap-2 mt-3 text-[13px] font-medium text-ink/80">
                            {card.date && (
                              <span className="flex items-center gap-1.5">
                                <Clock size={14} className="text-brand" />
                                {new Date(card.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                              </span>
                            )}
                            {card.date && card.authors_name && <span>|</span>}
                            {card.authors_name && (
                              <span className="flex items-center gap-1.5">
                                <User size={14} className="text-brand" />
                                {card.authors_name}
                              </span>
                            )}
                          </div>
                        )}

                        <p className="mt-3 font-[family-name:var(--font-poppins)] text-sm leading-relaxed text-ink/70 line-clamp-3">
                          {card.body}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 pb-6 pt-0">
                      <span className="text-[15px] font-semibold text-brand/80 group-hover:text-brand flex items-center gap-1 transition-colors">
                        Read More
                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Newsletter Subscription Banner */}
        <div className="mt-16 bg-[#000000] rounded-[24px] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 text-left">
          {/* Left Side */}
          <div className="max-w-xl">
            <span className="text-[#E73649] font-bold text-xs uppercase tracking-wider block mb-2">
              The PU Goa Weekly
            </span>
            <h3 className="text-white section-subheading">
              Placements, Programme Launches, Scholarships Once a Week.
            </h3>
            <p className="mt-3 text-white/60 text-sm">
              No spam. Unsubscribe any time.
            </p>
          </div>

          {/* Right Side - Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full lg:max-w-[600px]" >
            <div className="flex flex-col sm:flex-row gap-4">
              <input type="text" placeholder="Your name (optional)" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value, }) } className="w-full bg-[#1F1F1F]/60 border border-white/10 rounded-full px-8 py-4 text-white" />
              <input type="email" placeholder="Email address *" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value, }) } className="w-full bg-[#1F1F1F]/60 border border-white/10 rounded-full px-8 py-4 text-white" />
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto bg-[#E73649] hover:bg-[#c92b3c] text-white px-10 py-4 rounded-full text-base font-semibold tracking-wide shadow-md transition-all hover:scale-[1.02] cursor-pointer whitespace-nowrap">
                {loading ? "Submitting..." : "Subscribe"}
              </button>
              <span className="text-sm text-white/50 w-full text-center sm:text-left ml-2">
                We never share your email.
              </span>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
