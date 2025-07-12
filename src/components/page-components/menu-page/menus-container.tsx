"use client";
import { Suspense, useState } from "react";
import MenusListHeader from "./menus-list-header";
import MenuListLoader from "./menu-list-loader";
import MenuListItemsContainer from "./menu-list-items-container";
const MenusContainer = () => {
  const [isGrid, setIsGrid] = useState(false);

  return (
    <div className="w-full grow overflow-y-auto">
      <MenusListHeader isGrid={isGrid} setIsGrid={setIsGrid} />
      <Suspense fallback={<MenuListLoader />}>
        <MenuListItemsContainer isGrid={isGrid} />
      </Suspense>
    </div>
  );
};

export default MenusContainer;
