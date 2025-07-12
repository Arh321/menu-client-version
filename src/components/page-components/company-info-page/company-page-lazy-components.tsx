import { DepartmentItemSkeleton } from "../departments-page/department-item-skeleton";
import { dynamic } from "@/components/shared-components/dynamic-import/dynamic-import";
const CompanyInfoLoading = () => {
    return <div className="w-full flex flex-col items-center gap-2 p-4">
        <DepartmentItemSkeleton parentClass="w-full aspect-[16/3] !h-auto !rounded-[10px]" />
        <DepartmentItemSkeleton parentClass="w-full aspect-[16/3] !h-auto !rounded-[10px]" />
        <DepartmentItemSkeleton parentClass="w-full aspect-[16/3] !h-auto !rounded-[10px]" />
        <DepartmentItemSkeleton parentClass="w-full aspect-[16/3] !h-auto !rounded-[10px]" />
    </div>
}
const CompanyFooterLoading = () => {
    return <div className="w-full grid grid-cols-4 gap-2 p-4">
        <DepartmentItemSkeleton parentClass="w-full col-span-2 !h-[40px] !rounded-[10px]" />
        <DepartmentItemSkeleton parentClass="w-full col-span-2 !h-[40px] !rounded-[10px]" />
    </div>
}



export const CompanyInfoItemLazy = dynamic(
    {
        importFn: () => import("./company-info-item"),
        fallBack: <DepartmentItemSkeleton parentClass="w-full aspect-[16/3] !h-auto !rounded-[10px]" />
    }
);
export const CompanyInfoItemsContainerLazy = dynamic(
    {
        importFn: () => import("./company-info-items"),
        fallBack: <CompanyInfoLoading />
    }
);
export const CompanyPageFooterLazy = dynamic({
    importFn: () => import("./company-page-footer"),
    fallBack: <CompanyFooterLoading />
});
