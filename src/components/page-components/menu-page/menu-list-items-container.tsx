import { useMenus } from "@/hooks/useMenus";
import { memo, Suspense, useMemo } from "react";
import MenuListLoader from "./menu-list-loader";
import MemoizedMenuListEmpty from "./menu-list-empty";
import LazyMenuListMapItems from "./menu-page-lazy-components";
import { useParams } from "react-router";
import ErrorComponent from "@/components/shared-components/error-component/error-component";

interface MenuListItemsContainerProps {
  isGrid: boolean;
}

const MenuListItemsContainer: React.FC<MenuListItemsContainerProps> = ({
  isGrid,
}) => {
  const { depId } = useParams();

  const { data, isFetching, isError, refetch } = useMenus(Number(depId));

  const menus = useMemo(() => {
    return data?.result?.filter((menu) => menu.menu_id !== null);
  }, [data]);

  if (isFetching) return <MenuListLoader />;
  if (isError) {
    return <ErrorComponent refetch={() => refetch()} />;
  }
  return (
    <div className="flex flex-col gap-4 h-max pb-4 px-4">
      <div className="w-full h-max ">
        {menus && menus.length > 0 ? (
          <Suspense fallback={<MenuListLoader />}>
            <LazyMenuListMapItems depId={depId} isGrid={isGrid} menus={menus} />
          </Suspense>
        ) : (
          <MemoizedMenuListEmpty />
        )}
      </div>
    </div>
  );
};

export default memo(MenuListItemsContainer);
