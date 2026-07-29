import PaginationButton from "./PaginationButton";

export default function PaginationControls({
  totalPages,
  currentPage,
}: {
  totalPages: number;
  currentPage: number;
}) {
  return (
    <div className="flex justify-center gap-1">
      {currentPage > 2 && <PaginationButton page={1} label="<<" />}

      {currentPage > 1 && <PaginationButton page={currentPage - 1} />}

      <PaginationButton page={currentPage} isActive />

      {currentPage < totalPages && <PaginationButton page={currentPage + 1} />}

      {currentPage < totalPages - 1 && (
        <PaginationButton page={totalPages} label=">>" />
      )}
    </div>
  );
}
