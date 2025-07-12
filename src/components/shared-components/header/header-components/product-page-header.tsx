import CTAButton from "@/components/shared-components/cta-button/cta-button";
import { LeftOutlined } from "@ant-design/icons";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Popover } from "antd";
import { useEffect, useState } from "react";
import { NavigateFunction, useParams } from "react-router";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductHeader = ({ navigate }: { navigate: NavigateFunction }) => {
  const { basket } = useSelector((state: RootState) => state.basket);
  const { depId } = useParams();
  const [open, setOpen] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          text: document.title,
          url: window.location.href,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        // Consider adding an accessible notification here
      } catch (error) {
        console.error("Error copying to clipboard:", error);
      }
    }
  };

  const totalItems = basket.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    if (totalItems > 0) {
      setOpen(true);
      const timer = setTimeout(() => {
        setOpen(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [totalItems]);

  return (
    <header className="w-full grid grid-cols-3 gap-4 items-center pt-4 px-4 fixed top-0 left-0 z-50 right-0 max-w-[768px] mx-auto">
      <div className="col-span-1 flex items-center gap-2">
        <CTAButton
          onClick={handleShare}
          className="!bg-transparent !p-2 !border-none !text-xl !w-max !text-white"
          aria-label="Share"
        >
          <Icon icon="mynaui:share" width="26" height="26" />
        </CTAButton>
        {totalItems > 0 && (
          <Popover
            content={"مشاهده سبد"}
            title={false}
            open={open}
            classNames={{
              body: "!bg-light-primary-hover font-Yekan-Regular [&_.ant-popover-inner-content]:!text-white",
            }}
          >
            <CTAButton
              onClick={() => navigate(`/departments/${depId}/basket`)}
              className="!bg-transparent !p-2 !border-none !text-xl !w-max !text-white relative animate-fadeIn"
              aria-label={`Shopping basket with ${totalItems} items`}
            >
              <span
                className="size-4 bg-red-600 absolute top-0 right-0 rounded-full"
                aria-hidden="true"
              ></span>
              <Icon icon="mage:basket" width="26" height="26" />
            </CTAButton>
          </Popover>
        )}
      </div>
      <div className="col-span-1 flex flex-col items-center gap-1"></div>

      <div className="col-span-1 flex justify-end">
        <CTAButton
          onClick={() => navigate(-1)}
          className="!bg-transparent !p-2 !border-none !text-2xl !w-max !text-white"
          aria-label="Go back"
        >
          <LeftOutlined />
        </CTAButton>
      </div>
    </header>
  );
};

export default ProductHeader;
