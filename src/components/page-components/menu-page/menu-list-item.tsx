import { IMenu } from "@/types/menu/menu-types";

import { memo } from "react";
import clsx from "clsx";
import { Link } from "react-router";
import ImageWithLoader from "@/components/shared-components/image-with-loader/image-with-loader";

interface MenuListItemComponentProps {
  depId: string;
  menu: IMenu;
  isGrid: boolean;
}

const MenuListItemComponent: React.FC<MenuListItemComponentProps> = ({
  depId,
  menu,
  isGrid,
}) => {
  return (
    <Link
      to={`/departments/${depId}/products`}
      prefetch="intent"
      onClick={() => {
        localStorage.setItem("selectedMenuId", menu.menu_id.toString());
      }}
      className="w-full h-full "
    >
      <div className="w-full h-full flex justify-between items-center relative">
        <h2
          className={clsx(
            "text-light-primary-text flex flex-col gap-1 pr-1 absolute  right-0 transition-colors  z-[2]",
            {
              "bottom-4 w-max bg-linear-gradient-to-left": !isGrid,
              "bottom-0 w-full h-full bg-black/60 p-2 justify-center": isGrid,
            }
          )}
        >
          <span
            className={clsx("text-sm xs:text-lg font-Yekan-Regular", {
              "text-center w-full": isGrid,
            })}
          >
            {menu.menu_name}
          </span>
          {isGrid && (
            <div className="w-full px-2">
              <div className="border-gradient-secondary"></div>
            </div>
          )}
          <span
            className={clsx(
              "text-white text-xs xs:text-base  font-Yekan-Light",
              {
                "text-center w-full line-clamp-2 text-ellipsis overflow-hidden":
                  isGrid,
                "max-w-[130px] xs:max-w-full whitespace-nowrap overflow-hidden text-ellipsis":
                  !isGrid,
              }
            )}
          >
            {menu.menu_description}
          </span>
        </h2>
        <div className="w-full h-full absolute top-0 left-0">
          <ImageWithLoader
            src={menu.menu_image}
            alt={menu.menu_name}
            loading="lazy"
            fetchPriority="high"
            imageClass="object-cover w-full h-full"
          />
        </div>
      </div>
    </Link>
  );
};

const MemoizedMenuListItemComponent = memo(MenuListItemComponent);

export default MemoizedMenuListItemComponent;
