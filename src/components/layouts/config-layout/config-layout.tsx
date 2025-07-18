import { Suspense } from "react";
import useWelcome from "@/hooks/useWelcome";

import { Outlet } from "react-router";

import SplashScreen from "@/components/shared-components/loading/splash-screen";
import { ThemeConfigProvider } from "./ThemeConfigContext";
import WelcomeModalWrapper from "../company-notice-modal/welcomeModalWrapper";
const ConfigLayout = () => {
  useWelcome();

  return (
    <Suspense fallback={<SplashScreen />}>
      <ThemeConfigProvider>
        <div className="w-full h-full max-w-[470px] mx-auto">
          <Outlet />
        </div>
        <WelcomeModalWrapper />
      </ThemeConfigProvider>
    </Suspense>
  );
};

export default ConfigLayout;
