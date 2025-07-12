import ImageWithLoader from "@/components/shared-components/image-with-loader/image-with-loader";
import { IMenu } from "@/types/menu/menu-types";

interface IMenuItemProps {
  menu: IMenu;
}

const MenuItem = ({ menu }: IMenuItemProps) => {
  return (
    <div className="w-full h-full  relative ">
      <div className="w-full h-full absolute top-0 left-0">
        <ImageWithLoader
          src={menu.menu_image}
          alt={menu.menu_name}
          imageClass="w-full h-full object-cover"
        />
      </div>
      <span className="w-full h-full bg-[rgba(0,0,0,0.4)] flex items-center  justify-center text-center px-2 text-white font-Yekan-Medium text-sm z-[2] absolute bottom-0 left-0">
        {menu.menu_name}
      </span>
    </div>
  );
};

export default MenuItem;
