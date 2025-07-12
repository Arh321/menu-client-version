import { dynamic } from "@/components/shared-components/dynamic-import/dynamic-import";
import MenuListLoader from "./menu-list-loader";
const LazyMenuListMapItems = dynamic({
    importFn: () => import("./menu-list-map"),
    fallBack: <MenuListLoader />,
});
export default LazyMenuListMapItems;
