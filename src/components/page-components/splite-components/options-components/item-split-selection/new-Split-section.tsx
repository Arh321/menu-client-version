import {
  DndContext,
  DragOverlay,
  useSensors,
  TouchSensor,
  useSensor,
  MouseSensor,
} from "@dnd-kit/core";
import { Icon } from "@iconify/react/dist/iconify.js";

import { Participant } from "@/redux/participantsSlice/participantsSlice";
import DroppableProduct from "./DroppableItem";
import DraggablePerson from "./draggable-component";
import CTAButton from "@/components/shared-components/cta-button/cta-button";
import { InfoCircleOutlined, RestOutlined } from "@ant-design/icons";
import { useItemSplitSelection } from "./useItemSplitSelection";
import SplitSectionGuidance from "./splite-section-guidance";
import { useEffect, useRef, useState } from "react";

// ستاپ سنسورها

const SplitModelContainer = ({
  handleChoseOption,
}: {
  handleChoseOption: () => void;
}) => {
  const [openGuidance, setOpenGuidance] = useState<boolean>(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref1 = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref2 = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref3 = useRef<any>(null);
  const {
    draggedPerson,
    setDraggedPerson,
    handleRemove,
    handleDragEnd,
    sharedItems,
    participantsWithAll,
    handleResetSharedItems,
    basketItemsInRow,
  } = useItemSplitSelection();
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        delay: 50, // کمی بیشتر تا درگ ناخواسته پیش نیاد
        tolerance: 5,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 50, // چون تاچ بیشتر با اسکرول تداخل داره، بهتره دیرتر فعال شه
        tolerance: 8, // برای انگشت دقیق‌تر باشه
      },
    })
  );

  useEffect(() => {
    if (basketItemsInRow.length > 0) {
      const element = document.getElementById(
        `dropp-${basketItemsInRow[0].productId}`
      );
      if (element) {
        ref2.current = element;
      }
    }
  }, [basketItemsInRow]);

  return (
    <>
      <DndContext
        sensors={sensors}
        onDragEnd={handleDragEnd}
        onDragStart={(event) => {
          const id = event.active.id;
          const dragged = participantsWithAll.find((p) => p.id === id);
          setDraggedPerson(dragged || null);
        }}
      >
        <div className="w-full h-full flex flex-col px-2 relative overflow-hidden animate-fadeIn">
          <div className="w-full h-full flex flex-col gap-2 ">
            <div
              ref={ref1}
              className="w-full flex flex-col gap-2 bg-light-background  pb-4"
            >
              <h2 className="mb-2 w-full text-center font-Yekan-Medium text-light-white flex items-center justify-center gap-2">
                <Icon icon="mynaui:user" width={14} height={14} />
                <span>دوستان</span>
              </h2>
              <div className="w-full flex items-center overflow-x-auto gap-4">
                {participantsWithAll.map((person) => (
                  <DraggablePerson
                    key={person.id}
                    id={person.id}
                    name={person.name}
                  />
                ))}
              </div>
            </div>
            <div className="w-full px-4 mb-4">
              <div className="w-full h-1 border-gradient-primary border-b-2 border-light-primary"></div>
            </div>
            <div className="w-full grow flex flex-col gap-2 overflow-y-auto pb-20">
              <div
                style={{
                  background:
                    "linear-gradient(to bottom, var(--background-theme), transparent)",
                }}
                className="w-full flex items-center justify-between pb-2 sticky top-0 z-10"
              >
                <h2 className="w-max text-center font-Yekan-Medium text-light-white flex items-center justify-center gap-2">
                  <Icon
                    icon="qlementine-icons:items-grid-16"
                    width="14"
                    height="14"
                  />
                  <span className="font-[300]">آیتم‌ها:</span>
                </h2>
                <div className="flex items-center gap-2">
                  <CTAButton
                    onClick={() => setOpenGuidance(true)}
                    className="!w-max p-2 !bg-blue-600/30 border-blue-600 !text-xs !font-Yekan-Light"
                  >
                    <InfoCircleOutlined />
                    <span className="pr-1">راهنمایی</span>
                  </CTAButton>
                  <CTAButton
                    onClick={handleResetSharedItems}
                    className="!w-max p-2 !bg-red-600/30 border-red-600 !text-xs !font-Yekan-Light"
                  >
                    <RestOutlined />
                    <span className="pr-1">بازنشانی</span>
                  </CTAButton>
                </div>
              </div>
              <div className="w-full grid grid-cols-2 gap-2">
                {basketItemsInRow.map((item) => (
                  <DroppableProduct
                    key={item.productId}
                    id={item.productId.toString()}
                    product={item}
                    sharedItems={
                      sharedItems.find(
                        (shared) => shared.productId == item.productId
                      )?.sharedBetween ?? []
                    }
                    handleRemove={(participant: Participant) =>
                      handleRemove({
                        product: item,
                        participant: participant,
                      })
                    }
                  />
                ))}
              </div>
            </div>
          </div>
          {/* دکمه نهایی */}
          <div
            style={{
              background:
                "linear-gradient(to top,var(--background-theme),transparent)",
            }}
            className="bottom-0 pb-4 right-0 left-0 absolute px-4"
            ref={ref3}
          >
            <CTAButton
              className=" !h-max !p-2 mx-auto"
              onClick={() => {
                handleChoseOption();
                setOpenGuidance(false);
              }}
            >
              ثبت و دیدن نتیجه
            </CTAButton>
          </div>
        </div>
        {/* فقط نمای شناور شخص درگ‌شده */}
        <DragOverlay>
          {draggedPerson ? (
            <div
              style={{
                padding: "8px 12px",
                background: "var(--background-theme)",
                border: "1px solid var(--primary)",
                borderRadius: "6px",
                boxShadow: "0 0 12px rgba(0,0,0,0.2)",
                userSelect: "none",
                pointerEvents: "none",
                touchAction: "none",
                width: "max-content",
              }}
            >
              <span className="flex items-center gap-2 *:text-light-secondary-text *:font-Yekan-Light">
                <Icon icon="uiw:user" width="20" height="20" />{" "}
                <span>{draggedPerson.name}</span>
              </span>
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
      <SplitSectionGuidance
        ref1={ref1}
        ref2={ref2}
        ref3={ref3}
        openGuidance={openGuidance}
        setOpenGuidance={setOpenGuidance}
      />
    </>
  );
};

export default SplitModelContainer;
