import { ModelsLayoutProps } from "../types";
import CategoriesNav from "../components/CategoriesNav";

export default function ModelsLayout({ children }: ModelsLayoutProps) {
  return (
    <div>
      <CategoriesNav />
      {children}
    </div>
  );
}
