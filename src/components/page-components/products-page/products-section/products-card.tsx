import { ISearchedProduct } from "@/types/products/products";
import ProductCardButton from "./product-card-button";
import { Product } from "@/types/menu/menu-types";
import ProductPrice from "./product-price";
import { useNavigate, useParams } from "react-router";
import ImageWithLoader from "@/components/shared-components/image-with-loader/image-with-loader";

interface IProductsCardProps {
  product: Product | ISearchedProduct;
  isSearch?: boolean;
}

const ProductsCard = ({ product }: IProductsCardProps) => {
  const navigate = useNavigate();
  const { depId } = useParams();

  // Helper functions to handle different product types
  const getProductId = (product: Product | ISearchedProduct) => {
    return "product_id" in product ? product.product_id : product.id;
  };

  const getProductName = (product: Product | ISearchedProduct) => {
    return "name" in product ? product.name : product.title;
  };

  const getProductImage = (product: Product | ISearchedProduct) => {
    if ("thumbnail" in product && product.thumbnail?.url) {
      return product.thumbnail.url;
    }
    if ("image_url" in product) {
      return product.image_url;
    }
    return "";
  };

  const productImage = getProductImage(product);
  const productName = getProductName(product);
  const productId = getProductId(product);

  return (
    <div className="w-full h-full flex gap-4 bg-light-secondary rounded-lg shadow-md p-2 relative">
      <div className="w-max flex h-max flex-col items-center gap-4">
        <div
          role="button"
          onClick={() => {
            navigate(`/departments/${depId}/products/${productId}`);
          }}
          className="!size-[90px] bg-white rounded-lg shadow-md overflow-hidden"
        >
          <ImageWithLoader
            src={productImage}
            alt={productName}
            width={90}
            height={90}
            imageClass="w-full h-full object-cover"
          />
        </div>
        <ProductCardButton product={product} />
      </div>
      <div
        role="button"
        onClick={() => {
          navigate(`/departments/${depId}/products/${productId}`);
        }}
        dir="rtl"
        className="w-full"
      >
        <div className="w-full h-full flex flex-col gap-2 justify-between">
          <span className="w-full line-clamp-2 overflow-hidden text-ellipsis text-light-secondary-text font-Yekan-Medium text-base">
            {productName}
          </span>
          <span className="w-full line-clamp-2 overflow-hidden text-ellipsis text-light-gray self-end font-Yekan-light font-[300] text-sm">
            {productName}
          </span>
          <span className="w-max self-end">
            <ProductPrice price={product.price} discount={product.discount} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
