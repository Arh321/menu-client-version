import { IDepartment } from "@/types/branches/branches";
import { DepartmentItemSkeleton } from "./department-item-skeleton";
import ProvidersCard from "./department-list-item";

import { useQuery } from "@tanstack/react-query";
import { IHttpResult } from "@/types/http-result";
import { memo, Suspense, useMemo } from "react";
import { getDepartments } from "@/services/departmentService";
import ErrorComponent from "@/components/shared-components/error-component/error-component";


interface DepartmentsListContainerProps {
  debouncedSearch: string;
}

const DepartmentsListContainer: React.FC<DepartmentsListContainerProps> = ({
  debouncedSearch,
}) => {
  const {
    data: shops,
    isFetching,
    isRefetchError,

    refetch,
  } = useQuery<IHttpResult<IDepartment[]>>({
    queryKey: ["departments"],
    queryFn: () => getDepartments({}),
  });

  const departments = useMemo(() => {
    return shops?.result?.filter((shop) =>
      shop.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  }, [debouncedSearch, shops]);

  if (isFetching)
    return (
      <div className="flex flex-col gap-3 justify-center">
        {Array.from({ length: 7 }).map((_, index) => (
          <DepartmentItemSkeleton key={index} />
        ))}
      </div>
    );

  if (isRefetchError) {
    return <ErrorComponent refetch={() => refetch()} />;
  }

  return (
    <div className="w-full overflow-y-auto overflow-x-hidden h-full pb-24">
      <div className="flex flex-col gap-3 w-full">
        {departments?.map((shop, index) => (
          <Suspense
            key={shop.branch_id} // key باید به عنوان prop پاس داده شود
            fallback={<DepartmentItemSkeleton />}
          >
            <ProvidersCard
              imageSrc={shop.image_url}
              imageId={shop.branch_id}
              name={shop.name}
              enName={shop.en_name}
              cardDestination={shop.branch_id}
              index={index}
            />
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default memo(DepartmentsListContainer);
