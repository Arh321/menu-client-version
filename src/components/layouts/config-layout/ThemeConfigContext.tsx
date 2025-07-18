// File: contexts/ThemeConfigContext.tsx
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import { ICompany } from "@/types/company-type";
import { IHttpResult } from "@/types/http-result";
import { getCompanies } from "@/services/companyService";
import {
  setCompany,
  setCompanyLogo,
  setCompanyVat,
} from "@/redux/company-slice/companySlice";
import { initBasket } from "@/redux/basket-slice/basketSlice";
import {
  buildMetadata,
  injectMetadata,
} from "@/components/shared-components/matadata-components/metadata-builder";
import { applyThemeConfig } from "@/utils/themeConfigSetter";
import { useLocation } from "react-router";

interface ThemeConfigContextProps {
  data: IHttpResult<ICompany[]> | undefined;
  isLoading: boolean;
  isRefetching: boolean;
  isError: boolean;
  refetch: () => void;
  welcomeModal: {
    isOpen: boolean;
    title: string;
    description: string;
  };
  setWelcomeModal: React.Dispatch<
    React.SetStateAction<{
      isOpen: boolean;
      title: string;
      description: string;
    }>
  >;
}

const ThemeConfigContext = createContext<ThemeConfigContextProps | undefined>(
  undefined
);

export const ThemeConfigProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const {
    data: companyData,
    isLoading,
    isRefetching,
    isError,
    refetch,
  } = useSuspenseQuery<IHttpResult<ICompany[]>>({
    queryKey: ["companies"],
    queryFn: getCompanies,
    refetchOnWindowFocus: false,
  });

  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [welcomeModal, setWelcomeModal] = useState({
    isOpen: false,
    title: "",
    description: "",
  });

  const parsedConfig = useMemo(() => {
    return JSON.parse(companyData?.result?.[0]?.config ?? "{}");
  }, [companyData]);

  const checkWelcomeModal = useCallback(() => {
    const sessionKey = "welcomeModalShown";
    if (sessionStorage.getItem(sessionKey)) return;
    if (
      parsedConfig.generalConfigs?.hasWellcomeText &&
      pathname.includes("/departments")
    ) {
      requestAnimationFrame(() => {
        setTimeout(() => {
          setWelcomeModal({
            isOpen: true,
            title: parsedConfig.generalConfigs.wellcomeText,
            description: parsedConfig.generalConfigs.wellcomeTextPos,
          });
        }, 300);
      });
    }
  }, [parsedConfig, pathname]);

  const handleInitBasket = useCallback(() => {
    const basket = localStorage.getItem("basket");
    if (basket) dispatch(initBasket(JSON.parse(basket)));
  }, [dispatch]);

  useEffect(() => {
    checkWelcomeModal();
  }, [pathname]);

  useEffect(() => {
    if (!isLoading && !isRefetching) {
      applyThemeConfig(
        parsedConfig,
        (logo) => dispatch(setCompanyLogo(logo)),
        (vat) => dispatch(setCompanyVat(vat))
      );
      if (companyData?.result?.[0]) {
        dispatch(setCompany(companyData.result[0]));
        injectMetadata(buildMetadata(companyData.result[0]));
      }

      handleInitBasket();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [companyData, isLoading, isRefetching]);

  return (
    <ThemeConfigContext.Provider
      value={{
        data: companyData,
        isLoading,
        isRefetching,
        isError,
        refetch,
        welcomeModal,
        setWelcomeModal,
      }}
    >
      {children}
    </ThemeConfigContext.Provider>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export const useThemeConfigContext = () => {
  const context = useContext(ThemeConfigContext);
  if (!context)
    throw new Error(
      "useThemeConfigContext must be used within a ThemeConfigProvider"
    );
  return context;
};
