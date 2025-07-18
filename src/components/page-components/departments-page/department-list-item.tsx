import React, { memo, Suspense, useRef } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { DepartmentItemSkeleton } from "./department-item-skeleton";
import ImageWithLoader from "@/components/shared-components/image-with-loader/image-with-loader";
import { useNavigate } from "react-router";
import style from "./department-item-style.module.css";
interface ProvidersCardProps {
  name: string;
  imageSrc: string;
  cardDestination: number;
  imageId: number;
  enName: string;
  index: number;
}

const ProvidersCard: React.FC<ProvidersCardProps> = ({
  name,
  imageSrc,
  cardDestination,
  imageId,
  enName,
  index,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/departments/${cardDestination}`);
  };

  return (
    <motion.div
      ref={ref}
      id={`department-list-item-${imageId}`}
      role="button"
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={clsx(
        "w-full h-[80px] lxs:h-[85px] xs:h-[90px] p-1 flex items-center relative cursor-pointer overflow-hidden animate-fadeIn rounded-full text-base font-Yekan-Bold bg-[#2D2D2D] hover:bg-[#3D3D3D]",
        style["container"]
      )}
      onClick={handleClick}
    >
      <Suspense
        fallback={
          <div className="w-[calc(80px-0.5rem)] aspect-square rounded-full">
            <DepartmentItemSkeleton className="!w-full !h-full rounded-full" />
          </div>
        }
      >
        <div className="w-[calc(80px-0.5rem)] absolute top-0 bottom-0 my-auto right-1 aspect-square rounded-full overflow-hidden image-container transition-all duration-500">
          <ImageWithLoader
            src={imageSrc}
            alt={`${name} pic`}
            loading="lazy"
            fetchPriority="low"
            imageClass="[&_img]:!object-cover w-full h-full"
            // loading="eager" // ← اگه تصویر خیلی مهمه، فعال کن!
          />
        </div>
      </Suspense>

      <div className="flex flex-col items-center h-full gap-1 xs:gap-2 justify-center grow z-[2] text-container">
        <span className="w-max h-max block lxs:text-base text-sm xs:text-xl font-Yekan-Medium text-white text-center transition-all duration-500">
          {name}
        </span>
        <span className="w-max h-max block lxs:text-xs xs:text-xs font-Yekan-Medium text-white text-center">
          {enName || "Rose Darvishi Hotel"}
        </span>
      </div>
    </motion.div>
  );
};

export default memo(ProvidersCard);
