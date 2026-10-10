import { NextResponse } from "next/server";
import db from "@/lib/db";
import { requirePermission } from "@/lib/adminAuth";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = await requirePermission("authors");
  if (user instanceof NextResponse) return user;

  try {
    const { id } = await params;
    const [rows]: any = await db.query(
      "SELECT * FROM authors WHERE id = ?",
      [id]
    );

    if (!rows.length) {
      return NextResponse.json(
        { success: false, message: "Author not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, author: rows[0] });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = await requirePermission("authors");
  if (user instanceof NextResponse) return user;

  try {
    const { id } = await params;
    const data = await request.formData();

    const name = data.get("name")?.toString() || "";
    const short_description = data.get("short_description")?.toString() || "";
    const linkedin_url = data.get("linkedin_url")?.toString() || "";
    const status = data.get("status")?.toString() || "active";

    if (!name) {
      return NextResponse.json(
        { success: false, message: "Name is required" },
        { status: 400 }
      );
    }

    await db.query(
      `
      UPDATE authors 
      SET 
        name = ?, 
        short_description = ?, 
        linkedin_url = ?, 
        status = ?
      WHERE id = ?
      `,
      [name, short_description, linkedin_url, status, id]
    );

    return NextResponse.json({
      success: true,
      message: "Author updated successfully",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = await requirePermission("authors");
  if (user instanceof NextResponse) return user;

  try {
    const { id } = await params;
    
    await db.query("DELETE FROM authors WHERE id = ?", [id]);

    return NextResponse.json({
      success: true,
      message: "Author deleted successfully",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
