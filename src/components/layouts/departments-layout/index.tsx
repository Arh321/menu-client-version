import HeaderContainer from "@/components/shared-components/header/header-container";
import { Outlet } from "react-router";

const DepartmentLayout = () => {
    return (
        <div className="w-full h-full flex flex-col gap-4 bg-light-background ">
            <HeaderContainer />
            <Outlet />
        </div>
    );
};

export default DepartmentLayout;
