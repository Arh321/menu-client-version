"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { memo, useState } from "react";
import {
  CompanyInfoItemsContainerLazy,
  CompanyPageFooterLazy,
} from "./company-page-lazy-components";
import CompanyInfoDrawersContainer from "./company-info-drawers-container";
import ImageWithLoader from "@/components/shared-components/image-with-loader/image-with-loader";

const CompanyInfoContainer = () => {
  const [openModals, setOpenModals] = useState({
    WorkTimesDrawer: false,
    SocialModal: false,
    ContactUsDrawer: false,
  });

  const { company, companyLogo } = useSelector(
    (state: RootState) => state.company
  );

  return (
    <div
      style={{
        background:
          "linear-gradient(to top, var(--color-light-background-theme), rgb(0,0,0,0.9))",
      }}
      className="w-full h-full relative flex flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center gap-2">
        <div className="!rounded-full !size-[132px] overflow-hidden border-[0.7rem] border-[rgb(255,255,255,0.3)]">
          <ImageWithLoader
            src={companyLogo || ""}
            alt="company logo"
            width={100}
            height={100}
            imageClass="[&_img]:!object-contain w-full h-full flex items-center justify-center"
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-white text-sm font-Yekan-Medium">
            {company?.name}
          </span>
          <span className="text-gray-400 text-xs font-Yekan-Medium">
            {company?.description}
          </span>
        </div>
      </div>
      <CompanyInfoItemsContainerLazy
        openModals={openModals}
        setOpenModals={setOpenModals}
        latitude={company?.latitude}
        longitude={company?.longitude}
      />
      <CompanyPageFooterLazy />
      <CompanyInfoDrawersContainer
        openModals={openModals}
        setOpenModals={setOpenModals}
        social_media={company?.social_media}
      />
    </div>
  );
};

export default memo(CompanyInfoContainer);
