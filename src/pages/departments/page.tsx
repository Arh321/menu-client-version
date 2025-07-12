

import DepartmentsList from "@/components/page-components/departments-page/departments-list";
import SplashScreen from "@/components/shared-components/loading/splash-screen";
import { Suspense } from "react";

const DepartmentsListPage = () => {
  return (
    <Suspense fallback={<SplashScreen />}>
      <div className="flex flex-col gap-4  h-full relative ">
        <DepartmentsList />
      </div>
    </Suspense>
  );
};

export default DepartmentsListPage;
