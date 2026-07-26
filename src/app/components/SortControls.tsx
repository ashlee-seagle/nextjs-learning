import SortButton from "./SortButton";

export default function SortControls() {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-600">Sort by:</span>
      <SortButton sortBy="alpha">A-Z</SortButton>
      <SortButton sortBy="popular">Popular</SortButton>
      <SortButton sortBy="recent">Most Recent</SortButton>
    </div>
  );
}
