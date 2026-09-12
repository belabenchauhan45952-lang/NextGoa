import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import { requirePermission } from "@/lib/adminAuth";

import { parseBlogForm } from "@/lib/blog/parseBlogForm";
import { uploadImage } from "@/lib/blog/uploadImage";
import { getBlogData } from "@/lib/blog/blogData";
import { saveFaqs } from "@/lib/blog/saveFaqs";

export async function POST(req: NextRequest) {

  try {

    const user = await requirePermission("blogs.create");

    if (user instanceof NextResponse) {
      return user;
    }

    const body: any = await parseBlogForm(req);

    body.featured_image =
      body.featuredImage && body.featuredImage.size > 0
        ? await uploadImage(body.featuredImage)
        : "";

    body.og_image =
      body.ogImage && body.ogImage.size > 0
        ? await uploadImage(body.ogImage, "uploads/ogimage")
        : "";

    const blogData = getBlogData(body);
    const params = [
      ...blogData.slice(0, 15),
      "blog", // blog_type
      ...blogData.slice(15),
    ];

    const [result]: any = await db.execute(
      `
      INSERT INTO blogs (
        title,
        slug,
        excerpt,
        blockquote,
        content,
        featured_image,
        featured_image_alt_text,
        category,
        meta_title,
        meta_description,
        meta_keywords,
        canonical_url,
        og_title,
        og_description,
        og_image,
        blog_type,
        status,
        publish_at,
        author_name,
        author_linkedin,
        faculty_id,
        author_id
      )
      VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
      `,
      params
    );

    await saveFaqs(result.insertId, body.faqs);

    return NextResponse.json({
      success: true,
      message: "Blog created successfully",
    });

  } catch (error: any) {

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );

  }

}