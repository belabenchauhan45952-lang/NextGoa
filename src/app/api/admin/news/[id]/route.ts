import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import { requirePermission } from "@/lib/adminAuth";

import { parseBlogForm } from "@/lib/blog/parseBlogForm";
import { uploadImage } from "@/lib/blog/uploadImage";
import { getBlogData } from "@/lib/blog/blogData";
import { saveFaqs } from "@/lib/blog/saveFaqs";

import { getBlog } from "@/lib/blog/getBlog";
import { deleteBlog } from "@/lib/blog/deleteBlog";

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {

  try {

    const user = await requirePermission("blogs.edit");

    if (user instanceof NextResponse) {
      return user;
    }

    const { id } = await params;
    const reqClone = req.clone();
    const body: any = await parseBlogForm(req);

    // Featured Image

    body.featured_image =
      body.featured_image_path;

    if (
      body.featuredImage &&
      body.featuredImage.size > 0
    ) {

      body.featured_image =
        await uploadImage(
          body.featuredImage
        );

    }

    // OG Image

    body.og_image =
      body.og_image_path;

    if (
      body.ogImage &&
      body.ogImage.size > 0
    ) {

      body.og_image =
        await uploadImage(
          body.ogImage,
          "goa-uploads/ogimage"
        );

    }

    let finalAltText = (await reqClone.formData()).get("featured_image_alt_text")?.toString() || null;
    body.featured_image_alt_text = finalAltText || body.featured_image_alt_text || null;

    const blogData = getBlogData(body);
    const dbParams = [
      ...blogData.slice(0, 15),
      "news", // blog_type
      ...blogData.slice(15),
      id,
    ];

    await db.execute(
      `
      UPDATE blogs
      SET
        title=?,
        slug=?,
        excerpt=?,
        blockquote=?,
        content=?,
        featured_image=?,
        featured_image_alt_text=?,
        category=?,
        meta_title=?,
        meta_description=?,
        meta_keywords=?,
        canonical_url=?,
        og_title=?,
        og_description=?,
        og_image=?,
        blog_type=?,
        status=?,
        publish_at=?,
        author_name=?,
        author_linkedin=?,
        faculty_id=?
      WHERE id=?
      `,
      dbParams
    );

    await saveFaqs(
      Number(id),
      body.faqs
    );

    return NextResponse.json({
      success: true,
      message: "News updated successfully",
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
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {

  try {

    const user = await requirePermission("blogs.delete");

    if (user instanceof NextResponse) {
      return user;
    }

    const { id } = await params;

    await deleteBlog(id);

    return NextResponse.json({
      success: true,
      message: "News deleted successfully",
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
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {

    const user = await requirePermission("blogs.edit");

    if (user instanceof NextResponse) {
      return user;
    }

    const { id } = await params;

    const blog = await getBlog(id);

    if (!blog) {
      return NextResponse.json(
        {
          success: false,
          message: "News not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      blog,
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
