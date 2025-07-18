import { Category } from "@/types/menu/menu-types";
import { useMemo, useRef } from "react";
import CategoryItem from "./categorie-item";
interface ICategoriesSectionContainerProps {
  categories: Category[];
  selectedCategory: number | null;
  setSelectedCategory: (categoryId: number) => void;
  setIsManualScroll: React.Dispatch<React.SetStateAction<boolean>>;
}

const CategoriesSectionContainer = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  setIsManualScroll,
}: ICategoriesSectionContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const handleCategoryClick = (categoryId: number) => {
    setIsManualScroll(false); // غیرفعال کردن اسکرول دستی موقتاً

    const target = document.getElementById(`category-header-${categoryId}`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });

      setSelectedCategory(categoryId); // دستی ست کردن active

      // بعد از اسکرول شدن، دوباره فعال کن دستی بودن
      setTimeout(() => {
        setIsManualScroll(true);
      }, 800); // بستگی به انیمیشن اسکرول داره
    }
  };
  const filteredCategories = useMemo(() => {
    return categories.filter((category) => category.category_id !== null);
  }, [categories]);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-x-auto scrollbar-hide sm-scrollbar"
    >
      <div className="w-full flex items-center  gap-4 px-6 pb-2 pt-2">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category) => (
            <CategoryItem
              key={category.category_id}
              category={category}
              handleCategoryClick={handleCategoryClick}
              selectedCategory={selectedCategory}
            />
          ))
        ) : (
          <div className="w-full h-10 flex items-center justify-center text-light-secondary-text">
            داده ای وجود ندارد
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoriesSectionContainer;
