"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import SidebarComponent from "./sidebar-component";
import { useState } from "react";
import ProductHeader from "./header-components/product-page-header";
import CompanyHeader from "./header-components/company-info-header";
import MainHeader from "./header-components/main-header";
import SplitPageHeader from "./header-components/splite-page-header";
import { useLocation, useNavigate, useParams } from "react-router";
import { ICompany } from "@/types/company-type";

const HeaderContainer = () => {
  const { productId } = useParams();
  const { company, companyLogo } = useSelector(
    (state: RootState) => state.company
  );
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const isCompanyInfoPage = pathname === "/";
  const isProductPage = !!productId;
  const isInSplt = pathname.includes("split");

  return (
    <>
      {isProductPage ? (
        <ProductHeader navigate={navigate} />
      ) : isCompanyInfoPage ? (
        <CompanyHeader setOpen={setOpen} />
      ) : isInSplt ? (
        <SplitPageHeader
          navigate={navigate}
          companyLogo={companyLogo as string}
        />
      ) : (
        <MainHeader
          setOpen={setOpen}
          companyLogo={companyLogo as string}
          navigate={navigate}
        />
      )}
      <SidebarComponent
        open={open}
        onClose={() => setOpen(false)}
        company={company as ICompany}
        companyLogo={companyLogo as string}
      />
    </>
  );
};

export default HeaderContainer;
