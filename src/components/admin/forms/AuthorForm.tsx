"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface AuthorFormProps {
  authorId?: number;
}

export default function AuthorForm({ authorId }: AuthorFormProps) {
  const router = useRouter();
  const isEdit = !!authorId;
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    short_description: "",
    linkedin_url: "",
    status: "active",
  });

  useEffect(() => {
    if (isEdit) {
      loadAuthor();
    }
  }, [authorId]);

  async function loadAuthor() {
    try {
      const res = await fetch(`/api/admin/authors/${authorId}`);
      const data = await res.json();
      if (data.success && data.author) {
        setForm({
          name: data.author.name || "",
          short_description: data.author.short_description || "",
          linkedin_url: data.author.linkedin_url || "",
          status: data.author.status || "active",
        });
      }
    } catch (err) {
      console.error(err);
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function saveAuthor(e: React.FormEvent) {
    e.preventDefault();

    if (!form.name.trim()) {
      alert("Name is required");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("short_description", form.short_description);
      formData.append("linkedin_url", form.linkedin_url);
      formData.append("status", form.status);

      const url = isEdit ? `/api/admin/authors/${authorId}` : "/api/admin/authors/create";
      const method = isEdit ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        body: formData,
      });

      const result = await res.json();

      if (!result.success) {
        alert(result.message);
        setLoading(false);
        return;
      }

      alert(isEdit ? "Author updated successfully." : "Author created successfully.");
      router.push("/admin/authors");
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
    setLoading(false);
  }

  return (
    <form onSubmit={saveAuthor} className="space-y-6 bg-light-white rounded-xl">
      {/* Page Header */}
      <div className="page-titles flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">
            {isEdit ? "Edit Author" : "Create Author"}
          </h1>
          <p className="text-gray-500 mt-2">
            Manage author details and biography.
          </p>
        </div>
        
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => router.push("/admin/authors")}
            className="px-6 py-2 border rounded-xl hover:bg-gray-50 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary px-8"
          >
            {loading ? "Saving..." : isEdit ? "Update Author" : "Save Author"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* LEFT COLUMN */}
        <div className="xl:col-span-8 space-y-6">
          <div className="cards-admin-text p-8">
            <h2 className="text-2xl font-bold mb-6">Basic Information</h2>

            <div className="space-y-5">
              <div>
                <label className="form-label">Author Name *</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="form-control"
                  required
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="form-label">LinkedIn URL</label>
                <input
                  type="url"
                  name="linkedin_url"
                  value={form.linkedin_url}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="https://linkedin.com/in/johndoe"
                />
              </div>
            </div>
          </div>

          <div className="cards-admin-text p-8">
            <h2 className="text-2xl font-bold mb-6">Biography</h2>
            
            <div>
              <label className="form-label">Short Description</label>
              <textarea
                name="short_description"
                value={form.short_description}
                onChange={handleChange}
                rows={6}
                className="form-textarea"
                placeholder="A brief bio about the author..."
              />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="xl:col-span-4 space-y-6">
          <div className="cards-admin-text p-8">
            <h2 className="text-xl font-bold mb-5">Settings</h2>

            <div className="space-y-5">
              <div>
                <label className="form-label">Status</label>
                <select
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary w-full"
                >
                  {loading ? "Saving..." : isEdit ? "Update Author" : "Create Author"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
