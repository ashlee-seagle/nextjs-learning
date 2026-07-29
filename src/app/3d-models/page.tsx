import type { Model } from "../lib/types";
import { getModels, getModelCount } from "../lib/models";
import ModelsBrowser from "../components/ModelsBrowser";
import { MODELS_PER_PAGE } from "../lib/constants";
import { getQueryParams } from "../lib/utils";
import { redirect } from "next/navigation";

export default async function ModelsPage({
  searchParams,
}: {
  searchParams: Promise<{
    search?: string;
    sortBy?: string;
    page?: string;
  }>;
}) {
  const { search, sortBy, page } = getQueryParams(await searchParams);

  if (sortBy === null) {
    redirect("/3d-models");
  }

  const modelCount = await getModelCount({ search });
  const totalPages = Math.max(1, Math.ceil(modelCount / MODELS_PER_PAGE));

  if (page < 1 || page > totalPages) {
    redirect("/3d-models");
  }

  const models: Model[] = await getModels({
    search,
    sortBy,
    page,
    modelsPerPage: MODELS_PER_PAGE,
  });

  return (
    <ModelsBrowser
      search={search}
      models={models}
      totalPages={totalPages}
      currentPage={page}
    ></ModelsBrowser>
  );
}
