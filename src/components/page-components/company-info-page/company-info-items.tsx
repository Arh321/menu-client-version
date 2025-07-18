import { Dispatch, memo, SetStateAction, Suspense } from "react";
import { CompanyInfoItemLazy } from "./company-page-lazy-components";
import { DepartmentItemSkeleton } from "../departments-page/department-item-skeleton";
import {
  ClockIcon,
  ContactOutlineIcon,
  MapIcon,
  SocialIcon,
} from "@/components/icons/icons-index";

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
      icon: (
        <ContactOutlineIcon
          width="28"
          height="28"
          color="var(--color-light-secondary-text)"
        />
      ),
      title: "ارتباط با ما",
      onClick: () => setOpenModals({ ...openModals, ContactUsDrawer: true }),
    },
    {
      icon: (
        <ClockIcon
          width="28"
          height="28"
          color="var(--color-light-secondary-text)"
        />
      ),
      title: "ساعات کاری",
      onClick: () => setOpenModals({ ...openModals, WorkTimesDrawer: true }),
    },
    {
      icon: (
        <SocialIcon
          width="28"
          height="28"
          color="var(--color-light-secondary-text)"
        />
      ),
      title: "شبکه های اجتماعی",
      onClick: () => setOpenModals({ ...openModals, SocialModal: true }),
    },
    {
      icon: (
        <MapIcon
          width="28"
          height="28"
          color="var(--color-light-secondary-text)"
        />
      ),
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
