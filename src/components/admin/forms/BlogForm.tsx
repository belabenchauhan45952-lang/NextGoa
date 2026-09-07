"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, ChevronDown, ChevronRight, Trash2, } from "lucide-react";

interface BlogFormProps {
   blogId?: number;
   blogType?: "blog" | "news" | "event";
}

export default function BlogForm({
   blogId,
   blogType = "blog",
}: BlogFormProps) {

   const router = useRouter();

   const isEdit = !!blogId;
   const typePlural = blogType === "blog" ? "blogs" : blogType === "news" ? "news" : "events";

   const [loading, setLoading] = useState(false);

   const [categories, setCategories] =
      useState<any[]>([]);

   const [faculties, setFaculties] =
      useState<any[]>([]);

   const [imageFile, setImageFile] =
      useState<File | null>(null);

   const [ogImageFile, setOgImageFile] =
      useState<File | null>(null);

   const [imageError, setImageError] =
      useState("");

   const [openSection, setOpenSection] =
      useState(0);

   const [openFaq, setOpenFaq] =
      useState(0);

   const [showStatus, setShowStatus] =
      useState(false);

   const [showDate, setShowDate] =
      useState(false);

   const [publishDate, setPublishDate] =
      useState("");

   const [form, setForm] = useState({

      title: "",

      slug: "",

      excerpt: "",

      blockquote: "",

      category: [] as string[],

      featured_image: "",

      featured_image_alt_text: "", 

      og_image: "",

      meta_title: "",

      meta_description: "",

      meta_keywords: "",

      canonical_url: "",

      og_title: "",

      og_description: "",

      status: "draft",

      author_name: "",
      author_linkedin: "",

      faculty_id: [] as string[],

   });

   const [sections, setSections] =
      useState([
         {
            tag: "h2",
            title: "",
            details: "",
         },
      ]);

   const [faqs, setFaqs] =
      useState([
         {
            question: "",
            answer: "",
         },
      ]);

   const displayDate =
      publishDate
         ? new Intl.DateTimeFormat(
            "en-GB",
            {
               day: "2-digit",
               month: "short",
               year: "numeric",
               hour: "2-digit",
               minute: "2-digit",
            }
         ).format(new Date(publishDate))
         : "";
   // ===============================
   // Load Categories
   // ===============================

   async function loadCategories() {

      try {

         const res = await fetch(
            "/api/admin/blog-categories"
         );

         const data = await res.json();

         setCategories(data);

      } catch (err) {

         console.log(err);

      }

   }

   // ===============================
   // Load Faculties
   // ===============================

   async function loadFaculties() {
      try {
         const res = await fetch("/api/admin/faculty?limit=100");
         const data = await res.json();
         if (data.success) {
            setFaculties(data.data || []);
         }
      } catch (err) {
         console.log(err);
      }
   }

   // ===============================
   // Load Blog (Edit)
   // ===============================

   async function loadBlog() {

      if (!blogId) return;

      try {

         const res = await fetch(`/api/admin/${typePlural}/${blogId}`);

         const data = await res.json();

         if (!data.success) return;

         const blog = data.blog;

         setForm({
            title: blog.title || "",
            slug: blog.slug || "",
            excerpt: blog.excerpt || "",
            blockquote: blog.blockquote || "",
            category: blog.categories || [],
            featured_image: blog.featured_image || "",
            featured_image_alt_text: blog.featured_image_alt_text || "",
            og_image: blog.og_image || "",
            meta_title: blog.meta_title || "",
            meta_description: blog.meta_description || "",
            meta_keywords: blog.meta_keywords || "",
            canonical_url: blog.canonical_url || "",
            og_title: blog.og_title || "",
            og_description: blog.og_description || "",
            status: blog.status || "draft",
            author_name: blog.author_name || "",
            author_linkedin: blog.author_linkedin || "",
            faculty_id: blog.faculty_id ? String(blog.faculty_id).split(",") : [],
         });

         setSections(
            blog.content
               ? JSON.parse(blog.content)
               : []
         );

         setFaqs(blog.faqs || []);

         if (blog.publish_at) {
            setPublishDate(blog.publish_at.slice(0, 16));
         }

      } catch (err) {

         console.log(err);

      }

   }

   // ===============================
   // Initial Load
   // ===============================

   useEffect(() => {

      setPublishDate(
         new Date()
            .toISOString()
            .slice(0, 16)
      );

      loadCategories();

      loadFaculties();

      if (isEdit) {

         loadBlog();

      }

   }, []);

   // ===============================
   // Handle Change
   // ===============================

   function handleChange(

      e: React.ChangeEvent<
         HTMLInputElement |
         HTMLTextAreaElement |
         HTMLSelectElement
      >

   ) {

      const {

         name,

         value,

      } = e.target;

      setForm((prev) => ({

         ...prev,

         [name]: value,

         ...(name === "title" && !isEdit
            ? {
               slug: value
                  .toLowerCase()
                  .replace(/[^\w\s-]/g, "")
                  .replace(/\s+/g, "-")
                  .replace(/-+/g, "-"),
            }
            : {}),

      }));

   }
   // =====================================
   // Blog Sections
   // =====================================

   function addSection() {

      setSections((prev) => [

         ...prev,

         {

            tag: "h2",

            title: "",

            details: "",

         },

      ]);

   }

   function removeSection(index: number) {

      setSections((prev) =>
         prev.filter((_, i) => i !== index)
      );

   }

   function updateSection(

      index: number,

      field: "tag" | "title" | "details",

      value: string

   ) {

      const updated = [...sections];

      updated[index][field] = value;

      setSections(updated);

   }

   // =====================================
   // FAQ
   // =====================================

   function addFaq() {

      setFaqs((prev) => [

         ...prev,

         {

            question: "",

            answer: "",

         },

      ]);

   }

   function removeFaq(index: number) {

      setFaqs((prev) =>
         prev.filter((_, i) => i !== index)
      );

   }

   function updateFaq(

      index: number,

      field: "question" | "answer",

      value: string

   ) {

      const updated = [...faqs];

      updated[index][field] = value;

      setFaqs(updated);

   }

   // =====================================
   // Categories
   // =====================================

   function toggleCategory(id: string) {
      if (form.category.includes(id)) {
         setForm((prev) => ({
            ...prev,
            category: prev.category.filter((c) => c !== id),
         }));
      } else {
         setForm((prev) => ({
            ...prev,
            category: [...prev.category, id],
         }));
      }
   }

   function toggleFaculty(id: string) {
      if (form.faculty_id.includes(id)) {
         setForm((prev) => ({
            ...prev,
            faculty_id: prev.faculty_id.filter((f) => f !== id),
         }));
      } else {
         setForm((prev) => ({
            ...prev,
            faculty_id: [...prev.faculty_id, id],
         }));
      }
   }

   // =====================================
   // Featured Image
   // =====================================

   function handleFeaturedImage(

      e: React.ChangeEvent<HTMLInputElement>

   ) {

      const file = e.target.files?.[0];

      if (!file) return;

      setImageError("");

      if (file.size > 1024 * 1024) {

         setImageError(
            "Image size should be less than 1 MB."
         );

         return;

      }

      setImageFile(file);

   }

   // =====================================
   // OG Image
   // =====================================

   function handleOgImage(

      e: React.ChangeEvent<HTMLInputElement>

   ) {

      const file = e.target.files?.[0];

      if (!file) return;

      setOgImageFile(file);

   }
   // =====================================
   // Save Blog (Create / Update)
   // =====================================

   async function saveBlog(
      e: React.FormEvent
   ) {

      e.preventDefault();

      if (!form.title.trim()) {

         alert("Title is required.");

         return;

      }

      setLoading(true);

      try {

         const formData = new FormData();

         // Basic

         formData.append(
            "title",
            form.title
         );

         formData.append(
            "slug",
            form.slug
         );

         formData.append(
            "excerpt",
            form.excerpt
         );

         formData.append(
            "blockquote",
            form.blockquote
         );

         // Sections

         formData.append(
            "sections",
            JSON.stringify(sections)
         );

         // Category

         formData.append(
            "category",
            JSON.stringify(form.category)
         );

         // SEO

         formData.append(
            "meta_title",
            form.meta_title
         );

         formData.append(
            "meta_description",
            form.meta_description
         );

         formData.append(
            "meta_keywords",
            form.meta_keywords
         );

         formData.append(
            "canonical_url",
            form.canonical_url
         );

         formData.append(
            "og_title",
            form.og_title
         );

         formData.append(
            "og_description",
            form.og_description
         );

         // Publish

         formData.append(
            "status",
            form.status
         );

         formData.append(
            "publish_at",
            publishDate
         );

         formData.append(
            "author_name",
            form.author_name
         );
         formData.append(
            "author_linkedin",
            form.author_linkedin
         );

         formData.append(
            "faculty_id",
            JSON.stringify(form.faculty_id)
         );

         // FAQ

         formData.append(
            "faqs",
            JSON.stringify(faqs)
         );

         // Existing Images (Edit)

         formData.append(
            "featured_image_path",
            form.featured_image
         );

         formData.append(
            "featured_image_alt_text",
            form.featured_image_alt_text
         );

         formData.append(
            "og_image_path",
            form.og_image
         );

         // New Uploads

         if (imageFile) {

            formData.append(
               "featured_image",
               imageFile
            );

         }

         if (ogImageFile) {

            formData.append(
               "og_image",
               ogImageFile
            );

         }

         const url = isEdit

            ? `/api/admin/${typePlural}/${blogId}`

            : `/api/admin/${typePlural}/create`;

         const method = isEdit

            ? "PUT"

            : "POST";

         const res = await fetch(

            url,

            {

               method,

               body: formData,

            }

         );

         const result =
            await res.json();

         if (!result.success) {

            alert(result.message);

            return;

         }

         const typeLabel = blogType === "blog" ? "Blog" : blogType === "news" ? "News" : "Event";

         alert(

            isEdit

               ? `${typeLabel} updated successfully.`

               : `${typeLabel} created successfully.`

         );

         router.push(
            `/admin/${typePlural}`
         );

      } catch (err) {

         console.log(err);

         alert(
            "Something went wrong."
         );

      }

      setLoading(false);

   }
   // =====================================
   // Delete Blog
   // =====================================

   async function deleteBlog() {

      if (

         !confirm(

            "Are you sure?"

         )

      ) {

         return;

      }

      try {

         const res =
            await fetch(

               `/api/admin/${typePlural}/${blogId}`,

               {

                  method: "DELETE",

               }

            );

         const result =
            await res.json();

         if (!result.success) {

            alert(result.message);

            return;

         }

         const typeLabel = blogType === "blog" ? "Blog" : blogType === "news" ? "News" : "Event";

         alert(
            `${typeLabel} deleted.`
         );

         router.push(
            `/admin/${typePlural}`
         );

      } catch (err) {

         console.log(err);

      }

   }
   return (

      <form
         onSubmit={saveBlog}
         className="space-y-6 bg-light-white rounded-xl shadow p-8"
      >
         {/* Page Header */}
         <div className="page-titles">
            <h1 className="text-3xl font-bold text-gray-800">
               {isEdit
                  ? `Edit ${blogType === "blog" ? "Blog" : blogType === "news" ? "News" : "Event"}`
                  : `Create ${blogType === "blog" ? "Blog" : blogType === "news" ? "News" : "Event"}`}
            </h1>
            <p className="text-gray-500 mt-2">
               {isEdit
                  ? `Update your ${blogType} article.`
                  : `Create and publish your ${blogType} article.`}
            </p>
         </div>
         <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
            {/* LEFT */}
            <div className="xl:col-span-8 space-y-6">
               {/* =======================
         Basic Information
         ======================= */}
               <div className="cards-admin-text p-8">
                  <h2 className="text-2xl font-bold mb-6">
                     Basic Information
                  </h2>
                  {/* Title */}
                  <div className="mb-5">
                     <label className="form-label">
                        Title
                     </label>
                     <input
                        type="text"
                        name="title"
                        required
                        value={form.title}
                        onChange={handleChange}
                        className="form-control"
                     />
                  </div>
                  {/* Slug */}
                  <div className="mb-5">
                     <label className="form-label">
                        Slug
                     </label>
                     <input
                        type="text"
                        name="slug"
                        value={form.slug}
                        onChange={handleChange}
                        className="form-control"
                     />
                  </div>
                  {/* Excerpt */}
                  <div className="mb-5">
                     <label className="form-label">
                        Excerpt
                     </label>
                     <textarea
                        rows={4}
                        name="excerpt"
                        value={form.excerpt}
                        onChange={handleChange}
                        className="form-textarea"
                     />
                  </div>
                  {/* Block Quote */}
                  <div>
                     <label className="form-label">
                        Block Quote
                     </label>
                     <textarea
                        rows={3}
                        name="blockquote"
                        value={form.blockquote}
                        onChange={handleChange}
                        className="form-textarea"
                     />
                  </div>
               </div>
               {/* ======================================
         Blog Sections
         ====================================== */}
               <div className="cards-admin-text p-8">
                  <h2 className="text-2xl font-bold mb-6">
                     Blog Sections
                  </h2>
                  {sections.map((section, index) => (
                     <div
                        key={index}
                        className="mb-5 rounded-xl border border-gray-200 bg-white shadow-sm"
                     >
                        {/* Header */}
                        <div
                           className="flex items-center justify-between px-5 py-4 cursor-pointer"
                           onClick={() =>
                              setOpenSection(
                                 openSection === index
                                    ? -1
                                    : index
                              )
                           }
                        >
                           <div className="flex items-center gap-3">
                              {openSection === index ? (
                                 <ChevronDown size={18} />
                              ) : (
                                 <ChevronRight size={18} />
                              )}
                              <h3 className="font-semibold">
                                 Section {index + 1}
                              </h3>
                           </div>
                           <button
                              type="button"
                              onClick={(e) => {
                                 e.stopPropagation();
                                 removeSection(index);
                              }}
                              className="h-9 w-9 rounded-lg bg-red-100 text-red-600 hover:bg-red-600 hover:text-white transition flex items-center justify-center"
                           >
                              <Trash2 size={16} />
                           </button>
                        </div>
                        {/* Body */}
                        {openSection === index && (
                           <div className="p-5 space-y-5">
                              {/* Heading Tag */}
                              <div>
                                 <label className="form-label">
                                    Heading Tag
                                 </label>
                                 <select
                                    value={section.tag}
                                    onChange={(e) =>
                                       updateSection(
                                          index,
                                          "tag",
                                          e.target.value
                                       )
                                    }
                                    className="form-select"
                                 >
                                    <option value="h2">
                                       H2
                                    </option>
                                    <option value="h3">
                                       H3
                                    </option>
                                    <option value="h4">
                                       H4
                                    </option>
                                    <option value="p">
                                       Paragraph
                                    </option>
                                 </select>
                              </div>
                              {/* Heading */}
                              <div>
                                 <label className="form-label">
                                    Heading
                                 </label>
                                 <input
                                    value={section.title}
                                    onChange={(e) =>
                                       updateSection(
                                          index,
                                          "title",
                                          e.target.value
                                       )
                                    }
                                    className="form-control"
                                 />
                              </div>
                              {/* Details */}
                              <div>
                                 <label className="form-label">
                                    Details
                                 </label>
                                 <textarea
                                    rows={6}
                                    value={section.details}
                                    onChange={(e) =>
                                       updateSection(
                                          index,
                                          "details",
                                          e.target.value
                                       )
                                    }
                                    className="form-textarea"
                                 />
                              </div>
                           </div>
                        )}
                     </div>
                  ))}
                  <div className="flex justify-center mt-6">
                     <button
                        type="button"
                        onClick={() => {
                           addSection();
                           setOpenSection(
                              sections.length
                           );
                        }}
                        className="h-11 w-11 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition flex items-center justify-center shadow-lg"
                     >
                        <Plus size={20} />
                     </button>
                  </div>
               </div>
               {/* ======================================
         FAQ
         ====================================== */}
               <div className="cards-admin-text p-8">
                  <h2 className="text-2xl font-bold mb-6">
                     FAQs
                  </h2>
                  {faqs.map((faq, index) => (
                     <div
                        key={index}
                        className="mb-5 rounded-xl border border-gray-200 bg-white shadow-sm"
                     >
                        {/* Header */}
                        <div
                           className="flex items-center justify-between px-5 py-4 cursor-pointer"
                           onClick={() =>
                              setOpenFaq(
                                 openFaq === index
                                    ? -1
                                    : index
                              )
                           }
                        >
                           <div className="flex items-center gap-3">
                              {openFaq === index ? (
                                 <ChevronDown size={18} />
                              ) : (
                                 <ChevronRight size={18} />
                              )}
                              <h3 className="font-semibold">
                                 FAQ {index + 1}
                              </h3>
                           </div>
                           <button
                              type="button"
                              onClick={(e) => {
                                 e.stopPropagation();
                                 removeFaq(index);
                              }}
                              className="h-9 w-9 rounded-lg bg-red-100 text-red-600 hover:bg-red-600 hover:text-white transition flex items-center justify-center"
                           >
                              <Trash2 size={16} />
                           </button>
                        </div>
                        {/* Body */}
                        {openFaq === index && (
                           <div className="p-5 space-y-5">
                              <div>
                                 <label className="form-label">
                                    Question
                                 </label>
                                 <input
                                    type="text"
                                    value={faq.question}
                                    onChange={(e) =>
                                       updateFaq(
                                          index,
                                          "question",
                                          e.target.value
                                       )
                                    }
                                    className="form-control"
                                 />
                              </div>
                              <div>
                                 <label className="form-label">
                                    Answer
                                 </label>
                                 <textarea
                                    rows={5}
                                    value={faq.answer}
                                    onChange={(e) =>
                                       updateFaq(
                                          index,
                                          "answer",
                                          e.target.value
                                       )
                                    }
                                    className="form-textarea"
                                 />
                              </div>
                           </div>
                        )}
                     </div>
                  ))}
                  <div className="flex justify-center mt-6">
                     <button
                        type="button"
                        onClick={() => {
                           addFaq();
                           setOpenFaq(
                              faqs.length
                           );
                        }}
                        className="h-11 w-11 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition flex items-center justify-center shadow-lg"
                     >
                        <Plus size={20} />
                     </button>
                  </div>
               </div>
               {/* ======================================
         SEO SETTINGS
         ====================================== */}
               <div className="cards-admin-text p-8">
                  <h2 className="text-2xl font-bold mb-6">
                     SEO Settings
                  </h2>
                  <div className="mb-5">
                     <label className="form-label">
                        Meta Title
                     </label>
                     <input
                        type="text"
                        name="meta_title"
                        value={form.meta_title}
                        onChange={handleChange}
                        className="form-control"
                     />
                  </div>
                  <div className="mb-5">
                     <label className="form-label">
                        Meta Description
                     </label>
                     <textarea
                        rows={4}
                        name="meta_description"
                        value={form.meta_description}
                        onChange={handleChange}
                        className="form-textarea"
                     />
                  </div>
                  <div className="mb-5">
                     <label className="form-label">
                        Meta Keywords
                     </label>
                     <input
                        type="text"
                        name="meta_keywords"
                        value={form.meta_keywords}
                        onChange={handleChange}
                        className="form-control"
                     />
                  </div>
                  <div className="mb-5">
                     <label className="form-label">
                        Canonical URL
                     </label>
                     <input
                        type="text"
                        name="canonical_url"
                        value={form.canonical_url}
                        onChange={handleChange}
                        className="form-control"
                     />
                  </div>
                  <div className="mb-5">
                     <label className="form-label">
                        Open Graph Title
                     </label>
                     <input
                        type="text"
                        name="og_title"
                        value={form.og_title}
                        onChange={handleChange}
                        className="form-control"
                     />
                  </div>
                  <div>
                     <label className="form-label">
                        Open Graph Description
                     </label>
                     <textarea
                        rows={4}
                        name="og_description"
                        value={form.og_description}
                        onChange={handleChange}
                        className="form-textarea"
                     />
                  </div>
               </div>
               {/* ===========================
         RIGHT SIDEBAR
         =========================== */}
            </div>
            <div className="xl:col-span-4 space-y-6 sticky top-6 h-fit">
               {/* Publish */}
               <div className="cards-admin-text">
                  <div className="border-light px-5 py-4">
                     <h3 className="font-semibold text-lg">
                        Publish
                     </h3>
                  </div>
                  <div className="p-5">
                     {/* Status */}
                     <div className="flex items-center justify-between pb-4 border-dotted">
                        <div>
                           <span className="font-medium">
                              Status :
                           </span>
                           <span className="ml-2 capitalize">
                              {form.status}
                           </span>
                        </div>
                        <button
                           type="button"
                           className="btn btn-sm btn-primary"
                           onClick={() =>
                              setShowStatus(!showStatus)
                           }
                        >
                           Edit
                        </button>
                     </div>
                     {showStatus && (
                        <div className="py-4 border-light">
                           <select
                              name="status"
                              value={form.status}
                              onChange={handleChange}
                              className="form-select"
                           >
                              <option value="draft">
                                 Draft
                              </option>
                              <option value="published">
                                 Published
                              </option>
                           </select>
                           <div className="flex gap-3 mt-4">
                              <button
                                 type="button"
                                 className="btn btn-primary"
                                 onClick={() =>
                                    setShowStatus(false)
                                 }
                              >
                                 OK
                              </button>
                              <button
                                 type="button"
                                 className="btn btn-light"
                                 onClick={() =>
                                    setShowStatus(false)
                                 }
                              >
                                 Cancel
                              </button>
                           </div>
                        </div>
                     )}
                     {/* Publish Date */}
                     <div className="flex items-center justify-between py-4 border-dotted">
                        <div>
                           <span className="font-medium">
                              Publish :
                           </span>
                           <span className="ml-2">
                              {displayDate}
                           </span>
                        </div>
                        <button
                           type="button"
                           className="btn btn-sm btn-primary"
                           onClick={() =>
                              setShowDate(!showDate)
                           }
                        >
                           Edit
                        </button>
                     </div>
                     {showDate && (
                        <div className="py-4 border-light">
                           <input
                              type="datetime-local"
                              value={publishDate}
                              onChange={(e) =>
                                 setPublishDate(e.target.value)
                              }
                              className="form-control"
                           />
                           <div className="flex gap-3 mt-4">
                              <button
                                 type="button"
                                 className="btn btn-primary"
                                 onClick={() =>
                                    setShowDate(false)
                                 }
                              >
                                 OK
                              </button>
                              <button
                                 type="button"
                                 className="btn btn-light"
                                 onClick={() =>
                                    setShowDate(false)
                                 }
                              >
                                 Cancel
                              </button>
                           </div>
                        </div>
                     )}

                     {/* Author Name */}
                     <div className="py-4">
                        <label className="form-label font-medium mb-2 block">
                           Author's Name
                        </label>
                        <input
                           type="text"
                           name="author_name"
                           value={form.author_name}
                           onChange={handleChange}
                           className="form-control w-full"
                           placeholder="e.g. Author Name"
                        />
                     </div>
                     <div>
                        <label className="block text-sm font-medium text-ink mb-1.5">
                           Author's LinkedIn URL (Optional)
                        </label>
                        <input
                           type="url"
                           name="author_linkedin"
                           value={form.author_linkedin}
                           onChange={handleChange}
                           className="form-control w-full"
                           placeholder="https://linkedin.com/in/..."
                        />
                     </div>

                     <button
                        type="submit"
                        disabled={loading}
                        className="btn btn-primary w-full mt-5"
                     >
                        {loading
                           ? "Saving..."
                           : isEdit
                              ? "Update Blog"
                              : "Publish"}
                     </button>
                     {isEdit && (
                        <button
                           type="button"
                           onClick={deleteBlog}
                           className="btn btn-danger w-full mt-3"
                        >
                           Delete Blog
                        </button>
                     )}
                  </div>
               </div>
               {/* Faculty */}
               <div className="cards-admin-text">
                  <div className="border-light px-5 py-4">
                     <h3 className="font-semibold">
                        Faculty (Optional)
                     </h3>
                  </div>
                  <div className="p-5 space-y-3">
                     {faculties.map((f: any, index) => (
                        <label key={`${f.id}-${index}`} className="flex items-center gap-3">
                           <input
                              type="checkbox"
                              className="form-check-input"
                              checked={form.faculty_id.includes(String(f.id))}
                              onChange={() => toggleFaculty(String(f.id))}
                           />
                           <span>{f.title}</span>
                        </label>
                     ))}
                  </div>
               </div>
               {/* Categories */}
               <div className="cards-admin-text">
                  <div className="border-light px-5 py-4">
                     <h3 className="font-semibold">
                        Categories
                     </h3>
                  </div>
                  <div className="p-5 space-y-3">
                     {categories.map((category: any, index) => (
                        <label
                           key={`${category.id}-${index}`}
                           className="flex items-center gap-3"
                        >
                           <input
                              type="checkbox"
                              className="form-check-input"
                              checked={form.category.includes(
                                 String(category.id)
                              )}
                              onChange={() =>
                                 toggleCategory(
                                    String(category.id)
                                 )
                              }
                           />
                           <span>
                              {category.name}
                           </span>
                        </label>
                     ))}
                  </div>
               </div>
               {/* Featured Image */}
               <div className="cards-admin-text">
                  <div className="border-light px-5 py-4">
                     <h3 className="font-semibold">
                        Featured Image
                     </h3>
                  </div>
                  <div className="p-5">
                     {imageFile ? (
                        <img
                           src={URL.createObjectURL(imageFile)}
                           className="rounded-lg w-full mb-4 border"
                        />
                     ) : form.featured_image ? (
                        <img
                           src={form.featured_image}
                           className="rounded-lg w-full mb-4 border"
                        />
                     ) : (
                        <div className="border rounded-lg h-44 flex items-center justify-center text-gray-400">
                           No Image
                        </div>
                     )}
                     <input
                        type="file"
                        accept="image/*"
                        className="form-control mt-4 img-input"
                        onChange={handleFeaturedImage}
                     />
                     {imageError && (
                        <p className="text-red-600 mt-2">
                           {imageError}
                        </p>
                     )}

                      {/* featured image alt text */}
                     <div className="flex flex-col gap-2 mt-4">
                        <label htmlFor="featured_image_alt_text" className="font-medium text-sm text-gray-700">
                           Featured Image Alt Text
                        </label>
                        <textarea
                           id="featured_image_alt_text"
                           name="featured_image_alt_text"
                           value={form.featured_image_alt_text}
                           onChange={(e) => setForm({ ...form, featured_image_alt_text: e.target.value })}
                           rows={3}
                           className="form-control w-full resize-none border p-2 rounded-md text-sm outline-none"
                        />
                     </div>
                  </div>
               </div>
               {/* OG Image */}
               <div className="cards-admin-text">
                  <div className="border-light px-5 py-4">
                     <h3 className="font-semibold">
                        Open Graph Image
                     </h3>
                  </div>
                  <div className="p-5">
                     {ogImageFile ? (
                        <img
                           src={URL.createObjectURL(ogImageFile)}
                           className="rounded-lg w-full mb-4 border"
                        />
                     ) : form.og_image ? (
                        <img
                           src={form.og_image}
                           className="rounded-lg w-full mb-4 border"
                        />
                     ) : (
                        <div className="border rounded-lg h-44 flex items-center justify-center text-gray-400">
                           No Image
                        </div>
                     )}
                     <input
                        type="file"
                        accept="image/*"
                        className="form-control mt-4 img-input"
                        onChange={handleOgImage}
                     />
                  </div>
               </div>
            </div>
         </div>
      </form>

   );
}