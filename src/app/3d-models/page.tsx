import type { Model } from "../lib/types";
import { getModels, getModelCount } from "../lib/models";
import ModelsBrowser from "../components/ModelsBrowser";
import { MODELS_PER_PAGE } from "../lib/constants";
import { getQueryParams } from "../lib/utils";

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

  const models: Model[] = await getModels({
    search,
    sortBy,
    page,
    modelsPerPage: MODELS_PER_PAGE,
  });

  const modelCount = await getModelCount({ search });
  const totalPages = Math.ceil(modelCount / MODELS_PER_PAGE);

  return (
    <ModelsBrowser
      search={search}
      models={models}
      totalPages={totalPages}
      currentPage={page}
    ></ModelsBrowser>
  );
}
