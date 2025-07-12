import { IBasketState } from "@/types/menu/menu-types";
import ItemsToSplit from "./items-to-split-list";
import { ISharedBetween } from "@/redux/participantsSlice/itemSplitSlice";
import { Participant } from "@/redux/participantsSlice/participantsSlice";
import { useDroppable } from "@dnd-kit/core";
import { DeleteOutlined } from "@ant-design/icons";

const DroppableProduct = ({
  id,
  product,
  sharedItems,
  handleRemove,
}: {
  id: string;
  product: IBasketState;
  sharedItems: ISharedBetween[];
  handleRemove: (participant: Participant) => void;
}) => {
  const { isOver, setNodeRef } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      id={`dropp-${id}`}
      style={{
        background: isOver ? "rgb(25 202 62 / 26%)" : "var(--secondary)",
      }}
      className="w-full h-[174px] rounded-lg bg-light-secondary transition-colors duration-500 overflow-hidden"
    >
      <ItemsToSplit product={product} />
      <div className="w-full overflow-hidden pb-1 relative">
        <div className="w-full overflow-x-auto pl-2">
          <div className="w-max flex items-center gap-2 overflow-x-auto pl-2">
            {sharedItems.map((shared) => {
              return (
                <span
                  key={shared.id}
                  className="size-8 font-Yekan-Light text-xs rounded-full flex items-center justify-center text-white bg-black/30 relative"
                >
                  {shared.id == "1000" ? (
                    "همه"
                  ) : (
                    <span>
                      {shared.name.charAt(0)}&nbsp;{shared.name.charAt(1)}
                    </span>
                  )}
                  <span className="absolute top-0 left-0 text-light-secondary-text">
                    {shared.quantity}
                  </span>
                  <span
                    onClick={() =>
                      handleRemove({
                        id: shared.id,
                        name: shared.name,
                      })
                    }
                    className="absolute top-0 right-0 text-light-primary"
                  >
                    <DeleteOutlined />
                  </span>
                </span>
              );
            })}
          </div>
        </div>
        {sharedItems.length > 3 && (
          <div
            style={{
              background:
                "linear-gradient(60deg, var(--background-theme), transparent)",
            }}
            className="h-9 w-4 rounded-bl-lg absolute bottom-0 left-0 z-[2] animate-fadeIn"
          ></div>
        )}
      </div>
    </div>
  );
};

export default DroppableProduct;
