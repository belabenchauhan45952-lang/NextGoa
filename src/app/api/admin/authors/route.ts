import { NextResponse } from "next/server";
import db from "@/lib/db";
import { requirePermission } from "@/lib/adminAuth";

export async function GET(request: Request) {
  const user = await requirePermission("authors");

  if (user instanceof NextResponse) {
    return user;
  }
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "0", 10);
    const search = searchParams.get("search") || "";

    let whereClause = "WHERE status='active'";
    const params: any[] = [];

    if (search) {
      whereClause += " AND (name LIKE ? OR short_description LIKE ?)";
      params.push(`%${search}%`, `%${search}%`);
    }

    if (limit > 0) {
      const offset = (page - 1) * limit;

      const [countRows]: any = await db.query(
        `SELECT COUNT(*) as total FROM authors ${whereClause}`,
        params
      );
      const total = countRows[0].total;
      const totalPages = Math.ceil(total / limit);

      const [rows]: any = await db.query(
        `
        SELECT *
        FROM authors
        ${whereClause}
        ORDER BY name
        LIMIT ? OFFSET ?
      `,
        [...params, limit, offset]
      );

      return NextResponse.json({
        success: true,
        data: rows,
        total,
        totalPages,
      });
    } else {
      const [rows]: any = await db.query(
        `
        SELECT
          id,
          name
        FROM authors
        WHERE status='active'
        ORDER BY name
      `
      );

      return NextResponse.json(rows);
    }
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
