import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";

const BasketPopup = () => {
  const navigate = useNavigate();
  const { depId } = useParams();
  const { basket } = useSelector((state: RootState) => state.basket);

  const calculateTotalPrice = () => {
    return basket.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const totalItems = basket.reduce((acc, item) => acc + item.quantity, 0);

  return basket.length > 0 ? (
    <div
      onClick={() => navigate(`/departments/${depId}/basket`)}
      className="w-full h-max  animate-fadeUp translate-y-full !duration-200 fixed bottom-8 left-0 right-0  z-50"
    >
      <div className="w-[90%]  h-full flex flex-col gap-4 p-4 mx-auto bg-light-primary rounded-lg">
        <div className="w-full h-full flex  items-center justify-between">
          <div className="w-max h-full flex items-center gap-2">
            <span className="size-8 text-sm flex items-center justify-center rounded-full bg-light-secondary text-light-secondary-text">
              {totalItems}
            </span>
            <span className="text-light-primary-text text-xs">
              مشاهده سبد خرید
            </span>
          </div>
          <span className="w-max text-light-primary-text">
            {calculateTotalPrice().toLocaleString("fa-IR")} تومان
          </span>
        </div>
      </div>
    </div>
  ) : null;
};

export default BasketPopup;
