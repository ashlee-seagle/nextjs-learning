import Link from "next/link";
import { getAllCategories } from "../lib/categories";
import { Category } from "../types";
export default async function CategoriesNav() {
  const categories = await getAllCategories();
  console.log(categories);
  return (
    <nav>
      <Link href="/3d-models">All</Link>
      {categories.map((category: Category) => (
        <Link
          href={`/3d-models/categories/${category.slug}`}
          key={category.slug}
        >
          {category.displayName}
        </Link>
      ))}
    </nav>
  );
}
