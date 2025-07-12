import useBasketTotalInfo from "@/hooks/useBAsketTotalInfo";
import { RootState } from "@/redux/store";
import { toPersianCurrency } from "@/utils/numberToRial";
import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";

const SpliteMEthodResults = () => {
  const { basketInfo, companyVat } = useBasketTotalInfo();

  const { participants } = useSelector(
    (state: RootState) => state.participants
  );
  const { sharedItems, products } = useSelector(
    (state: RootState) => state.itemSplitSlice
  );

  const calculateNetPrice = useCallback(
    (price: number, discount: number) => {
      const total = price - (price * discount) / 100;
      return total + total * (Number(companyVat ?? 0) / 100);
    },
    [companyVat]
  );

  const result = useMemo(() => {
    const resultList: Record<
      string,
      { id: number | string; name: string; payPrice: number }
    > = {};

    const allParticipants = [
      ...participants,
      {
        id: "1000",
        name: "همه",
      },
    ];

    sharedItems.forEach((shared) => {
      const findProduct = products.find(
        (pr) => pr.productId === shared.productId
      );
      if (!findProduct) return;

      const allShares = shared.sharedBetween.reduce(
        (prev, curr) => (prev += curr.quantity),
        0
      );
      shared.sharedBetween.forEach((person) => {
        const participant = allParticipants.find((p) => p.id === person.id);
        if (!participant) return;

        if (!resultList[participant.id]) {
          resultList[participant.id] = {
            id: participant.id,
            name: participant.name,
            payPrice: 0,
          };
        }

        resultList[participant.id].payPrice +=
          (calculateNetPrice(findProduct.price, findProduct.discount) *
            person.quantity) /
          allShares;
      });
    });

    const allItemShare = resultList["1000"];
    const finalList = Object.values(resultList).filter(
      (item) => item.id !== "1000"
    );

    if (allItemShare) {
      const sharedAmount = allItemShare.payPrice / participants.length;
      participants.forEach((person) => {
        const findPesron = finalList.find((pesr) => pesr.id == person.id);
        if (!findPesron) {
          finalList.push({
            id: person.id,
            name: person.name,
            payPrice: sharedAmount,
          });
        } else {
          findPesron.payPrice += sharedAmount;
        }
      });
    }

    return finalList;
  }, [participants, sharedItems, products, calculateNetPrice]);

  return (
    <div className="w-full h-full mx-auto flex flex-col gap-4">
      <h2 className="text-lg text-center font-Yekan-Medium text-light-secondary-text">
        تقسیم براساس سهم
      </h2>
      {result.length === 0 ? (
        <p className="text-center text-red-500">هنوز کسی اضافه نشده!</p>
      ) : (
        <ul className="w-full grow flex flex-col gap-2 overflow-y-auto">
          {result.map((p, index) => (
            <li
              style={{
                opacity: 0,
                transform: "translateY(100%)",
                animationDelay: `${index * 30}ms`,
              }}
              key={p.id}
              className="flex justify-between items-center bg-light-secondary px-4 py-2 rounded-md animate-fadeUp"
            >
              <span className="text-light-secondary-text font-Yekan-Regular">
                {p.name}
              </span>
              <span className="text-light-secondary-text font-Yekan-Regular">
                {toPersianCurrency(p.payPrice)} تومان
              </span>
            </li>
          ))}
        </ul>
      )}
      <div className="w-full flex flex-col gap-4 bg-light-secondary rounded-lg p-4 font-Yekan-Regular">
        <div className="w-full flex items-center justify-between text-light-secondary-text">
          <span className="text-sm">تعداد اقلام</span>
          <span className="text-sm">{basketInfo.totalQuantity}</span>
        </div>
        <div className="w-full flex items-center justify-between text-light-secondary-text">
          <span className="text-sm">مجموع سفارش</span>
          <span className="text-sm">
            {toPersianCurrency(basketInfo.totalPrice)} تومان
          </span>
        </div>
        <div className="w-full flex items-center justify-between text-light-secondary-text">
          <span className="text-sm">مجموع تخفیف</span>
          <span className="text-sm">
            {toPersianCurrency(basketInfo.totalDiscount)} تومان
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
            {toPersianCurrency(basketInfo.netPrice)} تومان
          </span>
        </div>
      </div>
    </div>
  );
};

export default SpliteMEthodResults;
