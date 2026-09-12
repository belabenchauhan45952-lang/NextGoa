import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const limit = Number(req.nextUrl.searchParams.get("limit") || 0);

    let query = `
    SELECT
      b.*,
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
    WHERE b.status='published'
      AND b.blog_type = 'news'
    ORDER BY b.created_at DESC
    `;

    const params: any[] = [];

    if (limit > 0) {
      query += ` LIMIT ?`;
      params.push(limit);
    }

    const [rows]: any = await db.query(query, params);

    return NextResponse.json(rows);

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to fetch news" },
      { status: 500 }
    );
  }
}
