import { getModels } from "../lib/models";

import ModelsGrid from "../components/ModelsGrid";

export default async function ModelsPage() {
  const models = await getModels();

  return <ModelsGrid title="3D Models" models={models} />;
}
