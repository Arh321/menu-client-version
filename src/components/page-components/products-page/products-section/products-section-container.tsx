import { Category } from "@/types/menu/menu-types";
import ProductsCard from "./products-card";
import { Suspense } from "react";
import { Spin } from "antd";
import ProductsListHEader from "./products-list-header";
interface IProductsSectionContainerProps {
  category: Category[];
}

const ProductsSectionContainer = ({
  category,
}: IProductsSectionContainerProps) => {
  return (
    <div className="w-full flex flex-col gap-4 p-4">
      <Suspense fallback={<Spin />}>
        {category.map((category, index) => (
          <div key={index}>
            <ProductsListHEader category={category} />
            <div className="w-full flex flex-col gap-4">
              {category.products.map((product, index) => (
                <ProductsCard key={index} product={product} />
              ))}
            </div>
          </div>
        ))}
      </Suspense>
      {category.length === 0 && (
        <div className="w-full flex flex-col gap-4">
          <span className="text-light-secondary-text font-Yekan-Light text-base whitespace-nowrap px-4">
            هیچ محصولی یافت نشد
          </span>
        </div>
      )}
    </div>
  );
};

export default ProductsSectionContainer;
