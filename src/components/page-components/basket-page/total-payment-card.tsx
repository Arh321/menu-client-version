"use client";

import useBasketTotalInfo from "@/hooks/useBAsketTotalInfo";

import { toPersianCurrency } from "@/utils/numberToRial";
import { Button } from "antd";
import React, { memo, useState } from "react";

const TotalPaymentCard = () => {
  const isOpen = useState(true);
  const { basketInfo } = useBasketTotalInfo();

  //   useEffect(() => {}, []);
  return (
    <div className="bg-light-secondary relative z-[2] rounded-t-xl backdrop-blur-lg p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_-2px_4px_-1px_rgba(0,0,0,0.06)] text-base">
      <div className="flex flex-col justify-between gap-2 items-center ">
        <div className="flex gap-1 justify-between w-full">
          <span className="text-light-secondary-text">مبلغ پرداختی:</span>
          <span className="text-base font-Yekan-Light text-light-secondary-text">
            {toPersianCurrency(basketInfo.netPrice)}
            <span className="text-xs font-Yekan-Light text-light-gray pr-1">
              تومان
            </span>
          </span>
        </div>
        <div></div>
        {isOpen ? (
          <div className="flex items-center gap-2  max-w-full">
            <span className="size-4 rounded-full bg-light-primary"></span>
            <p className="text-center text-sm w-[80%] line-clamp-2 text-light-secondary-text !font-Yekan-Light">
              لطفا سفارش خود را به متصدی ثبت سفارش یا مجموعه اطلاع دهید.
            </p>
            <span className="size-4 rounded-full bg-light-primary"></span>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2 max-w-[60%]">
              <span className="size-4 rounded-full bg-light-primary"></span>
              <p className="text-center text-light-secondary-text !font-Yekan-Light">
                متاسفانه مجموعه در حال حاضر بسته است و قادر به دریافت سفارش
                نمیباشد.
              </p>
              <span className="size-4 rounded-full bg-light-primary"></span>
            </div>
            <Button variant="filled" type="default">
              ساعات کاری مجموعه
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default memo(TotalPaymentCard);
