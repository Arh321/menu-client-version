import { Icon } from "@iconify/react/dist/iconify.js";
import { memo } from "react";

const CompanyInfoItem = ({
  icon,
  title,
  onClick,
}: {
  icon: string;
  title: string;
  onClick: () => void;
}) => {
  return (
    <div
      role="button"
      onClick={onClick}
      className=" flex items-center gap-2  w-full aspect-[16/3] overflow-hidden "
    >
      <span className="size-3 border-2 border-light-white rounded-full"></span>
      <div className="bg-[rgb(0,0,0,0.8)] text-light-white flex items-center gap-2 h-full grow  rounded-[10px] px-4">
        <Icon icon={icon} width="24" height="24" />
        <span className="grow text-center">{title}</span>
      </div>
    </div>
  );
};

export default memo(CompanyInfoItem);
