import style from "@/styles/skeleton-loader-style.module.css";
import clsx from "clsx";

interface DepartmentItemSkeletonProps {
  className?: string;
  parentClass?: string;
}

const DepartmentItemSkeleton: React.FC<DepartmentItemSkeletonProps> = ({
  className,
  parentClass,
}) => {
  return (
    <div
      className={clsx(
        "w-full h-[80px] lxs:h-[85px] xs:h-[90px] bg-light-secondary rounded-full overflow-hidden",
        parentClass
      )}
    >
      <div className={clsx(style["skeleton"], className)}></div>
    </div>
  );
};

const DepartmentListSkeleton = () => {
  return (
    <div className="flex flex-col gap-3 justify-center">
      {Array.from({ length: 6 }).map((_, index) => (
        <DepartmentItemSkeleton key={index} />
      ))}
    </div>
  );
};

export { DepartmentListSkeleton, DepartmentItemSkeleton };
