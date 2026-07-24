import ModelsSearch from "../components/ModelsSearch";
import ModelsGrid from "../components/ModelsGrid";

import type { Model } from "../lib/types";
import { getModels } from "../lib/models";

export default async function ModelsPage() {
  const models: Model[] = await getModels();
  return (
    <div>
      <ModelsSearch></ModelsSearch>
      <ModelsGrid models={models}></ModelsGrid>
    </div>
  );
}
