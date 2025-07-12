import { Icon } from "@iconify/react/dist/iconify.js";
import { memo, useRef } from "react";

import clsx from "clsx";
import useClickOutside from "@/hooks/useClickOutside";
import { toPersianCurrency } from "@/utils/numberToRial";
import useBasketTotalInfo from "@/hooks/useBAsketTotalInfo";

interface BasketPaymentPreviewProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const BasketPaymentPreview = ({ open, setOpen }: BasketPaymentPreviewProps) => {
  const { basketInfo, companyVat } = useBasketTotalInfo();

  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setOpen(false));

  return (
    <div
      ref={ref}
      className={clsx(
        "w-[calc(100%-32px)] flex flex-col items-center top-0 right-0 left-0 mx-auto absolute transition-all duration-500",
        {
          "translate-y-[-30px]": !open,
          "translate-y-[-105%]": open,
        }
      )}
    >
      <div
        onClick={() => setOpen(!open)}
        className="bg-light-secondary  w-[80px] h-[30px] text-light-secondary-text  px-2 py-1 rounded-t-lg flex items-center justify-between"
      >
        {open ? "کمتر" : "بیشتر"}
        <span className="text-light-primary">
          <Icon
            icon="mingcute:up-line"
            width="24"
            height="24"
            style={{
              transition: "transform 0.5s ease-in-out",
              transform: open ? "rotateX(180deg)" : "rotateX(0deg)",
            }}
          />
        </span>
      </div>
      <div className="w-full flex flex-col gap-3 bg-light-secondary rounded-lg p-4">
        <div className="w-full flex items-center justify-between text-light-secondary-text">
          <span className="text-sm">تعداد اقلام</span>
          <span className="text-sm">{basketInfo.totalQuantity}</span>
        </div>
        <div className="w-full flex items-center justify-between text-light-secondary-text">
          <span className="text-sm">مجموع سفارش</span>
          <span className="text-sm">
            {toPersianCurrency(basketInfo.totalPrice)}
          </span>
        </div>
        <div className="w-full flex items-center justify-between text-light-secondary-text">
          <span className="text-sm">مجموع تخفیف</span>
          <span className="text-sm">
            {toPersianCurrency(basketInfo.totalDiscount)}
          </span>
        </div>
        <div className="w-full flex items-center justify-between text-light-secondary-text">
          <span className="text-sm">مالیات بر ارزش افزوده</span>
          <span className="text-sm">%{companyVat}</span>
        </div>
        <hr className="border-dashed border-light-gray" />
        <div className="w-full flex items-center justify-between text-light-secondary-text">
          <span className="text-sm">مجموع قابل پرداخت</span>
          <span className="text-sm">
            {toPersianCurrency(basketInfo.netPrice)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default memo(BasketPaymentPreview);
