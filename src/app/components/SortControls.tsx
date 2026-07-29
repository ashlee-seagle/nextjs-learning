import SortButton from "./SortButton";
import { TransitionStartFunction } from "react";

export default function SortControls({
  startTransition,
}: {
  startTransition: TransitionStartFunction;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-600">Sort by:</span>
      <SortButton startTransition={startTransition} sortBy="alpha">
        A-Z
      </SortButton>
      <SortButton startTransition={startTransition} sortBy="popular">
        Popular
      </SortButton>
      <SortButton startTransition={startTransition} sortBy="recent">
        Most Recent
      </SortButton>
    </div>
  );
}
