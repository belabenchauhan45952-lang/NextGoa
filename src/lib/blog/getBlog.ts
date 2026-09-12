import db from "@/lib/db";

export async function getBlog(id: number | string) {

  const [rows]: any = await db.query(
    `
     SELECT 
      b.*,
      a.name AS author_name,
      a.short_description AS author_description,
      a.linkedin_url AS author_linkedin
    FROM blogs b
    LEFT JOIN authors a ON b.author_id = a.id
    WHERE b.id = ?
    LIMIT 1
    `,
    [id]
  );

  if (!rows.length) {
    return null;
  }

  const blog = rows[0];

  const [faqRows]: any = await db.query(
    `
    SELECT *
    FROM blog_faqs
    WHERE blog_id=?
    ORDER BY sort_order
    `,
    [id]
  );

  return {

    ...blog,

    categories: blog.category
      ? blog.category.split(",")
      : [],

    faqs: faqRows,

  };

}