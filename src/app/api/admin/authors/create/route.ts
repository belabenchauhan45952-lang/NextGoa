import { NextResponse } from "next/server";
import db from "@/lib/db";
import { requirePermission } from "@/lib/adminAuth";

export async function POST(request: Request) {
  const user = await requirePermission("authors.create");
  if (user instanceof NextResponse) return user;

  try {
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

    const [result]: any = await db.query(
      `
      INSERT INTO authors 
        (name, short_description, linkedin_url, status)
      VALUES 
        (?, ?, ?, ?)
      `,
      [name, short_description, linkedin_url, status]
    );

    return NextResponse.json({
      success: true,
      message: "Author created successfully",
      id: result.insertId,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
