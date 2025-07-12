"use client";
import useThemeConfig from "@/hooks/useThemeConfig";

import WelcomeModal from "./welcome-modal";
import { Suspense } from "react";
import useWelcome from "@/hooks/useWelcome";

import { Outlet } from "react-router";
import NotFoundComponent from "@/components/page-components/not-found-page/not-found-component";
import SplashScreen from "@/components/shared-components/loading/splash-screen";
const ConfigLayout = () => {
  const { isLoading, isError, isRefetching, welcomeModal, setWelcomeModal } =
    useThemeConfig();
  useWelcome();

  if (isError) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <NotFoundComponent title="مشکلی در بارگذاری صفحه رخ داده است" />
      </div>
    );
  }

  return isLoading || isRefetching ? (
    <SplashScreen />
  ) : (
    <Suspense fallback={<SplashScreen />}>
      <div className="w-full h-full">
        <Outlet />
        <WelcomeModal
          isOpen={welcomeModal.isOpen}
          title={welcomeModal.title}
          onOk={() => {
            setWelcomeModal({
              isOpen: false,
              title: "",
              description: "",
            });
            sessionStorage.setItem("welcomeModalShown", "true");
          }}
          onCancel={() => {
            setWelcomeModal({
              isOpen: false,
              title: "",
              description: "",
            });
            sessionStorage.setItem("welcomeModalShown", "true");
          }}
        />
      </div>
    </Suspense>
  );
};

export default ConfigLayout;
