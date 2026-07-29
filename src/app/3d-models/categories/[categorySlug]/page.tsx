import ModelsBrowser from "@/app/components/ModelsBrowser";
import { getCategoryBySlug } from "@/app/lib/categories";
import { getModelCount, getModels } from "@/app/lib/models";
import { notFound } from "next/navigation";
import { MODELS_PER_PAGE } from "@/app/lib/constants";
import { getQueryParams } from "@/app/lib/utils";
import { redirect } from "next/navigation";

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ categorySlug: string }>;
  searchParams: Promise<{
    search?: string;
    sortBy?: string;
    page?: string;
  }>;
}) {
  const { categorySlug } = await params;
  const { search, sortBy, page } = getQueryParams(await searchParams);

  const category = await getCategoryBySlug(categorySlug);
  if (!category) {
    notFound();
  }

  if (sortBy === null) {
    redirect(`/3d-models/categories/${categorySlug}`);
  }

  const modelCount = await getModelCount({ search, categorySlug });
  const totalPages = Math.max(1, Math.ceil(modelCount / MODELS_PER_PAGE));

  if (page < 1 || page > totalPages) {
    redirect(`/3d-models/categories/${categorySlug}`);
  }

  const models = await getModels({
    search,
    sortBy,
    categorySlug,
    page,
    modelsPerPage: MODELS_PER_PAGE,
  });

  return (
    <ModelsBrowser
      models={models}
      categoryName={category.name}
      search={search}
      totalPages={totalPages}
      currentPage={page}
    />
  );
}
