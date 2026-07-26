import ModelCard from "./ModelCard";
import type { Model } from "../lib/types";
import SortControls from "./SortControls";

export default function ModelsGrid({
  models,
  categoryName,
  search,
}: {
  models: Model[];
  categoryName?: string;
  search?: string;
}) {
  let title = "3D Models";
  if (categoryName) {
    title = categoryName;
  }
  if (search) {
    title = `Search results for "${search}"`;
  }
  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="flex flex-col gap-2 md:flex-row md:justify-between mb-8">
        <h1 className="mb-8 text-3xl font-bold">{title}</h1>
        <SortControls></SortControls>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {models.map((model) => (
          <ModelCard key={model.id} model={model}></ModelCard>
        ))}
      </div>
    </div>
  );
}
