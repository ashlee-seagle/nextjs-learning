import ModelsGrid from "@/app/components/ModelsGrid";
import { getModelsByCategorySlug } from "@/app/lib/models";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}) {
  const { categorySlug } = await params;

  const models = await getModelsByCategorySlug(categorySlug);
  return <ModelsGrid models={models} />;
}
