"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SortButton({
  children,
  sortBy,
}: {
  children: React.ReactNode;
  sortBy: string;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const isActive = searchParams.get("sortBy") === sortBy;
  function handleSort() {
    const urlSearchParams = new URLSearchParams(searchParams.toString());
    urlSearchParams.set("sortBy", sortBy);
    const url = `${pathname}?${urlSearchParams.toString()}`;
    router.push(url);
  }

  return (
    <button
      onClick={handleSort}
      className={`px-3 py-1.5 text-sm rounded-full border cursor-pointer ${isActive ? "text-white bg-orange-400 border-orange-400" : "border-gray-300 text-gray-700 hover:bg-gray-100"}`}
    >
      {children}
    </button>
  );
}
