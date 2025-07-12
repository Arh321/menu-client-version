"use client";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

import { useEffect, useState } from "react";
import {
  BasketPaymentPreviewLazy,
  BasketProductsListContainerLazy,
  BasketSplitRouteButtonLazy,
  TotalPaymentCardLazy,
} from "./basket-lazy-components";
import { useNavigate, useParams } from "react-router";
const BasketContainer = () => {
  const { basket } = useSelector((state: RootState) => state.basket);
  const { depId } = useParams();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleBack = () => {
    navigate(`/departments/${depId}/products`);
  };

  useEffect(() => {
    if (basket.length === 0) {
      handleBack();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [basket.length]);

  return (
    <div className="w-full flex flex-col justify-between h-full ">
      <div className="w-full flex flex-col">
        <BasketProductsListContainerLazy basket={basket} open={open} />
        <BasketSplitRouteButtonLazy depId={depId as string} navigate={navigate} />
      </div>
      <div className="w-full fixed bottom-0 left-0 right-0 bg-light-background h-max">
        <div className="w-full relative">
          <BasketPaymentPreviewLazy open={open} setOpen={setOpen} />

          <TotalPaymentCardLazy />
        </div>
      </div>
    </div>
  );
};

export default BasketContainer;
