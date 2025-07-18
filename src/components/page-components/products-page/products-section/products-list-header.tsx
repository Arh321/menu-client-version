import { Category } from "@/types/menu/menu-types";

const ProductsListHEader = ({ category }: { category: Category }) => {
  return (
    <h2
      id={`category-header-${category.category_id?.toString()}`}
      data-category-id={category.category_id?.toString()}
      className="text-2xl font-bold flex items-center gap-2 my-4"
    >
      <div
        style={{
          background: "linear-gradient(to left, var(--white), transparent)",
        }}
        className=" w-full h-[1px]"
      />
      <span className="text-light-secondary-text font-[300] font-Yekan-Medium text-base whitespace-nowrap px-4">
        {category.category_name}
      </span>
      <div
        style={{
          background: "linear-gradient(to right,  var(--white), transparent)",
        }}
        className=" w-full h-[1px]"
      />
    </h2>
  );
};

export default ProductsListHEader;
