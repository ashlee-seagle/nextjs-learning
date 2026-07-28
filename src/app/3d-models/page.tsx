import type { Model } from "../lib/types";
import { getModels } from "../lib/models";
import ModelsBrowser from "../components/ModelsBrowser";

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

  return <ModelsBrowser search={search} models={models}></ModelsBrowser>;
}
