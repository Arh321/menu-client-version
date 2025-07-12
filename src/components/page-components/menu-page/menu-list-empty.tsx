import ImageWithLoader from "@/components/shared-components/image-with-loader/image-with-loader";
import { memo } from "react";

const MenuListEmpty = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center translate-y-1/2">
      <ImageWithLoader
        placeHolderSize={{
          height: 100,
          width: 100,
        }}
        alt="Logo"
        imageClass="w-[100px] h-[100px] z-10 !bg-transparent"
      />
      <h3 className="font-Yekan-Medium text-light-white">
        در حال حاضر در این شعبه منو فعالی وجود ندارد
      </h3>
    </div>
  );
};

const MemoizedMenuListEmpty = memo(MenuListEmpty);

export default MemoizedMenuListEmpty;
