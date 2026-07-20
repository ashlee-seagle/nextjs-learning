import Form from "next/form";
import { getModels } from "../lib/models";
import { ModelsPageProps } from "../types";

import ModelsGrid from "../components/ModelsGrid";

export default async function ModelsPage({ searchParams }: ModelsPageProps) {
  const models = await getModels();

  const { query } = await searchParams;

  const normalizedQuery = query?.trim().toLowerCase() ?? "";

  const filteredModels = normalizedQuery
    ? models.filter(
        (item) =>
          item.name.toLowerCase().includes(normalizedQuery) ||
          item.description.toLowerCase().includes(normalizedQuery),
      )
    : models;

  return (
    <div>
      <Form action={"/3d-models"}>
        <input
          type="text"
          name="query"
          placeholder="E.g. dragon"
          autoComplete="off"
          defaultValue={query}
          className="w-full py-3 pl-5 pr-5 text-sm placeholder-gray-500 bg-white border border-[#606060] rounded-full focus:border-[#606060] focus:outline-none focus:ring-0 md:text-base"
        />
      </Form>
      <ModelsGrid title="3D Models" models={filteredModels} />
    </div>
  );
}
