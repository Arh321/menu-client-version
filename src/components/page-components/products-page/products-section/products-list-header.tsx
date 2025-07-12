import useIsInView from "@/hooks/useScrollStatus";
import { Category } from "@/types/menu/menu-types";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";

const ProductsListHEader = ({
  category,
  setSelectedCategory,
  tabScrolling,
}: {
  category: Category;
  setSelectedCategory: Dispatch<SetStateAction<Category | null>>;
  tabScrolling: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { isInView, hasPassedHeight } = useIsInView(
    ref as React.RefObject<HTMLElement>
  );
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);
  const handleSetCat = () => {
    if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);

    timeoutIdRef.current = setTimeout(() => {
      setSelectedCategory(category);
    }, 100);
  };
  useEffect(() => {
    if (isInView && hasPassedHeight && !tabScrolling) {
      handleSetCat();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView, hasPassedHeight, tabScrolling]);
  return (
    <h2
      ref={ref}
      id={category.category_id?.toString()}
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
