export function getBlogData(body: any) {
  return [
    body.title,
    body.slug,
    body.excerpt,
    body.blockquote,
    JSON.stringify(body.sections),
    body.featured_image,
    body.featured_image_alt_text || null,
    body.categories.join(","),
    body.meta_title,
    body.meta_description,
    body.meta_keywords,
    body.canonical_url,
    body.og_title,
    body.og_description,
    body.og_image,
    body.status,
    body.publish_at,
    body.author_name,
    body.author_linkedin,
    body.faculty_id.join(","),
  ];
}