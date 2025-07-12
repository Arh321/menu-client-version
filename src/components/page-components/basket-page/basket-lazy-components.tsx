import { dynamic } from "@/components/shared-components/dynamic-import/dynamic-import";
import { DepartmentItemSkeleton } from "../departments-page/department-item-skeleton";

const BasketProductsListContainerLoader = () => (
  <div className="w-full flex flex-col gap-3 overflow-y-auto pb-10 h-full">
    {Array.from({ length: 6 }).map((_, index) => (
      <DepartmentItemSkeleton
        key={index}
        parentClass="!w-full !h-[60px] !rounded-lg"
      />
    ))}
  </div>
)
const BasketSplitRouteButtonLoader = () => (
  <div className="w-full flex items-center justify-center h-full">
    <DepartmentItemSkeleton parentClass="!w-full !h-[60px] !rounded-lg" />
  </div>
)
const BasketPaymentPreviewLoader = () => (
  <div className="w-full flex items-center justify-center h-full">
    <DepartmentItemSkeleton parentClass="!w-full !h-[60px] !rounded-lg" />
  </div>
)

const BasketProductsListContainerLazy = dynamic(
  {
    importFn: () => import("./basket-products-list-container"),
    fallBack: <BasketProductsListContainerLoader />
  }
);
const BasketSplitRouteButtonLazy = dynamic(
  {
    importFn: () => import("./basket-split-route-button"),
    fallBack: <BasketSplitRouteButtonLoader />
  }
);

const BasketPaymentPreviewLazy = dynamic(
  {
    importFn: () => import("./basket-payment-preview"),
    fallBack: <BasketPaymentPreviewLoader />
  }
);
const TotalPaymentCardLazy = dynamic({
  importFn: () => import("./total-payment-card"),
  fallBack: <BasketPaymentPreviewLoader />
});

export {
  BasketProductsListContainerLazy,
  BasketSplitRouteButtonLazy,
  BasketPaymentPreviewLazy,
  TotalPaymentCardLazy,
};
