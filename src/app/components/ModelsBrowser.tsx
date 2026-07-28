"use client";

import ModelsSearch from "../components/ModelsSearch";
import ModelsGrid from "../components/ModelsGrid";
import type { Model } from "../lib/types";
import { useTransition } from "react";

export default function ModelsBrowser({
  search,
  models,
  categoryName,
}: {
  search?: string;
  models: Model[];
  categoryName?: string;
}) {
  const [isPending, startTransition] = useTransition();
  return (
    <div>
      <ModelsSearch
        search={search}
        startTransition={startTransition}
      ></ModelsSearch>
      <ModelsGrid
        models={models}
        search={search}
        categoryName={categoryName}
        isPending={isPending}
        startTransition={startTransition}
      ></ModelsGrid>
    </div>
  );
}
