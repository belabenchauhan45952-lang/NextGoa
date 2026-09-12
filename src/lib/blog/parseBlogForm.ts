export interface BlogFormData {
  title: string;
  slug: string;
  excerpt: string;
  blockquote: string;

  sections: any[];
  categories: string[];

  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  canonical_url: string;

  og_title: string;
  og_description: string;

  status: string;
  publish_at: string;
  author_id: string | null; 
  author_name: string | null;
  author_linkedin: string | null;
  faculty_id: string[];

  faqs: any[];

  featuredImage: File | null;
  ogImage: File | null;

  featured_image_path: string;
  featured_image_alt_text: string | null;
  og_image_path: string;

  // Runtime ma assign thase
  featured_image?: string;
  og_image?: string;
}

export async function parseBlogForm(
  req: Request
): Promise<BlogFormData> {

  const formData = await req.formData();

  return {

    title: (formData.get("title") as string) || "",
    slug: (formData.get("slug") as string) || "",
    excerpt: (formData.get("excerpt") as string) || "",
    blockquote: (formData.get("blockquote") as string) || "",

    sections: JSON.parse(
      (formData.get("sections") as string) || "[]"
    ),

    categories: JSON.parse(
      (formData.get("category") as string) || "[]"
    ),

    meta_title: (formData.get("meta_title") as string) || "",
    meta_description: (formData.get("meta_description") as string) || "",
    meta_keywords: (formData.get("meta_keywords") as string) || "",
    canonical_url: (formData.get("canonical_url") as string) || "",

    og_title: (formData.get("og_title") as string) || "",
    og_description: (formData.get("og_description") as string) || "",

    status: (formData.get("status") as string) || "draft",

    publish_at: (formData.get("publish_at") as string) || "",
    author_id: (formData.get("author_id") as string) || null,
    author_name: (formData.get("author_name") as string) || null,
    author_linkedin: (formData.get("author_linkedin") as string) || null,
    faculty_id: JSON.parse(
      (formData.get("faculty_id") as string) || "[]"
    ),

    faqs: JSON.parse(
      (formData.get("faqs") as string) || "[]"
    ),

    featuredImage:
      formData.get("featured_image") as File | null,

    ogImage:
      formData.get("og_image") as File | null,

    featured_image_path:
      (formData.get("featured_image_path") as string) || "",

    featured_image_alt_text: (formData.get("featured_image_alt_text") as string) || null,

    og_image_path:
      (formData.get("og_image_path") as string) || "",
  };
}