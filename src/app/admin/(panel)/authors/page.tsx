"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

export default function AuthorsPage() {
  const [authors, setAuthors] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);

  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const [search, setSearch] = useState("");

  useEffect(() => {
    loadAuthors();
  }, [page, search]);

  async function loadAuthors() {
    const res = await fetch(
      `/api/admin/authors?page=${page}&limit=${limit}&search=${search}`
    );

    const result = await res.json();

    if (result.success) {
      setAuthors(result.data);
      setTotal(result.total);
      setTotalPages(result.totalPages);
    }
  }

  async function deleteAuthor(id: number) {
    if (!confirm("Delete this author?")) return;

    await fetch(`/api/admin/authors/${id}`, {
      method: "DELETE",
    });

    loadAuthors();
  }

  return (
    <div className="bg-light-white p-6">
      <div className="flex items-center justify-between mb-6 bg-white rounded-xl p-4">
        <h1 className="text-3xl font-bold text-gray-800">
          Authors
        </h1>

        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="🔍 Search author..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="w-72 rounded-xl border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <Link
            href="/admin/authors/new"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-medium shadow"
          >
            + Add Author
          </Link>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl bg-white">
        <table className="min-w-full">
          <thead className="bg-white-50 border-light">
            <tr>
              <th className="px-4 py-4 text-left font-semibold">
                Name
              </th>
              <th className="px-4 py-4 text-left font-semibold">
                Short Description
              </th>
              <th className="px-4 py-4 text-left font-semibold">
                LinkedIn URL
              </th>
              <th className="px-4 py-4 text-left font-semibold">
                Status
              </th>
              <th className="px-4 py-4 text-center font-semibold">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {authors.map((author) => (
              <tr
                key={author.id}
                className="border-light hover:bg-gray-50 transition"
              >
                <td className="p-3">
                  {author.name}
                </td>

                <td className="p-3">
                  <div className="max-w-md line-clamp-3 text-sm text-gray-600">
                    {author.short_description || "-"}
                  </div>
                </td>

                <td className="p-3">
                  {author.linkedin_url ? (
                    <a href={author.linkedin_url} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
                      View Profile
                    </a>
                  ) : (
                    "-"
                  )}
                </td>

                <td className="p-3">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                      author.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {author.status === "active" ? "Active" : "Inactive"}
                  </span>
                </td>

                <td className="px-4 py-4">
                  <div className="flex justify-center gap-2">
                    <Link
                      href={`/admin/authors/${author.id}`}
                      className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition flex items-center justify-center"
                    >
                      <Pencil size={18} />
                    </Link>

                    <button
                      onClick={() => deleteAuthor(author.id)}
                      className="h-10 w-10 rounded-lg bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition flex items-center justify-center"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {authors.length === 0 && (
          <div className="text-center p-6 text-gray-500">
            No authors found.
          </div>
        )}

        <div className="flex justify-between items-center p-3">
          <div>
            Showing {Math.min((page - 1) * limit + 1, total)} -{" "}
            {Math.min(page * limit, total)} of {total}
          </div>

          <div className="flex gap-2">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="border px-4 py-2 rounded disabled:opacity-50"
            >
              Previous
            </button>

            <span className="flex items-center">
              {page} / {Math.max(totalPages, 1)}
            </span>

            <button
              disabled={page >= totalPages}
              onClick={() => setPage(page + 1)}
              className="border px-4 py-2 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
