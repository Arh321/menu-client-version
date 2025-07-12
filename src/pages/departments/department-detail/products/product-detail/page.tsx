"use client";
import CTAButton from "@/components/shared-components/cta-button/cta-button";
import { useProducts } from "@/hooks/useSearchProducts";
import {
  addToBasket,
  incrementQuantity,
} from "@/redux/basket-slice/basketSlice";
import { decrementQuantity } from "@/redux/basket-slice/basketSlice";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Suspense, useMemo } from "react";
import { useNavigate, useParams } from "react-router";
import ImageWithLoader from "@/components/shared-components/image-with-loader/image-with-loader";
import ProductPrice from "@/components/page-components/products-page/products-section/product-price";
import SplashScreen from "@/components/shared-components/loading/splash-screen";

const ProductPage = () => {
  const { productId, depId } = useParams();
  const navigate = useNavigate();

  const { data: products, isLoading } = useProducts(
    undefined,
    Number(productId),
    undefined
  );
  const dispatch = useDispatch();
  const { basket } = useSelector((state: RootState) => state.basket);

  const productInBasket = useMemo(() => {
    const product = products?.data[0];
    if (!product) return null;
    const productId = "id" in product ? product.id : product.product_id;
    return basket.find((item) => item.productId === Number(productId));
  }, [basket, products]);

  if (isLoading)
    return (
      <div
        className="w-full h-screen flex justify-center items-center"
        role="status"
        aria-label="Loading"
      >
        <SplashScreen />
      </div>
    );

  if (products)
    return (
      <Suspense fallback={<SplashScreen />}>
        <main className="w-full h-full flex flex-col">
          <div className="w-full h-1/2 bg-white overflow-hidden relative">
            <div
              style={{
                background:
                  "linear-gradient(to top, var(--background-theme),transparent 30%, rgb(0,0,0,0.7) )",
              }}
              className="absolute top-0 w-full h-full z-[2]"
              aria-hidden="true"
            ></div>
            <ImageWithLoader
              src={products.data[0].image_url}
              alt={products.data[0].name}
              width={110}
              height={110}
              imageClass="w-full h-full object-cover"
            />
          </div>
          <section className="w-full h-1/2 flex flex-col justify-evenly p-4">
            <h1 className="w-full flex">
              <span className="text-light-secondary-text  font-Yekan-Medium text-base">
                {products.data[0].name}
              </span>
            </h1>
            <div className="w-full max-h-[100px] overflow-y-auto no-scrollbar flex flex-col">
              <p className="text-light-secondary-text font-Yekan-Light text-sm">
                {products.data[0].description}
              </p>
            </div>
            <div className="w-full flex items-center justify-end">
              <span className="w-max self-end">
                <ProductPrice
                  price={products.data[0].price}
                  discount={products.data[0].discount}
                />
              </span>
            </div>
            <div className="w-full h-[40px] flex items-center justify-evenly">
              <CTAButton
                onClick={() =>
                  !productInBasket
                    ? dispatch(
                      addToBasket({
                        productId: Number(productId),
                        quantity: 1,
                        image: products.data[0].image_url,
                        title: products.data[0].name,
                        price: products.data[0].price,
                        discount: products.data[0].discount,
                      })
                    )
                    : navigate(`/departments/${depId}/basket`)
                }
                className="w-max py-1 px-4 h-full"
                aria-label="Add to cart"
              >
                {productInBasket ? "مشاهده سبد خرید" : "سفارش دهید"}
              </CTAButton>
              {productInBasket && (
                <div
                  className="w-max h-full  flex items-center animate-fadeIn"
                  role="group"
                  aria-label="Quantity controls"
                >
                  <CTAButton
                    className="text-sm !w-max p-[4px] h-full aspect-square !bg-light-primary !text-light-primary-text"
                    onClick={() =>
                      dispatch(incrementQuantity({ id: Number(productId) }))
                    }
                    aria-label="Increase quantity"
                  >
                    <Icon
                      icon="basil:plus-outline"
                      width="26"
                      height="26"
                      aria-hidden="true"
                    />
                  </CTAButton>
                  <span
                    aria-label="Current quantity"
                    className="text-light-secondary-text w-10 text-center"
                  >
                    {productInBasket.quantity}
                  </span>
                  <CTAButton
                    className="text-sm !w-max p-[4px] h-full aspect-square !bg-light-secondary !text-light-primary-text"
                    onClick={() =>
                      dispatch(decrementQuantity({ id: Number(productId) }))
                    }
                    aria-label="Decrease quantity"
                  >
                    <Icon
                      icon="jam:minus"
                      width="26"
                      height="26"
                      aria-hidden="true"
                    />
                  </CTAButton>
                </div>
              )}
            </div>
          </section>
        </main>
      </Suspense>
    );
};

export default ProductPage;
