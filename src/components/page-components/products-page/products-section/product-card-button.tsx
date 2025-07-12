import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  decrementQuantity,
  incrementQuantity,
} from "@/redux/basket-slice/basketSlice";
import { Product } from "@/types/menu/menu-types";
import { RootState } from "@/redux/store";
import CTAButton from "@/components/shared-components/cta-button/cta-button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ISearchedProduct } from "@/types/products/products";

interface IProductCardButtonProps {
  product: Product | ISearchedProduct;
}

const ProductCardButton = ({ product }: IProductCardButtonProps) => {
  const { basket } = useSelector((state: RootState) => state.basket);
  const productId = "id" in product ? product.id : product.product_id;
  const productInBasket = basket.find((item) => item.productId === productId);
  const dispatch = useDispatch();

  const getProductImage = (product: Product | ISearchedProduct) => {
    if ("thumbnail" in product && product.thumbnail?.url) {
      return product.thumbnail.url;
    }
    if ("image_url" in product) {
      return product.image_url;
    }
    return "";
  };

  const getProductTitle = (product: Product | ISearchedProduct) => {
    return "title" in product ? product.title : product.name;
  };

  return (
    <div className="w-full h-[40px] flex items-end justify-center">
      {!productInBasket ? (
        <CTAButton
          onClick={() =>
            dispatch(
              addToBasket({
                productId: productId,
                quantity: 1,
                image: getProductImage(product),
                title: getProductTitle(product),
                price: product.price,
                discount: product.discount,
              })
            )
          }
          className="w-full h-max !bg-transparent !border border-light-primary !text-light-primary text-sm p-[2px]"
        >
          <Icon icon="basil:plus-outline" width="24" height="24" />
          <span>افزودن</span>
        </CTAButton>
      ) : (
        <div className="w-full justify-between flex items-center gap-2">
          <CTAButton
            className="text-sm p-[2px] w-max h-max border border-light-primary !text-light-primary !bg-transparent"
            onClick={() => dispatch(incrementQuantity({ id: productId }))}
          >
            <Icon icon="basil:plus-outline" width="24" height="24" />
          </CTAButton>
          <span className="text-light-secondary-text">
            {productInBasket.quantity}
          </span>
          <CTAButton
            className="text-sm p-[2px] w-max h-max border border-light-primaryText text-light-primaryText !bg-transparent"
            onClick={() => dispatch(decrementQuantity({ id: productId }))}
          >
            <Icon icon="jam:minus" width="24" height="24" />
          </CTAButton>
        </div>
      )}
    </div>
  );
};

export default ProductCardButton;
