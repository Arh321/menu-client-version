import { DepartmentItemSkeleton } from "../departments-page/department-item-skeleton";

const MenuListLoader = () => {
  return (
    <div className="flex flex-col gap-4 pb-4 px-4">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="w-full aspect-[16/7] xs:aspect-[16/3] ">
          <DepartmentItemSkeleton parentClass="!w-full !h-full !rounded-lg" />
        </div>
      ))}
    </div>
  );
};

export default MenuListLoader;
