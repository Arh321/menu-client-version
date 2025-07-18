import clsx from "clsx";
import BasketProductList from "./basket-product-list";
import { IBasketState } from "@/types/menu/menu-types";
import { memo } from "react";

interface BasketProductsListContainerProps {
  open: boolean;
  basket: IBasketState[];
}

const BasketProductsListContainer: React.FC<
  BasketProductsListContainerProps
> = ({ open, basket }) => {
  return (
    <div
      className={clsx(
        "flex flex-col gap-4 transition-[height] duration-500 overflow-hidden relative",
        {
          "h-[360px] sm:h-[260px]": !open,
          "h-[200px]": open,
        }
      )}
    >
      <div className="flex flex-col gap-3 overflow-y-auto pb-10 h-full w-full">
        {basket.map((product, index) => (
          <BasketProductList key={index} product={product} />
        ))}
      </div>
      <div
        style={{
          background:
            "linear-gradient(to top, var(--background-theme), transparent)",
        }}
        className="h-6 absolute bottom-0 left-0 right-0 z-[2]"
      ></div>
    </div>
  );
};

export default memo(BasketProductsListContainer);
