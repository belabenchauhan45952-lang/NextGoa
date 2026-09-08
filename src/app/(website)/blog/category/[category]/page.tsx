import type { Metadata } from "next";
import StoriesPage from "../../page";

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  
  return {
    title: { absolute: "Parul University Goa Blog | Career Guides, Courses & Admission Insights" },
    description:
      "Explore Parul University Goa’s blog for expert insights on courses, career options, admission guides, and student life in Goa. Stay updated with trends in AI, healthcare, and hospitality.",
    alternates: {
      canonical: `/blog/category/${category}`,
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default function CategoryPage() {
  return <StoriesPage />;
}
