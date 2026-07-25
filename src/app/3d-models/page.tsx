import ModelsSearch from "../components/ModelsSearch";
import ModelsGrid from "../components/ModelsGrid";

import type { Model } from "../lib/types";
import { getModels } from "../lib/models";

export default async function ModelsPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  const search = (await searchParams).search?.toLowerCase() || "";
  const models: Model[] = await getModels(search);

  return (
    <div>
      <ModelsSearch></ModelsSearch>
      <ModelsGrid models={models}></ModelsGrid>
    </div>
  );
}
