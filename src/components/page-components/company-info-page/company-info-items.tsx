import { Dispatch, memo, SetStateAction, Suspense } from "react";
import { CompanyInfoItemLazy } from "./company-page-lazy-components";
import { DepartmentItemSkeleton } from "../departments-page/department-item-skeleton";

interface CompanyInfoItemsContainerProps {
  openModals: {
    WorkTimesDrawer: boolean;
    SocialModal: boolean;
    ContactUsDrawer: boolean;
  };
  setOpenModals: Dispatch<
    SetStateAction<{
      WorkTimesDrawer: boolean;
      SocialModal: boolean;
      ContactUsDrawer: boolean;
    }>
  >;
  latitude?: number;
  longitude?: number;
}

const CompanyInfoItemsContainer: React.FC<CompanyInfoItemsContainerProps> = ({
  openModals,
  setOpenModals,
  latitude,
  longitude,
}) => {
  const goToMap = () => {
    window.open(
      `https://maps.google.com/maps?q=${latitude},${longitude}`,
      "_blank"
    );
  };

  const companyInfoItems = [
    {
      icon: "teenyicons:contact-outline",
      title: "ارتباط با ما",
      onClick: () => setOpenModals({ ...openModals, ContactUsDrawer: true }),
    },
    {
      icon: "tabler:clock",
      title: "ساعات کاری",
      onClick: () => setOpenModals({ ...openModals, WorkTimesDrawer: true }),
    },
    {
      icon: "tabler:social",
      title: "شبکه های اجتماعی",
      onClick: () => setOpenModals({ ...openModals, SocialModal: true }),
    },
    {
      icon: "tabler:map-pin",
      title: "موقعیت مکانی",
      onClick: goToMap,
    },
  ];

  return (
    <div className="w-full flex flex-col items-center gap-2 p-4">
      {companyInfoItems.map((item) => (
        <Suspense
          key={item.title}
          fallback={
            <DepartmentItemSkeleton parentClass="w-full aspect-[16/3] !h-auto" />
          }
        >
          <CompanyInfoItemLazy {...item} />
        </Suspense>
      ))}
    </div>
  );
};

export default memo(CompanyInfoItemsContainer);
