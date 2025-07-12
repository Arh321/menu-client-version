import { dynamic } from "@/components/shared-components/dynamic-import/dynamic-import";
import LoadingPages from "@/components/shared-components/loading/pages-loading";
// Layouts
const ConfigLayout = dynamic({
    importFn: () => import("@/components/layouts/config-layout/config-layout"),
    fallBack: <LoadingPages />,
});
const DepartmentLayout = dynamic({
    importFn: () => import("@/components/layouts/departments-layout"),
    fallBack: <LoadingPages />,
});
const MainLayout = dynamic({
    importFn: () => import("@/components/layouts/Main-layout"),
    fallBack: <LoadingPages />,
});
// Pages
const Home = dynamic({
    importFn: () => import("@/pages/home/page"),
    fallBack: <LoadingPages />,
});
const WelcomePage = dynamic({
    importFn: () => import("@/pages/wellcome/page"),
    fallBack: <LoadingPages />,
});
const DepartmentPage = dynamic({
    importFn: () => import("@/pages/departments/department-detail/page"),
    fallBack: <LoadingPages />,
});
const DepartmentsListPage = dynamic({
    importFn: () => import("@/pages/departments/page"),
    fallBack: <LoadingPages />,
});
const ProductsListPage = dynamic({
    importFn: () => import("@/pages/departments/department-detail/products/page"),
    fallBack: <LoadingPages />,
});

const ProductPage = dynamic({
    importFn: () =>
        import(
            "@/pages/departments/department-detail/products/product-detail/page"
        ),
    fallBack: <LoadingPages />,
});
const BasketPage = dynamic({
    importFn: () => import("@/pages/departments/department-detail/basket/page"),
    fallBack: <LoadingPages />,
});
const SplitPage = dynamic({
    importFn: () => import("@/pages/departments/department-detail/basket/split/page"),
    fallBack: <LoadingPages />,
});

export {
    SplitPage,
    BasketPage,
    ConfigLayout,
    DepartmentLayout,
    DepartmentPage,
    DepartmentsListPage,
    Home,
    MainLayout,
    ProductPage,
    ProductsListPage,
    WelcomePage,
};
