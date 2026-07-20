"use client";

import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import { getAllCategories } from "../lib/categories";
import { Category } from "../types";

export default function CategoriesNav() {
  const categories = getAllCategories();
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 z-10 w-full bg-white border-b border-gray-200 md:fixed md:w-64 md:top-1/2 md:-translate-y-1/2 md:border-none">
      <div className="relative">
        <nav className="overflow-x-auto md:overflow-visible">
          <ul className="flex items-center gap-2 px-4 py-3 md:block md:px-0 md:py-0 md:space-y-2">
            <NavLink href="/3d-models" isActive={pathname === "/3d-models"}>
              All
            </NavLink>
            {categories.map((category: Category) => (
              <NavLink
                isActive={pathname === `/3d-models/categories/${category.slug}`}
                href={`/3d-models/categories/${category.slug}`}
                key={category.slug}
              >
                {category.displayName}
              </NavLink>
            ))}
          </ul>
        </nav>
        {/* Fading edge/gradient for horizontal scroll hint on mobile */}
        <div className="absolute top-0 right-0 w-8 h-full pointer-events-none bg-gradient-to-l from-white to-transparent md:hidden" />
      </div>
    </aside>
  );
}
