import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, User } from "lucide-react";
import db from "@/lib/db";
import ShareButtons from "@/components/blog/ShareButtons";
import SidebarLatestPosts from "@/components/blog/SidebarLatestPosts";
import SidebarCategories from "@/components/blog/SidebarCategories";
import SidebarNewsletter from "@/components/blog/SidebarNewsletter";
import LatestArticlesGrid from "@/components/blog/LatestArticlesGrid";
import RelatedArticlesGrid from "@/components/blog/RelatedArticlesGrid";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const [rows]: any = await db.query(
    `
    SELECT *
    FROM blogs
    WHERE slug=? AND blog_type='news'
    LIMIT 1
    `,
    [slug]
  );

  if (!rows.length) {
    return {
      title: "News Not Found",
    };
  }

  const blog = rows[0];

  return {
    title: { absolute: blog.meta_title || blog.title },

    description:
      blog.meta_description || blog.excerpt,

    keywords: blog.meta_keywords
      ? blog.meta_keywords.split(",")
      : [],

    alternates: {
      canonical:
        blog.canonical_url ||
        `/news/${blog.slug}`,
    },

    openGraph: {
      title:
        blog.og_title ||
        blog.meta_title ||
        blog.title,

      description:
        blog.og_description ||
        blog.meta_description ||
        blog.excerpt,

      url:
        blog.canonical_url ||
        `/news/${blog.slug}`,

      images: [
        {
          url:
            blog.og_image ||
            blog.featured_image,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title:
        blog.og_title ||
        blog.title,

      description:
        blog.og_description ||
        blog.excerpt,

      images: [
        blog.og_image ||
        blog.featured_image,
      ],
    },
  };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  
  const { slug } = await params;

  const [rows]: any = await db.query(
    `
    SELECT *
    FROM blogs
    WHERE slug=? AND blog_type='news'
    LIMIT 1
    `,
    [slug]
  );

  if (rows.length === 0) {
    notFound();
  }

  const story = rows[0];
  const sections = JSON.parse(story.content || "[]");
  const [faqs]: any = await db.query(
    `
    SELECT *
    FROM blog_faqs
    WHERE blog_id=?
    ORDER BY sort_order
    `,
    [story.id]
  );

  const breadcrumbSchema = {
    "@context": "https://schema.org/", 
    "@type": "BreadcrumbList", 
    "itemListElement": [{
      "@type": "ListItem", 
      "position": 1, 
      "name": "Home",
      "item": "https://goa.paruluniversity.ac.in/"  
    },{
      "@type": "ListItem", 
      "position": 2, 
      "name": "News",
      "item": "https://goa.paruluniversity.ac.in/news"  
    },{
      "@type": "ListItem", 
      "position": 3, 
      "name": story.title,
      "item": `https://goa.paruluniversity.ac.in/news/${slug}`
    }]
  };

  return (
    <main className="min-h-screen bg-white pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <article className="pt-0">
        {/* Hero Section */}
        <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden py-16 sm:py-24">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <Image
            src={story.featured_image}
            alt={story.featured_image_alt_text?.trim() ? story.featured_image_alt_text : story.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto mt-16">
            <div className="text-white/80 text-sm md:text-base font-medium mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link> &gt;{" "}
              <Link href="/news" className="hover:text-white transition-colors">News</Link> &gt;{" "}
              <span className="text-white">{story.title}</span>
            </div>
            <h1 className="section-heading text-white mb-2 max-w-4xl drop-shadow-md">
              {story.title}
            </h1>
          </div>
          <div className="absolute z-20 bottom-6 left-6 md:bottom-10 md:left-12 flex items-center gap-3 text-white/90 text-sm md:text-base font-medium drop-shadow">
            {(story.publish_at || story.created_at) && (
              <span className="flex items-center gap-2">
                <Clock size={16} className="opacity-80" />
                {new Date(story.publish_at || story.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
            )}
            {(story.publish_at || story.created_at) && story.author_name && <span className="opacity-60">|</span>}
            {story.author_name && (
              <span className="flex items-center gap-2">
                <User size={16} className="opacity-80" />
                {story.author_name}
              </span>
            )}
          </div>

          {/* Social Share Buttons */}
          <div className="absolute z-20 bottom-6 right-6 md:bottom-10 md:right-12">
            <ShareButtons url={`/news/${slug}`} title={story.title} />
          </div>
        </section>

        {/* Main Content & Sidebar Layout */}
        <section className="max-w-[1400px] mx-auto w-full px-6 sm:px-10 py-16 sm:py-24">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            {/* Left Column: Content & FAQs */}
            <div className="w-full lg:w-[65%] xl:w-[70%] space-y-12">
              <div className="space-y-8">
            {story.blockquote && (
              <div className="relative bg-[#F7F7F5] rounded-sm px-10 md:px-20 py-16 text-center">
                {/* Quote Icon */}
                <div className="absolute left-1/2 -top-9 -translate-x-1/2 w-18 h-18 rounded-full bg-white shadow-md flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-[#0B3A6E]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.17 6A5.001 5.001 0 002 11v7h7v-7H5.09A3.001 3.001 0 017.17 8V6zm10 0A5.001 5.001 0 0012 11v7h7v-7h-3.91A3.001 3.001 0 0117.17 8V6z" />
                  </svg>
                </div>
                <h3 className="max-w-5xl mx-auto text-2xl md:text-3xl leading-relaxed font-bold text-[#0A1733]">
                  {story.blockquote}
                </h3>
              </div>
            )}

            {sections.map((section: any, index: number) => {
              switch (section.tag) {
                case "h2":
                  return (
                    <div key={index}>
                      <h2 className="text-[40px] font-bold mb-4">
                        {section.title}
                      </h2>
                      <div
                        className="section-body text-ink/80"
                        dangerouslySetInnerHTML={{
                          __html: section.details,
                        }}
                      />
                    </div>
                  );
                case "h3":
                  return (
                    <div key={index}>
                      <h3 className="text-3xl font-bold mb-4">
                        {section.title}
                      </h3>
                      <div
                        className="section-body text-ink/80"
                        dangerouslySetInnerHTML={{
                          __html: section.details,
                        }}
                      />
                    </div>
                  );
                case "h4":
                  return (
                    <div key={index}>
                      <h4 className="text-2xl font-semibold mb-4">
                        {section.title}
                      </h4>
                      <div
                        className="section-body text-ink/80"
                        dangerouslySetInnerHTML={{
                          __html: section.details,
                        }}
                      />
                    </div>
                  );
                default:
                  return (
                    <div
                      key={index}
                      className="section-body text-ink/80"
                      dangerouslySetInnerHTML={{
                        __html: section.details,
                      }}
                    />
                  );
              }
            })}
              </div>
            
            {/* FAQs inside left column */}
            {faqs.length > 0 && (
              <div className="pt-8 border-t border-gray-100">
                <h2 className="section-subheading mb-8">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-5">
                  {faqs.map((faq: any) => (
                    <details
                      key={faq.id}
                      className="border rounded-xl overflow-hidden"
                    >
                      <summary className="cursor-pointer bg-gray-100 px-6 py-5 font-semibold">
                        {faq.question}
                      </summary>
                      <div
                        className="px-6 py-5"
                        dangerouslySetInnerHTML={{
                          __html: faq.answer,
                        }}
                      />
                    </details>
                  ))}
                </div>
              </div>
            )}
            
            {/* Related Articles */}
            {story.faculty_id && (
              <RelatedArticlesGrid currentBlogId={story.id} facultyId={story.faculty_id} />
            )}

            {/* Latest Articles at bottom of left column */}
            <LatestArticlesGrid currentBlogId={story.id} />
            
            </div>
            
            {/* Right Column: Sidebar Widgets */}
            <aside className="w-full lg:w-[35%] xl:w-[30%] space-y-10 sticky top-32">
              <SidebarLatestPosts currentBlogId={story.id} />
              <SidebarCategories />
              <SidebarNewsletter />
            </aside>
            
          </div>
        </section>
      </article>
    </main>
  );
}
