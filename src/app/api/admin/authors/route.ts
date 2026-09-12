import { NextResponse } from "next/server";
import db from "@/lib/db";
import { requirePermission } from "@/lib/adminAuth";

export async function GET() {
  const user = await requirePermission("authors");

  if (user instanceof NextResponse) {
    return user;
  }
  try {
    const [rows]: any = await db.query(`
      SELECT
        id,
        name
      FROM authors
      WHERE status='active'
      ORDER BY name
    `);

    return NextResponse.json(rows);
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      },
    );
  }
}
