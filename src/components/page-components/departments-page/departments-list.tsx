import useSearchDepartments from "@/hooks/useSearchDepartments";
import DepartmentsListContainer from "./departments-list-container";
import { Suspense } from "react";
import { DepartmentListSkeleton } from "./department-item-skeleton";
import CTAInput from "@/components/shared-components/cta-input/cta-input";

const DepartmentsList = () => {
  const { search, debouncedSearch, handleSearch, setSearch } =
    useSearchDepartments();

  return (
    <div className="flex flex-col gap-3 w-full px-4 pb-4 h-full">
      <div className="w-full h-max flex justify-center items-center gap-2 p-2 rounded-[6px] border border-light-gray hover:border-light-primary/60 transition-all focus-within:border-light-primary/60">
        <CTAInput
          placeholder="جستجو مجموعه ها"
          haveBorder={false}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            handleSearch(e.target.value);
          }}
        />
      </div>
      <span className="self-start w-full text-white text-center h-max font-Yekan-Bold text-2xl border-gradient-secondary pb-2 border-b border-light-gray">
        شعبه ها
      </span>
      <Suspense fallback={<DepartmentListSkeleton />}>
        <DepartmentsListContainer debouncedSearch={debouncedSearch} />
      </Suspense>
    </div>
  );
};

export default DepartmentsList;
