import type { Metadata } from "next";
import StoriesPage from "../../../../page";
import db from "@/lib/db";
import { SITE_URL } from "@/lib/site-config";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ category: string; page: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, page } = await params;
  
  return {
    title: { absolute: "Parul University Goa Blog | Career Guides, Courses & Admission Insights" },
    description: `Browse educational insights, career guidance, student stories, and university updates from Parul University Goa. Page ${page} of the blog archives.`,
    alternates: {
      canonical: `/blog/category/${category}/page/${page}`,
    },
  };
}

const CATEGORIES = [
   "Academic", "Placement", "Research", "Student Life", "Admissions Tips", "Careers"
];

const slugify = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default async function CategoryPagePaginated({ params }: Props) {
  const { category, page } = await params;
  const pageNum = parseInt(page);
  
  const activeCatName = CATEGORIES.find(c => slugify(c) === category);

  let totalPages = 1;
  try {
    const [rows]: any = await db.query(
      `SELECT category_names FROM blogs WHERE status = 'published' AND blog_type = 'blog'`
    );
    const count = rows.filter((row: any) => 
      activeCatName ? (row.category_names || "").toLowerCase().includes(activeCatName.toLowerCase()) : true
    ).length;
    totalPages = Math.ceil(count / 9); // STORIES_PER_PAGE = 9
  } catch (err) {
    console.error("Error fetching category blog count:", err);
  }

  const prevUrl = pageNum === 2 ? `${SITE_URL}/blog/category/${category}` : `${SITE_URL}/blog/category/${category}/page/${pageNum - 1}`;
  const nextUrl = `${SITE_URL}/blog/category/${category}/page/${pageNum + 1}`;

  return (
    <>
      {pageNum > 1 && <link rel="prev" href={prevUrl} />}
      {pageNum < totalPages && <link rel="next" href={nextUrl} />}
      <StoriesPage />
    </>
  );
}
