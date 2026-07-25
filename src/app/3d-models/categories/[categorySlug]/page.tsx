import ModelsGrid from "@/app/components/ModelsGrid";
import { getCategoryBySlug } from "@/app/lib/categories";
import { getModelsByCategorySlug } from "@/app/lib/models";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}) {
  const { categorySlug } = await params;

  const models = await getModelsByCategorySlug(categorySlug);
  const category = await getCategoryBySlug(categorySlug);
  return <ModelsGrid models={models} categoryName={category.name} />;
}
