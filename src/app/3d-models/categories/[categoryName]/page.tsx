import {
  getCategoryBySlug,
  getDisplayNameFromSlug,
} from "@/app/lib/categories";
import { CategoryPageProps } from "@/app/types";

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoryName } = await params;
  const category = await getCategoryBySlug(categoryName);
  return <h1>{category.displayName}</h1>;
}
