import { RootState } from "@/redux/store";
import { useMemo } from "react";
import { useSelector } from "react-redux";

const useBasketTotalInfo = () => {
  const { basket } = useSelector((state: RootState) => state.basket);
  const { companyVat } = useSelector((state: RootState) => state.company);

  const basketInfo = useMemo(() => {
    const totalPrice = basket.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );
    const totalQuantity = basket.reduce((acc, curr) => acc + curr.quantity, 0);
    const totalDiscount = basket.reduce(
      (acc, curr) => acc + ((curr.price * curr.discount) / 100) * curr.quantity,
      0
    );
    const netPrice =
      totalPrice -
      totalDiscount +
      Number(totalPrice - totalDiscount) * (Number(companyVat ?? 0) / 100);

    return {
      totalPrice,
      totalQuantity,
      totalDiscount,
      netPrice,
    };
  }, [basket, companyVat]);

  return { basketInfo, companyVat, basket };
};

export default useBasketTotalInfo;
