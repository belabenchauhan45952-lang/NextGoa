import type { Metadata } from "next";
import StoriesPage from "../../page";
import db from "@/lib/db";
import { SITE_URL } from "@/lib/site-config";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ page: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { page } = await params;
  
  return {
    title: { absolute: "Parul University Goa Blog | Career Guides, Courses & Admission Insights" },
    description: `Browse educational insights, career guidance, student stories, and university updates from Parul University Goa. Page ${page} of the blog archives.`,
    alternates: {
      canonical: `/blog/page/${page}`,
    },
  };
}

export default async function BlogPaginatedPage({ params }: Props) {
  const { page } = await params;
  const pageNum = parseInt(page);
  
  let totalPages = 1;
  try {
    const [rows]: any = await db.query(
      `SELECT COUNT(*) as count FROM blogs WHERE status = 'published' AND blog_type = 'blog'`
    );
    const total = rows[0]?.count || 0;
    totalPages = Math.ceil(total / 9); // STORIES_PER_PAGE = 9
  } catch (err) {
    console.error("Error fetching blog count:", err);
  }

  const prevUrl = pageNum === 2 ? `${SITE_URL}/blog` : `${SITE_URL}/blog/page/${pageNum - 1}`;
  const nextUrl = `${SITE_URL}/blog/page/${pageNum + 1}`;

  return (
    <>
      {pageNum > 1 && <link rel="prev" href={prevUrl} />}
      {pageNum < totalPages && <link rel="next" href={nextUrl} />}
      <StoriesPage />
    </>
  );
}
