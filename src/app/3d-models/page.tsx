import ModelsSearch from "../components/ModelsSearch";
import ModelsGrid from "../components/ModelsGrid";

import type { Model } from "../lib/types";
import { getModels } from "../lib/models";

export default async function ModelsPage({
  searchParams,
}: {
  searchParams: Promise<{
    search?: string;
    sortBy?: string;
  }>;
}) {
  const search = (await searchParams).search?.toLowerCase() || "";
  const sortBy = (await searchParams).sortBy?.toLowerCase() || "";
  const models: Model[] = await getModels({ search, sortBy });

  return (
    <div>
      <ModelsSearch search={search}></ModelsSearch>
      <ModelsGrid models={models} search={search}></ModelsGrid>
    </div>
  );
}
