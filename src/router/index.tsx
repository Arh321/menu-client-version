import { createBrowserRouter } from "react-router";
import {
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
  SplitPage,
} from "./lazy-route-import";
import SearchPage from "@/pages/departments/department-detail/search/page";

import { rootLoader } from "./rootLoader";
import RouteErrorComponent from "./routeErrorComponent";
import RouteLoaderWrapper from "./routeComponentLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RouteLoaderWrapper>
        <ConfigLayout />
      </RouteLoaderWrapper>
    ), // Wrapper for all routes
    loader: () => rootLoader(),
    errorElement: <RouteErrorComponent />,
    children: [
      {
        index: true,
        path: "",
        element: <Home />,
      },
      {
        path: "welcome",
        element: <WelcomePage />,
      },
      {
        path: "departments",
        element: <DepartmentLayout />,
        children: [
          {
            index: true,
            path: "",
            element: <DepartmentsListPage />,
          },
          {
            path: ":depId",
            element: <MainLayout />,
            children: [
              {
                index: true,
                path: "",
                element: <DepartmentPage />,
              },
              {
                path: "products",
                element: <MainLayout />,
                children: [
                  {
                    index: true,
                    path: "",
                    element: <ProductsListPage />,
                  },
                  {
                    index: true,
                    path: ":productId",
                    element: <ProductPage />,
                  },
                ],
              },
              {
                path: "basket",
                element: <MainLayout />,
                children: [
                  {
                    path: "",
                    index: true,
                    element: <BasketPage />,
                  },
                  {
                    path: "split",
                    element: <SplitPage />,
                  },
                ],
              },
              {
                path: "search",
                element: <SearchPage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
