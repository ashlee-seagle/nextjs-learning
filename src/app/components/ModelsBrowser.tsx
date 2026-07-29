"use client";

import PaginationControls from "./PaginationControls";
import ModelsSearch from "../components/ModelsSearch";
import ModelsGrid from "../components/ModelsGrid";
import type { Model } from "../lib/types";
import { useTransition } from "react";

export default function ModelsBrowser({
  search,
  models,
  categoryName,
  totalPages,
  currentPage,
}: {
  search?: string;
  models: Model[];
  categoryName?: string;
  totalPages: number;
  currentPage: number;
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
      {totalPages > 1 && (
        <PaginationControls totalPages={totalPages} currentPage={currentPage} />
      )}
    </div>
  );
}
