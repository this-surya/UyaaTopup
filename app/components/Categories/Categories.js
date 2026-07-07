import categories from "@/app/data/categories";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  return (
    <section className="bg-[#08111F] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="font-semibold text-violet-400">
            GAME CATEGORIES
          </span>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Browse by Categories
          </h2>

          <p className="mt-4 text-slate-400">
            Temukan game favoritmu berdasarkan kategori.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}