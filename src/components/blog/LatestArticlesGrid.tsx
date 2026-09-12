import db from "@/lib/db";
import { StoryCard, Story } from "@/components/stories/StoriesGrid";

export default async function LatestArticlesGrid({ currentBlogId }: { currentBlogId: number }) {
  const [rows]: any = await db.query(
    `
    SELECT b.*, 
      a.name AS authors_name,
      a.short_description AS authors_description,
      a.linkedin_url AS authors_linkedin,
      (
        SELECT GROUP_CONCAT(c.name SEPARATOR ', ')
        FROM blog_categories c
        WHERE FIND_IN_SET(c.id, b.category)
      ) AS category_names
    FROM blogs b
    LEFT JOIN authors a ON b.author_id = a.id
    WHERE b.id != ? AND b.status = 'published' 
    ORDER BY COALESCE(b.publish_at, b.created_at) DESC 
    LIMIT 2
    `,
    [currentBlogId]
  );

  if (!rows || rows.length === 0) return null;

  const stories: Story[] = rows.map((blog: any) => ({
    tag: blog.category_names || "General",
    tagClass: "bg-brand/10 text-brand ring-1 ring-brand/20",
    title: blog.title,
    body: blog.excerpt,
    image: blog.featured_image,
    link: `/blog/${blog.slug}`,
    date: blog.publish_at || blog.created_at,
    authors_name: blog.authors_name,
  }));

  return (
    <div className="pt-8 mt-8">
      <div className="flex items-center gap-4 mb-10">
        <div className="bg-gradient-to-r from-brand to-ocean px-5 py-2.5 rounded-md shadow-sm">
          <h2 className="text-white font-semibold text-lg tracking-wide">
            Latest Articles
          </h2>
        </div>
        <div className="flex-1 h-px bg-gray-200"></div>
      </div>
      
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8 transition-all duration-300">
        {stories.map((s, index) => (
          <StoryCard key={s.title + index} s={s} />
        ))}
      </ul>
    </div>
  );
}
