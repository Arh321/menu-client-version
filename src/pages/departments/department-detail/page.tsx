import MenusContainer from "@/components/page-components/menu-page/menus-container";
import SplashScreen from "@/components/shared-components/loading/splash-screen";
import { Suspense } from "react";
const DepartmentPage = () => {
  return (
    <Suspense fallback={<SplashScreen />}>
      <MenusContainer />
    </Suspense>
  );
};

export default DepartmentPage;
