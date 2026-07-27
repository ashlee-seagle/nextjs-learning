import ModelsGrid from "@/app/components/ModelsGrid";
import { getCategoryBySlug } from "@/app/lib/categories";
import { getModels } from "@/app/lib/models";

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ categorySlug: string }>;
  searchParams: Promise<{ sortBy?: string }>;
}) {
  const { categorySlug } = await params;
  const sortBy = (await searchParams).sortBy?.toLowerCase() || "";

  const models = await getModels({ sortBy, categorySlug });
  const category = await getCategoryBySlug(categorySlug);
  return <ModelsGrid models={models} categoryName={category.name} />;
}
