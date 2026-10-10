import AuthorForm from "@/components/admin/forms/AuthorForm";

export default async function EditAuthorPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const authorId = parseInt(id, 10);

  return (
    <div className="p-6">
      <AuthorForm authorId={authorId} />
    </div>
  );
}
