import { useMenus } from "./useMenus";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router";

const useManageProducts = () => {
  const { depId } = useParams();

  const { data, isError, refetch, isFetching } = useMenus(Number(depId));

  const menus = useMemo(() => {
    return [...(data?.result?.filter((menu) => menu.menu_id !== null) ?? [])];
  }, [data]);

  const [selectedMenu, setSelectedMenu] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  useEffect(() => {
    if (menus.length > 0 && selectedMenu === null) {
      const storedMenuId = localStorage.getItem("selectedMenuId");
      const menuFromStorage = menus.find(
        (menu) => menu.menu_id === Number(storedMenuId)
      );

      const initialMenu = menuFromStorage || menus[0];
      setSelectedMenu(initialMenu.menu_id);
      localStorage.setItem("selectedMenuId", initialMenu.menu_id.toString());
      setSelectedCategory(initialMenu.categories[0].category_id ?? 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menus]);

  useEffect(() => {
    if (selectedMenu) {
      const selected = menus.find((menu) => menu.menu_id === selectedMenu);
      if (selected) {
        setSelectedCategory(selected.categories[0].category_id ?? 0);
      }
    }
  }, [selectedMenu, menus]);
  return {
    menus,
    selectedMenu,
    setSelectedMenu,

    isError,
    refetch,
    isFetching,
    selectedCategory,
    setSelectedCategory,
  };
};

export default useManageProducts;
