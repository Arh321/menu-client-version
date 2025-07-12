import ImageWithLoader from "@/components/shared-components/image-with-loader/image-with-loader";
import { IBasketState } from "@/types/menu/menu-types";
import { toPersianCurrency } from "@/utils/numberToRial";
import { useMemo } from "react";
// import { useDispatch } from "react-redux";

interface ItemsToSplitProps {
  product: IBasketState;
}

const ItemsToSplit = ({ product }: ItemsToSplitProps) => {
  //   const dispatch = useDispatch();
  const image = useMemo(() => {
    return product.image ?? "";
  }, [product.image]);

  return (
    <div className="w-full h-max py-2 flex flex-col items-center justify-between relative">
      <div className="w-max flex flex-col items-center gap-4">
        <div className="size-[70px] rounded-[10px] overflow-hidden">
          <ImageWithLoader
            src={image}
            alt={product.title}
            width={70}
            height={70}
            imageClass="w-full h-full object-cover"
          />
        </div>
        <div className=" flex flex-col justify-between w-max">
          <span className="text-xs font-[300] font-Yekan-Regular text-light-secondary-text text-center">
            {product.title}
          </span>
          <span className="text-sm font-[300] font-Yekan-Light text-light-gray text-center">
            {toPersianCurrency(product.price)}
            <span className="text-xs font-Yekan-Light text-light-gray pr-1">
              تومان
            </span>
          </span>
        </div>
      </div>
      <span className="size-6 flex items-center justify-center rounded-full font-Yekan-Light bg-light-primary text-light-primary-text absolute top-2 left-2">
        {product.quantity}
      </span>
    </div>
  );
};

export default ItemsToSplit;
