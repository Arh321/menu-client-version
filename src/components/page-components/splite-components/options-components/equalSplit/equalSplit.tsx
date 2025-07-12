"use client";

import { useEqualSplit } from "./useParticipants";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { ParticipantsState } from "@/redux/participantsSlice/participantsSlice";
import { useMemo } from "react";

const EqualSplitComponent = () => {
  const { participants } = useSelector<RootState, ParticipantsState>(
    (state) => state.participants
  );
  const { basket } = useSelector((state: RootState) => state.basket);
  const basketInfo = useMemo(() => {
    return {
      totalPay: basket.reduce(
        (acc, curr) =>
          acc +
          (curr.price - (curr.price * curr.discount) / 100) * curr.quantity,
        0
      ),
    };
  }, [basket]);
  const splits = useEqualSplit(basketInfo.totalPay, participants);

  return (
    <div className=" rounded-xl max-w-md mx-auto space-y-4">
      <h2 className="text-lg font-bold text-center font-Yekan-Medium text-light-secondary-text">
        تقسیم مساوی 🧮
      </h2>

      <p className="text-gray-400 text-center font-Almarai-Regular">
        مبلغ کل سفارش:{" "}
        <span className="font-semibold">
          {basketInfo.totalPay.toLocaleString()} تومان
        </span>
      </p>

      {splits.length === 0 ? (
        <p className="text-center text-red-500">هنوز کسی اضافه نشده!</p>
      ) : (
        <ul className="space-y-2">
          {splits.map((p) => (
            <li
              key={p.id}
              className="flex justify-between items-center bg-light-secondary px-4 py-2 rounded-md"
            >
              <span className="text-light-secondary-text font-Yekan-Regular">
                {p.name}
              </span>
              <span className="text-light-secondary-text font-Yekan-Regular">
                {p.amount.toLocaleString()} تومان
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EqualSplitComponent;
