import ModelsBrowser from "@/app/components/ModelsBrowser";
import { getCategoryBySlug } from "@/app/lib/categories";
import { getModels } from "@/app/lib/models";
import { notFound } from "next/navigation";

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ categorySlug: string }>;
  searchParams: Promise<{ sortBy?: string }>;
}) {
  const { categorySlug } = await params;
  const sortBy = (await searchParams).sortBy?.toLowerCase() || "";

  const category = await getCategoryBySlug(categorySlug);
  if (!category) {
    notFound();
  }

  const models = await getModels({ sortBy, categorySlug });

  return <ModelsBrowser models={models} categoryName={category.name} />;
}
