import { useQuery } from "@tanstack/react-query";
import { IHttpResult } from "@/types/http-result";
import { IMenu } from "@/types/menu/menu-types";
import { getMenus } from "@/services/productsService";

export const useMenus = (depId?: number) => {
  return useQuery<IHttpResult<IMenu[]>>({
    queryKey: ["menus", depId],
    queryFn: () => getMenus({ branch_id: depId }),
    staleTime: 1000 * 60 * 10, // کش ۱۰ دقیقه‌ای
    gcTime: 1000 * 60 * 30,
  });
};
