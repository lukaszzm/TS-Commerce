import { CategoryLink } from "@/components/category-link";
import { getCategories } from "@/data/get-categories";

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <>
      {categories.map((category) => (
        <li key={category.id}>
          <CategoryLink {...category} />
        </li>
      ))}
    </>
  );
}
